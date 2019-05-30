const path = require('path');

const glob = require('glob');

const mirroredCharacters = [
  '\u0028', '\u0029', '\u003c', '\u003e', '\u005b', '\u005d', '\u007b', '\u007d', '\u00ab', '\u00bb', '\u0f3a',
  '\u0f3b', '\u0f3c', '\u0f3d', '\u169b', '\u169c', '\u2039', '\u203a', '\u2045', '\u2046', '\u207d', '\u207e',
  '\u208d', '\u208e', '\u2208', '\u2209', '\u220a', '\u220b', '\u220c', '\u220d', '\u221f', '\u223c', '\u223d',
  '\u2252', '\u2253', '\u2254', '\u2255', '\u2264', '\u2265', '\u2266', '\u2267', '\u2268', '\u2269', '\u226a',
  '\u226b', '\u226e', '\u226f', '\u2270', '\u2271', '\u2272', '\u2273', '\u2274', '\u2275', '\u2276', '\u2277',
  '\u2278', '\u2279', '\u227a', '\u227b', '\u227c', '\u227d', '\u227e', '\u227f', '\u2280', '\u2281', '\u2282',
  '\u2283', '\u2284', '\u2285', '\u2286', '\u2287', '\u2288', '\u2289', '\u228a', '\u228b', '\u228f', '\u2290',
  '\u2291', '\u2292', '\u22a2', '\u22a3', '\u22b0', '\u22b1', '\u22b2', '\u22b3', '\u22b4', '\u22b5', '\u22b6',
  '\u22b7', '\u22b8', '\u22c9', '\u22ca', '\u22cb', '\u22cc', '\u22d0', '\u22d1', '\u22d6', '\u22d7', '\u22d8',
  '\u22d9', '\u22da', '\u22db', '\u22dc', '\u22dd', '\u22de', '\u22df', '\u22e0', '\u22e1', '\u22e2', '\u22e3',
  '\u22e4', '\u22e5', '\u22e6', '\u22e7', '\u22e8', '\u22e9', '\u22f0', '\u22f1', '\u22f2', '\u22f3', '\u22f4',
  '\u22f5', '\u22f6', '\u22f7', '\u22f8', '\u22f9', '\u22fa', '\u22fb', '\u22fc', '\u22fd', '\u22fe', '\u2308',
  '\u2309', '\u230a', '\u230b', '\u2329', '\u232a', '\u2768', '\u2769', '\u276a', '\u276b', '\u276c', '\u276d',
  '\u276e', '\u276f', '\u2770', '\u2771', '\u2772', '\u2773', '\u2774', '\u2775', '\u27c3', '\u27c4', '\u27c5',
  '\u27c6', '\u27c8', '\u27c9', '\u27cb', '\u27cd', '\u27d3', '\u27d4', '\u27d5', '\u27d6', '\u27dc', '\u27dd',
  '\u27de', '\u27e2', '\u27e3', '\u27e4', '\u27e5', '\u27e6', '\u27e7', '\u27e8', '\u27e9', '\u27ea', '\u27eb',
  '\u27ec', '\u27ed', '\u27ee', '\u27ef', '\u2983', '\u2984', '\u2985', '\u2986', '\u2987', '\u2988', '\u2989',
  '\u298a', '\u298b', '\u298c', '\u298d', '\u298e', '\u298f', '\u2990', '\u2991', '\u2992', '\u2993', '\u2994',
  '\u2995', '\u2996', '\u2997', '\u2998', '\u29a2', '\u29a3', '\u29a4', '\u29a5', '\u29a6', '\u29a7', '\u29a8',
  '\u29a9', '\u29aa', '\u29ab', '\u29ac', '\u29ad', '\u29ae', '\u29af', '\u29c0', '\u29c1', '\u29cf', '\u29d0',
  '\u29d1', '\u29d2', '\u29d4', '\u29d5', '\u29d8', '\u29d9', '\u29da', '\u29db', '\u29e8', '\u29e9', '\u29f8',
  '\u29f9', '\u29fc', '\u29fd', '\u2a1e', '\u2a2b', '\u2a2c', '\u2a2d', '\u2a2e', '\u2a34', '\u2a35', '\u2a3c',
  '\u2a3d', '\u2a57', '\u2a58', '\u2a64', '\u2a65', '\u2a79', '\u2a7a', '\u2a7b', '\u2a7c', '\u2a7d', '\u2a7e',
  '\u2a7f', '\u2a80', '\u2a81', '\u2a82', '\u2a83', '\u2a84', '\u2a85', '\u2a86', '\u2a87', '\u2a88', '\u2a89',
  '\u2a8a', '\u2a8b', '\u2a8c', '\u2a8d', '\u2a8e', '\u2a8f', '\u2a90', '\u2a91', '\u2a92', '\u2a93', '\u2a94',
  '\u2a95', '\u2a96', '\u2a97', '\u2a98', '\u2a99', '\u2a9a', '\u2a9b', '\u2a9c', '\u2a9d', '\u2a9e', '\u2a9f',
  '\u2aa0', '\u2aa1', '\u2aa2', '\u2aa6', '\u2aa7', '\u2aa8', '\u2aa9', '\u2aaa', '\u2aab', '\u2aac', '\u2aad',
  '\u2aaf', '\u2ab0', '\u2ab1', '\u2ab2', '\u2ab3', '\u2ab4', '\u2ab5', '\u2ab6', '\u2ab7', '\u2ab8', '\u2ab9',
  '\u2aba', '\u2abb', '\u2abc', '\u2abd', '\u2abe', '\u2abf', '\u2ac0', '\u2ac1', '\u2ac2', '\u2ac3', '\u2ac4',
  '\u2ac5', '\u2ac6', '\u2ac7', '\u2ac8', '\u2ac9', '\u2aca', '\u2acb', '\u2acc', '\u2acd', '\u2ace', '\u2acf',
  '\u2ad0', '\u2ad1', '\u2ad2', '\u2ad3', '\u2ad4', '\u2ad5', '\u2ad6', '\u2ade', '\u2ae3', '\u2ae4', '\u2ae5',
  '\u2ae6', '\u2aec', '\u2aed', '\u2af7', '\u2af8', '\u2af9', '\u2afa', '\u2bfe', '\u2e02', '\u2e03', '\u2e04',
  '\u2e05', '\u2e09', '\u2e0a', '\u2e0c', '\u2e0d', '\u2e1c', '\u2e1d', '\u2e20', '\u2e21', '\u2e22', '\u2e23',
  '\u2e24', '\u2e25', '\u2e26', '\u2e27', '\u2e28', '\u2e29', '\u3008', '\u3009', '\u300a', '\u300b', '\u300c',
  '\u300d', '\u300e', '\u300f', '\u3010', '\u3011', '\u3014', '\u3015', '\u3016', '\u3017', '\u3018', '\u3019',
  '\u301a', '\u301b', '\ufe59', '\ufe5a', '\ufe5b', '\ufe5c', '\ufe5d', '\ufe5e', '\ufe64', '\ufe65', '\uff08',
  '\uff09', '\uff1c', '\uff1e', '\uff3b', '\uff3d', '\uff5b', '\uff5d', '\uff5f', '\uff60', '\uff62', '\uff63',
];


