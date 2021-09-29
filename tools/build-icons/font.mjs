import { Readable } from 'stream';
import svg2ttf from 'svg2ttf';
import SVGIcons2SVGFontStream from 'svgicons2svgfont';
import ttf2eot from 'ttf2eot';
import ttf2woff from 'ttf2woff';
import ttf2woff2 from 'ttf2woff2';
import { readSource, readJson } from 'tools-utils/files';
import { nextCharactersFor } from './glyphs.mjs';
import { mirrorSvg } from './svg.mjs';

const createReadableFromString = (content) => {
  const stream = new Readable();
  stream.push(content);
  stream.push(null);
  return stream;
};

export const createSvgBuffer = async (icons) => {
  const fontStream = new SVGIcons2SVGFontStream({
    fontName: 'RocketChat',
    fontHeight: 1024,
    normalize: true,
    log: () => {},
  });

  await Promise.all(
    icons.map(async ({ name, type, path }) => {
      const content = await readSource(path);
      const { start: startCharacter, end: endCharacter } =
        await nextCharactersFor(name, type);

      const stream = createReadableFromString(content);
      stream.metadata = {
        name,
        unicode: [startCharacter],
      };

      fontStream.write(stream);

      if (endCharacter) {
        const stream = createReadableFromString(await mirrorSvg(content));
        stream.metadata = {
          name: `${name}-mirror`,
          unicode: [endCharacter],
        };

        fontStream.write(stream);
      }
    })
  );

  return new Promise((resolve, reject) => {
    const buffers = [];

    fontStream
      .on('data', (data) => buffers.push(data))
      .on('error', (error) => reject(error))
      .on('finish', () => resolve(Buffer.concat(buffers)));

    fontStream.end();
  });
};

export const createTtfBuffer = async (svgBuffer) => {
  const pkg = await readJson('./package.json');
  return Buffer.from(
    svg2ttf(svgBuffer.toString('utf8'), {
      copyright: pkg.copyright,
      description: pkg.description,
      url: pkg.homepage,
      version: pkg.version.split('.').slice(0, 2).join('.'),
    }).buffer
  );
};

export const createWoffBuffer = async (ttfBuffer) =>
  Buffer.from(ttf2woff(new Uint8Array(ttfBuffer)).buffer);

export const createWoff2Buffer = async (ttfBuffer) =>
  Buffer.from(ttf2woff2(new Uint8Array(ttfBuffer)).buffer);

export const createEotBuffer = async (ttfBuffer) =>
  Buffer.from(ttf2eot(new Uint8Array(ttfBuffer)).buffer);
