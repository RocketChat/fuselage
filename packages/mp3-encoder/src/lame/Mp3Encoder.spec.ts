import { readFile, open } from 'fs/promises';
import { join } from 'path';

import { Mp3Encoder } from './Mp3Encoder';
import { WavHeader } from './WavHeader';

const leftPath = join('testdata', 'Left44100.wav');
const rightPath = join('testdata', 'Right44100.wav');

test('stereo 44100 kHz', async () => {
  const r1 = await readFile(leftPath);
  const r2 = await readFile(rightPath);
  const fd = await open(join('testdata', 'stereo.mp3'), 'w');

  const sampleBuf1 = new Uint8Array(r1).buffer;
  const sampleBuf2 = new Uint8Array(r2).buffer;
  const w1 = WavHeader.readHeader(new DataView(sampleBuf1));
  const w2 = WavHeader.readHeader(new DataView(sampleBuf2));

  const samples1 = new Int16Array(sampleBuf1, w1.dataOffset, w1.dataLen / 2);
  const samples2 = new Int16Array(sampleBuf2, w2.dataOffset, w2.dataLen / 2);
  let remaining1 = samples1.length;
  const remaining2 = samples2.length;
  expect(remaining1).toBe(remaining2);
  expect(w1.sampleRate).toBe(w2.sampleRate);

  const lameEnc = new Mp3Encoder(2, w1.sampleRate, 128);
  const maxSamples = 1152;

  let time = new Date().getTime();
  for (let i = 0; remaining1 >= maxSamples; i += maxSamples) {
    const left = samples1.subarray(i, i + maxSamples);
    const right = samples2.subarray(i, i + maxSamples);

    const mp3buf = lameEnc.encodeBuffer(left, right);
    if (mp3buf.length > 0) {
      // eslint-disable-next-line no-await-in-loop
      await fd.write(Buffer.from(mp3buf), 0, mp3buf.length);
    }
    remaining1 -= maxSamples;
  }
  const mp3buf = lameEnc.flush();
  if (mp3buf.length > 0) {
    await fd.write(Buffer.from(mp3buf), 0, mp3buf.length);
  }
  await fd.close();
  time = new Date().getTime() - time;
  console.log(`done in ${time}msec`);
});

test('full length', async () => {
  const r = await readFile(leftPath);
  const sampleBuf = new Uint8Array(r).buffer;
  const w = WavHeader.readHeader(new DataView(sampleBuf));
  const samples = new Int16Array(sampleBuf, w.dataOffset, w.dataLen / 2);
  let remaining = samples.length;
  const lameEnc = new Mp3Encoder();
  const maxSamples = 1152;

  const fd = await open(join('testdata', 'testjs2.mp3'), 'w');
  let time = new Date().getTime();
  for (let i = 0; remaining >= maxSamples; i += maxSamples) {
    const left = samples.subarray(i, i + maxSamples);
    const right = samples.subarray(i, i + maxSamples);

    const mp3buf = lameEnc.encodeBuffer(left, right);
    if (mp3buf.length > 0) {
      fd.write(Buffer.from(mp3buf), 0, mp3buf.length);
    }
    remaining -= maxSamples;
  }
  const mp3buf = lameEnc.flush();
  if (mp3buf.length > 0) {
    fd.write(Buffer.from(mp3buf), 0, mp3buf.length);
  }
  fd.close();
  time = new Date().getTime() - time;
  console.log(`done in ${time}msec`);
});
