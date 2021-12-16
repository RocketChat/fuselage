#!/usr/bin/env node

import * as fs from 'fs';

import prettier from 'prettier';
import React from 'react';
import ReactDOMServer from 'react-dom/server.js';
import sharp from 'sharp';

import RocketChatLogo from '../../packages/logo/dist/cjs/RocketChatLogo/index.js';

const renderAssets = async () => {
  const html = ReactDOMServer.renderToStaticMarkup(
    React.createElement(RocketChatLogo.default)
  );

  const prettySvg = prettier.format(html, { parser: 'html' });
  const outputSvg = './dist/logo.svg';
  const outputPng = './dist/logo.png';

  fs.writeFileSync(outputSvg, prettySvg);

  sharp(Buffer.from(prettySvg), { density: 450 })
    .resize({ width: 1000 })
    .png()
    .toFile(outputPng);
};

renderAssets();