const getDirectional = () => glob.sync(`${ __dirname }/src/directional/*.svg`)
  .map((match, i) => ({
    name: path.basename(match, '.svg'),
    path: match,
    unicode: [mirroredCharacters[i]],
  }));

const getNeutral = () => glob.sync(`${ __dirname }/src/neutral/*.svg`)
  .map((match, i) => ({
    name: path.basename(match, '.svg'),
    path: match,
    unicode: [String.fromCodePoint(0xe000 + i)],
  }));

const getOther = () => glob.sync(`${ __dirname }/src/other/*.svg`)
  .map((match, i) => ({
    name: path.basename(match, '.svg'),
    path: match,
    unicode: [String.fromCodePoint(0xe000 + i)],
  }));

const getFontIcons = () => [
  ...getDirectional().map((icon, i) => ({ ...icon, unicode: [mirroredCharacters[i]] })),
  ...getNeutral().map((icon, i) => ({ ...icon, unicode: [String.fromCodePoint(0xe000 + i)] })),
].sort(({ name: a }, { name: b }) => a.localeCompare(b));

const getSvgIcons = () => [
  ...getDirectional(),
  ...getNeutral(),
  ...getOther(),
].sort(({ name: a }, { name: b }) => a.localeCompare(b));


module.exports.getFontIcons = getFontIcons;
module.exports.getSvgIcons = getSvgIcons;
