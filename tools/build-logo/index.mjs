#!/usr/bin/env node

import { writeFile } from 'node:fs/promises';

import prettier from 'prettier';
import React from 'react';
import ReactDOMServer from 'react-dom/server.js';
import sharp from 'sharp';

import RocketChatLogo from '../../packages/logo/dist/cjs/RocketChatLogo/index.js';

const renderAssets = async () => {
  const html = ReactDOMServer.renderToStaticMarkup(
    React.createElement(RocketChatLogo.default),
  );

  const prettySvg = await prettier.format(html, { parser: 'html' });
  const outputSvg = './dist/logo.svg';
  const outputPng = './dist/logo.png';

  await writeFile(outputSvg, prettySvg, { encoding: 'utf-8' });

  await sharp(Buffer.from(prettySvg), { density: 450 })
    .resize({ width: 1000 })
    .png()
    .toFile(outputPng);
};

renderAssets();
