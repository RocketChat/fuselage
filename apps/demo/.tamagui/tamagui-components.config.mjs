import { createRequire as __cr } from "module"; const require = __cr(import.meta.url);
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/react-native-web/node_modules/@babel/runtime/helpers/typeof.js
var require_typeof = __commonJS({
  "../../node_modules/react-native-web/node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
    function _typeof2(o) {
      "@babel/helpers - typeof";
      return module.exports = _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof2(o);
    }
    __name(_typeof2, "_typeof");
    module.exports = _typeof2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/react-native-web/node_modules/@babel/runtime/helpers/toPrimitive.js
var require_toPrimitive = __commonJS({
  "../../node_modules/react-native-web/node_modules/@babel/runtime/helpers/toPrimitive.js"(exports, module) {
    var _typeof2 = require_typeof()["default"];
    function toPrimitive(t, r) {
      if ("object" != _typeof2(t) || !t) return t;
      var e = t[Symbol.toPrimitive];
      if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof2(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === r ? String : Number)(t);
    }
    __name(toPrimitive, "toPrimitive");
    module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/react-native-web/node_modules/@babel/runtime/helpers/toPropertyKey.js
var require_toPropertyKey = __commonJS({
  "../../node_modules/react-native-web/node_modules/@babel/runtime/helpers/toPropertyKey.js"(exports, module) {
    var _typeof2 = require_typeof()["default"];
    var toPrimitive = require_toPrimitive();
    function toPropertyKey(t) {
      var i = toPrimitive(t, "string");
      return "symbol" == _typeof2(i) ? i : i + "";
    }
    __name(toPropertyKey, "toPropertyKey");
    module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/react-native-web/node_modules/@babel/runtime/helpers/defineProperty.js
var require_defineProperty = __commonJS({
  "../../node_modules/react-native-web/node_modules/@babel/runtime/helpers/defineProperty.js"(exports, module) {
    var toPropertyKey = require_toPropertyKey();
    function _defineProperty(e, r, t) {
      return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[r] = t, e;
    }
    __name(_defineProperty, "_defineProperty");
    module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/react-native-web/node_modules/@babel/runtime/helpers/objectSpread2.js
var require_objectSpread2 = __commonJS({
  "../../node_modules/react-native-web/node_modules/@babel/runtime/helpers/objectSpread2.js"(exports, module) {
    var defineProperty = require_defineProperty();
    function ownKeys(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r2) {
          return Object.getOwnPropertyDescriptor(e, r2).enumerable;
        })), t.push.apply(t, o);
      }
      return t;
    }
    __name(ownKeys, "ownKeys");
    function _objectSpread22(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
          defineProperty(e, r2, t[r2]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
          Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
        });
      }
      return e;
    }
    __name(_objectSpread22, "_objectSpread2");
    module.exports = _objectSpread22, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/react-native-web/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js
var require_objectWithoutPropertiesLoose = __commonJS({
  "../../node_modules/react-native-web/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"(exports, module) {
    function _objectWithoutPropertiesLoose8(r, e) {
      if (null == r) return {};
      var t = {};
      for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
      }
      return t;
    }
    __name(_objectWithoutPropertiesLoose8, "_objectWithoutPropertiesLoose");
    module.exports = _objectWithoutPropertiesLoose8, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/@react-native/normalize-colors/index.js
var require_normalize_colors = __commonJS({
  "../../node_modules/@react-native/normalize-colors/index.js"(exports, module) {
    "use strict";
    function normalizeColor4(color) {
      if (typeof color === "number") {
        if (color >>> 0 === color && color >= 0 && color <= 4294967295) {
          return color;
        }
        return null;
      }
      if (typeof color !== "string") {
        return null;
      }
      const matchers = getMatchers();
      let match;
      if (match = matchers.hex6.exec(color)) {
        return parseInt(match[1] + "ff", 16) >>> 0;
      }
      const colorFromKeyword = normalizeKeyword(color);
      if (colorFromKeyword != null) {
        return colorFromKeyword;
      }
      if (match = matchers.rgb.exec(color)) {
        return (parse255(match[1]) << 24 | // r
        parse255(match[2]) << 16 | // g
        parse255(match[3]) << 8 | // b
        255) >>> // a
        0;
      }
      if (match = matchers.rgba.exec(color)) {
        if (match[6] !== void 0) {
          return (parse255(match[6]) << 24 | // r
          parse255(match[7]) << 16 | // g
          parse255(match[8]) << 8 | // b
          parse1(match[9])) >>> // a
          0;
        }
        return (parse255(match[2]) << 24 | // r
        parse255(match[3]) << 16 | // g
        parse255(match[4]) << 8 | // b
        parse1(match[5])) >>> // a
        0;
      }
      if (match = matchers.hex3.exec(color)) {
        return parseInt(
          match[1] + match[1] + // r
          match[2] + match[2] + // g
          match[3] + match[3] + // b
          "ff",
          // a
          16
        ) >>> 0;
      }
      if (match = matchers.hex8.exec(color)) {
        return parseInt(match[1], 16) >>> 0;
      }
      if (match = matchers.hex4.exec(color)) {
        return parseInt(
          match[1] + match[1] + // r
          match[2] + match[2] + // g
          match[3] + match[3] + // b
          match[4] + match[4],
          // a
          16
        ) >>> 0;
      }
      if (match = matchers.hsl.exec(color)) {
        return (hslToRgb(
          parse360(match[1]),
          // h
          parsePercentage(match[2]),
          // s
          parsePercentage(match[3])
          // l
        ) | 255) >>> // a
        0;
      }
      if (match = matchers.hsla.exec(color)) {
        if (match[6] !== void 0) {
          return (hslToRgb(
            parse360(match[6]),
            // h
            parsePercentage(match[7]),
            // s
            parsePercentage(match[8])
            // l
          ) | parse1(match[9])) >>> // a
          0;
        }
        return (hslToRgb(
          parse360(match[2]),
          // h
          parsePercentage(match[3]),
          // s
          parsePercentage(match[4])
          // l
        ) | parse1(match[5])) >>> // a
        0;
      }
      if (match = matchers.hwb.exec(color)) {
        return (hwbToRgb(
          parse360(match[1]),
          // h
          parsePercentage(match[2]),
          // w
          parsePercentage(match[3])
          // b
        ) | 255) >>> // a
        0;
      }
      return null;
    }
    __name(normalizeColor4, "normalizeColor");
    function hue2rgb(p, q, t) {
      if (t < 0) {
        t += 1;
      }
      if (t > 1) {
        t -= 1;
      }
      if (t < 1 / 6) {
        return p + (q - p) * 6 * t;
      }
      if (t < 1 / 2) {
        return q;
      }
      if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
      }
      return p;
    }
    __name(hue2rgb, "hue2rgb");
    function hslToRgb(h, s, l) {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      const r = hue2rgb(p, q, h + 1 / 3);
      const g = hue2rgb(p, q, h);
      const b = hue2rgb(p, q, h - 1 / 3);
      return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
    }
    __name(hslToRgb, "hslToRgb");
    function hwbToRgb(h, w2, b) {
      if (w2 + b >= 1) {
        const gray = Math.round(w2 * 255 / (w2 + b));
        return gray << 24 | gray << 16 | gray << 8;
      }
      const red = hue2rgb(0, 1, h + 1 / 3) * (1 - w2 - b) + w2;
      const green = hue2rgb(0, 1, h) * (1 - w2 - b) + w2;
      const blue = hue2rgb(0, 1, h - 1 / 3) * (1 - w2 - b) + w2;
      return Math.round(red * 255) << 24 | Math.round(green * 255) << 16 | Math.round(blue * 255) << 8;
    }
    __name(hwbToRgb, "hwbToRgb");
    var NUMBER = "[-+]?\\d*\\.?\\d+";
    var PERCENTAGE = NUMBER + "%";
    function call(...args) {
      return "\\(\\s*(" + args.join(")\\s*,?\\s*(") + ")\\s*\\)";
    }
    __name(call, "call");
    function callWithSlashSeparator(...args) {
      return "\\(\\s*(" + args.slice(0, args.length - 1).join(")\\s*,?\\s*(") + ")\\s*/\\s*(" + args[args.length - 1] + ")\\s*\\)";
    }
    __name(callWithSlashSeparator, "callWithSlashSeparator");
    function commaSeparatedCall(...args) {
      return "\\(\\s*(" + args.join(")\\s*,\\s*(") + ")\\s*\\)";
    }
    __name(commaSeparatedCall, "commaSeparatedCall");
    var cachedMatchers;
    function getMatchers() {
      if (cachedMatchers === void 0) {
        cachedMatchers = {
          rgb: new RegExp("rgb" + call(NUMBER, NUMBER, NUMBER)),
          rgba: new RegExp(
            "rgba(" + commaSeparatedCall(NUMBER, NUMBER, NUMBER, NUMBER) + "|" + callWithSlashSeparator(NUMBER, NUMBER, NUMBER, NUMBER) + ")"
          ),
          hsl: new RegExp("hsl" + call(NUMBER, PERCENTAGE, PERCENTAGE)),
          hsla: new RegExp(
            "hsla(" + commaSeparatedCall(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER) + "|" + callWithSlashSeparator(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER) + ")"
          ),
          hwb: new RegExp("hwb" + call(NUMBER, PERCENTAGE, PERCENTAGE)),
          hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#([0-9a-fA-F]{6})$/,
          hex8: /^#([0-9a-fA-F]{8})$/
        };
      }
      return cachedMatchers;
    }
    __name(getMatchers, "getMatchers");
    function parse255(str) {
      const int = parseInt(str, 10);
      if (int < 0) {
        return 0;
      }
      if (int > 255) {
        return 255;
      }
      return int;
    }
    __name(parse255, "parse255");
    function parse360(str) {
      const int = parseFloat(str);
      return (int % 360 + 360) % 360 / 360;
    }
    __name(parse360, "parse360");
    function parse1(str) {
      const num = parseFloat(str);
      if (num < 0) {
        return 0;
      }
      if (num > 1) {
        return 255;
      }
      return Math.round(num * 255);
    }
    __name(parse1, "parse1");
    function parsePercentage(str) {
      const int = parseFloat(str);
      if (int < 0) {
        return 0;
      }
      if (int > 100) {
        return 1;
      }
      return int / 100;
    }
    __name(parsePercentage, "parsePercentage");
    function normalizeKeyword(name) {
      switch (name) {
        case "transparent":
          return 0;
        // http://www.w3.org/TR/css3-color/#svg-color
        case "aliceblue":
          return 4042850303;
        case "antiquewhite":
          return 4209760255;
        case "aqua":
          return 16777215;
        case "aquamarine":
          return 2147472639;
        case "azure":
          return 4043309055;
        case "beige":
          return 4126530815;
        case "bisque":
          return 4293182719;
        case "black":
          return 255;
        case "blanchedalmond":
          return 4293643775;
        case "blue":
          return 65535;
        case "blueviolet":
          return 2318131967;
        case "brown":
          return 2771004159;
        case "burlywood":
          return 3736635391;
        case "burntsienna":
          return 3934150143;
        case "cadetblue":
          return 1604231423;
        case "chartreuse":
          return 2147418367;
        case "chocolate":
          return 3530104575;
        case "coral":
          return 4286533887;
        case "cornflowerblue":
          return 1687547391;
        case "cornsilk":
          return 4294499583;
        case "crimson":
          return 3692313855;
        case "cyan":
          return 16777215;
        case "darkblue":
          return 35839;
        case "darkcyan":
          return 9145343;
        case "darkgoldenrod":
          return 3095792639;
        case "darkgray":
          return 2846468607;
        case "darkgreen":
          return 6553855;
        case "darkgrey":
          return 2846468607;
        case "darkkhaki":
          return 3182914559;
        case "darkmagenta":
          return 2332068863;
        case "darkolivegreen":
          return 1433087999;
        case "darkorange":
          return 4287365375;
        case "darkorchid":
          return 2570243327;
        case "darkred":
          return 2332033279;
        case "darksalmon":
          return 3918953215;
        case "darkseagreen":
          return 2411499519;
        case "darkslateblue":
          return 1211993087;
        case "darkslategray":
          return 793726975;
        case "darkslategrey":
          return 793726975;
        case "darkturquoise":
          return 13554175;
        case "darkviolet":
          return 2483082239;
        case "deeppink":
          return 4279538687;
        case "deepskyblue":
          return 12582911;
        case "dimgray":
          return 1768516095;
        case "dimgrey":
          return 1768516095;
        case "dodgerblue":
          return 512819199;
        case "firebrick":
          return 2988581631;
        case "floralwhite":
          return 4294635775;
        case "forestgreen":
          return 579543807;
        case "fuchsia":
          return 4278255615;
        case "gainsboro":
          return 3705462015;
        case "ghostwhite":
          return 4177068031;
        case "gold":
          return 4292280575;
        case "goldenrod":
          return 3668254975;
        case "gray":
          return 2155905279;
        case "green":
          return 8388863;
        case "greenyellow":
          return 2919182335;
        case "grey":
          return 2155905279;
        case "honeydew":
          return 4043305215;
        case "hotpink":
          return 4285117695;
        case "indianred":
          return 3445382399;
        case "indigo":
          return 1258324735;
        case "ivory":
          return 4294963455;
        case "khaki":
          return 4041641215;
        case "lavender":
          return 3873897215;
        case "lavenderblush":
          return 4293981695;
        case "lawngreen":
          return 2096890111;
        case "lemonchiffon":
          return 4294626815;
        case "lightblue":
          return 2916673279;
        case "lightcoral":
          return 4034953471;
        case "lightcyan":
          return 3774873599;
        case "lightgoldenrodyellow":
          return 4210742015;
        case "lightgray":
          return 3553874943;
        case "lightgreen":
          return 2431553791;
        case "lightgrey":
          return 3553874943;
        case "lightpink":
          return 4290167295;
        case "lightsalmon":
          return 4288707327;
        case "lightseagreen":
          return 548580095;
        case "lightskyblue":
          return 2278488831;
        case "lightslategray":
          return 2005441023;
        case "lightslategrey":
          return 2005441023;
        case "lightsteelblue":
          return 2965692159;
        case "lightyellow":
          return 4294959359;
        case "lime":
          return 16711935;
        case "limegreen":
          return 852308735;
        case "linen":
          return 4210091775;
        case "magenta":
          return 4278255615;
        case "maroon":
          return 2147483903;
        case "mediumaquamarine":
          return 1724754687;
        case "mediumblue":
          return 52735;
        case "mediumorchid":
          return 3126187007;
        case "mediumpurple":
          return 2473647103;
        case "mediumseagreen":
          return 1018393087;
        case "mediumslateblue":
          return 2070474495;
        case "mediumspringgreen":
          return 16423679;
        case "mediumturquoise":
          return 1221709055;
        case "mediumvioletred":
          return 3340076543;
        case "midnightblue":
          return 421097727;
        case "mintcream":
          return 4127193855;
        case "mistyrose":
          return 4293190143;
        case "moccasin":
          return 4293178879;
        case "navajowhite":
          return 4292783615;
        case "navy":
          return 33023;
        case "oldlace":
          return 4260751103;
        case "olive":
          return 2155872511;
        case "olivedrab":
          return 1804477439;
        case "orange":
          return 4289003775;
        case "orangered":
          return 4282712319;
        case "orchid":
          return 3664828159;
        case "palegoldenrod":
          return 4008225535;
        case "palegreen":
          return 2566625535;
        case "paleturquoise":
          return 2951671551;
        case "palevioletred":
          return 3681588223;
        case "papayawhip":
          return 4293907967;
        case "peachpuff":
          return 4292524543;
        case "peru":
          return 3448061951;
        case "pink":
          return 4290825215;
        case "plum":
          return 3718307327;
        case "powderblue":
          return 2967529215;
        case "purple":
          return 2147516671;
        case "rebeccapurple":
          return 1714657791;
        case "red":
          return 4278190335;
        case "rosybrown":
          return 3163525119;
        case "royalblue":
          return 1097458175;
        case "saddlebrown":
          return 2336560127;
        case "salmon":
          return 4202722047;
        case "sandybrown":
          return 4104413439;
        case "seagreen":
          return 780883967;
        case "seashell":
          return 4294307583;
        case "sienna":
          return 2689740287;
        case "silver":
          return 3233857791;
        case "skyblue":
          return 2278484991;
        case "slateblue":
          return 1784335871;
        case "slategray":
          return 1887473919;
        case "slategrey":
          return 1887473919;
        case "snow":
          return 4294638335;
        case "springgreen":
          return 16744447;
        case "steelblue":
          return 1182971135;
        case "tan":
          return 3535047935;
        case "teal":
          return 8421631;
        case "thistle":
          return 3636451583;
        case "tomato":
          return 4284696575;
        case "turquoise":
          return 1088475391;
        case "violet":
          return 4001558271;
        case "wheat":
          return 4125012991;
        case "white":
          return 4294967295;
        case "whitesmoke":
          return 4126537215;
        case "yellow":
          return 4294902015;
        case "yellowgreen":
          return 2597139199;
      }
      return null;
    }
    __name(normalizeKeyword, "normalizeKeyword");
    module.exports = normalizeColor4;
  }
});

// ../../node_modules/inline-style-prefixer/lib/utils/capitalizeString.js
var require_capitalizeString = __commonJS({
  "../../node_modules/inline-style-prefixer/lib/utils/capitalizeString.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = capitalizeString;
    function capitalizeString(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    __name(capitalizeString, "capitalizeString");
  }
});

// ../../node_modules/inline-style-prefixer/lib/utils/prefixProperty.js
var require_prefixProperty = __commonJS({
  "../../node_modules/inline-style-prefixer/lib/utils/prefixProperty.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = prefixProperty;
    var _capitalizeString = require_capitalizeString();
    var _capitalizeString2 = _interopRequireDefault(_capitalizeString);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    function prefixProperty(prefixProperties, property, style) {
      var requiredPrefixes = prefixProperties[property];
      if (requiredPrefixes && style.hasOwnProperty(property)) {
        var capitalizedProperty = (0, _capitalizeString2.default)(property);
        for (var i = 0; i < requiredPrefixes.length; ++i) {
          var prefixedProperty = requiredPrefixes[i] + capitalizedProperty;
          if (!style[prefixedProperty]) {
            style[prefixedProperty] = style[property];
          }
        }
      }
      return style;
    }
    __name(prefixProperty, "prefixProperty");
  }
});

// ../../node_modules/inline-style-prefixer/lib/utils/prefixValue.js
var require_prefixValue = __commonJS({
  "../../node_modules/inline-style-prefixer/lib/utils/prefixValue.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = prefixValue;
    function prefixValue(plugins, property, value, style, metaData) {
      for (var i = 0, len = plugins.length; i < len; ++i) {
        var processedValue = plugins[i](property, value, style, metaData);
        if (processedValue) {
          return processedValue;
        }
      }
    }
    __name(prefixValue, "prefixValue");
  }
});

// ../../node_modules/inline-style-prefixer/lib/utils/addNewValuesOnly.js
var require_addNewValuesOnly = __commonJS({
  "../../node_modules/inline-style-prefixer/lib/utils/addNewValuesOnly.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = addNewValuesOnly;
    function addIfNew(list, value) {
      if (list.indexOf(value) === -1) {
        list.push(value);
      }
    }
    __name(addIfNew, "addIfNew");
    function addNewValuesOnly(list, values) {
      if (Array.isArray(values)) {
        for (var i = 0, len = values.length; i < len; ++i) {
          addIfNew(list, values[i]);
        }
      } else {
        addIfNew(list, values);
      }
    }
    __name(addNewValuesOnly, "addNewValuesOnly");
  }
});

// ../../node_modules/inline-style-prefixer/lib/utils/isObject.js
var require_isObject = __commonJS({
  "../../node_modules/inline-style-prefixer/lib/utils/isObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isObject;
    function isObject(value) {
      return value instanceof Object && !Array.isArray(value);
    }
    __name(isObject, "isObject");
  }
});

// ../../node_modules/inline-style-prefixer/lib/createPrefixer.js
var require_createPrefixer = __commonJS({
  "../../node_modules/inline-style-prefixer/lib/createPrefixer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = createPrefixer2;
    var _prefixProperty = require_prefixProperty();
    var _prefixProperty2 = _interopRequireDefault(_prefixProperty);
    var _prefixValue = require_prefixValue();
    var _prefixValue2 = _interopRequireDefault(_prefixValue);
    var _addNewValuesOnly = require_addNewValuesOnly();
    var _addNewValuesOnly2 = _interopRequireDefault(_addNewValuesOnly);
    var _isObject = require_isObject();
    var _isObject2 = _interopRequireDefault(_isObject);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    function createPrefixer2(_ref) {
      var prefixMap = _ref.prefixMap, plugins = _ref.plugins;
      return /* @__PURE__ */ __name(function prefix(style) {
        for (var property in style) {
          var value = style[property];
          if ((0, _isObject2.default)(value)) {
            style[property] = prefix(value);
          } else if (Array.isArray(value)) {
            var combinedValue = [];
            for (var i = 0, len = value.length; i < len; ++i) {
              var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, prefixMap);
              (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
            }
            if (combinedValue.length > 0) {
              style[property] = combinedValue;
            }
          } else {
            var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap);
            if (_processedValue) {
              style[property] = _processedValue;
            }
            style = (0, _prefixProperty2.default)(prefixMap, property, style);
          }
        }
        return style;
      }, "prefix");
    }
    __name(createPrefixer2, "createPrefixer");
  }
});

// ../../node_modules/css-in-js-utils/es/assignStyle.js
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = /* @__PURE__ */ __name(function _typeof2(obj2) {
      return typeof obj2;
    }, "_typeof");
  } else {
    _typeof = /* @__PURE__ */ __name(function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, "_typeof");
  }
  return _typeof(obj);
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function filterUniqueArray(arr) {
  return arr.filter(function(val, index2) {
    return arr.lastIndexOf(val) === index2;
  });
}
function assignStyle(base) {
  for (var i = 0, len = arguments.length <= 1 ? 0 : arguments.length - 1; i < len; ++i) {
    var style = i + 1 < 1 || arguments.length <= i + 1 ? void 0 : arguments[i + 1];
    for (var property in style) {
      var value = style[property];
      var baseValue = base[property];
      if (baseValue && value) {
        if (Array.isArray(baseValue)) {
          base[property] = filterUniqueArray(baseValue.concat(value));
          continue;
        }
        if (Array.isArray(value)) {
          base[property] = filterUniqueArray([baseValue].concat(_toConsumableArray(value)));
          continue;
        }
        if (_typeof(value) === "object") {
          base[property] = assignStyle({}, baseValue, value);
          continue;
        }
      }
      base[property] = value;
    }
  }
  return base;
}
var init_assignStyle = __esm({
  "../../node_modules/css-in-js-utils/es/assignStyle.js"() {
    __name(_typeof, "_typeof");
    __name(_toConsumableArray, "_toConsumableArray");
    __name(_nonIterableSpread, "_nonIterableSpread");
    __name(_unsupportedIterableToArray, "_unsupportedIterableToArray");
    __name(_iterableToArray, "_iterableToArray");
    __name(_arrayWithoutHoles, "_arrayWithoutHoles");
    __name(_arrayLikeToArray, "_arrayLikeToArray");
    __name(filterUniqueArray, "filterUniqueArray");
    __name(assignStyle, "assignStyle");
  }
});

// ../../node_modules/css-in-js-utils/es/camelCaseProperty.js
function toUpper(match) {
  return match[1].toUpperCase();
}
function camelCaseProperty(property) {
  if (cache4.hasOwnProperty(property)) {
    return cache4[property];
  }
  var camelProp = property.replace(DASH, toUpper).replace(MS, "ms");
  cache4[property] = camelProp;
  return camelProp;
}
var DASH, MS, cache4;
var init_camelCaseProperty = __esm({
  "../../node_modules/css-in-js-utils/es/camelCaseProperty.js"() {
    DASH = /-([a-z])/g;
    MS = /^Ms/g;
    cache4 = {};
    __name(toUpper, "toUpper");
    __name(camelCaseProperty, "camelCaseProperty");
  }
});

// ../../node_modules/hyphenate-style-name/index.js
var hyphenate_style_name_exports = {};
__export(hyphenate_style_name_exports, {
  default: () => hyphenate_style_name_default
});
function toHyphenLower2(match) {
  return "-" + match.toLowerCase();
}
function hyphenateStyleName2(name) {
  if (cache5.hasOwnProperty(name)) {
    return cache5[name];
  }
  var hName = name.replace(uppercasePattern2, toHyphenLower2);
  return cache5[name] = msPattern2.test(hName) ? "-" + hName : hName;
}
var uppercasePattern2, msPattern2, cache5, hyphenate_style_name_default;
var init_hyphenate_style_name = __esm({
  "../../node_modules/hyphenate-style-name/index.js"() {
    uppercasePattern2 = /[A-Z]/g;
    msPattern2 = /^ms-/;
    cache5 = {};
    __name(toHyphenLower2, "toHyphenLower");
    __name(hyphenateStyleName2, "hyphenateStyleName");
    hyphenate_style_name_default = hyphenateStyleName2;
  }
});

// ../../node_modules/css-in-js-utils/es/hyphenateProperty.js
function hyphenateProperty(property) {
  return hyphenate_style_name_default(property);
}
var init_hyphenateProperty = __esm({
  "../../node_modules/css-in-js-utils/es/hyphenateProperty.js"() {
    init_hyphenate_style_name();
    __name(hyphenateProperty, "hyphenateProperty");
  }
});

// ../../node_modules/css-in-js-utils/es/cssifyDeclaration.js
function cssifyDeclaration(property, value) {
  return hyphenateProperty(property) + ":" + value;
}
var init_cssifyDeclaration = __esm({
  "../../node_modules/css-in-js-utils/es/cssifyDeclaration.js"() {
    init_hyphenateProperty();
    __name(cssifyDeclaration, "cssifyDeclaration");
  }
});

// ../../node_modules/css-in-js-utils/es/cssifyObject.js
function cssifyObject(style) {
  var css = "";
  for (var property in style) {
    var value = style[property];
    if (typeof value !== "string" && typeof value !== "number") {
      continue;
    }
    if (css) {
      css += ";";
    }
    css += cssifyDeclaration(property, value);
  }
  return css;
}
var init_cssifyObject = __esm({
  "../../node_modules/css-in-js-utils/es/cssifyObject.js"() {
    init_cssifyDeclaration();
    __name(cssifyObject, "cssifyObject");
  }
});

// ../../node_modules/css-in-js-utils/es/isPrefixedProperty.js
function isPrefixedProperty(property) {
  return RE.test(property);
}
var RE;
var init_isPrefixedProperty = __esm({
  "../../node_modules/css-in-js-utils/es/isPrefixedProperty.js"() {
    RE = /^(Webkit|Moz|O|ms)/;
    __name(isPrefixedProperty, "isPrefixedProperty");
  }
});

// ../../node_modules/css-in-js-utils/es/isPrefixedValue.js
function isPrefixedValue(value) {
  return typeof value === "string" && RE2.test(value);
}
var RE2;
var init_isPrefixedValue = __esm({
  "../../node_modules/css-in-js-utils/es/isPrefixedValue.js"() {
    RE2 = /-webkit-|-moz-|-ms-/;
    __name(isPrefixedValue, "isPrefixedValue");
  }
});

// ../../node_modules/css-in-js-utils/es/isUnitlessProperty.js
function getPrefixedProperty(prefix, property) {
  return prefix + property.charAt(0).toUpperCase() + property.slice(1);
}
function isUnitlessProperty(property) {
  return unitlessProperties.hasOwnProperty(property);
}
var unitlessProperties, prefixedUnitlessProperties, prefixes2, property, j, jLen, i, len, _property;
var init_isUnitlessProperty = __esm({
  "../../node_modules/css-in-js-utils/es/isUnitlessProperty.js"() {
    init_hyphenateProperty();
    unitlessProperties = {
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      fontWeight: true,
      lineHeight: true,
      opacity: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      // SVG-related properties
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    prefixedUnitlessProperties = ["animationIterationCount", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "order"];
    prefixes2 = ["Webkit", "ms", "Moz", "O"];
    __name(getPrefixedProperty, "getPrefixedProperty");
    for (i = 0, len = prefixedUnitlessProperties.length; i < len; ++i) {
      property = prefixedUnitlessProperties[i];
      unitlessProperties[property] = true;
      for (j = 0, jLen = prefixes2.length; j < jLen; ++j) {
        unitlessProperties[getPrefixedProperty(prefixes2[j], property)] = true;
      }
    }
    for (_property in unitlessProperties) {
      unitlessProperties[hyphenateProperty(_property)] = true;
    }
    __name(isUnitlessProperty, "isUnitlessProperty");
  }
});

// ../../node_modules/css-in-js-utils/es/unprefixProperty.js
function unprefixProperty(property) {
  var propertyWithoutPrefix = property.replace(RE3, "");
  return propertyWithoutPrefix.charAt(0).toLowerCase() + propertyWithoutPrefix.slice(1);
}
var RE3;
var init_unprefixProperty = __esm({
  "../../node_modules/css-in-js-utils/es/unprefixProperty.js"() {
    RE3 = /^(ms|Webkit|Moz|O)/;
    __name(unprefixProperty, "unprefixProperty");
  }
});

// ../../node_modules/css-in-js-utils/es/normalizeProperty.js
function normalizeProperty(property) {
  return unprefixProperty(camelCaseProperty(property));
}
var init_normalizeProperty = __esm({
  "../../node_modules/css-in-js-utils/es/normalizeProperty.js"() {
    init_camelCaseProperty();
    init_unprefixProperty();
    __name(normalizeProperty, "normalizeProperty");
  }
});

// ../../node_modules/css-in-js-utils/es/resolveArrayValue.js
function resolveArrayValue(property, value) {
  return value.join(";" + hyphenateProperty(property) + ":");
}
var init_resolveArrayValue = __esm({
  "../../node_modules/css-in-js-utils/es/resolveArrayValue.js"() {
    init_hyphenateProperty();
    __name(resolveArrayValue, "resolveArrayValue");
  }
});

// ../../node_modules/css-in-js-utils/es/unprefixValue.js
function unprefixValue(value) {
  if (typeof value === "string") {
    return value.replace(RE4, "");
  }
  return value;
}
var RE4;
var init_unprefixValue = __esm({
  "../../node_modules/css-in-js-utils/es/unprefixValue.js"() {
    RE4 = /(-ms-|-webkit-|-moz-|-o-)/g;
    __name(unprefixValue, "unprefixValue");
  }
});

// ../../node_modules/css-in-js-utils/es/index.js
var es_exports = {};
__export(es_exports, {
  assignStyle: () => assignStyle,
  camelCaseProperty: () => camelCaseProperty,
  cssifyDeclaration: () => cssifyDeclaration,
  cssifyObject: () => cssifyObject,
  hyphenateProperty: () => hyphenateProperty,
  isPrefixedProperty: () => isPrefixedProperty,
  isPrefixedValue: () => isPrefixedValue,
  isUnitlessProperty: () => isUnitlessProperty,
  normalizeProperty: () => normalizeProperty,
  resolveArrayValue: () => resolveArrayValue,
  unprefixProperty: () => unprefixProperty,
  unprefixValue: () => unprefixValue
});
var init_es = __esm({
  "../../node_modules/css-in-js-utils/es/index.js"() {
    init_assignStyle();
    init_camelCaseProperty();
    init_cssifyDeclaration();
    init_cssifyObject();
    init_hyphenateProperty();
    init_isPrefixedProperty();
    init_isPrefixedValue();
    init_isUnitlessProperty();
    init_normalizeProperty();
    init_resolveArrayValue();
    init_unprefixProperty();
    init_unprefixValue();
  }
});

// ../../node_modules/inline-style-prefixer/lib/plugins/crossFade.js
var require_crossFade = __commonJS({
  "../../node_modules/inline-style-prefixer/lib/plugins/crossFade.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = crossFade2;
    var _cssInJsUtils = (init_es(), __toCommonJS(es_exports));
    var CROSS_FADE_REGEX = /cross-fade\(/g;
    var prefixes4 = ["-webkit-", ""];
    function crossFade2(property, value) {
      if (typeof value === "string" && !(0, _cssInJsUtils.isPrefixedValue)(value) && value.indexOf("cross-fade(") !== -1) {
        return prefixes4.map(function(prefix) {
          return value.replace(CROSS_FADE_REGEX, prefix + "cross-fade(");
        });
      }
    }
    __name(crossFade2, "crossFade");
  }
});

// ../../node_modules/css-in-js-utils/lib/isPrefixedValue.js
var require_isPrefixedValue = __commonJS({
  "../../node_modules/css-in-js-utils/lib/isPrefixedValue.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = isPrefixedValue2;
    var RE5 = /-webkit-|-moz-|-ms-/;
    function isPrefixedValue2(value) {
      return typeof value === "string" && RE5.test(value);
    }
    __name(isPrefixedValue2, "isPrefixedValue");
  }
});

// ../../node_modules/inline-style-prefixer/lib/plugins/imageSet.js
var require_imageSet = __commonJS({
  "../../node_modules/inline-style-prefixer/lib/plugins/imageSet.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = imageSet2;
    var _isPrefixedValue = require_isPrefixedValue();
    var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    var prefixes4 = ["-webkit-", ""];
    function imageSet2(property, value) {
      if (typeof value === "string" && !(0, _isPrefixedValue2.default)(value) && value.indexOf("image-set(") > -1) {
        return prefixes4.map(function(prefix) {
          return value.replace(/image-set\(/g, prefix + "image-set(");
        });
      }
    }
    __name(imageSet2, "imageSet");
  }
});

// ../../node_modules/inline-style-prefixer/lib/plugins/logical.js
var require_logical = __commonJS({
  "../../node_modules/inline-style-prefixer/lib/plugins/logical.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = logical2;
    var alternativeProps = {
      marginBlockStart: ["WebkitMarginBefore"],
      marginBlockEnd: ["WebkitMarginAfter"],
      marginInlineStart: ["WebkitMarginStart", "MozMarginStart"],
      marginInlineEnd: ["WebkitMarginEnd", "MozMarginEnd"],
      paddingBlockStart: ["WebkitPaddingBefore"],
      paddingBlockEnd: ["WebkitPaddingAfter"],
      paddingInlineStart: ["WebkitPaddingStart", "MozPaddingStart"],
      paddingInlineEnd: ["WebkitPaddingEnd", "MozPaddingEnd"],
      borderBlockStart: ["WebkitBorderBefore"],
      borderBlockStartColor: ["WebkitBorderBeforeColor"],
      borderBlockStartStyle: ["WebkitBorderBeforeStyle"],
      borderBlockStartWidth: ["WebkitBorderBeforeWidth"],
      borderBlockEnd: ["WebkitBorderAfter"],
      borderBlockEndColor: ["WebkitBorderAfterColor"],
      borderBlockEndStyle: ["WebkitBorderAfterStyle"],
      borderBlockEndWidth: ["WebkitBorderAfterWidth"],
      borderInlineStart: ["WebkitBorderStart", "MozBorderStart"],
      borderInlineStartColor: ["WebkitBorderStartColor", "MozBorderStartColor"],
      borderInlineStartStyle: ["WebkitBorderStartStyle", "MozBorderStartStyle"],
      borderInlineStartWidth: ["WebkitBorderStartWidth", "MozBorderStartWidth"],
      borderInlineEnd: ["WebkitBorderEnd", "MozBorderEnd"],
      borderInlineEndColor: ["WebkitBorderEndColor", "MozBorderEndColor"],
      borderInlineEndStyle: ["WebkitBorderEndStyle", "MozBorderEndStyle"],
      borderInlineEndWidth: ["WebkitBorderEndWidth", "MozBorderEndWidth"]
    };
    function logical2(property, value, style) {
      if (Object.prototype.hasOwnProperty.call(alternativeProps, property)) {
        var alternativePropList = alternativeProps[property];
        for (var i = 0, len = alternativePropList.length; i < len; ++i) {
          style[alternativePropList[i]] = value;
        }
      }
    }
    __name(logical2, "logical");
  }
});

// ../../node_modules/inline-style-prefixer/lib/plugins/position.js
var require_position = __commonJS({
  "../../node_modules/inline-style-prefixer/lib/plugins/position.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = position2;
    function position2(property, value) {
      if (property === "position" && value === "sticky") {
        return ["-webkit-sticky", "sticky"];
      }
    }
    __name(position2, "position");
  }
});

// ../../node_modules/inline-style-prefixer/lib/plugins/sizing.js
var require_sizing = __commonJS({
  "../../node_modules/inline-style-prefixer/lib/plugins/sizing.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = sizing2;
    var prefixes4 = ["-webkit-", "-moz-", ""];
    var properties = {
      maxHeight: true,
      maxWidth: true,
      width: true,
      height: true,
      columnWidth: true,
      minWidth: true,
      minHeight: true
    };
    var values = {
      "min-content": true,
      "max-content": true,
      "fill-available": true,
      "fit-content": true,
      "contain-floats": true
    };
    function sizing2(property, value) {
      if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
        return prefixes4.map(function(prefix) {
          return prefix + value;
        });
      }
    }
    __name(sizing2, "sizing");
  }
});

// ../../node_modules/css-in-js-utils/lib/hyphenateProperty.js
var require_hyphenateProperty = __commonJS({
  "../../node_modules/css-in-js-utils/lib/hyphenateProperty.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = hyphenateProperty2;
    var _hyphenateStyleName = (init_hyphenate_style_name(), __toCommonJS(hyphenate_style_name_exports));
    var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    function hyphenateProperty2(property) {
      return (0, _hyphenateStyleName2["default"])(property);
    }
    __name(hyphenateProperty2, "hyphenateProperty");
  }
});

// ../../node_modules/inline-style-prefixer/lib/plugins/transition.js
var require_transition = __commonJS({
  "../../node_modules/inline-style-prefixer/lib/plugins/transition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = transition2;
    var _hyphenateProperty = require_hyphenateProperty();
    var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);
    var _isPrefixedValue = require_isPrefixedValue();
    var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
    var _capitalizeString = require_capitalizeString();
    var _capitalizeString2 = _interopRequireDefault(_capitalizeString);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    var properties = {
      transition: true,
      transitionProperty: true,
      WebkitTransition: true,
      WebkitTransitionProperty: true,
      MozTransition: true,
      MozTransitionProperty: true
    };
    var prefixMapping = {
      Webkit: "-webkit-",
      Moz: "-moz-",
      ms: "-ms-"
    };
    function prefixValue(value, propertyPrefixMap) {
      if ((0, _isPrefixedValue2.default)(value)) {
        return value;
      }
      var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);
      for (var i = 0, len = multipleValues.length; i < len; ++i) {
        var singleValue = multipleValues[i];
        var values = [singleValue];
        for (var property in propertyPrefixMap) {
          var dashCaseProperty = (0, _hyphenateProperty2.default)(property);
          if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== "order") {
            var prefixes4 = propertyPrefixMap[property];
            for (var j = 0, pLen = prefixes4.length; j < pLen; ++j) {
              values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes4[j]] + dashCaseProperty));
            }
          }
        }
        multipleValues[i] = values.join(",");
      }
      return multipleValues.join(",");
    }
    __name(prefixValue, "prefixValue");
    function transition2(property, value, style, propertyPrefixMap) {
      if (typeof value === "string" && properties.hasOwnProperty(property)) {
        var outputValue = prefixValue(value, propertyPrefixMap);
        var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(val) {
          return !/-moz-|-ms-/.test(val);
        }).join(",");
        if (property.indexOf("Webkit") > -1) {
          return webkitOutput;
        }
        var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(val) {
          return !/-webkit-|-ms-/.test(val);
        }).join(",");
        if (property.indexOf("Moz") > -1) {
          return mozOutput;
        }
        style["Webkit" + (0, _capitalizeString2.default)(property)] = webkitOutput;
        style["Moz" + (0, _capitalizeString2.default)(property)] = mozOutput;
        return outputValue;
      }
    }
    __name(transition2, "transition");
  }
});

// ../../node_modules/styleq/dist/transform-localize-style.js
var require_transform_localize_style = __commonJS({
  "../../node_modules/styleq/dist/transform-localize-style.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.localizeStyle = localizeStyle2;
    var cache8 = /* @__PURE__ */ new WeakMap();
    var markerProp = "$$css$localize";
    function compileStyle(style, isRTL2) {
      var compiledStyle = {};
      for (var prop in style) {
        if (prop !== markerProp) {
          var value = style[prop];
          if (Array.isArray(value)) {
            compiledStyle[prop] = isRTL2 ? value[1] : value[0];
          } else {
            compiledStyle[prop] = value;
          }
        }
      }
      return compiledStyle;
    }
    __name(compileStyle, "compileStyle");
    function localizeStyle2(style, isRTL2) {
      if (style[markerProp] != null) {
        var compiledStyleIndex = isRTL2 ? 1 : 0;
        if (cache8.has(style)) {
          var _cachedStyles = cache8.get(style);
          var _compiledStyle = _cachedStyles[compiledStyleIndex];
          if (_compiledStyle == null) {
            _compiledStyle = compileStyle(style, isRTL2);
            _cachedStyles[compiledStyleIndex] = _compiledStyle;
            cache8.set(style, _cachedStyles);
          }
          return _compiledStyle;
        }
        var compiledStyle = compileStyle(style, isRTL2);
        var cachedStyles = new Array(2);
        cachedStyles[compiledStyleIndex] = compiledStyle;
        cache8.set(style, cachedStyles);
        return compiledStyle;
      }
      return style;
    }
    __name(localizeStyle2, "localizeStyle");
  }
});

// ../../node_modules/styleq/transform-localize-style.js
var require_transform_localize_style2 = __commonJS({
  "../../node_modules/styleq/transform-localize-style.js"(exports, module) {
    module.exports = require_transform_localize_style();
  }
});

// ../../node_modules/styleq/dist/styleq.js
var require_styleq = __commonJS({
  "../../node_modules/styleq/dist/styleq.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.styleq = void 0;
    var cache8 = /* @__PURE__ */ new WeakMap();
    var compiledKey = "$$css";
    function createStyleq(options) {
      var disableCache;
      var disableMix;
      var transform;
      if (options != null) {
        disableCache = options.disableCache === true;
        disableMix = options.disableMix === true;
        transform = options.transform;
      }
      return /* @__PURE__ */ __name(function styleq3() {
        var definedProperties = [];
        var className = "";
        var inlineStyle = null;
        var nextCache = disableCache ? null : cache8;
        var styles5 = new Array(arguments.length);
        for (var i = 0; i < arguments.length; i++) {
          styles5[i] = arguments[i];
        }
        while (styles5.length > 0) {
          var possibleStyle = styles5.pop();
          if (possibleStyle == null || possibleStyle === false) {
            continue;
          }
          if (Array.isArray(possibleStyle)) {
            for (var _i = 0; _i < possibleStyle.length; _i++) {
              styles5.push(possibleStyle[_i]);
            }
            continue;
          }
          var style = transform != null ? transform(possibleStyle) : possibleStyle;
          if (style.$$css) {
            var classNameChunk = "";
            if (nextCache != null && nextCache.has(style)) {
              var cacheEntry = nextCache.get(style);
              if (cacheEntry != null) {
                classNameChunk = cacheEntry[0];
                definedProperties.push.apply(definedProperties, cacheEntry[1]);
                nextCache = cacheEntry[2];
              }
            } else {
              var definedPropertiesChunk = [];
              for (var prop in style) {
                var value = style[prop];
                if (prop === compiledKey) continue;
                if (typeof value === "string" || value === null) {
                  if (!definedProperties.includes(prop)) {
                    definedProperties.push(prop);
                    if (nextCache != null) {
                      definedPropertiesChunk.push(prop);
                    }
                    if (typeof value === "string") {
                      classNameChunk += classNameChunk ? " " + value : value;
                    }
                  }
                } else {
                  console.error("styleq: ".concat(prop, " typeof ").concat(String(value), ' is not "string" or "null".'));
                }
              }
              if (nextCache != null) {
                var weakMap = /* @__PURE__ */ new WeakMap();
                nextCache.set(style, [classNameChunk, definedPropertiesChunk, weakMap]);
                nextCache = weakMap;
              }
            }
            if (classNameChunk) {
              className = className ? classNameChunk + " " + className : classNameChunk;
            }
          } else {
            if (disableMix) {
              if (inlineStyle == null) {
                inlineStyle = {};
              }
              inlineStyle = Object.assign({}, style, inlineStyle);
            } else {
              var subStyle = null;
              for (var _prop in style) {
                var _value = style[_prop];
                if (_value !== void 0) {
                  if (!definedProperties.includes(_prop)) {
                    if (_value != null) {
                      if (inlineStyle == null) {
                        inlineStyle = {};
                      }
                      if (subStyle == null) {
                        subStyle = {};
                      }
                      subStyle[_prop] = _value;
                    }
                    definedProperties.push(_prop);
                    nextCache = null;
                  }
                }
              }
              if (subStyle != null) {
                inlineStyle = Object.assign(subStyle, inlineStyle);
              }
            }
          }
        }
        var styleProps2 = [className, inlineStyle];
        return styleProps2;
      }, "styleq");
    }
    __name(createStyleq, "createStyleq");
    var styleq2 = createStyleq();
    exports.styleq = styleq2;
    styleq2.factory = createStyleq;
  }
});

// ../../node_modules/postcss-value-parser/lib/parse.js
var require_parse = __commonJS({
  "../../node_modules/postcss-value-parser/lib/parse.js"(exports, module) {
    var openParentheses = "(".charCodeAt(0);
    var closeParentheses = ")".charCodeAt(0);
    var singleQuote = "'".charCodeAt(0);
    var doubleQuote = '"'.charCodeAt(0);
    var backslash = "\\".charCodeAt(0);
    var slash = "/".charCodeAt(0);
    var comma = ",".charCodeAt(0);
    var colon = ":".charCodeAt(0);
    var star = "*".charCodeAt(0);
    var uLower = "u".charCodeAt(0);
    var uUpper = "U".charCodeAt(0);
    var plus = "+".charCodeAt(0);
    var isUnicodeRange = /^[a-f0-9?-]+$/i;
    module.exports = function(input) {
      var tokens = [];
      var value = input;
      var next, quote, prev, token, escape, escapePos, whitespacePos, parenthesesOpenPos;
      var pos = 0;
      var code = value.charCodeAt(pos);
      var max2 = value.length;
      var stack = [{ nodes: tokens }];
      var balanced = 0;
      var parent;
      var name = "";
      var before = "";
      var after = "";
      while (pos < max2) {
        if (code <= 32) {
          next = pos;
          do {
            next += 1;
            code = value.charCodeAt(next);
          } while (code <= 32);
          token = value.slice(pos, next);
          prev = tokens[tokens.length - 1];
          if (code === closeParentheses && balanced) {
            after = token;
          } else if (prev && prev.type === "div") {
            prev.after = token;
            prev.sourceEndIndex += token.length;
          } else if (code === comma || code === colon || code === slash && value.charCodeAt(next + 1) !== star && (!parent || parent && parent.type === "function" && parent.value !== "calc")) {
            before = token;
          } else {
            tokens.push({
              type: "space",
              sourceIndex: pos,
              sourceEndIndex: next,
              value: token
            });
          }
          pos = next;
        } else if (code === singleQuote || code === doubleQuote) {
          next = pos;
          quote = code === singleQuote ? "'" : '"';
          token = {
            type: "string",
            sourceIndex: pos,
            quote
          };
          do {
            escape = false;
            next = value.indexOf(quote, next + 1);
            if (~next) {
              escapePos = next;
              while (value.charCodeAt(escapePos - 1) === backslash) {
                escapePos -= 1;
                escape = !escape;
              }
            } else {
              value += quote;
              next = value.length - 1;
              token.unclosed = true;
            }
          } while (escape);
          token.value = value.slice(pos + 1, next);
          token.sourceEndIndex = token.unclosed ? next : next + 1;
          tokens.push(token);
          pos = next + 1;
          code = value.charCodeAt(pos);
        } else if (code === slash && value.charCodeAt(pos + 1) === star) {
          next = value.indexOf("*/", pos);
          token = {
            type: "comment",
            sourceIndex: pos,
            sourceEndIndex: next + 2
          };
          if (next === -1) {
            token.unclosed = true;
            next = value.length;
            token.sourceEndIndex = next;
          }
          token.value = value.slice(pos + 2, next);
          tokens.push(token);
          pos = next + 2;
          code = value.charCodeAt(pos);
        } else if ((code === slash || code === star) && parent && parent.type === "function" && parent.value === "calc") {
          token = value[pos];
          tokens.push({
            type: "word",
            sourceIndex: pos - before.length,
            sourceEndIndex: pos + token.length,
            value: token
          });
          pos += 1;
          code = value.charCodeAt(pos);
        } else if (code === slash || code === comma || code === colon) {
          token = value[pos];
          tokens.push({
            type: "div",
            sourceIndex: pos - before.length,
            sourceEndIndex: pos + token.length,
            value: token,
            before,
            after: ""
          });
          before = "";
          pos += 1;
          code = value.charCodeAt(pos);
        } else if (openParentheses === code) {
          next = pos;
          do {
            next += 1;
            code = value.charCodeAt(next);
          } while (code <= 32);
          parenthesesOpenPos = pos;
          token = {
            type: "function",
            sourceIndex: pos - name.length,
            value: name,
            before: value.slice(parenthesesOpenPos + 1, next)
          };
          pos = next;
          if (name === "url" && code !== singleQuote && code !== doubleQuote) {
            next -= 1;
            do {
              escape = false;
              next = value.indexOf(")", next + 1);
              if (~next) {
                escapePos = next;
                while (value.charCodeAt(escapePos - 1) === backslash) {
                  escapePos -= 1;
                  escape = !escape;
                }
              } else {
                value += ")";
                next = value.length - 1;
                token.unclosed = true;
              }
            } while (escape);
            whitespacePos = next;
            do {
              whitespacePos -= 1;
              code = value.charCodeAt(whitespacePos);
            } while (code <= 32);
            if (parenthesesOpenPos < whitespacePos) {
              if (pos !== whitespacePos + 1) {
                token.nodes = [
                  {
                    type: "word",
                    sourceIndex: pos,
                    sourceEndIndex: whitespacePos + 1,
                    value: value.slice(pos, whitespacePos + 1)
                  }
                ];
              } else {
                token.nodes = [];
              }
              if (token.unclosed && whitespacePos + 1 !== next) {
                token.after = "";
                token.nodes.push({
                  type: "space",
                  sourceIndex: whitespacePos + 1,
                  sourceEndIndex: next,
                  value: value.slice(whitespacePos + 1, next)
                });
              } else {
                token.after = value.slice(whitespacePos + 1, next);
                token.sourceEndIndex = next;
              }
            } else {
              token.after = "";
              token.nodes = [];
            }
            pos = next + 1;
            token.sourceEndIndex = token.unclosed ? next : pos;
            code = value.charCodeAt(pos);
            tokens.push(token);
          } else {
            balanced += 1;
            token.after = "";
            token.sourceEndIndex = pos + 1;
            tokens.push(token);
            stack.push(token);
            tokens = token.nodes = [];
            parent = token;
          }
          name = "";
        } else if (closeParentheses === code && balanced) {
          pos += 1;
          code = value.charCodeAt(pos);
          parent.after = after;
          parent.sourceEndIndex += after.length;
          after = "";
          balanced -= 1;
          stack[stack.length - 1].sourceEndIndex = pos;
          stack.pop();
          parent = stack[balanced];
          tokens = parent.nodes;
        } else {
          next = pos;
          do {
            if (code === backslash) {
              next += 1;
            }
            next += 1;
            code = value.charCodeAt(next);
          } while (next < max2 && !(code <= 32 || code === singleQuote || code === doubleQuote || code === comma || code === colon || code === slash || code === openParentheses || code === star && parent && parent.type === "function" && parent.value === "calc" || code === slash && parent.type === "function" && parent.value === "calc" || code === closeParentheses && balanced));
          token = value.slice(pos, next);
          if (openParentheses === code) {
            name = token;
          } else if ((uLower === token.charCodeAt(0) || uUpper === token.charCodeAt(0)) && plus === token.charCodeAt(1) && isUnicodeRange.test(token.slice(2))) {
            tokens.push({
              type: "unicode-range",
              sourceIndex: pos,
              sourceEndIndex: next,
              value: token
            });
          } else {
            tokens.push({
              type: "word",
              sourceIndex: pos,
              sourceEndIndex: next,
              value: token
            });
          }
          pos = next;
        }
      }
      for (pos = stack.length - 1; pos; pos -= 1) {
        stack[pos].unclosed = true;
        stack[pos].sourceEndIndex = value.length;
      }
      return stack[0].nodes;
    };
  }
});

// ../../node_modules/postcss-value-parser/lib/walk.js
var require_walk = __commonJS({
  "../../node_modules/postcss-value-parser/lib/walk.js"(exports, module) {
    module.exports = /* @__PURE__ */ __name(function walk(nodes, cb, bubble) {
      var i, max2, node, result;
      for (i = 0, max2 = nodes.length; i < max2; i += 1) {
        node = nodes[i];
        if (!bubble) {
          result = cb(node, i, nodes);
        }
        if (result !== false && node.type === "function" && Array.isArray(node.nodes)) {
          walk(node.nodes, cb, bubble);
        }
        if (bubble) {
          cb(node, i, nodes);
        }
      }
    }, "walk");
  }
});

// ../../node_modules/postcss-value-parser/lib/stringify.js
var require_stringify = __commonJS({
  "../../node_modules/postcss-value-parser/lib/stringify.js"(exports, module) {
    function stringifyNode(node, custom) {
      var type = node.type;
      var value = node.value;
      var buf;
      var customResult;
      if (custom && (customResult = custom(node)) !== void 0) {
        return customResult;
      } else if (type === "word" || type === "space") {
        return value;
      } else if (type === "string") {
        buf = node.quote || "";
        return buf + value + (node.unclosed ? "" : buf);
      } else if (type === "comment") {
        return "/*" + value + (node.unclosed ? "" : "*/");
      } else if (type === "div") {
        return (node.before || "") + value + (node.after || "");
      } else if (Array.isArray(node.nodes)) {
        buf = stringify(node.nodes, custom);
        if (type !== "function") {
          return buf;
        }
        return value + "(" + (node.before || "") + buf + (node.after || "") + (node.unclosed ? "" : ")");
      }
      return value;
    }
    __name(stringifyNode, "stringifyNode");
    function stringify(nodes, custom) {
      var result, i;
      if (Array.isArray(nodes)) {
        result = "";
        for (i = nodes.length - 1; ~i; i -= 1) {
          result = stringifyNode(nodes[i], custom) + result;
        }
        return result;
      }
      return stringifyNode(nodes, custom);
    }
    __name(stringify, "stringify");
    module.exports = stringify;
  }
});

// ../../node_modules/postcss-value-parser/lib/unit.js
var require_unit = __commonJS({
  "../../node_modules/postcss-value-parser/lib/unit.js"(exports, module) {
    var minus = "-".charCodeAt(0);
    var plus = "+".charCodeAt(0);
    var dot = ".".charCodeAt(0);
    var exp = "e".charCodeAt(0);
    var EXP = "E".charCodeAt(0);
    function likeNumber(value) {
      var code = value.charCodeAt(0);
      var nextCode;
      if (code === plus || code === minus) {
        nextCode = value.charCodeAt(1);
        if (nextCode >= 48 && nextCode <= 57) {
          return true;
        }
        var nextNextCode = value.charCodeAt(2);
        if (nextCode === dot && nextNextCode >= 48 && nextNextCode <= 57) {
          return true;
        }
        return false;
      }
      if (code === dot) {
        nextCode = value.charCodeAt(1);
        if (nextCode >= 48 && nextCode <= 57) {
          return true;
        }
        return false;
      }
      if (code >= 48 && code <= 57) {
        return true;
      }
      return false;
    }
    __name(likeNumber, "likeNumber");
    module.exports = function(value) {
      var pos = 0;
      var length = value.length;
      var code;
      var nextCode;
      var nextNextCode;
      if (length === 0 || !likeNumber(value)) {
        return false;
      }
      code = value.charCodeAt(pos);
      if (code === plus || code === minus) {
        pos++;
      }
      while (pos < length) {
        code = value.charCodeAt(pos);
        if (code < 48 || code > 57) {
          break;
        }
        pos += 1;
      }
      code = value.charCodeAt(pos);
      nextCode = value.charCodeAt(pos + 1);
      if (code === dot && nextCode >= 48 && nextCode <= 57) {
        pos += 2;
        while (pos < length) {
          code = value.charCodeAt(pos);
          if (code < 48 || code > 57) {
            break;
          }
          pos += 1;
        }
      }
      code = value.charCodeAt(pos);
      nextCode = value.charCodeAt(pos + 1);
      nextNextCode = value.charCodeAt(pos + 2);
      if ((code === exp || code === EXP) && (nextCode >= 48 && nextCode <= 57 || (nextCode === plus || nextCode === minus) && nextNextCode >= 48 && nextNextCode <= 57)) {
        pos += nextCode === plus || nextCode === minus ? 3 : 2;
        while (pos < length) {
          code = value.charCodeAt(pos);
          if (code < 48 || code > 57) {
            break;
          }
          pos += 1;
        }
      }
      return {
        number: value.slice(0, pos),
        unit: value.slice(pos)
      };
    };
  }
});

// ../../node_modules/postcss-value-parser/lib/index.js
var require_lib = __commonJS({
  "../../node_modules/postcss-value-parser/lib/index.js"(exports, module) {
    var parse = require_parse();
    var walk = require_walk();
    var stringify = require_stringify();
    function ValueParser(value) {
      if (this instanceof ValueParser) {
        this.nodes = parse(value);
        return this;
      }
      return new ValueParser(value);
    }
    __name(ValueParser, "ValueParser");
    ValueParser.prototype.toString = function() {
      return Array.isArray(this.nodes) ? stringify(this.nodes) : "";
    };
    ValueParser.prototype.walk = function(cb, bubble) {
      walk(this.nodes, cb, bubble);
      return this;
    };
    ValueParser.unit = require_unit();
    ValueParser.walk = walk;
    ValueParser.stringify = stringify;
    module.exports = ValueParser;
  }
});

// ../../node_modules/react-native-web/node_modules/@babel/runtime/helpers/extends.js
var require_extends = __commonJS({
  "../../node_modules/react-native-web/node_modules/@babel/runtime/helpers/extends.js"(exports, module) {
    function _extends4() {
      return module.exports = _extends4 = Object.assign ? Object.assign.bind() : function(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t = arguments[e];
          for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
        }
        return n;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _extends4.apply(null, arguments);
    }
    __name(_extends4, "_extends");
    module.exports = _extends4, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/fbjs/lib/invariant.js
var require_invariant = __commonJS({
  "../../node_modules/fbjs/lib/invariant.js"(exports, module) {
    "use strict";
    var validateFormat = process.env.NODE_ENV !== "production" ? function(format) {
      if (format === void 0) {
        throw new Error("invariant(...): Second argument must be a string.");
      }
    } : function(format) {
    };
    function invariant6(condition, format) {
      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }
      validateFormat(format);
      if (!condition) {
        var error2;
        if (format === void 0) {
          error2 = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        } else {
          var argIndex = 0;
          error2 = new Error(format.replace(/%s/g, function() {
            return String(args[argIndex++]);
          }));
          error2.name = "Invariant Violation";
        }
        error2.framesToPop = 1;
        throw error2;
      }
    }
    __name(invariant6, "invariant");
    module.exports = invariant6;
  }
});

// ../../node_modules/fbjs/lib/emptyFunction.js
var require_emptyFunction = __commonJS({
  "../../node_modules/fbjs/lib/emptyFunction.js"(exports, module) {
    "use strict";
    function makeEmptyFunction(arg) {
      return function() {
        return arg;
      };
    }
    __name(makeEmptyFunction, "makeEmptyFunction");
    var emptyFunction2 = /* @__PURE__ */ __name(function emptyFunction3() {
    }, "emptyFunction");
    emptyFunction2.thatReturns = makeEmptyFunction;
    emptyFunction2.thatReturnsFalse = makeEmptyFunction(false);
    emptyFunction2.thatReturnsTrue = makeEmptyFunction(true);
    emptyFunction2.thatReturnsNull = makeEmptyFunction(null);
    emptyFunction2.thatReturnsThis = function() {
      return this;
    };
    emptyFunction2.thatReturnsArgument = function(arg) {
      return arg;
    };
    module.exports = emptyFunction2;
  }
});

// ../../node_modules/fbjs/lib/warning.js
var require_warning = __commonJS({
  "../../node_modules/fbjs/lib/warning.js"(exports, module) {
    "use strict";
    var emptyFunction2 = require_emptyFunction();
    function printWarning(format) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var argIndex = 0;
      var message = "Warning: " + format.replace(/%s/g, function() {
        return args[argIndex++];
      });
      if (typeof console !== "undefined") {
        console.error(message);
      }
      try {
        throw new Error(message);
      } catch (x) {
      }
    }
    __name(printWarning, "printWarning");
    var warning2 = process.env.NODE_ENV !== "production" ? function(condition, format) {
      if (format === void 0) {
        throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
      }
      if (!condition) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }
        printWarning.apply(void 0, [format].concat(args));
      }
    } : emptyFunction2;
    module.exports = warning2;
  }
});

// node_modules/@tamagui/spacer/dist/esm/spacedChildren.mjs
import { createComponent } from "@tamagui/web";
import React from "react";

// node_modules/@tamagui/spacer/dist/esm/Spacer.mjs
import { styled, View } from "@tamagui/web";
var getSpacerSize = /* @__PURE__ */ __name((size4, {
  tokens
}) => {
  size4 = size4 === true ? "$true" : size4;
  const sizePx = tokens.space[size4] ?? size4;
  return {
    width: sizePx,
    height: sizePx,
    minWidth: sizePx,
    minHeight: sizePx
  };
}, "getSpacerSize");
var Spacer = styled(View, {
  name: "Spacer",
  pointerEvents: "none",
  render: "span",
  variants: {
    size: {
      "...size": getSpacerSize,
      "...": getSpacerSize
    },
    direction: {
      horizontal: {
        height: 0,
        minHeight: 0
      },
      vertical: {
        width: 0,
        minWidth: 0
      },
      both: {}
    }
  },
  defaultVariants: {
    // @ts-ignore
    size: true
  }
});

// node_modules/@tamagui/spacer/dist/esm/Unspaced.mjs
function Unspaced(props) {
  return props.children;
}
__name(Unspaced, "Unspaced");
Unspaced.isUnspaced = true;
function isUnspaced(child) {
  const t = child?.type;
  return t?.isVisuallyHidden || t?.isUnspaced;
}
__name(isUnspaced, "isUnspaced");

// node_modules/@tamagui/spacer/dist/esm/spacedChildren.mjs
import { jsx } from "react/jsx-runtime";
function spacedChildren(props) {
  const {
    isZStack,
    children,
    space,
    direction,
    spaceFlex,
    separator,
    ensureKeys
  } = props, hasSpace = !!(space || spaceFlex), hasSeparator = separator != null, areChildrenArray = Array.isArray(children);
  if (!ensureKeys && !(hasSpace || hasSeparator || isZStack)) return children;
  const childrenList = areChildrenArray ? children : React.Children.toArray(children);
  if (childrenList.length <= 1 && !isZStack && !childrenList[0]?.type?.shouldForwardSpace) return children;
  const final = [];
  for (let [index2, child] of childrenList.entries()) {
    const isEmpty = child == null || Array.isArray(child) && child.length === 0;
    if (!isEmpty && React.isValidElement(child) && child.type?.shouldForwardSpace && (child = React.cloneElement(child, {
      space,
      spaceFlex,
      separator,
      key: child.key
    })), isEmpty || !child || child.key && !isZStack ? final.push(child) : final.push(/* @__PURE__ */ jsx(React.Fragment, {
      children: isZStack ? /* @__PURE__ */ jsx(AbsoluteFill, {
        children: child
      }) : child
    }, `${index2}0t`)), isUnspaced(child) && index2 === 0 || isZStack) continue;
    const next = childrenList[index2 + 1];
    next && !isEmpty && !isUnspaced(next) && (separator ? (hasSpace && final.push(createSpacer({
      key: `_${index2}_00t`,
      direction,
      space,
      spaceFlex
    })), final.push(/* @__PURE__ */ jsx(React.Fragment, {
      children: separator
    }, `${index2}03t`)), hasSpace && final.push(createSpacer({
      key: `_${index2}01t`,
      direction,
      space,
      spaceFlex
    }))) : final.push(createSpacer({
      key: `_${index2}02t`,
      direction,
      space,
      spaceFlex
    })));
  }
  return process.env.NODE_ENV === "development" && props.debug && console.info("  Spaced children", final, props), final;
}
__name(spacedChildren, "spacedChildren");
function createSpacer({
  key,
  direction,
  space,
  spaceFlex
}) {
  return /* @__PURE__ */ jsx(Spacer, {
    size: space,
    direction,
    ...typeof spaceFlex < "u" && {
      flex: spaceFlex === true ? 1 : spaceFlex === false ? 0 : spaceFlex
    }
  }, key);
}
__name(createSpacer, "createSpacer");
var AbsoluteFill = createComponent({
  defaultProps: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    pointerEvents: "box-none"
  }
});

// node_modules/@tamagui/animate-presence/dist/esm/AnimatePresence.mjs
import { useInsertionEffect } from "react";

// node_modules/@tamagui/use-constant/dist/esm/index.mjs
import * as React2 from "react";
function useConstant(fn) {
  if (typeof document > "u") return React2.useMemo(() => fn(), []);
  const ref = React2.useRef(void 0);
  return ref.current || (ref.current = {
    v: fn()
  }), ref.current.v;
}
__name(useConstant, "useConstant");

// node_modules/@tamagui/use-force-update/dist/esm/index.mjs
import React3 from "react";
var isServerSide = typeof window > "u";
var idFn = /* @__PURE__ */ __name(() => {
}, "idFn");
function useForceUpdate() {
  return isServerSide ? idFn : React3.useReducer((x) => Math.random(), 0)[1];
}
__name(useForceUpdate, "useForceUpdate");

// node_modules/@tamagui/animate-presence/dist/esm/AnimatePresence.mjs
import { Children, isValidElement, useContext as useContext3, useMemo as useMemo3, useRef as useRef2, useState } from "react";

// node_modules/@tamagui/animate-presence/dist/esm/LayoutGroupContext.mjs
import React4 from "react";
var LayoutGroupContext = React4.createContext({});

// node_modules/@tamagui/use-presence/dist/esm/PresenceContext.mjs
import * as React5 from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var PresenceContext = React5.createContext(null);
var ResetPresence = /* @__PURE__ */ __name((props) => {
  const parent = React5.useContext(PresenceContext);
  return /* @__PURE__ */ jsx2(PresenceContext.Provider, {
    value: props.disable ? parent : null,
    children: props.children
  });
}, "ResetPresence");

// node_modules/@tamagui/use-presence/dist/esm/usePresence.mjs
import * as React6 from "react";
function usePresence() {
  const context4 = React6.useContext(PresenceContext);
  if (!context4) return [true, null, context4];
  const {
    id,
    isPresent: isPresent2,
    onExitComplete,
    register
  } = context4;
  return React6.useEffect(() => register(id), []), !isPresent2 && onExitComplete ? [false, () => onExitComplete?.(id), context4] : [true, void 0, context4];
}
__name(usePresence, "usePresence");
function useIsPresent() {
  return isPresent(React6.useContext(PresenceContext));
}
__name(useIsPresent, "useIsPresent");
function isPresent(context4) {
  return context4 === null ? true : context4.isPresent;
}
__name(isPresent, "isPresent");

// node_modules/@tamagui/animate-presence/dist/esm/PresenceChild.mjs
import * as React7 from "react";
import { useId } from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var PresenceChild = React7.memo(({
  children,
  initial,
  isPresent: isPresent2,
  onExitComplete,
  exitVariant,
  enterVariant,
  enterExitVariant,
  presenceAffectsLayout,
  custom
}) => {
  const presenceChildren = useConstant(newChildrenMap), id = useId() || "", context4 = React7.useMemo(
    () => ({
      id,
      initial,
      isPresent: isPresent2,
      custom,
      exitVariant,
      enterVariant,
      enterExitVariant,
      onExitComplete: /* @__PURE__ */ __name(() => {
        presenceChildren.set(id, true);
        for (const isComplete of presenceChildren.values()) if (!isComplete) return;
        onExitComplete?.();
      }, "onExitComplete"),
      register: /* @__PURE__ */ __name(() => (presenceChildren.set(id, false), () => presenceChildren.delete(id)), "register")
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    // @ts-expect-error its ok
    presenceAffectsLayout ? void 0 : [isPresent2, exitVariant, enterVariant]
  );
  return React7.useMemo(() => {
    presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
  }, [isPresent2]), React7.useEffect(() => {
    !isPresent2 && !presenceChildren.size && onExitComplete?.();
  }, [isPresent2]), /* @__PURE__ */ jsx3(PresenceContext.Provider, {
    value: context4,
    children
  });
});
function newChildrenMap() {
  return /* @__PURE__ */ new Map();
}
__name(newChildrenMap, "newChildrenMap");

// node_modules/@tamagui/animate-presence/dist/esm/AnimatePresence.mjs
import { Fragment, jsx as jsx4 } from "react/jsx-runtime";
var getChildKey = /* @__PURE__ */ __name((child) => child.key || (() => {
  const ct = child.type, defaultName = ct.displayName || ct.name || "";
  return ct && typeof ct == "object" && "staticConfig" in ct && ct.staticConfig.componentName || defaultName;
})(), "getChildKey");
function onlyElements(children) {
  const filtered = [];
  return Children.forEach(children, (child) => {
    isValidElement(child) && filtered.push(child);
  }), filtered;
}
__name(onlyElements, "onlyElements");
var AnimatePresence = /* @__PURE__ */ __name(({
  children,
  enterVariant,
  exitVariant,
  enterExitVariant,
  initial = true,
  onExitComplete,
  exitBeforeEnter,
  mode,
  presenceAffectsLayout = true,
  custom,
  passThrough
}) => {
  const effectiveMode = mode ?? (exitBeforeEnter ? "wait" : "sync"), presentChildren = useMemo3(() => onlyElements(children), [children]), presentKeys = presentChildren.map(getChildKey), isInitialRender = useRef2(true), frozenCustomRef = useRef2(/* @__PURE__ */ new Map()), pendingPresentChildren = useRef2(presentChildren), exitComplete = useConstant(() => /* @__PURE__ */ new Map()), [diffedChildren, setDiffedChildren] = useState(presentChildren), [renderedChildren, setRenderedChildren] = useState(presentChildren), forceRender = useContext3(LayoutGroupContext).forceRender ?? useForceUpdate();
  if (passThrough) return /* @__PURE__ */ jsx4(Fragment, {
    children
  });
  if (useInsertionEffect(() => {
    isInitialRender.current = false, pendingPresentChildren.current = presentChildren;
    for (let i = 0; i < renderedChildren.length; i++) {
      const key = getChildKey(renderedChildren[i]);
      presentKeys.includes(key) ? (exitComplete.delete(key), frozenCustomRef.current.delete(key)) : exitComplete.get(key) !== true && exitComplete.set(key, false);
    }
  }, [renderedChildren, presentKeys.length, presentKeys.join("-")]), presentChildren !== diffedChildren) {
    let nextChildren = [...presentChildren];
    for (let i = 0; i < renderedChildren.length; i++) {
      const child = renderedChildren[i], key = getChildKey(child);
      presentKeys.includes(key) || (nextChildren.splice(i, 0, child), frozenCustomRef.current.has(key) || frozenCustomRef.current.set(key, custom));
    }
    const exitingChildren = renderedChildren.filter((child) => !presentKeys.includes(getChildKey(child)));
    return effectiveMode === "wait" && exitingChildren.length && (nextChildren = exitingChildren), setRenderedChildren(onlyElements(nextChildren)), setDiffedChildren(presentChildren), null;
  }
  return /* @__PURE__ */ jsx4(Fragment, {
    children: renderedChildren.map((child) => {
      const key = getChildKey(child), isPresent2 = presentChildren === renderedChildren || presentKeys.includes(key), onExit = /* @__PURE__ */ __name(() => {
        if (exitComplete.has(key)) exitComplete.set(key, true);
        else return;
        let isEveryExitComplete = true;
        exitComplete.forEach((isExitComplete) => {
          isExitComplete || (isEveryExitComplete = false);
        }), isEveryExitComplete && (forceRender?.(), setRenderedChildren(pendingPresentChildren.current), onExitComplete?.());
      }, "onExit");
      return /* @__PURE__ */ jsx4(PresenceChild, {
        isPresent: isPresent2,
        initial: !isInitialRender.current || initial ? void 0 : false,
        custom: isPresent2 ? custom : frozenCustomRef.current.get(key) ?? custom,
        presenceAffectsLayout,
        enterExitVariant,
        enterVariant,
        exitVariant,
        onExitComplete: isPresent2 ? void 0 : onExit,
        children: child
      }, key);
    })
  });
}, "AnimatePresence");
AnimatePresence.displayName = "AnimatePresence";

// ../../node_modules/@tamagui/simple-hash/dist/esm/index.mjs
var cache = /* @__PURE__ */ new Map();
var cacheSize = 0;
var simpleHash = /* @__PURE__ */ __name((strIn, hashMin = 10) => {
  if (cache.has(strIn)) return cache.get(strIn);
  let str = strIn;
  str[0] === "v" && str.startsWith("var(") && (str = str.slice(6, str.length - 1));
  let hash2 = 0, valids = "", added = 0;
  const len = str.length;
  for (let i = 0; i < len; i++) {
    if (hashMin !== "strict" && added <= hashMin) {
      const char = str.charCodeAt(i);
      if (char === 46) {
        valids += "--";
        continue;
      }
      if (isValidCSSCharCode(char)) {
        added++, valids += str[i];
        continue;
      }
    }
    hash2 = hashChar(hash2, str[i]);
  }
  const res = valids + (hash2 ? Math.abs(hash2) : "");
  return cacheSize > 1e4 && (cache.clear(), cacheSize = 0), cache.set(strIn, res), cacheSize++, res;
}, "simpleHash");
var hashChar = /* @__PURE__ */ __name((hash2, c) => Math.imul(31, hash2) + c.charCodeAt(0) | 0, "hashChar");
function isValidCSSCharCode(code) {
  return (
    // A-Z
    code >= 65 && code <= 90 || // a-z
    code >= 97 && code <= 122 || // _
    code === 95 || // -
    code === 45 || // 0-9
    code >= 48 && code <= 57
  );
}
__name(isValidCSSCharCode, "isValidCSSCharCode");

// node_modules/@tamagui/helpers/dist/esm/clamp.mjs
function clamp(value, [min2, max2]) {
  return Math.min(max2, Math.max(min2, value));
}
__name(clamp, "clamp");

// node_modules/@tamagui/helpers/dist/esm/composeEventHandlers.mjs
function composeEventHandlers(og, next, {
  checkDefaultPrevented = true
} = {}) {
  return !og || !next ? next || og || void 0 : (event) => {
    if (og?.(event), !event || !(checkDefaultPrevented && typeof event == "object" && "defaultPrevented" in event) || // @ts-ignore
    "defaultPrevented" in event && !event.defaultPrevented) return next?.(event);
  };
}
__name(composeEventHandlers, "composeEventHandlers");

// node_modules/@tamagui/helpers/dist/esm/types.mjs
var StyleObjectProperty = 0;
var StyleObjectValue = 1;
var StyleObjectIdentifier = 2;
var StyleObjectPseudo = 3;
var StyleObjectRules = 4;

// node_modules/@tamagui/constants/dist/esm/constants.mjs
import { useEffect as useEffect3, useLayoutEffect } from "react";
var isWeb = true;
var isBrowser = typeof window < "u";
var isServer = isWeb && !isBrowser;
var isClient = isWeb && isBrowser;
var useIsomorphicLayoutEffect = isServer ? useEffect3 : useLayoutEffect;
var isChrome = typeof navigator < "u" && /Chrome/.test(navigator.userAgent || "");
var isWebTouchable = isClient && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
var isTouchable = !isWeb || isWebTouchable;
var isAndroid = false;
var isIos = process.env.TEST_NATIVE_PLATFORM === "ios";
var currentPlatform = "web";

// node_modules/@tamagui/helpers/dist/esm/shouldRenderNativePlatform.mjs
var ALL_PLATFORMS = ["web", "android", "ios"];
function shouldRenderNativePlatform(nativeProp) {
  if (!nativeProp) return null;
  const userRequestedPlatforms = resolvePlatformNames(nativeProp);
  for (const platform2 of ALL_PLATFORMS) if (platform2 === currentPlatform && userRequestedPlatforms.has(platform2)) return platform2;
  return null;
}
__name(shouldRenderNativePlatform, "shouldRenderNativePlatform");
function resolvePlatformNames(nativeProp) {
  const platforms = nativeProp === true ? ALL_PLATFORMS : nativeProp === false ? [] : Array.isArray(nativeProp) ? nativeProp : [nativeProp], set = new Set(platforms);
  return set.has("mobile") && (set.add("android"), set.add("ios"), set.delete("mobile")), set;
}
__name(resolvePlatformNames, "resolvePlatformNames");

// node_modules/@tamagui/helpers/dist/esm/webOnlyStyleProps.mjs
var nonAnimatableWebViewProps = {
  backgroundAttachment: true,
  backgroundBlendMode: true,
  backgroundClip: true,
  backgroundOrigin: true,
  backgroundRepeat: true,
  borderBottomStyle: true,
  borderLeftStyle: true,
  borderRightStyle: true,
  borderTopStyle: true,
  contain: true,
  containerType: true,
  content: true,
  float: true,
  maskBorderMode: true,
  maskBorderRepeat: true,
  maskClip: true,
  maskComposite: true,
  maskMode: true,
  maskOrigin: true,
  maskRepeat: true,
  maskType: true,
  objectFit: true,
  overflowBlock: true,
  overflowInline: true,
  overflowX: true,
  overflowY: true,
  // NOTE: pointerEvents is NOT web-only - it's a core React Native View prop (not a style)
  pointerEvents: true,
  scrollbarWidth: true,
  textWrap: true,
  touchAction: true,
  transformStyle: true,
  willChange: true
};
var nonAnimatableWebTextProps = {
  whiteSpace: true,
  wordWrap: true,
  textOverflow: true,
  WebkitBoxOrient: true
};
var webOnlyStylePropsView = {
  ...nonAnimatableWebViewProps,
  transition: true,
  backdropFilter: true,
  WebkitBackdropFilter: true,
  background: true,
  borderTop: true,
  borderRight: true,
  borderBottom: true,
  borderLeft: true,
  backgroundPosition: true,
  backgroundSize: true,
  borderImage: true,
  caretColor: true,
  clipPath: true,
  mask: true,
  maskBorder: true,
  maskBorderOutset: true,
  maskBorderSlice: true,
  maskBorderSource: true,
  maskBorderWidth: true,
  maskImage: true,
  maskPosition: true,
  maskSize: true,
  objectPosition: true,
  textEmphasis: true,
  userSelect: true
};
var webOnlyStylePropsText = {
  ...nonAnimatableWebTextProps,
  textDecorationDistance: true,
  // cursor: now cross-platform - in stylePropsView
  WebkitLineClamp: true
};

// node_modules/@tamagui/helpers/dist/esm/validStyleProps.mjs
var cssShorthandLonghands = {
  // border longhands
  borderWidth: true,
  borderStyle: true,
  borderColor: true,
  borderTopWidth: true,
  borderTopStyle: true,
  borderTopColor: true,
  borderRightWidth: true,
  borderRightStyle: true,
  borderRightColor: true,
  borderBottomWidth: true,
  borderBottomStyle: true,
  borderBottomColor: true,
  borderLeftWidth: true,
  borderLeftStyle: true,
  borderLeftColor: true,
  // outline longhands
  outlineWidth: true,
  outlineStyle: true,
  outlineColor: true,
  outlineOffset: true
};
var textColors = {
  color: true,
  textDecorationColor: true,
  textShadowColor: true
};
var tokenCategories = {
  radius: {
    borderRadius: true,
    borderTopLeftRadius: true,
    borderTopRightRadius: true,
    borderBottomLeftRadius: true,
    borderBottomRightRadius: true,
    // logical
    borderStartStartRadius: true,
    borderStartEndRadius: true,
    borderEndStartRadius: true,
    borderEndEndRadius: true
  },
  size: {
    width: true,
    height: true,
    minWidth: true,
    minHeight: true,
    maxWidth: true,
    maxHeight: true,
    blockSize: true,
    minBlockSize: true,
    maxBlockSize: true,
    inlineSize: true,
    minInlineSize: true,
    maxInlineSize: true
  },
  zIndex: {
    zIndex: true
  },
  color: {
    backgroundColor: true,
    borderColor: true,
    borderBlockStartColor: true,
    borderBlockEndColor: true,
    borderBlockColor: true,
    borderBottomColor: true,
    borderInlineColor: true,
    borderInlineStartColor: true,
    borderInlineEndColor: true,
    borderTopColor: true,
    borderLeftColor: true,
    borderRightColor: true,
    borderEndColor: true,
    borderStartColor: true,
    shadowColor: true,
    ...textColors,
    // outlineColor is supported on RN 0.77+ (New Architecture)
    outlineColor: true,
    caretColor: true
  }
};
var nonAnimatableViewProps = {
  alignContent: true,
  alignItems: true,
  alignSelf: true,
  backfaceVisibility: true,
  borderCurve: true,
  borderStyle: true,
  borderBlockStyle: true,
  borderBlockEndStyle: true,
  borderBlockStartStyle: true,
  borderInlineStyle: true,
  borderInlineEndStyle: true,
  borderInlineStartStyle: true,
  boxSizing: true,
  cursor: true,
  direction: true,
  display: true,
  flexDirection: true,
  flexWrap: true,
  isolation: true,
  justifyContent: true,
  mixBlendMode: true,
  outlineStyle: true,
  overflow: true,
  position: true
};
var nonAnimatableFontProps = {
  fontFamily: true,
  fontStyle: true,
  fontVariant: true,
  textTransform: true
};
var nonAnimatableTextOnlyProps = {
  textAlign: true,
  textDecorationLine: true,
  textDecorationStyle: true,
  userSelect: true
};
var nonAnimatableUnitlessProps = {
  WebkitLineClamp: true,
  lineClamp: true,
  gridTemplateColumns: true,
  gridTemplateAreas: true
};
var nonAnimatableStyleProps = {
  ...nonAnimatableViewProps,
  ...nonAnimatableFontProps,
  ...nonAnimatableTextOnlyProps,
  ...nonAnimatableUnitlessProps,
  ...nonAnimatableWebViewProps,
  ...nonAnimatableWebTextProps
};
var stylePropsUnitless = {
  ...nonAnimatableUnitlessProps,
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexOrder: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  fontWeight: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowGap: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnGap: true,
  gridColumnStart: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  scale: true,
  scaleX: true,
  scaleY: true,
  scaleZ: true,
  shadowOpacity: true
};
var stylePropsTransform = {
  x: true,
  y: true,
  scale: true,
  perspective: true,
  scaleX: true,
  scaleY: true,
  skewX: true,
  skewY: true,
  matrix: true,
  rotate: true,
  rotateY: true,
  rotateX: true,
  rotateZ: true
};
var stylePropsView = {
  ...nonAnimatableViewProps,
  borderBottomEndRadius: true,
  borderBottomStartRadius: true,
  borderBottomWidth: true,
  borderLeftWidth: true,
  borderRightWidth: true,
  borderBlockWidth: true,
  borderBlockEndWidth: true,
  borderBlockStartWidth: true,
  borderInlineWidth: true,
  borderInlineEndWidth: true,
  borderInlineStartWidth: true,
  borderTopEndRadius: true,
  borderTopStartRadius: true,
  borderTopWidth: true,
  borderWidth: true,
  transform: true,
  transformOrigin: true,
  borderEndWidth: true,
  borderStartWidth: true,
  bottom: true,
  end: true,
  flexBasis: true,
  gap: true,
  columnGap: true,
  rowGap: true,
  left: true,
  margin: true,
  marginBlock: true,
  marginBlockEnd: true,
  marginBlockStart: true,
  marginInline: true,
  marginInlineStart: true,
  marginInlineEnd: true,
  marginBottom: true,
  marginEnd: true,
  marginHorizontal: true,
  marginLeft: true,
  marginRight: true,
  marginStart: true,
  marginTop: true,
  marginVertical: true,
  padding: true,
  paddingBottom: true,
  paddingInline: true,
  paddingBlock: true,
  paddingBlockStart: true,
  paddingInlineEnd: true,
  paddingInlineStart: true,
  paddingEnd: true,
  paddingHorizontal: true,
  paddingLeft: true,
  paddingRight: true,
  paddingStart: true,
  paddingTop: true,
  paddingVertical: true,
  right: true,
  start: true,
  top: true,
  inset: true,
  insetBlock: true,
  insetBlockEnd: true,
  insetBlockStart: true,
  insetInline: true,
  insetInlineEnd: true,
  insetInlineStart: true,
  shadowOffset: true,
  shadowRadius: true,
  ...tokenCategories.color,
  ...tokenCategories.radius,
  ...tokenCategories.size,
  ...stylePropsTransform,
  ...stylePropsUnitless,
  ...isAndroid ? {
    elevationAndroid: true
  } : {},
  boxShadow: true,
  border: true,
  filter: true,
  // RN 0.76+ supports linear-gradient via backgroundImage
  backgroundImage: true,
  // the actual RN 0.76+ prop name (backgroundImage expands to this on native)
  experimental_backgroundImage: true,
  // RN 0.76/0.77+ style props (New Architecture)
  outline: true,
  outlineColor: true,
  outlineOffset: true,
  outlineWidth: true,
  // web-only for convenience - tree-shaken on native
  ...webOnlyStylePropsView
};
var stylePropsFont = {
  ...nonAnimatableFontProps,
  fontSize: true,
  fontWeight: true,
  letterSpacing: true,
  lineHeight: true
};
var stylePropsTextOnly = {
  ...stylePropsFont,
  ...nonAnimatableTextOnlyProps,
  ...textColors,
  textShadow: true,
  textShadowOffset: true,
  textShadowRadius: true,
  verticalAlign: true,
  // web-only text props - tree-shaken on native
  ...webOnlyStylePropsText
};
var stylePropsText = {
  ...stylePropsView,
  ...stylePropsTextOnly
};
var stylePropsAll = stylePropsText;
var validPseudoKeys = {
  enterStyle: true,
  exitStyle: true,
  hoverStyle: true,
  pressStyle: true,
  focusStyle: true,
  disabledStyle: true,
  focusWithinStyle: true,
  focusVisibleStyle: true
};
var validStyles = stylePropsView;

// node_modules/@tamagui/helpers/dist/esm/withStaticProperties.mjs
var Decorated = /* @__PURE__ */ Symbol();
var withStaticProperties = /* @__PURE__ */ __name((component, staticProps) => (Object.assign(component, staticProps), component[Decorated] = true, component), "withStaticProperties");

// node_modules/@tamagui/use-event/dist/esm/useGet.mjs
import * as React8 from "react";
var isServer2 = typeof window > "u";
var useIsomorphicInsertionEffect = isServer2 ? React8.useEffect : React8.useInsertionEffect || React8.useLayoutEffect;
function useGet(currentValue, initialValue2, forwardToFunction) {
  const curRef = React8.useRef(initialValue2 ?? currentValue);
  return useIsomorphicInsertionEffect(() => {
    curRef.current = currentValue;
  }), React8.useCallback(forwardToFunction ? (...args) => curRef.current?.apply(null, args) : () => curRef.current, []);
}
__name(useGet, "useGet");

// node_modules/@tamagui/use-event/dist/esm/useEvent.mjs
function useEvent(callback) {
  return useGet(callback, defaultValue, true);
}
__name(useEvent, "useEvent");
var defaultValue = /* @__PURE__ */ __name(() => {
  throw new Error("Cannot call an event handler while rendering.");
}, "defaultValue");

// node_modules/@tamagui/use-controllable-state/dist/esm/useControllableState.mjs
import * as React9 from "react";

// node_modules/@tamagui/start-transition/dist/esm/index.mjs
import { startTransition as reactStartTransition } from "react";
var startTransition = /* @__PURE__ */ __name((callback) => {
  reactStartTransition(callback);
}, "startTransition");

// node_modules/@tamagui/use-controllable-state/dist/esm/useControllableState.mjs
var emptyCallbackFn = /* @__PURE__ */ __name((_) => _(), "emptyCallbackFn");
function useControllableState({
  prop,
  defaultProp,
  onChange,
  strategy = "prop-wins",
  preventUpdate,
  transition: transition2
}) {
  const [state5, setState] = React9.useState(prop ?? defaultProp), previous = React9.useRef(state5), propWins = strategy === "prop-wins" && prop !== void 0, value = propWins ? prop : state5, onChangeCb = useEvent(onChange || idFn2), transitionFn = transition2 ? startTransition : emptyCallbackFn;
  React9.useEffect(() => {
    prop !== void 0 && (previous.current = prop, transitionFn(() => {
      setState(prop);
    }));
  }, [prop]), React9.useEffect(() => {
    propWins || state5 !== previous.current && (previous.current = state5, onChangeCb(state5));
  }, [onChangeCb, state5, propWins]);
  const setter = useEvent((next) => {
    if (!preventUpdate) if (propWins) {
      const nextValue = typeof next == "function" ? next(previous.current) : next;
      onChangeCb(nextValue);
    } else transitionFn(() => {
      setState(next);
    });
  });
  return [value, setter];
}
__name(useControllableState, "useControllableState");
var idFn2 = /* @__PURE__ */ __name(() => {
}, "idFn");

// node_modules/@tamagui/collapsible/dist/esm/Collapsible.mjs
import { View as View2, createStyledContext, styled as styled2 } from "@tamagui/web";
import * as React10 from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
var COLLAPSIBLE_NAME = "Collapsible";
var {
  Provider: CollapsibleProvider,
  useStyledContext: useCollapsibleContext
} = createStyledContext();
var _Collapsible = React10.forwardRef((props, forwardedRef) => {
  const {
    __scopeCollapsible,
    open: openProp,
    defaultOpen,
    disabled,
    onOpenChange,
    ...collapsibleProps
  } = props, [open2 = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ jsx5(CollapsibleProvider, {
    scope: __scopeCollapsible,
    disabled,
    contentId: React10.useId(),
    open: open2,
    onOpenToggle: React10.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
    children: /* @__PURE__ */ jsx5(View2, {
      "data-state": getState(open2),
      "data-disabled": disabled ? "" : void 0,
      ...collapsibleProps,
      ref: forwardedRef
    })
  });
});
_Collapsible.displayName = COLLAPSIBLE_NAME;
var TRIGGER_NAME = "CollapsibleTrigger";
var CollapsibleTriggerFrame = styled2(View2, {
  name: TRIGGER_NAME,
  render: "button"
});
var CollapsibleTrigger = CollapsibleTriggerFrame.styleable((props, forwardedRef) => {
  const {
    __scopeCollapsible,
    children,
    ...triggerProps
  } = props, context4 = useCollapsibleContext(__scopeCollapsible);
  return /* @__PURE__ */ jsx5(CollapsibleTriggerFrame, {
    "aria-controls": context4.contentId,
    "aria-expanded": context4.open || false,
    "data-state": getState(context4.open),
    "data-disabled": context4.disabled ? "" : void 0,
    disabled: context4.disabled,
    ...triggerProps,
    ref: forwardedRef,
    onPress: composeEventHandlers(props.onPress, context4.onOpenToggle),
    children: typeof children == "function" ? children({
      open: context4.open
    }) : children
  });
});
CollapsibleTrigger.displayName = TRIGGER_NAME;
var CONTENT_NAME = "CollapsibleContent";
var CollapsibleContentFrame = styled2(View2, {
  name: CONTENT_NAME
});
var CollapsibleContent = CollapsibleContentFrame.styleable((props, forwardedRef) => {
  const {
    forceMount,
    children,
    // @ts-expect-error
    __scopeCollapsible,
    ...contentProps
  } = props, context4 = useCollapsibleContext(__scopeCollapsible);
  return /* @__PURE__ */ jsx5(AnimatePresence, {
    ...contentProps,
    children: forceMount || context4.open ? /* @__PURE__ */ jsx5(CollapsibleContentFrame, {
      ref: forwardedRef,
      ...contentProps,
      children: /* @__PURE__ */ jsx5(ResetPresence, {
        children
      })
    }) : null
  });
});
CollapsibleContent.displayName = CONTENT_NAME;
function getState(open2) {
  return open2 ? "open" : "closed";
}
__name(getState, "getState");
var Collapsible = withStaticProperties(_Collapsible, {
  Trigger: CollapsibleTrigger,
  Content: CollapsibleContent
});

// node_modules/@tamagui/compose-refs/dist/esm/compose-refs.mjs
import * as React11 from "react";
function setRef(ref, value) {
  typeof ref == "function" ? ref(value) : ref && (ref.current = value);
}
__name(setRef, "setRef");
function composeRefs(...refs) {
  return (node) => refs.forEach((ref) => setRef(ref, node));
}
__name(composeRefs, "composeRefs");
function useComposedRefs(...refs) {
  return React11.useCallback(composeRefs(...refs), refs);
}
__name(useComposedRefs, "useComposedRefs");

// node_modules/@tamagui/collection/dist/esm/Collection.mjs
import { Slot, createStyledContext as createStyledContext2 } from "@tamagui/core";
import React12 from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
function createCollection(name) {
  const {
    Provider: CollectionProviderImpl,
    useStyledContext: useCollectionContext
  } = createStyledContext2({
    collectionRef: {
      current: void 0
    },
    itemMap: /* @__PURE__ */ new Map()
  }, "Toast"), CollectionProvider = /* @__PURE__ */ __name((props) => {
    const {
      scope,
      children
    } = props, ref = React12.useRef(void 0), itemMap = React12.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ jsx6(CollectionProviderImpl, {
      scope,
      itemMap,
      collectionRef: ref,
      children
    });
  }, "CollectionProvider");
  CollectionProvider.displayName = "CollectionProvider";
  const COLLECTION_SLOT_NAME = name + "CollectionSlot", CollectionSlot = React12.forwardRef((props, forwardedRef) => {
    const {
      scope,
      children
    } = props, context4 = useCollectionContext(scope), composedRefs = useComposedRefs(forwardedRef, context4.collectionRef);
    return /* @__PURE__ */ jsx6(Slot, {
      ref: composedRefs,
      children
    });
  });
  CollectionSlot.displayName = COLLECTION_SLOT_NAME;
  const ITEM_SLOT_NAME = name + "CollectionItemSlot", ITEM_DATA_ATTR = "data-collection-item", CollectionItemSlot = React12.forwardRef((props, forwardedRef) => {
    const {
      scope,
      children,
      ...itemData
    } = props, ref = React12.useRef(void 0), composedRefs = useComposedRefs(forwardedRef, ref), context4 = useCollectionContext(scope);
    return React12.useEffect(() => (context4.itemMap.set(ref, {
      ref,
      ...itemData
    }), () => {
      context4.itemMap.delete(ref);
    })), /* @__PURE__ */ jsx6(Slot, {
      [ITEM_DATA_ATTR]: "",
      ref: composedRefs,
      children
    });
  });
  CollectionItemSlot.displayName = ITEM_SLOT_NAME;
  function useCollection5(scope) {
    const context4 = useCollectionContext(scope);
    return React12.useCallback(() => {
      if (!isWeb) return [];
      const collectionNode = context4.collectionRef.current;
      if (!collectionNode) return [];
      const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
      return Array.from(context4.itemMap.values()).sort((a, b) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current));
    }, [context4.collectionRef, context4.itemMap]);
  }
  __name(useCollection5, "useCollection");
  return [{
    Provider: CollectionProvider,
    Slot: CollectionSlot,
    ItemSlot: CollectionItemSlot
  }, useCollection5];
}
__name(createCollection, "createCollection");

// node_modules/@tamagui/accordion/dist/esm/Accordion.mjs
import { View as View4, createStyledContext as createStyledContext3, styled as styled11 } from "@tamagui/core";

// node_modules/@tamagui/stacks/dist/esm/Stacks.mjs
import { View as View3, styled as styled3 } from "@tamagui/core";

// node_modules/@tamagui/stacks/dist/esm/getElevation.mjs
import { getVariableValue, isAndroid as isAndroid2, isVariable } from "@tamagui/core";
var getElevation = /* @__PURE__ */ __name((size4, extras) => {
  if (!size4) return;
  const {
    tokens
  } = extras, token = tokens.size[size4], sizeNum = isVariable(token) ? +token.val : size4;
  return getSizedElevation(sizeNum, extras);
}, "getElevation");
var getSizedElevation = /* @__PURE__ */ __name((val, {
  theme,
  tokens
}) => {
  let num = 0;
  if (val === true) {
    const val2 = getVariableValue(tokens.size.true);
    typeof val2 == "number" ? num = val2 : num = 10;
  } else num = +val;
  if (num === 0) return;
  const [height, shadowRadius] = [Math.round(num / 4 + 1), Math.round(num / 2 + 2)];
  return {
    shadowColor: theme.shadowColor,
    shadowRadius,
    shadowOffset: {
      height,
      width: 0
    },
    ...isAndroid2 ? {
      elevationAndroid: 2 * height
    } : {}
  };
}, "getSizedElevation");

// node_modules/@tamagui/stacks/dist/esm/Stacks.mjs
var fullscreenStyle = {
  position: "absolute",
  inset: 0
};
var variants = {
  fullscreen: {
    true: fullscreenStyle
  },
  elevation: {
    "...size": getElevation,
    ":number": getElevation
  }
};
var YStack = styled3(View3, {
  flexDirection: "column",
  variants
});
YStack.displayName = "YStack";
var XStack = styled3(View3, {
  flexDirection: "row",
  variants
});
XStack.displayName = "XStack";
var ZStack = styled3(YStack, {
  position: "relative"
}, {
  neverFlatten: true,
  isZStack: true
});
ZStack.displayName = "ZStack";

// node_modules/@tamagui/stacks/dist/esm/ThemeableStack.mjs
import { styled as styled4 } from "@tamagui/core";

// node_modules/@tamagui/stacks/dist/esm/variants.mjs
var elevate = {
  true: /* @__PURE__ */ __name((_, extras) => getElevation(extras.props.size, extras), "true")
};
var bordered = /* @__PURE__ */ __name((val, {
  props
}) => ({
  // TODO size it with size in '...size'
  borderWidth: typeof val == "number" ? val : 1,
  borderColor: "$borderColor"
}), "bordered");
var circularStyle = {
  borderRadius: 1e5,
  padding: 0
};
var circular = {
  true: /* @__PURE__ */ __name((_, {
    props,
    tokens
  }) => {
    if (!("size" in props)) return circularStyle;
    const size4 = typeof props.size == "number" ? props.size : tokens.size[props.size];
    return {
      ...circularStyle,
      width: size4,
      height: size4,
      maxWidth: size4,
      maxHeight: size4,
      minWidth: size4,
      minHeight: size4
    };
  }, "true")
};

// node_modules/@tamagui/stacks/dist/esm/ThemeableStack.mjs
var chromelessStyle = {
  backgroundColor: "transparent",
  borderColor: "transparent",
  shadowColor: "transparent",
  hoverStyle: {
    borderColor: "transparent"
  }
};
var themeableVariants = {
  circular,
  elevate,
  bordered: {
    true: bordered
  },
  transparent: {
    true: {
      backgroundColor: "transparent"
    }
  },
  chromeless: {
    true: chromelessStyle,
    all: {
      ...chromelessStyle,
      hoverStyle: chromelessStyle,
      pressStyle: chromelessStyle,
      focusStyle: chromelessStyle
    }
  }
};
var ThemeableStack = styled4(YStack, {
  variants: themeableVariants
});

// node_modules/@tamagui/stacks/dist/esm/SizableStack.mjs
import { styled as styled5 } from "@tamagui/core";

// node_modules/@tamagui/get-token/dist/esm/index.mjs
import { getTokens, isVariable as isVariable2 } from "@tamagui/web";
var defaultOptions = {
  shift: 0,
  bounds: [0]
};
var getSize = /* @__PURE__ */ __name((size4, options) => getTokenRelative("size", size4, options), "getSize");
var getSpace = /* @__PURE__ */ __name((space, options) => getTokenRelative("space", space, options), "getSpace");
var cacheVariables = {};
var cacheWholeVariables = {};
var cacheKeys = {};
var cacheWholeKeys = {};
var stepTokenUpOrDown = /* @__PURE__ */ __name((type, current, options = defaultOptions) => {
  const tokens = getTokens({
    prefixed: true
  })[type];
  if (!(type in cacheVariables)) {
    cacheKeys[type] = [], cacheVariables[type] = [], cacheWholeKeys[type] = [], cacheWholeVariables[type] = [];
    const sorted = Object.keys(tokens).map((k) => tokens[k]).sort((a, b) => a.val - b.val);
    for (const token of sorted) cacheKeys[type].push(token.key), cacheVariables[type].push(token);
    const sortedExcludingHalfSteps = sorted.filter((x) => !x.key.endsWith(".5"));
    for (const token of sortedExcludingHalfSteps) cacheWholeKeys[type].push(token.key), cacheWholeVariables[type].push(token);
  }
  const isString = typeof current == "string", tokensOrdered = (options.excludeHalfSteps ? isString ? cacheWholeKeys : cacheWholeVariables : isString ? cacheKeys : cacheVariables)[type], min2 = options.bounds?.[0] ?? 0, max2 = options.bounds?.[1] ?? tokensOrdered.length - 1, currentIndex = tokensOrdered.indexOf(current);
  let shift4 = options.shift || 0;
  shift4 && (current === "$true" || isVariable2(current) && current.name === "true") && (shift4 += shift4 > 0 ? 1 : -1);
  const index2 = Math.min(max2, Math.max(min2, currentIndex + shift4)), found = tokensOrdered[index2];
  return (typeof found == "string" ? tokens[found] : found) || tokens.$true;
}, "stepTokenUpOrDown");
var getTokenRelative = stepTokenUpOrDown;

// node_modules/@tamagui/get-button-sized/dist/esm/index.mjs
var getButtonSized = /* @__PURE__ */ __name((val, {
  tokens,
  props
}) => {
  if (!val || props.circular) return;
  if (typeof val == "number") return {
    paddingHorizontal: val * 0.25,
    height: val,
    borderRadius: props.circular ? 1e5 : val * 0.2
  };
  const xSize = getSpace(val), radiusToken = tokens.radius[val] ?? tokens.radius.$true;
  return {
    paddingHorizontal: xSize,
    height: val,
    borderRadius: props.circular ? 1e5 : radiusToken
  };
}, "getButtonSized");

// node_modules/@tamagui/stacks/dist/esm/SizableStack.mjs
var SizableStack = styled5(ThemeableStack, {
  name: "SizableStack",
  variants: {
    unstyled: {
      true: {
        elevate: false,
        bordered: false
      }
    },
    circular,
    elevate,
    bordered: {
      true: bordered
    },
    size: {
      "...size": /* @__PURE__ */ __name((val, extras) => getButtonSized(val, extras), "...size")
    }
  }
});

// node_modules/@tamagui/stacks/dist/esm/NestingContext.mjs
import React13 from "react";
var ButtonNestingContext = React13.createContext(false);

// node_modules/@tamagui/text/dist/esm/Emphasis.mjs
import { styled as styled6, Text } from "@tamagui/web";
var Strong = styled6(Text, {
  render: "strong",
  fontWeight: "bold"
});
var Span = styled6(Text, {
  render: "span"
});
var Em = styled6(Text, {
  render: "em",
  fontStyle: "italic"
});

// node_modules/@tamagui/get-font-sized/dist/esm/index.mjs
import { getTokens as getTokens2, styled as styled7, Text as Text2 } from "@tamagui/web";
var getFontSized = /* @__PURE__ */ __name((sizeTokenIn = "$true", {
  font,
  fontFamily,
  props
}) => {
  if (!font) return {
    fontSize: sizeTokenIn
  };
  const sizeToken = sizeTokenIn === "$true" ? getDefaultSizeToken(font) : sizeTokenIn, style = {}, fontSize = font.size[sizeToken], lineHeight = font.lineHeight?.[sizeToken], fontWeight = font.weight?.[sizeToken], letterSpacing = font.letterSpacing?.[sizeToken], textTransform = font.transform?.[sizeToken], fontStyle = props.fontStyle ?? font.style?.[sizeToken], color = props.color ?? font.color?.[sizeToken];
  return fontStyle && (style.fontStyle = fontStyle), textTransform && (style.textTransform = textTransform), fontFamily && (style.fontFamily = fontFamily), fontWeight && (style.fontWeight = fontWeight), letterSpacing && (style.letterSpacing = letterSpacing), fontSize && (style.fontSize = fontSize), lineHeight && (style.lineHeight = lineHeight), color && (style.color = color), process.env.NODE_ENV === "development" && props.debug && props.debug === "verbose" && (console.groupCollapsed("  \u{1F539} getFontSized", sizeTokenIn, sizeToken), isClient && console.info({
    style,
    props,
    font
  }), console.groupEnd()), style;
}, "getFontSized");
var SizableText = styled7(Text2, {
  name: "SizableText",
  fontFamily: "$body",
  variants: {
    size: {
      "...fontSize": getFontSized
    }
  },
  defaultVariants: {
    size: "$true"
  }
});
var cache2 = /* @__PURE__ */ new WeakMap();
function getDefaultSizeToken(font) {
  if (typeof font == "object" && cache2.has(font)) return cache2.get(font);
  const tokens = getTokens2(), sizeTokens = "$true" in font.size ? font.size : tokens?.size;
  if (!sizeTokens) return Object.keys(font.size)[3];
  const sizeDefault = sizeTokens.$true, sizeDefaultSpecific = sizeDefault ? Object.keys(sizeTokens).find((x) => x !== "$true" && sizeTokens[x].val === sizeDefault.val) : null;
  return !sizeDefault || !sizeDefaultSpecific ? (process.env.NODE_ENV === "development" && console.warn(`No default size is set in your tokens for the "true" key, fonts will be inconsistent.

      Fix this by having consistent tokens across fonts and sizes and setting a true key for your size tokens, or
      set true keys for all your font tokens: "size", "lineHeight", "fontStyle", etc.`), Object.keys(font.size)[3]) : (cache2.set(font, sizeDefaultSpecific), sizeDefaultSpecific);
}
__name(getDefaultSizeToken, "getDefaultSizeToken");

// node_modules/@tamagui/text/dist/esm/SizableText.mjs
import { Text as Text3, styled as styled8 } from "@tamagui/web";
var SizableText2 = styled8(Text3, {
  name: "SizableText",
  fontFamily: "$body",
  variants: {
    unstyled: {
      false: {
        size: "$true",
        color: "$color"
      }
    },
    size: getFontSized
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
SizableText2.staticConfig.variants.fontFamily = {
  "...": /* @__PURE__ */ __name((val, extras) => {
    if (val === "inherit") return {
      fontFamily: "inherit"
    };
    const sizeProp = extras.props.size, fontSizeProp = extras.props.fontSize, size4 = sizeProp === "$true" && fontSizeProp ? fontSizeProp : extras.props.size || "$true";
    return getFontSized(size4, extras);
  }, "...")
};

// node_modules/@tamagui/text/dist/esm/Paragraph.mjs
import { styled as styled9 } from "@tamagui/web";
var Paragraph = styled9(SizableText2, {
  name: "Paragraph",
  render: "p",
  userSelect: "auto",
  color: "$color",
  size: "$true",
  whiteSpace: "normal"
});

// node_modules/@tamagui/text/dist/esm/Headings.mjs
import { styled as styled10 } from "@tamagui/web";
var Heading = styled10(Paragraph, {
  render: "span",
  name: "Heading",
  role: "heading",
  fontFamily: "$heading",
  size: "$8",
  margin: 0
});
var H1 = styled10(Heading, {
  name: "H1",
  render: "h1",
  variants: {
    unstyled: {
      false: {
        size: "$10"
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var H2 = styled10(Heading, {
  name: "H2",
  render: "h2",
  variants: {
    unstyled: {
      false: {
        size: "$9"
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var H3 = styled10(Heading, {
  name: "H3",
  render: "h3",
  variants: {
    unstyled: {
      false: {
        size: "$8"
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var H4 = styled10(Heading, {
  name: "H4",
  render: "h4",
  variants: {
    unstyled: {
      false: {
        size: "$7"
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var H5 = styled10(Heading, {
  name: "H5",
  render: "h5",
  variants: {
    unstyled: {
      false: {
        size: "$6"
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var H6 = styled10(Heading, {
  name: "H6",
  render: "h6",
  variants: {
    unstyled: {
      false: {
        size: "$5"
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});

// node_modules/@tamagui/text/dist/esm/wrapChildrenInText.mjs
import React14 from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
function wrapChildrenInText(TextComponent, propsIn, extraProps) {
  const {
    children,
    textProps,
    size: size4,
    noTextWrap,
    color,
    fontFamily,
    fontSize,
    fontWeight,
    letterSpacing,
    textAlign,
    fontStyle,
    maxFontSizeMultiplier
  } = propsIn;
  if (noTextWrap || !children) return [children];
  const props = {
    ...extraProps
  };
  return color && (props.color = color), fontFamily && (props.fontFamily = fontFamily), fontSize && (props.fontSize = fontSize), fontWeight && (props.fontWeight = fontWeight), letterSpacing && (props.letterSpacing = letterSpacing), textAlign && (props.textAlign = textAlign), size4 && (props.size = size4), fontStyle && (props.fontStyle = fontStyle), maxFontSizeMultiplier && (props.maxFontSizeMultiplier = maxFontSizeMultiplier), React14.Children.toArray(children).map((child, index2) => typeof child == "string" ? (
    // so "data-disable-theme" is a hack to fix themeInverse, don't ask me why
    /* @__PURE__ */ jsx7(TextComponent, {
      ...props,
      ...textProps,
      children: child
    }, index2)
  ) : child);
}
__name(wrapChildrenInText, "wrapChildrenInText");

// node_modules/@tamagui/use-direction/dist/esm/useDirection.mjs
import * as React15 from "react";
import { jsx as jsx8 } from "react/jsx-runtime";
var DirectionContext = React15.createContext(void 0);
function useDirection(localDir) {
  const globalDir = React15.useContext(DirectionContext);
  return localDir || globalDir || "ltr";
}
__name(useDirection, "useDirection");

// node_modules/@tamagui/accordion/dist/esm/Accordion.mjs
import * as React16 from "react";
import { jsx as jsx9 } from "react/jsx-runtime";
var ACCORDION_NAME = "Accordion";
var ACCORDION_KEYS = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"];
var [Collection, useCollection] = createCollection(ACCORDION_NAME);
var ACCORDION_CONTEXT = "Accordion";
var AccordionComponent = React16.forwardRef((props, forwardedRef) => {
  const {
    type,
    ...accordionProps
  } = props, singleProps = accordionProps, multipleProps = accordionProps;
  return /* @__PURE__ */ jsx9(Collection.Provider, {
    scope: props.__scopeAccordion || ACCORDION_CONTEXT,
    children: type === "multiple" ? /* @__PURE__ */ jsx9(AccordionImplMultiple, {
      ...multipleProps,
      ref: forwardedRef
    }) : /* @__PURE__ */ jsx9(AccordionImplSingle, {
      ...singleProps,
      ref: forwardedRef
    })
  });
});
AccordionComponent.displayName = ACCORDION_NAME;
AccordionComponent.propTypes = {
  type(props) {
    const value = props.value || props.defaultValue;
    return props.type && !["single", "multiple"].includes(props.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : props.type === "multiple" && typeof value == "string" ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : props.type === "single" && Array.isArray(value) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null;
  }
};
var {
  Provider: AccordionValueProvider,
  useStyledContext: useAccordionValueContext
} = createStyledContext3();
var {
  Provider: AccordionCollapsibleProvider,
  useStyledContext: useAccordionCollapsibleContext
} = createStyledContext3();
var AccordionImplSingle = React16.forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue: defaultValue2,
    control,
    onValueChange = /* @__PURE__ */ __name(() => {
    }, "onValueChange"),
    collapsible = false,
    ...accordionSingleProps
  } = props, [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue2 || "",
    onChange: onValueChange
  });
  return /* @__PURE__ */ jsx9(AccordionValueProvider, {
    scope: props.__scopeAccordion,
    value: value ? [value] : [],
    onItemOpen: setValue,
    onItemClose: React16.useCallback(() => collapsible && setValue(""), [setValue, collapsible]),
    children: /* @__PURE__ */ jsx9(AccordionCollapsibleProvider, {
      scope: props.__scopeAccordion,
      collapsible,
      children: /* @__PURE__ */ jsx9(AccordionImpl, {
        ...accordionSingleProps,
        ref: forwardedRef
      })
    })
  });
});
var AccordionImplMultiple = React16.forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue: defaultValue2,
    onValueChange = /* @__PURE__ */ __name(() => {
    }, "onValueChange"),
    ...accordionMultipleProps
  } = props, [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue2 || [],
    onChange: onValueChange
  }), handleItemOpen = React16.useCallback((itemValue) => setValue((prevValue = []) => [...prevValue, itemValue]), [setValue]), handleItemClose = React16.useCallback((itemValue) => setValue((prevValue = []) => prevValue.filter((value2) => value2 !== itemValue)), [setValue]);
  return /* @__PURE__ */ jsx9(AccordionValueProvider, {
    scope: props.__scopeAccordion,
    value: value || [],
    onItemOpen: handleItemOpen,
    onItemClose: handleItemClose,
    children: /* @__PURE__ */ jsx9(AccordionCollapsibleProvider, {
      scope: props.__scopeAccordion,
      collapsible: true,
      children: /* @__PURE__ */ jsx9(AccordionImpl, {
        ...accordionMultipleProps,
        ref: forwardedRef
      })
    })
  });
});
var {
  Provider: AccordionImplProvider,
  useStyledContext: useAccordionContext
} = createStyledContext3();
var AccordionImpl = React16.forwardRef((props, forwardedRef) => {
  const {
    __scopeAccordion,
    disabled,
    dir,
    orientation = "vertical",
    ...accordionProps
  } = props, accordionRef = React16.useRef(null), composedRef = useComposedRefs(accordionRef, forwardedRef), getItems = useCollection(__scopeAccordion || ACCORDION_CONTEXT), isDirectionLTR = useDirection(dir) === "ltr", handleKeyDown = composeEventHandlers(props.onKeyDown, (event) => {
    if (!ACCORDION_KEYS.includes(event.key)) return;
    const target = event.target, triggerCollection = getItems().filter((item) => !item.ref.current?.disabled), triggerIndex = triggerCollection.findIndex((item) => item.ref.current === target), triggerCount = triggerCollection.length;
    if (triggerIndex === -1) return;
    event.preventDefault();
    let nextIndex = triggerIndex;
    const homeIndex = 0, endIndex = triggerCount - 1, moveNext = /* @__PURE__ */ __name(() => {
      nextIndex = triggerIndex + 1, nextIndex > endIndex && (nextIndex = homeIndex);
    }, "moveNext"), movePrev = /* @__PURE__ */ __name(() => {
      nextIndex = triggerIndex - 1, nextIndex < homeIndex && (nextIndex = endIndex);
    }, "movePrev");
    switch (event.key) {
      case "Home":
        nextIndex = homeIndex;
        break;
      case "End":
        nextIndex = endIndex;
        break;
      case "ArrowRight":
        orientation === "horizontal" && (isDirectionLTR ? moveNext() : movePrev());
        break;
      case "ArrowDown":
        orientation === "vertical" && moveNext();
        break;
      case "ArrowLeft":
        orientation === "horizontal" && (isDirectionLTR ? movePrev() : moveNext());
        break;
      case "ArrowUp":
        orientation === "vertical" && movePrev();
        break;
    }
    const clampedIndex = nextIndex % triggerCount;
    triggerCollection[clampedIndex].ref.current?.focus();
  });
  return /* @__PURE__ */ jsx9(AccordionImplProvider, {
    scope: __scopeAccordion,
    disabled,
    direction: dir,
    orientation,
    children: /* @__PURE__ */ jsx9(Collection.Slot, {
      scope: __scopeAccordion || ACCORDION_CONTEXT,
      children: /* @__PURE__ */ jsx9(YStack, {
        "data-orientation": orientation,
        ref: composedRef,
        ...accordionProps,
        ...isWeb && {
          onKeyDown: handleKeyDown
        }
      })
    })
  });
});
var ITEM_NAME = "AccordionItem";
var {
  Provider: AccordionItemProvider,
  useStyledContext: useAccordionItemContext
} = createStyledContext3();
var AccordionItem = React16.forwardRef((props, forwardedRef) => {
  const {
    __scopeAccordion,
    value,
    ...accordionItemProps
  } = props, accordionContext = useAccordionContext(__scopeAccordion), valueContext = useAccordionValueContext(__scopeAccordion), triggerId = React16.useId(), open2 = value && valueContext.value.includes(value) || false, disabled = accordionContext.disabled || props.disabled;
  return /* @__PURE__ */ jsx9(AccordionItemProvider, {
    scope: __scopeAccordion,
    open: open2,
    disabled,
    triggerId,
    children: /* @__PURE__ */ jsx9(Collapsible, {
      "data-orientation": accordionContext.orientation,
      "data-state": open2 ? "open" : "closed",
      __scopeCollapsible: __scopeAccordion || ACCORDION_CONTEXT,
      ...accordionItemProps,
      ref: forwardedRef,
      disabled,
      open: open2,
      onOpenChange: /* @__PURE__ */ __name((open22) => {
        open22 ? valueContext.onItemOpen(value) : valueContext.onItemClose(value);
      }, "onOpenChange")
    })
  });
});
AccordionItem.displayName = ITEM_NAME;
var HEADER_NAME = "AccordionHeader";
var AccordionHeader = React16.forwardRef((props, forwardedRef) => {
  const {
    __scopeAccordion,
    ...headerProps
  } = props, accordionContext = useAccordionContext(__scopeAccordion), itemContext = useAccordionItemContext(__scopeAccordion);
  return /* @__PURE__ */ jsx9(H1, {
    "data-orientation": accordionContext.orientation,
    "data-state": getState2(itemContext.open),
    "data-disabled": itemContext.disabled ? "" : void 0,
    ...headerProps,
    ref: forwardedRef
  });
});
AccordionHeader.displayName = HEADER_NAME;
var AccordionTriggerFrame = styled11(Collapsible.Trigger, {
  variants: {
    unstyled: {
      false: {
        cursor: "pointer",
        backgroundColor: "$background",
        padding: "$true",
        hoverStyle: {
          backgroundColor: "$backgroundHover"
        },
        focusStyle: {
          backgroundColor: "$backgroundFocus"
        },
        pressStyle: {
          backgroundColor: "$backgroundPress"
        }
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var AccordionTrigger = AccordionTriggerFrame.styleable(function(props, forwardedRef) {
  const {
    __scopeAccordion,
    ...triggerProps
  } = props, accordionContext = useAccordionContext(__scopeAccordion), itemContext = useAccordionItemContext(__scopeAccordion), collapsibleContext = useAccordionCollapsibleContext(__scopeAccordion);
  return /* @__PURE__ */ jsx9(Collection.ItemSlot, {
    scope: __scopeAccordion || ACCORDION_CONTEXT,
    children: /* @__PURE__ */ jsx9(AccordionTriggerFrame, {
      __scopeCollapsible: __scopeAccordion || ACCORDION_CONTEXT,
      "aria-disabled": itemContext.open && !collapsibleContext.collapsible || void 0,
      "data-orientation": accordionContext.orientation,
      id: itemContext.triggerId,
      ...triggerProps,
      ref: forwardedRef
    })
  });
});
var AccordionContentFrame = styled11(Collapsible.Content, {
  variants: {
    unstyled: {
      false: {
        padding: "$true",
        backgroundColor: "$background"
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var AccordionContent = AccordionContentFrame.styleable(function(props, forwardedRef) {
  const {
    __scopeAccordion,
    ...contentProps
  } = props, accordionContext = useAccordionContext(__scopeAccordion), itemContext = useAccordionItemContext(__scopeAccordion);
  return /* @__PURE__ */ jsx9(AccordionContentFrame, {
    role: "region",
    "aria-labelledby": itemContext.triggerId,
    "data-orientation": accordionContext.orientation,
    __scopeCollapsible: __scopeAccordion || ACCORDION_CONTEXT,
    ...contentProps,
    ref: forwardedRef
  });
});
var HeightAnimator = View4.styleable((props, ref) => {
  const itemContext = useAccordionItemContext(), {
    children,
    ...rest
  } = props, [measuredHeight, setMeasuredHeight] = React16.useState(0), hasMeasured = measuredHeight > 0, height = itemContext.open ? hasMeasured ? measuredHeight : "auto" : 0, shouldAbsolutePosition = hasMeasured || !itemContext.open;
  return /* @__PURE__ */ jsx9(View4, {
    ref,
    height,
    position: "relative",
    ...rest,
    children: /* @__PURE__ */ jsx9(View4, {
      position: shouldAbsolutePosition ? "absolute" : "relative",
      top: shouldAbsolutePosition ? 0 : void 0,
      left: shouldAbsolutePosition ? 0 : void 0,
      right: shouldAbsolutePosition ? 0 : void 0,
      onLayout: /* @__PURE__ */ __name(({
        nativeEvent
      }) => {
        nativeEvent.layout.height && nativeEvent.layout.height !== measuredHeight && setMeasuredHeight(nativeEvent.layout.height);
      }, "onLayout"),
      children
    })
  });
});
function getState2(open2) {
  return open2 ? "open" : "closed";
}
__name(getState2, "getState");
var Accordion = withStaticProperties(AccordionComponent, {
  Trigger: AccordionTrigger,
  Header: AccordionHeader,
  Content: AccordionContent,
  Item: AccordionItem,
  HeightAnimator
});

// node_modules/@tamagui/adapt/dist/esm/Adapt.mjs
import { createStyledContext as createStyledContext4, useMedia } from "@tamagui/core";

// node_modules/@tamagui/native/dist/esm/globalState.mjs
function createGlobalState(key, defaultValue2) {
  const GLOBAL_KEY = `__tamagui_${key}__`;
  function getGlobalState() {
    const g = globalThis;
    return g[GLOBAL_KEY] || (g[GLOBAL_KEY] = defaultValue2), g[GLOBAL_KEY];
  }
  __name(getGlobalState, "getGlobalState");
  function setGlobalState(newState) {
    globalThis[GLOBAL_KEY] = newState;
  }
  __name(setGlobalState, "setGlobalState");
  return {
    get: getGlobalState,
    set: setGlobalState
  };
}
__name(createGlobalState, "createGlobalState");

// node_modules/@tamagui/native/dist/esm/portalState.mjs
var state = createGlobalState("portal", {
  enabled: false,
  type: null
});
function getPortal() {
  return {
    get isEnabled() {
      return state.get().enabled;
    },
    get state() {
      return state.get();
    },
    set(newState) {
      state.set(newState);
    }
  };
}
__name(getPortal, "getPortal");

// node_modules/@tamagui/native/dist/esm/gestureState.mjs
var state2 = createGlobalState("gesture", {
  enabled: false,
  Gesture: null,
  GestureDetector: null,
  ScrollView: null
});
function getGestureHandler() {
  return {
    get isEnabled() {
      return state2.get().enabled;
    },
    get state() {
      return state2.get();
    },
    set(updates) {
      Object.assign(state2.get(), updates);
    },
    disable() {
      state2.get().enabled = false;
    },
    createPressGesture(config) {
      const {
        Gesture
      } = state2.get();
      if (!Gesture) return null;
      const longPressDuration = config.delayLongPress ?? 500, tap = Gesture.Tap().runOnJS(true).maxDuration(1e4).onBegin((e) => {
        config.onPressIn?.(e);
      }).onEnd((e) => {
        config.onPress?.(e);
      }).onFinalize((e) => {
        config.onPressOut?.(e);
      });
      if (config.hitSlop && tap.hitSlop(config.hitSlop), !config.onLongPress) return tap;
      const longPress = Gesture.LongPress().runOnJS(true).minDuration(longPressDuration).onBegin((e) => config.onPressIn?.(e)).onStart((e) => config.onLongPress?.(e)).onFinalize((e) => config.onPressOut?.(e));
      return config.hitSlop && longPress.hitSlop(config.hitSlop), Gesture.Exclusive(longPress, tap);
    }
  };
}
__name(getGestureHandler, "getGestureHandler");

// node_modules/@tamagui/native/dist/esm/safeAreaState.mjs
var state3 = createGlobalState("safe_area", {
  enabled: false,
  useSafeAreaInsets: null,
  useSafeAreaFrame: null,
  initialMetrics: null
});
var defaultInsets = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
var defaultFrame = {
  x: 0,
  y: 0,
  width: 0,
  height: 0
};
function getSafeArea() {
  return {
    get isEnabled() {
      return state3.get().enabled;
    },
    get state() {
      return state3.get();
    },
    set(updates) {
      Object.assign(state3.get(), updates);
    },
    getInsets() {
      const s = state3.get();
      return !s.enabled || !s.initialMetrics ? defaultInsets : s.initialMetrics.insets;
    },
    getFrame() {
      const s = state3.get();
      return !s.enabled || !s.initialMetrics ? defaultFrame : s.initialMetrics.frame;
    }
  };
}
__name(getSafeArea, "getSafeArea");

// node_modules/@tamagui/native/dist/esm/zeegoState.mjs
var state4 = createGlobalState("zeego", {
  enabled: false,
  DropdownMenu: null,
  ContextMenu: null
});
function getZeego() {
  return {
    get isEnabled() {
      return state4.get().enabled;
    },
    get state() {
      return state4.get();
    },
    set(newState) {
      state4.set(newState);
    }
  };
}
__name(getZeego, "getZeego");

// node_modules/@tamagui/native/dist/esm/nativeMenuContext.mjs
import { createContext as createContext3 } from "react";
var NativeMenuContext = createContext3(false);

// node_modules/@tamagui/native/dist/esm/components.mjs
import { Fragment as Fragment2, jsx as jsx10 } from "react/jsx-runtime";
function NativePortalProvider({
  children
}) {
  if (getPortal().state.type !== "teleport") return /* @__PURE__ */ jsx10(Fragment2, {
    children
  });
  const {
    PortalProvider: PortalProvider2
  } = globalThis.__tamagui_teleport;
  return /* @__PURE__ */ jsx10(PortalProvider2, {
    children
  });
}
__name(NativePortalProvider, "NativePortalProvider");

// node_modules/@tamagui/portal/dist/esm/Portal.mjs
import { TamaguiRoot, useDidFinishSSR, useThemeName } from "@tamagui/web";

// node_modules/@tamagui/z-index-stack/dist/esm/useStackedZIndex.mjs
import { useContext as useContext5, useEffect as useEffect6, useId as useId4, useMemo as useMemo4 } from "react";

// node_modules/@tamagui/z-index-stack/dist/esm/context.mjs
import { createContext as createContext4 } from "react";
var ZIndexStackContext = createContext4(1);
var ZIndexHardcodedContext = createContext4(void 0);

// node_modules/@tamagui/z-index-stack/dist/esm/useStackedZIndex.mjs
var ZIndicesByContext = {};
var CurrentPortalZIndices = {};
var useStackedZIndex = /* @__PURE__ */ __name((props) => {
  if (process.env.TAMAGUI_STACK_Z_INDEX_GLOBAL) {
    const {
      stackZIndex,
      zIndex: zIndexProp
    } = props, id = useId4(), zIndex = useMemo4(() => {
      if (stackZIndex && stackZIndex !== "global" && zIndexProp === void 0) {
        const highest = Object.values(CurrentPortalZIndices).reduce((acc, cur) => Math.max(acc, cur), 0);
        return Math.max(stackZIndex === true ? 1 : stackZIndex, highest + 1);
      }
      return zIndexProp ?? 1e3;
    }, [stackZIndex]);
    return useEffect6(() => {
      if (typeof stackZIndex == "number") return CurrentPortalZIndices[id] = stackZIndex, () => {
        delete CurrentPortalZIndices[id];
      };
    }, [stackZIndex]), zIndex;
  } else {
    const {
      stackZIndex,
      zIndex: zIndexProp
    } = props, id = useId4(), stackingContextLevel = useContext5(ZIndexStackContext), stackLayer = stackZIndex === "global" ? 0 : stackingContextLevel, hardcoded = useContext5(ZIndexHardcodedContext);
    ZIndicesByContext[stackLayer] ||= {};
    const stackContext = ZIndicesByContext[stackLayer], zIndex = useMemo4(() => {
      if (typeof zIndexProp == "number") return zIndexProp;
      if (stackZIndex) {
        if (hardcoded) return hardcoded + 1;
        const entries = Object.values(stackContext), baseForLayer = stackLayer * 5e3, nextLayerBase = (stackLayer + 1) * 5e3, validEntries = entries.filter((z) => z < nextLayerBase), highest = validEntries.length > 0 ? Math.max(...validEntries) : baseForLayer, nextZIndex = highest === baseForLayer ? baseForLayer + 1 : highest + 1;
        return typeof stackZIndex == "number" ? stackZIndex + nextZIndex : nextZIndex;
      }
      return 1;
    }, [stackLayer, zIndexProp, stackZIndex]);
    return useEffect6(() => {
      if (stackZIndex) return stackContext[id] = zIndex, () => {
        delete stackContext[id];
      };
    }, [zIndex]), zIndex;
  }
}, "useStackedZIndex");

// node_modules/@tamagui/z-index-stack/dist/esm/StackZIndex.mjs
import { useContext as useContext6 } from "react";
import { jsx as jsx11 } from "react/jsx-runtime";
var StackZIndexContext = /* @__PURE__ */ __name(({
  children,
  zIndex
}) => {
  const existing = useContext6(ZIndexStackContext);
  let content = /* @__PURE__ */ jsx11(ZIndexStackContext.Provider, {
    value: existing + 1,
    children
  });
  return typeof zIndex < "u" && (content = /* @__PURE__ */ jsx11(ZIndexHardcodedContext.Provider, {
    value: zIndex,
    children: content
  })), content;
}, "StackZIndexContext");

// node_modules/@tamagui/portal/dist/esm/Portal.mjs
import * as React17 from "react";
import { createPortal } from "react-dom";

// node_modules/@tamagui/portal/dist/esm/helpers.mjs
import { getTokenValue } from "@tamagui/web";
var getStackedZIndexProps = /* @__PURE__ */ __name((propsIn) => ({
  stackZIndex: propsIn.stackZIndex,
  zIndex: resolveViewZIndex(propsIn.zIndex)
}), "getStackedZIndexProps");
var resolveViewZIndex = /* @__PURE__ */ __name((zIndex) => typeof zIndex > "u" ? void 0 : typeof zIndex == "number" ? zIndex : getTokenValue(zIndex, "zIndex"), "resolveViewZIndex");

// node_modules/@tamagui/portal/dist/esm/Portal.mjs
import { jsx as jsx12 } from "react/jsx-runtime";
var Portal = React17.memo((propsIn) => {
  const {
    children,
    passThrough,
    style,
    open: open2
  } = propsIn, themeName = useThemeName(), didHydrate = useDidFinishSSR(), zIndex = useStackedZIndex(getStackedZIndexProps(propsIn));
  return passThrough ? children : didHydrate ? createPortal(/* @__PURE__ */ jsx12(TamaguiRoot, {
    theme: themeName,
    style: {
      zIndex,
      position: "fixed",
      inset: 0,
      contain: "strict",
      pointerEvents: open2 ? "auto" : "none",
      // prevent mobile browser from scrolling/moving this fixed element
      touchAction: "none",
      display: "flex",
      ...style
    },
    children: /* @__PURE__ */ jsx12(ZIndexHardcodedContext.Provider, {
      value: zIndex,
      children
    })
  }), globalThis.document?.body) : null;
});

// node_modules/@tamagui/portal/dist/esm/GorhomPortal.mjs
import React18, { createContext as createContext5, memo as memo3, useCallback as useCallback5, useContext as useContext7, useMemo as useMemo5, useReducer } from "react";

// node_modules/@tamagui/portal/dist/esm/constants.mjs
var isTeleportEnabled = /* @__PURE__ */ __name(() => {
  const state5 = getPortal().state;
  return state5.enabled && state5.type === "teleport";
}, "isTeleportEnabled");
var needsPortalRepropagation = /* @__PURE__ */ __name(() => isWeb || isTeleportEnabled() ? false : isAndroid || isIos, "needsPortalRepropagation");
var allPortalHosts = /* @__PURE__ */ new Map();
var portalListeners = {};

// node_modules/@tamagui/portal/dist/esm/GorhomPortal.mjs
import { Fragment as Fragment3, jsx as jsx13, jsxs } from "react/jsx-runtime";
var ACTIONS = /* @__PURE__ */ ((ACTIONS2) => (ACTIONS2[ACTIONS2.REGISTER_HOST = 0] = "REGISTER_HOST", ACTIONS2[ACTIONS2.DEREGISTER_HOST = 1] = "DEREGISTER_HOST", ACTIONS2[ACTIONS2.ADD_UPDATE_PORTAL = 2] = "ADD_UPDATE_PORTAL", ACTIONS2[ACTIONS2.REMOVE_PORTAL = 3] = "REMOVE_PORTAL", ACTIONS2))(ACTIONS || {});
var INITIAL_STATE = {};
var registerHost = /* @__PURE__ */ __name((state5, hostName) => (hostName in state5 || (state5[hostName] = []), state5), "registerHost");
var deregisterHost = /* @__PURE__ */ __name((state5, hostName) => (delete state5[hostName], state5), "deregisterHost");
var addUpdatePortal = /* @__PURE__ */ __name((state5, hostName, portalName, node) => {
  hostName in state5 || (state5 = registerHost(state5, hostName));
  const index2 = state5[hostName].findIndex((item) => item.name === portalName);
  return index2 !== -1 ? state5[hostName][index2].node = node : state5[hostName].push({
    name: portalName,
    node
  }), state5;
}, "addUpdatePortal");
var removePortal = /* @__PURE__ */ __name((state5, hostName, portalName) => {
  if (!(hostName in state5)) return process.env.NODE_ENV === "development" && console.info(`Failed to remove portal '${portalName}', '${hostName}' was not registered!`), state5;
  const index2 = state5[hostName].findIndex((item) => item.name === portalName);
  return index2 !== -1 && state5[hostName].splice(index2, 1), state5;
}, "removePortal");
var reducer = /* @__PURE__ */ __name((state5, action) => {
  const {
    type
  } = action;
  switch (type) {
    case 0:
      return registerHost({
        ...state5
      }, action.hostName);
    case 1:
      return deregisterHost({
        ...state5
      }, action.hostName);
    case 2:
      return addUpdatePortal({
        ...state5
      }, action.hostName, action.portalName, action.node);
    case 3:
      return removePortal({
        ...state5
      }, action.hostName, action.portalName);
    default:
      return state5;
  }
}, "reducer");
var PortalStateContext = createContext5(null);
var PortalDispatchContext = createContext5(null);
var PortalProviderActiveContext = createContext5(false);
var usePortal = /* @__PURE__ */ __name((hostName = "root") => {
  const dispatch = useContext7(PortalDispatchContext);
  if (dispatch === null) throw new Error("'PortalDispatchContext' cannot be null, please add 'PortalProvider' to the root component.");
  const registerHost2 = useCallback5(() => {
    dispatch({
      type: 0,
      hostName
    });
  }, []), deregisterHost2 = useCallback5(() => {
    dispatch({
      type: 1,
      hostName
    });
  }, []), addUpdatePortal2 = useCallback5((name, node) => {
    dispatch({
      type: 2,
      hostName,
      portalName: name,
      node
    });
  }, []), removePortal2 = useCallback5((name) => {
    dispatch({
      type: 3,
      hostName,
      portalName: name
    });
  }, []);
  return {
    registerHost: registerHost2,
    deregisterHost: deregisterHost2,
    addPortal: addUpdatePortal2,
    updatePortal: addUpdatePortal2,
    removePortal: removePortal2
  };
}, "usePortal");
var PortalProviderComponent = /* @__PURE__ */ __name(({
  rootHostName = "root",
  shouldAddRootHost = true,
  children
}) => {
  const isAlreadyInProvider = useContext7(PortalProviderActiveContext);
  process.env.NODE_ENV === "development" && isAlreadyInProvider && shouldAddRootHost && console.warn("[tamagui] Nested PortalProvider with shouldAddRootHost detected. This causes hydration mismatches. TamaguiProvider from 'tamagui' already includes PortalProvider - remove the explicit PortalProvider wrapper or set shouldAddRootHost={false}.");
  const [state5, dispatch] = useReducer(reducer, INITIAL_STATE), transitionDispatch = useMemo5(() => (value) => {
    startTransition(() => {
      dispatch(value);
    });
  }, [dispatch]), portalState = getPortal().state, content = /* @__PURE__ */ jsx13(PortalProviderActiveContext.Provider, {
    value: true,
    children: /* @__PURE__ */ jsx13(PortalDispatchContext.Provider, {
      value: transitionDispatch,
      children: /* @__PURE__ */ jsxs(PortalStateContext.Provider, {
        value: state5,
        children: [children, shouldAddRootHost && /* @__PURE__ */ jsx13(PortalHost, {
          name: rootHostName
        })]
      })
    })
  });
  return portalState.type === "teleport" ? /* @__PURE__ */ jsx13(NativePortalProvider, {
    children: content
  }) : content;
}, "PortalProviderComponent");
var PortalProvider = memo3(PortalProviderComponent);
PortalProvider.displayName = "PortalProvider";
var PortalHost = memo3(function(props) {
  return /* @__PURE__ */ jsx13(PortalHostWeb, {
    ...props
  });
});
function PortalHostWeb(props) {
  return useIsomorphicLayoutEffect(() => () => {
    allPortalHosts.delete(props.name);
  }, [props.name]), /* @__PURE__ */ jsx13("div", {
    style: {
      display: "contents"
    },
    ref: /* @__PURE__ */ __name((node) => {
      node && (allPortalHosts.set(props.name, node), portalListeners[props.name]?.forEach((x) => x(node)));
    }, "ref")
  });
}
__name(PortalHostWeb, "PortalHostWeb");

// node_modules/@tamagui/portal/dist/esm/GorhomPortalItem.mjs
import { TamaguiRoot as TamaguiRoot2, useThemeName as useThemeName2 } from "@tamagui/web";
import { useState as useState4 } from "react";
import { createPortal as createPortal2 } from "react-dom";
import { jsx as jsx14 } from "react/jsx-runtime";
var GorhomPortalItem = /* @__PURE__ */ __name((props) => {
  const theme = useThemeName2();
  process.env.NODE_ENV === "development" && !props.hostName && !props.passThrough && console.warn("No hostName");
  const cur = allPortalHosts.get(props.hostName || ""), [node, setNode] = useState4(cur);
  if (useIsomorphicLayoutEffect(() => {
    if (!props.hostName) return;
    const listener = /* @__PURE__ */ __name((newNode) => {
      setNode(newNode);
    }, "listener");
    portalListeners[props.hostName] ||= /* @__PURE__ */ new Set(), portalListeners[props.hostName].add(listener);
    const existingHost = allPortalHosts.get(props.hostName);
    return existingHost && existingHost !== node && setNode(existingHost), () => {
      portalListeners[props.hostName]?.delete(listener);
    };
  }, [props.hostName]), useIsomorphicLayoutEffect(() => {
    cur && cur !== node && setNode(cur);
  }, [cur, node]), props.passThrough) return props.children;
  const actualNode = node?.isConnected ? node : null;
  return actualNode ? createPortal2(/* @__PURE__ */ jsx14(TamaguiRoot2, {
    theme,
    children: props.children
  }), actualNode) : null;
}, "GorhomPortalItem");

// node_modules/@tamagui/adapt/dist/esm/Adapt.mjs
import React19, { createContext as createContext6, useContext as useContext8, useId as useId5, useMemo as useMemo6 } from "react";
import { Fragment as Fragment4, jsx as jsx15 } from "react/jsx-runtime";
function createAdaptChildrenStore() {
  let children = null;
  const listeners2 = /* @__PURE__ */ new Set();
  return {
    set(c) {
      children = c;
      for (const l of listeners2) l();
    },
    get: /* @__PURE__ */ __name(() => children, "get"),
    subscribe(callback) {
      return listeners2.add(callback), () => listeners2.delete(callback);
    }
  };
}
__name(createAdaptChildrenStore, "createAdaptChildrenStore");
var AdaptChildrenStoreContext = createContext6(null);
var emptySubscribe = /* @__PURE__ */ __name(() => () => {
}, "emptySubscribe");
var emptyGet = /* @__PURE__ */ __name(() => null, "emptyGet");
function TeleportAdaptContents() {
  const store = useContext8(AdaptChildrenStoreContext), children = React19.useSyncExternalStore(store?.subscribe ?? emptySubscribe, store?.get ?? emptyGet, store?.get ?? emptyGet);
  return /* @__PURE__ */ jsx15(Fragment4, {
    children
  });
}
__name(TeleportAdaptContents, "TeleportAdaptContents");
var AdaptContext = createStyledContext4({
  Contents: null,
  scopeName: "",
  portalName: "",
  platform: null,
  setPlatform: /* @__PURE__ */ __name((x) => {
  }, "setPlatform"),
  when: null,
  setWhen: /* @__PURE__ */ __name(() => {
  }, "setWhen")
});
var LastAdaptContextScope = createContext6("");
var ProvideAdaptContext = /* @__PURE__ */ __name(({
  children,
  ...context4
}) => {
  const scope = context4.scopeName || "", lastScope = useContext8(LastAdaptContextScope);
  return /* @__PURE__ */ jsx15(LastAdaptContextScope.Provider, {
    value: lastScope || context4.lastScope || "",
    children: /* @__PURE__ */ jsx15(AdaptContext.Provider, {
      scope,
      lastScope: lastScope || context4.lastScope,
      ...context4,
      children
    })
  });
}, "ProvideAdaptContext");
var useAdaptContext = /* @__PURE__ */ __name((scope) => {
  const lastScope = useContext8(LastAdaptContextScope), adaptScope = scope ?? lastScope;
  return AdaptContext.useStyledContext(adaptScope);
}, "useAdaptContext");
var AdaptPortals = /* @__PURE__ */ new Map();
var AdaptParent = /* @__PURE__ */ __name(({
  children,
  Contents,
  scope,
  portal
}) => {
  const id = useId5(), portalName = `AdaptPortal${scope}${id}`, childrenStoreRef = React19.useRef(null);
  childrenStoreRef.current || (childrenStoreRef.current = createAdaptChildrenStore());
  const isTeleport = false, FinalContents = useMemo6(() => {
    if (Contents) return Contents;
    if (isTeleport) return TeleportAdaptContents;
    if (AdaptPortals.has(portalName)) return AdaptPortals.get(portalName);
    const element = /* @__PURE__ */ __name(() => /* @__PURE__ */ jsx15(PortalHost, {
      name: portalName,
      forwardProps: typeof portal == "boolean" ? void 0 : portal?.forwardProps
    }, id), "element");
    return AdaptPortals.set(portalName, element), element;
  }, [portalName, Contents, isTeleport]);
  useIsomorphicLayoutEffect(() => {
    if (!isTeleport) return AdaptPortals.set(portalName, FinalContents), () => {
      AdaptPortals.delete(portalName);
    };
  }, [portalName, isTeleport]);
  const [when, setWhen] = React19.useState(null), [platform2, setPlatform] = React19.useState(null);
  return /* @__PURE__ */ jsx15(AdaptChildrenStoreContext.Provider, {
    value: childrenStoreRef.current,
    children: /* @__PURE__ */ jsx15(LastAdaptContextScope.Provider, {
      value: scope,
      children: /* @__PURE__ */ jsx15(ProvideAdaptContext, {
        Contents: FinalContents,
        when,
        platform: platform2,
        setPlatform,
        setWhen,
        portalName,
        scopeName: scope,
        children
      })
    })
  });
}, "AdaptParent");
var AdaptContents = /* @__PURE__ */ __name(({
  scope,
  ...rest
}) => {
  const context4 = useAdaptContext(scope);
  if (!context4?.Contents) throw new Error(process.env.NODE_ENV === "production" ? "tamagui.dev/docs/intro/errors#warning-002" : "You're rendering a Tamagui <Adapt /> component without nesting it inside a parent that is able to adapt.");
  return React19.createElement(context4.Contents, {
    ...rest,
    key: "stable"
  });
}, "AdaptContents");
AdaptContents.shouldForwardSpace = true;
var Adapt = withStaticProperties(function(props) {
  const {
    platform: platform2,
    when,
    children,
    scope
  } = props, context4 = useAdaptContext(scope), enabled = useAdaptIsActiveGiven(props);
  useIsomorphicLayoutEffect(() => {
    context4?.setWhen?.(when || enabled), context4?.setPlatform?.(platform2 || null);
  }, [when, platform2, enabled, context4.setWhen, context4.setPlatform]), useIsomorphicLayoutEffect(() => () => {
    context4?.setWhen?.(null), context4?.setPlatform?.(null);
  }, []);
  let output;
  if (typeof children == "function") {
    const Component = context4?.Contents;
    output = children(Component ? /* @__PURE__ */ jsx15(Component, {}) : null);
  } else output = children;
  return /* @__PURE__ */ jsx15(StackZIndexContext, {
    children: enabled ? output : null
  });
}, {
  Contents: AdaptContents
});
var AdaptPortalContents = /* @__PURE__ */ __name((props) => {
  const isActive = useAdaptIsActive(props.scope), {
    portalName
  } = useAdaptContext(props.scope), childrenStore = useContext8(AdaptChildrenStoreContext);
  return !isWeb && getPortal().state.type === "teleport" && childrenStore ? /* @__PURE__ */ jsx15(AdaptPortalTeleport, {
    isActive,
    store: childrenStore,
    children: props.children
  }) : /* @__PURE__ */ jsx15(GorhomPortalItem, {
    passThrough: !isActive,
    hostName: portalName,
    children: props.children
  });
}, "AdaptPortalContents");
function AdaptPortalTeleport({
  isActive,
  store,
  children
}) {
  return useIsomorphicLayoutEffect(() => {
    if (isActive) return store.set(children), () => store.set(null);
  }), isActive ? null : /* @__PURE__ */ jsx15(Fragment4, {
    children
  });
}
__name(AdaptPortalTeleport, "AdaptPortalTeleport");
var useAdaptIsActiveGiven = /* @__PURE__ */ __name(({
  when,
  platform: platform2
}) => {
  const media = useMedia();
  if (when == null && platform2 == null) return false;
  if (when === true) return true;
  let enabled = false;
  return platform2 === "touch" ? enabled = isTouchable : platform2 === "native" ? enabled = !isWeb : platform2 === "web" ? enabled = isWeb : platform2 === "ios" ? enabled = isIos : platform2 === "android" && (enabled = isAndroid), platform2 && enabled == false ? false : (when && typeof when == "string" && (enabled = media[when]), enabled);
}, "useAdaptIsActiveGiven");
var useAdaptIsActive = /* @__PURE__ */ __name((scope) => {
  const props = useAdaptContext(scope);
  return useAdaptIsActiveGiven(props);
}, "useAdaptIsActive");

// node_modules/@tamagui/alert-dialog/dist/esm/AlertDialog.mjs
import { Slottable, View as View7, createStyledContext as createStyledContext6, styled as styled13 } from "@tamagui/core";

// node_modules/@tamagui/animate/dist/esm/Animate.mjs
import { startTransition as startTransition2, useEffect as useEffect7, useState as useState5 } from "react";
import { Fragment as Fragment5, jsx as jsx16 } from "react/jsx-runtime";
function Animate({
  children,
  lazyMount,
  type,
  present,
  passThrough,
  ...props
}) {
  const [lazyMounted, setLazyMounted] = useState5(lazyMount ? false : present);
  useEffect7(() => {
    passThrough || lazyMount && present && startTransition2(() => {
      setLazyMounted(present);
    });
  }, [lazyMount, present]);
  const mounted = present ? lazyMount ? lazyMounted : present : false;
  return type === "presence" ? props.keepChildrenMounted ? /* @__PURE__ */ jsx16(PresenceChild, {
    isPresent: true,
    ...!passThrough && {
      initial: props.initial ? void 0 : false,
      onExitComplete: props.onExitComplete,
      enterVariant: props.enterVariant,
      exitVariant: props.exitVariant,
      enterExitVariant: props.enterExitVariant,
      // BUGFIX: this causes continous re-renders if keepChildrenMounted is true, see HeaderMenu
      // but since we always re-render this component on open changes this should be fine to leave off?
      presenceAffectsLayout: false,
      isPresent: present,
      custom: props.custom
    },
    children
  }) : /* @__PURE__ */ jsx16(AnimatePresence, {
    passThrough,
    ...props,
    children: mounted || passThrough ? children : null
  }) : /* @__PURE__ */ jsx16(Fragment5, {
    children
  });
}
__name(Animate, "Animate");

// node_modules/@tamagui/dialog/dist/esm/Dialog.mjs
import { createStyledContext as createStyledContext5, getExpandedShorthand, LayoutMeasurementController, styled as styled12, Theme, useThemeName as useThemeName3, View as View6 } from "@tamagui/core";

// node_modules/@tamagui/create-context/dist/esm/create-context.mjs
import * as React20 from "react";
import { jsx as jsx17 } from "react/jsx-runtime";
function createContext8(rootComponentName, defaultContext) {
  const Context = React20.createContext(defaultContext);
  function Provider(props) {
    const {
      children,
      ...context4
    } = props, value = React20.useMemo(() => context4, Object.values(context4));
    return /* @__PURE__ */ jsx17(Context.Provider, {
      value,
      children
    });
  }
  __name(Provider, "Provider");
  function useContext25(consumerName) {
    const context4 = React20.useContext(Context);
    if (context4) return context4;
    if (defaultContext !== void 0) return defaultContext;
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  }
  __name(useContext25, "useContext");
  return [Provider, useContext25];
}
__name(createContext8, "createContext");
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext22(rootComponentName, defaultContext) {
    const BaseContext = React20.createContext(defaultContext), index2 = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    function Provider(props) {
      const {
        scope,
        children,
        ...context4
      } = props, Context = scope?.[scopeName]?.[index2] || BaseContext, value = React20.useMemo(() => context4, Object.values(context4));
      return /* @__PURE__ */ jsx17(Context.Provider, {
        value,
        children
      });
    }
    __name(Provider, "Provider");
    function useContext25(consumerName, scope, options) {
      const Context = scope?.[scopeName]?.[index2] || BaseContext, context4 = React20.useContext(Context);
      if (context4) return context4;
      if (defaultContext !== void 0) return defaultContext;
      const missingContextMessage = `\`${consumerName}\` must be used within \`${rootComponentName}\``;
      if (options?.fallback) return options?.warn !== false && console.warn(missingContextMessage), options.fallback;
      throw new Error(missingContextMessage);
    }
    __name(useContext25, "useContext");
    return [Provider, useContext25];
  }
  __name(createContext22, "createContext2");
  const createScope = /* @__PURE__ */ __name(() => {
    const scopeContexts = defaultContexts.map((defaultContext) => React20.createContext(defaultContext));
    return function(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React20.useMemo(() => ({
        [`__scope${scopeName}`]: {
          ...scope,
          [scopeName]: contexts
        }
      }), [scope, contexts]);
    };
  }, "createScope");
  return createScope.scopeName = scopeName, [createContext22, composeContextScopes(createScope, ...createContextScopeDeps)];
}
__name(createContextScope, "createContextScope");
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = /* @__PURE__ */ __name(() => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, {
        useScope,
        scopeName
      }) => {
        const currentScope = useScope(overrideScopes)[`__scope${scopeName}`];
        return {
          ...nextScopes2,
          ...currentScope
        };
      }, {});
      return React20.useMemo(() => ({
        [`__scope${baseScope.scopeName}`]: nextScopes
      }), [nextScopes]);
    };
  }, "createScope");
  return createScope.scopeName = baseScope.scopeName, createScope;
}
__name(composeContextScopes, "composeContextScopes");

// node_modules/@tamagui/dismissable/dist/esm/Dismissable.mjs
import { Slot as Slot2, View as View5, composeEventHandlers as composeEventHandlers2 } from "@tamagui/core";

// node_modules/@tamagui/use-callback-ref/dist/esm/index.mjs
import * as React21 from "react";
function useCallbackRef(callback) {
  const callbackRef = React21.useRef(callback);
  return React21.useEffect(() => {
    callbackRef.current = callback;
  }), React21.useMemo(() => (...args) => callbackRef.current?.(...args), []);
}
__name(useCallbackRef, "useCallbackRef");

// node_modules/@tamagui/use-escape-keydown/dist/esm/index.mjs
import React22 from "react";
function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis?.document) {
  const onEscapeKeyDown = useCallbackRef(onEscapeKeyDownProp);
  React22.useEffect(() => {
    const handleKeyDown = /* @__PURE__ */ __name((event) => {
      event.key === "Escape" && onEscapeKeyDown(event);
    }, "handleKeyDown");
    return ownerDocument.addEventListener(
      "keydown",
      // @ts-expect-error
      handleKeyDown
    ), () => {
      ownerDocument.removeEventListener(
        "keydown",
        // @ts-expect-error
        handleKeyDown
      );
    };
  }, [onEscapeKeyDown, ownerDocument]);
}
__name(useEscapeKeydown, "useEscapeKeydown");

// node_modules/@tamagui/dismissable/dist/esm/Dismissable.mjs
import * as React23 from "react";
import * as ReactDOM from "react-dom";
import { jsx as jsx18 } from "react/jsx-runtime";
function dispatchDiscreteCustomEvent(target, event) {
  target && ReactDOM.flushSync(() => target.dispatchEvent(event));
}
__name(dispatchDiscreteCustomEvent, "dispatchDiscreteCustomEvent");
var DISMISSABLE_LAYER_NAME = "Dismissable";
var CONTEXT_UPDATE = "dismissable.update";
var POINTER_DOWN_OUTSIDE = "dismissable.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissable.focusOutside";
var originalBodyPointerEvents;
var globalLayers = /* @__PURE__ */ new Set();
var layerChangeListeners = /* @__PURE__ */ new Set();
var layersWithPointerEventsDisabledCount = 0;
function notifyLayerChange() {
  for (const listener of layerChangeListeners) listener();
}
__name(notifyLayerChange, "notifyLayerChange");
var DismissableContext = React23.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var Dismissable = React23.forwardRef((props, forwardedRef) => {
  const {
    disableOutsidePointerEvents = false,
    forceUnmount,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside,
    onInteractOutside,
    onDismiss,
    asChild,
    children,
    branches: branchesProp,
    ...layerProps
  } = props, Comp = asChild ? Slot2 : View5, context4 = React23.useContext(DismissableContext), [node, setNode] = React23.useState(null), [, force] = React23.useState({}), composedRefs = useComposedRefs(forwardedRef, (node2) => setNode(node2)), layers = Array.from(context4.layers), [highestLayerWithOutsidePointerEventsDisabled] = [...context4.layersWithOutsidePointerEventsDisabled].slice(-1), highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled), index2 = node ? layers.indexOf(node) : -1, isBodyPointerEventsDisabled = context4.layersWithOutsidePointerEventsDisabled.size > 0, isPointerEventsEnabled = index2 >= highestLayerWithOutsidePointerEventsDisabledIndex, pointerDownOutside = usePointerDownOutside((event) => {
    const target = event.target, isPointerDownOnBranch = [...branchesProp || context4.branches].some((branch) => branch.contains(target));
    !isPointerEventsEnabled || isPointerDownOnBranch || (onPointerDownOutside?.(event), onInteractOutside?.(event), event.defaultPrevented || onDismiss?.());
  }), focusOutside = useFocusOutside((event) => {
    const target = event.target;
    [...branchesProp || context4.branches].some((branch) => branch.contains(target)) || (onFocusOutside?.(event), onInteractOutside?.(event), event.defaultPrevented || onDismiss?.());
  }), forceUnmountRef = React23.useRef(forceUnmount);
  return React23.useEffect(() => {
    forceUnmountRef.current = forceUnmount;
  }, [forceUnmount]), useEscapeKeydown((event) => {
    if (forceUnmountRef.current) return;
    const currentLayers = Array.from(context4.layers);
    (node ? currentLayers.indexOf(node) : -1) === currentLayers.length - 1 && (onEscapeKeyDown?.(event), !event.defaultPrevented && onDismiss && (event.preventDefault(), onDismiss()));
  }), React23.useEffect(() => {
    if (node && !forceUnmount) return disableOutsidePointerEvents && (context4.layersWithOutsidePointerEventsDisabled.size === 0 && (originalBodyPointerEvents = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), context4.layersWithOutsidePointerEventsDisabled.add(node), layersWithPointerEventsDisabledCount++), context4.layers.add(node), globalLayers.add(node), (disableOutsidePointerEvents || layersWithPointerEventsDisabledCount > 0) && dispatchUpdate(), notifyLayerChange(), () => {
      disableOutsidePointerEvents && context4.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = originalBodyPointerEvents);
    };
  }, [node, disableOutsidePointerEvents, forceUnmount, context4]), React23.useEffect(() => {
    if (!forceUnmount) return () => {
      if (!node) return;
      const hadPointerEventsDisabled = context4.layersWithOutsidePointerEventsDisabled.has(node);
      context4.layers.delete(node), context4.layersWithOutsidePointerEventsDisabled.delete(node), globalLayers.delete(node), layersWithPointerEventsDisabledCount > 0 && dispatchUpdate(), notifyLayerChange(), hadPointerEventsDisabled && layersWithPointerEventsDisabledCount--;
    };
  }, [node, context4, forceUnmount]), React23.useEffect(() => {
    const handleUpdate = /* @__PURE__ */ __name(() => {
      layersWithPointerEventsDisabledCount > 0 && force({});
    }, "handleUpdate");
    return document.addEventListener(CONTEXT_UPDATE, handleUpdate), () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
  }, []), /* @__PURE__ */ jsx18(Comp, {
    ...layerProps,
    ref: composedRefs,
    ...!asChild && {
      display: "contents"
    },
    pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
    onFocusCapture: composeEventHandlers2(props.onFocusCapture, focusOutside.onFocusCapture),
    onBlurCapture: composeEventHandlers2(props.onBlurCapture, focusOutside.onBlurCapture),
    onPointerDownCapture: composeEventHandlers2(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture),
    children
  });
});
Dismissable.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableBranch";
var DismissableBranch = React23.forwardRef((props, forwardedRef) => {
  const {
    branches: branchesProp,
    ...rest
  } = props, context4 = React23.useContext(DismissableContext), ref = React23.useRef(null), composedRefs = useComposedRefs(forwardedRef, ref);
  return React23.useEffect(() => {
    const node = ref.current;
    if (!(node instanceof HTMLElement)) return;
    const branches = branchesProp || context4.branches;
    if (node && branches) return branches.add(node), () => {
      branches.delete(node);
    };
  }, [branchesProp, context4.branches]), /* @__PURE__ */ jsx18(View5, {
    asChild: "except-style",
    ...rest,
    ref: composedRefs
  });
});
DismissableBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(onPointerDownOutside) {
  const handlePointerDownOutside = useEvent(onPointerDownOutside), isPointerInsideReactTreeRef = React23.useRef(false), handleClickRef = React23.useRef(() => {
  });
  return React23.useEffect(() => {
    const handlePointerDown = /* @__PURE__ */ __name((event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent = /* @__PURE__ */ __name(function() {
          handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
            discrete: true
          });
        }, "handleAndDispatchPointerDownOutsideEvent");
        const eventDetail = {
          originalEvent: event
        };
        event.pointerType === "touch" ? (document.removeEventListener("click", handleClickRef.current), handleClickRef.current = handleAndDispatchPointerDownOutsideEvent, document.addEventListener("click", handleClickRef.current, {
          once: true
        })) : handleAndDispatchPointerDownOutsideEvent();
      }
      isPointerInsideReactTreeRef.current = false;
    }, "handlePointerDown"), timerId = setTimeout(() => {
      document.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId), document.removeEventListener("pointerdown", handlePointerDown), document.removeEventListener("click", handleClickRef.current);
    };
  }, [handlePointerDownOutside]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: /* @__PURE__ */ __name(() => {
      isPointerInsideReactTreeRef.current = true;
    }, "onPointerDownCapture")
  };
}
__name(usePointerDownOutside, "usePointerDownOutside");
function useFocusOutside(onFocusOutside) {
  const handleFocusOutside = useEvent(onFocusOutside), isFocusInsideReactTreeRef = React23.useRef(false);
  return React23.useEffect(() => {
    const handleFocus = /* @__PURE__ */ __name((event) => {
      event.target && !isFocusInsideReactTreeRef.current && handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, {
        originalEvent: event
      }, {
        discrete: false
      });
    }, "handleFocus");
    return document.addEventListener("focusin", handleFocus), () => document.removeEventListener("focusin", handleFocus);
  }, [handleFocusOutside]), {
    onFocusCapture: /* @__PURE__ */ __name(() => {
      isFocusInsideReactTreeRef.current = true;
    }, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ __name(() => {
      isFocusInsideReactTreeRef.current = false;
    }, "onBlurCapture")
  };
}
__name(useFocusOutside, "useFocusOutside");
function dispatchUpdate() {
  const event = new CustomEvent(CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
__name(dispatchUpdate, "dispatchUpdate");
function handleAndDispatchCustomEvent(name, handler, detail, {
  discrete
}) {
  const target = detail.originalEvent.target, event = new CustomEvent(name, {
    bubbles: false,
    cancelable: true,
    detail
  });
  handler && target.addEventListener(name, handler, {
    once: true
  }), discrete ? dispatchDiscreteCustomEvent(target, event) : target.dispatchEvent(event);
}
__name(handleAndDispatchCustomEvent, "handleAndDispatchCustomEvent");

// node_modules/@tamagui/use-async/dist/esm/useAsyncEffect.mjs
import { useEffect as useEffect10, useLayoutEffect as useLayoutEffect3 } from "react";

// node_modules/@tamagui/use-async/dist/esm/errors.mjs
var AbortError = class extends Error {
  static {
    __name(this, "AbortError");
  }
  constructor(message = "") {
    super(message), this.name = "AbortError";
  }
};

// node_modules/@tamagui/use-async/dist/esm/useAsyncEffect.mjs
var DEBUG_LEVEL = 0;
function useAsyncEffect(cb, deps = []) {
  useAsyncEffectOfType(useEffect10, cb, deps);
}
__name(useAsyncEffect, "useAsyncEffect");
function useAsyncEffectOfType(type, cb, deps = []) {
  type(() => {
    const controller = new AbortController(), signal = controller.signal;
    try {
      const value = cb(signal, ...deps);
      Promise.resolve(value).then(async (res) => {
        if (res && typeof res == "function") {
          if (signal.aborted) return res();
          signal.addEventListener("abort", res);
        }
      }).catch(handleError);
    } catch (error2) {
      handleError(error2);
    }
    function handleError(error2) {
      if (error2 instanceof AbortError) return DEBUG_LEVEL > 2 && console.info(`\u{1F41B} useAsyncEffect aborted: ${error2.message}`), null;
      if (typeof error2 == "object" && error2.name === "AbortError") return null;
      throw error2;
    }
    __name(handleError, "handleError");
    return () => {
      signal.aborted || controller.abort();
    };
  }, deps);
}
__name(useAsyncEffectOfType, "useAsyncEffectOfType");

// node_modules/@tamagui/use-async/dist/esm/sleep.mjs
var sleep = /* @__PURE__ */ __name(async (ms, signal) => {
  if (await new Promise((res) => setTimeout(res, ms)), signal?.aborted) throw new AbortError();
}, "sleep");

// node_modules/@tamagui/use-async/dist/esm/idle.mjs
var idleCb = typeof requestIdleCallback > "u" ? (cb) => setTimeout(cb, 1) : requestIdleCallback;
var idleAsync = /* @__PURE__ */ __name(() => new Promise((res) => {
  idleCb(res);
}), "idleAsync");
var idle = /* @__PURE__ */ __name(async (signal, options) => {
  const {
    max: max2,
    min: min2,
    fully
  } = options || {}, idleFn = fully ? fullyIdle : idleAsync;
  if (max2 && min2 && min2 < max2 ? await Promise.race([Promise.all([idleFn(), sleep(min2)]), sleep(max2)]) : max2 ? await Promise.race([idleFn(), sleep(max2)]) : min2 ? await Promise.all([idleFn(), sleep(min2)]) : await idleFn(), signal?.aborted) throw new AbortError();
}, "idle");
var fullyIdle = /* @__PURE__ */ __name(async (signal) => {
  for (; ; ) {
    const startTime = Date.now();
    if (await idle(signal), Date.now() - startTime < 15) break;
    if (signal?.aborted) throw new AbortError();
  }
}, "fullyIdle");

// node_modules/@tamagui/focus-scope/dist/esm/FocusScope.mjs
import * as React25 from "react";

// node_modules/@tamagui/focus-scope/dist/esm/FocusScopeController.mjs
import * as React24 from "react";
import { jsx as jsx19 } from "react/jsx-runtime";
var FOCUS_SCOPE_CONTROLLER_NAME = "FocusScopeController";
var [createFocusScopeControllerContext, createFocusScopeControllerScope] = createContextScope(FOCUS_SCOPE_CONTROLLER_NAME);
var [FocusScopeControllerProvider, useFocusScopeControllerContext] = createFocusScopeControllerContext(FOCUS_SCOPE_CONTROLLER_NAME);
function FocusScopeController(props) {
  const {
    __scopeFocusScope,
    children,
    enabled,
    loop,
    trapped,
    onMountAutoFocus,
    onUnmountAutoFocus,
    forceUnmount,
    focusOnIdle
  } = props, stableOnMountAutoFocus = useEvent(onMountAutoFocus), stableOnUnmountAutoFocus = useEvent(onUnmountAutoFocus), contextValue = React24.useMemo(() => ({
    enabled,
    loop,
    trapped,
    onMountAutoFocus: stableOnMountAutoFocus,
    onUnmountAutoFocus: stableOnUnmountAutoFocus,
    forceUnmount,
    focusOnIdle
  }), [enabled, loop, trapped, stableOnMountAutoFocus, stableOnUnmountAutoFocus, forceUnmount, focusOnIdle]);
  return /* @__PURE__ */ jsx19(FocusScopeControllerProvider, {
    scope: __scopeFocusScope,
    ...contextValue,
    children
  });
}
__name(FocusScopeController, "FocusScopeController");
var FocusScopeControllerComponent = FocusScopeController;

// node_modules/@tamagui/focus-scope/dist/esm/FocusScope.mjs
import { Fragment as Fragment6, jsx as jsx20 } from "react/jsx-runtime";
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = {
  bubbles: false,
  cancelable: true
};
var FocusScope = React25.forwardRef(function({
  __scopeFocusScope,
  ...props
}, forwardedRef) {
  const context4 = useFocusScopeControllerContext("FocusScope", __scopeFocusScope, {
    warn: false,
    fallback: {}
  }), mergedProps = {
    ...props,
    enabled: context4.enabled ?? props.enabled,
    loop: context4.loop ?? props.loop,
    trapped: context4.trapped ?? props.trapped,
    onMountAutoFocus: context4.onMountAutoFocus ?? props.onMountAutoFocus,
    onUnmountAutoFocus: context4.onUnmountAutoFocus ?? props.onUnmountAutoFocus,
    forceUnmount: context4.forceUnmount ?? props.forceUnmount,
    focusOnIdle: context4.focusOnIdle ?? props.focusOnIdle
  }, childProps = useFocusScope(mergedProps, forwardedRef);
  return typeof mergedProps.children == "function" ? /* @__PURE__ */ jsx20(Fragment6, {
    children: mergedProps.children(childProps)
  }) : React25.cloneElement(React25.Children.only(mergedProps.children), childProps);
});
function setupFocusTrap(container, lastFocusedElementRef, focusScope) {
  const controller = new AbortController();
  let rafId2 = null;
  function scheduleRefocus() {
    if (rafId2) return;
    const elementToFocus = lastFocusedElementRef.current;
    rafId2 = requestAnimationFrame(() => {
      rafId2 = null, !focusScope.paused && (focusScope.stopped || container.isConnected && (container.contains(document.activeElement) || focus(elementToFocus)));
    });
  }
  __name(scheduleRefocus, "scheduleRefocus");
  function handleFocusIn(event) {
    if (focusScope.paused) return;
    const target = event.target;
    container.contains(target) ? (target?.addEventListener("blur", handleBlur, {
      signal: controller.signal
    }), lastFocusedElementRef.current = target) : scheduleRefocus();
  }
  __name(handleFocusIn, "handleFocusIn");
  function handleFocusOut(event) {
    controller.abort(), !focusScope.paused && (container.contains(event.relatedTarget) || scheduleRefocus());
  }
  __name(handleFocusOut, "handleFocusOut");
  function handleBlur() {
  }
  __name(handleBlur, "handleBlur");
  return document.addEventListener("focusin", handleFocusIn), document.addEventListener("focusout", handleFocusOut), () => {
    rafId2 && (cancelAnimationFrame(rafId2), rafId2 = null), controller.abort(), document.removeEventListener("focusin", handleFocusIn), document.removeEventListener("focusout", handleFocusOut);
  };
}
__name(setupFocusTrap, "setupFocusTrap");
function useFocusScope(props, forwardedRef) {
  const {
    loop = false,
    enabled = true,
    trapped = false,
    onMountAutoFocus: onMountAutoFocusProp,
    onUnmountAutoFocus: onUnmountAutoFocusProp,
    forceUnmount,
    focusOnIdle = true,
    children,
    ...scopeProps
  } = props, [container, setContainer] = React25.useState(null), containerRef = React25.useRef(null), onMountAutoFocus = useEvent(onMountAutoFocusProp), onUnmountAutoFocus = useEvent(onUnmountAutoFocusProp), lastFocusedElementRef = React25.useRef(null), focusScopeRef = React25.useRef({
    paused: false,
    stopped: false,
    // set to true when cleanup starts, signals trap to stop
    pause() {
      this.paused = true;
    },
    resume() {
      this.paused = false;
    },
    stop() {
      this.stopped = true;
    }
  }), focusScope = focusScopeRef.current, trapCleanupRef = React25.useRef(null), setContainerRef = React25.useCallback((node) => {
    trapCleanupRef.current && (trapCleanupRef.current(), trapCleanupRef.current = null), containerRef.current = node, isWeb && node && enabled && trapped && (trapCleanupRef.current = setupFocusTrap(node, lastFocusedElementRef, focusScopeRef.current)), setContainer(node);
  }, [enabled, trapped]), composedRefs = useComposedRefs(forwardedRef, setContainerRef);
  useIsomorphicLayoutEffect(() => (trapped || (focusScope.stopped = true, trapCleanupRef.current && (trapCleanupRef.current(), trapCleanupRef.current = null)), () => {
    trapCleanupRef.current && (trapCleanupRef.current(), trapCleanupRef.current = null);
  }), [trapped, focusScope]), useAsyncEffect(async (signal) => {
    if (!enabled || !container || forceUnmount) return;
    trapped && (focusScope.stopped = false), focusScopesStack.add(focusScope);
    const previouslyFocusedElement = document.activeElement;
    if (!(container.contains(previouslyFocusedElement) && previouslyFocusedElement !== null && !isHidden(previouslyFocusedElement, {
      upTo: container
    }))) {
      const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
      if (container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus), container.dispatchEvent(mountEvent), !mountEvent.defaultPrevented) {
        focusOnIdle && await idle(signal, typeof focusOnIdle == "object" ? focusOnIdle : {
          // we can't wait too long or else user can take an action and then we focus
          max: 200,
          min: typeof focusOnIdle == "number" ? focusOnIdle : 16
        });
        const allCandidates = getTabbableCandidates(container), visibleCandidates = removeLinks(allCandidates).filter((candidate) => !isHidden(candidate, {
          upTo: container
        }));
        focusFirst(visibleCandidates, {
          select: true
        }), visibleCandidates.length > 0 ? lastFocusedElementRef.current = visibleCandidates[0] : lastFocusedElementRef.current = container, document.activeElement === previouslyFocusedElement && visibleCandidates.length === 0 && focus(container);
      }
    }
    return () => {
      focusScope.stop(), container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
      const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
      if (container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus), container.dispatchEvent(unmountEvent), !unmountEvent.defaultPrevented) {
        const currentFocus = document.activeElement;
        currentFocus && currentFocus !== document.body && currentFocus !== container && !container.contains(currentFocus) || focus(previouslyFocusedElement ?? document.body, {
          select: true
        });
      }
      container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus), focusScopesStack.remove(focusScope);
    };
  }, [enabled, container, forceUnmount, onMountAutoFocus, onUnmountAutoFocus, focusScope, focusOnIdle]);
  const handleKeyDown = React25.useCallback((event) => {
    if (!trapped || !loop || focusScope.paused || !enabled || !container) return;
    const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey, focusedElement = document.activeElement;
    if (isTabKey && focusedElement) {
      const [first, last] = getTabbableEdges(container);
      first && last ? !event.shiftKey && focusedElement === last ? (event.preventDefault(), loop && focus(first, {
        select: true
      })) : event.shiftKey && focusedElement === first && (event.preventDefault(), loop && focus(last, {
        select: true
      })) : focusedElement === container && event.preventDefault();
    }
  }, [loop, trapped, focusScope.paused, enabled, container]);
  React25.useEffect(() => {
    if (!container || !trapped || !loop || !enabled) return;
    const handleKeyDownCapture = /* @__PURE__ */ __name((event) => {
      event.key === "Tab" && handleKeyDown(event);
    }, "handleKeyDownCapture");
    return container.addEventListener("keydown", handleKeyDownCapture, true), () => {
      container.removeEventListener("keydown", handleKeyDownCapture, true);
    };
  }, [container, trapped, loop, enabled, handleKeyDown]);
  const existingOnKeyDown = scopeProps.onKeyDown, composedOnKeyDown = React25.useCallback((event) => {
    existingOnKeyDown?.(event);
  }, [existingOnKeyDown]);
  return {
    ...scopeProps,
    ref: composedRefs,
    onKeyDown: composedOnKeyDown
  };
}
__name(useFocusScope, "useFocusScope");
function focusFirst(candidates, {
  select = false
} = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) if (focus(candidate, {
    select
  }), document.activeElement !== previouslyFocusedElement) return;
}
__name(focusFirst, "focusFirst");
function getTabbableEdges(container) {
  const candidates = getTabbableCandidates(container), first = findVisible(candidates, container), last = findVisible(candidates.reverse(), container);
  return [first, last];
}
__name(getTabbableEdges, "getTabbableEdges");
function getTabbableCandidates(container) {
  const nodes = [], walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ __name((node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      return node.disabled || node.hidden || isHiddenInput ? NodeFilter.FILTER_SKIP : node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; walker.nextNode(); ) nodes.push(walker.currentNode);
  return nodes;
}
__name(getTabbableCandidates, "getTabbableCandidates");
function findVisible(elements, container) {
  for (const element of elements) if (!isHidden(element, {
    upTo: container
  })) return element;
}
__name(findVisible, "findVisible");
function isHidden(node, {
  upTo
}) {
  if (getComputedStyle(node).visibility === "hidden") return true;
  for (; node; ) {
    if (upTo !== void 0 && node === upTo) return false;
    if (getComputedStyle(node).display === "none") return true;
    node = node.parentElement;
  }
  return false;
}
__name(isHidden, "isHidden");
function isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
__name(isSelectableInput, "isSelectableInput");
function focus(element, {
  select = false
} = {}) {
  if (element?.focus) {
    const previouslyFocusedElement = document.activeElement;
    try {
      element.focus({
        preventScroll: true
      }), element !== previouslyFocusedElement && isSelectableInput(element) && select && element.select();
    } catch {
    }
  }
}
__name(focus, "focus");
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      focusScope !== activeFocusScope && activeFocusScope?.pause(), stack = arrayRemove(stack, focusScope), stack.unshift(focusScope);
    },
    remove(focusScope) {
      stack = arrayRemove(stack, focusScope), stack[0]?.resume();
    }
  };
}
__name(createFocusScopesStack, "createFocusScopesStack");
function arrayRemove(array, item) {
  const updatedArray = [...array], index2 = updatedArray.indexOf(item);
  return index2 !== -1 && updatedArray.splice(index2, 1), updatedArray;
}
__name(arrayRemove, "arrayRemove");
function removeLinks(items) {
  return items.filter((item) => item.tagName !== "A");
}
__name(removeLinks, "removeLinks");

// node_modules/@tamagui/remove-scroll/dist/esm/useDisableScroll.mjs
import { useEffect as useEffect12, useRef as useRef9 } from "react";
var canUseDOM = /* @__PURE__ */ __name(() => typeof window < "u" && !!window.document && !!window.document.createElement, "canUseDOM");
var refCount = 0;
var savedScrollY = 0;
var previousStyles = null;
function isIOSSafari() {
  if (typeof navigator > "u") return false;
  const ua = navigator.userAgent, isIOS = /iPad|iPhone|iPod/.test(ua) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1, isSafari2 = /^((?!chrome|android).)*safari/i.test(ua);
  return isIOS && isSafari2;
}
__name(isIOSSafari, "isIOSSafari");
var useDisableBodyScroll = /* @__PURE__ */ __name((enabled) => {
  const wasEnabled = useRef9(false);
  useEffect12(() => {
    if (canUseDOM()) {
      if (enabled && !wasEnabled.current) {
        if (wasEnabled.current = true, ++refCount === 1) {
          const html = document.documentElement, body = document.body;
          savedScrollY = window.scrollY, previousStyles = {
            htmlOverflow: html.style.overflow,
            htmlScrollbarGutter: html.style.scrollbarGutter,
            bodyPosition: body.style.position,
            bodyTop: body.style.top,
            bodyWidth: body.style.width,
            bodyOverflow: body.style.overflow,
            bodyOverscrollBehavior: body.style.overscrollBehavior
          }, html.style.scrollbarGutter = "stable", html.style.overflow = "hidden", body.style.overscrollBehavior = "none", isIOSSafari() && (body.style.position = "fixed", body.style.top = `-${savedScrollY}px`, body.style.width = "100%", body.style.overflow = "hidden");
        }
      } else if (!enabled && wasEnabled.current && (wasEnabled.current = false, --refCount === 0 && previousStyles)) {
        const html = document.documentElement, body = document.body;
        html.style.overflow = previousStyles.htmlOverflow, html.style.scrollbarGutter = previousStyles.htmlScrollbarGutter, body.style.position = previousStyles.bodyPosition, body.style.top = previousStyles.bodyTop, body.style.width = previousStyles.bodyWidth, body.style.overflow = previousStyles.bodyOverflow, body.style.overscrollBehavior = previousStyles.bodyOverscrollBehavior, savedScrollY > 0 && window.scrollTo(0, savedScrollY), previousStyles = null, savedScrollY = 0;
      }
    }
  }, [enabled]), useEffect12(() => () => {
    if (wasEnabled.current && (wasEnabled.current = false, --refCount === 0 && previousStyles)) {
      const html = document.documentElement, body = document.body;
      html.style.overflow = previousStyles.htmlOverflow, html.style.scrollbarGutter = previousStyles.htmlScrollbarGutter, body.style.position = previousStyles.bodyPosition, body.style.top = previousStyles.bodyTop, body.style.width = previousStyles.bodyWidth, body.style.overflow = previousStyles.bodyOverflow, body.style.overscrollBehavior = previousStyles.bodyOverscrollBehavior, savedScrollY > 0 && window.scrollTo(0, savedScrollY), previousStyles = null, savedScrollY = 0;
    }
  }, []);
}, "useDisableBodyScroll");

// node_modules/@tamagui/remove-scroll/dist/esm/RemoveScroll.mjs
var RemoveScroll = /* @__PURE__ */ __name((props) => (useDisableBodyScroll(!!props.enabled), props.children), "RemoveScroll");

// node_modules/@tamagui/sheet/dist/esm/SheetController.mjs
import React27, { useId as useId6, useRef as useRef10 } from "react";
import { useEvent as useEvent2 } from "@tamagui/core";

// node_modules/@tamagui/sheet/dist/esm/useSheetController.mjs
import React26 from "react";
var useSheetController = /* @__PURE__ */ __name(() => {
  const controller = React26.useContext(SheetControllerContext), isHidden2 = controller?.hidden, isShowingNonSheet = isHidden2 && controller?.open;
  return {
    controller,
    isHidden: isHidden2,
    isShowingNonSheet,
    disableDrag: controller?.disableDrag
  };
}, "useSheetController");
var SheetControllerContext = React26.createContext(null);

// node_modules/@tamagui/sheet/dist/esm/SheetController.mjs
import { jsx as jsx21 } from "react/jsx-runtime";
var SheetController = /* @__PURE__ */ __name(({
  children,
  onOpenChange: onOpenChangeProp,
  open: open2,
  hidden,
  disableDrag
}) => {
  const onOpenChange = useEvent2(onOpenChangeProp), id = useId6(), wasHiddenRef = useRef10(hidden);
  let skipNextAnimation = false;
  wasHiddenRef.current && !hidden && open2 && (skipNextAnimation = true), wasHiddenRef.current = hidden;
  const memoValue = React27.useMemo(() => ({
    id,
    open: open2,
    hidden,
    disableDrag,
    onOpenChange,
    skipNextAnimation
  }), [id, onOpenChange, open2, hidden, disableDrag, skipNextAnimation]);
  return /* @__PURE__ */ jsx21(SheetControllerContext.Provider, {
    value: memoValue,
    children
  });
}, "SheetController");

// node_modules/@tamagui/dialog/dist/esm/Dialog.mjs
import * as React28 from "react";
import { Fragment as Fragment7, jsx as jsx22, jsxs as jsxs2 } from "react/jsx-runtime";
var DialogContext = createStyledContext5(
  // since we always provide this we can avoid setting here
  {},
  "Dialog__"
);
var {
  useStyledContext: useDialogContext,
  Provider: DialogProvider
} = DialogContext;
var DialogTriggerFrame = styled12(View6, {
  name: "DialogTrigger"
});
var DialogTrigger = DialogTriggerFrame.styleable(function(props, forwardedRef) {
  const {
    scope,
    ...triggerProps
  } = props, isInsideButton = React28.useContext(ButtonNestingContext), context4 = useDialogContext(scope), composedTriggerRef = useComposedRefs(forwardedRef, context4.triggerRef);
  return /* @__PURE__ */ jsx22(ButtonNestingContext.Provider, {
    value: true,
    children: /* @__PURE__ */ jsx22(DialogTriggerFrame, {
      render: isInsideButton ? "span" : "button",
      "aria-haspopup": "dialog",
      "aria-expanded": context4.open,
      "aria-controls": context4.contentId,
      "data-state": getState3(context4.open),
      ...triggerProps,
      ref: composedTriggerRef,
      onPress: composeEventHandlers(props.onPress, context4.onOpenToggle)
    })
  });
});
var DialogPortalFrame = styled12(YStack, {
  pointerEvents: "none",
  render: "dialog",
  variants: {
    unstyled: {
      false: {
        alignItems: "center",
        justifyContent: "center",
        fullscreen: true,
        "$platform-web": {
          // undo dialog styles
          borderWidth: 0,
          backgroundColor: "transparent",
          color: "inherit",
          maxInlineSize: "none",
          margin: 0,
          width: "auto",
          height: "auto",
          // ensure always in frame and right height
          maxHeight: "100vh",
          position: "fixed",
          // ensure dialog inherits stacking context from portal wrapper
          zIndex: 1
        }
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var needsRepropagation = needsPortalRepropagation();
var DialogPortalItem = /* @__PURE__ */ __name(({
  context: context4,
  children
}) => {
  const themeName = useThemeName3(), isAdapted = useAdaptIsActive(context4.adaptScope), adaptContext = useAdaptContext(context4.adaptScope);
  let content = /* @__PURE__ */ jsx22(Theme, {
    name: themeName,
    children
  });
  return needsRepropagation && (content = /* @__PURE__ */ jsx22(ProvideAdaptContext, {
    ...adaptContext,
    children: /* @__PURE__ */ jsx22(DialogProvider, {
      ...context4,
      children: content
    })
  })), isAdapted ? /* @__PURE__ */ jsx22(AdaptPortalContents, {
    scope: context4.adaptScope,
    children: content
  }) : context4.modal ? /* @__PURE__ */ jsx22(GorhomPortalItem, {
    hostName: context4.modal ? "root" : context4.adaptScope,
    children: content
  }) : content;
}, "DialogPortalItem");
var DialogPortal = React28.forwardRef((props, forwardRef30) => {
  const {
    scope,
    forceMount,
    children,
    ...frameProps
  } = props, dialogRef = React28.useRef(null), ref = composeRefs(dialogRef, forwardRef30), context4 = useDialogContext(scope), keepMounted = forceMount || context4.keepChildrenMounted, isAdapted = useAdaptIsActive(context4.adaptScope), [isFullyHidden, setIsFullyHidden] = React28.useState(!context4.open);
  context4.open && isFullyHidden && setIsFullyHidden(false);
  const isVisible = context4.open ? true : !isFullyHidden;
  isWeb && useIsomorphicLayoutEffect(() => {
    const node = dialogRef.current;
    node instanceof HTMLDialogElement && (isVisible ? node.show?.() : node.close?.());
  }, [isVisible]);
  const onAnimationCompleteRef = React28.useRef(context4.onAnimationComplete);
  onAnimationCompleteRef.current = context4.onAnimationComplete;
  const handleExitComplete = React28.useCallback(() => {
    setIsFullyHidden(true), onAnimationCompleteRef.current?.({
      open: false
    });
  }, []);
  React28.useEffect(() => {
    if (context4.open && !isAdapted && onAnimationCompleteRef.current) {
      const tm = setTimeout(() => {
        onAnimationCompleteRef.current?.({
          open: true
        });
      }, 350);
      return () => clearTimeout(tm);
    }
  }, [context4.open, isAdapted]);
  const zIndex = getExpandedShorthand("zIndex", props), contents = /* @__PURE__ */ jsx22(StackZIndexContext, {
    zIndex: resolveViewZIndex(zIndex),
    children: /* @__PURE__ */ jsx22(Animate, {
      type: "presence",
      present: !!context4.open,
      keepChildrenMounted: !!keepMounted,
      onExitComplete: handleExitComplete,
      passThrough: isAdapted,
      children
    })
  }), framedContents = isFullyHidden && !keepMounted && !isAdapted ? null : /* @__PURE__ */ jsx22(LayoutMeasurementController, {
    disable: !context4.open,
    children: /* @__PURE__ */ jsx22(DialogPortalFrame, {
      ref,
      ...isWeb && context4.open && {
        "aria-modal": true
      },
      pointerEvents: context4.open ? "auto" : "none",
      ...frameProps,
      className: "_no_backdrop " + (frameProps.className || ""),
      children: contents
    })
  });
  return isWeb ? /* @__PURE__ */ jsx22(Portal, {
    zIndex,
    stackZIndex: 1e5,
    passThrough: isAdapted,
    children: /* @__PURE__ */ jsx22(PassthroughTheme, {
      passThrough: isAdapted,
      children: framedContents
    })
  }) : isAdapted ? framedContents : /* @__PURE__ */ jsx22(DialogPortalItem, {
    context: context4,
    children: framedContents
  });
});
var PassthroughTheme = /* @__PURE__ */ __name(({
  children,
  passThrough
}) => {
  const themeName = useThemeName3();
  return /* @__PURE__ */ jsx22(Theme, {
    passThrough,
    name: themeName,
    forceClassName: true,
    children
  });
}, "PassthroughTheme");
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlayFrame = styled12(YStack, {
  name: OVERLAY_NAME,
  zIndex: 1,
  variants: {
    open: {
      true: {
        pointerEvents: "auto"
      },
      false: {
        pointerEvents: "none"
      }
    },
    unstyled: {
      false: {
        fullscreen: true,
        position: "absolute",
        backgroundColor: "$background",
        pointerEvents: "auto"
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var DialogOverlay = DialogOverlayFrame.styleable(function({
  scope,
  ...props
}, forwardedRef) {
  const context4 = useDialogContext(scope), {
    forceMount = context4.forceMount,
    ...overlayProps
  } = props, isAdapted = useAdaptIsActive(context4.adaptScope);
  return !forceMount && (!context4.modal || isAdapted) ? null : /* @__PURE__ */ jsx22(DialogOverlayFrame, {
    "data-state": getState3(context4.open),
    pointerEvents: context4.open ? "auto" : "none",
    ...overlayProps,
    ref: forwardedRef
  });
});
var CONTENT_NAME2 = "DialogContent";
var DialogContentFrame = styled12(ThemeableStack, {
  name: CONTENT_NAME2,
  zIndex: 2,
  variants: {
    size: {
      "...size": /* @__PURE__ */ __name((val, extras) => ({}), "...size")
    },
    unstyled: {
      false: {
        position: "relative",
        backgroundColor: "$background",
        borderWidth: 1,
        borderColor: "$borderColor",
        padding: "$true",
        borderRadius: "$true",
        elevate: true,
        // Ensure content receives pointer events (fixes React 19 + display:contents inheritance)
        pointerEvents: "auto"
      }
    }
  },
  defaultVariants: {
    size: "$true",
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var DialogContent = DialogContentFrame.styleable(function({
  scope,
  ...props
}, forwardedRef) {
  const context4 = useDialogContext(scope), contents = /* @__PURE__ */ jsx22(Fragment7, {
    children: context4.modal ? /* @__PURE__ */ jsx22(DialogContentModal, {
      context: context4,
      ...props,
      ref: forwardedRef
    }) : /* @__PURE__ */ jsx22(DialogContentNonModal, {
      context: context4,
      ...props,
      ref: forwardedRef
    })
  });
  return !isWeb || context4.disableRemoveScroll ? contents : /* @__PURE__ */ jsx22(RemoveScroll, {
    enabled: context4.open,
    children: /* @__PURE__ */ jsx22("div", {
      "data-remove-scroll-container": true,
      className: "_dsp_contents",
      children: contents
    })
  });
});
var DialogContentModal = React28.forwardRef(({
  children,
  context: context4,
  ...props
}, forwardedRef) => {
  const contentRef = React28.useRef(null), composedRefs = useComposedRefs(forwardedRef, context4.contentRef, contentRef);
  return /* @__PURE__ */ jsx22(DialogContentImpl, {
    ...props,
    context: context4,
    ref: composedRefs,
    trapFocus: context4.open,
    disableOutsidePointerEvents: true,
    onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
      event.preventDefault(), context4.triggerRef.current?.focus();
    }),
    onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
      const originalEvent = event.detail.originalEvent, ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
      (originalEvent.button === 2 || ctrlLeftClick) && event.preventDefault();
    }),
    onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => event.preventDefault()),
    ...!props.unstyled && {
      outlineStyle: "none"
    },
    children
  });
});
var DialogContentNonModal = React28.forwardRef((props, forwardedRef) => {
  const hasInteractedOutsideRef = React28.useRef(false);
  return /* @__PURE__ */ jsx22(DialogContentImpl, {
    ...props,
    ref: forwardedRef,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    onCloseAutoFocus: /* @__PURE__ */ __name((event) => {
      props.onCloseAutoFocus?.(event), event.defaultPrevented || (hasInteractedOutsideRef.current || props.context.triggerRef.current?.focus(), event.preventDefault()), hasInteractedOutsideRef.current = false;
    }, "onCloseAutoFocus"),
    onInteractOutside: /* @__PURE__ */ __name((event) => {
      props.onInteractOutside?.(event), event.defaultPrevented || (hasInteractedOutsideRef.current = true);
      const target = event.target, trigger = props.context.triggerRef.current;
      if (!(trigger instanceof HTMLElement)) return;
      trigger.contains(target) && event.preventDefault();
    }, "onInteractOutside")
  });
});
var DialogContentImpl = React28.forwardRef((props, forwardedRef) => {
  const {
    trapFocus,
    onOpenAutoFocus,
    onCloseAutoFocus,
    disableOutsidePointerEvents,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside,
    onInteractOutside,
    context: context4,
    ...contentProps
  } = props, contentRef = React28.useRef(null), composedRefs = useComposedRefs(forwardedRef, contentRef);
  if (useAdaptIsActive(context4.adaptScope)) return !isWeb && !context4.open ? null : /* @__PURE__ */ jsx22(DialogPortalItem, {
    context: context4,
    children: contentProps.children
  });
  const contents = /* @__PURE__ */ jsx22(DialogContentFrame, {
    ref: composedRefs,
    id: context4.contentId,
    role: "dialog",
    "aria-modal": context4.modal,
    "aria-describedby": context4.descriptionId,
    "aria-labelledby": context4.titleId,
    "data-state": getState3(context4.open),
    pointerEvents: context4.open ? "auto" : "none",
    ...contentProps
  });
  return isWeb ? /* @__PURE__ */ jsxs2(Fragment7, {
    children: [/* @__PURE__ */ jsx22(Dismissable, {
      disableOutsidePointerEvents: context4.open && disableOutsidePointerEvents,
      forceUnmount: !context4.open,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss: /* @__PURE__ */ __name(() => context4?.onOpenChange?.(false), "onDismiss"),
      children: /* @__PURE__ */ jsx22(FocusScope, {
        loop: true,
        enabled: context4.open,
        trapped: trapFocus,
        onMountAutoFocus: onOpenAutoFocus,
        forceUnmount: !context4.open,
        onUnmountAutoFocus: onCloseAutoFocus,
        children: contents
      })
    }), process.env.NODE_ENV === "development" && /* @__PURE__ */ jsxs2(Fragment7, {
      children: [/* @__PURE__ */ jsx22(TitleWarning, {
        titleId: context4.titleId
      }), /* @__PURE__ */ jsx22(DescriptionWarning, {
        contentRef,
        descriptionId: context4.descriptionId
      })]
    })]
  }) : contents;
});
var DialogTitleFrame = styled12(H2, {
  name: "DialogTitle"
});
var DialogTitle = DialogTitleFrame.styleable(function(props, forwardedRef) {
  const {
    scope,
    ...titleProps
  } = props, context4 = useDialogContext(scope);
  return /* @__PURE__ */ jsx22(DialogTitleFrame, {
    id: context4.titleId,
    ...titleProps,
    ref: forwardedRef
  });
});
var DialogDescriptionFrame = styled12(Paragraph, {
  name: "DialogDescription"
});
var DialogDescription = DialogDescriptionFrame.styleable(function(props, forwardedRef) {
  const {
    scope,
    ...descriptionProps
  } = props, context4 = useDialogContext(scope);
  return /* @__PURE__ */ jsx22(DialogDescriptionFrame, {
    id: context4.descriptionId,
    ...descriptionProps,
    ref: forwardedRef
  });
});
var CLOSE_NAME = "DialogClose";
var DialogCloseFrame = styled12(View6, {
  name: CLOSE_NAME,
  render: "button"
});
var DialogClose = DialogCloseFrame.styleable((props, forwardedRef) => {
  const {
    scope,
    displayWhenAdapted,
    ...closeProps
  } = props, context4 = useDialogContext(scope), isAdapted = useAdaptIsActive(context4.adaptScope), isInsideButton = React28.useContext(ButtonNestingContext);
  return isAdapted && !displayWhenAdapted ? null : /* @__PURE__ */ jsx22(DialogCloseFrame, {
    "aria-label": "Dialog Close",
    render: isInsideButton ? "span" : "button",
    ...closeProps,
    ref: forwardedRef,
    onPress: composeEventHandlers(props.onPress, () => {
      context4.onOpenChange(false);
    })
  });
});
function getState3(open2) {
  return open2 ? "open" : "closed";
}
__name(getState3, "getState");
var TITLE_WARNING_NAME = "DialogTitleWarning";
var [DialogWarningProvider, useWarningContext] = createContext8(TITLE_WARNING_NAME, {
  contentName: CONTENT_NAME2,
  titleName: "DialogTitle",
  docsSlug: "dialog"
});
var TitleWarning = /* @__PURE__ */ __name(({
  titleId
}) => {
  if (process.env.NODE_ENV === "development") {
    const titleWarningContext = useWarningContext(TITLE_WARNING_NAME), MESSAGE = `\`${titleWarningContext.contentName}\` wants a \`${titleWarningContext.titleName}\` to be accessible. If you want to hide the \`${titleWarningContext.titleName}\`, wrap it with <VisuallyHidden />.`;
    React28.useEffect(() => {
      isWeb && titleId && (document.getElementById(titleId) || console.warn(MESSAGE));
    }, [MESSAGE, titleId]);
  }
  return null;
}, "TitleWarning");
var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
var DescriptionWarning = /* @__PURE__ */ __name(({
  contentRef,
  descriptionId
}) => {
  if (process.env.NODE_ENV === "development") {
    const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${useWarningContext(DESCRIPTION_WARNING_NAME).contentName}}.`;
    React28.useEffect(() => {
      if (!isWeb) return;
      const contentNode = contentRef.current;
      if (!(contentNode instanceof HTMLElement)) return;
      const describedById = contentNode.getAttribute("aria-describedby");
      descriptionId && describedById && (document.getElementById(descriptionId) || console.warn(MESSAGE));
    }, [MESSAGE, contentRef, descriptionId]);
  }
  return null;
}, "DescriptionWarning");
var Dialog = withStaticProperties(React28.forwardRef(function(props, ref) {
  const {
    scope = "",
    children,
    open: openProp,
    defaultOpen = false,
    onOpenChange,
    modal = true,
    keepChildrenMounted,
    disableRemoveScroll = false,
    onAnimationComplete
  } = props, baseId = React28.useId(), dialogId = `Dialog-${scope}-${baseId}`, contentId = `${dialogId}-content`, titleId = `${dialogId}-title`, descriptionId = `${dialogId}-description`, triggerRef = React28.useRef(null), contentRef = React28.useRef(null), [open2, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  }), onOpenToggle = React28.useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
  }, [setOpen]), adaptScope = `DialogAdapt${scope}`, context4 = {
    dialogScope: scope,
    adaptScope,
    triggerRef,
    contentRef,
    contentId,
    titleId,
    descriptionId,
    open: open2,
    onOpenChange: setOpen,
    onOpenToggle,
    modal,
    keepChildrenMounted,
    disableRemoveScroll,
    onAnimationComplete
  };
  return React28.useImperativeHandle(ref, () => ({
    open: setOpen
  }), [setOpen]), /* @__PURE__ */ jsx22(AdaptParent, {
    scope: adaptScope,
    portal: {
      forwardProps: props
    },
    children: /* @__PURE__ */ jsx22(DialogProvider, {
      scope,
      ...context4,
      children: /* @__PURE__ */ jsx22(DialogSheetController, {
        onOpenChange: setOpen,
        scope,
        children
      })
    })
  });
}), {
  Trigger: DialogTrigger,
  Portal: DialogPortal,
  Overlay: DialogOverlay,
  Content: DialogContent,
  Title: DialogTitle,
  Description: DialogDescription,
  Close: DialogClose,
  FocusScope: FocusScopeControllerComponent,
  Adapt
});
var DialogSheetController = /* @__PURE__ */ __name((props) => {
  const context4 = useDialogContext(props.scope), isAdapted = useAdaptIsActive(context4.adaptScope);
  return /* @__PURE__ */ jsx22(SheetController, {
    onOpenChange: /* @__PURE__ */ __name((val) => {
      isAdapted && props.onOpenChange?.(val);
    }, "onOpenChange"),
    open: context4.open,
    hidden: !isAdapted,
    children: props.children
  });
}, "DialogSheetController");

// node_modules/@tamagui/alert-dialog/dist/esm/AlertDialog.mjs
import * as React29 from "react";
import { jsx as jsx23, jsxs as jsxs3 } from "react/jsx-runtime";
var getAlertDialogScope = /* @__PURE__ */ __name((scope) => scope, "getAlertDialogScope");
var ROOT_NAME = "AlertDialog";
var TRIGGER_NAME2 = "AlertDialogTrigger";
var NativeAlertDialogTriggerFrame = styled13(View7, {
  name: TRIGGER_NAME2
});
var AlertDialogTrigger = NativeAlertDialogTriggerFrame.styleable(function(props, forwardedRef) {
  if (props.__native) {
    const {
      __native,
      onPress,
      __onPress,
      ...rest
    } = props;
    return /* @__PURE__ */ jsx23(NativeAlertDialogTriggerFrame, {
      ...rest,
      onPress: composeEventHandlers(onPress, __onPress)
    });
  }
  const {
    scope,
    ...triggerProps
  } = props;
  return /* @__PURE__ */ jsx23(DialogTrigger, {
    scope: getAlertDialogScope(scope),
    ...triggerProps,
    ref: forwardedRef
  });
});
var AlertDialogPortal = /* @__PURE__ */ __name(function(props) {
  const {
    scope,
    ...portalProps
  } = props;
  return /* @__PURE__ */ jsx23(DialogPortal, {
    scope: getAlertDialogScope(scope),
    ...portalProps
  });
}, "AlertDialogPortal");
var OVERLAY_NAME2 = "AlertDialogOverlay";
var AlertDialogOverlayFrame = styled13(DialogOverlayFrame, {
  name: OVERLAY_NAME2
});
var AlertDialogOverlay = AlertDialogOverlayFrame.styleable(function(props, forwardedRef) {
  const {
    scope,
    ...overlayProps
  } = props;
  return /* @__PURE__ */ jsx23(DialogOverlay, {
    scope: getAlertDialogScope(scope),
    ...overlayProps,
    ref: forwardedRef
  });
});
var CONTENT_NAME3 = "AlertDialogContent";
var {
  Provider: AlertDialogContextProvider,
  useStyledContext: useAlertDialogContentContext
} = createStyledContext6({}, "AlertDialogContext");
var AlertDialogContent = React29.forwardRef(function(props, forwardedRef) {
  const {
    scope,
    children,
    ...contentProps
  } = props, dialogScope = getAlertDialogScope(scope), contentRef = React29.useRef(null), composedRefs = useComposedRefs(forwardedRef, contentRef), cancelRef = React29.useRef(null), destructiveRef = React29.useRef(null);
  return /* @__PURE__ */ jsx23(DialogWarningProvider, {
    contentName: CONTENT_NAME3,
    titleName: TITLE_NAME,
    docsSlug: "alert-dialog",
    children: /* @__PURE__ */ jsx23(AlertDialogContextProvider, {
      scope,
      cancelRef,
      destructiveRef,
      children: /* @__PURE__ */ jsxs3(DialogContent, {
        role: "alertdialog",
        "aria-modal": true,
        scope: dialogScope,
        ...contentProps,
        ref: composedRefs,
        onOpenAutoFocus: composeEventHandlers(contentProps.onOpenAutoFocus, (event) => {
          event.preventDefault(), isWeb && cancelRef.current?.focus({
            preventScroll: true
          });
        }),
        onPointerDownOutside: /* @__PURE__ */ __name((event) => event.preventDefault(), "onPointerDownOutside"),
        onInteractOutside: /* @__PURE__ */ __name((event) => event.preventDefault(), "onInteractOutside"),
        children: [/* @__PURE__ */ jsx23(Slottable, {
          children
        }), process.env.NODE_ENV === "development" && /* @__PURE__ */ jsx23(DescriptionWarning2, {
          contentRef
        })]
      })
    })
  });
});
var TITLE_NAME = "AlertDialogTitle";
var AlertDialogTitleFrame = styled13(View7, {
  name: TITLE_NAME
});
var AlertDialogTitle = AlertDialogTitleFrame.styleable(function(props, forwardedRef) {
  const {
    scope,
    ...titleProps
  } = props;
  return /* @__PURE__ */ jsx23(DialogTitle, {
    scope: getAlertDialogScope(scope),
    ...titleProps,
    ref: forwardedRef
  });
});
var DESCRIPTION_NAME = "AlertDialogDescription";
var AlertDialogDescriptionFrame = styled13(View7, {
  name: DESCRIPTION_NAME
});
var AlertDialogDescription = AlertDialogDescriptionFrame.styleable(function(props, forwardedRef) {
  const {
    scope,
    ...descriptionProps
  } = props;
  return /* @__PURE__ */ jsx23(DialogDescription, {
    scope: getAlertDialogScope(scope),
    ...descriptionProps,
    ref: forwardedRef
  });
});
var ACTION_NAME = "AlertDialogAction";
var AlertDialogActionFrame = styled13(View7, {
  name: ACTION_NAME
});
var AlertDialogAction = AlertDialogActionFrame.styleable(function(props, forwardedRef) {
  const {
    scope,
    ...actionProps
  } = props;
  return /* @__PURE__ */ jsx23(DialogClose, {
    scope: getAlertDialogScope(scope),
    ...actionProps,
    ref: forwardedRef
  });
});
var CANCEL_NAME = "AlertDialogCancel";
var AlertDialogCancelFrame = styled13(View7, {
  name: CANCEL_NAME
});
var AlertDialogCancel = AlertDialogCancelFrame.styleable(function(props, forwardedRef) {
  const {
    scope,
    ...cancelProps
  } = props, {
    cancelRef
  } = useAlertDialogContentContext(scope), ref = useComposedRefs(forwardedRef, cancelRef);
  return /* @__PURE__ */ jsx23(DialogClose, {
    scope: getAlertDialogScope(scope),
    ...cancelProps,
    ref
  });
});
var DESTRUCTIVE_NAME = "AlertDialogDestructive";
var AlertDialogDestructiveFrame = styled13(View7, {
  name: DESTRUCTIVE_NAME
});
var AlertDialogDestructive = AlertDialogDestructiveFrame.styleable(function(props, forwardedRef) {
  const {
    scope,
    ...destructiveProps
  } = props, {
    destructiveRef
  } = useAlertDialogContentContext(scope), ref = useComposedRefs(forwardedRef, destructiveRef);
  return /* @__PURE__ */ jsx23(DialogClose, {
    scope: getAlertDialogScope(scope),
    ...destructiveProps,
    ref
  });
});
var DescriptionWarning2 = /* @__PURE__ */ __name(({
  contentRef
}) => (process.env.NODE_ENV === "development" && React29.useEffect(() => {
  if (!isWeb) return;
  document.getElementById(
    // @ts-ignore
    contentRef.current?.getAttribute("aria-describedby")
  ) || console.warn(`\`${CONTENT_NAME3}\` requires a description for the component to be accessible for screen reader users.
  
        You can add a description to the \`${CONTENT_NAME3}\` by passing a \`${DESCRIPTION_NAME}\` component as a child, which also benefits sighted users by adding visible context to the dialog.
        
        Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${CONTENT_NAME3}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.
        
        For more information, see https://tamagui.dev/docs/components/alert-dialog`);
}, [contentRef]), null), "DescriptionWarning");
var AlertDialogInner = /* @__PURE__ */ __name((props) => {
  const {
    scope,
    native,
    ...alertDialogProps
  } = props, dialogScope = getAlertDialogScope(scope);
  return /* @__PURE__ */ jsx23(Dialog, {
    scope: dialogScope,
    ...alertDialogProps,
    modal: true
  });
}, "AlertDialogInner");
var AlertDialog = withStaticProperties(AlertDialogInner, {
  Trigger: AlertDialogTrigger,
  Portal: AlertDialogPortal,
  Overlay: AlertDialogOverlay,
  Content: AlertDialogContent,
  Action: AlertDialogAction,
  Cancel: AlertDialogCancel,
  Destructive: AlertDialogDestructive,
  Title: AlertDialogTitle,
  Description: AlertDialogDescription
});
AlertDialog.displayName = ROOT_NAME;

// node_modules/@tamagui/avatar/dist/esm/Avatar.mjs
import { getTokens as getTokens3, getVariableValue as getVariableValue2, styled as styled18 } from "@tamagui/core";

// node_modules/@tamagui/image/dist/esm/Image.mjs
import { View as View8, styled as styled14 } from "@tamagui/web";
import { jsx as jsx24 } from "react/jsx-runtime";
var StyledImage = styled14(View8, {
  name: "Image",
  render: "img"
});
var Image = StyledImage.styleable((inProps, ref) => {
  const {
    // exclude native only props
    blurRadius,
    capInsets,
    defaultSource,
    fadeDuration,
    loadingIndicatorSource,
    onLoadEnd,
    onPartialLoad,
    progressiveRenderingEnabled,
    resizeMethod,
    tintColor,
    ...rest
  } = inProps;
  return /* @__PURE__ */ jsx24(StyledImage, {
    ref,
    ...rest
  });
}, {
  staticConfig: {
    memo: true
  }
});
var func = /* @__PURE__ */ __name(() => {
}, "func");
Image.getSize = func;
Image.getSizeWithHeaders = func;
Image.prefetch = func;
Image.prefetchWithMetadata = func;
Image.abortPrefetch = func;
Image.queryCache = func;

// node_modules/@tamagui/image/dist/esm/createImage.mjs
import { getTokenValue as getTokenValue2, styled as styled15 } from "@tamagui/web";
import { jsx as jsx25 } from "react/jsx-runtime";
var defaultObjectFitMap = /* @__PURE__ */ __name((objectFit) => {
  switch (objectFit) {
    case "fill":
      return "stretch";
    case "none":
      return "center";
    case "scale-down":
      return "contain";
    case "contain":
      return "contain";
    default:
      return "cover";
  }
}, "defaultObjectFitMap");
var defaultTransformSource = /* @__PURE__ */ __name((props) => {
  const {
    src,
    source,
    width,
    height
  } = props;
  return source || (src && typeof src != "string" ? src : {
    uri: src,
    width,
    height
  });
}, "defaultTransformSource");
function createImage(options) {
  const {
    Component,
    mapObjectFitToResizeMode = defaultObjectFitMap,
    resizeModePropName = "resizeMode",
    objectPositionPropName,
    transformSource = defaultTransformSource
  } = options, ImageComponent = styled15(Component, {
    name: "Image"
  }, {
    inlineProps: /* @__PURE__ */ new Set(["source", "placeholder", "transition", "contentFit", "contentPosition", "cachePolicy", "recyclingKey", "allowDownscaling", "autoplay", "blurRadius", "priority", "placeholderContentFit", "responsivePolicy", "onLoadStart", "onProgress", "onLoadEnd"])
  }).styleable((incomingProps, ref) => {
    const props = incomingProps, {
      src,
      width,
      height,
      objectFit,
      objectPosition,
      // web only props - filter out on native
      decoding,
      elementTiming,
      fetchpriority,
      isMap,
      loading,
      sizes,
      useMap,
      onLoad,
      onError,
      ...rest
    } = props, resolvedWidth = typeof width == "string" && width[0] === "$" ? getTokenValue2(width) : width, resolvedHeight = typeof height == "string" && height[0] === "$" ? getTokenValue2(height) : height, finalSource = transformSource({
      src,
      width: resolvedWidth,
      height: resolvedHeight
    }), incomingStyle = Array.isArray(rest.style) ? Object.assign({}, ...rest.style.flat()) : rest.style, finalProps = {
      ...rest,
      source: finalSource,
      style: {
        ...incomingStyle,
        ...resolvedWidth !== void 0 && {
          width: resolvedWidth
        },
        ...resolvedHeight !== void 0 && {
          height: resolvedHeight
        }
      }
    };
    return objectFit && (finalProps[resizeModePropName] = mapObjectFitToResizeMode(objectFit)), objectPositionPropName && objectPosition && (finalProps[objectPositionPropName] = objectPosition), onLoad && (finalProps.onLoad = (e) => {
      const source = e?.nativeEvent?.source || e?.source || {};
      onLoad({
        target: {
          naturalHeight: source?.height,
          naturalWidth: source?.width
        },
        type: "load"
      });
    }), onError && (finalProps.onError = () => {
      onError({
        type: "error"
      });
    }), /* @__PURE__ */ jsx25(Component, {
      ref,
      ...finalProps
    });
  }), comp = Component;
  return ImageComponent.getSize = comp.getSize || (() => {
  }), ImageComponent.getSizeWithHeaders = comp.getSizeWithHeaders || (() => {
  }), ImageComponent.prefetch = comp.prefetch || (() => {
  }), ImageComponent.prefetchWithMetadata = comp.prefetchWithMetadata || (() => {
  }), ImageComponent.abortPrefetch = comp.abortPrefetch || (() => {
  }), ImageComponent.queryCache = comp.queryCache || (() => {
  }), ImageComponent;
}
__name(createImage, "createImage");

// node_modules/@tamagui/shapes/dist/esm/Square.mjs
import { styled as styled16 } from "@tamagui/web";

// node_modules/@tamagui/shapes/dist/esm/getShapeSize.mjs
var getShapeSize = /* @__PURE__ */ __name((size4, {
  tokens
}) => {
  const width = tokens.size[size4] ?? size4, height = tokens.size[size4] ?? size4;
  return {
    width,
    height,
    minWidth: width,
    maxWidth: width,
    maxHeight: height,
    minHeight: height
  };
}, "getShapeSize");

// node_modules/@tamagui/shapes/dist/esm/Square.mjs
var Square = styled16(ThemeableStack, {
  name: "Square",
  alignItems: "center",
  justifyContent: "center",
  variants: {
    size: {
      "...size": getShapeSize,
      ":number": getShapeSize
    }
  }
}, {
  memo: true
});

// node_modules/@tamagui/shapes/dist/esm/Circle.mjs
import { styled as styled17 } from "@tamagui/web";
var Circle = styled17(Square, {
  name: "Circle",
  borderRadius: 1e8
});

// node_modules/@tamagui/avatar/dist/esm/Avatar.mjs
import * as React30 from "react";
import { jsx as jsx26 } from "react/jsx-runtime";
var AVATAR_NAME = "Avatar";
var [createAvatarContext, createAvatarScope] = createContextScope(AVATAR_NAME);
var [AvatarProvider, useAvatarContext] = createAvatarContext(AVATAR_NAME);
var IMAGE_NAME = "AvatarImage";
var AvatarImage = React30.forwardRef((props, forwardedRef) => {
  const {
    __scopeAvatar,
    src,
    source,
    onLoadingStatusChange = /* @__PURE__ */ __name(() => {
    }, "onLoadingStatusChange"),
    ...imageProps
  } = props, context4 = useAvatarContext(IMAGE_NAME, __scopeAvatar), [status, setStatus] = React30.useState("idle"), shapeSize = getVariableValue2(getShapeSize(
    context4.size,
    // @ts-expect-error
    {
      tokens: getTokens3()
    }
  )?.width), resolvedSrc = src || (source && typeof source == "object" && "uri" in source ? source.uri : source);
  return React30.useEffect(() => {
    setStatus(resolvedSrc ? "idle" : "error");
  }, [resolvedSrc]), React30.useEffect(() => {
    onLoadingStatusChange(status), context4.onImageLoadingStatusChange(status);
  }, [status]), resolvedSrc ? /* @__PURE__ */ jsx26(YStack, {
    fullscreen: true,
    zIndex: 1,
    children: /* @__PURE__ */ jsx26(Image, {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      objectFit: "cover",
      ...typeof shapeSize == "number" && !Number.isNaN(shapeSize) && {
        width: shapeSize,
        height: shapeSize
      },
      ...imageProps,
      ref: forwardedRef,
      src: resolvedSrc,
      onError: /* @__PURE__ */ __name(() => {
        setStatus("error");
      }, "onError"),
      onLoad: /* @__PURE__ */ __name(() => {
        setStatus("loaded");
      }, "onLoad")
    })
  }) : null;
});
AvatarImage.displayName = IMAGE_NAME;
var FALLBACK_NAME = "AvatarFallback";
var AvatarFallbackFrame = styled18(YStack, {
  name: FALLBACK_NAME,
  position: "absolute",
  fullscreen: true,
  zIndex: 0
});
var AvatarFallback = AvatarFallbackFrame.styleable((props, forwardedRef) => {
  const {
    __scopeAvatar,
    delayMs,
    ...fallbackProps
  } = props, context4 = useAvatarContext(FALLBACK_NAME, __scopeAvatar), [canRender, setCanRender] = React30.useState(delayMs === void 0);
  return React30.useEffect(() => {
    if (delayMs !== void 0) {
      const timerId = setTimeout(() => setCanRender(true), delayMs);
      return () => clearTimeout(timerId);
    }
  }, [delayMs]), canRender && context4.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ jsx26(AvatarFallbackFrame, {
    ...fallbackProps,
    ref: forwardedRef
  }) : null;
});
AvatarFallback.displayName = FALLBACK_NAME;
var AvatarFrame = styled18(Square, {
  name: AVATAR_NAME,
  position: "relative",
  overflow: "hidden"
});
var Avatar = withStaticProperties(React30.forwardRef((props, forwardedRef) => {
  const {
    __scopeAvatar,
    size: size4 = "$true",
    ...avatarProps
  } = props, [imageLoadingStatus, setImageLoadingStatus] = React30.useState("idle");
  return /* @__PURE__ */ jsx26(AvatarProvider, {
    size: size4,
    scope: __scopeAvatar,
    imageLoadingStatus,
    onImageLoadingStatusChange: setImageLoadingStatus,
    children: /* @__PURE__ */ jsx26(AvatarFrame, {
      size: size4,
      ...avatarProps,
      ref: forwardedRef
    })
  });
}), {
  Image: AvatarImage,
  Fallback: AvatarFallback
});
Avatar.displayName = AVATAR_NAME;

// node_modules/@tamagui/font-size/dist/esm/getFontSize.mjs
import { getConfig, isVariable as isVariable3 } from "@tamagui/core";
var getFontSize = /* @__PURE__ */ __name((inSize, opts) => {
  const res = getFontSizeVariable(inSize, opts);
  return isVariable3(res) ? +res.val : res ? +res : 16;
}, "getFontSize");
var getFontSizeVariable = /* @__PURE__ */ __name((inSize, opts) => {
  const token = getFontSizeToken(inSize, opts);
  if (!token) return inSize;
  const conf = getConfig();
  return conf.fontsParsed[opts?.font || conf.defaultFontToken]?.size[token];
}, "getFontSizeVariable");
var getFontSizeToken = /* @__PURE__ */ __name((inSize, opts) => {
  if (typeof inSize == "number") return null;
  const relativeSize = opts?.relativeSize || 0, conf = getConfig(), fontSize = conf.fontsParsed[opts?.font || conf.defaultFontToken]?.size || // fallback to size tokens
  conf.tokensParsed.size, size4 = (inSize === "$true" && !("$true" in fontSize) ? "$4" : inSize) ?? ("$true" in fontSize ? "$true" : "$4"), sizeTokens = Object.keys(fontSize);
  let foundIndex = sizeTokens.indexOf(size4);
  foundIndex === -1 && size4.endsWith(".5") && (foundIndex = sizeTokens.indexOf(size4.replace(".5", ""))), process.env.NODE_ENV === "development" && foundIndex === -1 && console.warn("No font size found", size4, opts, "in size tokens", sizeTokens);
  const tokenIndex = Math.min(Math.max(0, foundIndex + relativeSize), sizeTokens.length - 1);
  return sizeTokens[tokenIndex] ?? size4;
}, "getFontSizeToken");

// node_modules/@tamagui/helpers-tamagui/dist/esm/prevent.mjs
var prevent = /* @__PURE__ */ __name((e) => [e.preventDefault(), e.stopPropagation()], "prevent");

// node_modules/@tamagui/helpers-tamagui/dist/esm/useCurrentColor.mjs
import { getVariable, useTheme } from "@tamagui/web";
var useCurrentColor = /* @__PURE__ */ __name((colorProp) => {
  const theme = useTheme();
  return colorProp ? getVariable(colorProp) : theme[colorProp]?.get() || theme.color?.get();
}, "useCurrentColor");

// node_modules/@tamagui/helpers-tamagui/dist/esm/useGetThemedIcon.mjs
import React31 from "react";
var useGetThemedIcon = /* @__PURE__ */ __name((props) => {
  const color = useCurrentColor(props.color);
  return (el) => el && (React31.isValidElement(el) ? React31.cloneElement(el, {
    ...props,
    color,
    // @ts-expect-error
    ...el.props
  }) : React31.createElement(el, props));
}, "useGetThemedIcon");

// node_modules/@tamagui/helpers-tamagui/dist/esm/getIcon.mjs
import React32 from "react";
var getIcon = /* @__PURE__ */ __name((el, props) => el && (React32.isValidElement(el) ? React32.cloneElement(el, {
  ...props,
  // @ts-expect-error
  ...el.props
}) : React32.createElement(el, props)), "getIcon");

// node_modules/@tamagui/button/dist/esm/Button.mjs
import { createStyledContext as createStyledContext7, getTokenValue as getTokenValue3, styled as styled19, useProps, View as View9, withStaticProperties as withStaticProperties2 } from "@tamagui/web";
import { useContext as useContext12 } from "react";
import { jsx as jsx27, jsxs as jsxs4 } from "react/jsx-runtime";
var context = createStyledContext7({
  size: void 0,
  variant: void 0,
  color: void 0,
  elevation: void 0
});
var Frame = styled19(View9, {
  context,
  name: "Button",
  role: "button",
  render: /* @__PURE__ */ jsx27("button", {
    type: "button"
  }),
  tabIndex: 0,
  variants: {
    unstyled: {
      false: {
        size: "$true",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexDirection: "row",
        cursor: "pointer",
        backgroundColor: "$background",
        borderWidth: 1,
        borderColor: "transparent",
        hoverStyle: {
          backgroundColor: "$backgroundHover",
          borderColor: "$borderColorHover"
        },
        pressStyle: {
          backgroundColor: "$backgroundPress",
          borderColor: "$borderColorHover"
        },
        focusVisibleStyle: {
          outlineColor: "$outlineColor",
          outlineStyle: "solid",
          outlineWidth: 2
        }
      }
    },
    variant: {
      outlined: process.env.TAMAGUI_HEADLESS === "1" ? {} : {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "$borderColor",
        hoverStyle: {
          backgroundColor: "transparent",
          borderColor: "$borderColorHover"
        },
        pressStyle: {
          backgroundColor: "transparent",
          borderColor: "$borderColorPress"
        }
      }
    },
    circular: themeableVariants.circular,
    chromeless: themeableVariants.chromeless,
    size: {
      "...size": /* @__PURE__ */ __name((val, extras) => {
        const buttonStyle = getButtonSized(val, extras), gap = getTokenValue3(val);
        return {
          ...buttonStyle,
          gap
        };
      }, "...size"),
      ":number": /* @__PURE__ */ __name((val, extras) => {
        const buttonStyle = getButtonSized(val, extras), gap = val * 0.4;
        return {
          ...buttonStyle,
          gap
        };
      }, ":number")
    },
    elevation: {
      "...size": getElevation,
      ":number": getElevation
    },
    disabled: {
      true: {
        pointerEvents: "none",
        // @ts-ignore
        "aria-disabled": true
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var Text4 = styled19(SizableText2, {
  context,
  variants: {
    unstyled: {
      false: {
        userSelect: "none",
        cursor: "pointer",
        // flexGrow 1 leads to inconsistent native style where text pushes to start of view
        flexGrow: 0,
        flexShrink: 1,
        ellipsis: true,
        color: "$color"
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var Icon = /* @__PURE__ */ __name((props) => {
  const {
    children,
    scaleIcon = 1,
    size: size4
  } = props, styledContext = context.useStyledContext();
  if (!styledContext) throw new Error("Button.Icon must be used within a Button");
  const sizeToken = size4 ?? styledContext.size, iconColor = useCurrentColor(styledContext.color), iconSize = (typeof sizeToken == "number" ? sizeToken * 0.5 : getFontSize(sizeToken)) * scaleIcon;
  return getIcon(children, {
    size: iconSize,
    color: iconColor
  });
}, "Icon");
var ButtonContext = createStyledContext7({
  size: void 0,
  variant: void 0,
  color: void 0
});
var ButtonComponent = Frame.styleable((propsIn, ref) => {
  const isNested = useContext12(ButtonNestingContext), processedProps = useProps(propsIn, {
    noNormalize: true,
    noExpand: true
  }), {
    children,
    iconSize,
    icon,
    iconAfter,
    scaleIcon = 1,
    ...props
  } = processedProps, size4 = propsIn.size || (propsIn.unstyled ? void 0 : "$true"), styledContext = context.useStyledContext(), iconColor = useCurrentColor(styledContext?.color), finalSize = iconSize ?? size4 ?? styledContext?.size, iconSizeNumber = (typeof finalSize == "number" ? finalSize * 0.5 : getFontSize(finalSize)) * scaleIcon, [themedIcon, themedIconAfter] = [icon, iconAfter].map((icon2) => icon2 ? getIcon(icon2, {
    size: iconSizeNumber,
    color: iconColor
    // No marginLeft or marginRight needed - spacing is handled by the gap property in Frame's size variants
  }) : null), wrappedChildren = wrapChildrenInText(Text4, {
    children
  }, {
    unstyled: process.env.TAMAGUI_HEADLESS === "1",
    size: finalSize ?? styledContext?.size
  });
  return /* @__PURE__ */ jsx27(ButtonNestingContext.Provider, {
    value: true,
    children: /* @__PURE__ */ jsxs4(Frame, {
      ref,
      ...props,
      ...isNested && {
        render: "span"
      },
      ...props.circular && !propsIn.size && {
        size: size4
      },
      tabIndex: 0,
      children: [themedIcon, wrappedChildren, themedIconAfter]
    })
  });
});
var Button = withStaticProperties2(ButtonComponent, {
  Apply: context.Provider,
  Frame,
  Text: Text4,
  Icon
});

// node_modules/@tamagui/card/dist/esm/Card.mjs
import { createStyledContext as createStyledContext8, styled as styled20, withStaticProperties as withStaticProperties3 } from "@tamagui/web";
var CardContext = createStyledContext8({
  size: "$true"
});
var CardFrame = styled20(YStack, {
  name: "Card",
  context: CardContext,
  variants: {
    unstyled: {
      false: {
        size: "$true",
        backgroundColor: "$background",
        position: "relative"
      }
    },
    size: {
      "...size": /* @__PURE__ */ __name((val, {
        tokens
      }) => ({
        borderRadius: tokens.radius[val] ?? val
      }), "...size")
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var CardHeader = styled20(YStack, {
  name: "CardHeader",
  context: CardContext,
  variants: {
    unstyled: {
      false: {
        zIndex: 10,
        backgroundColor: "transparent",
        marginBottom: "auto"
      }
    },
    size: {
      "...size": /* @__PURE__ */ __name((val, {
        tokens
      }) => ({
        padding: tokens.space[val] ?? val
      }), "...size")
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var CardFooter = styled20(CardHeader, {
  name: "CardFooter",
  variants: {
    unstyled: {
      false: {
        zIndex: 5,
        flexDirection: "row",
        marginTop: "auto",
        marginBottom: 0
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var CardBackground = styled20(YStack, {
  name: "CardBackground",
  variants: {
    unstyled: {
      false: {
        zIndex: 0,
        fullscreen: true,
        overflow: "hidden",
        pointerEvents: "none",
        padding: 0
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var Card = withStaticProperties3(CardFrame, {
  Header: CardHeader,
  Footer: CardFooter,
  Background: CardBackground
});

// node_modules/@tamagui/checkbox/dist/esm/Checkbox.mjs
import { getVariableValue as getVariableValue3, styled as styled21 } from "@tamagui/core";

// node_modules/@tamagui/checkbox/dist/esm/CheckboxStyledContext.mjs
import { createStyledContext as createStyledContext9 } from "@tamagui/core";
var CheckboxStyledContext = createStyledContext9({
  size: "$true",
  scaleIcon: 1,
  unstyled: process.env.TAMAGUI_HEADLESS === "1",
  active: false,
  disabled: false
});

// node_modules/@tamagui/checkbox/dist/esm/Checkbox.mjs
var INDICATOR_NAME = "CheckboxIndicator";
var CheckboxIndicatorFrame = styled21(YStack, {
  // use Checkbox for easier themes
  name: INDICATOR_NAME,
  context: CheckboxStyledContext,
  variants: {
    unstyled: {
      false: {}
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
}, {
  accept: {
    activeStyle: "style"
  }
});
var CHECKBOX_NAME = "Checkbox";
var CheckboxFrame = styled21(YStack, {
  name: CHECKBOX_NAME,
  render: "button",
  context: CheckboxStyledContext,
  variants: {
    unstyled: {
      false: {
        size: "$true",
        backgroundColor: "$background",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "$borderColor",
        hoverStyle: {
          borderColor: "$borderColorHover"
        },
        pressStyle: {
          backgroundColor: "$backgroundPress",
          borderColor: "$borderColorPress"
        },
        focusStyle: {
          borderColor: "$borderColorFocus"
        },
        focusVisibleStyle: {
          outlineStyle: "solid",
          outlineWidth: 2,
          outlineColor: "$outlineColor"
        }
      }
    },
    disabled: {
      true: {
        pointerEvents: "none",
        userSelect: "none",
        cursor: "not-allowed",
        hoverStyle: {
          borderColor: "$borderColor",
          backgroundColor: "$background"
        },
        pressStyle: {
          borderColor: "$borderColor",
          backgroundColor: "$background"
        },
        focusStyle: {
          outlineWidth: 0
        }
      }
    },
    size: {
      "...size": /* @__PURE__ */ __name((val) => ({
        borderRadius: getVariableValue3(getSize(val)) / 8
      }), "...size")
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
}, {
  accept: {
    activeStyle: "style"
  }
});

// node_modules/@tamagui/focusable/dist/esm/registerFocusable.mjs
var registerFocusable = /* @__PURE__ */ __name((id, input) => () => {
}, "registerFocusable");
var focusFocusable = /* @__PURE__ */ __name((id) => {
}, "focusFocusable");

// node_modules/@tamagui/label/dist/esm/Label.mjs
import { styled as styled22 } from "@tamagui/web";
import * as React33 from "react";
import { jsx as jsx28 } from "react/jsx-runtime";
var NAME = "Label";
var [LabelProvider, useLabelContextImpl] = createContext8(NAME, {
  id: void 0,
  controlRef: {
    current: null
  }
});
var LabelFrame = styled22(SizableText2, {
  name: "Label",
  render: "label",
  variants: {
    unstyled: {
      false: {
        size: "$true",
        color: "$color",
        backgroundColor: "transparent",
        display: "flex",
        alignItems: "center",
        userSelect: "none",
        cursor: "default",
        pressStyle: {
          color: "$colorPress"
        }
      }
    },
    size: {
      "...size": /* @__PURE__ */ __name((val, extras) => {
        const buttonHeight = getButtonSized(val, extras)?.height;
        return {
          ...getFontSized(val, extras),
          lineHeight: buttonHeight ? extras.tokens.size[buttonHeight] : void 0
        };
      }, "...size")
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var Label = LabelFrame.styleable(function(props, forwardedRef) {
  const {
    htmlFor,
    id: idProp,
    ...labelProps
  } = props, controlRef = React33.useRef(null), ref = React33.useRef(null), composedRefs = useComposedRefs(forwardedRef, ref), backupId = React33.useId(), id = idProp ?? backupId;
  return isWeb && React33.useEffect(() => {
    if (htmlFor) {
      const element = document.getElementById(htmlFor);
      if (ref.current && element) {
        const getAriaLabel = /* @__PURE__ */ __name(() => element.getAttribute("aria-labelledby"), "getAriaLabel"), ariaLabelledBy = [id, getAriaLabel()].filter(Boolean).join(" ");
        return element.setAttribute("aria-labelledby", ariaLabelledBy), controlRef.current = element, () => {
          if (!id) return;
          const ariaLabelledBy2 = getAriaLabel()?.replace(id, "");
          ariaLabelledBy2 === "" ? element.removeAttribute("aria-labelledby") : ariaLabelledBy2 && element.setAttribute("aria-labelledby", ariaLabelledBy2);
        };
      }
    }
  }, [id, htmlFor]), /* @__PURE__ */ jsx28(LabelProvider, {
    id,
    controlRef,
    children: /* @__PURE__ */ jsx28(LabelFrame, {
      id,
      htmlFor,
      ...labelProps,
      ref: composedRefs,
      onMouseDown: /* @__PURE__ */ __name((event) => {
        props.onMouseDown?.(event), !event.defaultPrevented && event.detail > 1 && event.preventDefault();
      }, "onMouseDown"),
      onPress: /* @__PURE__ */ __name((event) => {
        if (props.onPress?.(event), isWeb) {
          if (htmlFor || !controlRef.current || event.defaultPrevented) return;
          const isClickingControl = controlRef.current.contains(event.target), isUserClick = event.isTrusted === true;
          !isClickingControl && isUserClick && (controlRef.current.click(), controlRef.current.focus());
        } else props.htmlFor && focusFocusable(props.htmlFor);
      }, "onPress")
    })
  });
});
var useLabelContext = /* @__PURE__ */ __name((element) => {
  const context4 = useLabelContextImpl("LabelConsumer"), {
    controlRef
  } = context4;
  return React33.useEffect(() => {
    element && (controlRef.current = element);
  }, [element, controlRef]), context4.id;
}, "useLabelContext");

// node_modules/@tamagui/checkbox-headless/dist/esm/useCheckbox.mjs
import React36, { useMemo as useMemo11 } from "react";

// node_modules/@tamagui/use-previous/dist/esm/index.mjs
import * as React34 from "react";
function usePrevious(value) {
  const ref = React34.useRef({
    value,
    previous: value
  });
  return React34.useMemo(() => (ref.current.value !== value && (ref.current.previous = ref.current.value, ref.current.value = value), ref.current.previous), [value]);
}
__name(usePrevious, "usePrevious");

// node_modules/@tamagui/checkbox-headless/dist/esm/BubbleInput.mjs
import * as React35 from "react";

// node_modules/@tamagui/checkbox-headless/dist/esm/utils.mjs
function isIndeterminate(checked) {
  return checked === "indeterminate";
}
__name(isIndeterminate, "isIndeterminate");
function getState4(checked) {
  return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
__name(getState4, "getState");

// node_modules/@tamagui/checkbox-headless/dist/esm/BubbleInput.mjs
import { jsx as jsx29 } from "react/jsx-runtime";
var BubbleInput = /* @__PURE__ */ __name((props) => {
  const {
    checked,
    bubbles = true,
    control,
    isHidden: isHidden2,
    ...inputProps
  } = props, ref = React35.useRef(null), prevChecked = usePrevious(checked);
  return React35.useEffect(() => {
    const input = ref.current, inputProto = window.HTMLInputElement.prototype, setChecked = Object.getOwnPropertyDescriptor(inputProto, "checked").set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", {
        bubbles
      });
      input.indeterminate = isIndeterminate(checked), setChecked.call(input, isIndeterminate(checked) ? false : checked), input.dispatchEvent(event);
    }
  }, [prevChecked, checked, bubbles]), /* @__PURE__ */ jsx29("input", {
    type: "checkbox",
    defaultChecked: isIndeterminate(checked) ? false : checked,
    ...inputProps,
    tabIndex: -1,
    ref,
    "aria-hidden": isHidden2,
    style: {
      ...isHidden2 ? {
        // ...controlSize,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      } : {
        appearance: "auto",
        accentColor: "var(--color6)"
      },
      ...props.style
    }
  });
}, "BubbleInput");

// node_modules/@tamagui/checkbox-headless/dist/esm/useCheckbox.mjs
import { jsx as jsx30 } from "react/jsx-runtime";
function useCheckbox(props, [checked, setChecked], ref) {
  const {
    labelledBy: ariaLabelledby,
    name,
    required,
    disabled,
    value = "on",
    onCheckedChange,
    ...checkboxProps
  } = props, [button, setButton] = React36.useState(null), composedRefs = useComposedRefs(ref, setButton), hasConsumerStoppedPropagationRef = React36.useRef(false), isFormControl = isWeb ? button ? !!button.closest("form") : true : false, labelId = useLabelContext(button), labelledBy = ariaLabelledby || labelId, parentKeyDown = props.onKeyDown, handleKeyDown = useMemo11(() => composeEventHandlers(parentKeyDown, (event) => {
    event.key === "Enter" && event.preventDefault();
  }), [parentKeyDown]), handlePress = useMemo11(() => composeEventHandlers(props.onPress, (event) => {
    setChecked((prevChecked) => isIndeterminate(prevChecked) ? true : !prevChecked), isFormControl && "isPropagationStopped" in event && (hasConsumerStoppedPropagationRef.current = event.isPropagationStopped(), hasConsumerStoppedPropagationRef.current || event.stopPropagation());
  }), [isFormControl]);
  return {
    bubbleInput: isWeb && isFormControl ? /* @__PURE__ */ jsx30(BubbleInput, {
      isHidden: true,
      control: button,
      bubbles: !hasConsumerStoppedPropagationRef.current,
      name,
      value,
      checked,
      required,
      disabled
    }) : null,
    checkboxRef: composedRefs,
    checkboxProps: {
      role: "checkbox",
      "aria-labelledby": labelledBy,
      "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
      ...checkboxProps,
      ...isWeb && {
        type: "button",
        value,
        "data-state": getState4(checked),
        "data-disabled": disabled ? "" : void 0,
        disabled,
        onKeyDown: disabled ? void 0 : handleKeyDown
      },
      onPress: disabled ? void 0 : handlePress
    }
  };
}
__name(useCheckbox, "useCheckbox");

// node_modules/@tamagui/checkbox/dist/esm/createCheckbox.mjs
import { getVariableValue as getVariableValue4, isWeb as isWeb2, shouldRenderNativePlatform as shouldRenderNativePlatform2, useProps as useProps2, useTheme as useTheme2, withStaticProperties as withStaticProperties4 } from "@tamagui/core";
import React37, { useMemo as useMemo12 } from "react";
import { jsx as jsx31, jsxs as jsxs5 } from "react/jsx-runtime";
var CheckboxContext = React37.createContext({
  checked: false,
  disabled: false
});
var ensureContext = /* @__PURE__ */ __name((x) => {
  x.context || (x.context = CheckboxContext);
}, "ensureContext");
function createCheckbox(createProps) {
  const {
    Frame: Frame3 = CheckboxFrame,
    Indicator = CheckboxIndicatorFrame
  } = createProps;
  ensureContext(Frame3), ensureContext(Indicator);
  const FrameComponent = Frame3.styleable(function(_props, forwardedRef) {
    const {
      scaleSize = 0.45,
      sizeAdjust = 0,
      scaleIcon,
      checked: checkedProp,
      defaultChecked,
      onCheckedChange,
      native,
      unstyled = false,
      activeStyle,
      activeTheme,
      ...props
    } = _props, propsActive = useProps2(props), styledContext = React37.useContext(CheckboxStyledContext.context);
    let adjustedSize = 0, size4 = 0;
    unstyled || (adjustedSize = getVariableValue4(getSize(propsActive.size ?? styledContext?.size ?? "$true", {
      shift: sizeAdjust
    })), size4 = scaleSize ? Math.round(adjustedSize * scaleSize) : adjustedSize);
    const [checked = false, setChecked] = useControllableState({
      prop: checkedProp,
      defaultProp: defaultChecked,
      onChange: onCheckedChange
    }), {
      checkboxProps,
      checkboxRef,
      bubbleInput
    } = useCheckbox(
      // @ts-ignore
      propsActive,
      [checked, setChecked],
      forwardedRef
    );
    if (shouldRenderNativePlatform2(native) === "web") return /* @__PURE__ */ jsx31("input", {
      type: "checkbox",
      defaultChecked: isIndeterminate(checked) ? false : checked,
      tabIndex: -1,
      ref: checkboxRef,
      disabled: checkboxProps.disabled,
      style: {
        appearance: "auto",
        accentColor: "var(--color6)",
        ...checkboxProps.style
      }
    });
    const memoizedContext = useMemo12(() => ({
      checked,
      disabled: checkboxProps.disabled
    }), [checked, checkboxProps.disabled]), isActive = !!checked, disabled = checkboxProps.disabled;
    return /* @__PURE__ */ jsx31(CheckboxContext.Provider, {
      value: memoizedContext,
      children: /* @__PURE__ */ jsxs5(CheckboxStyledContext.Provider, {
        size: propsActive.size ?? styledContext?.size ?? "$true",
        scaleIcon: scaleIcon ?? styledContext?.scaleIcon ?? 1,
        unstyled,
        active: isActive,
        disabled,
        children: [/* @__PURE__ */ jsx31(Frame3, {
          render: "button",
          ref: checkboxRef,
          unstyled,
          theme: activeTheme ?? null,
          ...isWeb2 && {
            type: "button"
          },
          ...!unstyled && {
            width: size4,
            height: size4,
            size: size4
          },
          checked,
          disabled,
          ...checkboxProps,
          ...props,
          ...isActive && {
            ...!unstyled && !activeStyle && {
              backgroundColor: "$backgroundActive"
            },
            ...activeStyle
          },
          children: propsActive.children
        }), bubbleInput]
      })
    });
  }), IndicatorComponent = Indicator.styleable((props, forwardedRef) => {
    const {
      children: childrenProp,
      forceMount,
      disablePassStyles,
      unstyled = false,
      activeStyle,
      ...indicatorProps
    } = props, styledContext = CheckboxStyledContext.useStyledContext(), {
      active
    } = styledContext;
    let children = childrenProp;
    if (!unstyled) {
      const iconSize = (typeof styledContext.size == "number" ? styledContext.size * 0.65 : getFontSize(styledContext.size)) * styledContext.scaleIcon, theme = useTheme2(), getThemedIcon = useGetThemedIcon({
        size: iconSize,
        color: theme.color
      });
      children = React37.Children.toArray(childrenProp).map((child) => disablePassStyles || !React37.isValidElement(child) ? child : getThemedIcon(child));
    }
    const context4 = React37.useContext(CheckboxContext);
    return forceMount || isIndeterminate(context4.checked) || context4.checked === true ? /* @__PURE__ */ jsx31(Indicator, {
      pointerEvents: "none",
      ...indicatorProps,
      ...active && activeStyle,
      ref: forwardedRef,
      children
    }) : null;
  });
  return withStaticProperties4(FrameComponent, {
    Indicator: IndicatorComponent
  });
}
__name(createCheckbox, "createCheckbox");

// node_modules/@tamagui/checkbox/dist/esm/index.mjs
var Checkbox = createCheckbox({
  Frame: CheckboxFrame,
  Indicator: CheckboxIndicatorFrame
});

// node_modules/@tamagui/form/dist/esm/Form.mjs
import { View as View10, createStyledContext as createStyledContext10, styled as styled23 } from "@tamagui/core";
import { jsx as jsx32 } from "react/jsx-runtime";
var FORM_NAME = "Form";
var FormFrame = styled23(View10, {
  name: FORM_NAME,
  render: "form"
});
var FormContext = createStyledContext10({
  onSubmit: void 0
});
var {
  useStyledContext: useFormContext,
  Provider: FormProvider
} = FormContext;
var FormTriggerFrame = styled23(View10, {
  name: "FormTrigger"
});
var FormTrigger = FormTriggerFrame.styleable((props, forwardedRef) => {
  const {
    scope,
    children,
    onPress,
    ...triggerProps
  } = props, context4 = useFormContext(scope);
  return /* @__PURE__ */ jsx32(FormTriggerFrame, {
    role: "button",
    ...triggerProps,
    ref: forwardedRef,
    onPress: composeEventHandlers(onPress, context4.onSubmit),
    children
  });
});
var FormComponent = FormFrame.styleable(function({
  scope,
  onSubmit,
  ...props
}, ref) {
  return /* @__PURE__ */ jsx32(FormProvider, {
    scope,
    onSubmit,
    children: /* @__PURE__ */ jsx32(FormFrame, {
      ref,
      ...props,
      onSubmit: /* @__PURE__ */ __name((e) => {
        e.preventDefault(), onSubmit?.();
      }, "onSubmit")
    })
  });
});
var Form2 = withStaticProperties(FormComponent, {
  Trigger: FormTrigger
});

// node_modules/@tamagui/group/dist/esm/Group.mjs
import { mergeSlotStyleProps, styled as styled24 } from "@tamagui/core";
import React39 from "react";

// node_modules/@tamagui/group/dist/esm/useIndexedChildren.mjs
import * as React38 from "react";
import { jsx as jsx33 } from "react/jsx-runtime";
var MaxIndexContext = React38.createContext([]);
var IndexContext = React38.createContext(null);
function useIndex() {
  const maxIndexPath = React38.useContext(MaxIndexContext), indexPathString = React38.useContext(IndexContext);
  return React38.useMemo(() => {
    if (indexPathString === null) return null;
    const indexPath = parseIndexPath(indexPathString), maxIndex = maxIndexPath[maxIndexPath.length - 1], index2 = indexPath[indexPath.length - 1];
    return {
      maxIndex,
      maxIndexPath,
      index: index2,
      indexPath,
      indexPathString,
      isFirst: index2 === 0,
      isLast: index2 === maxIndex,
      isEven: index2 % 2 === 0,
      isOdd: Math.abs(index2 % 2) === 1
    };
  }, [maxIndexPath, indexPathString]);
}
__name(useIndex, "useIndex");
function useIndexedChildren(children) {
  const parentMaxIndexPath = React38.useContext(MaxIndexContext), indexPathString = React38.useContext(IndexContext), childrenCount = React38.Children.count(children), maxIndexPath = React38.useMemo(() => parentMaxIndexPath.concat(childrenCount - 1), [childrenCount]);
  return /* @__PURE__ */ jsx33(MaxIndexContext.Provider, {
    value: maxIndexPath,
    children: React38.Children.map(children, (child, index2) => React38.isValidElement(child) ? /* @__PURE__ */ jsx33(IndexContext.Provider, {
      value: indexPathString ? `${indexPathString}.${index2.toString()}` : index2.toString(),
      children: child
    }, child.key) : child)
  });
}
__name(useIndexedChildren, "useIndexedChildren");
function parseIndexPath(indexPathString) {
  return indexPathString.split(".").map((index2) => Number.parseInt(index2, 10));
}
__name(parseIndexPath, "parseIndexPath");

// node_modules/@tamagui/group/dist/esm/Group.mjs
import { jsx as jsx34 } from "react/jsx-runtime";
var GROUP_NAME = "Group";
var [createGroupContext, createGroupScope] = createContextScope(GROUP_NAME);
var [GroupProvider, useGroupContext] = createGroupContext(GROUP_NAME);
var GroupFrame = styled24(YStack, {
  name: "GroupFrame",
  variants: {
    unstyled: {
      false: {
        size: "$true"
      }
    },
    size: /* @__PURE__ */ __name((val, {
      tokens
    }) => ({
      borderRadius: tokens.radius[val] ?? val ?? tokens.radius.$true
    }), "size")
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
function createGroup(verticalDefault) {
  return withStaticProperties(GroupFrame.styleable((props, ref) => {
    const {
      __scopeGroup,
      children: childrenProp,
      orientation = verticalDefault ? "vertical" : "horizontal",
      disabled,
      ...restProps
    } = props, vertical = orientation === "vertical", indexedChildren = useIndexedChildren(React39.Children.toArray(childrenProp));
    return /* @__PURE__ */ jsx34(GroupProvider, {
      vertical,
      disabled,
      scope: __scopeGroup,
      children: /* @__PURE__ */ jsx34(GroupFrame, {
        ref,
        flexDirection: vertical ? "column" : "row",
        ...restProps,
        children: indexedChildren
      })
    });
  }), {
    Item: GroupItem
  });
}
__name(createGroup, "createGroup");
function GroupItem(props) {
  const {
    __scopeGroup,
    children,
    forcePlacement,
    ...forwardedProps
  } = props, context4 = useGroupContext("GroupItem", __scopeGroup), treeIndex = useIndex();
  if (!treeIndex) throw Error("<Group.Item/> should only be used within a <Group/>");
  if (!React39.isValidElement(children)) return children;
  const isFirst = forcePlacement === "first" || forcePlacement !== "last" && treeIndex.index === 0, isLast = forcePlacement === "last" || forcePlacement !== "first" && treeIndex.index === treeIndex.maxIndex, radiusStyles = getZeroedRadius(isFirst, isLast, context4.vertical), groupProps = {
    ...forwardedProps,
    ...radiusStyles
  };
  context4.disabled != null && (groupProps.disabled = children.props.disabled ?? context4.disabled);
  const mergedProps = mergeSlotStyleProps(groupProps, children.props);
  return React39.cloneElement(children, mergedProps);
}
__name(GroupItem, "GroupItem");
var useGroupItem = /* @__PURE__ */ __name((childrenProps, forcePlacement, __scopeGroup) => {
  const treeIndex = useIndex(), context4 = useGroupContext("GroupItem", __scopeGroup);
  if (!treeIndex) throw Error("useGroupItem should only be used within a <Group/>");
  const isFirst = forcePlacement === "first" || forcePlacement !== "last" && treeIndex.index === 0, isLast = forcePlacement === "last" || forcePlacement !== "first" && treeIndex.index === treeIndex.maxIndex, radiusStyles = getZeroedRadius(isFirst, isLast, context4.vertical);
  return {
    disabled: childrenProps.disabled ?? context4.disabled,
    ...radiusStyles
  };
}, "useGroupItem");
var Group = createGroup(true);
var YGroup = Group;
var XGroup = createGroup(false);
function getZeroedRadius(isFirst, isLast, vertical) {
  return vertical ? {
    ...isFirst ? null : {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0
    },
    ...isLast ? null : {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    }
  } : {
    ...isFirst ? null : {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0
    },
    ...isLast ? null : {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    }
  };
}
__name(getZeroedRadius, "getZeroedRadius");

// ../../node_modules/@tamagui/react-native-media-driver/dist/esm/createMedia.mjs
import { setupMatchMedia } from "@tamagui/web";

// ../../node_modules/@tamagui/react-native-media-driver/dist/esm/matchMedia.mjs
var matchMedia = globalThis.matchMedia;

// ../../node_modules/@tamagui/react-native-media-driver/dist/esm/createMedia.mjs
function createMedia(media) {
  return setupMatchMedia(matchMedia), media;
}
__name(createMedia, "createMedia");

// node_modules/@tamagui/elements/dist/esm/index.mjs
import { View as View11, styled as styled25 } from "@tamagui/core";
var Section = styled25(View11, {
  name: "Section",
  render: "section",
  flexDirection: "column",
  role: "region"
});
var Article = styled25(View11, {
  name: "Article",
  render: "article",
  flexDirection: "column"
});
var Main = styled25(View11, {
  name: "Main",
  render: "main",
  flexDirection: "column"
});
var Header = styled25(View11, {
  name: "Header",
  render: "header",
  role: "banner",
  flexDirection: "column"
});
var Aside = styled25(View11, {
  name: "Aside",
  render: "aside",
  flexDirection: "column"
  // accessibilityRole: 'complementary',
});
var Footer = styled25(View11, {
  name: "Footer",
  render: "footer",
  flexDirection: "column"
  // accessibilityRole: 'contentinfo',
});
var Nav = styled25(View11, {
  name: "Nav",
  render: "nav",
  flexDirection: "column"
  // accessibilityRole: 'navigation',
});

// node_modules/@tamagui/list-item/dist/esm/ListItem.mjs
import { createStyledContext as createStyledContext11, styled as styled26, View as View12 } from "@tamagui/web";
import { Fragment as Fragment8, jsx as jsx35, jsxs as jsxs6 } from "react/jsx-runtime";
var NAME2 = "ListItem";
var context2 = createStyledContext11({
  size: void 0,
  variant: void 0,
  color: void 0
});
var ListItemFrame = styled26(View12, {
  context: context2,
  name: NAME2,
  render: "li",
  role: "listitem",
  variants: {
    unstyled: {
      false: {
        size: "$true",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "nowrap",
        borderColor: "$borderColor",
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
        flexDirection: "row",
        backgroundColor: "$background",
        cursor: "default",
        hoverStyle: {
          backgroundColor: "$backgroundHover",
          borderColor: "$borderColorHover"
        },
        pressStyle: {
          backgroundColor: "$backgroundPress",
          borderColor: "$borderColorPress"
        }
      }
    },
    variant: {
      outlined: process.env.TAMAGUI_HEADLESS === "1" ? {} : {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "$borderColor",
        hoverStyle: {
          backgroundColor: "transparent",
          borderColor: "$borderColorHover"
        },
        pressStyle: {
          backgroundColor: "transparent",
          borderColor: "$borderColorPress"
        }
      }
    },
    size: {
      "...size": /* @__PURE__ */ __name((val, {
        tokens
      }) => ({
        minHeight: tokens.size[val],
        paddingHorizontal: tokens.space[val],
        paddingVertical: getSpace(tokens.space[val], {
          shift: -4
        })
      }), "...size")
    },
    active: {
      true: {
        hoverStyle: {
          backgroundColor: "$background"
        }
      }
    },
    disabled: {
      true: {
        opacity: 0.5,
        pointerEvents: "none"
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var ListItemText = styled26(SizableText2, {
  context: context2,
  name: "ListItemText",
  variants: {
    unstyled: {
      false: {
        color: "$color",
        size: "$true",
        flexGrow: 1,
        flexShrink: 1,
        ellipsis: true,
        cursor: "inherit"
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var ListItemSubtitle = styled26(ListItemText, {
  name: "ListItemSubtitle",
  context: context2,
  variants: {
    unstyled: {
      false: {
        opacity: 0.6,
        maxWidth: "100%",
        color: "$color"
      }
    },
    size: {
      "...size": /* @__PURE__ */ __name((val, extras) => {
        const oneSmaller = getSize(val, {
          shift: -1,
          excludeHalfSteps: true
        });
        return getFontSized(oneSmaller.key, extras);
      }, "...size")
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var ListItemTitle = styled26(ListItemText, {
  name: "ListItemTitle",
  context: context2,
  variants: {
    unstyled: {
      false: {}
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var ListItemIcon = /* @__PURE__ */ __name((props) => {
  const {
    children,
    size: size4,
    scaleIcon = 1
  } = props, styledContext = context2.useStyledContext();
  if (!styledContext) throw new Error("ListItem.Icon must be used within a ListItem");
  const sizeToken = size4 ?? styledContext.size ?? "$true", iconColor = useCurrentColor(styledContext.color), iconSize = getFontSize(sizeToken) * scaleIcon;
  return getIcon(children, {
    size: iconSize,
    color: iconColor
  });
}, "ListItemIcon");
var ListItemComponent = ListItemFrame.styleable(function(propsIn, ref) {
  const {
    children,
    icon,
    iconAfter,
    scaleIcon = 1,
    unstyled = false,
    subTitle,
    title,
    iconSize,
    ...rest
  } = propsIn, size4 = propsIn.size || "$true", styledContext = context2.useStyledContext(), iconColor = useCurrentColor(styledContext?.color), iconSizeNumber = getFontSize(iconSize || size4) * scaleIcon, [themedIcon, themedIconAfter] = [icon, iconAfter].map((icon2, i) => icon2 ? getIcon(icon2, {
    size: iconSizeNumber,
    color: iconColor,
    style: {
      [i === 0 ? "marginRight" : "marginLeft"]: `${iconSizeNumber * 0.4}%`
    }
  }) : null), wrappedChildren = wrapChildrenInText(ListItemText, {
    children
  }, propsIn.unstyled !== true ? {
    unstyled: process.env.TAMAGUI_HEADLESS === "1",
    fontSize: propsIn.size
  } : void 0);
  return /* @__PURE__ */ jsxs6(ListItemFrame, {
    ref,
    ...rest,
    children: [themedIcon, title || subTitle ? /* @__PURE__ */ jsxs6(YStack, {
      flex: 1,
      children: [title ? typeof title == "string" ? /* @__PURE__ */ jsx35(ListItemTitle, {
        unstyled,
        size: size4,
        children: title
      }) : title : null, subTitle ? /* @__PURE__ */ jsx35(Fragment8, {
        children: typeof subTitle == "string" ? /* @__PURE__ */ jsx35(ListItemSubtitle, {
          unstyled,
          size: size4,
          children: subTitle
        }) : subTitle
      }) : null, wrappedChildren]
    }) : wrappedChildren, themedIconAfter]
  });
});
var ListItem2 = withStaticProperties(ListItemComponent, {
  Apply: context2.Provider,
  Frame: ListItemFrame,
  Text: ListItemText,
  Subtitle: ListItemSubtitle,
  Icon: ListItemIcon,
  Title: ListItemTitle
});

// node_modules/@tamagui/focus-guard/dist/esm/FocusGuard.mjs
import * as React40 from "react";
var count = 0;
function useFocusGuards() {
  React40.useEffect(() => {
    const edgeGuards = document.querySelectorAll("[data-tamagui-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard()), document.body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard()), count++, () => {
      count === 1 && document.querySelectorAll("[data-tamagui-focus-guard]").forEach((node) => node.remove()), count--;
    };
  }, []);
}
__name(useFocusGuards, "useFocusGuards");
function createFocusGuard() {
  const element = document.createElement("span");
  return element.setAttribute("data-tamagui-focus-guard", ""), element.tabIndex = 0, element.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", element;
}
__name(createFocusGuard, "createFocusGuard");

// node_modules/@tamagui/popper/dist/esm/Popper.mjs
import { flushSync as flushSync5 } from "react-dom";
import { LayoutMeasurementController as LayoutMeasurementController2, View as TamaguiView, createStyledContext as createStyledContext12, getVariableValue as getVariableValue5, registerLayoutNode, styled as styled27 } from "@tamagui/core";

// ../../node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = /* @__PURE__ */ __name((v) => ({
  x: v,
  y: v
}), "createCoords");
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function clamp2(start, value, end) {
  return max(start, min(value, end));
}
__name(clamp2, "clamp");
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
__name(evaluate, "evaluate");
function getSide(placement) {
  return placement.split("-")[0];
}
__name(getSide, "getSide");
function getAlignment(placement) {
  return placement.split("-")[1];
}
__name(getAlignment, "getAlignment");
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
__name(getOppositeAxis, "getOppositeAxis");
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
__name(getAxisLength, "getAxisLength");
function getSideAxis(placement) {
  const firstChar = placement[0];
  return firstChar === "t" || firstChar === "b" ? "y" : "x";
}
__name(getSideAxis, "getSideAxis");
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
__name(getAlignmentAxis, "getAlignmentAxis");
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
__name(getAlignmentSides, "getAlignmentSides");
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
__name(getExpandedPlacements, "getExpandedPlacements");
function getOppositeAlignmentPlacement(placement) {
  return placement.includes("start") ? placement.replace("start", "end") : placement.replace("end", "start");
}
__name(getOppositeAlignmentPlacement, "getOppositeAlignmentPlacement");
var lrPlacement = ["left", "right"];
var rlPlacement = ["right", "left"];
var tbPlacement = ["top", "bottom"];
var btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case "left":
    case "right":
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
__name(getSideList, "getSideList");
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
__name(getOppositeAxisPlacements, "getOppositeAxisPlacements");
function getOppositePlacement(placement) {
  const side = getSide(placement);
  return oppositeSideMap[side] + placement.slice(side.length);
}
__name(getOppositePlacement, "getOppositePlacement");
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
__name(expandPaddingObject, "expandPaddingObject");
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
__name(getPaddingObject, "getPaddingObject");
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}
__name(rectToClientRect, "rectToClientRect");

// ../../node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
__name(computeCoordsFromPlacement, "computeCoordsFromPlacement");
async function detectOverflow(state5, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state5;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state5);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
__name(detectOverflow, "detectOverflow");
var MAX_RESET_COUNT = 50;
var computePosition = /* @__PURE__ */ __name(async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const platformWithDetectOverflow = platform2.detectOverflow ? platform2 : {
    ...platform2,
    detectOverflow
  };
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let resetCount = 0;
  const middlewareData = {};
  for (let i = 0; i < middleware.length; i++) {
    const currentMiddleware = middleware[i];
    if (!currentMiddleware) {
      continue;
    }
    const {
      name,
      fn
    } = currentMiddleware;
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platformWithDetectOverflow,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData[name] = {
      ...middlewareData[name],
      ...data
    };
    if (reset && resetCount < MAX_RESET_COUNT) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
}, "computePosition");
var arrow = /* @__PURE__ */ __name((options) => ({
  name: "arrow",
  options,
  async fn(state5) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state5;
    const {
      element,
      padding = 0
    } = evaluate(options, state5) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset4 = clamp2(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset4 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset4,
        centerOffset: center - offset4 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
}), "arrow");
var flip = /* @__PURE__ */ __name(function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state5) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state5;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state5);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await platform2.detectOverflow(state5, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
          // overflows the main axis.
          overflowsData.every((d) => getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
}, "flip");
var originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(state5, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state5;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state5);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
__name(convertValueToCoords, "convertValueToCoords");
var offset = /* @__PURE__ */ __name(function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state5) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state5;
      const diffCoords = await convertValueToCoords(state5, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
}, "offset");
var shift = /* @__PURE__ */ __name(function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state5) {
      const {
        x,
        y,
        placement,
        platform: platform2
      } = state5;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: /* @__PURE__ */ __name((_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }, "fn")
        },
        ...detectOverflowOptions
      } = evaluate(options, state5);
      const coords = {
        x,
        y
      };
      const overflow = await platform2.detectOverflow(state5, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp2(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp2(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state5,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
}, "shift");
var size = /* @__PURE__ */ __name(function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state5) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state5;
      const {
        apply = /* @__PURE__ */ __name(() => {
        }, "apply"),
        ...detectOverflowOptions
      } = evaluate(options, state5);
      const overflow = await platform2.detectOverflow(state5, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state5.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state5.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state5.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state5,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
}, "size");

// ../../node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
  return typeof window !== "undefined";
}
__name(hasWindow, "hasWindow");
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
__name(getNodeName, "getNodeName");
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
__name(getWindow, "getWindow");
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
__name(getDocumentElement, "getDocumentElement");
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
__name(isNode, "isNode");
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
__name(isElement, "isElement");
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
__name(isHTMLElement, "isHTMLElement");
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
__name(isShadowRoot, "isShadowRoot");
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && display !== "inline" && display !== "contents";
}
__name(isOverflowElement, "isOverflowElement");
function isTableElement(element) {
  return /^(table|td|th)$/.test(getNodeName(element));
}
__name(isTableElement, "isTableElement");
function isTopLayer(element) {
  try {
    if (element.matches(":popover-open")) {
      return true;
    }
  } catch (_e) {
  }
  try {
    return element.matches(":modal");
  } catch (_e) {
    return false;
  }
}
__name(isTopLayer, "isTopLayer");
var willChangeRe = /transform|translate|scale|rotate|perspective|filter/;
var containRe = /paint|layout|strict|content/;
var isNotNone = /* @__PURE__ */ __name((value) => !!value && value !== "none", "isNotNone");
var isWebKitValue;
function isContainingBlock(elementOrCss) {
  const css = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
  return isNotNone(css.transform) || isNotNone(css.translate) || isNotNone(css.scale) || isNotNone(css.rotate) || isNotNone(css.perspective) || !isWebKit() && (isNotNone(css.backdropFilter) || isNotNone(css.filter)) || willChangeRe.test(css.willChange || "") || containRe.test(css.contain || "");
}
__name(isContainingBlock, "isContainingBlock");
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
__name(getContainingBlock, "getContainingBlock");
function isWebKit() {
  if (isWebKitValue == null) {
    isWebKitValue = typeof CSS !== "undefined" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
  }
  return isWebKitValue;
}
__name(isWebKit, "isWebKit");
function isLastTraversableNode(node) {
  return /^(html|body|#document)$/.test(getNodeName(node));
}
__name(isLastTraversableNode, "isLastTraversableNode");
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
__name(getComputedStyle2, "getComputedStyle");
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
__name(getNodeScroll, "getNodeScroll");
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
__name(getParentNode, "getParentNode");
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
__name(getNearestOverflowAncestor, "getNearestOverflowAncestor");
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  } else {
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }
}
__name(getOverflowAncestors, "getOverflowAncestors");
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
__name(getFrameElement, "getFrameElement");

// ../../node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
__name(getCssDimensions, "getCssDimensions");
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
__name(unwrapElement, "unwrapElement");
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
__name(getScale, "getScale");
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
__name(getVisualOffsets, "getVisualOffsets");
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
__name(shouldAddVisualOffsets, "shouldAddVisualOffsets");
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left2 = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left2;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
__name(getBoundingClientRect, "getBoundingClientRect");
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
__name(getWindowScrollBarX, "getWindowScrollBarX");
function getHTMLOffset(documentElement, scroll) {
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}
__name(getHTMLOffset, "getHTMLOffset");
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
__name(convertOffsetParentRelativeRectToViewportRelativeRect, "convertOffsetParentRelativeRectToViewportRelativeRect");
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
__name(getClientRects, "getClientRects");
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
__name(getDocumentRect, "getDocumentRect");
var SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  const windowScrollbarX = getWindowScrollBarX(html);
  if (windowScrollbarX <= 0) {
    const doc = html.ownerDocument;
    const body = doc.body;
    const bodyStyles = getComputedStyle(body);
    const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
    const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
    if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
      width -= clippingStableScrollbarWidth;
    }
  } else if (windowScrollbarX <= SCROLLBAR_MAX) {
    width += windowScrollbarX;
  }
  return {
    width,
    height,
    x,
    y
  };
}
__name(getViewportRect, "getViewportRect");
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left2 = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left2 * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
__name(getInnerBoundingClientRect, "getInnerBoundingClientRect");
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
__name(getClientRectFromClippingAncestor, "getClientRectFromClippingAncestor");
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
__name(hasFixedPositionAncestor, "hasFixedPositionAncestor");
function getClippingElementAncestors(element, cache8) {
  const cachedResult = cache8.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && (currentContainingBlockComputedStyle.position === "absolute" || currentContainingBlockComputedStyle.position === "fixed") || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache8.set(element, result);
  return result;
}
__name(getClippingElementAncestors, "getClippingElementAncestors");
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstRect = getClientRectFromClippingAncestor(element, clippingAncestors[0], strategy);
  let top = firstRect.top;
  let right2 = firstRect.right;
  let bottom = firstRect.bottom;
  let left2 = firstRect.left;
  for (let i = 1; i < clippingAncestors.length; i++) {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestors[i], strategy);
    top = max(rect.top, top);
    right2 = min(rect.right, right2);
    bottom = min(rect.bottom, bottom);
    left2 = max(rect.left, left2);
  }
  return {
    width: right2 - left2,
    height: bottom - top,
    x: left2,
    y: top
  };
}
__name(getClippingRect, "getClippingRect");
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
__name(getDimensions, "getDimensions");
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  __name(setLeftRTLScrollbarOffset, "setLeftRTLScrollbarOffset");
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      setLeftRTLScrollbarOffset();
    }
  }
  if (isFixed && !isOffsetParentAnElement && documentElement) {
    setLeftRTLScrollbarOffset();
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
__name(getRectRelativeToOffsetParent, "getRectRelativeToOffsetParent");
function isStaticPositioned(element) {
  return getComputedStyle2(element).position === "static";
}
__name(isStaticPositioned, "isStaticPositioned");
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
__name(getTrueOffsetParent, "getTrueOffsetParent");
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
__name(getOffsetParent, "getOffsetParent");
var getElementRects = /* @__PURE__ */ __name(async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
}, "getElementRects");
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
__name(isRTL, "isRTL");
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function rectsAreEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
__name(rectsAreEqual, "rectsAreEqual");
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  __name(cleanup, "cleanup");
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left: left2,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left2 + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left2);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        refresh();
      }
      isFirstUpdate = false;
    }
    __name(handleObserve, "handleObserve");
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (_e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  __name(refresh, "refresh");
  refresh(true);
  return cleanup;
}
__name(observeMove, "observeMove");
function autoUpdate(reference, floating, update2, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...floating ? getOverflowAncestors(floating) : []] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update2, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update2);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update2) : null;
  let reobserveFrame = -1;
  let resizeObserver2 = null;
  if (elementResize) {
    resizeObserver2 = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver2 && floating) {
        resizeObserver2.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver2) == null || _resizeObserver.observe(floating);
        });
      }
      update2();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver2.observe(referenceEl);
    }
    if (floating) {
      resizeObserver2.observe(floating);
    }
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update2();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  __name(frameLoop, "frameLoop");
  update2();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update2);
      ancestorResize && ancestor.removeEventListener("resize", update2);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver2) == null || _resizeObserver2.disconnect();
    resizeObserver2 = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
__name(autoUpdate, "autoUpdate");
var offset2 = offset;
var shift2 = shift;
var flip2 = flip;
var size2 = size;
var arrow2 = arrow;
var computePosition2 = /* @__PURE__ */ __name((reference, floating, options) => {
  const cache8 = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache8
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
}, "computePosition");

// node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
import * as React41 from "react";
import { useLayoutEffect as useLayoutEffect4 } from "react";
import * as ReactDOM2 from "react-dom";
var isClient2 = typeof document !== "undefined";
var noop = /* @__PURE__ */ __name(function noop2() {
}, "noop");
var index = isClient2 ? useLayoutEffect4 : noop;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a && b && typeof a === "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length) return false;
      for (i = length; i-- !== 0; ) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
__name(deepEqual, "deepEqual");
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
__name(getDPR, "getDPR");
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
__name(roundByDPR, "roundByDPR");
function useLatestRef(value) {
  const ref = React41.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
__name(useLatestRef, "useLatestRef");
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open: open2
  } = options;
  const [data, setData] = React41.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React41.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React41.useState(null);
  const [_floating, _setFloating] = React41.useState(null);
  const setReference = React41.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React41.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React41.useRef(null);
  const floatingRef = React41.useRef(null);
  const dataRef = React41.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const openRef = useLatestRef(open2);
  const update2 = React41.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: openRef.current !== false
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM2.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef, openRef]);
  index(() => {
    if (open2 === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open2]);
  const isMountedRef = React41.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update2);
      }
      update2();
    }
  }, [referenceEl, floatingEl, update2, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React41.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React41.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React41.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React41.useMemo(() => ({
    ...data,
    update: update2,
    refs,
    elements,
    floatingStyles
  }), [data, update2, refs, elements, floatingStyles]);
}
__name(useFloating, "useFloating");
var arrow$1 = /* @__PURE__ */ __name((options) => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, "current");
  }
  __name(isRef, "isRef");
  return {
    name: "arrow",
    options,
    fn(state5) {
      const {
        element,
        padding
      } = typeof options === "function" ? options(state5) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow2({
            element: element.current,
            padding
          }).fn(state5);
        }
        return {};
      }
      if (element) {
        return arrow2({
          element,
          padding
        }).fn(state5);
      }
      return {};
    }
  };
}, "arrow$1");
var offset3 = /* @__PURE__ */ __name((options, deps) => {
  const result = offset2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps]
  };
}, "offset");
var shift3 = /* @__PURE__ */ __name((options, deps) => {
  const result = shift2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps]
  };
}, "shift");
var flip3 = /* @__PURE__ */ __name((options, deps) => {
  const result = flip2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps]
  };
}, "flip");
var size3 = /* @__PURE__ */ __name((options, deps) => {
  const result = size2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps]
  };
}, "size");
var arrow3 = /* @__PURE__ */ __name((options, deps) => {
  const result = arrow$1(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps]
  };
}, "arrow");

// node_modules/@tamagui/floating/dist/esm/useFloating.mjs
import React42 from "react";
var FloatingOverrideContext = React42.createContext(null);
var useFloating2 = /* @__PURE__ */ __name((props) => {
  "use no memo";
  return (React42.useContext(FloatingOverrideContext) || useFloating)?.({
    ...props,
    middleware: [
      // @ts-ignore
      ...props.middleware,
      {
        name: "rounded",
        fn({
          x,
          y
        }) {
          return {
            x: Math.round(x),
            y: Math.round(y)
          };
        }
      }
    ]
  });
}, "useFloating");

// node_modules/@tamagui/floating/dist/esm/interactions/createFloatingEvents.mjs
function createFloatingEvents() {
  const listeners2 = /* @__PURE__ */ new Map();
  return {
    emit(event, data) {
      listeners2.get(event)?.forEach((fn) => fn(data));
    },
    on(event, handler) {
      let set = listeners2.get(event);
      set || (set = /* @__PURE__ */ new Set(), listeners2.set(event, set)), set.add(handler);
    },
    off(event, handler) {
      const set = listeners2.get(event);
      set && (set.delete(handler), set.size === 0 && listeners2.delete(event));
    }
  };
}
__name(createFloatingEvents, "createFloatingEvents");

// node_modules/@tamagui/floating/dist/esm/interactions/PopupTriggerMap.mjs
var PopupTriggerMap = class {
  static {
    __name(this, "PopupTriggerMap");
  }
  map = /* @__PURE__ */ new Map();
  elements = /* @__PURE__ */ new Set();
  add(id, element) {
    const prev = this.map.get(id);
    prev && this.elements.delete(prev), this.map.set(id, element), this.elements.add(element);
  }
  delete(id) {
    const el = this.map.get(id);
    el && (this.elements.delete(el), this.map.delete(id));
  }
  hasElement(element) {
    return this.elements.has(element);
  }
};

// node_modules/@tamagui/floating/dist/esm/interactions/useInteractions.mjs
function useInteractions(propsList) {
  const filtered = propsList.filter(Boolean), referenceFns = /* @__PURE__ */ new Map(), floatingFns = /* @__PURE__ */ new Map(), itemFns = /* @__PURE__ */ new Map(), referenceStatic = {}, floatingStatic = {};
  for (const props of filtered) props.reference && collectProps(props.reference, referenceFns, referenceStatic), props.floating && collectProps(props.floating, floatingFns, floatingStatic), props.item && typeof props.item == "object" && collectProps(props.item, itemFns, {});
  return {
    getReferenceProps(userProps) {
      return buildProps(referenceFns, referenceStatic, userProps);
    },
    getFloatingProps(userProps) {
      return buildProps(floatingFns, floatingStatic, userProps);
    },
    getItemProps(userProps) {
      return buildProps(itemFns, {}, userProps);
    }
  };
}
__name(useInteractions, "useInteractions");
function collectProps(props, fnMap, staticMap) {
  for (const key of Object.keys(props)) if (typeof props[key] == "function") {
    let arr = fnMap.get(key);
    arr || (arr = [], fnMap.set(key, arr)), arr.push(props[key]);
  } else staticMap[key] = props[key];
}
__name(collectProps, "collectProps");
function buildProps(fnMap, staticProps, userProps) {
  const result = {
    ...staticProps
  };
  for (const [key, fns] of fnMap) {
    const hookHandler = /* @__PURE__ */ __name((...args) => {
      for (const fn of fns) {
        const result2 = fn(...args);
        if (result2 !== void 0) return result2;
      }
    }, "hookHandler");
    result[key] = hookHandler;
  }
  if (userProps) for (const key of Object.keys(userProps)) if (key === "style") result.style = {
    ...result.style,
    ...userProps.style
  };
  else if (typeof userProps[key] == "function" && result[key]) {
    const hookFn = result[key], userFn = userProps[key];
    result[key] = (...args) => {
      userFn(...args), hookFn(...args);
    };
  } else result[key] = userProps[key];
  return result;
}
__name(buildProps, "buildProps");

// node_modules/@tamagui/floating/dist/esm/interactions/useHover.mjs
import * as React43 from "react";

// node_modules/@tamagui/floating/dist/esm/interactions/utils.mjs
function getDocument(node) {
  return node?.ownerDocument || document;
}
__name(getDocument, "getDocument");
function contains(parent, child) {
  if (!parent || !child) return false;
  const rootNode = child.getRootNode?.();
  if (parent.contains(child)) return true;
  if (rootNode && isShadowRoot2(rootNode)) {
    let next = child;
    for (; next; ) {
      if (parent === next) return true;
      next = next.parentNode || next.host;
    }
  }
  return false;
}
__name(contains, "contains");
function isShadowRoot2(node) {
  return node instanceof ShadowRoot;
}
__name(isShadowRoot2, "isShadowRoot");
function getTarget(event) {
  return "composedPath" in event ? event.composedPath()[0] : event.target;
}
__name(getTarget, "getTarget");
function activeElement(doc) {
  let el = doc.activeElement;
  for (; el?.shadowRoot?.activeElement != null; ) el = el.shadowRoot.activeElement;
  return el;
}
__name(activeElement, "activeElement");
function isHTMLElement2(value) {
  return value instanceof HTMLElement;
}
__name(isHTMLElement2, "isHTMLElement");
function isElement2(value) {
  return value instanceof Element;
}
__name(isElement2, "isElement");
var TYPEABLE_SELECTOR = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function isTypeableElement(element) {
  return isHTMLElement2(element) && element.matches(TYPEABLE_SELECTOR);
}
__name(isTypeableElement, "isTypeableElement");
function isTypeableCombobox(element) {
  return element ? element.getAttribute("role") === "combobox" && isTypeableElement(element) : false;
}
__name(isTypeableCombobox, "isTypeableCombobox");
function getPlatform() {
  const uaData = navigator.userAgentData;
  return uaData?.platform ? uaData.platform : navigator.platform;
}
__name(getPlatform, "getPlatform");
function getUserAgent() {
  const uaData = navigator.userAgentData;
  return uaData && Array.isArray(uaData.brands) ? uaData.brands.map(({
    brand,
    version
  }) => `${brand}/${version}`).join(" ") : navigator.userAgent;
}
__name(getUserAgent, "getUserAgent");
function isSafari() {
  return /apple/i.test(navigator.vendor);
}
__name(isSafari, "isSafari");
function isMac() {
  return getPlatform().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
__name(isMac, "isMac");
function isJSDOM() {
  return getUserAgent().includes("jsdom/");
}
__name(isJSDOM, "isJSDOM");
function matchesFocusVisible(element) {
  if (!element || isJSDOM()) return true;
  try {
    return element.matches(":focus-visible");
  } catch {
    return true;
  }
}
__name(matchesFocusVisible, "matchesFocusVisible");
function isMouseLikePointerType(pointerType, strict) {
  const values = ["mouse", "pen"];
  return strict || values.push("", void 0), values.includes(pointerType);
}
__name(isMouseLikePointerType, "isMouseLikePointerType");
function clearTimeoutIfSet(timeoutRef) {
  timeoutRef.current !== -1 && (clearTimeout(timeoutRef.current), timeoutRef.current = -1);
}
__name(clearTimeoutIfSet, "clearTimeoutIfSet");
function stopEvent(event) {
  event.preventDefault(), event.stopPropagation();
}
__name(stopEvent, "stopEvent");
function isVirtualClick(event) {
  return event.mozInputSource === 0 && event.isTrusted ? true : isAndroid3() && event.pointerType ? event.type === "click" && event.buttons === 1 : event.detail === 0 && !event.pointerType;
}
__name(isVirtualClick, "isVirtualClick");
function isVirtualPointerEvent(event) {
  return isJSDOM() ? false : !isAndroid3() && event.width === 0 && event.height === 0 || isAndroid3() && event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "mouse" || event.width < 1 && event.height < 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "touch";
}
__name(isVirtualPointerEvent, "isVirtualPointerEvent");
function isAndroid3() {
  const re = /android/i;
  return re.test(getPlatform()) || re.test(getUserAgent());
}
__name(isAndroid3, "isAndroid");
var rafId = 0;
function enqueueFocus(el, options = {}) {
  const {
    preventScroll = false,
    cancelPrevious = true,
    sync = false
  } = options;
  cancelPrevious && cancelAnimationFrame(rafId);
  const exec = /* @__PURE__ */ __name(() => el?.focus({
    preventScroll
  }), "exec");
  sync ? exec() : rafId = requestAnimationFrame(exec);
}
__name(enqueueFocus, "enqueueFocus");
function isListIndexDisabled(listRef, index2, disabledIndices) {
  if (typeof disabledIndices == "function") return disabledIndices(index2);
  if (disabledIndices) return disabledIndices.includes(index2);
  const element = listRef.current[index2];
  return element == null || element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true";
}
__name(isListIndexDisabled, "isListIndexDisabled");
function findNonDisabledListIndex(listRef, {
  startingIndex = -1,
  decrement = false,
  disabledIndices,
  amount = 1
} = {}) {
  let index2 = startingIndex;
  do
    index2 += decrement ? -amount : amount;
  while (index2 >= 0 && index2 <= listRef.current.length - 1 && isListIndexDisabled(listRef, index2, disabledIndices));
  return index2;
}
__name(findNonDisabledListIndex, "findNonDisabledListIndex");
function getMinListIndex(listRef, disabledIndices) {
  return findNonDisabledListIndex(listRef, {
    disabledIndices
  });
}
__name(getMinListIndex, "getMinListIndex");
function getMaxListIndex(listRef, disabledIndices) {
  return findNonDisabledListIndex(listRef, {
    decrement: true,
    startingIndex: listRef.current.length,
    disabledIndices
  });
}
__name(getMaxListIndex, "getMaxListIndex");
function isIndexOutOfListBounds(listRef, index2) {
  return index2 < 0 || index2 >= listRef.current.length;
}
__name(isIndexOutOfListBounds, "isIndexOutOfListBounds");

// node_modules/@tamagui/floating/dist/esm/interactions/useHover.mjs
var safePolygonIdentifier = "data-floating-ui-safe-polygon";
function getDelay(value, prop, pointerType) {
  return pointerType && !isMouseLikePointerType(pointerType) ? 0 : typeof value == "number" ? value : value?.[prop];
}
__name(getDelay, "getDelay");
function useHover(context4, props = {}) {
  const {
    open: open2,
    onOpenChange,
    dataRef,
    events,
    elements
  } = context4, {
    enabled = true,
    delay = 0,
    handleClose = null,
    mouseOnly = false,
    restMs = 0,
    move = true
  } = props, handleCloseRef = React43.useRef(handleClose);
  handleCloseRef.current = handleClose;
  const delayRef = React43.useRef(delay);
  delayRef.current = delay;
  const openRef = React43.useRef(open2);
  openRef.current = open2;
  const restMsRef = React43.useRef(restMs);
  restMsRef.current = restMs;
  const stableOnOpenChange = useEvent(onOpenChange), pointerTypeRef = React43.useRef(void 0), timeoutRef = React43.useRef(-1), handlerRef = React43.useRef(void 0), restTimeoutRef = React43.useRef(-1), blockMouseMoveRef = React43.useRef(true), performedPointerEventsMutationRef = React43.useRef(false), unbindMouseMoveRef = React43.useRef(() => {
  }), restTimeoutPendingRef = React43.useRef(false), isHoverOpen = useEvent(() => {
    const type = dataRef.current.openEvent?.type;
    return type?.includes("mouse") && type !== "mousedown";
  });
  React43.useEffect(() => {
    if (!enabled || !events) return;
    function onOpenChange2({
      open: open22
    }) {
      open22 || (clearTimeoutIfSet(timeoutRef), clearTimeoutIfSet(restTimeoutRef), blockMouseMoveRef.current = true, restTimeoutPendingRef.current = false);
    }
    __name(onOpenChange2, "onOpenChange2");
    return events.on("openchange", onOpenChange2), () => {
      events.off("openchange", onOpenChange2);
    };
  }, [enabled, events]);
  const closeWithDelay = useEvent((event, runElseBranch = true, reason = "hover") => {
    const closeDelay = getDelay(delayRef.current, "close", pointerTypeRef.current);
    closeDelay && !handlerRef.current ? (clearTimeoutIfSet(timeoutRef), timeoutRef.current = window.setTimeout(() => stableOnOpenChange(false, event, reason), closeDelay)) : runElseBranch && (clearTimeoutIfSet(timeoutRef), stableOnOpenChange(false, event, reason));
  }), cleanupMouseMoveHandler = useEvent(() => {
    unbindMouseMoveRef.current(), handlerRef.current = void 0, context4.handleCloseActiveRef && (context4.handleCloseActiveRef.current = false);
  }), clearPointerEvents = useEvent(() => {
    if (performedPointerEventsMutationRef.current) {
      const body = getDocument(elements.floating).body;
      body.style.pointerEvents = "", body.removeAttribute(safePolygonIdentifier), performedPointerEventsMutationRef.current = false;
    }
  }), isClickLikeOpenEvent = useEvent(() => dataRef.current.openEvent ? ["click", "mousedown"].includes(dataRef.current.openEvent.type) : false);
  React43.useEffect(() => {
    if (!enabled) return;
    function onReferenceMouseEnter(event) {
      if (clearTimeoutIfSet(timeoutRef), blockMouseMoveRef.current = false, mouseOnly && !isMouseLikePointerType(pointerTypeRef.current) || restMsRef.current > 0 && !getDelay(delayRef.current, "open")) return;
      const openDelay = getDelay(delayRef.current, "open", pointerTypeRef.current);
      openDelay ? timeoutRef.current = window.setTimeout(() => {
        openRef.current || stableOnOpenChange(true, event, "hover");
      }, openDelay) : open2 || stableOnOpenChange(true, event, "hover");
    }
    __name(onReferenceMouseEnter, "onReferenceMouseEnter");
    function onReferenceMouseLeave(event) {
      if (isClickLikeOpenEvent()) {
        clearPointerEvents();
        return;
      }
      if (context4.triggerElements?.hasElement(event.relatedTarget)) return;
      unbindMouseMoveRef.current();
      const doc = getDocument(elements.floating);
      if (clearTimeoutIfSet(restTimeoutRef), restTimeoutPendingRef.current = false, handleCloseRef.current) {
        open2 || clearTimeoutIfSet(timeoutRef);
        const placement = dataRef.current.placement || "bottom", reference2 = elements.domReference, floating = elements.floating;
        if (!reference2 || !floating) return;
        handlerRef.current = handleCloseRef.current({
          x: event.clientX,
          y: event.clientY,
          placement,
          elements: {
            reference: reference2,
            floating,
            domReference: reference2
          },
          onClose() {
            context4.handleCloseActiveRef && (context4.handleCloseActiveRef.current = false), clearPointerEvents(), cleanupMouseMoveHandler(), isClickLikeOpenEvent() || closeWithDelay(event, true, "safe-polygon");
          }
        }), context4.handleCloseActiveRef && (context4.handleCloseActiveRef.current = true);
        const handler = handlerRef.current;
        doc.addEventListener("mousemove", handler), unbindMouseMoveRef.current = () => {
          doc.removeEventListener("mousemove", handler);
        };
        return;
      }
      (pointerTypeRef.current !== "touch" || !contains(elements.floating, event.relatedTarget)) && closeWithDelay(event);
    }
    __name(onReferenceMouseLeave, "onReferenceMouseLeave");
    function onScrollMouseLeave(event) {
      if (isClickLikeOpenEvent() || context4.triggerElements?.hasElement(event.relatedTarget)) return;
      const placement = dataRef.current.placement || "bottom", reference2 = elements.domReference, floating = elements.floating;
      !reference2 || !floating || handleCloseRef.current?.({
        x: event.clientX,
        y: event.clientY,
        placement,
        elements: {
          reference: reference2,
          floating,
          domReference: reference2
        },
        onClose() {
          clearPointerEvents(), cleanupMouseMoveHandler(), isClickLikeOpenEvent() || closeWithDelay(event);
        }
      })(event);
    }
    __name(onScrollMouseLeave, "onScrollMouseLeave");
    function onFloatingMouseEnter() {
      clearTimeoutIfSet(timeoutRef);
    }
    __name(onFloatingMouseEnter, "onFloatingMouseEnter");
    function onFloatingMouseLeave(event) {
      isClickLikeOpenEvent() || context4.triggerElements?.hasElement(event.relatedTarget) || closeWithDelay(event, false);
    }
    __name(onFloatingMouseLeave, "onFloatingMouseLeave");
    if (isElement2(elements.domReference)) {
      const reference2 = elements.domReference, floating = elements.floating;
      return open2 && reference2.addEventListener("mouseleave", onScrollMouseLeave), move && reference2.addEventListener("mousemove", onReferenceMouseEnter, {
        once: true
      }), reference2.addEventListener("mouseenter", onReferenceMouseEnter), reference2.addEventListener("mouseleave", onReferenceMouseLeave), floating && (floating.addEventListener("mouseleave", onScrollMouseLeave), floating.addEventListener("mouseenter", onFloatingMouseEnter), floating.addEventListener("mouseleave", onFloatingMouseLeave)), () => {
        open2 && reference2.removeEventListener("mouseleave", onScrollMouseLeave), move && reference2.removeEventListener("mousemove", onReferenceMouseEnter), reference2.removeEventListener("mouseenter", onReferenceMouseEnter), reference2.removeEventListener("mouseleave", onReferenceMouseLeave), floating && (floating.removeEventListener("mouseleave", onScrollMouseLeave), floating.removeEventListener("mouseenter", onFloatingMouseEnter), floating.removeEventListener("mouseleave", onFloatingMouseLeave)), cleanupMouseMoveHandler();
      };
    }
  }, [elements, enabled, context4, mouseOnly, move, open2, dataRef]), React43.useLayoutEffect(() => {
    if (enabled && open2 && handleCloseRef.current?.__options?.blockPointerEvents && isHoverOpen()) {
      performedPointerEventsMutationRef.current = true;
      const floatingEl = elements.floating;
      if (isElement2(elements.domReference) && floatingEl) {
        const body = getDocument(elements.floating).body;
        body.setAttribute(safePolygonIdentifier, "");
        const ref = elements.domReference;
        return body.style.pointerEvents = "none", ref.style.pointerEvents = "auto", floatingEl.style.pointerEvents = "auto", () => {
          body.style.pointerEvents = "", ref.style.pointerEvents = "", floatingEl.style.pointerEvents = "";
        };
      }
    }
  }, [enabled, open2, elements, isHoverOpen]), React43.useLayoutEffect(() => {
    open2 || (pointerTypeRef.current = void 0, restTimeoutPendingRef.current = false, cleanupMouseMoveHandler(), clearPointerEvents());
  }, [open2]), React43.useEffect(() => () => {
    cleanupMouseMoveHandler(), clearTimeoutIfSet(timeoutRef), clearTimeoutIfSet(restTimeoutRef), clearPointerEvents();
  }, [enabled, elements.domReference]);
  const reference = React43.useMemo(() => {
    function setPointerRef(event) {
      pointerTypeRef.current = event.pointerType;
    }
    __name(setPointerRef, "setPointerRef");
    return {
      onPointerDown: setPointerRef,
      onPointerEnter: setPointerRef,
      onMouseMove(event) {
        const {
          nativeEvent
        } = event;
        function handleMouseMove() {
          !blockMouseMoveRef.current && !openRef.current && stableOnOpenChange(true, nativeEvent, "hover");
        }
        __name(handleMouseMove, "handleMouseMove");
        mouseOnly && !isMouseLikePointerType(pointerTypeRef.current) || open2 || restMsRef.current === 0 || restTimeoutPendingRef.current && event.movementX ** 2 + event.movementY ** 2 < 2 || (clearTimeoutIfSet(restTimeoutRef), pointerTypeRef.current === "touch" ? handleMouseMove() : (restTimeoutPendingRef.current = true, restTimeoutRef.current = window.setTimeout(handleMouseMove, restMsRef.current)));
      }
    };
  }, [mouseOnly, open2]);
  return React43.useMemo(() => enabled ? {
    reference
  } : {}, [enabled, reference]);
}
__name(useHover, "useHover");

// node_modules/@tamagui/floating/dist/esm/interactions/safePolygon.mjs
function isPointInPolygon(point, polygon) {
  const [x, y] = point;
  let isInside2 = false;
  const length = polygon.length;
  for (let i = 0, j = length - 1; i < length; j = i++) {
    const [xi, yi] = polygon[i] || [0, 0], [xj, yj] = polygon[j] || [0, 0];
    yi >= y != yj >= y && x <= (xj - xi) * (y - yi) / (yj - yi) + xi && (isInside2 = !isInside2);
  }
  return isInside2;
}
__name(isPointInPolygon, "isPointInPolygon");
function isInside(point, rect) {
  return point[0] >= rect.x && point[0] <= rect.x + rect.width && point[1] >= rect.y && point[1] <= rect.y + rect.height;
}
__name(isInside, "isInside");
var debugSvg = null;
function debugDrawPolygon(polygon, trough, cursor, anchor) {
  if (debugSvg || (debugSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg"), debugSvg.id = "__safe-polygon-debug", Object.assign(debugSvg.style, {
    position: "fixed",
    inset: "0",
    width: "100vw",
    height: "100vh",
    pointerEvents: "none",
    zIndex: "999999"
  }), document.body.appendChild(debugSvg)), debugSvg.innerHTML = "", trough.length) {
    const troughEl = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    troughEl.setAttribute("points", trough.map((p) => p.join(",")).join(" ")), troughEl.setAttribute("fill", "rgba(0,100,255,0.15)"), troughEl.setAttribute("stroke", "rgba(0,100,255,0.6)"), troughEl.setAttribute("stroke-width", "1"), debugSvg.appendChild(troughEl);
  }
  if (polygon.length) {
    const polyEl = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    polyEl.setAttribute("points", polygon.map((p) => p.join(",")).join(" ")), polyEl.setAttribute("fill", "rgba(255,50,50,0.2)"), polyEl.setAttribute("stroke", "rgba(255,50,50,0.8)"), polyEl.setAttribute("stroke-width", "1.5"), debugSvg.appendChild(polyEl);
  }
  const anchorCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  anchorCircle.setAttribute("cx", String(anchor[0])), anchorCircle.setAttribute("cy", String(anchor[1])), anchorCircle.setAttribute("r", "5"), anchorCircle.setAttribute("fill", "lime"), anchorCircle.setAttribute("stroke", "darkgreen"), anchorCircle.setAttribute("stroke-width", "1.5"), debugSvg.appendChild(anchorCircle);
  const cursorCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  cursorCircle.setAttribute("cx", String(cursor[0])), cursorCircle.setAttribute("cy", String(cursor[1])), cursorCircle.setAttribute("r", "4"), cursorCircle.setAttribute("fill", "yellow"), cursorCircle.setAttribute("stroke", "orange"), cursorCircle.setAttribute("stroke-width", "1.5"), debugSvg.appendChild(cursorCircle);
}
__name(debugDrawPolygon, "debugDrawPolygon");
function debugClear() {
  debugSvg && (debugSvg.remove(), debugSvg = null);
}
__name(debugClear, "debugClear");
function safePolygon(options = {}) {
  const {
    buffer = 0.5,
    blockPointerEvents = false,
    requireIntent = true,
    __debug = false
  } = options, timeoutRef = {
    current: -1
  };
  let hasLanded = false, lastX = null, lastY = null, lastCursorTime = typeof performance < "u" ? performance.now() : 0;
  function getCursorSpeed(x, y) {
    const currentTime = performance.now(), elapsedTime = currentTime - lastCursorTime;
    if (lastX === null || lastY === null || elapsedTime === 0) return lastX = x, lastY = y, lastCursorTime = currentTime, null;
    const deltaX = x - lastX, deltaY = y - lastY, speed = Math.sqrt(deltaX * deltaX + deltaY * deltaY) / elapsedTime;
    return lastX = x, lastY = y, lastCursorTime = currentTime, speed;
  }
  __name(getCursorSpeed, "getCursorSpeed");
  const fn = /* @__PURE__ */ __name(({
    x,
    y,
    placement,
    elements,
    onClose
  }) => (hasLanded = false, lastX = null, lastY = null, function(event) {
    function close() {
      clearTimeoutIfSet(timeoutRef), onClose();
    }
    __name(close, "close");
    clearTimeoutIfSet(timeoutRef);
    const domReference = elements.domReference ?? elements.reference;
    if (!domReference || !elements.floating || placement == null || x == null || y == null) return;
    const {
      clientX,
      clientY
    } = event, clientPoint = [clientX, clientY], target = getTarget(event), isLeave = event.type === "mouseleave", isOverFloatingEl = contains(elements.floating, target), isOverReferenceEl = contains(domReference, target), refRect = domReference.getBoundingClientRect(), rect = elements.floating.getBoundingClientRect(), side = placement.split("-")[0], cursorLeaveFromRight = x > rect.right - rect.width / 2, cursorLeaveFromBottom = y > rect.bottom - rect.height / 2, isOverReferenceRect = isInside(clientPoint, refRect), isFloatingWider = rect.width > refRect.width, isFloatingTaller = rect.height > refRect.height, left2 = (isFloatingWider ? refRect : rect).left, right2 = (isFloatingWider ? refRect : rect).right, top = (isFloatingTaller ? refRect : rect).top, bottom = (isFloatingTaller ? refRect : rect).bottom;
    if (isOverFloatingEl && (hasLanded = true, !isLeave)) return;
    if (isOverReferenceEl && (hasLanded = false), isOverReferenceEl && !isLeave) {
      hasLanded = true;
      return;
    }
    if (!isOverReferenceEl && isOverReferenceRect && !isLeave || isLeave && event.relatedTarget && contains(elements.floating, event.relatedTarget)) return;
    if (side === "top" && y >= refRect.bottom - 1 || side === "bottom" && y <= refRect.top + 1 || side === "left" && x >= refRect.right - 1 || side === "right" && x <= refRect.left + 1) return close();
    let rectPoly = [];
    switch (side) {
      case "top":
        rectPoly = [[left2, refRect.top + 1], [left2, rect.bottom - 1], [right2, rect.bottom - 1], [right2, refRect.top + 1]];
        break;
      case "bottom":
        rectPoly = [[left2, rect.top + 1], [left2, refRect.bottom - 1], [right2, refRect.bottom - 1], [right2, rect.top + 1]];
        break;
      case "left":
        rectPoly = [[rect.right - 1, bottom], [rect.right - 1, top], [refRect.left + 1, top], [refRect.left + 1, bottom]];
        break;
      case "right":
        rectPoly = [[refRect.right - 1, bottom], [refRect.right - 1, top], [rect.left + 1, top], [rect.left + 1, bottom]];
        break;
    }
    function getPolygon([x2, y2]) {
      switch (side) {
        case "top": {
          const cursorPointOne = [isFloatingWider ? x2 + buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 + buffer + 1], cursorPointTwo = [isFloatingWider ? x2 - buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 + buffer + 1], commonPoints = [[rect.left, cursorLeaveFromRight || isFloatingWider ? rect.bottom - buffer : rect.top], [rect.right, cursorLeaveFromRight ? isFloatingWider ? rect.bottom - buffer : rect.top : rect.bottom - buffer]];
          return [cursorPointOne, cursorPointTwo, ...commonPoints];
        }
        case "bottom": {
          const cursorPointOne = [isFloatingWider ? x2 + buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 - buffer], cursorPointTwo = [isFloatingWider ? x2 - buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 - buffer], commonPoints = [[rect.left, cursorLeaveFromRight || isFloatingWider ? rect.top + buffer : rect.bottom], [rect.right, cursorLeaveFromRight ? isFloatingWider ? rect.top + buffer : rect.bottom : rect.top + buffer]];
          return [cursorPointOne, cursorPointTwo, ...commonPoints];
        }
        case "left": {
          const cursorPointOne = [x2 + buffer + 1, isFloatingTaller ? y2 + buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4], cursorPointTwo = [x2 + buffer + 1, isFloatingTaller ? y2 - buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4];
          return [...[[cursorLeaveFromBottom || isFloatingTaller ? rect.right - buffer : rect.left, rect.top], [cursorLeaveFromBottom ? isFloatingTaller ? rect.right - buffer : rect.left : rect.right - buffer, rect.bottom]], cursorPointOne, cursorPointTwo];
        }
        case "right": {
          const cursorPointOne = [x2 - buffer, isFloatingTaller ? y2 + buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4], cursorPointTwo = [x2 - buffer, isFloatingTaller ? y2 - buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4], commonPoints = [[cursorLeaveFromBottom || isFloatingTaller ? rect.left + buffer : rect.right, rect.top], [cursorLeaveFromBottom ? isFloatingTaller ? rect.left + buffer : rect.right : rect.left + buffer, rect.bottom]];
          return [cursorPointOne, cursorPointTwo, ...commonPoints];
        }
      }
    }
    __name(getPolygon, "getPolygon");
    const poly = getPolygon([x, y]);
    if (__debug && debugDrawPolygon(poly, rectPoly, clientPoint, [x, y]), !isPointInPolygon([clientX, clientY], rectPoly)) {
      if (hasLanded && !isOverReferenceRect) return __debug && debugClear(), close();
      if (!isPointInPolygon([clientX, clientY], poly)) {
        if (!isLeave && requireIntent) {
          const cursorSpeed = getCursorSpeed(clientX, clientY);
          if (cursorSpeed !== null && cursorSpeed < 0.1) return __debug && debugClear(), close();
        }
        __debug && debugClear(), close();
      }
    }
  }), "fn");
  return fn.__options = {
    blockPointerEvents
  }, fn;
}
__name(safePolygon, "safePolygon");

// node_modules/@tamagui/floating/dist/esm/interactions/useFocus.mjs
import { useEffect as useEffect20, useMemo as useMemo16, useRef as useRef18 } from "react";
function isMacSafari() {
  return isMac() && isSafari();
}
__name(isMacSafari, "isMacSafari");
function useFocus(context4, props = {}) {
  const {
    open: open2,
    onOpenChange,
    events,
    dataRef,
    elements
  } = context4, {
    enabled = true,
    visibleOnly = true
  } = props, blockFocusRef = useRef18(false), timeoutRef = useRef18(-1), keyboardModalityRef = useRef18(true);
  useEffect20(() => {
    if (!enabled) return;
    const win = getDocument(elements.domReference).defaultView || window;
    function onBlur() {
      !open2 && isHTMLElement2(elements.domReference) && elements.domReference === activeElement(getDocument(elements.domReference)) && (blockFocusRef.current = true);
    }
    __name(onBlur, "onBlur");
    function onKeyDown() {
      keyboardModalityRef.current = true;
    }
    __name(onKeyDown, "onKeyDown");
    function onPointerDown() {
      keyboardModalityRef.current = false;
    }
    __name(onPointerDown, "onPointerDown");
    return win.addEventListener("blur", onBlur), isMacSafari() && (win.addEventListener("keydown", onKeyDown, true), win.addEventListener("pointerdown", onPointerDown, true)), () => {
      win.removeEventListener("blur", onBlur), isMacSafari() && (win.removeEventListener("keydown", onKeyDown, true), win.removeEventListener("pointerdown", onPointerDown, true));
    };
  }, [elements.domReference, open2, enabled]), useEffect20(() => {
    if (!enabled || !events) return;
    function handleOpenChange({
      reason
    }) {
      (reason === "reference-press" || reason === "escape-key") && (blockFocusRef.current = true);
    }
    __name(handleOpenChange, "handleOpenChange");
    return events.on("openchange", handleOpenChange), () => {
      events.off("openchange", handleOpenChange);
    };
  }, [events, enabled]), useEffect20(() => () => {
    clearTimeoutIfSet(timeoutRef);
  }, []);
  const reference = useMemo16(() => ({
    onMouseLeave() {
      blockFocusRef.current = false;
    },
    onFocus(event) {
      if (blockFocusRef.current) return;
      const target = getTarget(event.nativeEvent);
      if (visibleOnly && isElement2(target)) {
        if (isMacSafari() && !event.relatedTarget) {
          if (!keyboardModalityRef.current && !isTypeableElement(target)) return;
        } else if (!matchesFocusVisible(target)) return;
      }
      onOpenChange(true, event.nativeEvent, "focus");
    },
    onBlur(event) {
      blockFocusRef.current = false;
      const relatedTarget = event.relatedTarget, nativeEvent = event.nativeEvent;
      timeoutRef.current = window.setTimeout(() => {
        const activeEl = activeElement(elements.domReference ? elements.domReference.ownerDocument : document);
        !relatedTarget && activeEl === elements.domReference || contains(context4.refs.floating.current, activeEl) || contains(elements.domReference, activeEl) || onOpenChange(false, nativeEvent, "focus");
      });
    }
  }), [context4.refs.floating, elements.domReference, onOpenChange, visibleOnly]);
  return useMemo16(() => enabled ? {
    reference
  } : {}, [enabled, reference]);
}
__name(useFocus, "useFocus");

// node_modules/@tamagui/floating/dist/esm/interactions/useRole.mjs
import * as React44 from "react";
var componentRoleToAriaRoleMap = /* @__PURE__ */ new Map([["select", "listbox"], ["combobox", "listbox"], ["label", false]]);
var idCounter = 0;
function useRole(context4, props = {}) {
  const {
    open: open2,
    elements
  } = context4, {
    enabled = true,
    role = "dialog"
  } = props, defaultReferenceId = React44.useId(), referenceId = elements.domReference?.id || defaultReferenceId, defaultFloatingId = React44.useMemo(() => `floating-${idCounter++}`, []), floatingId = React44.useMemo(() => elements.floating?.id || defaultFloatingId, [elements.floating, defaultFloatingId]), ariaRole = componentRoleToAriaRoleMap.get(role) ?? role, reference = React44.useMemo(() => ariaRole === "tooltip" || role === "label" ? {
    [`aria-${role === "label" ? "labelledby" : "describedby"}`]: open2 ? floatingId : void 0
  } : {
    "aria-expanded": open2 ? "true" : "false",
    "aria-haspopup": ariaRole === "alertdialog" ? "dialog" : ariaRole,
    "aria-controls": open2 ? floatingId : void 0,
    ...ariaRole === "listbox" && {
      role: "combobox"
    },
    ...ariaRole === "menu" && {
      id: referenceId
    },
    ...role === "select" && {
      "aria-autocomplete": "none"
    },
    ...role === "combobox" && {
      "aria-autocomplete": "list"
    }
  }, [ariaRole, floatingId, open2, referenceId, role]), floating = React44.useMemo(() => {
    const floatingProps = {
      id: floatingId,
      ...ariaRole && {
        role: ariaRole
      }
    };
    return ariaRole === "tooltip" || role === "label" ? floatingProps : {
      ...floatingProps,
      ...ariaRole === "menu" && {
        "aria-labelledby": referenceId
      }
    };
  }, [ariaRole, floatingId, referenceId, role]), item = React44.useCallback(({
    active,
    selected
  }) => {
    const commonProps = {
      role: "option",
      ...active && {
        id: `${floatingId}-fui-option`
      }
    };
    switch (role) {
      case "select":
      case "combobox":
        return {
          ...commonProps,
          "aria-selected": selected
        };
    }
    return {};
  }, [floatingId, role]);
  return React44.useMemo(() => enabled ? {
    reference,
    floating,
    item
  } : {}, [enabled, reference, floating, item]);
}
__name(useRole, "useRole");

// node_modules/@tamagui/floating/dist/esm/interactions/useClick.mjs
import { useMemo as useMemo18, useRef as useRef19 } from "react";
function isButtonTarget(event) {
  return isHTMLElement2(event.target) && event.target.tagName === "BUTTON";
}
__name(isButtonTarget, "isButtonTarget");
function isAnchorTarget(event) {
  return isHTMLElement2(event.target) && event.target.tagName === "A";
}
__name(isAnchorTarget, "isAnchorTarget");
function isSpaceIgnored(element) {
  return isTypeableElement(element);
}
__name(isSpaceIgnored, "isSpaceIgnored");
function useClick(context4, props = {}) {
  const {
    open: open2,
    onOpenChange,
    dataRef,
    elements: {
      domReference
    }
  } = context4, {
    enabled = true,
    event: eventOption = "click",
    toggle = true,
    ignoreMouse = false,
    keyboardHandlers = true,
    stickIfOpen = true
  } = props, pointerTypeRef = useRef19(void 0), didKeyDownRef = useRef19(false), reference = useMemo18(() => ({
    onPointerDown(event) {
      pointerTypeRef.current = event.pointerType;
    },
    onMouseDown(event) {
      const pointerType = pointerTypeRef.current;
      event.button === 0 && eventOption !== "click" && (isMouseLikePointerType(pointerType, true) && ignoreMouse || (open2 && toggle && (!(dataRef.current.openEvent && stickIfOpen) || dataRef.current.openEvent.type === "mousedown") ? onOpenChange(false, event.nativeEvent || event, "click") : (event.preventDefault(), onOpenChange(true, event.nativeEvent || event, "click"))));
    },
    onClick(event) {
      const pointerType = pointerTypeRef.current;
      if (eventOption === "mousedown" && pointerTypeRef.current) {
        pointerTypeRef.current = void 0;
        return;
      }
      isMouseLikePointerType(pointerType, true) && ignoreMouse || (open2 && toggle && (!(dataRef.current.openEvent && stickIfOpen) || dataRef.current.openEvent.type === "click") ? onOpenChange(false, event.nativeEvent || event, "click") : onOpenChange(true, event.nativeEvent || event, "click"));
    },
    onKeyDown(event) {
      pointerTypeRef.current = void 0, !(event.defaultPrevented || !keyboardHandlers || isButtonTarget(event)) && (event.key === " " && !isSpaceIgnored(domReference) && (event.preventDefault(), didKeyDownRef.current = true), !isAnchorTarget(event) && event.key === "Enter" && onOpenChange(!(open2 && toggle), event.nativeEvent || event, "click"));
    },
    onKeyUp(event) {
      event.defaultPrevented || !keyboardHandlers || isButtonTarget(event) || isSpaceIgnored(domReference) || event.key === " " && didKeyDownRef.current && (didKeyDownRef.current = false, onOpenChange(!(open2 && toggle), event.nativeEvent || event, "click"));
    }
  }), [dataRef, domReference, eventOption, ignoreMouse, keyboardHandlers, onOpenChange, open2, stickIfOpen, toggle]);
  return useMemo18(() => enabled ? {
    reference
  } : {}, [enabled, reference]);
}
__name(useClick, "useClick");

// node_modules/@tamagui/floating/dist/esm/interactions/useListNavigation.mjs
import { useLayoutEffect as useLayoutEffect6, useMemo as useMemo19, useRef as useRef20, useState as useState11 } from "react";
var ARROW_UP = "ArrowUp";
var ARROW_DOWN = "ArrowDown";
var ARROW_LEFT = "ArrowLeft";
var ARROW_RIGHT = "ArrowRight";
function doSwitch(orientation, vertical, horizontal) {
  switch (orientation) {
    case "vertical":
      return vertical;
    case "horizontal":
      return horizontal;
    default:
      return vertical || horizontal;
  }
}
__name(doSwitch, "doSwitch");
function isMainOrientationKey(key, orientation) {
  return doSwitch(orientation, key === ARROW_UP || key === ARROW_DOWN, key === ARROW_LEFT || key === ARROW_RIGHT);
}
__name(isMainOrientationKey, "isMainOrientationKey");
function isMainOrientationToEndKey(key, orientation, rtl) {
  return doSwitch(orientation, key === ARROW_DOWN, rtl ? key === ARROW_LEFT : key === ARROW_RIGHT) || key === "Enter" || key === " " || key === "";
}
__name(isMainOrientationToEndKey, "isMainOrientationToEndKey");
function isCrossOrientationOpenKey(key, orientation, rtl) {
  return doSwitch(orientation, rtl ? key === ARROW_LEFT : key === ARROW_RIGHT, key === ARROW_DOWN);
}
__name(isCrossOrientationOpenKey, "isCrossOrientationOpenKey");
function isCrossOrientationCloseKey(key, orientation, rtl) {
  return doSwitch(orientation, rtl ? key === ARROW_RIGHT : key === ARROW_LEFT, key === ARROW_UP);
}
__name(isCrossOrientationCloseKey, "isCrossOrientationCloseKey");
function useListNavigation(context4, props) {
  const {
    open: open2,
    onOpenChange,
    elements
  } = context4, {
    listRef,
    activeIndex,
    onNavigate: unstable_onNavigate = /* @__PURE__ */ __name(() => {
    }, "unstable_onNavigate"),
    enabled = true,
    selectedIndex = null,
    allowEscape = false,
    loop = false,
    nested = false,
    rtl = false,
    virtual = false,
    focusItemOnOpen = "auto",
    focusItemOnHover = true,
    openOnArrowKeyDown = true,
    disabledIndices = void 0,
    orientation = "vertical",
    scrollItemIntoView = true
  } = props, typeableComboboxReference = isTypeableCombobox(elements.domReference), focusItemOnOpenRef = useRef20(focusItemOnOpen), indexRef = useRef20(selectedIndex ?? -1), keyRef = useRef20(null), isPointerModalityRef = useRef20(true), previousMountedRef = useRef20(!!elements.floating), previousOpenRef = useRef20(open2), forceSyncFocusRef = useRef20(false), forceScrollIntoViewRef = useRef20(false), disabledIndicesRef = useRef20(disabledIndices);
  disabledIndicesRef.current = disabledIndices;
  const latestOpenRef = useRef20(open2);
  latestOpenRef.current = open2;
  const scrollItemIntoViewRef = useRef20(scrollItemIntoView);
  scrollItemIntoViewRef.current = scrollItemIntoView;
  const selectedIndexRef = useRef20(selectedIndex);
  selectedIndexRef.current = selectedIndex;
  const stableOnNavigate = useEvent(unstable_onNavigate), [activeId, setActiveId] = useState11(), onNavigate = useEvent(() => {
    stableOnNavigate(indexRef.current === -1 ? null : indexRef.current);
  }), previousOnNavigateRef = useRef20(onNavigate), focusItem = useEvent(() => {
    function runFocus(item2) {
      virtual ? setActiveId(item2.id) : enqueueFocus(item2, {
        sync: forceSyncFocusRef.current,
        preventScroll: true
      });
    }
    __name(runFocus, "runFocus");
    const initialItem = listRef.current[indexRef.current], forceScrollIntoView = forceScrollIntoViewRef.current;
    initialItem && runFocus(initialItem), (forceSyncFocusRef.current ? (v) => v() : requestAnimationFrame)(() => {
      const waitedItem = listRef.current[indexRef.current] || initialItem;
      if (!waitedItem) return;
      initialItem || runFocus(waitedItem);
      const scrollIntoViewOptions = scrollItemIntoViewRef.current;
      scrollIntoViewOptions && waitedItem && (forceScrollIntoView || !isPointerModalityRef.current) && waitedItem.scrollIntoView?.(typeof scrollIntoViewOptions == "boolean" ? {
        block: "nearest",
        inline: "nearest"
      } : scrollIntoViewOptions);
    });
  });
  useLayoutEffect6(() => {
    enabled && (open2 && elements.floating ? focusItemOnOpenRef.current && selectedIndex != null && (forceScrollIntoViewRef.current = true, indexRef.current = selectedIndex, onNavigate()) : previousMountedRef.current && (indexRef.current = -1, previousOnNavigateRef.current()));
  }, [enabled, open2, elements.floating, selectedIndex, onNavigate]), useLayoutEffect6(() => {
    if (enabled && open2 && elements.floating) if (activeIndex == null) {
      if (forceSyncFocusRef.current = false, selectedIndexRef.current != null) return;
      if (previousMountedRef.current && (indexRef.current = -1, focusItem()), (!previousOpenRef.current || !previousMountedRef.current) && focusItemOnOpenRef.current && (keyRef.current != null || focusItemOnOpenRef.current === true && keyRef.current == null)) {
        let runs = 0;
        const waitForListPopulated = /* @__PURE__ */ __name(() => {
          listRef.current[0] == null ? (runs < 2 && (runs ? requestAnimationFrame : queueMicrotask)(waitForListPopulated), runs++) : (indexRef.current = keyRef.current == null || isMainOrientationToEndKey(keyRef.current, orientation, rtl) || nested ? getMinListIndex(listRef, disabledIndicesRef.current) : getMaxListIndex(listRef, disabledIndicesRef.current), keyRef.current = null, onNavigate());
        }, "waitForListPopulated");
        waitForListPopulated();
      }
    } else isIndexOutOfListBounds(listRef, activeIndex) || (indexRef.current = activeIndex, focusItem(), forceScrollIntoViewRef.current = false);
  }, [enabled, open2, elements.floating, activeIndex, selectedIndexRef, nested, listRef, orientation, rtl, onNavigate, focusItem, disabledIndicesRef]), useLayoutEffect6(() => {
    previousOnNavigateRef.current = onNavigate, previousOpenRef.current = open2, previousMountedRef.current = !!elements.floating;
  }), useLayoutEffect6(() => {
    open2 || (keyRef.current = null, focusItemOnOpenRef.current = focusItemOnOpen);
  }, [open2, focusItemOnOpen]);
  const hasActiveIndex = activeIndex != null, commonOnKeyDown = useEvent((event) => {
    if (isPointerModalityRef.current = false, forceSyncFocusRef.current = true, event.which === 229 || !latestOpenRef.current && event.currentTarget === elements.floating) return;
    if (nested && isCrossOrientationCloseKey(event.key, orientation, rtl)) {
      stopEvent(event), onOpenChange(false, event.nativeEvent, "list-navigation"), isHTMLElement2(elements.domReference) && elements.domReference.focus();
      return;
    }
    const currentIndex = indexRef.current, minIndex = getMinListIndex(listRef, disabledIndices), maxIndex = getMaxListIndex(listRef, disabledIndices);
    if (typeableComboboxReference || (event.key === "Home" && (stopEvent(event), indexRef.current = minIndex, onNavigate()), event.key === "End" && (stopEvent(event), indexRef.current = maxIndex, onNavigate())), isMainOrientationKey(event.key, orientation)) {
      if (stopEvent(event), open2 && !virtual && activeElement(event.currentTarget.ownerDocument) === event.currentTarget) {
        indexRef.current = isMainOrientationToEndKey(event.key, orientation, rtl) ? minIndex : maxIndex, onNavigate();
        return;
      }
      isMainOrientationToEndKey(event.key, orientation, rtl) ? loop ? indexRef.current = currentIndex >= maxIndex ? allowEscape && currentIndex !== listRef.current.length ? -1 : minIndex : findNonDisabledListIndex(listRef, {
        startingIndex: currentIndex,
        disabledIndices
      }) : indexRef.current = Math.min(maxIndex, findNonDisabledListIndex(listRef, {
        startingIndex: currentIndex,
        disabledIndices
      })) : loop ? indexRef.current = currentIndex <= minIndex ? allowEscape && currentIndex !== -1 ? listRef.current.length : maxIndex : findNonDisabledListIndex(listRef, {
        startingIndex: currentIndex,
        decrement: true,
        disabledIndices
      }) : indexRef.current = Math.max(minIndex, findNonDisabledListIndex(listRef, {
        startingIndex: currentIndex,
        decrement: true,
        disabledIndices
      })), isIndexOutOfListBounds(listRef, indexRef.current) && (indexRef.current = -1), onNavigate();
    }
  }), ariaActiveDescendantProp = useMemo19(() => virtual && open2 && hasActiveIndex && {
    "aria-activedescendant": activeId
  }, [virtual, open2, hasActiveIndex, activeId]), floating = useMemo19(() => ({
    "aria-orientation": orientation === "both" ? void 0 : orientation,
    ...typeableComboboxReference ? {} : ariaActiveDescendantProp,
    onKeyDown: commonOnKeyDown,
    onPointerMove() {
      isPointerModalityRef.current = true;
    }
  }), [ariaActiveDescendantProp, commonOnKeyDown, orientation, typeableComboboxReference]), reference = useMemo19(() => {
    function checkVirtualMouse(event) {
      focusItemOnOpen === "auto" && isVirtualClick(event.nativeEvent) && (focusItemOnOpenRef.current = true);
    }
    __name(checkVirtualMouse, "checkVirtualMouse");
    function checkVirtualPointer(event) {
      focusItemOnOpenRef.current = focusItemOnOpen, focusItemOnOpen === "auto" && isVirtualPointerEvent(event.nativeEvent) && (focusItemOnOpenRef.current = true);
    }
    __name(checkVirtualPointer, "checkVirtualPointer");
    return {
      ...ariaActiveDescendantProp,
      onKeyDown(event) {
        isPointerModalityRef.current = false;
        const isArrowKey = event.key.startsWith("Arrow"), isCrossOpenKey = isCrossOrientationOpenKey(event.key, orientation, rtl), isMainKey = isMainOrientationKey(event.key, orientation), isNavigationKey = (nested ? isCrossOpenKey : isMainKey) || event.key === "Enter" || event.key.trim() === "";
        if (virtual && open2) return commonOnKeyDown(event);
        if (!(!open2 && !openOnArrowKeyDown && isArrowKey)) {
          if (isNavigationKey && (keyRef.current = event.key), nested) {
            isCrossOpenKey && (stopEvent(event), open2 ? (indexRef.current = getMinListIndex(listRef, disabledIndicesRef.current), onNavigate()) : onOpenChange(true, event.nativeEvent, "list-navigation"));
            return;
          }
          isMainKey && (selectedIndex != null && (indexRef.current = selectedIndex), stopEvent(event), !open2 && openOnArrowKeyDown ? onOpenChange(true, event.nativeEvent, "list-navigation") : commonOnKeyDown(event), open2 && onNavigate());
        }
      },
      onFocus() {
        open2 && !virtual && (indexRef.current = -1, onNavigate());
      },
      onPointerDown: checkVirtualPointer,
      onPointerEnter: checkVirtualPointer,
      onMouseDown: checkVirtualMouse,
      onClick: checkVirtualMouse
    };
  }, [ariaActiveDescendantProp, commonOnKeyDown, disabledIndicesRef, focusItemOnOpen, listRef, nested, onNavigate, onOpenChange, open2, openOnArrowKeyDown, orientation, rtl, selectedIndex, virtual]), item = useMemo19(() => {
    function syncCurrentTarget(currentTarget) {
      if (!latestOpenRef.current) return;
      const index2 = listRef.current.indexOf(currentTarget);
      index2 !== -1 && indexRef.current !== index2 && (indexRef.current = index2, onNavigate());
    }
    __name(syncCurrentTarget, "syncCurrentTarget");
    return {
      onFocus({
        currentTarget
      }) {
        forceSyncFocusRef.current = true, syncCurrentTarget(currentTarget);
      },
      onClick: /* @__PURE__ */ __name(({
        currentTarget
      }) => currentTarget.focus({
        preventScroll: true
      }), "onClick"),
      // safari
      onMouseMove({
        currentTarget
      }) {
        forceSyncFocusRef.current = true, forceScrollIntoViewRef.current = false, focusItemOnHover && syncCurrentTarget(currentTarget);
      },
      onPointerLeave({
        pointerType
      }) {
        !isPointerModalityRef.current || pointerType === "touch" || (forceSyncFocusRef.current = true, focusItemOnHover && (indexRef.current = -1, onNavigate(), virtual || elements.floating?.focus({
          preventScroll: true
        })));
      }
    };
  }, [latestOpenRef, focusItemOnHover, listRef, onNavigate, virtual, elements.floating]);
  return useMemo19(() => enabled ? {
    reference,
    floating,
    item
  } : {}, [enabled, reference, floating, item]);
}
__name(useListNavigation, "useListNavigation");

// node_modules/@tamagui/floating/dist/esm/interactions/useTypeahead.mjs
import { useLayoutEffect as useLayoutEffect7, useMemo as useMemo20, useRef as useRef21 } from "react";
function useTypeahead(context4, props) {
  const {
    open: open2,
    dataRef
  } = context4, {
    listRef,
    activeIndex,
    onMatch: unstable_onMatch,
    onTypingChange: unstable_onTypingChange,
    enabled = true,
    findMatch = null,
    resetMs = 750,
    ignoreKeys = [],
    selectedIndex = null
  } = props, timeoutIdRef = useRef21(-1), stringRef = useRef21(""), prevIndexRef = useRef21(selectedIndex ?? activeIndex ?? -1), matchIndexRef = useRef21(null), onMatch = useEvent(unstable_onMatch || (() => {
  })), onTypingChange = useEvent(unstable_onTypingChange || (() => {
  })), findMatchRef = useRef21(findMatch);
  findMatchRef.current = findMatch;
  const ignoreKeysRef = useRef21(ignoreKeys);
  ignoreKeysRef.current = ignoreKeys, useLayoutEffect7(() => {
    open2 && (clearTimeoutIfSet(timeoutIdRef), matchIndexRef.current = null, stringRef.current = "");
  }, [open2]), useLayoutEffect7(() => {
    open2 && stringRef.current === "" && (prevIndexRef.current = selectedIndex ?? activeIndex ?? -1);
  }, [open2, selectedIndex, activeIndex]);
  const setTypingChange = /* @__PURE__ */ __name((value) => {
    value ? dataRef.current.typing || (dataRef.current.typing = value, onTypingChange(value)) : dataRef.current.typing && (dataRef.current.typing = value, onTypingChange(value));
  }, "setTypingChange"), onKeyDown = /* @__PURE__ */ __name((event) => {
    function getMatchingIndex(list, orderedList, string) {
      const str = findMatchRef.current ? findMatchRef.current(orderedList, string) : orderedList.find((text) => text?.toLocaleLowerCase().indexOf(string.toLocaleLowerCase()) === 0);
      return str ? list.indexOf(str) : -1;
    }
    __name(getMatchingIndex, "getMatchingIndex");
    const listContent = listRef.current;
    if (stringRef.current.length > 0 && stringRef.current[0] !== " " && (getMatchingIndex(listContent, listContent, stringRef.current) === -1 ? setTypingChange(false) : event.key === " " && stopEvent(event)), listContent == null || ignoreKeysRef.current.includes(event.key) || // character key
    event.key.length !== 1 || // modifier key
    event.ctrlKey || event.metaKey || event.altKey) return;
    open2 && event.key !== " " && (stopEvent(event), setTypingChange(true)), listContent.every((text) => text ? text[0]?.toLocaleLowerCase() !== text[1]?.toLocaleLowerCase() : true) && stringRef.current === event.key && (stringRef.current = "", prevIndexRef.current = matchIndexRef.current), stringRef.current += event.key, clearTimeoutIfSet(timeoutIdRef), timeoutIdRef.current = window.setTimeout(() => {
      stringRef.current = "", prevIndexRef.current = matchIndexRef.current, setTypingChange(false);
    }, resetMs);
    const prevIndex = prevIndexRef.current, index2 = getMatchingIndex(listContent, [...listContent.slice((prevIndex || 0) + 1), ...listContent.slice(0, (prevIndex || 0) + 1)], stringRef.current);
    index2 !== -1 ? (onMatch(index2), matchIndexRef.current = index2) : event.key !== " " && (stringRef.current = "", setTypingChange(false));
  }, "onKeyDown"), reference = useMemo20(() => ({
    onKeyDown
  }), [open2, enabled]), floating = useMemo20(() => ({
    onKeyDown,
    onKeyUp(event) {
      event.key === " " && setTypingChange(false);
    }
  }), [open2, enabled]);
  return useMemo20(() => enabled ? {
    reference,
    floating
  } : {}, [enabled, reference, floating]);
}
__name(useTypeahead, "useTypeahead");

// node_modules/@tamagui/floating/dist/esm/interactions/useInnerOffset.mjs
import * as React45 from "react";
import * as ReactDOM3 from "react-dom";
function useInnerOffset(context4, props) {
  const {
    open: open2,
    elements
  } = context4, {
    enabled = true,
    overflowRef,
    scrollRef,
    onChange: unstable_onChange
  } = props, onChange = useEvent(unstable_onChange), controlledScrollingRef = React45.useRef(false), prevScrollTopRef = React45.useRef(null), initialOverflowRef = React45.useRef(null);
  React45.useEffect(() => {
    if (!enabled) return;
    function onWheel(e) {
      if (e.ctrlKey || !el || overflowRef.current == null) return;
      const dY = e.deltaY, isAtTop = overflowRef.current.top >= -0.5, isAtBottom = overflowRef.current.bottom >= -0.5, remainingScroll = el.scrollHeight - el.clientHeight, sign = dY < 0 ? -1 : 1, method = dY < 0 ? "max" : "min";
      el.scrollHeight <= el.clientHeight || (!isAtTop && dY > 0 || !isAtBottom && dY < 0 ? (e.preventDefault(), ReactDOM3.flushSync(() => {
        onChange((d) => d + Math[method](dY, remainingScroll * sign));
      })) : /firefox/i.test(navigator.userAgent) && (el.scrollTop += dY));
    }
    __name(onWheel, "onWheel");
    const el = scrollRef?.current || elements.floating;
    if (open2 && el) return el.addEventListener("wheel", onWheel), requestAnimationFrame(() => {
      prevScrollTopRef.current = el.scrollTop, overflowRef.current != null && (initialOverflowRef.current = {
        ...overflowRef.current
      });
    }), () => {
      prevScrollTopRef.current = null, initialOverflowRef.current = null, el.removeEventListener("wheel", onWheel);
    };
  }, [enabled, open2, elements.floating, overflowRef, scrollRef, onChange]);
  const floating = React45.useMemo(() => ({
    onKeyDown() {
      controlledScrollingRef.current = true;
    },
    onWheel() {
      controlledScrollingRef.current = false;
    },
    onPointerMove() {
      controlledScrollingRef.current = false;
    },
    onScroll() {
      const el = scrollRef?.current || elements.floating;
      if (!(!overflowRef.current || !el || !controlledScrollingRef.current)) {
        if (prevScrollTopRef.current !== null) {
          const scrollDiff = el.scrollTop - prevScrollTopRef.current;
          (overflowRef.current.bottom < -0.5 && scrollDiff < -1 || overflowRef.current.top < -0.5 && scrollDiff > 1) && ReactDOM3.flushSync(() => onChange((d) => d + scrollDiff));
        }
        requestAnimationFrame(() => {
          prevScrollTopRef.current = el.scrollTop;
        });
      }
    }
  }), [elements.floating, onChange, overflowRef, scrollRef]);
  return React45.useMemo(() => enabled ? {
    floating
  } : {}, [enabled, floating]);
}
__name(useInnerOffset, "useInnerOffset");

// node_modules/@tamagui/floating/dist/esm/interactions/useDelayGroup.mjs
import * as React46 from "react";
var DelayGroupContext = React46.createContext({
  currentId: null,
  setCurrentId: /* @__PURE__ */ __name(() => {
  }, "setCurrentId"),
  delay: 0,
  timeoutMs: 0,
  initialDelay: 0
});
function useDelayGroupContext() {
  return React46.useContext(DelayGroupContext);
}
__name(useDelayGroupContext, "useDelayGroupContext");
function FloatingDelayGroup({
  children,
  delay,
  timeoutMs = 0
}) {
  const [currentId, setCurrentIdRaw] = React46.useState(null), timeoutRef = React46.useRef(void 0), setCurrentId = React46.useCallback((id) => {
    clearTimeout(timeoutRef.current), id == null && timeoutMs > 0 ? timeoutRef.current = setTimeout(() => {
      setCurrentIdRaw(null);
    }, timeoutMs) : setCurrentIdRaw(id);
  }, [timeoutMs]);
  React46.useEffect(() => () => clearTimeout(timeoutRef.current), []);
  const value = React46.useMemo(() => ({
    currentId,
    setCurrentId,
    delay,
    timeoutMs,
    initialDelay: delay
  }), [currentId, setCurrentId, delay, timeoutMs]);
  return React46.createElement(DelayGroupContext.Provider, {
    value
  }, children);
}
__name(FloatingDelayGroup, "FloatingDelayGroup");
function useDelayGroup(context4, options = {}) {
  const {
    id
  } = options, groupContext = React46.useContext(DelayGroupContext);
  return React46.useEffect(() => {
    !context4.open && groupContext.currentId === id && groupContext.setCurrentId(null);
  }, [context4.open, id]), React46.useEffect(() => {
    groupContext.currentId != null && groupContext.currentId !== id && context4.open && context4.onOpenChange(false);
  }, [groupContext.currentId, id, context4.open]), groupContext.currentId != null ? {
    delay: {
      open: 1,
      close: getClose(groupContext.initialDelay)
    },
    currentId: groupContext.currentId
  } : {
    delay: groupContext.initialDelay,
    currentId: groupContext.currentId
  };
}
__name(useDelayGroup, "useDelayGroup");
function getClose(delay) {
  return typeof delay == "number" ? delay : delay?.close ?? 0;
}
__name(getClose, "getClose");

// node_modules/@tamagui/floating/dist/esm/middleware/inner.mjs
import * as ReactDOM4 from "react-dom";
function getArgsWithCustomFloatingHeight(state5, height) {
  return {
    ...state5,
    rects: {
      ...state5.rects,
      floating: {
        ...state5.rects.floating,
        height
      }
    }
  };
}
__name(getArgsWithCustomFloatingHeight, "getArgsWithCustomFloatingHeight");
var inner = /* @__PURE__ */ __name((props) => ({
  name: "inner",
  options: props,
  async fn(state5) {
    const {
      listRef,
      overflowRef,
      onFallbackChange,
      offset: innerOffset = 0,
      index: index2 = 0,
      minItemsVisible = 4,
      referenceOverflowThreshold = 0,
      scrollRef,
      padding = 0
    } = props, {
      rects,
      platform: platform2,
      elements: {
        floating
      }
    } = state5, item = listRef.current?.[index2 ?? 0], scrollEl = scrollRef?.current || floating, clientTop = floating.clientTop || scrollEl.clientTop, floatingIsBordered = floating.clientTop !== 0, scrollElIsBordered = scrollEl.clientTop !== 0, floatingIsScrollEl = floating === scrollEl;
    if (!item || index2 == null) return onFallbackChange?.(true), {};
    const nextArgs = {
      ...state5,
      ...await offset3(-item.offsetTop - floating.clientTop - rects.reference.height / 2 - item.offsetHeight / 2 - innerOffset).fn(state5)
    }, detectOverflowOptions = {
      padding
    }, overflow = await platform2.detectOverflow(getArgsWithCustomFloatingHeight(nextArgs, scrollEl.scrollHeight + clientTop + floating.clientTop), detectOverflowOptions), refOverflow = await platform2.detectOverflow(nextArgs, {
      ...detectOverflowOptions,
      elementContext: "reference"
    }), diffY = Math.max(0, overflow.top), nextY = nextArgs.y + diffY, maxHeight = (scrollEl.scrollHeight > scrollEl.clientHeight ? (v) => v : Math.round)(Math.max(0, scrollEl.scrollHeight + (floatingIsBordered && floatingIsScrollEl || scrollElIsBordered ? clientTop * 2 : 0) - diffY - Math.max(0, overflow.bottom)));
    if (scrollEl.style.maxHeight = `${maxHeight}px`, scrollEl.scrollTop = diffY, onFallbackChange) {
      const shouldFallback = scrollEl.offsetHeight < item.offsetHeight * Math.min(minItemsVisible, listRef.current?.length ?? 0) - 1 || refOverflow.top >= -referenceOverflowThreshold || refOverflow.bottom >= -referenceOverflowThreshold;
      ReactDOM4.flushSync(() => onFallbackChange(shouldFallback));
    }
    return overflowRef && (overflowRef.current = await platform2.detectOverflow(getArgsWithCustomFloatingHeight({
      ...nextArgs,
      y: nextY
    }, scrollEl.offsetHeight + clientTop + floating.clientTop), detectOverflowOptions)), {
      y: nextY
    };
  }
}), "inner");

// node_modules/@tamagui/popper/dist/esm/Popper.mjs
import * as React47 from "react";
import { jsx as jsx36 } from "react/jsx-runtime";
var PopperContextFast = createStyledContext12(
  // since we always provide this we can avoid setting here
  {},
  "Popper__"
);
var PopperPositionContext = createStyledContext12;
var {
  useStyledContext: usePopperContext,
  Provider: PopperProviderFast
} = PopperContextFast;
var PopperContextSlow = createStyledContext12(
  // since we always provide this we can avoid setting here
  {},
  "PopperSlow__"
);
var {
  useStyledContext: usePopperContextSlow,
  Provider: PopperProviderSlow
} = PopperContextSlow;
var PopperProvider = /* @__PURE__ */ __name(({
  scope,
  children,
  ...context4
}) => {
  const fns = React47.useRef(context4);
  fns.current = context4;
  const [slowContext] = React47.useState(() => ({
    refs: context4.refs,
    triggerElements: context4.triggerElements,
    update(...a) {
      fns.current.update(...a);
    },
    getReferenceProps(p) {
      return fns.current.getReferenceProps?.(p);
    },
    onHoverReference(e) {
      fns.current.onHoverReference?.(e);
    },
    onLeaveReference() {
      fns.current.onLeaveReference?.();
    }
  }));
  return /* @__PURE__ */ jsx36(PopperProviderFast, {
    scope,
    ...context4,
    children: /* @__PURE__ */ jsx36(PopperProviderSlow, {
      scope,
      ...slowContext,
      children
    })
  });
}, "PopperProvider");
var checkFloating = void 0;
var setupOptions = {};
function setupPopper(options) {
  Object.assign(setupOptions, options);
}
__name(setupPopper, "setupPopper");
function getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [side, align];
}
__name(getSideAndAlignFromPlacement, "getSideAndAlignFromPlacement");
var transformOriginMiddleware = /* @__PURE__ */ __name((options) => ({
  name: "transformOrigin",
  options,
  fn(data) {
    const {
      placement,
      rects,
      middlewareData
    } = data, isArrowHidden = middlewareData.arrow?.centerOffset !== 0, arrowWidth = isArrowHidden ? 0 : options.arrowWidth, arrowHeight = isArrowHidden ? 0 : options.arrowHeight, [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement), noArrowAlign = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[placedAlign], arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2, arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;
    let x = "", y = "";
    return placedSide === "bottom" ? (x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`, y = `${-arrowHeight}px`) : placedSide === "top" ? (x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`, y = `${rects.floating.height + arrowHeight}px`) : placedSide === "right" ? (x = `${-arrowHeight}px`, y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`) : placedSide === "left" && (x = `${rects.floating.width + arrowHeight}px`, y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`), {
      data: {
        x,
        y
      }
    };
  }
}), "transformOriginMiddleware");
function tamaguiAutoUpdate(reference, floating, update2) {
  update2();
  let rafId2 = requestAnimationFrame(() => {
    update2(), rafId2 = 0;
  });
  const cleanups = [() => {
    rafId2 && cancelAnimationFrame(rafId2);
  }];
  reference instanceof HTMLElement && cleanups.push(registerLayoutNode(reference, update2));
  const ancestors = [...reference instanceof Element ? getOverflowAncestors(reference) : [], ...getOverflowAncestors(floating)], uniqueAncestors = [...new Set(ancestors)];
  for (const ancestor of uniqueAncestors) ancestor.addEventListener("scroll", update2, {
    passive: true
  });
  return window.addEventListener("resize", update2), cleanups.push(() => {
    for (const ancestor of uniqueAncestors) ancestor.removeEventListener("scroll", update2);
    window.removeEventListener("resize", update2);
  }), () => cleanups.forEach((fn) => fn());
}
__name(tamaguiAutoUpdate, "tamaguiAutoUpdate");
function Popper(props) {
  const {
    children,
    size: size4,
    strategy = "absolute",
    placement = "bottom",
    stayInFrame,
    allowFlip,
    offset: offset4,
    disableRTL,
    resize,
    passThrough,
    open: open2,
    scope
  } = props, [arrowEl, setArrow] = React47.useState(null), [arrowSize, setArrowSize] = React47.useState(0), offsetOptions = offset4 ?? arrowSize, floatingStyle = React47.useRef({}), isOpen = passThrough ? false : open2 ?? true, middlewareRef = React47.useRef([]);
  isOpen && (middlewareRef.current = [
    // order matters: offset first, then flip, then shift, then arrow
    typeof offsetOptions < "u" ? offset3(offsetOptions) : null,
    allowFlip ? flip3(typeof allowFlip == "boolean" ? {} : allowFlip) : null,
    // NOTE: shift's axis terminology is reversed vs flip/offset:
    // for top/bottom placements: mainAxis = horizontal, crossAxis = vertical
    // for left/right placements: mainAxis = vertical, crossAxis = horizontal
    // default to horizontal shift only (mainAxis: true, crossAxis: false)
    stayInFrame ? shift3({
      padding: 10,
      mainAxis: true,
      crossAxis: false,
      ...typeof stayInFrame == "object" ? stayInFrame : null
    }) : null,
    arrowEl ? arrow3({
      element: arrowEl
    }) : null,
    checkFloating,
    resize ? size3({
      padding: typeof stayInFrame == "object" ? stayInFrame.padding : 10,
      apply({
        availableHeight,
        availableWidth
      }) {
        if (passThrough) return;
        Object.assign(floatingStyle.current, {
          maxHeight: `${availableHeight}px`,
          maxWidth: `${availableWidth}px`
        });
        const floatingChild = floating.refs.floating.current?.firstChild;
        floatingChild && floatingChild instanceof HTMLElement && Object.assign(floatingChild.style, floatingStyle.current);
      },
      ...typeof resize == "object" && resize
    }) : null,
    size3({
      apply({
        elements,
        rects,
        availableWidth,
        availableHeight
      }) {
        const {
          width: anchorWidth,
          height: anchorHeight
        } = rects.reference, contentStyle = elements.floating.style;
        contentStyle.setProperty("--tamagui-popper-available-width", `${availableWidth}px`), contentStyle.setProperty("--tamagui-popper-available-height", `${availableHeight}px`), contentStyle.setProperty("--tamagui-popper-anchor-width", `${anchorWidth}px`), contentStyle.setProperty("--tamagui-popper-anchor-height", `${anchorHeight}px`);
      }
    }),
    transformOriginMiddleware({
      arrowHeight: arrowSize,
      arrowWidth: arrowSize
    })
  ].filter(Boolean));
  let floating = useFloating2({
    open: isOpen,
    strategy,
    placement,
    sameScrollView: false,
    // this only takes effect on native
    whileElementsMounted: isOpen ? tamaguiAutoUpdate : void 0,
    platform: disableRTL ?? setupOptions.disableRTL ? {
      ...platform,
      isRTL(element) {
        return false;
      }
    } : platform,
    middleware: middlewareRef.current
  });
  floating = React47.useMemo(() => {
    const og = floating.getFloatingProps;
    return resize && og && (floating.getFloatingProps = (props2) => og({
      ...props2,
      style: {
        ...props2.style,
        ...floatingStyle.current
      }
    })), floating;
  }, [floating, resize ? JSON.stringify(resize) : null]);
  const {
    middlewareData
  } = floating, popperContext = React47.useMemo(() => ({
    size: size4,
    arrowRef: setArrow,
    arrowStyle: middlewareData.arrow,
    onArrowSize: setArrowSize,
    hasFloating: middlewareData.checkFloating?.hasFloating,
    transformOrigin: middlewareData.transformOrigin,
    open: !!open2,
    ...floating
  }), [open2, size4, floating, JSON.stringify(middlewareData.arrow || null), JSON.stringify(middlewareData.transformOrigin || null)]);
  return /* @__PURE__ */ jsx36(PopperProvider, {
    scope,
    ...popperContext,
    children: /* @__PURE__ */ jsx36(FloatingOverrideContext.Provider, {
      value: null,
      children
    })
  });
}
__name(Popper, "Popper");
var PopperAnchor = YStack.styleable(function(props, forwardedRef) {
  const {
    virtualRef,
    scope,
    ...rest
  } = props, context4 = usePopperContextSlow(scope), {
    getReferenceProps,
    refs,
    update: update2
  } = context4, ref = React47.useRef(null), triggerId = React47.useId();
  React47.useEffect(() => {
    if (!scope || !context4.triggerElements || !ref.current || !(ref.current instanceof Element)) return;
    const el = ref.current;
    return context4.triggerElements.add(triggerId, el), () => {
      context4.triggerElements?.delete(triggerId);
    };
  }, [scope, triggerId, context4.triggerElements]), React47.useEffect(() => {
    virtualRef && (refs.setReference(virtualRef.current), update2());
  }, [virtualRef]);
  const refProps = getReferenceProps?.({
    ...rest,
    ref
  }) || null, safeSetReference = React47.useCallback(
    (node) => {
      startTransition(() => {
        refs.setReference(node);
      });
    },
    // it was refs.setRefernce but its stable and refs is undefined on server
    [refs]
  ), shouldHandleInHover = isWeb && scope, composedRefs = useComposedRefs(
    forwardedRef,
    ref,
    // web handles this onMouseEnter below so it can support multiple targets + hovering
    shouldHandleInHover ? void 0 : safeSetReference
  );
  return /* @__PURE__ */ jsx36(TamaguiView, {
    ...rest,
    ...refProps,
    ref: composedRefs,
    ...shouldHandleInHover && {
      // scoped poppers with multiple triggers: set the reference on
      // mouseEnter so floating-ui positions relative to the hovered
      // trigger, not the last one rendered.
      //
      // flushSync is critical here: without it, setReference batches
      // with React's async state updates and the arrow/content position
      // computes against the OLD reference element. this causes the
      // arrow to flash at x=0 (top-left) during trigger switches.
      // flushSync forces synchronous commit so update() below reads
      // the correct reference element immediately.
      onMouseEnter: /* @__PURE__ */ __name((e) => {
        const el = e.currentTarget ?? ref.current;
        if (el instanceof HTMLElement) {
          if (flushSync5(() => refs.setReference(el)), update2(), !refProps) return;
          refProps.onPointerEnter?.(e), context4.onHoverReference?.(e.nativeEvent);
        }
      }, "onMouseEnter"),
      onMouseLeave: /* @__PURE__ */ __name((e) => {
        context4.onLeaveReference?.(), refProps?.onMouseLeave?.(e);
      }, "onMouseLeave")
    }
  });
});
var PopperContentFrame = styled27(YStack, {
  name: "PopperContent",
  variants: {
    unstyled: {
      true: {}
    },
    size: {
      "...size": /* @__PURE__ */ __name((val, {
        tokens
      }) => ({
        padding: tokens.space[val],
        borderRadius: tokens.radius[val]
      }), "...size")
    }
  }
});
var PopperContent = React47.forwardRef(function(props, forwardedRef) {
  const {
    scope,
    animatePosition,
    enableAnimationForPositionChange,
    children,
    passThrough,
    unstyled,
    ...rest
  } = props, animatePos = animatePosition ?? enableAnimationForPositionChange, context4 = usePopperContext(scope), {
    strategy,
    placement,
    refs,
    x,
    y,
    getFloatingProps,
    size: size4,
    isPositioned,
    transformOrigin,
    update: update2
  } = context4, updateRef = React47.useRef(update2);
  updateRef.current = update2;
  const lastNodeRef = React47.useRef(null), safeSetFloating = React47.useCallback((node) => {
    const isNewNode = node !== lastNodeRef.current;
    node && (lastNodeRef.current = node, refs.setFloating(node), isNewNode || updateRef.current?.());
  }, [refs.setFloating]);
  React47.useEffect(() => () => {
    const ourNode = lastNodeRef.current;
    ourNode && refs.floating.current === ourNode && refs.setFloating(null), lastNodeRef.current = null;
  }, []);
  const contentRefs = useComposedRefs(safeSetFloating, forwardedRef), [needsMeasure, setNeedsMeasure] = React47.useState(animatePos);
  useIsomorphicLayoutEffect(() => {
    needsMeasure && x && y && setNeedsMeasure(false);
  }, [needsMeasure, animatePos, x, y]);
  const hasBeenPositioned = React47.useRef(false), lastGoodPosition = React47.useRef({
    x: 0,
    y: 0
  });
  (x !== 0 || y !== 0) && (lastGoodPosition.current = {
    x,
    y
  }, isPositioned && (hasBeenPositioned.current = true));
  const brieflyZero = hasBeenPositioned.current && x === 0 && y === 0, effectiveX = brieflyZero ? lastGoodPosition.current.x : x, effectiveY = brieflyZero ? lastGoodPosition.current.y : y, hide4 = !hasBeenPositioned.current && effectiveX === 0 && effectiveY === 0, disableAnimationProp = (
    // if they want to animate also when re-positioning allow it
    animatePos === "even-when-repositioning" ? needsMeasure : !hasBeenPositioned.current && !isPositioned || needsMeasure
  ), [disableAnimation, setDisableAnimation] = React47.useState(disableAnimationProp);
  React47.useEffect(() => {
    setDisableAnimation(disableAnimationProp);
  }, [disableAnimationProp]);
  const frameProps = {
    ref: contentRefs,
    ...hide4 ? {} : {
      x: effectiveX || 0,
      y: effectiveY || 0
    },
    top: 0,
    left: 0,
    position: strategy,
    opacity: hide4 ? 0 : 1,
    ...animatePos && {
      transition: rest.transition,
      // animateOnly: [] turns off transitions while keeping styles applied,
      // letting the element move to its position silently before animations start
      animateOnly: disableAnimation ? [] : rest.animateOnly,
      animatePresence: false
    }
  }, {
    style,
    ...floatingProps
  } = getFloatingProps ? getFloatingProps(frameProps) : frameProps, transformOriginStyle = isWeb && transformOrigin ? {
    transformOrigin: `${transformOrigin.x} ${transformOrigin.y}`
  } : void 0;
  return /* @__PURE__ */ jsx36(LayoutMeasurementController2, {
    disable: !context4.open,
    children: /* @__PURE__ */ jsx36(TamaguiView, {
      passThrough,
      ref: contentRefs,
      direction: rest.direction,
      ...passThrough ? null : floatingProps,
      ...!passThrough && animatePos && {
        "data-popper-animate-position": "true"
      },
      children: /* @__PURE__ */ jsx36(PopperContentFrame, {
        passThrough,
        unstyled,
        ...!passThrough && {
          "data-placement": placement,
          "data-strategy": strategy,
          size: size4,
          ...style,
          ...transformOriginStyle,
          ...rest
        },
        children
      }, "popper-content-frame")
    })
  });
});
var PopperArrowFrame = styled27(YStack, {
  name: "PopperArrow",
  variants: {
    unstyled: {
      false: {
        borderColor: "$borderColor",
        backgroundColor: "$background",
        position: "relative"
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var PopperArrowOuterFrame = styled27(YStack, {
  name: "PopperArrowOuter",
  variants: {
    unstyled: {
      false: {
        position: "absolute",
        zIndex: 1e6,
        pointerEvents: "none",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center"
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var opposites = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var PopperArrow = React47.forwardRef(function(propsIn, forwardedRef) {
  const {
    scope,
    animatePosition,
    transition: transition2,
    ...rest
  } = propsIn, {
    offset: offset4,
    size: sizeProp,
    borderWidth = 0,
    ...arrowProps
  } = rest, context4 = usePopperContext(scope), sizeVal = typeof sizeProp == "number" ? sizeProp : getVariableValue5(getSpace(sizeProp ?? context4.size, {
    shift: -2,
    bounds: [2]
  })), size4 = Math.max(0, +sizeVal), {
    placement
  } = context4, refs = useComposedRefs(context4.arrowRef, forwardedRef), x = context4.arrowStyle?.x || 0, y = context4.arrowStyle?.y || 0, arrowPositioned = context4.arrowStyle != null, primaryPlacement = placement ? placement.split("-")[0] : "top", arrowStyle = {
    x,
    y,
    width: size4,
    height: size4
  }, innerArrowStyle = {}, isVertical = primaryPlacement === "bottom" || primaryPlacement === "top";
  if (primaryPlacement) {
    arrowStyle[isVertical ? "width" : "height"] = size4 * 2;
    const oppSide = opposites[primaryPlacement];
    oppSide && (arrowStyle[oppSide] = -size4, innerArrowStyle[oppSide] = size4 / 2), (oppSide === "top" || oppSide === "bottom") && (arrowStyle.left = 0), (oppSide === "left" || oppSide === "right") && (arrowStyle.top = 0), useIsomorphicLayoutEffect(() => {
      context4.onArrowSize?.(size4);
    }, [size4, context4.onArrowSize]);
  }
  return /* @__PURE__ */ jsx36(PopperArrowOuterFrame, {
    ref: refs,
    ...arrowStyle,
    ...!arrowPositioned && {
      opacity: 0
    },
    ...animatePosition && {
      transition: transition2,
      animateOnly: ["transform"],
      animatePresence: false
    },
    children: /* @__PURE__ */ jsx36(PopperArrowFrame, {
      width: size4,
      height: size4,
      ...arrowProps,
      ...innerArrowStyle,
      rotate: "45deg",
      ...primaryPlacement === "bottom" && {
        borderLeftWidth: borderWidth,
        borderTopWidth: borderWidth
      },
      ...primaryPlacement === "top" && {
        borderBottomWidth: borderWidth,
        borderRightWidth: borderWidth
      },
      ...primaryPlacement === "right" && {
        borderLeftWidth: borderWidth,
        borderBottomWidth: borderWidth
      },
      ...primaryPlacement === "left" && {
        borderTopWidth: borderWidth,
        borderRightWidth: borderWidth
      }
    })
  });
});

// node_modules/@tamagui/roving-focus/dist/esm/RovingFocusGroup.mjs
import { Slot as Slot3, View as View13, createStyledContext as createStyledContext13, useEvent as useEvent3 } from "@tamagui/core";
import * as React48 from "react";
import { jsx as jsx37 } from "react/jsx-runtime";
var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var EVENT_OPTIONS2 = {
  bubbles: false,
  cancelable: true
};
var RovingFocusGroupImpl = React48.forwardRef((props, forwardedRef) => {
  const {
    __scopeRovingFocusGroup,
    orientation,
    loop = false,
    dir,
    currentTabStopId: currentTabStopIdProp,
    defaultCurrentTabStopId,
    onCurrentTabStopIdChange,
    onEntryFocus,
    asChild,
    ...groupProps
  } = props, ref = React48.useRef(null), composedRefs = useComposedRefs(forwardedRef, ref), direction = useDirection(dir), [currentTabStopId = null, setCurrentTabStopId] = useControllableState({
    prop: currentTabStopIdProp,
    defaultProp: defaultCurrentTabStopId ?? null,
    onChange: onCurrentTabStopIdChange
  }), [isTabbingBackOut, setIsTabbingBackOut] = React48.useState(false), handleEntryFocus = useEvent3(onEntryFocus), getItems = useCollection2(__scopeRovingFocusGroup || ROVING_FOCUS_GROUP_CONTEXT), isClickFocusRef = React48.useRef(false), [focusableItemsCount, setFocusableItemsCount] = React48.useState(0), Comp = asChild ? Slot3 : View13;
  return /* @__PURE__ */ jsx37(RovingFocusProvider, {
    scope: __scopeRovingFocusGroup,
    orientation,
    dir: direction,
    loop,
    currentTabStopId,
    onItemFocus: React48.useCallback((tabStopId) => setCurrentTabStopId(tabStopId), [setCurrentTabStopId]),
    onItemShiftTab: React48.useCallback(() => setIsTabbingBackOut(true), []),
    onFocusableItemAdd: React48.useCallback(() => setFocusableItemsCount((prevCount) => prevCount + 1), []),
    onFocusableItemRemove: React48.useCallback(() => setFocusableItemsCount((prevCount) => prevCount - 1), []),
    children: /* @__PURE__ */ jsx37(Comp, {
      tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
      "data-orientation": orientation,
      ...groupProps,
      ref: composedRefs,
      outlineStyle: "none",
      onMouseDown: composeEventHandlers(props.onMouseDown, () => {
        isClickFocusRef.current = true;
      }),
      onFocus: composeEventHandlers(props.onFocus, (event) => {
        const isKeyboardFocus = !isClickFocusRef.current;
        if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
          const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS2);
          if (handleEntryFocus(entryFocusEvent), !entryFocusEvent.defaultPrevented) {
            const items = getItems().filter((item) => item.focusable), activeItem = items.find((item) => item.active), currentItem = items.find((item) => item.id === currentTabStopId), candidateNodes = [activeItem, currentItem, ...items].filter(Boolean).map((item) => item.ref.current);
            focusFirst2(candidateNodes, {
              focusVisible: false
            });
          }
        }
        isClickFocusRef.current = false;
      }),
      onBlur: composeEventHandlers(props.onBlur, () => setIsTabbingBackOut(false))
    })
  });
});
var ITEM_NAME2 = "RovingFocusGroupItem";
var RovingFocusGroupItem = React48.forwardRef((props, forwardedRef) => {
  const {
    __scopeRovingFocusGroup,
    focusable = true,
    active = false,
    tabStopId,
    ...itemProps
  } = props, autoId = React48.useId(), id = tabStopId || autoId, context4 = useRovingFocusContext(__scopeRovingFocusGroup), isCurrentTabStop = context4.currentTabStopId === id, getItems = useCollection2(__scopeRovingFocusGroup || ROVING_FOCUS_GROUP_CONTEXT), {
    onFocusableItemAdd,
    onFocusableItemRemove
  } = context4;
  return React48.useEffect(() => {
    if (focusable) return onFocusableItemAdd(), () => onFocusableItemRemove();
  }, [focusable, onFocusableItemAdd, onFocusableItemRemove]), /* @__PURE__ */ jsx37(Collection2.ItemSlot, {
    scope: __scopeRovingFocusGroup || ROVING_FOCUS_GROUP_CONTEXT,
    id,
    focusable,
    active,
    children: /* @__PURE__ */ jsx37(View13, {
      tabIndex: focusable ? 0 : -1,
      "data-orientation": context4.orientation,
      ...itemProps,
      ref: forwardedRef,
      onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
        focusable ? context4.onItemFocus(id) : event.preventDefault();
      }),
      onFocus: composeEventHandlers(props.onFocus, () => context4.onItemFocus(id)),
      ...isWeb && {
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          if (event.key === "Tab" && event.shiftKey) {
            context4.onItemShiftTab();
            return;
          }
          if (event.target !== event.currentTarget) return;
          const focusIntent = getFocusIntent(event, context4.orientation, context4.dir);
          if (focusIntent !== void 0) {
            event.preventDefault();
            let candidateNodes = getItems().filter((item) => item.focusable).map((item) => item.ref.current);
            if (focusIntent === "last") candidateNodes.reverse();
            else if (focusIntent === "prev" || focusIntent === "next") {
              focusIntent === "prev" && candidateNodes.reverse();
              const currentIndex = candidateNodes.indexOf(event.currentTarget);
              candidateNodes = context4.loop ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
            }
            setTimeout(() => focusFirst2(candidateNodes, {
              focusVisible: true
            }));
          }
        })
      }
    })
  });
});
RovingFocusGroupItem.displayName = ITEM_NAME2;
var GROUP_NAME2 = "RovingFocusGroup";
var [Collection2, useCollection2] = createCollection(GROUP_NAME2);
var {
  Provider: RovingFocusProvider,
  useStyledContext: useRovingFocusContext
} = createStyledContext13();
var ROVING_FOCUS_GROUP_CONTEXT = "RovingFocusGroupContext";
var RovingFocusGroup = withStaticProperties(React48.forwardRef((props, forwardedRef) => /* @__PURE__ */ jsx37(Collection2.Provider, {
  scope: props.__scopeRovingFocusGroup || ROVING_FOCUS_GROUP_CONTEXT,
  children: /* @__PURE__ */ jsx37(Collection2.Slot, {
    scope: props.__scopeRovingFocusGroup || ROVING_FOCUS_GROUP_CONTEXT,
    children: /* @__PURE__ */ jsx37(RovingFocusGroupImpl, {
      ...props,
      ref: forwardedRef
    })
  })
})), {
  Item: RovingFocusGroupItem
});
RovingFocusGroup.displayName = GROUP_NAME2;
var MAP_KEY_TO_FOCUS_INTENT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function getDirectionAwareKey(key, dir) {
  return dir !== "rtl" ? key : key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
__name(getDirectionAwareKey, "getDirectionAwareKey");
function getFocusIntent(event, orientation, dir) {
  const key = getDirectionAwareKey(event.key, dir);
  if (!(orientation === "vertical" && ["ArrowLeft", "ArrowRight"].includes(key)) && !(orientation === "horizontal" && ["ArrowUp", "ArrowDown"].includes(key))) return MAP_KEY_TO_FOCUS_INTENT[key];
}
__name(getFocusIntent, "getFocusIntent");
function focusFirst2(candidates, options) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) if (candidate === PREVIOUSLY_FOCUSED_ELEMENT || (candidate.focus({
    focusVisible: options?.focusVisible
  }), document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)) return;
}
__name(focusFirst2, "focusFirst");
function wrapArray(array, startIndex) {
  return array.map((_, index2) => array[(startIndex + index2) % array.length]);
}
__name(wrapArray, "wrapArray");

// node_modules/@tamagui/create-menu/dist/esm/createBaseMenu.mjs
import { composeEventHandlers as composeEventHandlers3, composeRefs as composeRefs2, createStyledContext as createStyledContext14, isWeb as isWeb3, styled as styled29, Text as Text5, Theme as Theme2, useComposedRefs as useComposedRefs2, useIsTouchDevice, useThemeName as useThemeName4, View as View15, withStaticProperties as withStaticProperties5 } from "@tamagui/web";
import * as React49 from "react";
import { useId as useId12 } from "react";

// node_modules/@tamagui/create-menu/dist/esm/MenuPredefined.mjs
import { styled as styled28, View as View14 } from "@tamagui/web";
var GROUP_NAME3 = "MenuGroup";
var MenuGroup = styled28(View14, {
  name: GROUP_NAME3,
  variants: {
    unstyled: {
      false: {
        role: "group",
        width: "100%",
        borderRadius: 0,
        borderWidth: 0,
        borderColor: "$borderColor",
        overflow: "hidden",
        backgroundColor: "$background"
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var LABEL_NAME = "MenuLabel";
var MenuLabel = styled28(SizableText2, {
  name: LABEL_NAME,
  variants: {
    unstyled: {
      false: {
        cursor: "default",
        color: "$color"
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var SEPARATOR_NAME = "MenuSeparator";
var MenuSeparator = styled28(View14, {
  name: SEPARATOR_NAME,
  role: "separator",
  // @ts-ignore
  "aria-orientation": "horizontal",
  variants: {
    unstyled: {
      false: {
        borderColor: "$borderColor",
        flexShrink: 0,
        borderWidth: 0,
        height: 1,
        marginVertical: 3,
        marginHorizontal: 10,
        backgroundColor: "$borderColor"
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var MenuIcon = styled28(View14, {
  name: "MenuIcon",
  variants: {
    unstyled: {
      false: {
        width: 20,
        height: 20,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "auto"
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var MenuImage = styled28(Image, {
  name: "MenuImage"
});
var MenuIndicator = styled28(View14, {
  name: "MenuIndicator",
  variants: {
    unstyled: {
      false: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "auto"
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var MenuItem = styled28(View14, {
  name: "MenuItem",
  variants: {
    unstyled: {
      false: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 6,
        paddingVertical: 4,
        paddingHorizontal: 8,
        // use focusStyle for highlight since hover triggers focus via onPointerMove
        // this ensures a single unified highlight for both mouse and keyboard
        focusStyle: {
          backgroundColor: "$backgroundHover"
        },
        pressStyle: {
          backgroundColor: "$backgroundPress"
        }
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var Title = styled28(SizableText2, {
  name: "MenuTitle",
  variants: {
    unstyled: {
      false: {
        cursor: "default",
        color: "$color",
        flexGrow: 1,
        flexShrink: 1
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var SubTitle = styled28(SizableText2, {
  name: "MenuSubTitle",
  variants: {
    unstyled: {
      false: {
        cursor: "default",
        color: "$colorFaint"
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var MenuPredefined = {
  MenuIcon,
  MenuImage,
  MenuIndicator,
  MenuItem,
  Title,
  SubTitle,
  MenuGroup,
  MenuSeparator,
  MenuLabel
};

// node_modules/@tamagui/create-menu/dist/esm/createBaseMenu.mjs
import { Fragment as Fragment9, jsx as jsx38, jsxs as jsxs7 } from "react/jsx-runtime";
function whenMouse(handler) {
  return (event) => event.pointerType === "mouse" ? handler(event) : void 0;
}
__name(whenMouse, "whenMouse");
var SELECTION_KEYS = ["Enter", " "];
var FIRST_KEYS = ["ArrowDown", "PageUp", "Home"];
var LAST_KEYS = ["ArrowUp", "PageDown", "End"];
var FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
var SUB_OPEN_KEYS = {
  ltr: [...SELECTION_KEYS, "ArrowRight"],
  rtl: [...SELECTION_KEYS, "ArrowLeft"]
};
var SUB_CLOSE_KEYS = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
var MENU_NAME = "Menu";
var [Collection3, useCollection3] = createCollection(MENU_NAME);
var {
  Provider: MenuProvider,
  useStyledContext: useMenuContext
} = createStyledContext14();
var {
  Provider: MenuRootProvider,
  useStyledContext: useMenuRootContext
} = createStyledContext14();
var MENU_CONTEXT = "MenuContext";
function createBaseMenu({
  Item: _Item = MenuPredefined.MenuItem,
  Title: _Title = MenuPredefined.Title,
  SubTitle: _SubTitle = MenuPredefined.SubTitle,
  Image: _Image = MenuPredefined.MenuImage,
  Icon: _Icon = MenuPredefined.MenuIcon,
  Indicator: _Indicator = MenuPredefined.MenuIndicator,
  Separator: _Separator = MenuPredefined.MenuSeparator,
  MenuGroup: _MenuGroup = MenuPredefined.MenuGroup,
  Label: _Label = MenuPredefined.MenuLabel
}) {
  const MenuComp = /* @__PURE__ */ __name((props) => {
    const direction = useDirection(props.dir), defaultPlacement = direction === "rtl" ? "bottom-end" : "bottom-start", {
      scope = MENU_CONTEXT,
      open: open2 = false,
      children,
      dir,
      onOpenChange,
      modal = true,
      allowFlip = {
        padding: 10
      },
      stayInFrame = {
        padding: 10
      },
      placement = defaultPlacement,
      resize = true,
      offset: offset4 = 10,
      ...rest
    } = props, [content, setContent] = React49.useState(null), isUsingKeyboardRef = React49.useRef(false), handleOpenChange = useCallbackRef(onOpenChange);
    return isWeb3 && React49.useEffect(() => {
      const handleKeyDown = /* @__PURE__ */ __name(() => {
        isUsingKeyboardRef.current = true, document.addEventListener("pointerdown", handlePointer, {
          capture: true,
          once: true
        }), document.addEventListener("pointermove", handlePointer, {
          capture: true,
          once: true
        });
      }, "handleKeyDown"), handlePointer = /* @__PURE__ */ __name(() => isUsingKeyboardRef.current = false, "handlePointer");
      return document.addEventListener("keydown", handleKeyDown, {
        capture: true
      }), () => {
        document.removeEventListener("keydown", handleKeyDown, {
          capture: true
        }), document.removeEventListener("pointerdown", handlePointer, {
          capture: true
        }), document.removeEventListener("pointermove", handlePointer, {
          capture: true
        });
      };
    }, []), /* @__PURE__ */ jsx38(Popper, {
      scope,
      open: open2,
      placement,
      allowFlip,
      stayInFrame,
      resize,
      offset: offset4,
      ...rest,
      children: /* @__PURE__ */ jsx38(MenuProvider, {
        scope,
        open: open2,
        onOpenChange: handleOpenChange,
        content,
        onContentChange: setContent,
        children: /* @__PURE__ */ jsx38(MenuRootProvider, {
          scope,
          open: open2,
          onClose: React49.useCallback(() => handleOpenChange(false), [handleOpenChange]),
          isUsingKeyboardRef,
          dir: direction,
          modal,
          children: /* @__PURE__ */ jsx38(MenuSubProvider, {
            scope,
            children
          })
        })
      })
    });
  }, "MenuComp"), RepropagateMenuAndMenuRootProvider = /* @__PURE__ */ __name((props) => {
    const {
      scope = MENU_CONTEXT,
      menuContext,
      rootContext,
      popperContext,
      menuSubContext,
      children
    } = props;
    return /* @__PURE__ */ jsx38(PopperProvider, {
      ...popperContext,
      scope,
      children: /* @__PURE__ */ jsx38(MenuProvider, {
        scope,
        ...menuContext,
        children: /* @__PURE__ */ jsx38(MenuRootProvider, {
          scope,
          ...rootContext,
          children: menuSubContext ? /* @__PURE__ */ jsx38(MenuSubProvider, {
            scope,
            ...menuSubContext,
            children
          }) : children
        })
      })
    });
  }, "RepropagateMenuAndMenuRootProvider");
  MenuComp.displayName = MENU_NAME;
  const ANCHOR_NAME = "MenuAnchor", MenuAnchor = /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsx38(PopperAnchor, {
    scope: MENU_CONTEXT,
    ...props
  }), "MenuAnchor");
  MenuAnchor.displayName = ANCHOR_NAME;
  const PORTAL_NAME = "MenuPortal", {
    Provider: PortalProvider2,
    useStyledContext: usePortalContext
  } = createStyledContext14(void 0, "Portal"), MenuPortal = /* @__PURE__ */ __name((props) => {
    const {
      scope = MENU_CONTEXT,
      forceMount,
      zIndex,
      children
    } = props, menuContext = useMenuContext(scope), rootContext = useMenuRootContext(scope), popperContext = usePopperContext(scope), menuSubContext = useMenuSubContext(scope), themeName = useThemeName4(), themedChildren = /* @__PURE__ */ jsx38(Theme2, {
      forceClassName: true,
      name: themeName,
      children
    }), content = needsPortalRepropagation() ? /* @__PURE__ */ jsx38(RepropagateMenuAndMenuRootProvider, {
      menuContext,
      rootContext,
      popperContext,
      menuSubContext,
      scope,
      children: themedChildren
    }) : themedChildren, isPresent2 = forceMount || rootContext.open && menuContext.open;
    return /* @__PURE__ */ jsx38(Animate, {
      type: "presence",
      present: isPresent2,
      children: /* @__PURE__ */ jsx38(Portal, {
        stackZIndex: true,
        children: /* @__PURE__ */ jsx38(Fragment9, {
          children: /* @__PURE__ */ jsx38(PortalProvider2, {
            scope,
            forceMount,
            children: /* @__PURE__ */ jsxs7(View15, {
              zIndex: zIndex || 100,
              inset: 0,
              position: "absolute",
              children: [!!menuContext.open && !isWeb3 && /* @__PURE__ */ jsx38(View15, {
                inset: 0,
                position: "absolute",
                onPress: /* @__PURE__ */ __name(() => menuContext.onOpenChange(!menuContext.open), "onPress")
              }), content]
            })
          })
        })
      })
    });
  }, "MenuPortal");
  MenuPortal.displayName = PORTAL_NAME;
  const CONTENT_NAME5 = "MenuContent", {
    Provider: MenuContentProvider,
    useStyledContext: useMenuContentContext
  } = createStyledContext14(), MenuContent = styled29(PopperContentFrame, {
    name: CONTENT_NAME5
  }).styleable((props, forwardedRef) => {
    const scope = props.scope || MENU_CONTEXT, portalContext = usePortalContext(scope), {
      forceMount = portalContext.forceMount,
      ...contentProps
    } = props, rootContext = useMenuRootContext(scope);
    return /* @__PURE__ */ jsx38(Collection3.Provider, {
      scope,
      children: /* @__PURE__ */ jsx38(Collection3.Slot, {
        scope,
        children: rootContext.modal ? /* @__PURE__ */ jsx38(MenuRootContentModal, {
          ...contentProps,
          ref: forwardedRef
        }) : /* @__PURE__ */ jsx38(MenuRootContentNonModal, {
          ...contentProps,
          ref: forwardedRef
        })
      })
    });
  }), MenuRootContentModal = React49.forwardRef((props, forwardedRef) => {
    const scope = props.scope || MENU_CONTEXT, context4 = useMenuContext(scope), ref = React49.useRef(null), composedRefs = useComposedRefs2(forwardedRef, ref);
    return /* @__PURE__ */ jsx38(MenuContentImpl, {
      ...props,
      scope,
      ref: composedRefs,
      trapFocus: context4.open,
      disableOutsidePointerEvents: context4.open,
      disableOutsideScroll: false,
      onFocusOutside: composeEventHandlers3(props.onFocusOutside, (event) => event.preventDefault(), {
        checkDefaultPrevented: false
      }),
      onDismiss: /* @__PURE__ */ __name(() => context4.onOpenChange(false), "onDismiss")
    });
  }), MenuRootContentNonModal = React49.forwardRef((props, forwardedRef) => {
    const scope = props.scope || MENU_CONTEXT, context4 = useMenuContext(scope);
    return /* @__PURE__ */ jsx38(MenuContentImpl, {
      ...props,
      scope,
      ref: forwardedRef,
      trapFocus: false,
      disableOutsidePointerEvents: false,
      disableOutsideScroll: false,
      onDismiss: /* @__PURE__ */ __name(() => context4.onOpenChange(false), "onDismiss")
    });
  }), MenuContentImpl = React49.forwardRef((props, forwardedRef) => {
    const {
      scope = MENU_CONTEXT,
      loop = false,
      trapFocus,
      onOpenAutoFocus,
      onCloseAutoFocus,
      disableOutsidePointerEvents,
      onEntryFocus,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss,
      disableOutsideScroll,
      disableDismissOnScroll = false,
      unstyled = process.env.TAMAGUI_HEADLESS === "1",
      ...contentProps
    } = props, context4 = useMenuContext(scope), rootContext = useMenuRootContext(scope), getItems = useCollection3(scope), [currentItemId, setCurrentItemId] = React49.useState(null), contentRef = React49.useRef(null), focusableContentRef = React49.useRef(null), composedRefs = useComposedRefs2(forwardedRef, contentRef, context4.onContentChange), timerRef = React49.useRef(0), searchRef = React49.useRef(""), pointerGraceTimerRef = React49.useRef(0), pointerGraceIntentRef = React49.useRef(null), pointerDirRef = React49.useRef("right"), lastPointerXRef = React49.useRef(0), handleTypeaheadSearch = /* @__PURE__ */ __name((key) => {
      const search = searchRef.current + key, items = getItems().filter((item) => !item.disabled), currentItem = document.activeElement, currentMatch = items.find((item) => item.ref.current === currentItem)?.textValue, values = items.map((item) => item.textValue), nextMatch = getNextMatch(values, search, currentMatch), newItem = items.find((item) => item.textValue === nextMatch)?.ref.current;
      (/* @__PURE__ */ __name((function updateSearch(value) {
        searchRef.current = value, clearTimeout(timerRef.current), value !== "" && (timerRef.current = setTimeout(() => updateSearch(""), 1e3));
      }), "updateSearch"))(search), newItem && setTimeout(() => newItem.focus());
    }, "handleTypeaheadSearch");
    React49.useEffect(() => () => clearTimeout(timerRef.current), []), React49.useEffect(() => {
      if (!isWeb3 || !context4.open) return;
      const frame = requestAnimationFrame(() => {
        const el = contentRef.current?.querySelector("[data-tamagui-menu-content]");
        el && (focusableContentRef.current = el);
      });
      return () => cancelAnimationFrame(frame);
    }, [context4.open]), React49.useEffect(() => {
      if (!isWeb3 || disableDismissOnScroll || !context4.open) return;
      const handleScroll = /* @__PURE__ */ __name((event) => {
        const target = event.target;
        contentRef.current?.contains(target) || onDismiss?.();
      }, "handleScroll");
      return window.addEventListener("scroll", handleScroll, {
        capture: true,
        passive: true
      }), () => {
        window.removeEventListener("scroll", handleScroll, {
          capture: true
        });
      };
    }, [disableDismissOnScroll, context4.open, onDismiss]), isWeb3 && useFocusGuards();
    const isPointerMovingToSubmenu = React49.useCallback((event) => {
      const isMovingTowards = pointerDirRef.current === pointerGraceIntentRef.current?.side, inArea = isPointerInGraceArea(event, pointerGraceIntentRef.current?.area);
      return isMovingTowards && inArea;
    }, []), content = /* @__PURE__ */ jsx38(PopperContent, {
      role: "menu",
      tabIndex: -1,
      unstyled,
      ...!unstyled && {
        backgroundColor: "$background",
        borderWidth: 1,
        borderColor: "$borderColor",
        outlineWidth: 0,
        minWidth: 180
      },
      "aria-orientation": "vertical",
      "data-state": getOpenState(context4.open),
      "data-tamagui-menu-content": "",
      dir: rootContext.dir,
      scope: scope || MENU_CONTEXT,
      ...contentProps,
      ref: composedRefs,
      className: contentProps.transition ? void 0 : contentProps.className,
      ...isWeb3 ? {
        onKeyDown: composeEventHandlers3(contentProps.onKeyDown, (event) => {
          const isKeyDownInside = event.target.closest("[data-tamagui-menu-content]") === event.currentTarget, isModifierKey = event.ctrlKey || event.altKey || event.metaKey, isCharacterKey = event.key.length === 1;
          isKeyDownInside && (event.key === "Tab" && event.preventDefault(), !isModifierKey && isCharacterKey && handleTypeaheadSearch(event.key));
          const isOnContentFrame = event.target.hasAttribute("data-tamagui-menu-content");
          if (!isKeyDownInside || !isOnContentFrame || !FIRST_LAST_KEYS.includes(event.key)) return;
          event.preventDefault();
          const candidateNodes = getItems().filter((item) => !item.disabled).map((item) => item.ref.current);
          LAST_KEYS.includes(event.key) && candidateNodes.reverse(), focusFirst3(candidateNodes, {
            focusVisible: true
          });
        }),
        // TODO
        // @ts-ignore
        onBlur: composeEventHandlers3(props.onBlur, (event) => {
          event.currentTarget?.contains(event.target) || (clearTimeout(timerRef.current), searchRef.current = "");
        }),
        // TODO
        onPointerMove: composeEventHandlers3(props.onPointerMove, (event) => {
          if (event.pointerType !== "mouse") return;
          const target = event.target, pointerXHasChanged = lastPointerXRef.current !== event.clientX;
          if (event.currentTarget?.contains(target) && pointerXHasChanged) {
            const newDir = event.clientX > lastPointerXRef.current ? "right" : "left";
            pointerDirRef.current = newDir, lastPointerXRef.current = event.clientX;
          }
        })
      } : {}
    });
    return /* @__PURE__ */ jsx38(MenuContentProvider, {
      scope,
      searchRef,
      onItemEnter: React49.useCallback((event) => {
        isPointerMovingToSubmenu(event) && event.preventDefault();
      }, [isPointerMovingToSubmenu]),
      onItemLeave: React49.useCallback((event) => {
        isPointerMovingToSubmenu(event) || (focusableContentRef.current?.focus(), setCurrentItemId(null));
      }, [isPointerMovingToSubmenu]),
      onTriggerLeave: React49.useCallback((event) => {
        isPointerMovingToSubmenu(event) && event.preventDefault();
      }, [isPointerMovingToSubmenu]),
      pointerGraceTimerRef,
      onPointerGraceIntentChange: React49.useCallback((intent) => {
        pointerGraceIntentRef.current = intent;
      }, []),
      children: /* @__PURE__ */ jsx38(RemoveScroll, {
        enabled: disableOutsideScroll,
        children: /* @__PURE__ */ jsx38(FocusScope, {
          asChild: false,
          trapped: trapFocus,
          onMountAutoFocus: composeEventHandlers3(onOpenAutoFocus, (event) => {
            event.preventDefault(), document.querySelector("[data-tamagui-menu-content]")?.focus({
              preventScroll: true
            });
          }),
          onUnmountAutoFocus: onCloseAutoFocus,
          children: /* @__PURE__ */ jsx38(Dismissable, {
            disableOutsidePointerEvents,
            onEscapeKeyDown,
            onPointerDownOutside,
            onFocusOutside,
            onInteractOutside,
            onDismiss,
            asChild: true,
            children: /* @__PURE__ */ jsx38(RovingFocusGroup, {
              asChild: true,
              __scopeRovingFocusGroup: scope || MENU_CONTEXT,
              dir: rootContext.dir,
              orientation: "vertical",
              loop,
              currentTabStopId: currentItemId,
              onCurrentTabStopIdChange: setCurrentItemId,
              onEntryFocus: composeEventHandlers3(onEntryFocus, (event) => {
                rootContext.isUsingKeyboardRef.current || event.preventDefault();
              }),
              children: content
            })
          })
        })
      })
    });
  });
  MenuContent.displayName = CONTENT_NAME5;
  const ITEM_NAME4 = "MenuItem", ITEM_SELECT = "menu.itemSelect", MenuItem2 = _Item.styleable((props, forwardedRef) => {
    const {
      disabled = false,
      onSelect,
      preventCloseOnSelect,
      children,
      scope = MENU_CONTEXT,
      // filter out native-only props that shouldn't reach the DOM
      // @ts-ignore
      destructive,
      // @ts-ignore
      hidden,
      // @ts-ignore
      androidIconName,
      // @ts-ignore
      iosIconName,
      ...itemProps
    } = props, ref = React49.useRef(null), rootContext = useMenuRootContext(scope), contentContext = useMenuContentContext(scope), composedRefs = useComposedRefs2(forwardedRef, ref), isPointerDownRef = React49.useRef(false), handleSelect = /* @__PURE__ */ __name(() => {
      const menuItem = ref.current;
      if (!disabled && menuItem) if (isWeb3) {
        const menuItemEl = menuItem, itemSelectEvent = new CustomEvent(ITEM_SELECT, {
          bubbles: true,
          cancelable: true
        });
        menuItemEl.addEventListener(ITEM_SELECT, (event) => onSelect?.(event), {
          once: true
        }), dispatchDiscreteCustomEvent(menuItemEl, itemSelectEvent), itemSelectEvent.defaultPrevented || preventCloseOnSelect ? isPointerDownRef.current = false : rootContext.onClose();
      } else onSelect?.({
        target: menuItem
      }), isPointerDownRef.current = false, preventCloseOnSelect || rootContext.onClose();
    }, "handleSelect"), content = typeof children == "string" ? /* @__PURE__ */ jsx38(Text5, {
      children
    }) : children;
    return /* @__PURE__ */ jsx38(MenuItemImpl, {
      outlineStyle: "none",
      ...itemProps,
      scope,
      ref: composedRefs,
      disabled,
      onPress: composeEventHandlers3(props.onPress, handleSelect),
      onPointerDown: /* @__PURE__ */ __name((event) => {
        props.onPointerDown?.(event), isPointerDownRef.current = true;
      }, "onPointerDown"),
      onPointerUp: composeEventHandlers3(props.onPointerUp, (event) => {
        isWeb3 && (isPointerDownRef.current || event.currentTarget?.click());
      }),
      ...isWeb3 ? {
        onKeyDown: composeEventHandlers3(props.onKeyDown, (event) => {
          const isTypingAhead = contentContext.searchRef.current !== "";
          disabled || isTypingAhead && event.key === " " || SELECTION_KEYS.includes(event.key) && (event.currentTarget?.click(), event.preventDefault());
        })
      } : {},
      children: content
    });
  }), MenuItemImpl = React49.forwardRef((props, forwardedRef) => {
    const {
      scope = MENU_CONTEXT,
      disabled = false,
      textValue,
      unstyled = process.env.TAMAGUI_HEADLESS === "1",
      ...itemProps
    } = props, contentContext = useMenuContentContext(scope), ref = React49.useRef(null), composedRefs = useComposedRefs2(forwardedRef, ref), [isFocused, setIsFocused] = React49.useState(false), [textContent, setTextContent] = React49.useState("");
    return isWeb3 && React49.useEffect(() => {
      const menuItem = ref.current;
      menuItem && setTextContent((menuItem.textContent ?? "").trim());
    }, [itemProps.children]), /* @__PURE__ */ jsx38(Collection3.ItemSlot, {
      scope,
      disabled,
      textValue: textValue ?? textContent,
      children: /* @__PURE__ */ jsx38(RovingFocusGroup.Item, {
        asChild: true,
        __scopeRovingFocusGroup: scope,
        focusable: !disabled,
        children: /* @__PURE__ */ jsx38(_Item, {
          unstyled,
          componentName: ITEM_NAME4,
          role: "menuitem",
          "data-highlighted": isFocused ? "" : void 0,
          "aria-disabled": disabled || void 0,
          "data-disabled": disabled ? "" : void 0,
          ...itemProps,
          ref: composedRefs,
          onPointerMove: composeEventHandlers3(props.onPointerMove, (event) => {
            event.pointerType === "mouse" && (disabled ? contentContext.onItemLeave(event) : (contentContext.onItemEnter(event), event.defaultPrevented || event.currentTarget.focus({
              preventScroll: true,
              focusVisible: false
            })));
          }),
          onPointerLeave: composeEventHandlers3(props.onPointerLeave, (event) => {
            contentContext.onItemLeave(event);
          }),
          onFocus: composeEventHandlers3(props.onFocus, () => setIsFocused(true)),
          onBlur: composeEventHandlers3(props.onBlur, () => setIsFocused(false))
        })
      })
    });
  });
  MenuItem2.displayName = ITEM_NAME4;
  const ITEM_TITLE_NAME = "MenuItemTitle", MenuItemTitle = _Title.styleable((props, forwardedRef) => /* @__PURE__ */ jsx38(_Title, {
    ...props,
    ref: forwardedRef
  }));
  MenuItemTitle.displayName = ITEM_TITLE_NAME;
  const ITEM_SUB_TITLE_NAME = "MenuItemSubTitle", MenuItemSubTitle = _SubTitle.styleable((props, forwardedRef) => /* @__PURE__ */ jsx38(_SubTitle, {
    ...props,
    ref: forwardedRef
  }));
  MenuItemSubTitle.displayName = ITEM_SUB_TITLE_NAME;
  const ITEM_IMAGE = "MenuItemImage", MenuItemImage = React49.forwardRef((props, forwardedRef) => {
    const {
      // @ts-ignore - native menu ios config
      ios,
      // @ts-ignore
      androidIconName,
      // @ts-ignore
      iosIconName,
      ...rest
    } = props;
    return /* @__PURE__ */ jsx38(_Image, {
      ...rest,
      ref: forwardedRef
    });
  });
  MenuItemImage.displayName = ITEM_IMAGE;
  const ITEM_ICON = "MenuItemIcon", MenuItemIcon = _Icon.styleable((props, forwardedRef) => {
    const {
      // @ts-ignore
      ios,
      // @ts-ignore
      android,
      // @ts-ignore
      androidIconName,
      // @ts-ignore
      iosIconName,
      ...rest
    } = props;
    return /* @__PURE__ */ jsx38(_Icon, {
      ...rest,
      ref: forwardedRef
    });
  });
  MenuItemIcon.displayName = ITEM_ICON;
  const CHECKBOX_ITEM_NAME = "MenuCheckboxItem", MenuCheckboxItem = _Item.styleable((props, forwardedRef) => {
    const {
      checked = false,
      onCheckedChange,
      scope = MENU_CONTEXT,
      // filter out native-only props
      // @ts-ignore - native menu value state
      value,
      // @ts-ignore - native menu value change handler
      onValueChange,
      ...checkboxItemProps
    } = props;
    return /* @__PURE__ */ jsx38(ItemIndicatorProvider, {
      scope,
      checked,
      children: /* @__PURE__ */ jsx38(MenuItem2, {
        componentName: CHECKBOX_ITEM_NAME,
        role: isWeb3 ? "menuitemcheckbox" : "menuitem",
        "aria-checked": isIndeterminate2(checked) ? "mixed" : checked,
        ...checkboxItemProps,
        scope,
        ref: forwardedRef,
        "data-state": getCheckedState(checked),
        onSelect: composeEventHandlers3(checkboxItemProps.onSelect, () => onCheckedChange?.(isIndeterminate2(checked) ? true : !checked), {
          checkDefaultPrevented: false
        })
      })
    });
  });
  MenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME;
  const RADIO_GROUP_NAME2 = "MenuRadioGroup", {
    Provider: RadioGroupProvider,
    useStyledContext: useRadioGroupContext
  } = createStyledContext14(), MenuRadioGroup = _MenuGroup.styleable((props, forwardedRef) => {
    const {
      value,
      onValueChange,
      scope = MENU_CONTEXT,
      ...groupProps
    } = props, handleValueChange = useCallbackRef(onValueChange);
    return /* @__PURE__ */ jsx38(RadioGroupProvider, {
      scope,
      value,
      onValueChange: handleValueChange,
      children: /* @__PURE__ */ jsx38(_MenuGroup, {
        componentName: RADIO_GROUP_NAME2,
        ...groupProps,
        ref: forwardedRef
      })
    });
  });
  MenuRadioGroup.displayName = RADIO_GROUP_NAME2;
  const RADIO_ITEM_NAME = "MenuRadioItem", MenuRadioItem = _Item.styleable((props, forwardedRef) => {
    const {
      value,
      scope = MENU_CONTEXT,
      ...radioItemProps
    } = props, context4 = useRadioGroupContext(scope), checked = value === context4.value;
    return /* @__PURE__ */ jsx38(ItemIndicatorProvider, {
      scope,
      checked,
      children: /* @__PURE__ */ jsx38(MenuItem2, {
        componentName: RADIO_ITEM_NAME,
        ...radioItemProps,
        scope,
        "aria-checked": checked,
        ref: forwardedRef,
        role: isWeb3 ? "menuitemradio" : "menuitem",
        "data-state": getCheckedState(checked),
        onSelect: composeEventHandlers3(radioItemProps.onSelect, () => context4.onValueChange?.(value), {
          checkDefaultPrevented: false
        })
      })
    });
  });
  MenuRadioItem.displayName = RADIO_ITEM_NAME;
  const ITEM_INDICATOR_NAME = "MenuItemIndicator", {
    Provider: ItemIndicatorProvider,
    useStyledContext: useItemIndicatorContext
  } = createStyledContext14(), MenuItemIndicator = _Indicator.styleable((props, forwardedRef) => {
    const {
      scope = MENU_CONTEXT,
      forceMount,
      ...itemIndicatorProps
    } = props, indicatorContext = useItemIndicatorContext(scope);
    return /* @__PURE__ */ jsx38(AnimatePresence, {
      children: forceMount || isIndeterminate2(indicatorContext.checked) || indicatorContext.checked === true ? /* @__PURE__ */ jsx38(_Indicator, {
        componentName: ITEM_INDICATOR_NAME,
        render: "span",
        ...itemIndicatorProps,
        ref: forwardedRef,
        "data-state": getCheckedState(indicatorContext.checked)
      }) : null
    });
  });
  MenuItemIndicator.displayName = ITEM_INDICATOR_NAME;
  const MenuArrow = React49.forwardRef(function(props, forwardedRef) {
    const {
      scope = MENU_CONTEXT,
      unstyled = process.env.TAMAGUI_HEADLESS === "1",
      ...rest
    } = props;
    return /* @__PURE__ */ jsx38(PopperArrow, {
      scope,
      componentName: "PopperArrow",
      unstyled,
      ...!unstyled && {
        backgroundColor: "$background"
      },
      ...rest,
      ref: forwardedRef
    });
  }), SUB_NAME = "MenuSub", {
    Provider: MenuSubProvider,
    useStyledContext: useMenuSubContext
  } = createStyledContext14(), MenuSub = /* @__PURE__ */ __name((props) => {
    const isTouchDevice = useIsTouchDevice(), {
      scope = MENU_CONTEXT
    } = props, rootContext = useMenuRootContext(scope), parentSide = usePopperContext(scope).placement?.split("-")[0], isNestedSubmenu = parentSide === "left" || parentSide === "right", defaultPlacement = isTouchDevice ? "bottom" : isNestedSubmenu ? `${parentSide}-start` : rootContext.dir === "rtl" ? "left-start" : "right-start", {
      children,
      open: open2 = false,
      onOpenChange,
      allowFlip: allowFlipProp = {
        padding: 10
      },
      stayInFrame = {
        padding: 10
      },
      placement = defaultPlacement,
      ...rest
    } = props, allowFlip = React49.useMemo(() => {
      if (!isNestedSubmenu || typeof allowFlipProp == "boolean" || allowFlipProp.fallbackPlacements) return allowFlipProp;
      const side = placement.split("-")[0], align = placement.split("-")[1] || "start", otherAlign = align === "start" ? "end" : "start";
      if (side === "left" || side === "right") {
        const oppositeSide = side === "right" ? "left" : "right";
        return {
          ...typeof allowFlipProp == "object" ? allowFlipProp : {},
          fallbackPlacements: [`${side}-${otherAlign}`, `${oppositeSide}-${align}`, `${oppositeSide}-${otherAlign}`]
        };
      }
      return allowFlipProp;
    }, [isNestedSubmenu, allowFlipProp, placement]), parentMenuContext = useMenuContext(scope), [trigger, setTrigger] = React49.useState(null), [content, setContent] = React49.useState(null), handleOpenChange = useCallbackRef(onOpenChange);
    return React49.useEffect(() => (parentMenuContext.open === false && handleOpenChange(false), () => handleOpenChange(false)), [parentMenuContext.open, handleOpenChange]), /* @__PURE__ */ jsx38(Popper, {
      open: open2,
      placement,
      allowFlip,
      stayInFrame,
      ...rest,
      scope,
      children: /* @__PURE__ */ jsx38(MenuProvider, {
        scope,
        open: open2,
        onOpenChange: handleOpenChange,
        content,
        onContentChange: setContent,
        children: /* @__PURE__ */ jsx38(MenuSubProvider, {
          scope,
          contentId: useId12(),
          triggerId: useId12(),
          trigger,
          onTriggerChange: setTrigger,
          children
        })
      })
    });
  }, "MenuSub");
  MenuSub.displayName = SUB_NAME;
  const SUB_TRIGGER_NAME = "MenuSubTrigger", MenuSubTrigger = React49.forwardRef((props, forwardedRef) => {
    const scope = props.scope || MENU_CONTEXT, context4 = useMenuContext(scope), rootContext = useMenuRootContext(scope), subContext = useMenuSubContext(scope), contentContext = useMenuContentContext(scope), popperContext = usePopperContext(scope), openTimerRef = React49.useRef(null), {
      pointerGraceTimerRef,
      onPointerGraceIntentChange
    } = contentContext, effectiveDir = rootContext.dir, clearOpenTimer = React49.useCallback(() => {
      openTimerRef.current && window.clearTimeout(openTimerRef.current), openTimerRef.current = null;
    }, []);
    return React49.useEffect(() => clearOpenTimer, [clearOpenTimer]), React49.useEffect(() => {
      const pointerGraceTimer = pointerGraceTimerRef.current;
      return () => {
        window.clearTimeout(pointerGraceTimer), onPointerGraceIntentChange(null);
      };
    }, [pointerGraceTimerRef, onPointerGraceIntentChange]), /* @__PURE__ */ jsx38(MenuAnchor, {
      componentName: SUB_TRIGGER_NAME,
      asChild: "except-style",
      scope,
      children: /* @__PURE__ */ jsx38(MenuItemImpl, {
        id: subContext.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": context4.open,
        "aria-controls": subContext.contentId,
        "data-state": getOpenState(context4.open),
        outlineStyle: "none",
        ...props,
        ref: composeRefs2(forwardedRef, subContext.onTriggerChange),
        onPress: /* @__PURE__ */ __name((event) => {
          props.onPress?.(event), !(props.disabled || event.defaultPrevented) && (isWeb3 && event.currentTarget.focus(), context4.open || context4.onOpenChange(true));
        }, "onPress"),
        onPointerMove: composeEventHandlers3(
          props.onPointerMove,
          // @ts-ignore
          whenMouse((event) => {
            contentContext.onItemEnter(event), !event.defaultPrevented && !props.disabled && !context4.open && !openTimerRef.current && (contentContext.onPointerGraceIntentChange(null), openTimerRef.current = window.setTimeout(() => {
              context4.onOpenChange(true), clearOpenTimer();
            }, 100));
          })
        ),
        onPointerLeave: composeEventHandlers3(props.onPointerLeave, (eventIn) => {
          const event = eventIn;
          clearOpenTimer();
          const contentRect = context4.content?.getBoundingClientRect();
          if (contentRect) {
            const contentEl = context4.content, side = (contentEl?.dataset?.side ? contentEl : contentEl?.querySelector("[data-side]"))?.dataset?.side || "right", rightSide = side === "right", bleed = rightSide ? -5 : 5, contentNearEdge = contentRect[rightSide ? "left" : "right"], contentFarEdge = contentRect[rightSide ? "right" : "left"], polygon = {
              area: [
                // Apply a bleed on clientX to ensure that our exit point is
                // consistently within polygon bounds
                {
                  x: event.clientX + bleed,
                  y: event.clientY
                },
                {
                  x: contentNearEdge,
                  y: contentRect.top
                },
                {
                  x: contentFarEdge,
                  y: contentRect.top
                },
                {
                  x: contentFarEdge,
                  y: contentRect.bottom
                },
                {
                  x: contentNearEdge,
                  y: contentRect.bottom
                }
              ],
              side
            };
            contentContext.onPointerGraceIntentChange(polygon), window.clearTimeout(pointerGraceTimerRef.current), pointerGraceTimerRef.current = window.setTimeout(() => contentContext.onPointerGraceIntentChange(null), 300);
          } else if (isWeb3 && subContext.trigger) {
            const triggerRect = subContext.trigger?.getBoundingClientRect();
            if (triggerRect) {
              const placementSide = popperContext.placement?.split("-")[0], side = placementSide === "left" || placementSide === "right" ? placementSide : rootContext.dir === "rtl" ? "left" : "right", rightSide = side === "right", bleed = rightSide ? -5 : 5, nearEdge = rightSide ? triggerRect.right + 4 : triggerRect.left - 4, farEdge = rightSide ? nearEdge + 200 : nearEdge - 200, polygon = {
                area: [{
                  x: event.clientX + bleed,
                  y: event.clientY
                }, {
                  x: nearEdge,
                  y: triggerRect.top - 50
                }, {
                  x: farEdge,
                  y: triggerRect.top - 50
                }, {
                  x: farEdge,
                  y: triggerRect.bottom + 50
                }, {
                  x: nearEdge,
                  y: triggerRect.bottom + 50
                }],
                side
              };
              contentContext.onPointerGraceIntentChange(polygon), window.clearTimeout(pointerGraceTimerRef.current), pointerGraceTimerRef.current = window.setTimeout(() => contentContext.onPointerGraceIntentChange(null), 300);
            }
          } else {
            if (contentContext.onTriggerLeave(event), event.defaultPrevented) return;
            contentContext.onPointerGraceIntentChange(null);
          }
        }),
        ...isWeb3 ? {
          onKeyDown: composeEventHandlers3(props.onKeyDown, (event) => {
            const isTypingAhead = contentContext.searchRef.current !== "";
            if (props.disabled || isTypingAhead && event.key === " ") return;
            if (SUB_OPEN_KEYS[effectiveDir].includes(event.key)) {
              if (context4.open && context4.content) {
                const firstItem = context4.content.querySelector?.('[role="menuitem"]:not([data-disabled])');
                if (firstItem) {
                  firstItem.focus({
                    focusVisible: true
                  }), event.preventDefault();
                  return;
                }
              }
              const triggerEl = event.currentTarget;
              popperContext.refs?.setReference(triggerEl), context4.onOpenChange(true), requestAnimationFrame(() => {
                popperContext.update?.();
              }), context4.content?.focus({
                focusVisible: true
              }), event.preventDefault();
            }
          })
        } : null
      })
    });
  });
  MenuSubTrigger.displayName = SUB_TRIGGER_NAME;
  const SUB_CONTENT_NAME = "MenuSubContent", MenuSubContent = styled29(PopperContentFrame, {
    name: SUB_CONTENT_NAME
  }).styleable((props, forwardedRef) => {
    const scope = props.scope || MENU_CONTEXT, portalContext = usePortalContext(scope), {
      forceMount = portalContext.forceMount,
      ...subContentProps
    } = props, context4 = useMenuContext(scope), rootContext = useMenuRootContext(scope), subContext = useMenuSubContext(scope), popperContext = usePopperContext(scope), ref = React49.useRef(null), composedRefs = useComposedRefs2(forwardedRef, ref), placementSide = popperContext.placement?.split("-")[0], dataSide = placementSide === "left" || placementSide === "right" ? placementSide : rootContext.dir === "rtl" ? "left" : "right", effectiveDir = rootContext.dir;
    return /* @__PURE__ */ jsx38(Collection3.Provider, {
      scope,
      children: /* @__PURE__ */ jsx38(Collection3.Slot, {
        scope,
        children: /* @__PURE__ */ jsx38(MenuContentImpl, {
          id: subContext.contentId,
          "aria-labelledby": subContext.triggerId,
          ...subContentProps,
          ref: composedRefs,
          "data-side": dataSide,
          disableOutsidePointerEvents: false,
          disableOutsideScroll: false,
          trapFocus: false,
          onOpenAutoFocus: /* @__PURE__ */ __name((event) => {
            if (rootContext.isUsingKeyboardRef.current) {
              const root = ref.current;
              (root?.querySelector?.("[data-tamagui-menu-content]") || root)?.focus({
                preventScroll: true
              });
            }
            event.preventDefault();
          }, "onOpenAutoFocus"),
          onCloseAutoFocus: /* @__PURE__ */ __name((event) => event.preventDefault(), "onCloseAutoFocus"),
          onFocusOutside: composeEventHandlers3(props.onFocusOutside, (event) => {
            event.target !== subContext.trigger && context4.onOpenChange(false);
          }),
          onEscapeKeyDown: composeEventHandlers3(props.onEscapeKeyDown, (event) => {
            context4.onOpenChange(false), subContext.trigger?.focus({
              focusVisible: true
            }), event.preventDefault();
          }),
          ...isWeb3 ? {
            onKeyDown: composeEventHandlers3(props.onKeyDown, (event) => {
              const isKeyDownInside = event.currentTarget.contains(event.target), isCloseKey = SUB_CLOSE_KEYS[effectiveDir].includes(event.key);
              isKeyDownInside && isCloseKey && (context4.onOpenChange(false), subContext.trigger?.focus({
                focusVisible: true
              }), event.preventDefault());
            })
          } : null
        })
      })
    });
  });
  MenuSubContent.displayName = SUB_CONTENT_NAME;
  const Anchor2 = MenuAnchor, Portal2 = MenuPortal, Content = MenuContent, Group2 = _MenuGroup.styleable((props, ref) => /* @__PURE__ */ jsx38(_MenuGroup, {
    ...props,
    ref
  }));
  Group2.displayName = "MenuGroup";
  const Label2 = _Label.styleable((props, ref) => /* @__PURE__ */ jsx38(_Label, {
    ...props,
    ref
  }));
  Label2.displayName = "MenuLabel";
  const Item = MenuItem2, CheckboxItem = MenuCheckboxItem, RadioGroup2 = MenuRadioGroup, RadioItem = MenuRadioItem, ItemIndicator = MenuItemIndicator, Separator2 = _Separator.styleable((props, ref) => /* @__PURE__ */ jsx38(_Separator, {
    ...props,
    ref
  }));
  return Separator2.displayName = "MenuSeparator", {
    Menu: withStaticProperties5(MenuComp, {
      Anchor: Anchor2,
      Portal: Portal2,
      Content,
      Group: Group2,
      Label: Label2,
      Item,
      CheckboxItem,
      RadioGroup: RadioGroup2,
      RadioItem,
      ItemIndicator,
      Separator: Separator2,
      Arrow: MenuArrow,
      Sub: MenuSub,
      SubTrigger: MenuSubTrigger,
      SubContent: MenuSubContent,
      ItemTitle: MenuItemTitle,
      ItemSubtitle: MenuItemSubTitle,
      ItemImage: MenuItemImage,
      ItemIcon: MenuItemIcon
    })
  };
}
__name(createBaseMenu, "createBaseMenu");
function getOpenState(open2) {
  return open2 ? "open" : "closed";
}
__name(getOpenState, "getOpenState");
function isIndeterminate2(checked) {
  return checked === "indeterminate";
}
__name(isIndeterminate2, "isIndeterminate");
function getCheckedState(checked) {
  return isIndeterminate2(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
__name(getCheckedState, "getCheckedState");
function focusFirst3(candidates, options) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) if (candidate === PREVIOUSLY_FOCUSED_ELEMENT || (candidate.focus({
    preventScroll: true,
    focusVisible: options?.focusVisible
  }), document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)) return;
}
__name(focusFirst3, "focusFirst");
function wrapArray2(array, startIndex) {
  return array.map((_, index2) => array[(startIndex + index2) % array.length]);
}
__name(wrapArray2, "wrapArray");
function getNextMatch(values, search, currentMatch) {
  const normalizedSearch = search.length > 1 && Array.from(search).every((char) => char === search[0]) ? search[0] : search, currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
  let wrappedValues = wrapArray2(values, Math.max(currentMatchIndex, 0));
  normalizedSearch.length === 1 && (wrappedValues = wrappedValues.filter((v) => v !== currentMatch));
  const nextMatch = wrappedValues.find((value) => value.toLowerCase().startsWith(normalizedSearch.toLowerCase()));
  return nextMatch !== currentMatch ? nextMatch : void 0;
}
__name(getNextMatch, "getNextMatch");
function isPointInPolygon2(point, polygon) {
  const {
    x,
    y
  } = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x, yi = polygon[i].y, xj = polygon[j].x, yj = polygon[j].y;
    yi > y != yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi && (inside = !inside);
  }
  return inside;
}
__name(isPointInPolygon2, "isPointInPolygon");
function isPointerInGraceArea(event, area) {
  if (!area) return false;
  const cursorPos = {
    x: event.clientX,
    y: event.clientY
  };
  return isPointInPolygon2(cursorPos, area);
}
__name(isPointerInGraceArea, "isPointerInGraceArea");

// node_modules/@tamagui/create-menu/dist/esm/createNativeMenu/createNativeMenu.mjs
import { isWeb as isWeb4, withStaticProperties as withStaticProperties6, isIos as isIos2 } from "@tamagui/web";
import React50 from "react";
import { Fragment as Fragment10, jsx as jsx39 } from "react/jsx-runtime";
var MAPPED_TYPES = ["SubContent", "SubTrigger", "Content", "Sub", "Group", "CheckboxItem"];
var CONTAINER_TYPES = ["SubContent", "Content", "Sub", "Group"];
function getComponentType(displayName) {
  for (const type of MAPPED_TYPES) if (displayName === type || displayName.includes(`(${type})`)) return type;
  return null;
}
__name(getComponentType, "getComponentType");
function isItemLike(props, displayName) {
  return getComponentType(displayName) ? false : "onSelect" in props || "textValue" in props;
}
__name(isItemLike, "isItemLike");
function isPortalLike(displayName) {
  return displayName === "Portal" || displayName.includes("Portal");
}
__name(isPortalLike, "isPortalLike");
var emptyStub = /* @__PURE__ */ __name(() => null, "emptyStub");
function createWebStubs() {
  return {
    Menu: withStaticProperties6(emptyStub, {
      Trigger: emptyStub,
      Content: emptyStub,
      Item: emptyStub,
      ItemTitle: emptyStub,
      ItemSubtitle: emptyStub,
      SubTrigger: emptyStub,
      Group: emptyStub,
      ItemIcon: emptyStub,
      Separator: emptyStub,
      CheckboxItem: emptyStub,
      ItemIndicator: emptyStub,
      ItemImage: emptyStub,
      Label: emptyStub,
      Arrow: emptyStub,
      Sub: emptyStub,
      SubContent: emptyStub,
      Preview: emptyStub,
      Portal: emptyStub,
      RadioGroup: emptyStub,
      RadioItem: emptyStub,
      Auxiliary: emptyStub
    })
  };
}
__name(createWebStubs, "createWebStubs");
var createNativeMenu = /* @__PURE__ */ __name((MenuType) => {
  if (isWeb4) return createWebStubs();
  const isContextMenu = MenuType === "ContextMenu", isAndroid7 = !isIos2 && !isWeb4;
  let resolved = null, warned = false;
  function resolve() {
    if (resolved) return resolved;
    const zeego = getZeego();
    if (!zeego.isEnabled) return warned || (warned = true, console.warn("Warning: Must call import '@tamagui/native/setup-zeego' at your app entry point to use native menus")), null;
    const menu = isContextMenu ? zeego.state.ContextMenu : zeego.state.DropdownMenu;
    return resolved = {
      menu,
      componentMap: {
        SubContent: menu.SubContent,
        Content: menu.Content,
        Sub: menu.Sub,
        Group: menu.Group,
        SubTrigger: menu.SubTrigger
      }
    }, resolved;
  }
  __name(resolve, "resolve");
  function transformChildren(menu, map, children, shouldReverseOnIos = false) {
    const result = [];
    return React50.Children.forEach(children, (child) => {
      if (!React50.isValidElement(child)) {
        result.push(child);
        return;
      }
      const displayName = child.type?.displayName || "", props = child.props;
      if (isPortalLike(displayName)) {
        const inner2 = transformChildren(menu, map, props.children, false);
        React50.Children.forEach(inner2, (c) => result.push(c));
        return;
      }
      if (displayName.includes("ScrollView")) {
        const inner2 = transformChildren(menu, map, props.children, false);
        React50.Children.forEach(inner2, (c) => result.push(c));
        return;
      }
      const componentType = getComponentType(displayName);
      if (componentType === "CheckboxItem") {
        const {
          checked,
          onCheckedChange,
          value,
          onValueChange,
          children: cbChildren,
          ...rest
        } = props, finalValue = value ?? (checked ? "on" : "off"), finalOnValueChange = onValueChange ?? (onCheckedChange && ((v) => onCheckedChange(v === "on"))), cleanChildren = React50.Children.map(cbChildren, (c) => React50.isValidElement(c) && (c.type?.displayName || "").includes("ItemIndicator") ? null : c);
        result.push(React50.createElement(menu.CheckboxItem, {
          ...rest,
          key: child.key,
          value: finalValue,
          onValueChange: finalOnValueChange
        }, cleanChildren));
        return;
      }
      if (componentType) {
        const {
          children: childChildren,
          ...restProps
        } = props, isContainer = CONTAINER_TYPES.includes(componentType), shouldReverse = componentType === "Content" || componentType === "SubContent";
        result.push(React50.createElement(map[componentType], {
          ...restProps,
          key: child.key
        }, isContainer ? transformChildren(menu, map, childChildren, shouldReverse) : childChildren));
        return;
      }
      if (isItemLike(props, displayName)) {
        const {
          children: itemChildren,
          ...itemProps
        } = props;
        result.push(React50.createElement(menu.Item, {
          ...itemProps,
          key: child.key
        }, itemChildren));
        return;
      }
      result.push(child);
    }), isIos2 && shouldReverseOnIos && !isContextMenu && result.reverse(), result;
  }
  __name(transformChildren, "transformChildren");
  function lazyZeego(name, displayName) {
    const Comp = /* @__PURE__ */ __name((props) => {
      const z = resolve();
      return z ? React50.createElement(z.menu[name], props) : null;
    }, "Comp");
    return Comp.displayName = displayName || name, Comp;
  }
  __name(lazyZeego, "lazyZeego");
  const Trigger = lazyZeego("Trigger"), Content = lazyZeego("Content"), Item = lazyZeego("Item"), ItemTitle = lazyZeego("ItemTitle"), ItemSubtitle = lazyZeego("ItemSubtitle"), ItemIcon = lazyZeego("ItemIcon"), ItemImage = lazyZeego("ItemImage"), ItemIndicator = lazyZeego("ItemIndicator"), Group2 = lazyZeego("Group"), Label2 = lazyZeego("Label"), Separator2 = lazyZeego("Separator"), Sub = lazyZeego("Sub"), SubTrigger = lazyZeego("SubTrigger"), SubContent = lazyZeego("SubContent"), Portal2 = /* @__PURE__ */ __name(({
    children
  }) => /* @__PURE__ */ jsx39(Fragment10, {
    children
  }), "Portal");
  Portal2.displayName = "Portal";
  const Arrow = /* @__PURE__ */ __name(() => null, "Arrow");
  Arrow.displayName = "Arrow";
  const RadioGroup2 = /* @__PURE__ */ __name(({
    children
  }) => /* @__PURE__ */ jsx39(Fragment10, {
    children
  }), "RadioGroup");
  RadioGroup2.displayName = `${MenuType}RadioGroup`;
  const RadioItem = /* @__PURE__ */ __name(({
    children
  }) => /* @__PURE__ */ jsx39(Fragment10, {
    children
  }), "RadioItem");
  RadioItem.displayName = `${MenuType}RadioItem`;
  const CheckboxItem = /* @__PURE__ */ __name(() => null, "CheckboxItem");
  CheckboxItem.displayName = "CheckboxItem";
  const Preview = isContextMenu ? lazyZeego("Preview", `${MenuType}Preview`) : () => null;
  Preview.displayName = `${MenuType}Preview`;
  const Auxiliary = isContextMenu ? lazyZeego("Auxiliary", `${MenuType}Auxiliary`) : () => null;
  Auxiliary.displayName = `${MenuType}Auxiliary`;
  const Menu2 = /* @__PURE__ */ __name(({
    children,
    onOpenChange,
    onOpenWillChange
  }) => {
    const z = resolve();
    if (!z) return null;
    const rootProps = {
      onOpenChange
    };
    isContextMenu && onOpenWillChange && (rootProps.onOpenWillChange = onOpenWillChange);
    const content = /* @__PURE__ */ jsx39(z.menu.Root, {
      ...rootProps,
      children: transformChildren(z.menu, z.componentMap, children)
    });
    return isAndroid7 ? /* @__PURE__ */ jsx39(NativeMenuContext.Provider, {
      value: true,
      children: content
    }) : content;
  }, "Menu");
  return Menu2.displayName = MenuType, {
    Menu: withStaticProperties6(Menu2, {
      Trigger,
      Content,
      Item,
      ItemTitle,
      ItemSubtitle,
      ItemIcon,
      ItemImage,
      ItemIndicator,
      Group: Group2,
      Label: Label2,
      Separator: Separator2,
      Sub,
      SubTrigger,
      SubContent,
      CheckboxItem,
      Portal: Portal2,
      RadioGroup: RadioGroup2,
      RadioItem,
      Arrow,
      Preview,
      Auxiliary
    })
  };
}, "createNativeMenu");

// node_modules/@tamagui/create-menu/dist/esm/createNativeMenu/withNativeMenu.mjs
import { isWeb as isWeb5 } from "@tamagui/web";
import { jsx as jsx40 } from "react/jsx-runtime";
function withNativeMenu({
  Component,
  NativeComponent
}) {
  if (isWeb5 || !NativeComponent) return Component;
  const Menu2 = /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsx40(NativeComponent, {
    ...props
  }), "Menu");
  return Menu2.displayName = NativeComponent.displayName || Component?.displayName, Menu2;
}
__name(withNativeMenu, "withNativeMenu");

// node_modules/@tamagui/menu/dist/esm/Menu.mjs
import { isWeb as isWeb7, withStaticProperties as withStaticProperties8 } from "@tamagui/web";
import React62 from "react";

// node_modules/@tamagui/scroll-view/dist/esm/ScrollView.mjs
import { styled as styled30 } from "@tamagui/web";

// ../../node_modules/react-native-web/dist/modules/AccessibilityUtil/isDisabled.js
var isDisabled = /* @__PURE__ */ __name((props) => props.disabled || Array.isArray(props.accessibilityStates) && props.accessibilityStates.indexOf("disabled") > -1, "isDisabled");
var isDisabled_default = isDisabled;

// ../../node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAriaRole.js
var accessibilityRoleToWebRole = {
  adjustable: "slider",
  button: "button",
  header: "heading",
  image: "img",
  imagebutton: null,
  keyboardkey: null,
  label: null,
  link: "link",
  none: "presentation",
  search: "search",
  summary: "region",
  text: null
};
var propsToAriaRole = /* @__PURE__ */ __name((_ref) => {
  var accessibilityRole = _ref.accessibilityRole, role = _ref.role;
  var _role = role || accessibilityRole;
  if (_role) {
    var inferredRole = accessibilityRoleToWebRole[_role];
    if (inferredRole !== null) {
      return inferredRole || _role;
    }
  }
}, "propsToAriaRole");
var propsToAriaRole_default = propsToAriaRole;

// ../../node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAccessibilityComponent.js
var roleComponents = {
  article: "article",
  banner: "header",
  blockquote: "blockquote",
  button: "button",
  code: "code",
  complementary: "aside",
  contentinfo: "footer",
  deletion: "del",
  emphasis: "em",
  figure: "figure",
  insertion: "ins",
  form: "form",
  list: "ul",
  listitem: "li",
  main: "main",
  navigation: "nav",
  paragraph: "p",
  region: "section",
  strong: "strong"
};
var emptyObject = {};
var propsToAccessibilityComponent = /* @__PURE__ */ __name(function propsToAccessibilityComponent2(props) {
  if (props === void 0) {
    props = emptyObject;
  }
  var roleProp = props.role || props.accessibilityRole;
  if (roleProp === "label") {
    return "label";
  }
  var role = propsToAriaRole_default(props);
  if (role) {
    if (role === "heading") {
      var level = props.accessibilityLevel || props["aria-level"];
      if (level != null) {
        return "h" + level;
      }
      return "h1";
    }
    return roleComponents[role];
  }
}, "propsToAccessibilityComponent");
var propsToAccessibilityComponent_default = propsToAccessibilityComponent;

// ../../node_modules/react-native-web/dist/modules/AccessibilityUtil/index.js
var AccessibilityUtil = {
  isDisabled: isDisabled_default,
  propsToAccessibilityComponent: propsToAccessibilityComponent_default,
  propsToAriaRole: propsToAriaRole_default
};
var AccessibilityUtil_default = AccessibilityUtil;

// ../../node_modules/react-native-web/dist/modules/createDOMProps/index.js
var import_objectSpread23 = __toESM(require_objectSpread2());
var import_objectWithoutPropertiesLoose3 = __toESM(require_objectWithoutPropertiesLoose());

// ../../node_modules/react-native-web/dist/exports/StyleSheet/index.js
var import_objectSpread22 = __toESM(require_objectSpread2());
var import_objectWithoutPropertiesLoose2 = __toESM(require_objectWithoutPropertiesLoose());

// ../../node_modules/react-native-web/dist/exports/StyleSheet/compiler/index.js
var import_objectSpread2 = __toESM(require_objectSpread2());
var import_objectWithoutPropertiesLoose = __toESM(require_objectWithoutPropertiesLoose());

// ../../node_modules/react-native-web/dist/exports/StyleSheet/compiler/unitlessNumbers.js
var unitlessNumbers = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexOrder: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  fontWeight: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowGap: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnGap: true,
  gridColumnStart: true,
  lineClamp: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true,
  // transform types
  scale: true,
  scaleX: true,
  scaleY: true,
  scaleZ: true,
  // RN properties
  shadowOpacity: true
};
var prefixes = ["ms", "Moz", "O", "Webkit"];
var prefixKey = /* @__PURE__ */ __name((prefix, key) => {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}, "prefixKey");
Object.keys(unitlessNumbers).forEach((prop) => {
  prefixes.forEach((prefix) => {
    unitlessNumbers[prefixKey(prefix, prop)] = unitlessNumbers[prop];
  });
});
var unitlessNumbers_default = unitlessNumbers;

// ../../node_modules/react-native-web/dist/modules/isWebColor/index.js
var isWebColor = /* @__PURE__ */ __name((color) => color === "currentcolor" || color === "currentColor" || color === "inherit" || color.indexOf("var(") === 0, "isWebColor");
var isWebColor_default = isWebColor;

// ../../node_modules/react-native-web/dist/exports/processColor/index.js
var import_normalize_colors = __toESM(require_normalize_colors());
var processColor = /* @__PURE__ */ __name((color) => {
  if (color === void 0 || color === null) {
    return color;
  }
  var int32Color = (0, import_normalize_colors.default)(color);
  if (int32Color === void 0 || int32Color === null) {
    return void 0;
  }
  int32Color = (int32Color << 24 | int32Color >>> 8) >>> 0;
  return int32Color;
}, "processColor");
var processColor_default = processColor;

// ../../node_modules/react-native-web/dist/exports/StyleSheet/compiler/normalizeColor.js
var normalizeColor2 = /* @__PURE__ */ __name(function normalizeColor3(color, opacity) {
  if (opacity === void 0) {
    opacity = 1;
  }
  if (color == null) return;
  if (typeof color === "string" && isWebColor_default(color)) {
    return color;
  }
  var colorInt = processColor_default(color);
  if (colorInt != null) {
    var r = colorInt >> 16 & 255;
    var g = colorInt >> 8 & 255;
    var b = colorInt & 255;
    var a = (colorInt >> 24 & 255) / 255;
    var alpha = (a * opacity).toFixed(2);
    return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
  }
}, "normalizeColor");
var normalizeColor_default = normalizeColor2;

// ../../node_modules/react-native-web/dist/exports/StyleSheet/compiler/normalizeValueWithProperty.js
var colorProps = {
  backgroundColor: true,
  borderColor: true,
  borderTopColor: true,
  borderRightColor: true,
  borderBottomColor: true,
  borderLeftColor: true,
  color: true,
  shadowColor: true,
  textDecorationColor: true,
  textShadowColor: true
};
function normalizeValueWithProperty(value, property) {
  var returnValue = value;
  if ((property == null || !unitlessNumbers_default[property]) && typeof value === "number") {
    returnValue = value + "px";
  } else if (property != null && colorProps[property]) {
    returnValue = normalizeColor_default(value);
  }
  return returnValue;
}
__name(normalizeValueWithProperty, "normalizeValueWithProperty");

// ../../node_modules/react-native-web/dist/modules/canUseDom/index.js
var canUseDOM2 = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var canUseDom_default = canUseDOM2;

// ../../node_modules/react-native-web/dist/exports/StyleSheet/compiler/createReactDOMStyle.js
var emptyObject2 = {};
var supportsCSS3TextDecoration = !canUseDom_default || window.CSS != null && window.CSS.supports != null && (window.CSS.supports("text-decoration-line", "none") || window.CSS.supports("-webkit-text-decoration-line", "none"));
var MONOSPACE_FONT_STACK = "monospace,monospace";
var SYSTEM_FONT_STACK = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif';
var STYLE_SHORT_FORM_EXPANSIONS = {
  borderColor: ["borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"],
  borderBlockColor: ["borderTopColor", "borderBottomColor"],
  borderInlineColor: ["borderRightColor", "borderLeftColor"],
  borderRadius: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
  borderStyle: ["borderTopStyle", "borderRightStyle", "borderBottomStyle", "borderLeftStyle"],
  borderBlockStyle: ["borderTopStyle", "borderBottomStyle"],
  borderInlineStyle: ["borderRightStyle", "borderLeftStyle"],
  borderWidth: ["borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth"],
  borderBlockWidth: ["borderTopWidth", "borderBottomWidth"],
  borderInlineWidth: ["borderRightWidth", "borderLeftWidth"],
  insetBlock: ["top", "bottom"],
  insetInline: ["left", "right"],
  marginBlock: ["marginTop", "marginBottom"],
  marginInline: ["marginRight", "marginLeft"],
  paddingBlock: ["paddingTop", "paddingBottom"],
  paddingInline: ["paddingRight", "paddingLeft"],
  overflow: ["overflowX", "overflowY"],
  overscrollBehavior: ["overscrollBehaviorX", "overscrollBehaviorY"],
  borderBlockStartColor: ["borderTopColor"],
  borderBlockStartStyle: ["borderTopStyle"],
  borderBlockStartWidth: ["borderTopWidth"],
  borderBlockEndColor: ["borderBottomColor"],
  borderBlockEndStyle: ["borderBottomStyle"],
  borderBlockEndWidth: ["borderBottomWidth"],
  //borderInlineStartColor: ['borderLeftColor'],
  //borderInlineStartStyle: ['borderLeftStyle'],
  //borderInlineStartWidth: ['borderLeftWidth'],
  //borderInlineEndColor: ['borderRightColor'],
  //borderInlineEndStyle: ['borderRightStyle'],
  //borderInlineEndWidth: ['borderRightWidth'],
  borderEndStartRadius: ["borderBottomLeftRadius"],
  borderEndEndRadius: ["borderBottomRightRadius"],
  borderStartStartRadius: ["borderTopLeftRadius"],
  borderStartEndRadius: ["borderTopRightRadius"],
  insetBlockEnd: ["bottom"],
  insetBlockStart: ["top"],
  //insetInlineEnd: ['right'],
  //insetInlineStart: ['left'],
  marginBlockStart: ["marginTop"],
  marginBlockEnd: ["marginBottom"],
  //marginInlineStart: ['marginLeft'],
  //marginInlineEnd: ['marginRight'],
  paddingBlockStart: ["paddingTop"],
  paddingBlockEnd: ["paddingBottom"]
  //paddingInlineStart: ['marginLeft'],
  //paddingInlineEnd: ['marginRight'],
};
var createReactDOMStyle = /* @__PURE__ */ __name((style, isInline) => {
  if (!style) {
    return emptyObject2;
  }
  var resolvedStyle = {};
  var _loop = /* @__PURE__ */ __name(function _loop2() {
    var value = style[prop];
    if (
      // Ignore everything with a null value
      value == null
    ) {
      return "continue";
    }
    if (prop === "backgroundClip") {
      if (value === "text") {
        resolvedStyle.backgroundClip = value;
        resolvedStyle.WebkitBackgroundClip = value;
      }
    } else if (prop === "flex") {
      if (value === -1) {
        resolvedStyle.flexGrow = 0;
        resolvedStyle.flexShrink = 1;
        resolvedStyle.flexBasis = "auto";
      } else {
        resolvedStyle.flex = value;
      }
    } else if (prop === "font") {
      resolvedStyle[prop] = value.replace("System", SYSTEM_FONT_STACK);
    } else if (prop === "fontFamily") {
      if (value.indexOf("System") > -1) {
        var stack = value.split(/,\s*/);
        stack[stack.indexOf("System")] = SYSTEM_FONT_STACK;
        resolvedStyle[prop] = stack.join(",");
      } else if (value === "monospace") {
        resolvedStyle[prop] = MONOSPACE_FONT_STACK;
      } else {
        resolvedStyle[prop] = value;
      }
    } else if (prop === "textDecorationLine") {
      if (!supportsCSS3TextDecoration) {
        resolvedStyle.textDecoration = value;
      } else {
        resolvedStyle.textDecorationLine = value;
      }
    } else if (prop === "writingDirection") {
      resolvedStyle.direction = value;
    } else {
      var _value = normalizeValueWithProperty(style[prop], prop);
      var longFormProperties = STYLE_SHORT_FORM_EXPANSIONS[prop];
      if (isInline && prop === "inset") {
        if (style.insetInline == null) {
          resolvedStyle.left = _value;
          resolvedStyle.right = _value;
        }
        if (style.insetBlock == null) {
          resolvedStyle.top = _value;
          resolvedStyle.bottom = _value;
        }
      } else if (isInline && prop === "margin") {
        if (style.marginInline == null) {
          resolvedStyle.marginLeft = _value;
          resolvedStyle.marginRight = _value;
        }
        if (style.marginBlock == null) {
          resolvedStyle.marginTop = _value;
          resolvedStyle.marginBottom = _value;
        }
      } else if (isInline && prop === "padding") {
        if (style.paddingInline == null) {
          resolvedStyle.paddingLeft = _value;
          resolvedStyle.paddingRight = _value;
        }
        if (style.paddingBlock == null) {
          resolvedStyle.paddingTop = _value;
          resolvedStyle.paddingBottom = _value;
        }
      } else if (longFormProperties) {
        longFormProperties.forEach((longForm, i) => {
          if (style[longForm] == null) {
            resolvedStyle[longForm] = _value;
          }
        });
      } else {
        resolvedStyle[prop] = _value;
      }
    }
  }, "_loop");
  for (var prop in style) {
    var _ret = _loop();
    if (_ret === "continue") continue;
  }
  return resolvedStyle;
}, "createReactDOMStyle");
var createReactDOMStyle_default = createReactDOMStyle;

// ../../node_modules/react-native-web/dist/exports/StyleSheet/compiler/hash.js
function murmurhash2_32_gc(str, seed) {
  var l = str.length, h = seed ^ l, i = 0, k;
  while (l >= 4) {
    k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
    k = (k & 65535) * 1540483477 + (((k >>> 16) * 1540483477 & 65535) << 16);
    k ^= k >>> 24;
    k = (k & 65535) * 1540483477 + (((k >>> 16) * 1540483477 & 65535) << 16);
    h = (h & 65535) * 1540483477 + (((h >>> 16) * 1540483477 & 65535) << 16) ^ k;
    l -= 4;
    ++i;
  }
  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 255;
      h = (h & 65535) * 1540483477 + (((h >>> 16) * 1540483477 & 65535) << 16);
  }
  h ^= h >>> 13;
  h = (h & 65535) * 1540483477 + (((h >>> 16) * 1540483477 & 65535) << 16);
  h ^= h >>> 15;
  return h >>> 0;
}
__name(murmurhash2_32_gc, "murmurhash2_32_gc");
var hash = /* @__PURE__ */ __name((str) => murmurhash2_32_gc(str, 1).toString(36), "hash");
var hash_default = hash;

// ../../node_modules/react-native-web/dist/exports/StyleSheet/compiler/hyphenateStyleName.js
var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache3 = {};
function toHyphenLower(match) {
  return "-" + match.toLowerCase();
}
__name(toHyphenLower, "toHyphenLower");
function hyphenateStyleName(name) {
  if (name in cache3) {
    return cache3[name];
  }
  var hName = name.replace(uppercasePattern, toHyphenLower);
  return cache3[name] = msPattern.test(hName) ? "-" + hName : hName;
}
__name(hyphenateStyleName, "hyphenateStyleName");
var hyphenateStyleName_default = hyphenateStyleName;

// ../../node_modules/react-native-web/dist/modules/prefixStyles/index.js
var import_createPrefixer = __toESM(require_createPrefixer());

// ../../node_modules/react-native-web/dist/modules/prefixStyles/static.js
var import_crossFade = __toESM(require_crossFade());
var import_imageSet = __toESM(require_imageSet());
var import_logical = __toESM(require_logical());
var import_position = __toESM(require_position());
var import_sizing = __toESM(require_sizing());
var import_transition = __toESM(require_transition());
var w = ["Webkit"];
var m = ["Moz"];
var wm = ["Webkit", "Moz"];
var wms = ["Webkit", "ms"];
var wmms = ["Webkit", "Moz", "ms"];
var static_default = {
  plugins: [import_crossFade.default, import_imageSet.default, import_logical.default, import_position.default, import_sizing.default, import_transition.default],
  prefixMap: {
    appearance: wmms,
    userSelect: wm,
    textEmphasisPosition: wms,
    textEmphasis: wms,
    textEmphasisStyle: wms,
    textEmphasisColor: wms,
    boxDecorationBreak: wms,
    clipPath: w,
    maskImage: wms,
    maskMode: wms,
    maskRepeat: wms,
    maskPosition: wms,
    maskClip: wms,
    maskOrigin: wms,
    maskSize: wms,
    maskComposite: wms,
    mask: wms,
    maskBorderSource: wms,
    maskBorderMode: wms,
    maskBorderSlice: wms,
    maskBorderWidth: wms,
    maskBorderOutset: wms,
    maskBorderRepeat: wms,
    maskBorder: wms,
    maskType: wms,
    textDecorationStyle: w,
    textDecorationSkip: w,
    textDecorationLine: w,
    textDecorationColor: w,
    filter: w,
    breakAfter: w,
    breakBefore: w,
    breakInside: w,
    columnCount: w,
    columnFill: w,
    columnGap: w,
    columnRule: w,
    columnRuleColor: w,
    columnRuleStyle: w,
    columnRuleWidth: w,
    columns: w,
    columnSpan: w,
    columnWidth: w,
    backdropFilter: w,
    hyphens: w,
    flowInto: w,
    flowFrom: w,
    regionFragment: w,
    textOrientation: w,
    tabSize: m,
    fontKerning: w,
    textSizeAdjust: w
  }
};

// ../../node_modules/react-native-web/dist/modules/prefixStyles/index.js
var prefixAll = (0, import_createPrefixer.default)(static_default);
var prefixStyles_default = prefixAll;

// ../../node_modules/react-native-web/dist/exports/StyleSheet/compiler/index.js
var _excluded = ["animationKeyframes"];
var cache6 = /* @__PURE__ */ new Map();
var emptyObject3 = {};
var classicGroup = 1;
var atomicGroup = 3;
var customGroup = {
  borderColor: 2,
  borderRadius: 2,
  borderStyle: 2,
  borderWidth: 2,
  display: 2,
  flex: 2,
  inset: 2,
  margin: 2,
  overflow: 2,
  overscrollBehavior: 2,
  padding: 2,
  insetBlock: 2.1,
  insetInline: 2.1,
  marginInline: 2.1,
  marginBlock: 2.1,
  paddingInline: 2.1,
  paddingBlock: 2.1,
  borderBlockStartColor: 2.2,
  borderBlockStartStyle: 2.2,
  borderBlockStartWidth: 2.2,
  borderBlockEndColor: 2.2,
  borderBlockEndStyle: 2.2,
  borderBlockEndWidth: 2.2,
  borderInlineStartColor: 2.2,
  borderInlineStartStyle: 2.2,
  borderInlineStartWidth: 2.2,
  borderInlineEndColor: 2.2,
  borderInlineEndStyle: 2.2,
  borderInlineEndWidth: 2.2,
  borderEndStartRadius: 2.2,
  borderEndEndRadius: 2.2,
  borderStartStartRadius: 2.2,
  borderStartEndRadius: 2.2,
  insetBlockEnd: 2.2,
  insetBlockStart: 2.2,
  insetInlineEnd: 2.2,
  insetInlineStart: 2.2,
  marginBlockStart: 2.2,
  marginBlockEnd: 2.2,
  marginInlineStart: 2.2,
  marginInlineEnd: 2.2,
  paddingBlockStart: 2.2,
  paddingBlockEnd: 2.2,
  paddingInlineStart: 2.2,
  paddingInlineEnd: 2.2
};
var borderTopLeftRadius = "borderTopLeftRadius";
var borderTopRightRadius = "borderTopRightRadius";
var borderBottomLeftRadius = "borderBottomLeftRadius";
var borderBottomRightRadius = "borderBottomRightRadius";
var borderLeftColor = "borderLeftColor";
var borderLeftStyle = "borderLeftStyle";
var borderLeftWidth = "borderLeftWidth";
var borderRightColor = "borderRightColor";
var borderRightStyle = "borderRightStyle";
var borderRightWidth = "borderRightWidth";
var right = "right";
var marginLeft = "marginLeft";
var marginRight = "marginRight";
var paddingLeft = "paddingLeft";
var paddingRight = "paddingRight";
var left = "left";
var PROPERTIES_FLIP = {
  [borderTopLeftRadius]: borderTopRightRadius,
  [borderTopRightRadius]: borderTopLeftRadius,
  [borderBottomLeftRadius]: borderBottomRightRadius,
  [borderBottomRightRadius]: borderBottomLeftRadius,
  [borderLeftColor]: borderRightColor,
  [borderLeftStyle]: borderRightStyle,
  [borderLeftWidth]: borderRightWidth,
  [borderRightColor]: borderLeftColor,
  [borderRightStyle]: borderLeftStyle,
  [borderRightWidth]: borderLeftWidth,
  [left]: right,
  [marginLeft]: marginRight,
  [marginRight]: marginLeft,
  [paddingLeft]: paddingRight,
  [paddingRight]: paddingLeft,
  [right]: left
};
var PROPERTIES_I18N = {
  borderStartStartRadius: borderTopLeftRadius,
  borderStartEndRadius: borderTopRightRadius,
  borderEndStartRadius: borderBottomLeftRadius,
  borderEndEndRadius: borderBottomRightRadius,
  borderInlineStartColor: borderLeftColor,
  borderInlineStartStyle: borderLeftStyle,
  borderInlineStartWidth: borderLeftWidth,
  borderInlineEndColor: borderRightColor,
  borderInlineEndStyle: borderRightStyle,
  borderInlineEndWidth: borderRightWidth,
  insetInlineEnd: right,
  insetInlineStart: left,
  marginInlineStart: marginLeft,
  marginInlineEnd: marginRight,
  paddingInlineStart: paddingLeft,
  paddingInlineEnd: paddingRight
};
var PROPERTIES_VALUE = ["clear", "float", "textAlign"];
function atomic(style) {
  var compiledStyle = {
    $$css: true
  };
  var compiledRules = [];
  function atomicCompile(srcProp, prop, value) {
    var valueString = stringifyValueWithProperty(value, prop);
    var cacheKey = prop + valueString;
    var cachedResult = cache6.get(cacheKey);
    var identifier;
    if (cachedResult != null) {
      identifier = cachedResult[0];
      compiledRules.push(cachedResult[1]);
    } else {
      var v = srcProp !== prop ? cacheKey : valueString;
      identifier = createIdentifier("r", srcProp, v);
      var order = customGroup[srcProp] || atomicGroup;
      var rules = createAtomicRules(identifier, prop, value);
      var orderedRules = [rules, order];
      compiledRules.push(orderedRules);
      cache6.set(cacheKey, [identifier, orderedRules]);
    }
    return identifier;
  }
  __name(atomicCompile, "atomicCompile");
  Object.keys(style).sort().forEach((srcProp) => {
    var value = style[srcProp];
    if (value != null) {
      var localizeableValue;
      if (PROPERTIES_VALUE.indexOf(srcProp) > -1) {
        var _left = atomicCompile(srcProp, srcProp, "left");
        var _right = atomicCompile(srcProp, srcProp, "right");
        if (value === "start") {
          localizeableValue = [_left, _right];
        } else if (value === "end") {
          localizeableValue = [_right, _left];
        }
      }
      var propPolyfill = PROPERTIES_I18N[srcProp];
      if (propPolyfill != null) {
        var ltr = atomicCompile(srcProp, propPolyfill, value);
        var rtl = atomicCompile(srcProp, PROPERTIES_FLIP[propPolyfill], value);
        localizeableValue = [ltr, rtl];
      }
      if (srcProp === "transitionProperty") {
        var values = Array.isArray(value) ? value : [value];
        var polyfillIndices = [];
        for (var i = 0; i < values.length; i++) {
          var val = values[i];
          if (typeof val === "string" && PROPERTIES_I18N[val] != null) {
            polyfillIndices.push(i);
          }
        }
        if (polyfillIndices.length > 0) {
          var ltrPolyfillValues = [...values];
          var rtlPolyfillValues = [...values];
          polyfillIndices.forEach((i2) => {
            var ltrVal = ltrPolyfillValues[i2];
            if (typeof ltrVal === "string") {
              var ltrPolyfill = PROPERTIES_I18N[ltrVal];
              var rtlPolyfill = PROPERTIES_FLIP[ltrPolyfill];
              ltrPolyfillValues[i2] = ltrPolyfill;
              rtlPolyfillValues[i2] = rtlPolyfill;
              var _ltr = atomicCompile(srcProp, srcProp, ltrPolyfillValues);
              var _rtl = atomicCompile(srcProp, srcProp, rtlPolyfillValues);
              localizeableValue = [_ltr, _rtl];
            }
          });
        }
      }
      if (localizeableValue == null) {
        localizeableValue = atomicCompile(srcProp, srcProp, value);
      } else {
        compiledStyle["$$css$localize"] = true;
      }
      compiledStyle[srcProp] = localizeableValue;
    }
  });
  return [compiledStyle, compiledRules];
}
__name(atomic, "atomic");
function classic(style, name) {
  var compiledStyle = {
    $$css: true
  };
  var compiledRules = [];
  var animationKeyframes = style.animationKeyframes, rest = (0, import_objectWithoutPropertiesLoose.default)(style, _excluded);
  var identifier = createIdentifier("css", name, JSON.stringify(style));
  var selector = "." + identifier;
  var animationName;
  if (animationKeyframes != null) {
    var _processKeyframesValu = processKeyframesValue(animationKeyframes), animationNames = _processKeyframesValu[0], keyframesRules = _processKeyframesValu[1];
    animationName = animationNames.join(",");
    compiledRules.push(...keyframesRules);
  }
  var block = createDeclarationBlock((0, import_objectSpread2.default)((0, import_objectSpread2.default)({}, rest), {}, {
    animationName
  }));
  compiledRules.push("" + selector + block);
  compiledStyle[identifier] = identifier;
  return [compiledStyle, [[compiledRules, classicGroup]]];
}
__name(classic, "classic");
function inline4(originalStyle, isRTL2) {
  var style = originalStyle || emptyObject3;
  var frozenProps = {};
  var nextStyle = {};
  var _loop = /* @__PURE__ */ __name(function _loop2() {
    var originalValue = style[originalProp];
    var prop = originalProp;
    var value = originalValue;
    if (!Object.prototype.hasOwnProperty.call(style, originalProp) || originalValue == null) {
      return "continue";
    }
    if (PROPERTIES_VALUE.indexOf(originalProp) > -1) {
      if (originalValue === "start") {
        value = isRTL2 ? "right" : "left";
      } else if (originalValue === "end") {
        value = isRTL2 ? "left" : "right";
      }
    }
    var propPolyfill = PROPERTIES_I18N[originalProp];
    if (propPolyfill != null) {
      prop = isRTL2 ? PROPERTIES_FLIP[propPolyfill] : propPolyfill;
    }
    if (originalProp === "transitionProperty") {
      var originalValues = Array.isArray(originalValue) ? originalValue : [originalValue];
      originalValues.forEach((val, i) => {
        if (typeof val === "string") {
          var valuePolyfill = PROPERTIES_I18N[val];
          if (valuePolyfill != null) {
            originalValues[i] = isRTL2 ? PROPERTIES_FLIP[valuePolyfill] : valuePolyfill;
            value = originalValues.join(" ");
          }
        }
      });
    }
    if (!frozenProps[prop]) {
      nextStyle[prop] = value;
    }
    if (prop === originalProp) {
      frozenProps[prop] = true;
    }
  }, "_loop");
  for (var originalProp in style) {
    var _ret = _loop();
    if (_ret === "continue") continue;
  }
  return createReactDOMStyle_default(nextStyle, true);
}
__name(inline4, "inline");
function stringifyValueWithProperty(value, property) {
  var normalizedValue = normalizeValueWithProperty(value, property);
  return typeof normalizedValue !== "string" ? JSON.stringify(normalizedValue || "") : normalizedValue;
}
__name(stringifyValueWithProperty, "stringifyValueWithProperty");
function createAtomicRules(identifier, property, value) {
  var rules = [];
  var selector = "." + identifier;
  switch (property) {
    case "animationKeyframes": {
      var _processKeyframesValu2 = processKeyframesValue(value), animationNames = _processKeyframesValu2[0], keyframesRules = _processKeyframesValu2[1];
      var block = createDeclarationBlock({
        animationName: animationNames.join(",")
      });
      rules.push("" + selector + block, ...keyframesRules);
      break;
    }
    // Equivalent to using '::placeholder'
    case "placeholderTextColor": {
      var _block = createDeclarationBlock({
        color: value,
        opacity: 1
      });
      rules.push(selector + "::-webkit-input-placeholder" + _block, selector + "::-moz-placeholder" + _block, selector + ":-ms-input-placeholder" + _block, selector + "::placeholder" + _block);
      break;
    }
    // Polyfill for additional 'pointer-events' values
    // See d13f78622b233a0afc0c7a200c0a0792c8ca9e58
    // See https://reactnative.dev/docs/view#pointerevents
    case "pointerEvents": {
      var finalValue = value;
      if (value === "auto") {
        finalValue = "auto!important";
      } else if (value === "none") {
        finalValue = "none!important";
        var _block2 = createDeclarationBlock({
          pointerEvents: "none"
        });
        rules.push(selector + ">* " + _block2);
      } else if (value === "box-none") {
        finalValue = "none!important";
        var _block3 = createDeclarationBlock({
          pointerEvents: "auto"
        });
        rules.push(selector + ">* " + _block3);
      } else if (value === "box-only") {
        finalValue = "auto!important";
        var _block4 = createDeclarationBlock({
          pointerEvents: "none"
        });
        rules.push(selector + ">* " + _block4);
      }
      var _block5 = createDeclarationBlock({
        pointerEvents: finalValue
      });
      rules.push("" + selector + _block5);
      break;
    }
    // Polyfill for draft spec
    // https://drafts.csswg.org/css-scrollbars-1/
    case "scrollbarWidth": {
      if (value === "none") {
        rules.push(selector + "::-webkit-scrollbar{display:none}");
      }
      var _block6 = createDeclarationBlock({
        scrollbarWidth: value
      });
      rules.push("" + selector + _block6);
      break;
    }
    default: {
      var _block7 = createDeclarationBlock({
        [property]: value
      });
      rules.push("" + selector + _block7);
      break;
    }
  }
  return rules;
}
__name(createAtomicRules, "createAtomicRules");
function createDeclarationBlock(style) {
  var domStyle = prefixStyles_default(createReactDOMStyle_default(style));
  var declarationsString = Object.keys(domStyle).map((property) => {
    var value = domStyle[property];
    var prop = hyphenateStyleName_default(property);
    if (Array.isArray(value)) {
      return value.map((v) => prop + ":" + v).join(";");
    } else {
      return prop + ":" + value;
    }
  }).sort().join(";");
  return "{" + declarationsString + ";}";
}
__name(createDeclarationBlock, "createDeclarationBlock");
function createIdentifier(prefix, name, key) {
  var hashedString = hash_default(name + key);
  return process.env.NODE_ENV !== "production" ? prefix + "-" + name + "-" + hashedString : prefix + "-" + hashedString;
}
__name(createIdentifier, "createIdentifier");
function createKeyframes(keyframes) {
  var prefixes4 = ["-webkit-", ""];
  var identifier = createIdentifier("r", "animation", JSON.stringify(keyframes));
  var steps = "{" + Object.keys(keyframes).map((stepName) => {
    var rule = keyframes[stepName];
    var block = createDeclarationBlock(rule);
    return "" + stepName + block;
  }).join("") + "}";
  var rules = prefixes4.map((prefix) => {
    return "@" + prefix + "keyframes " + identifier + steps;
  });
  return [identifier, rules];
}
__name(createKeyframes, "createKeyframes");
function processKeyframesValue(keyframesValue) {
  if (typeof keyframesValue === "number") {
    throw new Error("Invalid CSS keyframes type: " + typeof keyframesValue);
  }
  var animationNames = [];
  var rules = [];
  var value = Array.isArray(keyframesValue) ? keyframesValue : [keyframesValue];
  value.forEach((keyframes) => {
    if (typeof keyframes === "string") {
      animationNames.push(keyframes);
    } else {
      var _createKeyframes = createKeyframes(keyframes), identifier = _createKeyframes[0], keyframesRules = _createKeyframes[1];
      animationNames.push(identifier);
      rules.push(...keyframesRules);
    }
  });
  return [animationNames, rules];
}
__name(processKeyframesValue, "processKeyframesValue");

// ../../node_modules/react-native-web/dist/exports/StyleSheet/dom/createCSSStyleSheet.js
function createCSSStyleSheet(id, rootNode, textContent) {
  if (canUseDom_default) {
    var root = rootNode != null ? rootNode : document;
    var element = root.getElementById(id);
    if (element == null) {
      element = document.createElement("style");
      element.setAttribute("id", id);
      if (typeof textContent === "string") {
        element.appendChild(document.createTextNode(textContent));
      }
      if (root instanceof ShadowRoot) {
        root.insertBefore(element, root.firstChild);
      } else {
        var head = root.head;
        if (head) {
          head.insertBefore(element, head.firstChild);
        }
      }
    }
    return element.sheet;
  } else {
    return null;
  }
}
__name(createCSSStyleSheet, "createCSSStyleSheet");

// ../../node_modules/react-native-web/dist/exports/StyleSheet/dom/createOrderedCSSStyleSheet.js
var slice = Array.prototype.slice;
function createOrderedCSSStyleSheet(sheet2) {
  var groups = {};
  var selectors = {};
  if (sheet2 != null) {
    var group;
    slice.call(sheet2.cssRules).forEach((cssRule, i) => {
      var cssText = cssRule.cssText;
      if (cssText.indexOf("stylesheet-group") > -1) {
        group = decodeGroupRule(cssRule);
        groups[group] = {
          start: i,
          rules: [cssText]
        };
      } else {
        var selectorText = getSelectorText(cssText);
        if (selectorText != null) {
          selectors[selectorText] = true;
          groups[group].rules.push(cssText);
        }
      }
    });
  }
  function sheetInsert(sheet3, group2, text) {
    var orderedGroups = getOrderedGroups(groups);
    var groupIndex = orderedGroups.indexOf(group2);
    var nextGroupIndex = groupIndex + 1;
    var nextGroup = orderedGroups[nextGroupIndex];
    var position2 = nextGroup != null && groups[nextGroup].start != null ? groups[nextGroup].start : sheet3.cssRules.length;
    var isInserted = insertRuleAt(sheet3, text, position2);
    if (isInserted) {
      if (groups[group2].start == null) {
        groups[group2].start = position2;
      }
      for (var i = nextGroupIndex; i < orderedGroups.length; i += 1) {
        var groupNumber = orderedGroups[i];
        var previousStart = groups[groupNumber].start || 0;
        groups[groupNumber].start = previousStart + 1;
      }
    }
    return isInserted;
  }
  __name(sheetInsert, "sheetInsert");
  var OrderedCSSStyleSheet = {
    /**
     * The textContent of the style sheet.
     */
    getTextContent() {
      return getOrderedGroups(groups).map((group2) => {
        var rules = groups[group2].rules;
        var marker = rules.shift();
        rules.sort();
        rules.unshift(marker);
        return rules.join("\n");
      }).join("\n");
    },
    /**
     * Insert a rule into the style sheet
     */
    insert(cssText, groupValue) {
      var group2 = Number(groupValue);
      if (groups[group2] == null) {
        var markerRule = encodeGroupRule(group2);
        groups[group2] = {
          start: null,
          rules: [markerRule]
        };
        if (sheet2 != null) {
          sheetInsert(sheet2, group2, markerRule);
        }
      }
      var selectorText = getSelectorText(cssText);
      if (selectorText != null && selectors[selectorText] == null) {
        selectors[selectorText] = true;
        groups[group2].rules.push(cssText);
        if (sheet2 != null) {
          var isInserted = sheetInsert(sheet2, group2, cssText);
          if (!isInserted) {
            groups[group2].rules.pop();
          }
        }
      }
    }
  };
  return OrderedCSSStyleSheet;
}
__name(createOrderedCSSStyleSheet, "createOrderedCSSStyleSheet");
function encodeGroupRule(group) {
  return '[stylesheet-group="' + group + '"]{}';
}
__name(encodeGroupRule, "encodeGroupRule");
var groupPattern = /["']/g;
function decodeGroupRule(cssRule) {
  return Number(cssRule.selectorText.split(groupPattern)[1]);
}
__name(decodeGroupRule, "decodeGroupRule");
function getOrderedGroups(obj) {
  return Object.keys(obj).map(Number).sort((a, b) => a > b ? 1 : -1);
}
__name(getOrderedGroups, "getOrderedGroups");
var selectorPattern = /\s*([,])\s*/g;
function getSelectorText(cssText) {
  var selector = cssText.split("{")[0].trim();
  return selector !== "" ? selector.replace(selectorPattern, "$1") : null;
}
__name(getSelectorText, "getSelectorText");
function insertRuleAt(root, cssText, position2) {
  try {
    root.insertRule(cssText, position2);
    return true;
  } catch (e) {
    return false;
  }
}
__name(insertRuleAt, "insertRuleAt");

// ../../node_modules/react-native-web/dist/exports/StyleSheet/dom/index.js
var defaultId = "react-native-stylesheet";
var roots = /* @__PURE__ */ new WeakMap();
var sheets = [];
var initialRules = [
  // minimal top-level reset
  "html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}",
  "body{margin:0;}",
  // minimal form pseudo-element reset
  "button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}",
  "input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}"
];
function createSheet(root, id) {
  if (id === void 0) {
    id = defaultId;
  }
  var sheet2;
  if (canUseDom_default) {
    var rootNode = root != null ? root.getRootNode() : document;
    if (sheets.length === 0) {
      sheet2 = createOrderedCSSStyleSheet(createCSSStyleSheet(id));
      initialRules.forEach((rule) => {
        sheet2.insert(rule, 0);
      });
      roots.set(rootNode, sheets.length);
      sheets.push(sheet2);
    } else {
      var index2 = roots.get(rootNode);
      if (index2 == null) {
        var initialSheet = sheets[0];
        var textContent = initialSheet != null ? initialSheet.getTextContent() : "";
        sheet2 = createOrderedCSSStyleSheet(createCSSStyleSheet(id, rootNode, textContent));
        roots.set(rootNode, sheets.length);
        sheets.push(sheet2);
      } else {
        sheet2 = sheets[index2];
      }
    }
  } else {
    if (sheets.length === 0) {
      sheet2 = createOrderedCSSStyleSheet(createCSSStyleSheet(id));
      initialRules.forEach((rule) => {
        sheet2.insert(rule, 0);
      });
      sheets.push(sheet2);
    } else {
      sheet2 = sheets[0];
    }
  }
  return {
    getTextContent() {
      return sheet2.getTextContent();
    },
    id,
    insert(cssText, groupValue) {
      sheets.forEach((s) => {
        s.insert(cssText, groupValue);
      });
    }
  };
}
__name(createSheet, "createSheet");

// ../../node_modules/react-native-web/dist/exports/StyleSheet/index.js
var import_transform_localize_style = __toESM(require_transform_localize_style2());

// ../../node_modules/react-native-web/dist/modules/warnOnce/index.js
var warnedKeys = {};
function warnOnce(key, message) {
  if (process.env.NODE_ENV !== "production") {
    if (warnedKeys[key]) {
      return;
    }
    console.warn(message);
    warnedKeys[key] = true;
  }
}
__name(warnOnce, "warnOnce");

// ../../node_modules/react-native-web/dist/exports/StyleSheet/preprocess.js
var emptyObject4 = {};
var defaultOffset = {
  height: 0,
  width: 0
};
var createBoxShadowValue = /* @__PURE__ */ __name((style) => {
  var shadowColor = style.shadowColor, shadowOffset = style.shadowOffset, shadowOpacity = style.shadowOpacity, shadowRadius = style.shadowRadius;
  var _ref = shadowOffset || defaultOffset, height = _ref.height, width = _ref.width;
  var offsetX = normalizeValueWithProperty(width);
  var offsetY = normalizeValueWithProperty(height);
  var blurRadius = normalizeValueWithProperty(shadowRadius || 0);
  var color = normalizeColor_default(shadowColor || "black", shadowOpacity);
  if (color != null && offsetX != null && offsetY != null && blurRadius != null) {
    return offsetX + " " + offsetY + " " + blurRadius + " " + color;
  }
}, "createBoxShadowValue");
var createTextShadowValue = /* @__PURE__ */ __name((style) => {
  var textShadowColor = style.textShadowColor, textShadowOffset = style.textShadowOffset, textShadowRadius = style.textShadowRadius;
  var _ref2 = textShadowOffset || defaultOffset, height = _ref2.height, width = _ref2.width;
  var radius = textShadowRadius || 0;
  var offsetX = normalizeValueWithProperty(width);
  var offsetY = normalizeValueWithProperty(height);
  var blurRadius = normalizeValueWithProperty(radius);
  var color = normalizeValueWithProperty(textShadowColor, "textShadowColor");
  if (color && (height !== 0 || width !== 0 || radius !== 0) && offsetX != null && offsetY != null && blurRadius != null) {
    return offsetX + " " + offsetY + " " + blurRadius + " " + color;
  }
}, "createTextShadowValue");
var mapBoxShadow = /* @__PURE__ */ __name((boxShadow) => {
  if (typeof boxShadow === "string") {
    return boxShadow;
  }
  var offsetX = normalizeValueWithProperty(boxShadow.offsetX) || 0;
  var offsetY = normalizeValueWithProperty(boxShadow.offsetY) || 0;
  var blurRadius = normalizeValueWithProperty(boxShadow.blurRadius) || 0;
  var spreadDistance = normalizeValueWithProperty(boxShadow.spreadDistance) || 0;
  var color = normalizeColor_default(boxShadow.color) || "black";
  var position2 = boxShadow.inset ? "inset " : "";
  return "" + position2 + offsetX + " " + offsetY + " " + blurRadius + " " + spreadDistance + " " + color;
}, "mapBoxShadow");
var createBoxShadowArrayValue = /* @__PURE__ */ __name((value) => {
  return value.map(mapBoxShadow).join(", ");
}, "createBoxShadowArrayValue");
var mapTransform = /* @__PURE__ */ __name((transform) => {
  var type = Object.keys(transform)[0];
  var value = transform[type];
  if (type === "matrix" || type === "matrix3d") {
    return type + "(" + value.join(",") + ")";
  } else {
    var normalizedValue = normalizeValueWithProperty(value, type);
    return type + "(" + normalizedValue + ")";
  }
}, "mapTransform");
var createTransformValue = /* @__PURE__ */ __name((value) => {
  return value.map(mapTransform).join(" ");
}, "createTransformValue");
var createTransformOriginValue = /* @__PURE__ */ __name((value) => {
  return value.map((v) => normalizeValueWithProperty(v)).join(" ");
}, "createTransformOriginValue");
var PROPERTIES_STANDARD = {
  borderBottomEndRadius: "borderEndEndRadius",
  borderBottomStartRadius: "borderEndStartRadius",
  borderTopEndRadius: "borderStartEndRadius",
  borderTopStartRadius: "borderStartStartRadius",
  borderEndColor: "borderInlineEndColor",
  borderEndStyle: "borderInlineEndStyle",
  borderEndWidth: "borderInlineEndWidth",
  borderStartColor: "borderInlineStartColor",
  borderStartStyle: "borderInlineStartStyle",
  borderStartWidth: "borderInlineStartWidth",
  end: "insetInlineEnd",
  marginEnd: "marginInlineEnd",
  marginHorizontal: "marginInline",
  marginStart: "marginInlineStart",
  marginVertical: "marginBlock",
  paddingEnd: "paddingInlineEnd",
  paddingHorizontal: "paddingInline",
  paddingStart: "paddingInlineStart",
  paddingVertical: "paddingBlock",
  start: "insetInlineStart"
};
var ignoredProps = {
  elevation: true,
  overlayColor: true,
  resizeMode: true,
  tintColor: true
};
var preprocess = /* @__PURE__ */ __name(function preprocess2(originalStyle, options) {
  if (options === void 0) {
    options = {};
  }
  var style = originalStyle || emptyObject4;
  var nextStyle = {};
  if (options.shadow === true, style.shadowColor != null || style.shadowOffset != null || style.shadowOpacity != null || style.shadowRadius != null) {
    warnOnce("shadowStyles", '"shadow*" style props are deprecated. Use "boxShadow".');
    var boxShadowValue = createBoxShadowValue(style);
    if (boxShadowValue != null) {
      nextStyle.boxShadow = boxShadowValue;
    }
  }
  if (options.textShadow === true, style.textShadowColor != null || style.textShadowOffset != null || style.textShadowRadius != null) {
    warnOnce("textShadowStyles", '"textShadow*" style props are deprecated. Use "textShadow".');
    var textShadowValue = createTextShadowValue(style);
    if (textShadowValue != null && nextStyle.textShadow == null) {
      var textShadow = style.textShadow;
      var value = textShadow ? textShadow + ", " + textShadowValue : textShadowValue;
      nextStyle.textShadow = value;
    }
  }
  for (var originalProp in style) {
    if (
      // Ignore some React Native styles
      ignoredProps[originalProp] != null || originalProp === "shadowColor" || originalProp === "shadowOffset" || originalProp === "shadowOpacity" || originalProp === "shadowRadius" || originalProp === "textShadowColor" || originalProp === "textShadowOffset" || originalProp === "textShadowRadius"
    ) {
      continue;
    }
    var originalValue = style[originalProp];
    var prop = PROPERTIES_STANDARD[originalProp] || originalProp;
    var _value = originalValue;
    if (!Object.prototype.hasOwnProperty.call(style, originalProp) || prop !== originalProp && style[prop] != null) {
      continue;
    }
    if (prop === "aspectRatio" && typeof _value === "number") {
      nextStyle[prop] = _value.toString();
    } else if (prop === "boxShadow") {
      if (Array.isArray(_value)) {
        _value = createBoxShadowArrayValue(_value);
      }
      var boxShadow = nextStyle.boxShadow;
      nextStyle.boxShadow = boxShadow ? _value + ", " + boxShadow : _value;
    } else if (prop === "fontVariant") {
      if (Array.isArray(_value) && _value.length > 0) {
        _value = _value.join(" ");
      }
      nextStyle[prop] = _value;
    } else if (prop === "textAlignVertical") {
      if (style.verticalAlign == null) {
        nextStyle.verticalAlign = _value === "center" ? "middle" : _value;
      }
    } else if (prop === "transform") {
      if (Array.isArray(_value)) {
        _value = createTransformValue(_value);
      }
      nextStyle.transform = _value;
    } else if (prop === "transformOrigin") {
      if (Array.isArray(_value)) {
        _value = createTransformOriginValue(_value);
      }
      nextStyle.transformOrigin = _value;
    } else {
      nextStyle[prop] = _value;
    }
  }
  return nextStyle;
}, "preprocess");

// ../../node_modules/react-native-web/dist/exports/StyleSheet/index.js
var import_styleq = __toESM(require_styleq());

// ../../node_modules/react-native-web/dist/exports/StyleSheet/validate.js
var import_postcss_value_parser = __toESM(require_lib());
var invalidShortforms = {
  background: true,
  borderBottom: true,
  borderLeft: true,
  borderRight: true,
  borderTop: true,
  font: true,
  grid: true,
  outline: true,
  textDecoration: true
};
var invalidMultiValueShortforms = {
  flex: true,
  margin: true,
  padding: true,
  borderColor: true,
  borderRadius: true,
  borderStyle: true,
  borderWidth: true,
  inset: true,
  insetBlock: true,
  insetInline: true,
  marginBlock: true,
  marginInline: true,
  marginHorizontal: true,
  marginVertical: true,
  paddingBlock: true,
  paddingInline: true,
  paddingHorizontal: true,
  paddingVertical: true,
  overflow: true,
  overscrollBehavior: true,
  backgroundPosition: true
};
function error(message) {
  console.error(message);
}
__name(error, "error");
function validate(obj) {
  for (var k in obj) {
    var prop = k.trim();
    var value = obj[prop];
    var isInvalid = false;
    if (value === null) {
      continue;
    }
    if (typeof value === "string" && value.indexOf("!important") > -1) {
      error('Invalid style declaration "' + prop + ":" + value + '". Values cannot include "!important"');
      isInvalid = true;
    } else {
      var suggestion = "";
      if (prop === "animation" || prop === "animationName") {
        suggestion = 'Did you mean "animationKeyframes"?';
        isInvalid = true;
      } else if (prop === "direction") {
        suggestion = 'Did you mean "writingDirection"?';
        isInvalid = true;
      } else if (invalidShortforms[prop]) {
        suggestion = "Please use long-form properties.";
        isInvalid = true;
      } else if (invalidMultiValueShortforms[prop]) {
        if (typeof value === "string" && (0, import_postcss_value_parser.default)(value).nodes.length > 1) {
          suggestion = 'Value is "' + value + '" but only single values are supported.';
          isInvalid = true;
        }
      }
      if (suggestion !== "") {
        error('Invalid style property of "' + prop + '". ' + suggestion);
      }
    }
    if (isInvalid) {
      delete obj[k];
    }
  }
}
__name(validate, "validate");

// ../../node_modules/react-native-web/dist/exports/StyleSheet/index.js
var _excluded2 = ["writingDirection"];
var staticStyleMap = /* @__PURE__ */ new WeakMap();
var sheet = createSheet();
var defaultPreprocessOptions = {
  shadow: true,
  textShadow: true
};
function customStyleq(styles5, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, writingDirection = _options.writingDirection, preprocessOptions = (0, import_objectWithoutPropertiesLoose2.default)(_options, _excluded2);
  var isRTL2 = writingDirection === "rtl";
  return import_styleq.styleq.factory({
    transform(style) {
      var compiledStyle = staticStyleMap.get(style);
      if (compiledStyle != null) {
        return (0, import_transform_localize_style.localizeStyle)(compiledStyle, isRTL2);
      }
      return preprocess(style, (0, import_objectSpread22.default)((0, import_objectSpread22.default)({}, defaultPreprocessOptions), preprocessOptions));
    }
  })(styles5);
}
__name(customStyleq, "customStyleq");
function insertRules(compiledOrderedRules) {
  compiledOrderedRules.forEach((_ref) => {
    var rules = _ref[0], order = _ref[1];
    if (sheet != null) {
      rules.forEach((rule) => {
        sheet.insert(rule, order);
      });
    }
  });
}
__name(insertRules, "insertRules");
function compileAndInsertAtomic(style) {
  var _atomic = atomic(preprocess(style, defaultPreprocessOptions)), compiledStyle = _atomic[0], compiledOrderedRules = _atomic[1];
  insertRules(compiledOrderedRules);
  return compiledStyle;
}
__name(compileAndInsertAtomic, "compileAndInsertAtomic");
function compileAndInsertReset(style, key) {
  var _classic = classic(style, key), compiledStyle = _classic[0], compiledOrderedRules = _classic[1];
  insertRules(compiledOrderedRules);
  return compiledStyle;
}
__name(compileAndInsertReset, "compileAndInsertReset");
var absoluteFillObject = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};
var absoluteFill = create({
  x: (0, import_objectSpread22.default)({}, absoluteFillObject)
}).x;
function create(styles5) {
  Object.keys(styles5).forEach((key) => {
    var styleObj = styles5[key];
    if (styleObj != null && styleObj.$$css !== true) {
      var compiledStyles;
      if (key.indexOf("$raw") > -1) {
        compiledStyles = compileAndInsertReset(styleObj, key.split("$raw")[0]);
      } else {
        if (process.env.NODE_ENV !== "production") {
          validate(styleObj);
          styles5[key] = Object.freeze(styleObj);
        }
        compiledStyles = compileAndInsertAtomic(styleObj);
      }
      staticStyleMap.set(styleObj, compiledStyles);
    }
  });
  return styles5;
}
__name(create, "create");
function compose(style1, style2) {
  if (process.env.NODE_ENV !== "production") {
    var len = arguments.length;
    if (len > 2) {
      var readableStyles = [...arguments].map((a) => flatten(a));
      throw new Error("StyleSheet.compose() only accepts 2 arguments, received " + len + ": " + JSON.stringify(readableStyles));
    }
  }
  return [style1, style2];
}
__name(compose, "compose");
function flatten() {
  for (var _len = arguments.length, styles5 = new Array(_len), _key = 0; _key < _len; _key++) {
    styles5[_key] = arguments[_key];
  }
  var flatArray = styles5.flat(Infinity);
  var result = {};
  for (var i = 0; i < flatArray.length; i++) {
    var style = flatArray[i];
    if (style != null && typeof style === "object") {
      Object.assign(result, style);
    }
  }
  return result;
}
__name(flatten, "flatten");
function getSheet() {
  return {
    id: sheet.id,
    textContent: sheet.getTextContent()
  };
}
__name(getSheet, "getSheet");
function StyleSheet(styles5, options) {
  if (options === void 0) {
    options = {};
  }
  var isRTL2 = options.writingDirection === "rtl";
  var styleProps2 = customStyleq(styles5, options);
  if (Array.isArray(styleProps2) && styleProps2[1] != null) {
    styleProps2[1] = inline4(styleProps2[1], isRTL2);
  }
  return styleProps2;
}
__name(StyleSheet, "StyleSheet");
StyleSheet.absoluteFill = absoluteFill;
StyleSheet.absoluteFillObject = absoluteFillObject;
StyleSheet.create = create;
StyleSheet.compose = compose;
StyleSheet.flatten = flatten;
StyleSheet.getSheet = getSheet;
StyleSheet.hairlineWidth = 1;
if (canUseDom_default && window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__.resolveRNStyle = StyleSheet.flatten;
}
var stylesheet = StyleSheet;
var StyleSheet_default = stylesheet;

// ../../node_modules/react-native-web/dist/modules/createDOMProps/index.js
var _excluded3 = ["aria-activedescendant", "accessibilityActiveDescendant", "aria-atomic", "accessibilityAtomic", "aria-autocomplete", "accessibilityAutoComplete", "aria-busy", "accessibilityBusy", "aria-checked", "accessibilityChecked", "aria-colcount", "accessibilityColumnCount", "aria-colindex", "accessibilityColumnIndex", "aria-colspan", "accessibilityColumnSpan", "aria-controls", "accessibilityControls", "aria-current", "accessibilityCurrent", "aria-describedby", "accessibilityDescribedBy", "aria-details", "accessibilityDetails", "aria-disabled", "accessibilityDisabled", "aria-errormessage", "accessibilityErrorMessage", "aria-expanded", "accessibilityExpanded", "aria-flowto", "accessibilityFlowTo", "aria-haspopup", "accessibilityHasPopup", "aria-hidden", "accessibilityHidden", "aria-invalid", "accessibilityInvalid", "aria-keyshortcuts", "accessibilityKeyShortcuts", "aria-label", "accessibilityLabel", "aria-labelledby", "accessibilityLabelledBy", "aria-level", "accessibilityLevel", "aria-live", "accessibilityLiveRegion", "aria-modal", "accessibilityModal", "aria-multiline", "accessibilityMultiline", "aria-multiselectable", "accessibilityMultiSelectable", "aria-orientation", "accessibilityOrientation", "aria-owns", "accessibilityOwns", "aria-placeholder", "accessibilityPlaceholder", "aria-posinset", "accessibilityPosInSet", "aria-pressed", "accessibilityPressed", "aria-readonly", "accessibilityReadOnly", "aria-required", "accessibilityRequired", "role", "accessibilityRole", "aria-roledescription", "accessibilityRoleDescription", "aria-rowcount", "accessibilityRowCount", "aria-rowindex", "accessibilityRowIndex", "aria-rowspan", "accessibilityRowSpan", "aria-selected", "accessibilitySelected", "aria-setsize", "accessibilitySetSize", "aria-sort", "accessibilitySort", "aria-valuemax", "accessibilityValueMax", "aria-valuemin", "accessibilityValueMin", "aria-valuenow", "accessibilityValueNow", "aria-valuetext", "accessibilityValueText", "dataSet", "focusable", "id", "nativeID", "pointerEvents", "style", "tabIndex", "testID"];
var emptyObject5 = {};
var hasOwnProperty = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var uppercasePattern3 = /[A-Z]/g;
function toHyphenLower3(match) {
  return "-" + match.toLowerCase();
}
__name(toHyphenLower3, "toHyphenLower");
function hyphenateString(str) {
  return str.replace(uppercasePattern3, toHyphenLower3);
}
__name(hyphenateString, "hyphenateString");
function processIDRefList(idRefList) {
  return isArray(idRefList) ? idRefList.join(" ") : idRefList;
}
__name(processIDRefList, "processIDRefList");
var pointerEventsStyles = StyleSheet_default.create({
  auto: {
    pointerEvents: "auto"
  },
  "box-none": {
    pointerEvents: "box-none"
  },
  "box-only": {
    pointerEvents: "box-only"
  },
  none: {
    pointerEvents: "none"
  }
});
var createDOMProps = /* @__PURE__ */ __name((elementType, props, options) => {
  if (!props) {
    props = emptyObject5;
  }
  var _props = props, ariaActiveDescendant = _props["aria-activedescendant"], accessibilityActiveDescendant = _props.accessibilityActiveDescendant, ariaAtomic = _props["aria-atomic"], accessibilityAtomic = _props.accessibilityAtomic, ariaAutoComplete = _props["aria-autocomplete"], accessibilityAutoComplete = _props.accessibilityAutoComplete, ariaBusy = _props["aria-busy"], accessibilityBusy = _props.accessibilityBusy, ariaChecked = _props["aria-checked"], accessibilityChecked = _props.accessibilityChecked, ariaColumnCount = _props["aria-colcount"], accessibilityColumnCount = _props.accessibilityColumnCount, ariaColumnIndex = _props["aria-colindex"], accessibilityColumnIndex = _props.accessibilityColumnIndex, ariaColumnSpan = _props["aria-colspan"], accessibilityColumnSpan = _props.accessibilityColumnSpan, ariaControls = _props["aria-controls"], accessibilityControls = _props.accessibilityControls, ariaCurrent = _props["aria-current"], accessibilityCurrent = _props.accessibilityCurrent, ariaDescribedBy = _props["aria-describedby"], accessibilityDescribedBy = _props.accessibilityDescribedBy, ariaDetails = _props["aria-details"], accessibilityDetails = _props.accessibilityDetails, ariaDisabled = _props["aria-disabled"], accessibilityDisabled = _props.accessibilityDisabled, ariaErrorMessage = _props["aria-errormessage"], accessibilityErrorMessage = _props.accessibilityErrorMessage, ariaExpanded = _props["aria-expanded"], accessibilityExpanded = _props.accessibilityExpanded, ariaFlowTo = _props["aria-flowto"], accessibilityFlowTo = _props.accessibilityFlowTo, ariaHasPopup = _props["aria-haspopup"], accessibilityHasPopup = _props.accessibilityHasPopup, ariaHidden = _props["aria-hidden"], accessibilityHidden = _props.accessibilityHidden, ariaInvalid = _props["aria-invalid"], accessibilityInvalid = _props.accessibilityInvalid, ariaKeyShortcuts = _props["aria-keyshortcuts"], accessibilityKeyShortcuts = _props.accessibilityKeyShortcuts, ariaLabel = _props["aria-label"], accessibilityLabel = _props.accessibilityLabel, ariaLabelledBy = _props["aria-labelledby"], accessibilityLabelledBy = _props.accessibilityLabelledBy, ariaLevel = _props["aria-level"], accessibilityLevel = _props.accessibilityLevel, ariaLive = _props["aria-live"], accessibilityLiveRegion = _props.accessibilityLiveRegion, ariaModal = _props["aria-modal"], accessibilityModal = _props.accessibilityModal, ariaMultiline = _props["aria-multiline"], accessibilityMultiline = _props.accessibilityMultiline, ariaMultiSelectable = _props["aria-multiselectable"], accessibilityMultiSelectable = _props.accessibilityMultiSelectable, ariaOrientation = _props["aria-orientation"], accessibilityOrientation = _props.accessibilityOrientation, ariaOwns = _props["aria-owns"], accessibilityOwns = _props.accessibilityOwns, ariaPlaceholder = _props["aria-placeholder"], accessibilityPlaceholder = _props.accessibilityPlaceholder, ariaPosInSet = _props["aria-posinset"], accessibilityPosInSet = _props.accessibilityPosInSet, ariaPressed = _props["aria-pressed"], accessibilityPressed = _props.accessibilityPressed, ariaReadOnly = _props["aria-readonly"], accessibilityReadOnly = _props.accessibilityReadOnly, ariaRequired = _props["aria-required"], accessibilityRequired = _props.accessibilityRequired, ariaRole = _props.role, accessibilityRole = _props.accessibilityRole, ariaRoleDescription = _props["aria-roledescription"], accessibilityRoleDescription = _props.accessibilityRoleDescription, ariaRowCount = _props["aria-rowcount"], accessibilityRowCount = _props.accessibilityRowCount, ariaRowIndex = _props["aria-rowindex"], accessibilityRowIndex = _props.accessibilityRowIndex, ariaRowSpan = _props["aria-rowspan"], accessibilityRowSpan = _props.accessibilityRowSpan, ariaSelected = _props["aria-selected"], accessibilitySelected = _props.accessibilitySelected, ariaSetSize = _props["aria-setsize"], accessibilitySetSize = _props.accessibilitySetSize, ariaSort = _props["aria-sort"], accessibilitySort = _props.accessibilitySort, ariaValueMax = _props["aria-valuemax"], accessibilityValueMax = _props.accessibilityValueMax, ariaValueMin = _props["aria-valuemin"], accessibilityValueMin = _props.accessibilityValueMin, ariaValueNow = _props["aria-valuenow"], accessibilityValueNow = _props.accessibilityValueNow, ariaValueText = _props["aria-valuetext"], accessibilityValueText = _props.accessibilityValueText, dataSet = _props.dataSet, focusable = _props.focusable, id = _props.id, nativeID = _props.nativeID, pointerEvents = _props.pointerEvents, style = _props.style, tabIndex = _props.tabIndex, testID = _props.testID, domProps = (0, import_objectWithoutPropertiesLoose3.default)(_props, _excluded3);
  var disabled = ariaDisabled || accessibilityDisabled;
  var role = AccessibilityUtil_default.propsToAriaRole(props);
  var _ariaActiveDescendant = ariaActiveDescendant != null ? ariaActiveDescendant : accessibilityActiveDescendant;
  if (_ariaActiveDescendant != null) {
    domProps["aria-activedescendant"] = _ariaActiveDescendant;
  }
  var _ariaAtomic = ariaAtomic != null ? ariaActiveDescendant : accessibilityAtomic;
  if (_ariaAtomic != null) {
    domProps["aria-atomic"] = _ariaAtomic;
  }
  var _ariaAutoComplete = ariaAutoComplete != null ? ariaAutoComplete : accessibilityAutoComplete;
  if (_ariaAutoComplete != null) {
    domProps["aria-autocomplete"] = _ariaAutoComplete;
  }
  var _ariaBusy = ariaBusy != null ? ariaBusy : accessibilityBusy;
  if (_ariaBusy != null) {
    domProps["aria-busy"] = _ariaBusy;
  }
  var _ariaChecked = ariaChecked != null ? ariaChecked : accessibilityChecked;
  if (_ariaChecked != null) {
    domProps["aria-checked"] = _ariaChecked;
  }
  var _ariaColumnCount = ariaColumnCount != null ? ariaColumnCount : accessibilityColumnCount;
  if (_ariaColumnCount != null) {
    domProps["aria-colcount"] = _ariaColumnCount;
  }
  var _ariaColumnIndex = ariaColumnIndex != null ? ariaColumnIndex : accessibilityColumnIndex;
  if (_ariaColumnIndex != null) {
    domProps["aria-colindex"] = _ariaColumnIndex;
  }
  var _ariaColumnSpan = ariaColumnSpan != null ? ariaColumnSpan : accessibilityColumnSpan;
  if (_ariaColumnSpan != null) {
    domProps["aria-colspan"] = _ariaColumnSpan;
  }
  var _ariaControls = ariaControls != null ? ariaControls : accessibilityControls;
  if (_ariaControls != null) {
    domProps["aria-controls"] = processIDRefList(_ariaControls);
  }
  var _ariaCurrent = ariaCurrent != null ? ariaCurrent : accessibilityCurrent;
  if (_ariaCurrent != null) {
    domProps["aria-current"] = _ariaCurrent;
  }
  var _ariaDescribedBy = ariaDescribedBy != null ? ariaDescribedBy : accessibilityDescribedBy;
  if (_ariaDescribedBy != null) {
    domProps["aria-describedby"] = processIDRefList(_ariaDescribedBy);
  }
  var _ariaDetails = ariaDetails != null ? ariaDetails : accessibilityDetails;
  if (_ariaDetails != null) {
    domProps["aria-details"] = _ariaDetails;
  }
  if (disabled === true) {
    domProps["aria-disabled"] = true;
    if (elementType === "button" || elementType === "form" || elementType === "input" || elementType === "select" || elementType === "textarea") {
      domProps.disabled = true;
    }
  }
  var _ariaErrorMessage = ariaErrorMessage != null ? ariaErrorMessage : accessibilityErrorMessage;
  if (_ariaErrorMessage != null) {
    domProps["aria-errormessage"] = _ariaErrorMessage;
  }
  var _ariaExpanded = ariaExpanded != null ? ariaExpanded : accessibilityExpanded;
  if (_ariaExpanded != null) {
    domProps["aria-expanded"] = _ariaExpanded;
  }
  var _ariaFlowTo = ariaFlowTo != null ? ariaFlowTo : accessibilityFlowTo;
  if (_ariaFlowTo != null) {
    domProps["aria-flowto"] = processIDRefList(_ariaFlowTo);
  }
  var _ariaHasPopup = ariaHasPopup != null ? ariaHasPopup : accessibilityHasPopup;
  if (_ariaHasPopup != null) {
    domProps["aria-haspopup"] = _ariaHasPopup;
  }
  var _ariaHidden = ariaHidden != null ? ariaHidden : accessibilityHidden;
  if (_ariaHidden === true) {
    domProps["aria-hidden"] = _ariaHidden;
  }
  var _ariaInvalid = ariaInvalid != null ? ariaInvalid : accessibilityInvalid;
  if (_ariaInvalid != null) {
    domProps["aria-invalid"] = _ariaInvalid;
  }
  var _ariaKeyShortcuts = ariaKeyShortcuts != null ? ariaKeyShortcuts : accessibilityKeyShortcuts;
  if (_ariaKeyShortcuts != null) {
    domProps["aria-keyshortcuts"] = processIDRefList(_ariaKeyShortcuts);
  }
  var _ariaLabel = ariaLabel != null ? ariaLabel : accessibilityLabel;
  if (_ariaLabel != null) {
    domProps["aria-label"] = _ariaLabel;
  }
  var _ariaLabelledBy = ariaLabelledBy != null ? ariaLabelledBy : accessibilityLabelledBy;
  if (_ariaLabelledBy != null) {
    domProps["aria-labelledby"] = processIDRefList(_ariaLabelledBy);
  }
  var _ariaLevel = ariaLevel != null ? ariaLevel : accessibilityLevel;
  if (_ariaLevel != null) {
    domProps["aria-level"] = _ariaLevel;
  }
  var _ariaLive = ariaLive != null ? ariaLive : accessibilityLiveRegion;
  if (_ariaLive != null) {
    domProps["aria-live"] = _ariaLive === "none" ? "off" : _ariaLive;
  }
  var _ariaModal = ariaModal != null ? ariaModal : accessibilityModal;
  if (_ariaModal != null) {
    domProps["aria-modal"] = _ariaModal;
  }
  var _ariaMultiline = ariaMultiline != null ? ariaMultiline : accessibilityMultiline;
  if (_ariaMultiline != null) {
    domProps["aria-multiline"] = _ariaMultiline;
  }
  var _ariaMultiSelectable = ariaMultiSelectable != null ? ariaMultiSelectable : accessibilityMultiSelectable;
  if (_ariaMultiSelectable != null) {
    domProps["aria-multiselectable"] = _ariaMultiSelectable;
  }
  var _ariaOrientation = ariaOrientation != null ? ariaOrientation : accessibilityOrientation;
  if (_ariaOrientation != null) {
    domProps["aria-orientation"] = _ariaOrientation;
  }
  var _ariaOwns = ariaOwns != null ? ariaOwns : accessibilityOwns;
  if (_ariaOwns != null) {
    domProps["aria-owns"] = processIDRefList(_ariaOwns);
  }
  var _ariaPlaceholder = ariaPlaceholder != null ? ariaPlaceholder : accessibilityPlaceholder;
  if (_ariaPlaceholder != null) {
    domProps["aria-placeholder"] = _ariaPlaceholder;
  }
  var _ariaPosInSet = ariaPosInSet != null ? ariaPosInSet : accessibilityPosInSet;
  if (_ariaPosInSet != null) {
    domProps["aria-posinset"] = _ariaPosInSet;
  }
  var _ariaPressed = ariaPressed != null ? ariaPressed : accessibilityPressed;
  if (_ariaPressed != null) {
    domProps["aria-pressed"] = _ariaPressed;
  }
  var _ariaReadOnly = ariaReadOnly != null ? ariaReadOnly : accessibilityReadOnly;
  if (_ariaReadOnly != null) {
    domProps["aria-readonly"] = _ariaReadOnly;
    if (elementType === "input" || elementType === "select" || elementType === "textarea") {
      domProps.readOnly = true;
    }
  }
  var _ariaRequired = ariaRequired != null ? ariaRequired : accessibilityRequired;
  if (_ariaRequired != null) {
    domProps["aria-required"] = _ariaRequired;
    if (elementType === "input" || elementType === "select" || elementType === "textarea") {
      domProps.required = accessibilityRequired;
    }
  }
  if (role != null) {
    domProps["role"] = role === "none" ? "presentation" : role;
  }
  var _ariaRoleDescription = ariaRoleDescription != null ? ariaRoleDescription : accessibilityRoleDescription;
  if (_ariaRoleDescription != null) {
    domProps["aria-roledescription"] = _ariaRoleDescription;
  }
  var _ariaRowCount = ariaRowCount != null ? ariaRowCount : accessibilityRowCount;
  if (_ariaRowCount != null) {
    domProps["aria-rowcount"] = _ariaRowCount;
  }
  var _ariaRowIndex = ariaRowIndex != null ? ariaRowIndex : accessibilityRowIndex;
  if (_ariaRowIndex != null) {
    domProps["aria-rowindex"] = _ariaRowIndex;
  }
  var _ariaRowSpan = ariaRowSpan != null ? ariaRowSpan : accessibilityRowSpan;
  if (_ariaRowSpan != null) {
    domProps["aria-rowspan"] = _ariaRowSpan;
  }
  var _ariaSelected = ariaSelected != null ? ariaSelected : accessibilitySelected;
  if (_ariaSelected != null) {
    domProps["aria-selected"] = _ariaSelected;
  }
  var _ariaSetSize = ariaSetSize != null ? ariaSetSize : accessibilitySetSize;
  if (_ariaSetSize != null) {
    domProps["aria-setsize"] = _ariaSetSize;
  }
  var _ariaSort = ariaSort != null ? ariaSort : accessibilitySort;
  if (_ariaSort != null) {
    domProps["aria-sort"] = _ariaSort;
  }
  var _ariaValueMax = ariaValueMax != null ? ariaValueMax : accessibilityValueMax;
  if (_ariaValueMax != null) {
    domProps["aria-valuemax"] = _ariaValueMax;
  }
  var _ariaValueMin = ariaValueMin != null ? ariaValueMin : accessibilityValueMin;
  if (_ariaValueMin != null) {
    domProps["aria-valuemin"] = _ariaValueMin;
  }
  var _ariaValueNow = ariaValueNow != null ? ariaValueNow : accessibilityValueNow;
  if (_ariaValueNow != null) {
    domProps["aria-valuenow"] = _ariaValueNow;
  }
  var _ariaValueText = ariaValueText != null ? ariaValueText : accessibilityValueText;
  if (_ariaValueText != null) {
    domProps["aria-valuetext"] = _ariaValueText;
  }
  if (dataSet != null) {
    for (var dataProp in dataSet) {
      if (hasOwnProperty.call(dataSet, dataProp)) {
        var dataName = hyphenateString(dataProp);
        var dataValue = dataSet[dataProp];
        if (dataValue != null) {
          domProps["data-" + dataName] = dataValue;
        }
      }
    }
  }
  if (tabIndex === 0 || tabIndex === "0" || tabIndex === -1 || tabIndex === "-1") {
    domProps.tabIndex = tabIndex;
  } else {
    if (focusable === false) {
      domProps.tabIndex = "-1";
    }
    if (
      // These native elements are keyboard focusable by default
      elementType === "a" || elementType === "button" || elementType === "input" || elementType === "select" || elementType === "textarea"
    ) {
      if (focusable === false || accessibilityDisabled === true) {
        domProps.tabIndex = "-1";
      }
    } else if (
      // These roles are made keyboard focusable by default
      role === "button" || role === "checkbox" || role === "link" || role === "radio" || role === "textbox" || role === "switch"
    ) {
      if (focusable !== false) {
        domProps.tabIndex = "0";
      }
    } else {
      if (focusable === true) {
        domProps.tabIndex = "0";
      }
    }
  }
  if (pointerEvents != null) {
    warnOnce("pointerEvents", "props.pointerEvents is deprecated. Use style.pointerEvents");
  }
  var _StyleSheet = StyleSheet_default([style, pointerEvents && pointerEventsStyles[pointerEvents]], (0, import_objectSpread23.default)({
    writingDirection: "ltr"
  }, options)), className = _StyleSheet[0], inlineStyle = _StyleSheet[1];
  if (className) {
    domProps.className = className;
  }
  if (inlineStyle) {
    domProps.style = inlineStyle;
  }
  var _id = id != null ? id : nativeID;
  if (_id != null) {
    domProps.id = _id;
  }
  if (testID != null) {
    domProps["data-testid"] = testID;
  }
  if (domProps.type == null && elementType === "button") {
    domProps.type = "button";
  }
  return domProps;
}, "createDOMProps");
var createDOMProps_default = createDOMProps;

// ../../node_modules/react-native-web/dist/exports/createElement/index.js
import React52 from "react";

// ../../node_modules/react-native-web/dist/modules/useLocale/index.js
import React51, { createContext as createContext12, useContext as useContext15 } from "react";

// ../../node_modules/react-native-web/dist/modules/useLocale/isLocaleRTL.js
var rtlScripts = /* @__PURE__ */ new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]);
var rtlLangs = /* @__PURE__ */ new Set([
  "ae",
  // Avestan
  "ar",
  // Arabic
  "arc",
  // Aramaic
  "bcc",
  // Southern Balochi
  "bqi",
  // Bakthiari
  "ckb",
  // Sorani
  "dv",
  // Dhivehi
  "fa",
  "far",
  // Persian
  "glk",
  // Gilaki
  "he",
  "iw",
  // Hebrew
  "khw",
  // Khowar
  "ks",
  // Kashmiri
  "ku",
  // Kurdish
  "mzn",
  // Mazanderani
  "nqo",
  // N'Ko
  "pnb",
  // Western Punjabi
  "ps",
  // Pashto
  "sd",
  // Sindhi
  "ug",
  // Uyghur
  "ur",
  // Urdu
  "yi"
  // Yiddish
]);
var cache7 = /* @__PURE__ */ new Map();
function isLocaleRTL(locale) {
  var cachedRTL = cache7.get(locale);
  if (cachedRTL) {
    return cachedRTL;
  }
  var isRTL2 = false;
  if (Intl.Locale) {
    try {
      var script = new Intl.Locale(locale).maximize().script;
      isRTL2 = rtlScripts.has(script);
    } catch (_unused) {
      var lang = locale.split("-")[0];
      isRTL2 = rtlLangs.has(lang);
    }
  } else {
    var _lang = locale.split("-")[0];
    isRTL2 = rtlLangs.has(_lang);
  }
  cache7.set(locale, isRTL2);
  return isRTL2;
}
__name(isLocaleRTL, "isLocaleRTL");

// ../../node_modules/react-native-web/dist/modules/useLocale/index.js
var defaultLocale = {
  direction: "ltr",
  locale: "en-US"
};
var LocaleContext = /* @__PURE__ */ createContext12(defaultLocale);
function getLocaleDirection(locale) {
  return isLocaleRTL(locale) ? "rtl" : "ltr";
}
__name(getLocaleDirection, "getLocaleDirection");
function LocaleProvider(props) {
  var direction = props.direction, locale = props.locale, children = props.children;
  var needsContext = direction || locale;
  return needsContext ? /* @__PURE__ */ React51.createElement(LocaleContext.Provider, {
    children,
    value: {
      direction: locale ? getLocaleDirection(locale) : direction,
      locale
    }
  }) : children;
}
__name(LocaleProvider, "LocaleProvider");
function useLocaleContext() {
  return useContext15(LocaleContext);
}
__name(useLocaleContext, "useLocaleContext");

// ../../node_modules/react-native-web/dist/exports/createElement/index.js
var createElement2 = /* @__PURE__ */ __name((component, props, options) => {
  var accessibilityComponent;
  if (component && component.constructor === String) {
    accessibilityComponent = AccessibilityUtil_default.propsToAccessibilityComponent(props);
  }
  var Component = accessibilityComponent || component;
  var domProps = createDOMProps_default(Component, props, options);
  var element = /* @__PURE__ */ React52.createElement(Component, domProps);
  var elementWithLocaleProvider = domProps.dir ? /* @__PURE__ */ React52.createElement(LocaleProvider, {
    children: element,
    direction: domProps.dir,
    locale: domProps.lang
  }) : element;
  return elementWithLocaleProvider;
}, "createElement");
var createElement_default = createElement2;

// ../../node_modules/react-native-web/dist/modules/getBoundingClientRect/index.js
var getBoundingClientRect2 = /* @__PURE__ */ __name((node) => {
  if (node != null) {
    var isElement3 = node.nodeType === 1;
    if (isElement3 && typeof node.getBoundingClientRect === "function") {
      return node.getBoundingClientRect();
    }
  }
}, "getBoundingClientRect");
var getBoundingClientRect_default = getBoundingClientRect2;

// ../../node_modules/react-native-web/dist/modules/unitlessNumbers/index.js
var unitlessNumbers2 = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexOrder: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  fontWeight: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowGap: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnGap: true,
  gridColumnStart: true,
  lineClamp: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true,
  // transform types
  scale: true,
  scaleX: true,
  scaleY: true,
  scaleZ: true,
  // RN properties
  shadowOpacity: true
};
var prefixes3 = ["ms", "Moz", "O", "Webkit"];
var prefixKey2 = /* @__PURE__ */ __name((prefix, key) => {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}, "prefixKey");
Object.keys(unitlessNumbers2).forEach((prop) => {
  prefixes3.forEach((prefix) => {
    unitlessNumbers2[prefixKey2(prefix, prop)] = unitlessNumbers2[prop];
  });
});
var unitlessNumbers_default2 = unitlessNumbers2;

// ../../node_modules/react-native-web/dist/modules/setValueForStyles/dangerousStyleValue.js
function dangerousStyleValue(name, value, isCustomProperty) {
  var isEmpty = value == null || typeof value === "boolean" || value === "";
  if (isEmpty) {
    return "";
  }
  if (!isCustomProperty && typeof value === "number" && value !== 0 && !(unitlessNumbers_default2.hasOwnProperty(name) && unitlessNumbers_default2[name])) {
    return value + "px";
  }
  return ("" + value).trim();
}
__name(dangerousStyleValue, "dangerousStyleValue");
var dangerousStyleValue_default = dangerousStyleValue;

// ../../node_modules/react-native-web/dist/modules/setValueForStyles/index.js
function setValueForStyles(node, styles5) {
  var style = node.style;
  for (var styleName in styles5) {
    if (!styles5.hasOwnProperty(styleName)) {
      continue;
    }
    var isCustomProperty = styleName.indexOf("--") === 0;
    var styleValue = dangerousStyleValue_default(styleName, styles5[styleName], isCustomProperty);
    if (styleName === "float") {
      styleName = "cssFloat";
    }
    if (isCustomProperty) {
      style.setProperty(styleName, styleValue);
    } else {
      style[styleName] = styleValue;
    }
  }
}
__name(setValueForStyles, "setValueForStyles");
var setValueForStyles_default = setValueForStyles;

// ../../node_modules/react-native-web/dist/exports/UIManager/index.js
var getRect = /* @__PURE__ */ __name((node) => {
  var height = node.offsetHeight;
  var width = node.offsetWidth;
  var left2 = node.offsetLeft;
  var top = node.offsetTop;
  node = node.offsetParent;
  while (node && node.nodeType === 1) {
    left2 += node.offsetLeft + node.clientLeft - node.scrollLeft;
    top += node.offsetTop + node.clientTop - node.scrollTop;
    node = node.offsetParent;
  }
  top -= window.scrollY;
  left2 -= window.scrollX;
  return {
    width,
    height,
    top,
    left: left2
  };
}, "getRect");
var measureLayout = /* @__PURE__ */ __name((node, relativeToNativeNode, callback) => {
  var relativeNode = relativeToNativeNode || node && node.parentNode;
  if (node && relativeNode) {
    setTimeout(() => {
      if (node.isConnected && relativeNode.isConnected) {
        var relativeRect = getRect(relativeNode);
        var _getRect = getRect(node), height = _getRect.height, left2 = _getRect.left, top = _getRect.top, width = _getRect.width;
        var x = left2 - relativeRect.left;
        var y = top - relativeRect.top;
        callback(x, y, width, height, left2, top);
      }
    }, 0);
  }
}, "measureLayout");
var elementsToIgnore = {
  A: true,
  BODY: true,
  INPUT: true,
  SELECT: true,
  TEXTAREA: true
};
var UIManager = {
  blur(node) {
    try {
      node.blur();
    } catch (err) {
    }
  },
  focus(node) {
    try {
      var name = node.nodeName;
      if (node.getAttribute("tabIndex") == null && node.isContentEditable !== true && elementsToIgnore[name] == null) {
        node.setAttribute("tabIndex", "-1");
      }
      node.focus();
    } catch (err) {
    }
  },
  measure(node, callback) {
    measureLayout(node, null, callback);
  },
  measureInWindow(node, callback) {
    if (node) {
      setTimeout(() => {
        var _getBoundingClientRec = getBoundingClientRect_default(node), height = _getBoundingClientRec.height, left2 = _getBoundingClientRec.left, top = _getBoundingClientRec.top, width = _getBoundingClientRec.width;
        callback(left2, top, width, height);
      }, 0);
    }
  },
  measureLayout(node, relativeToNativeNode, onFail, onSuccess) {
    measureLayout(node, relativeToNativeNode, onSuccess);
  },
  updateView(node, props) {
    for (var prop in props) {
      if (!Object.prototype.hasOwnProperty.call(props, prop)) {
        continue;
      }
      var value = props[prop];
      switch (prop) {
        case "style": {
          setValueForStyles_default(node, value);
          break;
        }
        case "class":
        case "className": {
          node.setAttribute("class", value);
          break;
        }
        case "text":
        case "value":
          node.value = value;
          break;
        default:
          node.setAttribute(prop, value);
      }
    }
  },
  configureNextLayoutAnimation(config, onAnimationDidEnd) {
    onAnimationDidEnd();
  },
  // mocks
  setLayoutAnimationEnabledExperimental() {
  }
};
var UIManager_default = UIManager;

// ../../node_modules/react-native-web/dist/exports/Platform/index.js
var Platform = {
  OS: "web",
  select: /* @__PURE__ */ __name((obj) => "web" in obj ? obj.web : obj.default, "select"),
  get isTesting() {
    if (process.env.NODE_ENV === "test") {
      return true;
    }
    return false;
  },
  get Version() {
    return "0.0.0";
  }
};
var Platform_default = Platform;

// ../../node_modules/react-native-web/dist/exports/View/index.js
var import_objectWithoutPropertiesLoose4 = __toESM(require_objectWithoutPropertiesLoose());
import * as React57 from "react";

// ../../node_modules/react-native-web/dist/modules/forwardedProps/index.js
var defaultProps = {
  children: true,
  dataSet: true,
  dir: true,
  id: true,
  ref: true,
  suppressHydrationWarning: true,
  tabIndex: true,
  testID: true,
  // @deprecated
  focusable: true,
  nativeID: true
};
var accessibilityProps = {
  "aria-activedescendant": true,
  "aria-atomic": true,
  "aria-autocomplete": true,
  "aria-busy": true,
  "aria-checked": true,
  "aria-colcount": true,
  "aria-colindex": true,
  "aria-colspan": true,
  "aria-controls": true,
  "aria-current": true,
  "aria-describedby": true,
  "aria-details": true,
  "aria-disabled": true,
  "aria-errormessage": true,
  "aria-expanded": true,
  "aria-flowto": true,
  "aria-haspopup": true,
  "aria-hidden": true,
  "aria-invalid": true,
  "aria-keyshortcuts": true,
  "aria-label": true,
  "aria-labelledby": true,
  "aria-level": true,
  "aria-live": true,
  "aria-modal": true,
  "aria-multiline": true,
  "aria-multiselectable": true,
  "aria-orientation": true,
  "aria-owns": true,
  "aria-placeholder": true,
  "aria-posinset": true,
  "aria-pressed": true,
  "aria-readonly": true,
  "aria-required": true,
  inert: true,
  role: true,
  "aria-roledescription": true,
  "aria-rowcount": true,
  "aria-rowindex": true,
  "aria-rowspan": true,
  "aria-selected": true,
  "aria-setsize": true,
  "aria-sort": true,
  "aria-valuemax": true,
  "aria-valuemin": true,
  "aria-valuenow": true,
  "aria-valuetext": true,
  // @deprecated
  accessibilityActiveDescendant: true,
  accessibilityAtomic: true,
  accessibilityAutoComplete: true,
  accessibilityBusy: true,
  accessibilityChecked: true,
  accessibilityColumnCount: true,
  accessibilityColumnIndex: true,
  accessibilityColumnSpan: true,
  accessibilityControls: true,
  accessibilityCurrent: true,
  accessibilityDescribedBy: true,
  accessibilityDetails: true,
  accessibilityDisabled: true,
  accessibilityErrorMessage: true,
  accessibilityExpanded: true,
  accessibilityFlowTo: true,
  accessibilityHasPopup: true,
  accessibilityHidden: true,
  accessibilityInvalid: true,
  accessibilityKeyShortcuts: true,
  accessibilityLabel: true,
  accessibilityLabelledBy: true,
  accessibilityLevel: true,
  accessibilityLiveRegion: true,
  accessibilityModal: true,
  accessibilityMultiline: true,
  accessibilityMultiSelectable: true,
  accessibilityOrientation: true,
  accessibilityOwns: true,
  accessibilityPlaceholder: true,
  accessibilityPosInSet: true,
  accessibilityPressed: true,
  accessibilityReadOnly: true,
  accessibilityRequired: true,
  accessibilityRole: true,
  accessibilityRoleDescription: true,
  accessibilityRowCount: true,
  accessibilityRowIndex: true,
  accessibilityRowSpan: true,
  accessibilitySelected: true,
  accessibilitySetSize: true,
  accessibilitySort: true,
  accessibilityValueMax: true,
  accessibilityValueMin: true,
  accessibilityValueNow: true,
  accessibilityValueText: true
};
var clickProps = {
  onClick: true,
  onAuxClick: true,
  onContextMenu: true,
  onGotPointerCapture: true,
  onLostPointerCapture: true,
  onPointerCancel: true,
  onPointerDown: true,
  onPointerEnter: true,
  onPointerMove: true,
  onPointerLeave: true,
  onPointerOut: true,
  onPointerOver: true,
  onPointerUp: true
};
var focusProps = {
  onBlur: true,
  onFocus: true
};
var keyboardProps = {
  onKeyDown: true,
  onKeyDownCapture: true,
  onKeyUp: true,
  onKeyUpCapture: true
};
var mouseProps = {
  onMouseDown: true,
  onMouseEnter: true,
  onMouseLeave: true,
  onMouseMove: true,
  onMouseOver: true,
  onMouseOut: true,
  onMouseUp: true
};
var touchProps = {
  onTouchCancel: true,
  onTouchCancelCapture: true,
  onTouchEnd: true,
  onTouchEndCapture: true,
  onTouchMove: true,
  onTouchMoveCapture: true,
  onTouchStart: true,
  onTouchStartCapture: true
};
var styleProps = {
  style: true
};

// ../../node_modules/react-native-web/dist/modules/pick/index.js
function pick(obj, list) {
  var nextObj = {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (list[key] === true) {
        nextObj[key] = obj[key];
      }
    }
  }
  return nextObj;
}
__name(pick, "pick");

// ../../node_modules/react-native-web/dist/modules/useLayoutEffect/index.js
import { useEffect as useEffect26, useLayoutEffect as useLayoutEffect8 } from "react";
var useLayoutEffectImpl = canUseDom_default ? useLayoutEffect8 : useEffect26;
var useLayoutEffect_default = useLayoutEffectImpl;

// ../../node_modules/react-native-web/dist/modules/useElementLayout/index.js
var DOM_LAYOUT_HANDLER_NAME = "__reactLayoutHandler";
var didWarn = !canUseDom_default;
var resizeObserver = null;
function getResizeObserver() {
  if (canUseDom_default && typeof window.ResizeObserver !== "undefined") {
    if (resizeObserver == null) {
      resizeObserver = new window.ResizeObserver(function(entries) {
        entries.forEach((entry) => {
          var node = entry.target;
          var onLayout = node[DOM_LAYOUT_HANDLER_NAME];
          if (typeof onLayout === "function") {
            UIManager_default.measure(node, (x, y, width, height, left2, top) => {
              var event = {
                // $FlowFixMe
                nativeEvent: {
                  layout: {
                    x,
                    y,
                    width,
                    height,
                    left: left2,
                    top
                  }
                },
                timeStamp: Date.now()
              };
              Object.defineProperty(event.nativeEvent, "target", {
                enumerable: true,
                get: /* @__PURE__ */ __name(() => entry.target, "get")
              });
              onLayout(event);
            });
          }
        });
      });
    }
  } else if (!didWarn) {
    if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test") {
      console.warn("onLayout relies on ResizeObserver which is not supported by your browser. Please include a polyfill, e.g., https://github.com/que-etc/resize-observer-polyfill.");
      didWarn = true;
    }
  }
  return resizeObserver;
}
__name(getResizeObserver, "getResizeObserver");
function useElementLayout(ref, onLayout) {
  var observer = getResizeObserver();
  useLayoutEffect_default(() => {
    var node = ref.current;
    if (node != null) {
      node[DOM_LAYOUT_HANDLER_NAME] = onLayout;
    }
  }, [ref, onLayout]);
  useLayoutEffect_default(() => {
    var node = ref.current;
    if (node != null && observer != null) {
      if (typeof node[DOM_LAYOUT_HANDLER_NAME] === "function") {
        observer.observe(node);
      } else {
        observer.unobserve(node);
      }
    }
    return () => {
      if (node != null && observer != null) {
        observer.unobserve(node);
      }
    };
  }, [ref, observer]);
}
__name(useElementLayout, "useElementLayout");

// ../../node_modules/react-native-web/dist/modules/useMergeRefs/index.js
import * as React54 from "react";

// ../../node_modules/react-native-web/dist/modules/mergeRefs/index.js
import * as React53 from "react";
function mergeRefs() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return /* @__PURE__ */ __name(function forwardRef30(node) {
    args.forEach((ref) => {
      if (ref == null) {
        return;
      }
      if (typeof ref === "function") {
        ref(node);
        return;
      }
      if (typeof ref === "object") {
        ref.current = node;
        return;
      }
      console.error("mergeRefs cannot handle Refs of type boolean, number or string, received ref " + String(ref));
    });
  }, "forwardRef");
}
__name(mergeRefs, "mergeRefs");

// ../../node_modules/react-native-web/dist/modules/useMergeRefs/index.js
function useMergeRefs() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return React54.useMemo(
    () => mergeRefs(...args),
    // eslint-disable-next-line
    [...args]
  );
}
__name(useMergeRefs, "useMergeRefs");

// ../../node_modules/react-native-web/dist/modules/useStable/index.js
import * as React55 from "react";
var UNINITIALIZED = typeof Symbol === "function" && typeof /* @__PURE__ */ Symbol() === "symbol" ? /* @__PURE__ */ Symbol() : Object.freeze({});
function useStable(getInitialValue) {
  var ref = React55.useRef(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = getInitialValue();
  }
  return ref.current;
}
__name(useStable, "useStable");

// ../../node_modules/react-native-web/dist/modules/usePlatformMethods/index.js
function usePlatformMethods(_ref) {
  var pointerEvents = _ref.pointerEvents, style = _ref.style;
  var ref = useStable(() => (hostNode) => {
    if (hostNode != null) {
      hostNode.measure = (callback) => UIManager_default.measure(hostNode, callback);
      hostNode.measureLayout = (relativeToNode, success, failure) => UIManager_default.measureLayout(hostNode, relativeToNode, failure, success);
      hostNode.measureInWindow = (callback) => UIManager_default.measureInWindow(hostNode, callback);
    }
  });
  return ref;
}
__name(usePlatformMethods, "usePlatformMethods");

// ../../node_modules/react-native-web/dist/modules/useResponderEvents/index.js
import * as React56 from "react";

// ../../node_modules/react-native-web/dist/modules/useResponderEvents/createResponderEvent.js
var emptyFunction = /* @__PURE__ */ __name(() => {
}, "emptyFunction");
var emptyObject6 = {};
var emptyArray = [];
function normalizeIdentifier(identifier) {
  return identifier > 20 ? identifier % 20 : identifier;
}
__name(normalizeIdentifier, "normalizeIdentifier");
function createResponderEvent(domEvent, responderTouchHistoryStore2) {
  var rect;
  var propagationWasStopped = false;
  var changedTouches;
  var touches;
  var domEventChangedTouches = domEvent.changedTouches;
  var domEventType = domEvent.type;
  var metaKey = domEvent.metaKey === true;
  var shiftKey = domEvent.shiftKey === true;
  var force = domEventChangedTouches && domEventChangedTouches[0].force || 0;
  var identifier = normalizeIdentifier(domEventChangedTouches && domEventChangedTouches[0].identifier || 0);
  var clientX = domEventChangedTouches && domEventChangedTouches[0].clientX || domEvent.clientX;
  var clientY = domEventChangedTouches && domEventChangedTouches[0].clientY || domEvent.clientY;
  var pageX = domEventChangedTouches && domEventChangedTouches[0].pageX || domEvent.pageX;
  var pageY = domEventChangedTouches && domEventChangedTouches[0].pageY || domEvent.pageY;
  var preventDefault = typeof domEvent.preventDefault === "function" ? domEvent.preventDefault.bind(domEvent) : emptyFunction;
  var timestamp = domEvent.timeStamp;
  function normalizeTouches(touches2) {
    return Array.prototype.slice.call(touches2).map((touch) => {
      return {
        force: touch.force,
        identifier: normalizeIdentifier(touch.identifier),
        get locationX() {
          return locationX(touch.clientX);
        },
        get locationY() {
          return locationY(touch.clientY);
        },
        pageX: touch.pageX,
        pageY: touch.pageY,
        target: touch.target,
        timestamp
      };
    });
  }
  __name(normalizeTouches, "normalizeTouches");
  if (domEventChangedTouches != null) {
    changedTouches = normalizeTouches(domEventChangedTouches);
    touches = normalizeTouches(domEvent.touches);
  } else {
    var emulatedTouches = [{
      force,
      identifier,
      get locationX() {
        return locationX(clientX);
      },
      get locationY() {
        return locationY(clientY);
      },
      pageX,
      pageY,
      target: domEvent.target,
      timestamp
    }];
    changedTouches = emulatedTouches;
    touches = domEventType === "mouseup" || domEventType === "dragstart" ? emptyArray : emulatedTouches;
  }
  var responderEvent = {
    bubbles: true,
    cancelable: true,
    // `currentTarget` is set before dispatch
    currentTarget: null,
    defaultPrevented: domEvent.defaultPrevented,
    dispatchConfig: emptyObject6,
    eventPhase: domEvent.eventPhase,
    isDefaultPrevented() {
      return domEvent.defaultPrevented;
    },
    isPropagationStopped() {
      return propagationWasStopped;
    },
    isTrusted: domEvent.isTrusted,
    nativeEvent: {
      altKey: false,
      ctrlKey: false,
      metaKey,
      shiftKey,
      changedTouches,
      force,
      identifier,
      get locationX() {
        return locationX(clientX);
      },
      get locationY() {
        return locationY(clientY);
      },
      pageX,
      pageY,
      target: domEvent.target,
      timestamp,
      touches,
      type: domEventType
    },
    persist: emptyFunction,
    preventDefault,
    stopPropagation() {
      propagationWasStopped = true;
    },
    target: domEvent.target,
    timeStamp: timestamp,
    touchHistory: responderTouchHistoryStore2.touchHistory
  };
  function locationX(x) {
    rect = rect || getBoundingClientRect_default(responderEvent.currentTarget);
    if (rect) {
      return x - rect.left;
    }
  }
  __name(locationX, "locationX");
  function locationY(y) {
    rect = rect || getBoundingClientRect_default(responderEvent.currentTarget);
    if (rect) {
      return y - rect.top;
    }
  }
  __name(locationY, "locationY");
  return responderEvent;
}
__name(createResponderEvent, "createResponderEvent");

// ../../node_modules/react-native-web/dist/modules/useResponderEvents/ResponderEventTypes.js
var MOUSE_DOWN = "mousedown";
var MOUSE_MOVE = "mousemove";
var MOUSE_UP = "mouseup";
var MOUSE_CANCEL = "dragstart";
var TOUCH_START = "touchstart";
var TOUCH_MOVE = "touchmove";
var TOUCH_END = "touchend";
var TOUCH_CANCEL = "touchcancel";
var SCROLL = "scroll";
var SELECT = "select";
var SELECTION_CHANGE = "selectionchange";
function isStartish(eventType) {
  return eventType === TOUCH_START || eventType === MOUSE_DOWN;
}
__name(isStartish, "isStartish");
function isMoveish(eventType) {
  return eventType === TOUCH_MOVE || eventType === MOUSE_MOVE;
}
__name(isMoveish, "isMoveish");
function isEndish(eventType) {
  return eventType === TOUCH_END || eventType === MOUSE_UP || isCancelish(eventType);
}
__name(isEndish, "isEndish");
function isCancelish(eventType) {
  return eventType === TOUCH_CANCEL || eventType === MOUSE_CANCEL;
}
__name(isCancelish, "isCancelish");
function isScroll(eventType) {
  return eventType === SCROLL;
}
__name(isScroll, "isScroll");
function isSelectionChange(eventType) {
  return eventType === SELECT || eventType === SELECTION_CHANGE;
}
__name(isSelectionChange, "isSelectionChange");

// ../../node_modules/react-native-web/dist/modules/isSelectionValid/index.js
function isSelectionValid() {
  var selection = window.getSelection();
  var string = selection.toString();
  var anchorNode = selection.anchorNode;
  var focusNode = selection.focusNode;
  var isTextNode = anchorNode && anchorNode.nodeType === window.Node.TEXT_NODE || focusNode && focusNode.nodeType === window.Node.TEXT_NODE;
  return string.length >= 1 && string !== "\n" && isTextNode;
}
__name(isSelectionValid, "isSelectionValid");

// ../../node_modules/react-native-web/dist/modules/useResponderEvents/utils.js
var keyName = "__reactResponderId";
function getEventPath(domEvent) {
  if (domEvent.type === "selectionchange") {
    var target = window.getSelection().anchorNode;
    return composedPathFallback(target);
  } else {
    var path = domEvent.composedPath != null ? domEvent.composedPath() : composedPathFallback(domEvent.target);
    return path;
  }
}
__name(getEventPath, "getEventPath");
function composedPathFallback(target) {
  var path = [];
  while (target != null && target !== document.body) {
    path.push(target);
    target = target.parentNode;
  }
  return path;
}
__name(composedPathFallback, "composedPathFallback");
function getResponderId(node) {
  if (node != null) {
    return node[keyName];
  }
  return null;
}
__name(getResponderId, "getResponderId");
function setResponderId(node, id) {
  if (node != null) {
    node[keyName] = id;
  }
}
__name(setResponderId, "setResponderId");
function getResponderPaths(domEvent) {
  var idPath = [];
  var nodePath = [];
  var eventPath = getEventPath(domEvent);
  for (var i = 0; i < eventPath.length; i++) {
    var node = eventPath[i];
    var id = getResponderId(node);
    if (id != null) {
      idPath.push(id);
      nodePath.push(node);
    }
  }
  return {
    idPath,
    nodePath
  };
}
__name(getResponderPaths, "getResponderPaths");
function getLowestCommonAncestor(pathA, pathB) {
  var pathALength = pathA.length;
  var pathBLength = pathB.length;
  if (
    // If either path is empty
    pathALength === 0 || pathBLength === 0 || // If the last elements aren't the same there can't be a common ancestor
    // that is connected to the responder system
    pathA[pathALength - 1] !== pathB[pathBLength - 1]
  ) {
    return null;
  }
  var itemA = pathA[0];
  var indexA = 0;
  var itemB = pathB[0];
  var indexB = 0;
  if (pathALength - pathBLength > 0) {
    indexA = pathALength - pathBLength;
    itemA = pathA[indexA];
    pathALength = pathBLength;
  }
  if (pathBLength - pathALength > 0) {
    indexB = pathBLength - pathALength;
    itemB = pathB[indexB];
    pathBLength = pathALength;
  }
  var depth = pathALength;
  while (depth--) {
    if (itemA === itemB) {
      return itemA;
    }
    itemA = pathA[indexA++];
    itemB = pathB[indexB++];
  }
  return null;
}
__name(getLowestCommonAncestor, "getLowestCommonAncestor");
function hasTargetTouches(target, touches) {
  if (!touches || touches.length === 0) {
    return false;
  }
  for (var i = 0; i < touches.length; i++) {
    var node = touches[i].target;
    if (node != null) {
      if (target.contains(node)) {
        return true;
      }
    }
  }
  return false;
}
__name(hasTargetTouches, "hasTargetTouches");
function hasValidSelection(domEvent) {
  if (domEvent.type === "selectionchange") {
    return isSelectionValid();
  }
  return domEvent.type === "select";
}
__name(hasValidSelection, "hasValidSelection");
function isPrimaryPointerDown(domEvent) {
  var altKey = domEvent.altKey, button = domEvent.button, buttons = domEvent.buttons, ctrlKey = domEvent.ctrlKey, type = domEvent.type;
  var isTouch = type === "touchstart" || type === "touchmove";
  var isPrimaryMouseDown = type === "mousedown" && (button === 0 || buttons === 1);
  var isPrimaryMouseMove = type === "mousemove" && buttons === 1;
  var noModifiers = altKey === false && ctrlKey === false;
  if (isTouch || isPrimaryMouseDown && noModifiers || isPrimaryMouseMove && noModifiers) {
    return true;
  }
  return false;
}
__name(isPrimaryPointerDown, "isPrimaryPointerDown");

// ../../node_modules/react-native-web/dist/modules/useResponderEvents/ResponderTouchHistoryStore.js
var __DEV__ = process.env.NODE_ENV !== "production";
var MAX_TOUCH_BANK = 20;
function timestampForTouch(touch) {
  return touch.timeStamp || touch.timestamp;
}
__name(timestampForTouch, "timestampForTouch");
function createTouchRecord(touch) {
  return {
    touchActive: true,
    startPageX: touch.pageX,
    startPageY: touch.pageY,
    startTimeStamp: timestampForTouch(touch),
    currentPageX: touch.pageX,
    currentPageY: touch.pageY,
    currentTimeStamp: timestampForTouch(touch),
    previousPageX: touch.pageX,
    previousPageY: touch.pageY,
    previousTimeStamp: timestampForTouch(touch)
  };
}
__name(createTouchRecord, "createTouchRecord");
function resetTouchRecord(touchRecord, touch) {
  touchRecord.touchActive = true;
  touchRecord.startPageX = touch.pageX;
  touchRecord.startPageY = touch.pageY;
  touchRecord.startTimeStamp = timestampForTouch(touch);
  touchRecord.currentPageX = touch.pageX;
  touchRecord.currentPageY = touch.pageY;
  touchRecord.currentTimeStamp = timestampForTouch(touch);
  touchRecord.previousPageX = touch.pageX;
  touchRecord.previousPageY = touch.pageY;
  touchRecord.previousTimeStamp = timestampForTouch(touch);
}
__name(resetTouchRecord, "resetTouchRecord");
function getTouchIdentifier(_ref) {
  var identifier = _ref.identifier;
  if (identifier == null) {
    console.error("Touch object is missing identifier.");
  }
  if (__DEV__) {
    if (identifier > MAX_TOUCH_BANK) {
      console.error("Touch identifier %s is greater than maximum supported %s which causes performance issues backfilling array locations for all of the indices.", identifier, MAX_TOUCH_BANK);
    }
  }
  return identifier;
}
__name(getTouchIdentifier, "getTouchIdentifier");
function recordTouchStart(touch, touchHistory) {
  var identifier = getTouchIdentifier(touch);
  var touchRecord = touchHistory.touchBank[identifier];
  if (touchRecord) {
    resetTouchRecord(touchRecord, touch);
  } else {
    touchHistory.touchBank[identifier] = createTouchRecord(touch);
  }
  touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
}
__name(recordTouchStart, "recordTouchStart");
function recordTouchMove(touch, touchHistory) {
  var touchRecord = touchHistory.touchBank[getTouchIdentifier(touch)];
  if (touchRecord) {
    touchRecord.touchActive = true;
    touchRecord.previousPageX = touchRecord.currentPageX;
    touchRecord.previousPageY = touchRecord.currentPageY;
    touchRecord.previousTimeStamp = touchRecord.currentTimeStamp;
    touchRecord.currentPageX = touch.pageX;
    touchRecord.currentPageY = touch.pageY;
    touchRecord.currentTimeStamp = timestampForTouch(touch);
    touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
  } else {
    console.warn("Cannot record touch move without a touch start.\n", "Touch Move: " + printTouch(touch) + "\n", "Touch Bank: " + printTouchBank(touchHistory));
  }
}
__name(recordTouchMove, "recordTouchMove");
function recordTouchEnd(touch, touchHistory) {
  var touchRecord = touchHistory.touchBank[getTouchIdentifier(touch)];
  if (touchRecord) {
    touchRecord.touchActive = false;
    touchRecord.previousPageX = touchRecord.currentPageX;
    touchRecord.previousPageY = touchRecord.currentPageY;
    touchRecord.previousTimeStamp = touchRecord.currentTimeStamp;
    touchRecord.currentPageX = touch.pageX;
    touchRecord.currentPageY = touch.pageY;
    touchRecord.currentTimeStamp = timestampForTouch(touch);
    touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
  } else {
    console.warn("Cannot record touch end without a touch start.\n", "Touch End: " + printTouch(touch) + "\n", "Touch Bank: " + printTouchBank(touchHistory));
  }
}
__name(recordTouchEnd, "recordTouchEnd");
function printTouch(touch) {
  return JSON.stringify({
    identifier: touch.identifier,
    pageX: touch.pageX,
    pageY: touch.pageY,
    timestamp: timestampForTouch(touch)
  });
}
__name(printTouch, "printTouch");
function printTouchBank(touchHistory) {
  var touchBank = touchHistory.touchBank;
  var printed = JSON.stringify(touchBank.slice(0, MAX_TOUCH_BANK));
  if (touchBank.length > MAX_TOUCH_BANK) {
    printed += " (original size: " + touchBank.length + ")";
  }
  return printed;
}
__name(printTouchBank, "printTouchBank");
var ResponderTouchHistoryStore = class {
  static {
    __name(this, "ResponderTouchHistoryStore");
  }
  constructor() {
    this._touchHistory = {
      touchBank: [],
      //Array<TouchRecord>
      numberActiveTouches: 0,
      // If there is only one active touch, we remember its location. This prevents
      // us having to loop through all of the touches all the time in the most
      // common case.
      indexOfSingleActiveTouch: -1,
      mostRecentTimeStamp: 0
    };
  }
  recordTouchTrack(topLevelType, nativeEvent) {
    var touchHistory = this._touchHistory;
    if (isMoveish(topLevelType)) {
      nativeEvent.changedTouches.forEach((touch) => recordTouchMove(touch, touchHistory));
    } else if (isStartish(topLevelType)) {
      nativeEvent.changedTouches.forEach((touch) => recordTouchStart(touch, touchHistory));
      touchHistory.numberActiveTouches = nativeEvent.touches.length;
      if (touchHistory.numberActiveTouches === 1) {
        touchHistory.indexOfSingleActiveTouch = nativeEvent.touches[0].identifier;
      }
    } else if (isEndish(topLevelType)) {
      nativeEvent.changedTouches.forEach((touch) => recordTouchEnd(touch, touchHistory));
      touchHistory.numberActiveTouches = nativeEvent.touches.length;
      if (touchHistory.numberActiveTouches === 1) {
        var touchBank = touchHistory.touchBank;
        for (var i = 0; i < touchBank.length; i++) {
          var touchTrackToCheck = touchBank[i];
          if (touchTrackToCheck != null && touchTrackToCheck.touchActive) {
            touchHistory.indexOfSingleActiveTouch = i;
            break;
          }
        }
        if (__DEV__) {
          var activeRecord = touchBank[touchHistory.indexOfSingleActiveTouch];
          if (!(activeRecord != null && activeRecord.touchActive)) {
            console.error("Cannot find single active touch.");
          }
        }
      }
    }
  }
  get touchHistory() {
    return this._touchHistory;
  }
};

// ../../node_modules/react-native-web/dist/modules/useResponderEvents/ResponderSystem.js
var emptyObject7 = {};
var startRegistration = ["onStartShouldSetResponderCapture", "onStartShouldSetResponder", {
  bubbles: true
}];
var moveRegistration = ["onMoveShouldSetResponderCapture", "onMoveShouldSetResponder", {
  bubbles: true
}];
var scrollRegistration = ["onScrollShouldSetResponderCapture", "onScrollShouldSetResponder", {
  bubbles: false
}];
var shouldSetResponderEvents = {
  touchstart: startRegistration,
  mousedown: startRegistration,
  touchmove: moveRegistration,
  mousemove: moveRegistration,
  scroll: scrollRegistration
};
var emptyResponder = {
  id: null,
  idPath: null,
  node: null
};
var responderListenersMap = /* @__PURE__ */ new Map();
var isEmulatingMouseEvents = false;
var trackedTouchCount = 0;
var currentResponder = {
  id: null,
  node: null,
  idPath: null
};
var responderTouchHistoryStore = new ResponderTouchHistoryStore();
function changeCurrentResponder(responder) {
  currentResponder = responder;
}
__name(changeCurrentResponder, "changeCurrentResponder");
function getResponderConfig(id) {
  var config = responderListenersMap.get(id);
  return config != null ? config : emptyObject7;
}
__name(getResponderConfig, "getResponderConfig");
function eventListener(domEvent) {
  var eventType = domEvent.type;
  var eventTarget = domEvent.target;
  if (eventType === "touchstart") {
    isEmulatingMouseEvents = true;
  }
  if (eventType === "touchmove" || trackedTouchCount > 1) {
    isEmulatingMouseEvents = false;
  }
  if (
    // Ignore browser emulated mouse events
    eventType === "mousedown" && isEmulatingMouseEvents || eventType === "mousemove" && isEmulatingMouseEvents || // Ignore mousemove if a mousedown didn't occur first
    eventType === "mousemove" && trackedTouchCount < 1
  ) {
    return;
  }
  if (isEmulatingMouseEvents && eventType === "mouseup") {
    if (trackedTouchCount === 0) {
      isEmulatingMouseEvents = false;
    }
    return;
  }
  var isStartEvent = isStartish(eventType) && isPrimaryPointerDown(domEvent);
  var isMoveEvent = isMoveish(eventType);
  var isEndEvent = isEndish(eventType);
  var isScrollEvent = isScroll(eventType);
  var isSelectionChangeEvent = isSelectionChange(eventType);
  var responderEvent = createResponderEvent(domEvent, responderTouchHistoryStore);
  if (isStartEvent || isMoveEvent || isEndEvent) {
    if (domEvent.touches) {
      trackedTouchCount = domEvent.touches.length;
    } else {
      if (isStartEvent) {
        trackedTouchCount = 1;
      } else if (isEndEvent) {
        trackedTouchCount = 0;
      }
    }
    responderTouchHistoryStore.recordTouchTrack(eventType, responderEvent.nativeEvent);
  }
  var eventPaths = getResponderPaths(domEvent);
  var wasNegotiated = false;
  var wantsResponder;
  if (isStartEvent || isMoveEvent || isScrollEvent && trackedTouchCount > 0) {
    var currentResponderIdPath = currentResponder.idPath;
    var eventIdPath = eventPaths.idPath;
    if (currentResponderIdPath != null && eventIdPath != null) {
      var lowestCommonAncestor = getLowestCommonAncestor(currentResponderIdPath, eventIdPath);
      if (lowestCommonAncestor != null) {
        var indexOfLowestCommonAncestor = eventIdPath.indexOf(lowestCommonAncestor);
        var index2 = indexOfLowestCommonAncestor + (lowestCommonAncestor === currentResponder.id ? 1 : 0);
        eventPaths = {
          idPath: eventIdPath.slice(index2),
          nodePath: eventPaths.nodePath.slice(index2)
        };
      } else {
        eventPaths = null;
      }
    }
    if (eventPaths != null) {
      wantsResponder = findWantsResponder(eventPaths, domEvent, responderEvent);
      if (wantsResponder != null) {
        attemptTransfer(responderEvent, wantsResponder);
        wasNegotiated = true;
      }
    }
  }
  if (currentResponder.id != null && currentResponder.node != null) {
    var _currentResponder = currentResponder, id = _currentResponder.id, node = _currentResponder.node;
    var _getResponderConfig = getResponderConfig(id), onResponderStart = _getResponderConfig.onResponderStart, onResponderMove = _getResponderConfig.onResponderMove, onResponderEnd = _getResponderConfig.onResponderEnd, onResponderRelease = _getResponderConfig.onResponderRelease, onResponderTerminate = _getResponderConfig.onResponderTerminate, onResponderTerminationRequest = _getResponderConfig.onResponderTerminationRequest;
    responderEvent.bubbles = false;
    responderEvent.cancelable = false;
    responderEvent.currentTarget = node;
    if (isStartEvent) {
      if (onResponderStart != null) {
        responderEvent.dispatchConfig.registrationName = "onResponderStart";
        onResponderStart(responderEvent);
      }
    } else if (isMoveEvent) {
      if (onResponderMove != null) {
        responderEvent.dispatchConfig.registrationName = "onResponderMove";
        onResponderMove(responderEvent);
      }
    } else {
      var isTerminateEvent = isCancelish(eventType) || // native context menu
      eventType === "contextmenu" || // window blur
      eventType === "blur" && eventTarget === window || // responder (or ancestors) blur
      eventType === "blur" && eventTarget.contains(node) && domEvent.relatedTarget !== node || // native scroll without using a pointer
      isScrollEvent && trackedTouchCount === 0 || // native scroll on node that is parent of the responder (allow siblings to scroll)
      isScrollEvent && eventTarget.contains(node) && eventTarget !== node || // native select/selectionchange on node
      isSelectionChangeEvent && hasValidSelection(domEvent);
      var isReleaseEvent = isEndEvent && !isTerminateEvent && !hasTargetTouches(node, domEvent.touches);
      if (isEndEvent) {
        if (onResponderEnd != null) {
          responderEvent.dispatchConfig.registrationName = "onResponderEnd";
          onResponderEnd(responderEvent);
        }
      }
      if (isReleaseEvent) {
        if (onResponderRelease != null) {
          responderEvent.dispatchConfig.registrationName = "onResponderRelease";
          onResponderRelease(responderEvent);
        }
        changeCurrentResponder(emptyResponder);
      }
      if (isTerminateEvent) {
        var shouldTerminate = true;
        if (eventType === "contextmenu" || eventType === "scroll" || eventType === "selectionchange") {
          if (wasNegotiated) {
            shouldTerminate = false;
          } else if (onResponderTerminationRequest != null) {
            responderEvent.dispatchConfig.registrationName = "onResponderTerminationRequest";
            if (onResponderTerminationRequest(responderEvent) === false) {
              shouldTerminate = false;
            }
          }
        }
        if (shouldTerminate) {
          if (onResponderTerminate != null) {
            responderEvent.dispatchConfig.registrationName = "onResponderTerminate";
            onResponderTerminate(responderEvent);
          }
          changeCurrentResponder(emptyResponder);
          isEmulatingMouseEvents = false;
          trackedTouchCount = 0;
        }
      }
    }
  }
}
__name(eventListener, "eventListener");
function findWantsResponder(eventPaths, domEvent, responderEvent) {
  var shouldSetCallbacks = shouldSetResponderEvents[domEvent.type];
  if (shouldSetCallbacks != null) {
    var idPath = eventPaths.idPath, nodePath = eventPaths.nodePath;
    var shouldSetCallbackCaptureName = shouldSetCallbacks[0];
    var shouldSetCallbackBubbleName = shouldSetCallbacks[1];
    var bubbles = shouldSetCallbacks[2].bubbles;
    var check = /* @__PURE__ */ __name(function check2(id2, node2, callbackName) {
      var config = getResponderConfig(id2);
      var shouldSetCallback = config[callbackName];
      if (shouldSetCallback != null) {
        responderEvent.currentTarget = node2;
        if (shouldSetCallback(responderEvent) === true) {
          var prunedIdPath = idPath.slice(idPath.indexOf(id2));
          return {
            id: id2,
            node: node2,
            idPath: prunedIdPath
          };
        }
      }
    }, "check");
    for (var i = idPath.length - 1; i >= 0; i--) {
      var id = idPath[i];
      var node = nodePath[i];
      var result = check(id, node, shouldSetCallbackCaptureName);
      if (result != null) {
        return result;
      }
      if (responderEvent.isPropagationStopped() === true) {
        return;
      }
    }
    if (bubbles) {
      for (var _i = 0; _i < idPath.length; _i++) {
        var _id = idPath[_i];
        var _node = nodePath[_i];
        var _result = check(_id, _node, shouldSetCallbackBubbleName);
        if (_result != null) {
          return _result;
        }
        if (responderEvent.isPropagationStopped() === true) {
          return;
        }
      }
    } else {
      var _id2 = idPath[0];
      var _node2 = nodePath[0];
      var target = domEvent.target;
      if (target === _node2) {
        return check(_id2, _node2, shouldSetCallbackBubbleName);
      }
    }
  }
}
__name(findWantsResponder, "findWantsResponder");
function attemptTransfer(responderEvent, wantsResponder) {
  var _currentResponder2 = currentResponder, currentId = _currentResponder2.id, currentNode = _currentResponder2.node;
  var id = wantsResponder.id, node = wantsResponder.node;
  var _getResponderConfig2 = getResponderConfig(id), onResponderGrant = _getResponderConfig2.onResponderGrant, onResponderReject = _getResponderConfig2.onResponderReject;
  responderEvent.bubbles = false;
  responderEvent.cancelable = false;
  responderEvent.currentTarget = node;
  if (currentId == null) {
    if (onResponderGrant != null) {
      responderEvent.currentTarget = node;
      responderEvent.dispatchConfig.registrationName = "onResponderGrant";
      onResponderGrant(responderEvent);
    }
    changeCurrentResponder(wantsResponder);
  } else {
    var _getResponderConfig3 = getResponderConfig(currentId), onResponderTerminate = _getResponderConfig3.onResponderTerminate, onResponderTerminationRequest = _getResponderConfig3.onResponderTerminationRequest;
    var allowTransfer = true;
    if (onResponderTerminationRequest != null) {
      responderEvent.currentTarget = currentNode;
      responderEvent.dispatchConfig.registrationName = "onResponderTerminationRequest";
      if (onResponderTerminationRequest(responderEvent) === false) {
        allowTransfer = false;
      }
    }
    if (allowTransfer) {
      if (onResponderTerminate != null) {
        responderEvent.currentTarget = currentNode;
        responderEvent.dispatchConfig.registrationName = "onResponderTerminate";
        onResponderTerminate(responderEvent);
      }
      if (onResponderGrant != null) {
        responderEvent.currentTarget = node;
        responderEvent.dispatchConfig.registrationName = "onResponderGrant";
        onResponderGrant(responderEvent);
      }
      changeCurrentResponder(wantsResponder);
    } else {
      if (onResponderReject != null) {
        responderEvent.currentTarget = node;
        responderEvent.dispatchConfig.registrationName = "onResponderReject";
        onResponderReject(responderEvent);
      }
    }
  }
}
__name(attemptTransfer, "attemptTransfer");
var documentEventsCapturePhase = ["blur", "scroll"];
var documentEventsBubblePhase = [
  // mouse
  "mousedown",
  "mousemove",
  "mouseup",
  "dragstart",
  // touch
  "touchstart",
  "touchmove",
  "touchend",
  "touchcancel",
  // other
  "contextmenu",
  "select",
  "selectionchange"
];
function attachListeners() {
  if (canUseDom_default && window.__reactResponderSystemActive == null) {
    window.addEventListener("blur", eventListener);
    documentEventsBubblePhase.forEach((eventType) => {
      document.addEventListener(eventType, eventListener);
    });
    documentEventsCapturePhase.forEach((eventType) => {
      document.addEventListener(eventType, eventListener, true);
    });
    window.__reactResponderSystemActive = true;
  }
}
__name(attachListeners, "attachListeners");
function addNode(id, node, config) {
  setResponderId(node, id);
  responderListenersMap.set(id, config);
}
__name(addNode, "addNode");
function removeNode(id) {
  if (currentResponder.id === id) {
    terminateResponder();
  }
  if (responderListenersMap.has(id)) {
    responderListenersMap.delete(id);
  }
}
__name(removeNode, "removeNode");
function terminateResponder() {
  var _currentResponder3 = currentResponder, id = _currentResponder3.id, node = _currentResponder3.node;
  if (id != null && node != null) {
    var _getResponderConfig4 = getResponderConfig(id), onResponderTerminate = _getResponderConfig4.onResponderTerminate;
    if (onResponderTerminate != null) {
      var event = createResponderEvent({}, responderTouchHistoryStore);
      event.currentTarget = node;
      onResponderTerminate(event);
    }
    changeCurrentResponder(emptyResponder);
  }
  isEmulatingMouseEvents = false;
  trackedTouchCount = 0;
}
__name(terminateResponder, "terminateResponder");
function getResponderNode() {
  return currentResponder.node;
}
__name(getResponderNode, "getResponderNode");

// ../../node_modules/react-native-web/dist/modules/useResponderEvents/index.js
var emptyObject8 = {};
var idCounter2 = 0;
function useStable2(getInitialValue) {
  var ref = React56.useRef(null);
  if (ref.current == null) {
    ref.current = getInitialValue();
  }
  return ref.current;
}
__name(useStable2, "useStable");
function useResponderEvents(hostRef, config) {
  if (config === void 0) {
    config = emptyObject8;
  }
  var id = useStable2(() => idCounter2++);
  var isAttachedRef = React56.useRef(false);
  React56.useEffect(() => {
    attachListeners();
    return () => {
      removeNode(id);
    };
  }, [id]);
  React56.useEffect(() => {
    var _config = config, onMoveShouldSetResponder = _config.onMoveShouldSetResponder, onMoveShouldSetResponderCapture = _config.onMoveShouldSetResponderCapture, onScrollShouldSetResponder = _config.onScrollShouldSetResponder, onScrollShouldSetResponderCapture = _config.onScrollShouldSetResponderCapture, onSelectionChangeShouldSetResponder = _config.onSelectionChangeShouldSetResponder, onSelectionChangeShouldSetResponderCapture = _config.onSelectionChangeShouldSetResponderCapture, onStartShouldSetResponder = _config.onStartShouldSetResponder, onStartShouldSetResponderCapture = _config.onStartShouldSetResponderCapture;
    var requiresResponderSystem = onMoveShouldSetResponder != null || onMoveShouldSetResponderCapture != null || onScrollShouldSetResponder != null || onScrollShouldSetResponderCapture != null || onSelectionChangeShouldSetResponder != null || onSelectionChangeShouldSetResponderCapture != null || onStartShouldSetResponder != null || onStartShouldSetResponderCapture != null;
    var node = hostRef.current;
    if (requiresResponderSystem) {
      addNode(id, node, config);
      isAttachedRef.current = true;
    } else if (isAttachedRef.current) {
      removeNode(id);
      isAttachedRef.current = false;
    }
  }, [config, hostRef, id]);
  React56.useDebugValue({
    isResponder: hostRef.current === getResponderNode()
  });
  React56.useDebugValue(config);
}
__name(useResponderEvents, "useResponderEvents");

// ../../node_modules/react-native-web/dist/exports/Text/TextAncestorContext.js
import { createContext as createContext13 } from "react";
var TextAncestorContext = /* @__PURE__ */ createContext13(false);
var TextAncestorContext_default = TextAncestorContext;

// ../../node_modules/react-native-web/dist/exports/View/index.js
var _excluded4 = ["hrefAttrs", "onLayout", "onMoveShouldSetResponder", "onMoveShouldSetResponderCapture", "onResponderEnd", "onResponderGrant", "onResponderMove", "onResponderReject", "onResponderRelease", "onResponderStart", "onResponderTerminate", "onResponderTerminationRequest", "onScrollShouldSetResponder", "onScrollShouldSetResponderCapture", "onSelectionChangeShouldSetResponder", "onSelectionChangeShouldSetResponderCapture", "onStartShouldSetResponder", "onStartShouldSetResponderCapture"];
var forwardPropsList = Object.assign({}, defaultProps, accessibilityProps, clickProps, focusProps, keyboardProps, mouseProps, touchProps, styleProps, {
  href: true,
  lang: true,
  onScroll: true,
  onWheel: true,
  pointerEvents: true
});
var pickProps = /* @__PURE__ */ __name((props) => pick(props, forwardPropsList), "pickProps");
var View16 = /* @__PURE__ */ React57.forwardRef((props, forwardedRef) => {
  var hrefAttrs = props.hrefAttrs, onLayout = props.onLayout, onMoveShouldSetResponder = props.onMoveShouldSetResponder, onMoveShouldSetResponderCapture = props.onMoveShouldSetResponderCapture, onResponderEnd = props.onResponderEnd, onResponderGrant = props.onResponderGrant, onResponderMove = props.onResponderMove, onResponderReject = props.onResponderReject, onResponderRelease = props.onResponderRelease, onResponderStart = props.onResponderStart, onResponderTerminate = props.onResponderTerminate, onResponderTerminationRequest = props.onResponderTerminationRequest, onScrollShouldSetResponder = props.onScrollShouldSetResponder, onScrollShouldSetResponderCapture = props.onScrollShouldSetResponderCapture, onSelectionChangeShouldSetResponder = props.onSelectionChangeShouldSetResponder, onSelectionChangeShouldSetResponderCapture = props.onSelectionChangeShouldSetResponderCapture, onStartShouldSetResponder = props.onStartShouldSetResponder, onStartShouldSetResponderCapture = props.onStartShouldSetResponderCapture, rest = (0, import_objectWithoutPropertiesLoose4.default)(props, _excluded4);
  if (process.env.NODE_ENV !== "production") {
    React57.Children.toArray(props.children).forEach((item) => {
      if (typeof item === "string") {
        console.error("Unexpected text node: " + item + ". A text node cannot be a child of a <View>.");
      }
    });
  }
  var hasTextAncestor = React57.useContext(TextAncestorContext_default);
  var hostRef = React57.useRef(null);
  var _useLocaleContext = useLocaleContext(), contextDirection = _useLocaleContext.direction;
  useElementLayout(hostRef, onLayout);
  useResponderEvents(hostRef, {
    onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture,
    onResponderEnd,
    onResponderGrant,
    onResponderMove,
    onResponderReject,
    onResponderRelease,
    onResponderStart,
    onResponderTerminate,
    onResponderTerminationRequest,
    onScrollShouldSetResponder,
    onScrollShouldSetResponderCapture,
    onSelectionChangeShouldSetResponder,
    onSelectionChangeShouldSetResponderCapture,
    onStartShouldSetResponder,
    onStartShouldSetResponderCapture
  });
  var component = "div";
  var langDirection = props.lang != null ? getLocaleDirection(props.lang) : null;
  var componentDirection = props.dir || langDirection;
  var writingDirection = componentDirection || contextDirection;
  var supportedProps = pickProps(rest);
  supportedProps.dir = componentDirection;
  supportedProps.style = [styles.view$raw, hasTextAncestor && styles.inline, props.style];
  if (props.href != null) {
    component = "a";
    if (hrefAttrs != null) {
      var download = hrefAttrs.download, rel = hrefAttrs.rel, target = hrefAttrs.target;
      if (download != null) {
        supportedProps.download = download;
      }
      if (rel != null) {
        supportedProps.rel = rel;
      }
      if (typeof target === "string") {
        supportedProps.target = target.charAt(0) !== "_" ? "_" + target : target;
      }
    }
  }
  var platformMethodsRef = usePlatformMethods(supportedProps);
  var setRef2 = useMergeRefs(hostRef, platformMethodsRef, forwardedRef);
  supportedProps.ref = setRef2;
  return createElement_default(component, supportedProps, {
    writingDirection
  });
});
View16.displayName = "View";
var styles = StyleSheet_default.create({
  view$raw: {
    alignContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "transparent",
    border: "0 solid black",
    boxSizing: "border-box",
    display: "flex",
    flexBasis: "auto",
    flexDirection: "column",
    flexShrink: 0,
    listStyle: "none",
    margin: 0,
    minHeight: 0,
    minWidth: 0,
    padding: 0,
    position: "relative",
    textDecoration: "none",
    zIndex: 0
  },
  inline: {
    display: "inline-flex"
  }
});
var View_default = View16;

// ../../node_modules/react-native-web/dist/exports/ScrollView/index.js
var import_objectSpread24 = __toESM(require_objectSpread2());
var import_extends2 = __toESM(require_extends());
var import_objectWithoutPropertiesLoose6 = __toESM(require_objectWithoutPropertiesLoose());

// ../../node_modules/react-native-web/dist/exports/Dimensions/index.js
var import_invariant = __toESM(require_invariant());
var dimensions = {
  window: {
    fontScale: 1,
    height: 0,
    scale: 1,
    width: 0
  },
  screen: {
    fontScale: 1,
    height: 0,
    scale: 1,
    width: 0
  }
};
var listeners = {};
var shouldInit = canUseDom_default;
function update() {
  if (!canUseDom_default) {
    return;
  }
  var win = window;
  var height;
  var width;
  if (win.visualViewport) {
    var visualViewport = win.visualViewport;
    height = Math.round(visualViewport.height * visualViewport.scale);
    width = Math.round(visualViewport.width * visualViewport.scale);
  } else {
    var docEl2 = win.document.documentElement;
    height = docEl2.clientHeight;
    width = docEl2.clientWidth;
  }
  dimensions.window = {
    fontScale: 1,
    height,
    scale: win.devicePixelRatio || 1,
    width
  };
  dimensions.screen = {
    fontScale: 1,
    height: win.screen.height,
    scale: win.devicePixelRatio || 1,
    width: win.screen.width
  };
}
__name(update, "update");
function handleResize() {
  update();
  if (Array.isArray(listeners["change"])) {
    listeners["change"].forEach((handler) => handler(dimensions));
  }
}
__name(handleResize, "handleResize");
var Dimensions = class {
  static {
    __name(this, "Dimensions");
  }
  static get(dimension) {
    if (shouldInit) {
      shouldInit = false;
      update();
    }
    (0, import_invariant.default)(dimensions[dimension], "No dimension set for key " + dimension);
    return dimensions[dimension];
  }
  static set(initialDimensions) {
    if (initialDimensions) {
      if (canUseDom_default) {
        (0, import_invariant.default)(false, "Dimensions cannot be set in the browser");
      } else {
        if (initialDimensions.screen != null) {
          dimensions.screen = initialDimensions.screen;
        }
        if (initialDimensions.window != null) {
          dimensions.window = initialDimensions.window;
        }
      }
    }
  }
  static addEventListener(type, handler) {
    listeners[type] = listeners[type] || [];
    listeners[type].push(handler);
    return {
      remove: /* @__PURE__ */ __name(() => {
        this.removeEventListener(type, handler);
      }, "remove")
    };
  }
  static removeEventListener(type, handler) {
    if (Array.isArray(listeners[type])) {
      listeners[type] = listeners[type].filter((_handler) => _handler !== handler);
    }
  }
};
if (canUseDom_default) {
  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", handleResize, false);
  } else {
    window.addEventListener("resize", handleResize, false);
  }
}

// ../../node_modules/react-native-web/dist/modules/TextInputState/index.js
var TextInputState = {
  /**
   * Internal state
   */
  _currentlyFocusedNode: null,
  /**
   * Returns the ID of the currently focused text field, if one exists
   * If no text field is focused it returns null
   */
  currentlyFocusedField() {
    if (document.activeElement !== this._currentlyFocusedNode) {
      this._currentlyFocusedNode = null;
    }
    return this._currentlyFocusedNode;
  },
  /**
   * @param {Object} TextInputID id of the text field to focus
   * Focuses the specified text field
   * noop if the text field was already focused
   */
  focusTextInput(textFieldNode) {
    if (textFieldNode !== null) {
      this._currentlyFocusedNode = textFieldNode;
      if (document.activeElement !== textFieldNode) {
        UIManager_default.focus(textFieldNode);
      }
    }
  },
  /**
   * @param {Object} textFieldNode id of the text field to focus
   * Unfocuses the specified text field
   * noop if it wasn't focused
   */
  blurTextInput(textFieldNode) {
    if (textFieldNode !== null) {
      this._currentlyFocusedNode = null;
      if (document.activeElement === textFieldNode) {
        UIManager_default.blur(textFieldNode);
      }
    }
  }
};
var TextInputState_default = TextInputState;

// ../../node_modules/react-native-web/dist/modules/dismissKeyboard/index.js
var dismissKeyboard = /* @__PURE__ */ __name(() => {
  TextInputState_default.blurTextInput(TextInputState_default.currentlyFocusedField());
}, "dismissKeyboard");
var dismissKeyboard_default = dismissKeyboard;

// ../../node_modules/react-native-web/dist/exports/ScrollView/index.js
var import_invariant2 = __toESM(require_invariant());

// ../../node_modules/react-native-web/dist/exports/ScrollView/ScrollViewBase.js
var import_extends = __toESM(require_extends());
var import_objectWithoutPropertiesLoose5 = __toESM(require_objectWithoutPropertiesLoose());
import * as React58 from "react";
var _excluded5 = ["onScroll", "onTouchMove", "onWheel", "scrollEnabled", "scrollEventThrottle", "showsHorizontalScrollIndicator", "showsVerticalScrollIndicator", "style"];
function normalizeScrollEvent(e) {
  return {
    nativeEvent: {
      contentOffset: {
        get x() {
          return e.target.scrollLeft;
        },
        get y() {
          return e.target.scrollTop;
        }
      },
      contentSize: {
        get height() {
          return e.target.scrollHeight;
        },
        get width() {
          return e.target.scrollWidth;
        }
      },
      layoutMeasurement: {
        get height() {
          return e.target.offsetHeight;
        },
        get width() {
          return e.target.offsetWidth;
        }
      }
    },
    timeStamp: Date.now()
  };
}
__name(normalizeScrollEvent, "normalizeScrollEvent");
function shouldEmitScrollEvent(lastTick, eventThrottle) {
  var timeSinceLastTick = Date.now() - lastTick;
  return eventThrottle > 0 && timeSinceLastTick >= eventThrottle;
}
__name(shouldEmitScrollEvent, "shouldEmitScrollEvent");
var ScrollViewBase = /* @__PURE__ */ React58.forwardRef((props, forwardedRef) => {
  var onScroll = props.onScroll, onTouchMove = props.onTouchMove, onWheel = props.onWheel, _props$scrollEnabled = props.scrollEnabled, scrollEnabled = _props$scrollEnabled === void 0 ? true : _props$scrollEnabled, _props$scrollEventThr = props.scrollEventThrottle, scrollEventThrottle = _props$scrollEventThr === void 0 ? 0 : _props$scrollEventThr, showsHorizontalScrollIndicator = props.showsHorizontalScrollIndicator, showsVerticalScrollIndicator = props.showsVerticalScrollIndicator, style = props.style, rest = (0, import_objectWithoutPropertiesLoose5.default)(props, _excluded5);
  var scrollState = React58.useRef({
    isScrolling: false,
    scrollLastTick: 0
  });
  var scrollTimeout = React58.useRef(null);
  var scrollRef = React58.useRef(null);
  function createPreventableScrollHandler(handler) {
    return (e) => {
      if (scrollEnabled) {
        if (handler) {
          handler(e);
        }
      }
    };
  }
  __name(createPreventableScrollHandler, "createPreventableScrollHandler");
  function handleScroll(e) {
    e.stopPropagation();
    if (e.target === scrollRef.current) {
      e.persist();
      if (scrollTimeout.current != null) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => {
        handleScrollEnd(e);
      }, 100);
      if (scrollState.current.isScrolling) {
        if (shouldEmitScrollEvent(scrollState.current.scrollLastTick, scrollEventThrottle)) {
          handleScrollTick(e);
        }
      } else {
        handleScrollStart(e);
      }
    }
  }
  __name(handleScroll, "handleScroll");
  function handleScrollStart(e) {
    scrollState.current.isScrolling = true;
    handleScrollTick(e);
  }
  __name(handleScrollStart, "handleScrollStart");
  function handleScrollTick(e) {
    scrollState.current.scrollLastTick = Date.now();
    if (onScroll) {
      onScroll(normalizeScrollEvent(e));
    }
  }
  __name(handleScrollTick, "handleScrollTick");
  function handleScrollEnd(e) {
    scrollState.current.isScrolling = false;
    if (onScroll) {
      onScroll(normalizeScrollEvent(e));
    }
  }
  __name(handleScrollEnd, "handleScrollEnd");
  var hideScrollbar = showsHorizontalScrollIndicator === false || showsVerticalScrollIndicator === false;
  return /* @__PURE__ */ React58.createElement(View_default, (0, import_extends.default)({}, rest, {
    onScroll: handleScroll,
    onTouchMove: createPreventableScrollHandler(onTouchMove),
    onWheel: createPreventableScrollHandler(onWheel),
    ref: useMergeRefs(scrollRef, forwardedRef),
    style: [style, !scrollEnabled && styles2.scrollDisabled, hideScrollbar && styles2.hideScrollbar]
  }));
});
var styles2 = StyleSheet_default.create({
  scrollDisabled: {
    overflowX: "hidden",
    overflowY: "hidden",
    touchAction: "none"
  },
  hideScrollbar: {
    scrollbarWidth: "none"
  }
});
var ScrollViewBase_default = ScrollViewBase;

// ../../node_modules/react-native-web/dist/exports/ScrollView/index.js
var import_warning = __toESM(require_warning());
import React59 from "react";
var _excluded6 = ["contentContainerStyle", "horizontal", "onContentSizeChange", "refreshControl", "stickyHeaderIndices", "pagingEnabled", "forwardedRef", "keyboardDismissMode", "onScroll", "centerContent"];
var emptyObject9 = {};
var IS_ANIMATING_TOUCH_START_THRESHOLD_MS = 16;
var ScrollView = class extends React59.Component {
  static {
    __name(this, "ScrollView");
  }
  constructor() {
    super(...arguments);
    this._scrollNodeRef = null;
    this._innerViewRef = null;
    this.isTouching = false;
    this.lastMomentumScrollBeginTime = 0;
    this.lastMomentumScrollEndTime = 0;
    this.observedScrollSinceBecomingResponder = false;
    this.becameResponderWhileAnimating = false;
    this.scrollResponderHandleScrollShouldSetResponder = () => {
      return this.isTouching;
    };
    this.scrollResponderHandleStartShouldSetResponderCapture = (e) => {
      return this.scrollResponderIsAnimating();
    };
    this.scrollResponderHandleTerminationRequest = () => {
      return !this.observedScrollSinceBecomingResponder;
    };
    this.scrollResponderHandleTouchEnd = (e) => {
      var nativeEvent = e.nativeEvent;
      this.isTouching = nativeEvent.touches.length !== 0;
      this.props.onTouchEnd && this.props.onTouchEnd(e);
    };
    this.scrollResponderHandleResponderRelease = (e) => {
      this.props.onResponderRelease && this.props.onResponderRelease(e);
      var currentlyFocusedTextInput = TextInputState_default.currentlyFocusedField();
      if (!this.props.keyboardShouldPersistTaps && currentlyFocusedTextInput != null && e.target !== currentlyFocusedTextInput && !this.observedScrollSinceBecomingResponder && !this.becameResponderWhileAnimating) {
        this.props.onScrollResponderKeyboardDismissed && this.props.onScrollResponderKeyboardDismissed(e);
        TextInputState_default.blurTextInput(currentlyFocusedTextInput);
      }
    };
    this.scrollResponderHandleScroll = (e) => {
      this.observedScrollSinceBecomingResponder = true;
      this.props.onScroll && this.props.onScroll(e);
    };
    this.scrollResponderHandleResponderGrant = (e) => {
      this.observedScrollSinceBecomingResponder = false;
      this.props.onResponderGrant && this.props.onResponderGrant(e);
      this.becameResponderWhileAnimating = this.scrollResponderIsAnimating();
    };
    this.scrollResponderHandleScrollBeginDrag = (e) => {
      this.props.onScrollBeginDrag && this.props.onScrollBeginDrag(e);
    };
    this.scrollResponderHandleScrollEndDrag = (e) => {
      this.props.onScrollEndDrag && this.props.onScrollEndDrag(e);
    };
    this.scrollResponderHandleMomentumScrollBegin = (e) => {
      this.lastMomentumScrollBeginTime = Date.now();
      this.props.onMomentumScrollBegin && this.props.onMomentumScrollBegin(e);
    };
    this.scrollResponderHandleMomentumScrollEnd = (e) => {
      this.lastMomentumScrollEndTime = Date.now();
      this.props.onMomentumScrollEnd && this.props.onMomentumScrollEnd(e);
    };
    this.scrollResponderHandleTouchStart = (e) => {
      this.isTouching = true;
      this.props.onTouchStart && this.props.onTouchStart(e);
    };
    this.scrollResponderHandleTouchMove = (e) => {
      this.props.onTouchMove && this.props.onTouchMove(e);
    };
    this.scrollResponderIsAnimating = () => {
      var now = Date.now();
      var timeSinceLastMomentumScrollEnd = now - this.lastMomentumScrollEndTime;
      var isAnimating = timeSinceLastMomentumScrollEnd < IS_ANIMATING_TOUCH_START_THRESHOLD_MS || this.lastMomentumScrollEndTime < this.lastMomentumScrollBeginTime;
      return isAnimating;
    };
    this.scrollResponderScrollTo = (x, y, animated) => {
      if (typeof x === "number") {
        console.warn("`scrollResponderScrollTo(x, y, animated)` is deprecated. Use `scrollResponderScrollTo({x: 5, y: 5, animated: true})` instead.");
      } else {
        var _ref = x || emptyObject9;
        x = _ref.x;
        y = _ref.y;
        animated = _ref.animated;
      }
      var node = this.getScrollableNode();
      var left2 = x || 0;
      var top = y || 0;
      if (node != null) {
        if (typeof node.scroll === "function") {
          node.scroll({
            top,
            left: left2,
            behavior: !animated ? "auto" : "smooth"
          });
        } else {
          node.scrollLeft = left2;
          node.scrollTop = top;
        }
      }
    };
    this.scrollResponderZoomTo = (rect, animated) => {
      if (Platform_default.OS !== "ios") {
        (0, import_invariant2.default)("zoomToRect is not implemented");
      }
    };
    this.scrollResponderScrollNativeHandleToKeyboard = (nodeHandle, additionalOffset, preventNegativeScrollOffset) => {
      this.additionalScrollOffset = additionalOffset || 0;
      this.preventNegativeScrollOffset = !!preventNegativeScrollOffset;
      UIManager_default.measureLayout(nodeHandle, this.getInnerViewNode(), this.scrollResponderTextInputFocusError, this.scrollResponderInputMeasureAndScrollToKeyboard);
    };
    this.scrollResponderInputMeasureAndScrollToKeyboard = (left2, top, width, height) => {
      var keyboardScreenY = Dimensions.get("window").height;
      if (this.keyboardWillOpenTo) {
        keyboardScreenY = this.keyboardWillOpenTo.endCoordinates.screenY;
      }
      var scrollOffsetY = top - keyboardScreenY + height + this.additionalScrollOffset;
      if (this.preventNegativeScrollOffset) {
        scrollOffsetY = Math.max(0, scrollOffsetY);
      }
      this.scrollResponderScrollTo({
        x: 0,
        y: scrollOffsetY,
        animated: true
      });
      this.additionalOffset = 0;
      this.preventNegativeScrollOffset = false;
    };
    this.scrollResponderKeyboardWillShow = (e) => {
      this.keyboardWillOpenTo = e;
      this.props.onKeyboardWillShow && this.props.onKeyboardWillShow(e);
    };
    this.scrollResponderKeyboardWillHide = (e) => {
      this.keyboardWillOpenTo = null;
      this.props.onKeyboardWillHide && this.props.onKeyboardWillHide(e);
    };
    this.scrollResponderKeyboardDidShow = (e) => {
      if (e) {
        this.keyboardWillOpenTo = e;
      }
      this.props.onKeyboardDidShow && this.props.onKeyboardDidShow(e);
    };
    this.scrollResponderKeyboardDidHide = (e) => {
      this.keyboardWillOpenTo = null;
      this.props.onKeyboardDidHide && this.props.onKeyboardDidHide(e);
    };
    this.flashScrollIndicators = () => {
      this.scrollResponderFlashScrollIndicators();
    };
    this.getScrollResponder = () => {
      return this;
    };
    this.getScrollableNode = () => {
      return this._scrollNodeRef;
    };
    this.getInnerViewRef = () => {
      return this._innerViewRef;
    };
    this.getInnerViewNode = () => {
      return this._innerViewRef;
    };
    this.getNativeScrollRef = () => {
      return this._scrollNodeRef;
    };
    this.scrollTo = (y, x, animated) => {
      if (typeof y === "number") {
        console.warn("`scrollTo(y, x, animated)` is deprecated. Use `scrollTo({x: 5, y: 5, animated: true})` instead.");
      } else {
        var _ref2 = y || emptyObject9;
        x = _ref2.x;
        y = _ref2.y;
        animated = _ref2.animated;
      }
      this.scrollResponderScrollTo({
        x: x || 0,
        y: y || 0,
        animated: animated !== false
      });
    };
    this.scrollToEnd = (options) => {
      var animated = (options && options.animated) !== false;
      var horizontal = this.props.horizontal;
      var scrollResponderNode = this.getScrollableNode();
      var x = horizontal ? scrollResponderNode.scrollWidth : 0;
      var y = horizontal ? 0 : scrollResponderNode.scrollHeight;
      this.scrollResponderScrollTo({
        x,
        y,
        animated
      });
    };
    this._handleContentOnLayout = (e) => {
      var _e$nativeEvent$layout = e.nativeEvent.layout, width = _e$nativeEvent$layout.width, height = _e$nativeEvent$layout.height;
      this.props.onContentSizeChange(width, height);
    };
    this._handleScroll = (e) => {
      if (process.env.NODE_ENV !== "production") {
        if (this.props.onScroll && this.props.scrollEventThrottle == null) {
          console.log("You specified `onScroll` on a <ScrollView> but not `scrollEventThrottle`. You will only receive one event. Using `16` you get all the events but be aware that it may cause frame drops, use a bigger number if you don't need as much precision.");
        }
      }
      if (this.props.keyboardDismissMode === "on-drag") {
        dismissKeyboard_default();
      }
      this.scrollResponderHandleScroll(e);
    };
    this._setInnerViewRef = (node) => {
      this._innerViewRef = node;
    };
    this._setScrollNodeRef = (node) => {
      this._scrollNodeRef = node;
      if (node != null) {
        node.getScrollResponder = this.getScrollResponder;
        node.getInnerViewNode = this.getInnerViewNode;
        node.getInnerViewRef = this.getInnerViewRef;
        node.getNativeScrollRef = this.getNativeScrollRef;
        node.getScrollableNode = this.getScrollableNode;
        node.scrollTo = this.scrollTo;
        node.scrollToEnd = this.scrollToEnd;
        node.flashScrollIndicators = this.flashScrollIndicators;
        node.scrollResponderZoomTo = this.scrollResponderZoomTo;
        node.scrollResponderScrollNativeHandleToKeyboard = this.scrollResponderScrollNativeHandleToKeyboard;
      }
      var ref = mergeRefs(this.props.forwardedRef);
      ref(node);
    };
  }
  /**
   * ------------------------------------------------------
   * START SCROLLRESPONDER
   * ------------------------------------------------------
   */
  // Reset to false every time becomes responder. This is used to:
  // - Determine if the scroll view has been scrolled and therefore should
  // refuse to give up its responder lock.
  // - Determine if releasing should dismiss the keyboard when we are in
  // tap-to-dismiss mode (!this.props.keyboardShouldPersistTaps).
  /**
   * Invoke this from an `onScroll` event.
   */
  /**
   * Merely touch starting is not sufficient for a scroll view to become the
   * responder. Being the "responder" means that the very next touch move/end
   * event will result in an action/movement.
   *
   * Invoke this from an `onStartShouldSetResponder` event.
   *
   * `onStartShouldSetResponder` is used when the next move/end will trigger
   * some UI movement/action, but when you want to yield priority to views
   * nested inside of the view.
   *
   * There may be some cases where scroll views actually should return `true`
   * from `onStartShouldSetResponder`: Any time we are detecting a standard tap
   * that gives priority to nested views.
   *
   * - If a single tap on the scroll view triggers an action such as
   *   recentering a map style view yet wants to give priority to interaction
   *   views inside (such as dropped pins or labels), then we would return true
   *   from this method when there is a single touch.
   *
   * - Similar to the previous case, if a two finger "tap" should trigger a
   *   zoom, we would check the `touches` count, and if `>= 2`, we would return
   *   true.
   *
   */
  scrollResponderHandleStartShouldSetResponder() {
    return false;
  }
  /**
   * There are times when the scroll view wants to become the responder
   * (meaning respond to the next immediate `touchStart/touchEnd`), in a way
   * that *doesn't* give priority to nested views (hence the capture phase):
   *
   * - Currently animating.
   * - Tapping anywhere that is not the focused input, while the keyboard is
   *   up (which should dismiss the keyboard).
   *
   * Invoke this from an `onStartShouldSetResponderCapture` event.
   */
  /**
   * Invoke this from an `onResponderReject` event.
   *
   * Some other element is not yielding its role as responder. Normally, we'd
   * just disable the `UIScrollView`, but a touch has already began on it, the
   * `UIScrollView` will not accept being disabled after that. The easiest
   * solution for now is to accept the limitation of disallowing this
   * altogether. To improve this, find a way to disable the `UIScrollView` after
   * a touch has already started.
   */
  scrollResponderHandleResponderReject() {
    (0, import_warning.default)(false, "ScrollView doesn't take rejection well - scrolls anyway");
  }
  /**
   * We will allow the scroll view to give up its lock iff it acquired the lock
   * during an animation. This is a very useful default that happens to satisfy
   * many common user experiences.
   *
   * - Stop a scroll on the left edge, then turn that into an outer view's
   *   backswipe.
   * - Stop a scroll mid-bounce at the top, continue pulling to have the outer
   *   view dismiss.
   * - However, without catching the scroll view mid-bounce (while it is
   *   motionless), if you drag far enough for the scroll view to become
   *   responder (and therefore drag the scroll view a bit), any backswipe
   *   navigation of a swipe gesture higher in the view hierarchy, should be
   *   rejected.
   */
  /**
   * Invoke this from an `onTouchEnd` event.
   *
   * @param {SyntheticEvent} e Event.
   */
  /**
   * Invoke this from an `onResponderRelease` event.
   */
  /**
   * Invoke this from an `onResponderGrant` event.
   */
  /**
   * Unfortunately, `onScrollBeginDrag` also fires when *stopping* the scroll
   * animation, and there's not an easy way to distinguish a drag vs. stopping
   * momentum.
   *
   * Invoke this from an `onScrollBeginDrag` event.
   */
  /**
   * Invoke this from an `onScrollEndDrag` event.
   */
  /**
   * Invoke this from an `onMomentumScrollBegin` event.
   */
  /**
   * Invoke this from an `onMomentumScrollEnd` event.
   */
  /**
   * Invoke this from an `onTouchStart` event.
   *
   * Since we know that the `SimpleEventPlugin` occurs later in the plugin
   * order, after `ResponderEventPlugin`, we can detect that we were *not*
   * permitted to be the responder (presumably because a contained view became
   * responder). The `onResponderReject` won't fire in that case - it only
   * fires when a *current* responder rejects our request.
   *
   * @param {SyntheticEvent} e Touch Start event.
   */
  /**
   * Invoke this from an `onTouchMove` event.
   *
   * Since we know that the `SimpleEventPlugin` occurs later in the plugin
   * order, after `ResponderEventPlugin`, we can detect that we were *not*
   * permitted to be the responder (presumably because a contained view became
   * responder). The `onResponderReject` won't fire in that case - it only
   * fires when a *current* responder rejects our request.
   *
   * @param {SyntheticEvent} e Touch Start event.
   */
  /**
   * A helper function for this class that lets us quickly determine if the
   * view is currently animating. This is particularly useful to know when
   * a touch has just started or ended.
   */
  /**
   * A helper function to scroll to a specific point in the scrollview.
   * This is currently used to help focus on child textviews, but can also
   * be used to quickly scroll to any element we want to focus. Syntax:
   *
   * scrollResponderScrollTo(options: {x: number = 0; y: number = 0; animated: boolean = true})
   *
   * Note: The weird argument signature is due to the fact that, for historical reasons,
   * the function also accepts separate arguments as as alternative to the options object.
   * This is deprecated due to ambiguity (y before x), and SHOULD NOT BE USED.
   */
  /**
   * A helper function to zoom to a specific rect in the scrollview. The argument has the shape
   * {x: number; y: number; width: number; height: number; animated: boolean = true}
   *
   * @platform ios
   */
  /**
   * Displays the scroll indicators momentarily.
   */
  scrollResponderFlashScrollIndicators() {
  }
  /**
   * This method should be used as the callback to onFocus in a TextInputs'
   * parent view. Note that any module using this mixin needs to return
   * the parent view's ref in getScrollViewRef() in order to use this method.
   * @param {any} nodeHandle The TextInput node handle
   * @param {number} additionalOffset The scroll view's top "contentInset".
   *        Default is 0.
   * @param {bool} preventNegativeScrolling Whether to allow pulling the content
   *        down to make it meet the keyboard's top. Default is false.
   */
  /**
   * The calculations performed here assume the scroll view takes up the entire
   * screen - even if has some content inset. We then measure the offsets of the
   * keyboard, and compensate both for the scroll view's "contentInset".
   *
   * @param {number} left Position of input w.r.t. table view.
   * @param {number} top Position of input w.r.t. table view.
   * @param {number} width Width of the text input.
   * @param {number} height Height of the text input.
   */
  scrollResponderTextInputFocusError(e) {
    console.error("Error measuring text field: ", e);
  }
  /**
   * Warning, this may be called several times for a single keyboard opening.
   * It's best to store the information in this method and then take any action
   * at a later point (either in `keyboardDidShow` or other).
   *
   * Here's the order that events occur in:
   * - focus
   * - willShow {startCoordinates, endCoordinates} several times
   * - didShow several times
   * - blur
   * - willHide {startCoordinates, endCoordinates} several times
   * - didHide several times
   *
   * The `ScrollResponder` providesModule callbacks for each of these events.
   * Even though any user could have easily listened to keyboard events
   * themselves, using these `props` callbacks ensures that ordering of events
   * is consistent - and not dependent on the order that the keyboard events are
   * subscribed to. This matters when telling the scroll view to scroll to where
   * the keyboard is headed - the scroll responder better have been notified of
   * the keyboard destination before being instructed to scroll to where the
   * keyboard will be. Stick to the `ScrollResponder` callbacks, and everything
   * will work.
   *
   * WARNING: These callbacks will fire even if a keyboard is displayed in a
   * different navigation pane. Filter out the events to determine if they are
   * relevant to you. (For example, only if you receive these callbacks after
   * you had explicitly focused a node etc).
   */
  /**
   * ------------------------------------------------------
   * END SCROLLRESPONDER
   * ------------------------------------------------------
   */
  /**
   * Returns a reference to the underlying scroll responder, which supports
   * operations like `scrollTo`. All ScrollView-like components should
   * implement this method so that they can be composed while providing access
   * to the underlying scroll responder's methods.
   */
  /**
   * Scrolls to a given x, y offset, either immediately or with a smooth animation.
   * Syntax:
   *
   * scrollTo(options: {x: number = 0; y: number = 0; animated: boolean = true})
   *
   * Note: The weird argument signature is due to the fact that, for historical reasons,
   * the function also accepts separate arguments as as alternative to the options object.
   * This is deprecated due to ambiguity (y before x), and SHOULD NOT BE USED.
   */
  /**
   * If this is a vertical ScrollView scrolls to the bottom.
   * If this is a horizontal ScrollView scrolls to the right.
   *
   * Use `scrollToEnd({ animated: true })` for smooth animated scrolling,
   * `scrollToEnd({ animated: false })` for immediate scrolling.
   * If no options are passed, `animated` defaults to true.
   */
  render() {
    var _this$props = this.props, contentContainerStyle = _this$props.contentContainerStyle, horizontal = _this$props.horizontal, onContentSizeChange = _this$props.onContentSizeChange, refreshControl = _this$props.refreshControl, stickyHeaderIndices = _this$props.stickyHeaderIndices, pagingEnabled = _this$props.pagingEnabled, forwardedRef = _this$props.forwardedRef, keyboardDismissMode = _this$props.keyboardDismissMode, onScroll = _this$props.onScroll, centerContent = _this$props.centerContent, other = (0, import_objectWithoutPropertiesLoose6.default)(_this$props, _excluded6);
    if (process.env.NODE_ENV !== "production" && this.props.style) {
      var style = StyleSheet_default.flatten(this.props.style);
      var childLayoutProps = ["alignItems", "justifyContent"].filter((prop) => style && style[prop] !== void 0);
      (0, import_invariant2.default)(childLayoutProps.length === 0, "ScrollView child layout (" + JSON.stringify(childLayoutProps) + ") must be applied through the contentContainerStyle prop.");
    }
    var contentSizeChangeProps = {};
    if (onContentSizeChange) {
      contentSizeChangeProps = {
        onLayout: this._handleContentOnLayout
      };
    }
    var hasStickyHeaderIndices = !horizontal && Array.isArray(stickyHeaderIndices);
    var children = hasStickyHeaderIndices || pagingEnabled ? React59.Children.map(this.props.children, (child, i) => {
      var isSticky = hasStickyHeaderIndices && stickyHeaderIndices.indexOf(i) > -1;
      if (child != null && (isSticky || pagingEnabled)) {
        return /* @__PURE__ */ React59.createElement(View_default, {
          style: [isSticky && styles3.stickyHeader, pagingEnabled && styles3.pagingEnabledChild]
        }, child);
      } else {
        return child;
      }
    }) : this.props.children;
    var contentContainer = /* @__PURE__ */ React59.createElement(View_default, (0, import_extends2.default)({}, contentSizeChangeProps, {
      children,
      collapsable: false,
      ref: this._setInnerViewRef,
      style: [horizontal && styles3.contentContainerHorizontal, centerContent && styles3.contentContainerCenterContent, contentContainerStyle]
    }));
    var baseStyle = horizontal ? styles3.baseHorizontal : styles3.baseVertical;
    var pagingEnabledStyle = horizontal ? styles3.pagingEnabledHorizontal : styles3.pagingEnabledVertical;
    var props = (0, import_objectSpread24.default)((0, import_objectSpread24.default)({}, other), {}, {
      style: [baseStyle, pagingEnabled && pagingEnabledStyle, this.props.style],
      onTouchStart: this.scrollResponderHandleTouchStart,
      onTouchMove: this.scrollResponderHandleTouchMove,
      onTouchEnd: this.scrollResponderHandleTouchEnd,
      onScrollBeginDrag: this.scrollResponderHandleScrollBeginDrag,
      onScrollEndDrag: this.scrollResponderHandleScrollEndDrag,
      onMomentumScrollBegin: this.scrollResponderHandleMomentumScrollBegin,
      onMomentumScrollEnd: this.scrollResponderHandleMomentumScrollEnd,
      onStartShouldSetResponder: this.scrollResponderHandleStartShouldSetResponder,
      onStartShouldSetResponderCapture: this.scrollResponderHandleStartShouldSetResponderCapture,
      onScrollShouldSetResponder: this.scrollResponderHandleScrollShouldSetResponder,
      onScroll: this._handleScroll,
      onResponderGrant: this.scrollResponderHandleResponderGrant,
      onResponderTerminationRequest: this.scrollResponderHandleTerminationRequest,
      onResponderTerminate: this.scrollResponderHandleTerminate,
      onResponderRelease: this.scrollResponderHandleResponderRelease,
      onResponderReject: this.scrollResponderHandleResponderReject
    });
    var ScrollViewClass = ScrollViewBase_default;
    (0, import_invariant2.default)(ScrollViewClass !== void 0, "ScrollViewClass must not be undefined");
    var scrollView = /* @__PURE__ */ React59.createElement(ScrollViewClass, (0, import_extends2.default)({}, props, {
      ref: this._setScrollNodeRef
    }), contentContainer);
    if (refreshControl) {
      return /* @__PURE__ */ React59.cloneElement(refreshControl, {
        style: props.style
      }, scrollView);
    }
    return scrollView;
  }
};
var commonStyle = {
  flexGrow: 1,
  flexShrink: 1,
  // Enable hardware compositing in modern browsers.
  // Creates a new layer with its own backing surface that can significantly
  // improve scroll performance.
  transform: "translateZ(0)",
  // iOS native scrolling
  WebkitOverflowScrolling: "touch"
};
var styles3 = StyleSheet_default.create({
  baseVertical: (0, import_objectSpread24.default)((0, import_objectSpread24.default)({}, commonStyle), {}, {
    flexDirection: "column",
    overflowX: "hidden",
    overflowY: "auto"
  }),
  baseHorizontal: (0, import_objectSpread24.default)((0, import_objectSpread24.default)({}, commonStyle), {}, {
    flexDirection: "row",
    overflowX: "auto",
    overflowY: "hidden"
  }),
  contentContainerHorizontal: {
    flexDirection: "row"
  },
  contentContainerCenterContent: {
    justifyContent: "center",
    flexGrow: 1
  },
  stickyHeader: {
    position: "sticky",
    top: 0,
    zIndex: 10
  },
  pagingEnabledHorizontal: {
    scrollSnapType: "x mandatory"
  },
  pagingEnabledVertical: {
    scrollSnapType: "y mandatory"
  },
  pagingEnabledChild: {
    scrollSnapAlign: "start"
  }
});
var ForwardedScrollView = /* @__PURE__ */ React59.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ React59.createElement(ScrollView, (0, import_extends2.default)({}, props, {
    forwardedRef
  }));
});
ForwardedScrollView.displayName = "ScrollView";
var ScrollView_default = ForwardedScrollView;

// ../../node_modules/react-native-web/dist/exports/InteractionManager/index.js
var import_invariant4 = __toESM(require_invariant());

// ../../node_modules/react-native-web/dist/exports/InteractionManager/TaskQueue.js
var import_objectSpread25 = __toESM(require_objectSpread2());
var import_invariant3 = __toESM(require_invariant());
var TaskQueue = class {
  static {
    __name(this, "TaskQueue");
  }
  constructor(_ref) {
    var onMoreTasks = _ref.onMoreTasks;
    this._onMoreTasks = onMoreTasks;
    this._queueStack = [{
      tasks: [],
      popable: true
    }];
  }
  enqueue(task) {
    this._getCurrentQueue().push(task);
  }
  enqueueTasks(tasks) {
    tasks.forEach((task) => this.enqueue(task));
  }
  cancelTasks(tasksToCancel) {
    this._queueStack = this._queueStack.map((queue) => (0, import_objectSpread25.default)((0, import_objectSpread25.default)({}, queue), {}, {
      tasks: queue.tasks.filter((task) => tasksToCancel.indexOf(task) === -1)
    })).filter((queue, idx) => queue.tasks.length > 0 || idx === 0);
  }
  hasTasksToProcess() {
    return this._getCurrentQueue().length > 0;
  }
  /**
   * Executes the next task in the queue.
   */
  processNext() {
    var queue = this._getCurrentQueue();
    if (queue.length) {
      var task = queue.shift();
      try {
        if (typeof task === "object" && task.gen) {
          this._genPromise(task);
        } else if (typeof task === "object" && task.run) {
          task.run();
        } else {
          (0, import_invariant3.default)(typeof task === "function", "Expected Function, SimpleTask, or PromiseTask, but got:\n" + JSON.stringify(task, null, 2));
          task();
        }
      } catch (e) {
        e.message = "TaskQueue: Error with task " + (task.name || "") + ": " + e.message;
        throw e;
      }
    }
  }
  _getCurrentQueue() {
    var stackIdx = this._queueStack.length - 1;
    var queue = this._queueStack[stackIdx];
    if (queue.popable && queue.tasks.length === 0 && stackIdx > 0) {
      this._queueStack.pop();
      return this._getCurrentQueue();
    } else {
      return queue.tasks;
    }
  }
  _genPromise(task) {
    var length = this._queueStack.push({
      tasks: [],
      popable: false
    });
    var stackIdx = length - 1;
    var stackItem = this._queueStack[stackIdx];
    task.gen().then(() => {
      stackItem.popable = true;
      this.hasTasksToProcess() && this._onMoreTasks();
    }).catch((ex) => {
      setTimeout(() => {
        ex.message = "TaskQueue: Error resolving Promise in task " + task.name + ": " + ex.message;
        throw ex;
      }, 0);
    });
  }
};
var TaskQueue_default = TaskQueue;

// ../../node_modules/react-native-web/dist/vendor/react-native/vendor/emitter/EventEmitter.js
var EventEmitter = class {
  static {
    __name(this, "EventEmitter");
  }
  constructor() {
    this._registry = {};
  }
  /**
   * Registers a listener that is called when the supplied event is emitted.
   * Returns a subscription that has a `remove` method to undo registration.
   */
  addListener(eventType, listener, context4) {
    var registrations = allocate(this._registry, eventType);
    var registration = {
      context: context4,
      listener,
      remove() {
        registrations.delete(registration);
      }
    };
    registrations.add(registration);
    return registration;
  }
  /**
   * Emits the supplied event. Additional arguments supplied to `emit` will be
   * passed through to each of the registered listeners.
   *
   * If a listener modifies the listeners registered for the same event, those
   * changes will not be reflected in the current invocation of `emit`.
   */
  emit(eventType) {
    var registrations = this._registry[eventType];
    if (registrations != null) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      for (var _i = 0, _arr = [...registrations]; _i < _arr.length; _i++) {
        var registration = _arr[_i];
        registration.listener.apply(registration.context, args);
      }
    }
  }
  /**
   * Removes all registered listeners.
   */
  removeAllListeners(eventType) {
    if (eventType == null) {
      this._registry = {};
    } else {
      delete this._registry[eventType];
    }
  }
  /**
   * Returns the number of registered listeners for the supplied event.
   */
  listenerCount(eventType) {
    var registrations = this._registry[eventType];
    return registrations == null ? 0 : registrations.size;
  }
};
function allocate(registry, eventType) {
  var registrations = registry[eventType];
  if (registrations == null) {
    registrations = /* @__PURE__ */ new Set();
    registry[eventType] = registrations;
  }
  return registrations;
}
__name(allocate, "allocate");

// ../../node_modules/react-native-web/dist/modules/requestIdleCallback/index.js
var _requestIdleCallback = /* @__PURE__ */ __name(function _requestIdleCallback2(cb, options) {
  return setTimeout(() => {
    var start = Date.now();
    cb({
      didTimeout: false,
      timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
}, "_requestIdleCallback");
var _cancelIdleCallback = /* @__PURE__ */ __name(function _cancelIdleCallback2(id) {
  clearTimeout(id);
}, "_cancelIdleCallback");
var isSupported = canUseDom_default && typeof window.requestIdleCallback !== "undefined";
var requestIdleCallback2 = isSupported ? window.requestIdleCallback : _requestIdleCallback;
var cancelIdleCallback = isSupported ? window.cancelIdleCallback : _cancelIdleCallback;
var requestIdleCallback_default = requestIdleCallback2;

// ../../node_modules/react-native-web/dist/exports/InteractionManager/index.js
var _emitter = new EventEmitter();
var InteractionManager = {
  Events: {
    interactionStart: "interactionStart",
    interactionComplete: "interactionComplete"
  },
  /**
   * Schedule a function to run after all interactions have completed.
   */
  runAfterInteractions(task) {
    var tasks = [];
    var promise = new Promise((resolve) => {
      _scheduleUpdate();
      if (task) {
        tasks.push(task);
      }
      tasks.push({
        run: resolve,
        name: "resolve " + (task && task.name || "?")
      });
      _taskQueue.enqueueTasks(tasks);
    });
    return {
      then: promise.then.bind(promise),
      done: promise.then.bind(promise),
      cancel: /* @__PURE__ */ __name(() => {
        _taskQueue.cancelTasks(tasks);
      }, "cancel")
    };
  },
  /**
   * Notify manager that an interaction has started.
   */
  createInteractionHandle() {
    _scheduleUpdate();
    var handle = ++_inc;
    _addInteractionSet.add(handle);
    return handle;
  },
  /**
   * Notify manager that an interaction has completed.
   */
  clearInteractionHandle(handle) {
    (0, import_invariant4.default)(!!handle, "Must provide a handle to clear.");
    _scheduleUpdate();
    _addInteractionSet.delete(handle);
    _deleteInteractionSet.add(handle);
  },
  addListener: _emitter.addListener.bind(_emitter),
  /**
   *
   * @param deadline
   */
  setDeadline(deadline) {
    _deadline = deadline;
  }
};
var _interactionSet = /* @__PURE__ */ new Set();
var _addInteractionSet = /* @__PURE__ */ new Set();
var _deleteInteractionSet = /* @__PURE__ */ new Set();
var _taskQueue = new TaskQueue_default({
  onMoreTasks: _scheduleUpdate
});
var _nextUpdateHandle = 0;
var _inc = 0;
var _deadline = -1;
function _scheduleUpdate() {
  if (!_nextUpdateHandle) {
    if (_deadline > 0) {
      _nextUpdateHandle = setTimeout(_processUpdate);
    } else {
      _nextUpdateHandle = requestIdleCallback_default(_processUpdate);
    }
  }
}
__name(_scheduleUpdate, "_scheduleUpdate");
function _processUpdate() {
  _nextUpdateHandle = 0;
  var interactionCount = _interactionSet.size;
  _addInteractionSet.forEach((handle) => _interactionSet.add(handle));
  _deleteInteractionSet.forEach((handle) => _interactionSet.delete(handle));
  var nextInteractionCount = _interactionSet.size;
  if (interactionCount !== 0 && nextInteractionCount === 0) {
    _emitter.emit(InteractionManager.Events.interactionComplete);
  } else if (interactionCount === 0 && nextInteractionCount !== 0) {
    _emitter.emit(InteractionManager.Events.interactionStart);
  }
  if (nextInteractionCount === 0) {
    var begin = Date.now();
    while (_taskQueue.hasTasksToProcess()) {
      _taskQueue.processNext();
      if (_deadline > 0 && Date.now() - begin >= _deadline) {
        _scheduleUpdate();
        break;
      }
    }
  }
  _addInteractionSet.clear();
  _deleteInteractionSet.clear();
}
__name(_processUpdate, "_processUpdate");
var InteractionManager_default = InteractionManager;

// ../../node_modules/react-native-web/dist/exports/Linking/index.js
var import_invariant5 = __toESM(require_invariant());
var initialURL = canUseDom_default ? window.location.href : "";
var Linking = class {
  static {
    __name(this, "Linking");
  }
  constructor() {
    this._eventCallbacks = {};
  }
  /**
   * An object mapping of event name
   * and all the callbacks subscribing to it
   */
  _dispatchEvent(event) {
    for (var _len = arguments.length, data = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      data[_key - 1] = arguments[_key];
    }
    var listeners2 = this._eventCallbacks[event];
    if (listeners2 != null && Array.isArray(listeners2)) {
      listeners2.map((listener) => {
        listener(...data);
      });
    }
  }
  /**
   * Adds a event listener for the specified event. The callback will be called when the
   * said event is dispatched.
   */
  addEventListener(eventType, callback) {
    var _this = this;
    if (!_this._eventCallbacks[eventType]) {
      _this._eventCallbacks[eventType] = [callback];
    }
    _this._eventCallbacks[eventType].push(callback);
    return {
      remove() {
        var callbacks = _this._eventCallbacks[eventType];
        var filteredCallbacks = callbacks.filter((c) => c.toString() !== callback.toString());
        _this._eventCallbacks[eventType] = filteredCallbacks;
      }
    };
  }
  /**
   * Removes a previously added event listener for the specified event. The callback must
   * be the same object as the one passed to `addEventListener`.
   */
  removeEventListener(eventType, callback) {
    console.error("Linking.removeEventListener('" + eventType + "', ...): Method has been deprecated. Please instead use `remove()` on the subscription returned by `Linking.addEventListener`.");
    var callbacks = this._eventCallbacks[eventType];
    var filteredCallbacks = callbacks.filter((c) => c.toString() !== callback.toString());
    this._eventCallbacks[eventType] = filteredCallbacks;
  }
  canOpenURL() {
    return Promise.resolve(true);
  }
  getInitialURL() {
    return Promise.resolve(initialURL);
  }
  /**
   * Try to open the given url in a secure fashion. The method returns a Promise object.
   * If a target is passed (including undefined) that target will be used, otherwise '_blank'.
   * If the url opens, the promise is resolved. If not, the promise is rejected.
   * Dispatches the `onOpen` event if `url` is opened successfully.
   */
  openURL(url, target) {
    if (arguments.length === 1) {
      target = "_blank";
    }
    try {
      open(url, target);
      this._dispatchEvent("onOpen", url);
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  }
  _validateURL(url) {
    (0, import_invariant5.default)(typeof url === "string", "Invalid URL: should be a string. Was: " + url);
    (0, import_invariant5.default)(url, "Invalid URL: cannot be empty");
  }
};
var open = /* @__PURE__ */ __name((url, target) => {
  if (canUseDom_default) {
    var urlToOpen = new URL(url, window.location).toString();
    if (urlToOpen.indexOf("tel:") === 0) {
      window.location = urlToOpen;
    } else {
      window.open(urlToOpen, target, "noopener");
    }
  }
}, "open");
var Linking_default = new Linking();

// ../../node_modules/react-native-web/dist/vendor/react-native/TouchHistoryMath/index.js
var TouchHistoryMath = {
  /**
   * This code is optimized and not intended to look beautiful. This allows
   * computing of touch centroids that have moved after `touchesChangedAfter`
   * timeStamp. You can compute the current centroid involving all touches
   * moves after `touchesChangedAfter`, or you can compute the previous
   * centroid of all touches that were moved after `touchesChangedAfter`.
   *
   * @param {TouchHistoryMath} touchHistory Standard Responder touch track
   * data.
   * @param {number} touchesChangedAfter timeStamp after which moved touches
   * are considered "actively moving" - not just "active".
   * @param {boolean} isXAxis Consider `x` dimension vs. `y` dimension.
   * @param {boolean} ofCurrent Compute current centroid for actively moving
   * touches vs. previous centroid of now actively moving touches.
   * @return {number} value of centroid in specified dimension.
   */
  centroidDimension: /* @__PURE__ */ __name(function centroidDimension(touchHistory, touchesChangedAfter, isXAxis, ofCurrent) {
    var touchBank = touchHistory.touchBank;
    var total = 0;
    var count2 = 0;
    var oneTouchData = touchHistory.numberActiveTouches === 1 ? touchHistory.touchBank[touchHistory.indexOfSingleActiveTouch] : null;
    if (oneTouchData !== null) {
      if (oneTouchData.touchActive && oneTouchData.currentTimeStamp > touchesChangedAfter) {
        total += ofCurrent && isXAxis ? oneTouchData.currentPageX : ofCurrent && !isXAxis ? oneTouchData.currentPageY : !ofCurrent && isXAxis ? oneTouchData.previousPageX : oneTouchData.previousPageY;
        count2 = 1;
      }
    } else {
      for (var i = 0; i < touchBank.length; i++) {
        var touchTrack = touchBank[i];
        if (touchTrack !== null && touchTrack !== void 0 && touchTrack.touchActive && touchTrack.currentTimeStamp >= touchesChangedAfter) {
          var toAdd = void 0;
          if (ofCurrent && isXAxis) {
            toAdd = touchTrack.currentPageX;
          } else if (ofCurrent && !isXAxis) {
            toAdd = touchTrack.currentPageY;
          } else if (!ofCurrent && isXAxis) {
            toAdd = touchTrack.previousPageX;
          } else {
            toAdd = touchTrack.previousPageY;
          }
          total += toAdd;
          count2++;
        }
      }
    }
    return count2 > 0 ? total / count2 : TouchHistoryMath.noCentroid;
  }, "centroidDimension"),
  currentCentroidXOfTouchesChangedAfter: /* @__PURE__ */ __name(function currentCentroidXOfTouchesChangedAfter(touchHistory, touchesChangedAfter) {
    return TouchHistoryMath.centroidDimension(
      touchHistory,
      touchesChangedAfter,
      true,
      // isXAxis
      true
      // ofCurrent
    );
  }, "currentCentroidXOfTouchesChangedAfter"),
  currentCentroidYOfTouchesChangedAfter: /* @__PURE__ */ __name(function currentCentroidYOfTouchesChangedAfter(touchHistory, touchesChangedAfter) {
    return TouchHistoryMath.centroidDimension(
      touchHistory,
      touchesChangedAfter,
      false,
      // isXAxis
      true
      // ofCurrent
    );
  }, "currentCentroidYOfTouchesChangedAfter"),
  previousCentroidXOfTouchesChangedAfter: /* @__PURE__ */ __name(function previousCentroidXOfTouchesChangedAfter(touchHistory, touchesChangedAfter) {
    return TouchHistoryMath.centroidDimension(
      touchHistory,
      touchesChangedAfter,
      true,
      // isXAxis
      false
      // ofCurrent
    );
  }, "previousCentroidXOfTouchesChangedAfter"),
  previousCentroidYOfTouchesChangedAfter: /* @__PURE__ */ __name(function previousCentroidYOfTouchesChangedAfter(touchHistory, touchesChangedAfter) {
    return TouchHistoryMath.centroidDimension(
      touchHistory,
      touchesChangedAfter,
      false,
      // isXAxis
      false
      // ofCurrent
    );
  }, "previousCentroidYOfTouchesChangedAfter"),
  currentCentroidX: /* @__PURE__ */ __name(function currentCentroidX(touchHistory) {
    return TouchHistoryMath.centroidDimension(
      touchHistory,
      0,
      // touchesChangedAfter
      true,
      // isXAxis
      true
      // ofCurrent
    );
  }, "currentCentroidX"),
  currentCentroidY: /* @__PURE__ */ __name(function currentCentroidY(touchHistory) {
    return TouchHistoryMath.centroidDimension(
      touchHistory,
      0,
      // touchesChangedAfter
      false,
      // isXAxis
      true
      // ofCurrent
    );
  }, "currentCentroidY"),
  noCentroid: -1
};
var TouchHistoryMath_default = TouchHistoryMath;

// ../../node_modules/react-native-web/dist/vendor/react-native/PanResponder/index.js
var currentCentroidXOfTouchesChangedAfter2 = TouchHistoryMath_default.currentCentroidXOfTouchesChangedAfter;
var currentCentroidYOfTouchesChangedAfter2 = TouchHistoryMath_default.currentCentroidYOfTouchesChangedAfter;
var previousCentroidXOfTouchesChangedAfter2 = TouchHistoryMath_default.previousCentroidXOfTouchesChangedAfter;
var previousCentroidYOfTouchesChangedAfter2 = TouchHistoryMath_default.previousCentroidYOfTouchesChangedAfter;
var currentCentroidX2 = TouchHistoryMath_default.currentCentroidX;
var currentCentroidY2 = TouchHistoryMath_default.currentCentroidY;
var PanResponder = {
  /**
   *
   * A graphical explanation of the touch data flow:
   *
   * +----------------------------+             +--------------------------------+
   * | ResponderTouchHistoryStore |             |TouchHistoryMath                |
   * +----------------------------+             +----------+---------------------+
   * |Global store of touchHistory|             |Allocation-less math util       |
   * |including activeness, start |             |on touch history (centroids     |
   * |position, prev/cur position.|             |and multitouch movement etc)    |
   * |                            |             |                                |
   * +----^-----------------------+             +----^---------------------------+
   *      |                                          |
   *      | (records relevant history                |
   *      |  of touches relevant for                 |
   *      |  implementing higher level               |
   *      |  gestures)                               |
   *      |                                          |
   * +----+-----------------------+             +----|---------------------------+
   * | ResponderEventPlugin       |             |    |   Your App/Component      |
   * +----------------------------+             +----|---------------------------+
   * |Negotiates which view gets  | Low level   |    |             High level    |
   * |onResponderMove events.     | events w/   |  +-+-------+     events w/     |
   * |Also records history into   | touchHistory|  |   Pan   |     multitouch +  |
   * |ResponderTouchHistoryStore. +---------------->Responder+-----> accumulative|
   * +----------------------------+ attached to |  |         |     distance and  |
   *                                 each event |  +---------+     velocity.     |
   *                                            |                                |
   *                                            |                                |
   *                                            +--------------------------------+
   *
   *
   *
   * Gesture that calculates cumulative movement over time in a way that just
   * "does the right thing" for multiple touches. The "right thing" is very
   * nuanced. When moving two touches in opposite directions, the cumulative
   * distance is zero in each dimension. When two touches move in parallel five
   * pixels in the same direction, the cumulative distance is five, not ten. If
   * two touches start, one moves five in a direction, then stops and the other
   * touch moves fives in the same direction, the cumulative distance is ten.
   *
   * This logic requires a kind of processing of time "clusters" of touch events
   * so that two touch moves that essentially occur in parallel but move every
   * other frame respectively, are considered part of the same movement.
   *
   * Explanation of some of the non-obvious fields:
   *
   * - moveX/moveY: If no move event has been observed, then `(moveX, moveY)` is
   *   invalid. If a move event has been observed, `(moveX, moveY)` is the
   *   centroid of the most recently moved "cluster" of active touches.
   *   (Currently all move have the same timeStamp, but later we should add some
   *   threshold for what is considered to be "moving"). If a palm is
   *   accidentally counted as a touch, but a finger is moving greatly, the palm
   *   will move slightly, but we only want to count the single moving touch.
   * - x0/y0: Centroid location (non-cumulative) at the time of becoming
   *   responder.
   * - dx/dy: Cumulative touch distance - not the same thing as sum of each touch
   *   distance. Accounts for touch moves that are clustered together in time,
   *   moving the same direction. Only valid when currently responder (otherwise,
   *   it only represents the drag distance below the threshold).
   * - vx/vy: Velocity.
   */
  _initializeGestureState(gestureState) {
    gestureState.moveX = 0;
    gestureState.moveY = 0;
    gestureState.x0 = 0;
    gestureState.y0 = 0;
    gestureState.dx = 0;
    gestureState.dy = 0;
    gestureState.vx = 0;
    gestureState.vy = 0;
    gestureState.numberActiveTouches = 0;
    gestureState._accountsForMovesUpTo = 0;
  },
  /**
   * This is nuanced and is necessary. It is incorrect to continuously take all
   * active *and* recently moved touches, find the centroid, and track how that
   * result changes over time. Instead, we must take all recently moved
   * touches, and calculate how the centroid has changed just for those
   * recently moved touches, and append that change to an accumulator. This is
   * to (at least) handle the case where the user is moving three fingers, and
   * then one of the fingers stops but the other two continue.
   *
   * This is very different than taking all of the recently moved touches and
   * storing their centroid as `dx/dy`. For correctness, we must *accumulate
   * changes* in the centroid of recently moved touches.
   *
   * There is also some nuance with how we handle multiple moved touches in a
   * single event. With the way `ReactNativeEventEmitter` dispatches touches as
   * individual events, multiple touches generate two 'move' events, each of
   * them triggering `onResponderMove`. But with the way `PanResponder` works,
   * all of the gesture inference is performed on the first dispatch, since it
   * looks at all of the touches (even the ones for which there hasn't been a
   * native dispatch yet). Therefore, `PanResponder` does not call
   * `onResponderMove` passed the first dispatch. This diverges from the
   * typical responder callback pattern (without using `PanResponder`), but
   * avoids more dispatches than necessary.
   */
  _updateGestureStateOnMove(gestureState, touchHistory) {
    gestureState.numberActiveTouches = touchHistory.numberActiveTouches;
    gestureState.moveX = currentCentroidXOfTouchesChangedAfter2(touchHistory, gestureState._accountsForMovesUpTo);
    gestureState.moveY = currentCentroidYOfTouchesChangedAfter2(touchHistory, gestureState._accountsForMovesUpTo);
    var movedAfter = gestureState._accountsForMovesUpTo;
    var prevX = previousCentroidXOfTouchesChangedAfter2(touchHistory, movedAfter);
    var x = currentCentroidXOfTouchesChangedAfter2(touchHistory, movedAfter);
    var prevY = previousCentroidYOfTouchesChangedAfter2(touchHistory, movedAfter);
    var y = currentCentroidYOfTouchesChangedAfter2(touchHistory, movedAfter);
    var nextDX = gestureState.dx + (x - prevX);
    var nextDY = gestureState.dy + (y - prevY);
    var dt = touchHistory.mostRecentTimeStamp - gestureState._accountsForMovesUpTo;
    gestureState.vx = (nextDX - gestureState.dx) / dt;
    gestureState.vy = (nextDY - gestureState.dy) / dt;
    gestureState.dx = nextDX;
    gestureState.dy = nextDY;
    gestureState._accountsForMovesUpTo = touchHistory.mostRecentTimeStamp;
  },
  /**
   * @param {object} config Enhanced versions of all of the responder callbacks
   * that provide not only the typical `ResponderSyntheticEvent`, but also the
   * `PanResponder` gesture state.  Simply replace the word `Responder` with
   * `PanResponder` in each of the typical `onResponder*` callbacks. For
   * example, the `config` object would look like:
   *
   *  - `onMoveShouldSetPanResponder: (e, gestureState) => {...}`
   *  - `onMoveShouldSetPanResponderCapture: (e, gestureState) => {...}`
   *  - `onStartShouldSetPanResponder: (e, gestureState) => {...}`
   *  - `onStartShouldSetPanResponderCapture: (e, gestureState) => {...}`
   *  - `onPanResponderReject: (e, gestureState) => {...}`
   *  - `onPanResponderGrant: (e, gestureState) => {...}`
   *  - `onPanResponderStart: (e, gestureState) => {...}`
   *  - `onPanResponderEnd: (e, gestureState) => {...}`
   *  - `onPanResponderRelease: (e, gestureState) => {...}`
   *  - `onPanResponderMove: (e, gestureState) => {...}`
   *  - `onPanResponderTerminate: (e, gestureState) => {...}`
   *  - `onPanResponderTerminationRequest: (e, gestureState) => {...}`
   *  - `onShouldBlockNativeResponder: (e, gestureState) => {...}`
   *
   *  In general, for events that have capture equivalents, we update the
   *  gestureState once in the capture phase and can use it in the bubble phase
   *  as well.
   *
   *  Be careful with onStartShould* callbacks. They only reflect updated
   *  `gestureState` for start/end events that bubble/capture to the Node.
   *  Once the node is the responder, you can rely on every start/end event
   *  being processed by the gesture and `gestureState` being updated
   *  accordingly. (numberActiveTouches) may not be totally accurate unless you
   *  are the responder.
   */
  create(config) {
    var interactionState = {
      handle: null,
      shouldCancelClick: false,
      timeout: null
    };
    var gestureState = {
      // Useful for debugging
      stateID: Math.random(),
      moveX: 0,
      moveY: 0,
      x0: 0,
      y0: 0,
      dx: 0,
      dy: 0,
      vx: 0,
      vy: 0,
      numberActiveTouches: 0,
      _accountsForMovesUpTo: 0
    };
    var panHandlers = {
      onStartShouldSetResponder(event) {
        return config.onStartShouldSetPanResponder == null ? false : config.onStartShouldSetPanResponder(event, gestureState);
      },
      onMoveShouldSetResponder(event) {
        return config.onMoveShouldSetPanResponder == null ? false : config.onMoveShouldSetPanResponder(event, gestureState);
      },
      onStartShouldSetResponderCapture(event) {
        if (event.nativeEvent.touches.length === 1) {
          PanResponder._initializeGestureState(gestureState);
        }
        gestureState.numberActiveTouches = event.touchHistory.numberActiveTouches;
        return config.onStartShouldSetPanResponderCapture != null ? config.onStartShouldSetPanResponderCapture(event, gestureState) : false;
      },
      onMoveShouldSetResponderCapture(event) {
        var touchHistory = event.touchHistory;
        if (gestureState._accountsForMovesUpTo === touchHistory.mostRecentTimeStamp) {
          return false;
        }
        PanResponder._updateGestureStateOnMove(gestureState, touchHistory);
        return config.onMoveShouldSetPanResponderCapture ? config.onMoveShouldSetPanResponderCapture(event, gestureState) : false;
      },
      onResponderGrant(event) {
        if (!interactionState.handle) {
          interactionState.handle = InteractionManager_default.createInteractionHandle();
        }
        if (interactionState.timeout) {
          clearInteractionTimeout(interactionState);
        }
        interactionState.shouldCancelClick = true;
        gestureState.x0 = currentCentroidX2(event.touchHistory);
        gestureState.y0 = currentCentroidY2(event.touchHistory);
        gestureState.dx = 0;
        gestureState.dy = 0;
        if (config.onPanResponderGrant) {
          config.onPanResponderGrant(event, gestureState);
        }
        return config.onShouldBlockNativeResponder == null ? true : config.onShouldBlockNativeResponder(event, gestureState);
      },
      onResponderReject(event) {
        clearInteractionHandle(interactionState, config.onPanResponderReject, event, gestureState);
      },
      onResponderRelease(event) {
        clearInteractionHandle(interactionState, config.onPanResponderRelease, event, gestureState);
        setInteractionTimeout(interactionState);
        PanResponder._initializeGestureState(gestureState);
      },
      onResponderStart(event) {
        var touchHistory = event.touchHistory;
        gestureState.numberActiveTouches = touchHistory.numberActiveTouches;
        if (config.onPanResponderStart) {
          config.onPanResponderStart(event, gestureState);
        }
      },
      onResponderMove(event) {
        var touchHistory = event.touchHistory;
        if (gestureState._accountsForMovesUpTo === touchHistory.mostRecentTimeStamp) {
          return;
        }
        PanResponder._updateGestureStateOnMove(gestureState, touchHistory);
        if (config.onPanResponderMove) {
          config.onPanResponderMove(event, gestureState);
        }
      },
      onResponderEnd(event) {
        var touchHistory = event.touchHistory;
        gestureState.numberActiveTouches = touchHistory.numberActiveTouches;
        clearInteractionHandle(interactionState, config.onPanResponderEnd, event, gestureState);
      },
      onResponderTerminate(event) {
        clearInteractionHandle(interactionState, config.onPanResponderTerminate, event, gestureState);
        setInteractionTimeout(interactionState);
        PanResponder._initializeGestureState(gestureState);
      },
      onResponderTerminationRequest(event) {
        return config.onPanResponderTerminationRequest == null ? true : config.onPanResponderTerminationRequest(event, gestureState);
      },
      // We do not want to trigger 'click' activated gestures or native behaviors
      // on any pan target that is under a mouse cursor when it is released.
      // Browsers will natively cancel 'click' events on a target if a non-mouse
      // active pointer moves.
      onClickCapture: /* @__PURE__ */ __name((event) => {
        if (interactionState.shouldCancelClick === true) {
          event.stopPropagation();
          event.preventDefault();
        }
      }, "onClickCapture")
    };
    return {
      panHandlers,
      getInteractionHandle() {
        return interactionState.handle;
      }
    };
  }
};
function clearInteractionHandle(interactionState, callback, event, gestureState) {
  if (interactionState.handle) {
    InteractionManager_default.clearInteractionHandle(interactionState.handle);
    interactionState.handle = null;
  }
  if (callback) {
    callback(event, gestureState);
  }
}
__name(clearInteractionHandle, "clearInteractionHandle");
function clearInteractionTimeout(interactionState) {
  clearTimeout(interactionState.timeout);
}
__name(clearInteractionTimeout, "clearInteractionTimeout");
function setInteractionTimeout(interactionState) {
  interactionState.timeout = setTimeout(() => {
    interactionState.shouldCancelClick = false;
  }, 250);
}
__name(setInteractionTimeout, "setInteractionTimeout");
var PanResponder_default = PanResponder;

// ../../node_modules/react-native-web/dist/exports/PanResponder/index.js
var PanResponder_default2 = PanResponder_default;

// ../../node_modules/react-native-web/dist/exports/ActivityIndicator/index.js
var import_extends3 = __toESM(require_extends());
var import_objectWithoutPropertiesLoose7 = __toESM(require_objectWithoutPropertiesLoose());
import * as React60 from "react";
var _excluded7 = ["animating", "color", "hidesWhenStopped", "size", "style"];
var createSvgCircle = /* @__PURE__ */ __name((style) => /* @__PURE__ */ React60.createElement("circle", {
  cx: "16",
  cy: "16",
  fill: "none",
  r: "14",
  strokeWidth: "4",
  style
}), "createSvgCircle");
var ActivityIndicator = /* @__PURE__ */ React60.forwardRef((props, forwardedRef) => {
  var _props$animating = props.animating, animating = _props$animating === void 0 ? true : _props$animating, _props$color = props.color, color = _props$color === void 0 ? "#1976D2" : _props$color, _props$hidesWhenStopp = props.hidesWhenStopped, hidesWhenStopped = _props$hidesWhenStopp === void 0 ? true : _props$hidesWhenStopp, _props$size = props.size, size4 = _props$size === void 0 ? "small" : _props$size, style = props.style, other = (0, import_objectWithoutPropertiesLoose7.default)(props, _excluded7);
  var svg = /* @__PURE__ */ React60.createElement("svg", {
    height: "100%",
    viewBox: "0 0 32 32",
    width: "100%"
  }, createSvgCircle({
    stroke: color,
    opacity: 0.2
  }), createSvgCircle({
    stroke: color,
    strokeDasharray: 80,
    strokeDashoffset: 60
  }));
  return /* @__PURE__ */ React60.createElement(View_default, (0, import_extends3.default)({}, other, {
    "aria-valuemax": 1,
    "aria-valuemin": 0,
    ref: forwardedRef,
    role: "progressbar",
    style: [styles4.container, style]
  }), /* @__PURE__ */ React60.createElement(View_default, {
    children: svg,
    style: [typeof size4 === "number" ? {
      height: size4,
      width: size4
    } : indicatorSizes[size4], styles4.animation, !animating && styles4.animationPause, !animating && hidesWhenStopped && styles4.hidesWhenStopped]
  }));
});
ActivityIndicator.displayName = "ActivityIndicator";
var styles4 = StyleSheet_default.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  hidesWhenStopped: {
    visibility: "hidden"
  },
  animation: {
    animationDuration: "0.75s",
    animationKeyframes: [{
      "0%": {
        transform: "rotate(0deg)"
      },
      "100%": {
        transform: "rotate(360deg)"
      }
    }],
    animationTimingFunction: "linear",
    animationIterationCount: "infinite"
  },
  animationPause: {
    animationPlayState: "paused"
  }
});
var indicatorSizes = StyleSheet_default.create({
  small: {
    width: 20,
    height: 20
  },
  large: {
    width: 36,
    height: 36
  }
});
var ActivityIndicator_default = ActivityIndicator;

// node_modules/@tamagui/scroll-view/dist/esm/ScrollView.mjs
var ScrollView2 = styled30(ScrollView_default, {
  name: "ScrollView",
  scrollEnabled: true,
  variants: {
    fullscreen: {
      true: fullscreenStyle
    }
  }
}, {
  accept: {
    contentContainerStyle: "style"
  }
});

// node_modules/@tamagui/menu/dist/esm/createNonNativeMenu.mjs
import { composeEventHandlers as composeEventHandlers4, composeRefs as composeRefs3, createStyledContext as createStyledContext15, isAndroid as isAndroid4, isWeb as isWeb6, Slot as Slot4, styled as styled31, useEvent as useEvent4, useIsTouchDevice as useIsTouchDevice2, View as View17, withStaticProperties as withStaticProperties7 } from "@tamagui/web";
import * as React61 from "react";
import { useId as useId14 } from "react";
import { jsx as jsx41 } from "react/jsx-runtime";
var DROPDOWN_MENU_CONTEXT = "MenuContext";
function useMenuTriggerSetup(open2) {
  const triggerStateSettersRef = React61.useRef(/* @__PURE__ */ new Map()), activeTriggerIdRef = React61.useRef(null), setActiveTrigger = useEvent4((id) => {
    const prevId = activeTriggerIdRef.current;
    prevId !== id && (prevId && triggerStateSettersRef.current.get(prevId)?.(false), activeTriggerIdRef.current = id, id && open2 && triggerStateSettersRef.current.get(id)?.(true));
  }), registerTrigger = useEvent4((id, setOpenState) => {
    triggerStateSettersRef.current.set(id, setOpenState), setOpenState(activeTriggerIdRef.current === id && open2);
  }), unregisterTrigger = useEvent4((id) => {
    triggerStateSettersRef.current.delete(id), activeTriggerIdRef.current === id && (activeTriggerIdRef.current = null);
  });
  return React61.useEffect(() => {
    if (!open2) {
      setActiveTrigger(null);
      return;
    }
    const activeId = activeTriggerIdRef.current;
    activeId && triggerStateSettersRef.current.get(activeId)?.(true);
  }, [open2, setActiveTrigger]), {
    setActiveTrigger,
    registerTrigger,
    unregisterTrigger
  };
}
__name(useMenuTriggerSetup, "useMenuTriggerSetup");
function createNonNativeMenu(params) {
  const {
    Menu: Menu2
  } = createBaseMenu(params), DROPDOWN_MENU_NAME = "Menu", {
    Provider: MenuProvider2,
    useStyledContext: useMenuContext2
  } = createStyledContext15(), MenuComp = /* @__PURE__ */ __name((props) => {
    const {
      scope,
      children,
      dir,
      open: openProp,
      defaultOpen,
      onOpenChange,
      modal = true,
      ...rest
    } = props, triggerRef = React61.useRef(null), [open2 = false, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen,
      onChange: onOpenChange
    }), openRef = React61.useRef(open2);
    openRef.current = open2;
    const {
      setActiveTrigger,
      registerTrigger,
      unregisterTrigger
    } = useMenuTriggerSetup(open2);
    return /* @__PURE__ */ jsx41(MenuProvider2, {
      scope,
      triggerId: useId14(),
      triggerRef,
      contentId: useId14(),
      openRef,
      onOpenChange: React61.useCallback((nextOpen) => setOpen(nextOpen), [setOpen]),
      onOpenToggle: React61.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      modal,
      setActiveTrigger,
      registerTrigger,
      unregisterTrigger,
      children: /* @__PURE__ */ jsx41(Menu2, {
        scope: scope || DROPDOWN_MENU_CONTEXT,
        open: open2,
        onOpenChange: setOpen,
        dir,
        modal,
        ...rest,
        children
      })
    });
  }, "MenuComp");
  MenuComp.displayName = DROPDOWN_MENU_NAME;
  const TRIGGER_NAME5 = "MenuTrigger", MenuTriggerFrame = Menu2.Anchor, MenuTrigger = View17.styleable((props, forwardedRef) => {
    const {
      scope,
      asChild,
      children,
      disabled = false,
      onKeydown,
      ...triggerProps
    } = props, context4 = useMenuContext2(scope), popperCtx = usePopperContextSlow(scope || DROPDOWN_MENU_CONTEXT), Comp = asChild ? Slot4 : View17, isTouchDevice = useIsTouchDevice2(), triggerElRef = React61.useRef(null), triggerId = React61.useId(), [triggerOpen, setTriggerOpen] = React61.useState(false), {
      registerTrigger,
      unregisterTrigger
    } = context4;
    React61.useEffect(() => (registerTrigger(triggerId, setTriggerOpen), () => unregisterTrigger(triggerId)), [registerTrigger, unregisterTrigger, triggerId]);
    const activateSelf = React61.useCallback(() => {
      context4.setActiveTrigger(triggerId);
      const el = triggerElRef.current;
      el && (context4.triggerRef.current = el, el instanceof HTMLElement && (popperCtx.refs?.setReference(el), requestAnimationFrame(() => popperCtx.update?.())));
    }, [context4, triggerId, popperCtx]), pressEvent = isWeb6 ? isTouchDevice ? "onClick" : "onPointerDown" : "onPress";
    return /* @__PURE__ */ jsx41(MenuTriggerFrame, {
      asChild: true,
      componentName: TRIGGER_NAME5,
      scope: scope || DROPDOWN_MENU_CONTEXT,
      children: /* @__PURE__ */ jsx41(Comp, {
        role: "button",
        id: context4.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": triggerOpen,
        "aria-controls": triggerOpen ? context4.contentId : void 0,
        "data-state": triggerOpen ? "open" : "closed",
        "data-disabled": disabled ? "" : void 0,
        "aria-disabled": disabled || void 0,
        ref: composeRefs3(forwardedRef, context4.triggerRef, triggerElRef),
        [pressEvent]: composeEventHandlers4(
          //@ts-ignore
          props[pressEvent],
          (event) => {
            if (!disabled) {
              if (isWeb6 && event instanceof PointerEvent && event.button !== 0 && event.ctrlKey === true) return;
              context4.openRef.current ? context4.setActiveTrigger(null) : activateSelf(), context4.onOpenToggle(), context4.openRef.current || event.preventDefault();
            }
          }
        ),
        ...isWeb6 && {
          onKeyDown: composeEventHandlers4(onKeydown, (event) => {
            disabled || (["Enter", " "].includes(event.key) && (context4.openRef.current ? context4.setActiveTrigger(null) : activateSelf(), context4.onOpenToggle()), event.key === "ArrowDown" && (activateSelf(), context4.onOpenChange(true)), ["Enter", " ", "ArrowDown"].includes(event.key) && event.preventDefault());
          })
        },
        ...triggerProps,
        children
      })
    });
  });
  MenuTrigger.displayName = TRIGGER_NAME5;
  const PORTAL_NAME = "MenuPortal", MenuPortal = /* @__PURE__ */ __name((props) => {
    const {
      scope,
      children,
      ...portalProps
    } = props, context4 = isAndroid4 ? useMenuContext2(scope) : null, content = isAndroid4 ? /* @__PURE__ */ jsx41(MenuProvider2, {
      ...context4,
      children
    }) : children;
    return /* @__PURE__ */ jsx41(Menu2.Portal, {
      scope: scope || DROPDOWN_MENU_CONTEXT,
      ...portalProps,
      children: content
    });
  }, "MenuPortal");
  MenuPortal.displayName = PORTAL_NAME;
  const CONTENT_NAME5 = "MenuContent", MenuContent = React61.forwardRef((props, forwardedRef) => {
    const {
      scope,
      ...contentProps
    } = props, context4 = useMenuContext2(scope), hasInteractedOutsideRef = React61.useRef(false);
    return /* @__PURE__ */ jsx41(Menu2.Content, {
      id: context4.contentId,
      "aria-labelledby": context4.triggerId,
      scope: scope || DROPDOWN_MENU_CONTEXT,
      ...contentProps,
      ref: forwardedRef,
      onCloseAutoFocus: composeEventHandlers4(props.onCloseAutoFocus, (event) => {
        hasInteractedOutsideRef.current || requestAnimationFrame(() => {
          const activeEl = document.activeElement;
          (!activeEl || activeEl === document.body) && context4.triggerRef.current?.focus();
        }), hasInteractedOutsideRef.current = false, event.preventDefault();
      }),
      onInteractOutside: composeEventHandlers4(props.onInteractOutside, (event) => {
        const originalEvent = event.detail.originalEvent, ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true, isRightClick = originalEvent.button === 2 || ctrlLeftClick;
        (!context4.modal || isRightClick) && (hasInteractedOutsideRef.current = true);
      }),
      style: isWeb6 ? {
        ...props.style,
        "--tamagui-menu-content-transform-origin": "var(--tamagui-popper-transform-origin)",
        "--tamagui-menu-content-available-width": "var(--tamagui-popper-available-width)",
        "--tamagui-menu-content-available-height": "var(--tamagui-popper-available-height)",
        "--tamagui-menu-trigger-width": "var(--tamagui-popper-anchor-width)",
        "--tamagui-menu-trigger-height": "var(--tamagui-popper-anchor-height)"
      } : props.style
    });
  });
  MenuContent.displayName = CONTENT_NAME5;
  const DROPDOWN_MENU_SUB_NAME = "MenuSub", MenuSub = /* @__PURE__ */ __name((props) => {
    const {
      scope,
      children,
      open: openProp,
      onOpenChange,
      defaultOpen,
      ...rest
    } = props, [open2 = false, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen,
      onChange: onOpenChange
    });
    return /* @__PURE__ */ jsx41(Menu2.Sub, {
      scope: scope || DROPDOWN_MENU_CONTEXT,
      open: open2,
      onOpenChange: setOpen,
      ...rest,
      children
    });
  }, "MenuSub");
  MenuSub.displayName = DROPDOWN_MENU_SUB_NAME;
  const SUB_CONTENT_NAME = "MenuSubContent", MenuSubContent = React61.forwardRef((props, forwardedRef) => {
    const {
      scope,
      ...subContentProps
    } = props;
    return /* @__PURE__ */ jsx41(Menu2.SubContent, {
      scope: scope || DROPDOWN_MENU_CONTEXT,
      ...subContentProps,
      ref: forwardedRef,
      style: isWeb6 ? {
        ...props.style,
        "--tamagui-menu-content-transform-origin": "var(--tamagui-popper-transform-origin)",
        "--tamagui-menu-content-available-width": "var(--tamagui-popper-available-width)",
        "--tamagui-menu-content-available-height": "var(--tamagui-popper-available-height)",
        "--tamagui-menu-trigger-width": "var(--tamagui-popper-anchor-width)",
        "--tamagui-menu-trigger-height": "var(--tamagui-popper-anchor-height)"
      } : null
    });
  });
  MenuSubContent.displayName = SUB_CONTENT_NAME;
  const MenuScrollView = styled31(ScrollView2, {
    flexShrink: 1,
    alignSelf: "stretch",
    showsHorizontalScrollIndicator: false,
    showsVerticalScrollIndicator: false,
    "$platform-web": {
      maxHeight: "var(--tamagui-menu-content-available-height)"
    }
  }), Group2 = Menu2.Group, Label2 = Menu2.Label, Item = Menu2.Item, CheckboxItem = Menu2.CheckboxItem, RadioGroup2 = Menu2.RadioGroup, RadioItem = Menu2.RadioItem, ItemIndicator = Menu2.ItemIndicator, Separator2 = Menu2.Separator, Arrow = Menu2.Arrow, SubTrigger = Menu2.SubTrigger, ItemTitle = Menu2.ItemTitle, ItemSubtitle = Menu2.ItemSubtitle, ItemImage = Menu2.ItemImage, ItemIcon = Menu2.ItemIcon;
  return withStaticProperties7(MenuComp, {
    Root: MenuComp,
    Trigger: MenuTrigger,
    Portal: MenuPortal,
    Content: MenuContent,
    Group: Group2,
    Label: Label2,
    Item,
    CheckboxItem,
    RadioGroup: RadioGroup2,
    RadioItem,
    ItemIndicator,
    Separator: Separator2,
    Arrow,
    Sub: MenuSub,
    SubTrigger,
    SubContent: MenuSubContent,
    ItemTitle,
    ItemSubtitle,
    ItemImage,
    ItemIcon,
    ScrollView: MenuScrollView
  });
}
__name(createNonNativeMenu, "createNonNativeMenu");

// node_modules/@tamagui/menu/dist/esm/Menu.mjs
import { Fragment as Fragment11, jsx as jsx42 } from "react/jsx-runtime";
function createMenu(params) {
  const {
    Menu: NativeMenuRoot
  } = createNativeMenu("Menu"), NonNativeMenu = createNonNativeMenu(params), COMMON_PARAMS2 = {
    isRoot: false,
    scope: DROPDOWN_MENU_CONTEXT
  }, MenuComp = withNativeMenu({
    ...COMMON_PARAMS2,
    Component: NonNativeMenu.Root,
    NativeComponent: NativeMenuRoot,
    isRoot: true
  }), Trigger = withNativeMenu({
    ...COMMON_PARAMS2,
    Component: NonNativeMenu.Trigger,
    NativeComponent: NativeMenuRoot.Trigger
  }), Portal2 = withNativeMenu({
    ...COMMON_PARAMS2,
    Component: NonNativeMenu.Portal,
    NativeComponent: React62.Fragment
  }), Content = withNativeMenu({
    ...COMMON_PARAMS2,
    Component: NonNativeMenu.Content,
    NativeComponent: NativeMenuRoot.Content
  }), Group2 = withNativeMenu({
    ...COMMON_PARAMS2,
    Component: NonNativeMenu.Group,
    NativeComponent: NativeMenuRoot.Group
  }), Label2 = withNativeMenu({
    ...COMMON_PARAMS2,
    Component: NonNativeMenu.Label,
    NativeComponent: NativeMenuRoot.Label
  }), Item = withNativeMenu({
    ...COMMON_PARAMS2,
    Component: NonNativeMenu.Item,
    NativeComponent: NativeMenuRoot.Item
  }), ItemTitle = withNativeMenu({
    ...COMMON_PARAMS2,
    Component: NonNativeMenu.ItemTitle,
    NativeComponent: NativeMenuRoot.ItemTitle
  }), ItemSubtitle = withNativeMenu({
    ...COMMON_PARAMS2,
    Component: NonNativeMenu.ItemSubtitle,
    NativeComponent: NativeMenuRoot.ItemSubtitle
  }), ItemIcon = withNativeMenu({
    ...COMMON_PARAMS2,
    Component: NonNativeMenu.ItemIcon,
    NativeComponent: NativeMenuRoot.ItemIcon
  }), ItemImage = withNativeMenu({
    ...COMMON_PARAMS2,
    Component: NonNativeMenu.ItemImage,
    NativeComponent: NativeMenuRoot.ItemImage
  }), CheckboxItem = withNativeMenu({
    ...COMMON_PARAMS2,
    Component: NonNativeMenu.CheckboxItem,
    NativeComponent: NativeMenuRoot.CheckboxItem
  }), RadioGroup2 = withNativeMenu({
    ...COMMON_PARAMS2,
    Component: NonNativeMenu.RadioGroup,
    NativeComponent: /* @__PURE__ */ __name(({
      children
    }) => /* @__PURE__ */ jsx42(Fragment11, {
      children
    }), "NativeComponent")
  }), RadioItem = withNativeMenu({
    ...COMMON_PARAMS2,
    Component: NonNativeMenu.RadioItem,
    NativeComponent: /* @__PURE__ */ __name(({
      children
    }) => /* @__PURE__ */ jsx42(Fragment11, {
      children
    }), "NativeComponent")
  }), ItemIndicator = withNativeMenu({
    ...COMMON_PARAMS2,
    Component: NonNativeMenu.ItemIndicator,
    NativeComponent: NativeMenuRoot.ItemIndicator
  }), Separator2 = withNativeMenu({
    ...COMMON_PARAMS2,
    Component: NonNativeMenu.Separator,
    NativeComponent: NativeMenuRoot.Separator
  }), Arrow = withNativeMenu({
    ...COMMON_PARAMS2,
    Component: NonNativeMenu.Arrow,
    NativeComponent: NativeMenuRoot.Arrow
  }), Sub = withNativeMenu({
    ...COMMON_PARAMS2,
    Component: NonNativeMenu.Sub,
    NativeComponent: NativeMenuRoot.Sub
  }), SubTrigger = withNativeMenu({
    ...COMMON_PARAMS2,
    Component: NonNativeMenu.SubTrigger,
    NativeComponent: NativeMenuRoot.SubTrigger
  }), SubContent = withNativeMenu({
    ...COMMON_PARAMS2,
    Component: NonNativeMenu.SubContent,
    NativeComponent: NativeMenuRoot.SubContent
  }), NativeScrollView = /* @__PURE__ */ __name(({
    children
  }) => /* @__PURE__ */ jsx42(Fragment11, {
    children
  }), "NativeScrollView");
  NativeScrollView.displayName = "MenuScrollView";
  const ScrollView3 = isWeb7 ? NonNativeMenu.ScrollView : NativeScrollView;
  return withStaticProperties8(MenuComp, {
    Trigger,
    Portal: Portal2,
    Content,
    Group: Group2,
    Label: Label2,
    Item,
    CheckboxItem,
    RadioGroup: RadioGroup2,
    RadioItem,
    ItemIndicator,
    Separator: Separator2,
    Arrow,
    Sub,
    SubTrigger,
    SubContent,
    ItemTitle,
    ItemSubtitle,
    ItemIcon,
    ItemImage,
    ScrollView: ScrollView3
  });
}
__name(createMenu, "createMenu");

// node_modules/@tamagui/menu/dist/esm/index.mjs
var Menu = createMenu({
  Icon: MenuPredefined.MenuIcon,
  Image: MenuPredefined.MenuImage,
  Indicator: MenuPredefined.MenuIndicator,
  Item: MenuPredefined.MenuItem,
  Label: MenuPredefined.MenuLabel,
  MenuGroup: MenuPredefined.MenuGroup,
  Separator: MenuPredefined.MenuSeparator,
  SubTitle: MenuPredefined.SubTitle,
  Title: MenuPredefined.Title
});

// node_modules/@tamagui/context-menu/dist/esm/ContextMenu.mjs
import { withStaticProperties as withStaticProperties10 } from "@tamagui/web";
import React64 from "react";

// node_modules/@tamagui/context-menu/dist/esm/createNonNativeContextMenu.mjs
import { composeEventHandlers as composeEventHandlers5, composeRefs as composeRefs4, createStyledContext as createStyledContext16, isAndroid as isAndroid5, isWeb as isWeb8, Slot as Slot5, View as View18, withStaticProperties as withStaticProperties9 } from "@tamagui/web";
import React63, { useId as useId15 } from "react";
import { Fragment as Fragment12, jsx as jsx43, jsxs as jsxs8 } from "react/jsx-runtime";
var CONTEXTMENU_CONTEXT = "ContextMenuContext";
function createNonNativeContextMenu(params) {
  const {
    Menu: Menu2
  } = createBaseMenu(params), CONTEXT_MENU_NAME = "ContextMenu", {
    Provider: ContextMenuProvider,
    useStyledContext: useContextMenuContext
  } = createStyledContext16(), ContextMenuComp = /* @__PURE__ */ __name((props) => {
    const {
      scope,
      children,
      onOpenChange,
      dir,
      modal = true,
      ...rest
    } = props, [open2, setOpen] = React63.useState(false), triggerRef = React63.useRef(null), handleOpenChange = React63.useCallback((open22, event) => {
      onOpenChange?.(open22, event), !event?.defaultPrevented && setOpen(open22);
    }, [onOpenChange]);
    return /* @__PURE__ */ jsx43(ContextMenuProvider, {
      scope,
      triggerId: useId15(),
      triggerRef,
      contentId: useId15(),
      open: open2,
      onOpenChange: handleOpenChange,
      modal,
      children: /* @__PURE__ */ jsx43(Menu2, {
        scope: scope || CONTEXTMENU_CONTEXT,
        dir,
        open: open2,
        onOpenChange: handleOpenChange,
        modal,
        ...rest,
        children
      })
    });
  }, "ContextMenuComp");
  ContextMenuComp.displayName = CONTEXT_MENU_NAME;
  const TRIGGER_NAME5 = "ContextMenuTrigger", ContextMenuTrigger = View18.styleable((props, forwardedRef) => {
    const {
      scope,
      style,
      disabled = false,
      asChild,
      children,
      ...triggerProps
    } = props, context4 = useContextMenuContext(scope), pointRef = React63.useRef({
      x: 0,
      y: 0
    }), virtualRef = React63.useMemo(() => ({
      current: {
        getBoundingClientRect: /* @__PURE__ */ __name(() => {
          if (isWeb8) {
            const scrollX = window.scrollX || document.documentElement.scrollLeft, scrollY = window.scrollY || document.documentElement.scrollTop;
            return DOMRect.fromRect({
              width: 0,
              height: 0,
              x: pointRef.current.x - scrollX,
              y: pointRef.current.y - scrollY
            });
          }
          return {
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            ...pointRef.current
          };
        }, "getBoundingClientRect"),
        ...!isWeb8 && {
          measure: /* @__PURE__ */ __name((c) => c(pointRef.current.x, pointRef.current.y, 0, 0), "measure"),
          measureInWindow: /* @__PURE__ */ __name((c) => c(pointRef.current.x, pointRef.current.y, 0, 0), "measureInWindow")
        }
      }
    }), [pointRef.current.x, pointRef.current.y]), longPressTimerRef = React63.useRef(0), clearLongPress = React63.useCallback(() => window.clearTimeout(longPressTimerRef.current), []), createOpenChangeEvent = /* @__PURE__ */ __name(() => {
      let defaultPrevented = false;
      return {
        get defaultPrevented() {
          return defaultPrevented;
        },
        preventDefault() {
          defaultPrevented = true;
        }
      };
    }, "createOpenChangeEvent"), handleOpen = /* @__PURE__ */ __name((event) => {
      isWeb8 && (event instanceof MouseEvent || event instanceof PointerEvent) ? pointRef.current = {
        x: event.clientX,
        y: event.clientY
      } : pointRef.current = {
        x: event.nativeEvent.pageX,
        y: event.nativeEvent.pageY
      };
      const openChangeEvent = createOpenChangeEvent();
      return context4.onOpenChange(true, openChangeEvent), openChangeEvent;
    }, "handleOpen");
    React63.useEffect(() => clearLongPress, [clearLongPress]), React63.useEffect(() => {
      disabled && clearLongPress();
    }, [disabled, clearLongPress]);
    const Comp = asChild ? Slot5 : View18;
    return /* @__PURE__ */ jsxs8(Fragment12, {
      children: [/* @__PURE__ */ jsx43(Menu2.Anchor, {
        scope: scope || CONTEXTMENU_CONTEXT,
        virtualRef
      }), /* @__PURE__ */ jsx43(Comp, {
        render: "span",
        componentName: TRIGGER_NAME5,
        id: context4.triggerId,
        "data-state": context4.open ? "open" : "closed",
        "data-disabled": disabled ? "" : void 0,
        ...triggerProps,
        ref: composeRefs4(forwardedRef, context4.triggerRef),
        style: isWeb8 ? {
          WebkitTouchCallout: "none",
          ...style
        } : null,
        ...isWeb8 && {
          onContextMenu: disabled ? props.onContextMenu : composeEventHandlers5(props.onContextMenu, (event) => {
            clearLongPress(), handleOpen(event).defaultPrevented || event.preventDefault();
          }),
          onPointerDown: disabled ? props.onPointerDown : composeEventHandlers5(props.onPointerDown, (event) => {
            event.pointerType !== "mouse" && (clearLongPress(), longPressTimerRef.current = window.setTimeout(() => handleOpen(event), 700));
          }),
          onPointerMove: disabled ? props.onPointerMove : composeEventHandlers5(props.onPointerMove, (event) => {
            event.pointerType !== "mouse" && clearLongPress();
          }),
          onPointerCancel: disabled ? props.onPointerCancel : composeEventHandlers5(props.onPointerCancel, (event) => {
            event.pointerType !== "mouse" && clearLongPress();
          }),
          onPointerUp: disabled ? props.onPointerUp : composeEventHandlers5(props.onPointerUp, (event) => {
            event.pointerType !== "mouse" && clearLongPress();
          })
        },
        ...!isWeb8 && {
          onLongPress: disabled ? props.onLongPress : composeEventHandlers5(props.onLongPress, (event) => {
            clearLongPress(), handleOpen(event).defaultPrevented || event.preventDefault();
          })
        },
        children
      })]
    });
  });
  ContextMenuTrigger.displayName = TRIGGER_NAME5;
  const PORTAL_NAME = "ContextMenuPortal", ContextMenuPortal = /* @__PURE__ */ __name((props) => {
    const {
      scope,
      children,
      ...portalProps
    } = props, context4 = isAndroid5 ? useContextMenuContext(scope) : null, content = isAndroid5 ? /* @__PURE__ */ jsx43(ContextMenuProvider, {
      ...context4,
      children
    }) : children;
    return /* @__PURE__ */ jsx43(Menu2.Portal, {
      scope: scope || CONTEXTMENU_CONTEXT,
      ...portalProps,
      children: content
    });
  }, "ContextMenuPortal");
  ContextMenuPortal.displayName = PORTAL_NAME;
  const CONTENT_NAME5 = "ContextMenuContent", ContextMenuContent = React63.forwardRef((props, forwardedRef) => {
    const {
      scope,
      ...contentProps
    } = props, context4 = useContextMenuContext(scope), hasInteractedOutsideRef = React63.useRef(false);
    return /* @__PURE__ */ jsx43(Menu2.Content, {
      id: context4.contentId,
      "aria-labelledby": context4.triggerId,
      scope: scope || CONTEXTMENU_CONTEXT,
      ...contentProps,
      ref: forwardedRef,
      onCloseAutoFocus: composeEventHandlers5(props.onCloseAutoFocus, (event) => {
        hasInteractedOutsideRef.current || context4.triggerRef.current?.focus(), hasInteractedOutsideRef.current = false, event.preventDefault();
      }),
      onInteractOutside: composeEventHandlers5(props.onInteractOutside, (event) => {
        const originalEvent = event.detail.originalEvent, ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true, isRightClick = originalEvent.button === 2 || ctrlLeftClick;
        (!context4.modal || isRightClick) && (hasInteractedOutsideRef.current = true);
      })
    });
  });
  ContextMenuContent.displayName = CONTENT_NAME5;
  const ITEM_NAME4 = "ContextMenuItem", ContextMenuItem = React63.forwardRef((props, forwardedRef) => {
    const {
      scope,
      ...itemProps
    } = props;
    return /* @__PURE__ */ jsx43(Menu2.Item, {
      componentName: ITEM_NAME4,
      scope: scope || CONTEXTMENU_CONTEXT,
      ...itemProps,
      ref: forwardedRef
    });
  });
  ContextMenuItem.displayName = ITEM_NAME4;
  const CHECKBOX_ITEM_NAME = "ContextMenuCheckboxItem", ContextMenuCheckboxItem = React63.forwardRef((props, forwardedRef) => {
    const {
      scope,
      ...checkboxItemProps
    } = props;
    return /* @__PURE__ */ jsx43(Menu2.CheckboxItem, {
      componentName: CHECKBOX_ITEM_NAME,
      scope: scope || CONTEXTMENU_CONTEXT,
      ...checkboxItemProps,
      ref: forwardedRef
    });
  });
  ContextMenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME;
  const RADIO_GROUP_NAME2 = "ContextMenuRadioGroup", ContextMenuRadioGroup = React63.forwardRef((props, forwardedRef) => {
    const {
      scope,
      ...radioGroupProps
    } = props;
    return /* @__PURE__ */ jsx43(Menu2.RadioGroup, {
      scope: scope || CONTEXTMENU_CONTEXT,
      ...radioGroupProps,
      ref: forwardedRef
    });
  });
  ContextMenuRadioGroup.displayName = RADIO_GROUP_NAME2;
  const RADIO_ITEM_NAME = "ContextMenuRadioItem", ContextMenuRadioItem = React63.forwardRef((props, forwardedRef) => {
    const {
      scope,
      ...radioItemProps
    } = props;
    return /* @__PURE__ */ jsx43(Menu2.RadioItem, {
      componentName: RADIO_ITEM_NAME,
      scope: scope || CONTEXTMENU_CONTEXT,
      ...radioItemProps,
      ref: forwardedRef
    });
  });
  ContextMenuRadioItem.displayName = RADIO_ITEM_NAME;
  const INDICATOR_NAME3 = "ContextMenuItemIndicator", ContextMenuItemIndicator = Menu2.ItemIndicator.styleable((props, forwardedRef) => {
    const {
      scope,
      ...itemIndicatorProps
    } = props;
    return /* @__PURE__ */ jsx43(Menu2.ItemIndicator, {
      componentName: INDICATOR_NAME3,
      scope: scope || CONTEXTMENU_CONTEXT,
      ...itemIndicatorProps,
      ref: forwardedRef
    });
  });
  ContextMenuItemIndicator.displayName = INDICATOR_NAME3;
  const SUB_NAME = "ContextMenuSub", ContextMenuSub = /* @__PURE__ */ __name((props) => {
    const {
      scope,
      children,
      onOpenChange,
      open: openProp,
      defaultOpen,
      ...rest
    } = props, [open2, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen,
      onChange: onOpenChange
    });
    return /* @__PURE__ */ jsx43(Menu2.Sub, {
      scope: scope || CONTEXTMENU_CONTEXT,
      open: open2,
      onOpenChange: setOpen,
      ...rest,
      children
    });
  }, "ContextMenuSub");
  ContextMenuSub.displayName = SUB_NAME;
  const SUB_TRIGGER_NAME = "ContextMenuSubTrigger", ContextMenuSubTrigger = View18.styleable((props, forwardedRef) => {
    const {
      scope,
      ...subTriggerProps
    } = props;
    return /* @__PURE__ */ jsx43(Menu2.SubTrigger, {
      componentName: SUB_TRIGGER_NAME,
      scope: scope || CONTEXTMENU_CONTEXT,
      ...subTriggerProps,
      ref: forwardedRef
    });
  });
  ContextMenuSubTrigger.displayName = SUB_TRIGGER_NAME;
  const SUB_CONTENT_NAME = "ContextMenuSubContent", ContextMenuSubContent = React63.forwardRef((props, forwardedRef) => {
    const {
      scope,
      ...subContentProps
    } = props;
    return /* @__PURE__ */ jsx43(Menu2.SubContent, {
      scope: scope || CONTEXTMENU_CONTEXT,
      ...subContentProps,
      ref: forwardedRef,
      style: isWeb8 ? {
        ...props.style,
        "--tamagui-context-menu-content-transform-origin": "var(--tamagui-popper-transform-origin)",
        "--tamagui-context-menu-content-available-width": "var(--tamagui-popper-available-width)",
        "--tamagui-context-menu-content-available-height": "var(--tamagui-popper-available-height)",
        "--tamagui-context-menu-trigger-width": "var(--tamagui-popper-anchor-width)",
        "--tamagui-context-menu-trigger-height": "var(--tamagui-popper-anchor-height)"
      } : null
    });
  });
  ContextMenuSubContent.displayName = SUB_CONTENT_NAME;
  const ARROW_NAME = "ContextMenuArrow", ContextMenuArrow = React63.forwardRef((props, forwardedRef) => {
    const {
      scope,
      ...arrowProps
    } = props;
    return /* @__PURE__ */ jsx43(Menu2.Arrow, {
      componentName: ARROW_NAME,
      scope: scope || CONTEXTMENU_CONTEXT,
      ...arrowProps,
      ref: forwardedRef
    });
  });
  ContextMenuArrow.displayName = ARROW_NAME;
  const ContextMenuGroup = Menu2.Group, ContextMenuLabel = Menu2.Label, ContextMenuSeparator = Menu2.Separator, ContextMenuItemTitle = Menu2.ItemTitle, ContextMenuItemSubTitle = Menu2.ItemSubtitle, ContextMenuItemImage = Menu2.ItemImage, ContextMenuItemIcon = Menu2.ItemIcon;
  return withStaticProperties9(ContextMenuComp, {
    Root: ContextMenuComp,
    Trigger: ContextMenuTrigger,
    Portal: ContextMenuPortal,
    Content: ContextMenuContent,
    Group: ContextMenuGroup,
    Label: ContextMenuLabel,
    Item: ContextMenuItem,
    CheckboxItem: ContextMenuCheckboxItem,
    RadioGroup: ContextMenuRadioGroup,
    RadioItem: ContextMenuRadioItem,
    ItemIndicator: ContextMenuItemIndicator,
    Separator: ContextMenuSeparator,
    Arrow: ContextMenuArrow,
    Sub: ContextMenuSub,
    SubTrigger: ContextMenuSubTrigger,
    SubContent: ContextMenuSubContent,
    ItemTitle: ContextMenuItemTitle,
    ItemSubtitle: ContextMenuItemSubTitle,
    ItemIcon: ContextMenuItemIcon,
    ItemImage: ContextMenuItemImage,
    Preview: /* @__PURE__ */ __name(() => null, "Preview")
  });
}
__name(createNonNativeContextMenu, "createNonNativeContextMenu");

// node_modules/@tamagui/context-menu/dist/esm/ContextMenu.mjs
var COMMON_PARAMS = {
  isRoot: false,
  scope: CONTEXTMENU_CONTEXT
};
function createContextMenu(param) {
  const {
    Menu: NativeMenuRoot
  } = createNativeMenu("ContextMenu"), NonNativeContextMenu = createNonNativeContextMenu(param), ContextMenuComp = withNativeMenu({
    ...COMMON_PARAMS,
    Component: NonNativeContextMenu.Root,
    NativeComponent: NativeMenuRoot,
    isRoot: true
  }), Trigger = withNativeMenu({
    ...COMMON_PARAMS,
    Component: NonNativeContextMenu.Trigger,
    NativeComponent: NativeMenuRoot.Trigger
  }), Portal2 = withNativeMenu({
    ...COMMON_PARAMS,
    Component: NonNativeContextMenu.Portal,
    NativeComponent: React64.Fragment
  }), Content = withNativeMenu({
    ...COMMON_PARAMS,
    Component: NonNativeContextMenu.Content,
    NativeComponent: NativeMenuRoot.Content
  }), Preview = withNativeMenu({
    ...COMMON_PARAMS,
    Component: NonNativeContextMenu.Preview,
    NativeComponent: NativeMenuRoot.Preview
  }), Group2 = withNativeMenu({
    ...COMMON_PARAMS,
    Component: NonNativeContextMenu.Group,
    NativeComponent: NativeMenuRoot.Group
  }), Label2 = withNativeMenu({
    ...COMMON_PARAMS,
    Component: NonNativeContextMenu.Label,
    NativeComponent: NativeMenuRoot.Label
  }), Item = withNativeMenu({
    ...COMMON_PARAMS,
    Component: NonNativeContextMenu.Item,
    NativeComponent: NativeMenuRoot.Item
  }), ItemTitle = withNativeMenu({
    ...COMMON_PARAMS,
    Component: NonNativeContextMenu.ItemTitle,
    NativeComponent: NativeMenuRoot.ItemTitle
  }), ItemSubtitle = withNativeMenu({
    ...COMMON_PARAMS,
    Component: NonNativeContextMenu.ItemSubtitle,
    NativeComponent: NativeMenuRoot.ItemSubtitle
  }), ItemIcon = withNativeMenu({
    ...COMMON_PARAMS,
    Component: NonNativeContextMenu.ItemIcon,
    NativeComponent: NativeMenuRoot.ItemIcon
  }), ItemImage = withNativeMenu({
    ...COMMON_PARAMS,
    Component: NonNativeContextMenu.ItemImage,
    NativeComponent: NativeMenuRoot.ItemImage
  }), CheckboxItem = withNativeMenu({
    ...COMMON_PARAMS,
    Component: NonNativeContextMenu.CheckboxItem,
    NativeComponent: NativeMenuRoot.CheckboxItem
  }), RadioGroup2 = withNativeMenu({
    ...COMMON_PARAMS,
    Component: NonNativeContextMenu.RadioGroup,
    NativeComponent: /* @__PURE__ */ __name(() => null, "NativeComponent")
  }), RadioItem = withNativeMenu({
    ...COMMON_PARAMS,
    Component: NonNativeContextMenu.RadioItem,
    NativeComponent: /* @__PURE__ */ __name(({
      children
    }) => children, "NativeComponent")
  }), ItemIndicator = withNativeMenu({
    ...COMMON_PARAMS,
    Component: NonNativeContextMenu.ItemIndicator,
    NativeComponent: NativeMenuRoot.ItemIndicator
  }), Separator2 = withNativeMenu({
    ...COMMON_PARAMS,
    Component: NonNativeContextMenu.Separator,
    NativeComponent: NativeMenuRoot.Separator
  }), Arrow = withNativeMenu({
    ...COMMON_PARAMS,
    Component: NonNativeContextMenu.Arrow,
    NativeComponent: NativeMenuRoot.Arrow
  }), Sub = withNativeMenu({
    ...COMMON_PARAMS,
    Component: NonNativeContextMenu.Sub,
    NativeComponent: NativeMenuRoot.Sub
  }), SubTrigger = withNativeMenu({
    ...COMMON_PARAMS,
    Component: NonNativeContextMenu.SubTrigger,
    NativeComponent: NativeMenuRoot.SubTrigger
  }), SubContent = withNativeMenu({
    ...COMMON_PARAMS,
    Component: NonNativeContextMenu.SubContent,
    NativeComponent: NativeMenuRoot.SubContent
  });
  return withStaticProperties10(ContextMenuComp, {
    Trigger,
    Portal: Portal2,
    Content,
    Group: Group2,
    Label: Label2,
    Item,
    CheckboxItem,
    RadioGroup: RadioGroup2,
    RadioItem,
    ItemIndicator,
    Separator: Separator2,
    Arrow,
    Sub,
    // cast to React.FC to avoid TS error
    SubTrigger,
    SubContent,
    ItemTitle,
    ItemSubtitle,
    // cast to React.FC to avoid TS error
    ItemIcon,
    ItemImage,
    Preview
  });
}
__name(createContextMenu, "createContextMenu");

// node_modules/@tamagui/context-menu/dist/esm/index.mjs
var ContextMenu = createContextMenu({
  Icon: MenuPredefined.MenuIcon,
  Image: MenuPredefined.MenuImage,
  Indicator: MenuPredefined.MenuIndicator,
  Item: MenuPredefined.MenuItem,
  Label: MenuPredefined.MenuLabel,
  MenuGroup: MenuPredefined.MenuGroup,
  Separator: MenuPredefined.MenuSeparator,
  SubTitle: MenuPredefined.SubTitle,
  Title: MenuPredefined.Title
});

// node_modules/@tamagui/popover/dist/esm/Popover.mjs
import { createStyledContext as createStyledContext17, useCreateShallowSetState, useEvent as useEvent5, useGet as useGet2, View as View19 } from "@tamagui/core";
import * as React66 from "react";

// node_modules/@tamagui/popover/dist/esm/useFloatingContext.mjs
import React65 from "react";
var useFloatingContext = /* @__PURE__ */ __name(({
  open: open2,
  setOpen,
  disable,
  disableFocus,
  hoverable,
  role: roleProp = "dialog",
  focus: focusProp,
  groupId,
  delay: delayProp,
  restMs: restMsProp
}) => {
  "use no memo";
  const openRef = React65.useRef(open2);
  openRef.current = open2;
  const hoverableRef = React65.useRef(hoverable);
  hoverableRef.current = hoverable;
  const disableRef = React65.useRef(disable);
  disableRef.current = disable;
  const disableFocusRef = React65.useRef(disableFocus);
  disableFocusRef.current = disableFocus;
  const roleRef = React65.useRef(roleProp);
  roleRef.current = roleProp;
  const focusRef = React65.useRef(focusProp);
  focusRef.current = focusProp;
  const groupIdRef = React65.useRef(groupId);
  groupIdRef.current = groupId;
  const delayRef = React65.useRef(delayProp);
  delayRef.current = delayProp;
  const restMsRef = React65.useRef(restMsProp);
  restMsRef.current = restMsProp;
  const events = React65.useMemo(() => createFloatingEvents(), []), triggerElements = React65.useMemo(() => new PopupTriggerMap(), []);
  return React65.useEffect(() => {
    events.emit("openchange", {
      open: open2
    });
  }, [open2, events]), React65.useCallback((props) => {
    const onTriggerRef = React65.useRef(false), restTimerRef = React65.useRef(void 0), graceRef = React65.useRef(void 0), pendingCloseRef = React65.useRef(false), isOverFloatingRef = React65.useRef(false), handleCloseActiveRef = React65.useRef(false);
    React65.useEffect(() => () => {
      clearTimeout(restTimerRef.current), clearTimeout(graceRef.current);
    }, []);
    const onOpenChange = /* @__PURE__ */ __name((val, event) => {
      if (val && event?.type === "mouseenter") return;
      if (!val && onTriggerRef.current && (event?.type === "mousemove" || event?.type === "mouseleave")) {
        pendingCloseRef.current = true;
        return;
      }
      const type = event?.type === "mousemove" || event?.type === "mouseenter" || event?.type === "mouseleave" ? "hover" : "press";
      setOpen(val, type);
    }, "onOpenChange"), floating = useFloating({
      ...props,
      open: openRef.current
    }), currentHoverable = hoverableRef.current, dataRef = React65.useRef({});
    dataRef.current.placement = floating.placement;
    const floatingRefs = floating.refs, nullRef = {
      current: null
    }, interactionContext = {
      open: openRef.current,
      onOpenChange,
      refs: {
        reference: floatingRefs?.reference || nullRef,
        floating: floatingRefs?.floating || nullRef,
        domReference: floatingRefs?.reference || nullRef
      },
      elements: {
        get reference() {
          return floatingRefs?.reference?.current || null;
        },
        get floating() {
          return floatingRefs?.floating?.current || null;
        },
        get domReference() {
          return floatingRefs?.reference?.current || null;
        }
      },
      dataRef,
      events,
      triggerElements,
      handleCloseActiveRef
    }, {
      delay: groupDelay,
      currentId: groupCurrentId
    } = useDelayGroup(interactionContext, {
      id: groupIdRef.current
    }), isInActiveGroup = groupIdRef.current && groupCurrentId != null && typeof groupDelay == "object";
    let delay, restMs;
    isInActiveGroup ? (delay = groupDelay, restMs = 0) : delayRef.current !== void 0 ? (delay = delayRef.current, restMs = restMsRef.current ?? 0) : (delay = currentHoverable && typeof currentHoverable == "object" ? currentHoverable.delay ?? 0 : 0, restMs = currentHoverable && typeof currentHoverable == "object" ? currentHoverable.restMs ?? 0 : 0);
    const currentRole = roleRef.current, currentFocus = focusRef.current, {
      getReferenceProps,
      getFloatingProps: getFloatingPropsInner
    } = useInteractions([currentHoverable ? useHover(interactionContext, {
      enabled: !disableRef.current && !!currentHoverable,
      delay,
      restMs,
      handleClose: safePolygon({
        requireIntent: true,
        buffer: 1,
        __debug: typeof window < "u" && new URLSearchParams(window.location.search).get("debug") === "safePolygon"
      }),
      ...typeof currentHoverable == "object" && currentHoverable
    }) : useHover(interactionContext, {
      enabled: false
    }), useFocus(interactionContext, {
      enabled: !disableRef.current && !disableFocusRef.current,
      visibleOnly: true,
      ...currentFocus
    }), useRole(interactionContext, {
      role: currentRole
    })]), getFloatingProps = currentHoverable ? (userProps) => {
      const merged = getFloatingPropsInner(userProps), origEnter = merged.onMouseEnter, origLeave = merged.onMouseLeave;
      return {
        ...merged,
        onMouseEnter: /* @__PURE__ */ __name((e) => {
          isOverFloatingRef.current = true, origEnter?.(e);
        }, "onMouseEnter"),
        onMouseLeave: /* @__PURE__ */ __name((e) => {
          isOverFloatingRef.current = false, origLeave?.(e);
        }, "onMouseLeave")
      };
    } : getFloatingPropsInner, openDelay = typeof delay == "number" ? delay : delay?.open ?? 0, closeDelay = typeof delay == "number" ? delay : delay?.close ?? 0, setOpenWithDelay = /* @__PURE__ */ __name(() => {
      clearTimeout(restTimerRef.current), restMs && !openDelay ? restTimerRef.current = setTimeout(() => {
        setOpen(true, "hover");
      }, restMs) : openDelay ? restTimerRef.current = setTimeout(() => {
        setOpen(true, "hover");
      }, openDelay) : setOpen(true, "hover");
    }, "setOpenWithDelay");
    return {
      ...floating,
      open: openRef.current,
      triggerElements,
      getReferenceProps,
      getFloatingProps,
      onHoverReference: currentHoverable ? (_event) => {
        clearTimeout(graceRef.current), onTriggerRef.current = true, pendingCloseRef.current = false, clearTimeout(restTimerRef.current), !openRef.current && setOpenWithDelay();
      } : void 0,
      onLeaveReference: currentHoverable ? () => {
        clearTimeout(restTimerRef.current), clearTimeout(graceRef.current), graceRef.current = setTimeout(() => {
          if (onTriggerRef.current = false, pendingCloseRef.current) {
            pendingCloseRef.current = false, setOpen(false, "hover");
            return;
          }
          openRef.current && (graceRef.current = setTimeout(() => {
            openRef.current && !isOverFloatingRef.current && !handleCloseActiveRef.current && setOpen(false, "hover");
          }, Math.max(250, closeDelay)));
        }, 40);
      } : void 0
    };
  }, [setOpen]);
}, "useFloatingContext");

// node_modules/@tamagui/popover/dist/esm/Popover.mjs
import { Fragment as Fragment13, jsx as jsx44, jsxs as jsxs9 } from "react/jsx-runtime";
var needsRepropagation2 = needsPortalRepropagation();
var openPopovers = /* @__PURE__ */ new Set();
var hasOpenPopovers = /* @__PURE__ */ __name(() => openPopovers.size > 0, "hasOpenPopovers");
var closeOpenPopovers = /* @__PURE__ */ __name(() => openPopovers.size === 0 ? false : (openPopovers.forEach((setOpen) => setOpen(false)), true), "closeOpenPopovers");
var closeLastOpenedPopover = /* @__PURE__ */ __name(() => {
  if (openPopovers.size === 0) return false;
  const last = Array.from(openPopovers).pop();
  return last ? (last(false), true) : false;
}, "closeLastOpenedPopover");
var PopoverContext = createStyledContext17(
  // since we always provide this we can avoid setting here
  {},
  "Popover__"
);
var PopoverZIndexContext = React66.createContext(void 0);
var PopoverTriggerContext = createStyledContext17({}, "PopoverTrigger__");
var usePopoverContext = PopoverContext.useStyledContext;
var usePopoverTriggerContext = PopoverTriggerContext.useStyledContext;
function usePopoverOpen(scope) {
  return usePopoverContext(scope).open;
}
__name(usePopoverOpen, "usePopoverOpen");
function usePopoverTriggerSetup(open2) {
  const triggerStateSettersRef = React66.useRef(/* @__PURE__ */ new Map()), activeTriggerIdRef = React66.useRef(null), setActiveTrigger = useEvent5((id) => {
    const prevId = activeTriggerIdRef.current;
    prevId !== id && (prevId && triggerStateSettersRef.current.get(prevId)?.(false), activeTriggerIdRef.current = id, id && open2 && triggerStateSettersRef.current.get(id)?.(true));
  }), registerTrigger = useEvent5((id, setOpenState) => {
    triggerStateSettersRef.current.set(id, setOpenState), setOpenState(activeTriggerIdRef.current === id && open2);
  }), unregisterTrigger = useEvent5((id) => {
    triggerStateSettersRef.current.delete(id), activeTriggerIdRef.current === id && (activeTriggerIdRef.current = null);
  });
  return React66.useEffect(() => {
    if (!open2) {
      setActiveTrigger(null);
      return;
    }
    const activeId = activeTriggerIdRef.current;
    activeId && triggerStateSettersRef.current.get(activeId)?.(true);
  }, [open2, setActiveTrigger]), {
    setActiveTrigger,
    registerTrigger,
    unregisterTrigger
  };
}
__name(usePopoverTriggerSetup, "usePopoverTriggerSetup");
var PopoverContextProvider = React66.memo(({
  scope,
  children,
  open: open2,
  onOpenChange,
  onOpenToggle,
  triggerRef,
  id = "",
  contentId,
  hasCustomAnchor = false,
  onCustomAnchorAdd = voidFn,
  onCustomAnchorRemove = voidFn,
  anchorTo,
  adaptScope,
  breakpointActive,
  keepChildrenMounted,
  disableDismissable,
  hoverable
}) => {
  const [branches] = React66.useState(() => /* @__PURE__ */ new Set()), {
    setActiveTrigger,
    registerTrigger,
    unregisterTrigger
  } = usePopoverTriggerSetup(open2);
  return /* @__PURE__ */ jsx44(PopoverContext.Provider, {
    scope,
    popoverScope: scope,
    adaptScope,
    id,
    contentId,
    triggerRef,
    open: open2,
    onOpenChange,
    onOpenToggle,
    hasCustomAnchor,
    onCustomAnchorAdd,
    onCustomAnchorRemove,
    anchorTo,
    branches,
    breakpointActive,
    keepChildrenMounted,
    disableDismissable,
    hoverable,
    children: /* @__PURE__ */ jsx44(PopoverTriggerContext.Provider, {
      scope,
      triggerRef,
      hasCustomAnchor,
      anchorTo,
      branches,
      onOpenToggle,
      setActiveTrigger,
      registerTrigger,
      unregisterTrigger,
      children
    })
  });
});
var voidFn = /* @__PURE__ */ __name(() => {
}, "voidFn");
var PopoverAnchor = React66.memo(React66.forwardRef(function(props, forwardedRef) {
  const {
    scope,
    ...rest
  } = props, context4 = usePopoverContext(scope), {
    onCustomAnchorAdd,
    onCustomAnchorRemove
  } = context4 || {};
  return React66.useEffect(() => (onCustomAnchorAdd(), () => onCustomAnchorRemove()), [onCustomAnchorAdd, onCustomAnchorRemove]), /* @__PURE__ */ jsx44(PopperAnchor, {
    scope,
    ...rest,
    ref: forwardedRef
  });
}));
var PopoverTrigger = React66.memo(React66.forwardRef(function(props, forwardedRef) {
  const {
    scope,
    disablePressTrigger,
    ...rest
  } = props, triggerContext = usePopoverTriggerContext(scope), triggerId = React66.useId(), [open2, setOpen] = React66.useState(false), anchorTo = triggerContext.anchorTo, triggerElRef = React66.useRef(null), composedTriggerRef = useComposedRefs(forwardedRef, triggerElRef), {
    registerTrigger,
    unregisterTrigger
  } = triggerContext;
  if (React66.useEffect(() => (registerTrigger(triggerId, setOpen), () => {
    unregisterTrigger(triggerId);
  }), [registerTrigger, unregisterTrigger, triggerId]), !rest.children) return null;
  const activateSelf = /* @__PURE__ */ __name(() => {
    triggerContext.setActiveTrigger(triggerId);
    const el = triggerElRef.current;
    el && (triggerContext.triggerRef.current = el);
  }, "activateSelf"), trigger = /* @__PURE__ */ jsx44(View19, {
    "aria-expanded": open2,
    "data-state": getState5(open2),
    ...rest,
    ref: composedTriggerRef,
    onPress: composeEventHandlers(rest.onPress, () => {
      disablePressTrigger || (triggerContext.setActiveTrigger(open2 ? null : triggerId), triggerContext.onOpenToggle());
    }),
    onMouseEnter: composeEventHandlers(rest.onMouseEnter, activateSelf),
    onPressIn: composeEventHandlers(rest.onPressIn, activateSelf),
    onFocus: composeEventHandlers(rest.onFocus, activateSelf)
  }), virtualRef = React66.useMemo(() => anchorTo ? {
    current: {
      getBoundingClientRect: /* @__PURE__ */ __name(() => isWeb ? DOMRect.fromRect(anchorTo) : anchorTo, "getBoundingClientRect"),
      ...!isWeb && {
        measure: /* @__PURE__ */ __name((c) => c(anchorTo?.x, anchorTo?.y, anchorTo?.width, anchorTo?.height), "measure"),
        measureInWindow: /* @__PURE__ */ __name((c) => c(anchorTo?.x, anchorTo?.y, anchorTo?.width, anchorTo?.height), "measureInWindow")
      }
    }
  } : null, [triggerContext.anchorTo, anchorTo?.x, anchorTo?.y, anchorTo?.height, anchorTo?.width]), wrappedTrigger = isWeb ? /* @__PURE__ */ jsx44(DismissableBranch, {
    branches: triggerContext.branches,
    children: trigger
  }) : trigger;
  return triggerContext.hasCustomAnchor ? wrappedTrigger : /* @__PURE__ */ jsx44(PopperAnchor, {
    ...virtualRef && {
      virtualRef
    },
    scope,
    asChild: true,
    children: wrappedTrigger
  });
}));
var PopoverContent = PopperContentFrame.styleable(function(props, forwardedRef) {
  const {
    trapFocus,
    enableRemoveScroll = false,
    zIndex: zIndexProp,
    scope,
    ...contentImplProps
  } = props, context4 = usePopoverContext(scope), zIndexFromContext = React66.useContext(PopoverZIndexContext), zIndex = zIndexProp ?? zIndexFromContext, open2 = usePopoverOpen(scope), contentRef = React66.useRef(null), composedRefs = useComposedRefs(forwardedRef, contentRef), isRightClickOutsideRef = React66.useRef(false), [isFullyHidden, setIsFullyHidden] = React66.useState(!open2);
  return useIsomorphicLayoutEffect(() => {
    open2 && isFullyHidden && setIsFullyHidden(false);
  }, [open2, isFullyHidden]), !context4.keepChildrenMounted && isFullyHidden && !open2 ? null : /* @__PURE__ */ jsx44(PopoverPortal, {
    passThrough: context4.breakpointActive,
    context: context4,
    open: open2,
    zIndex,
    children: /* @__PURE__ */ jsx44(View19, {
      passThrough: context4.breakpointActive,
      pointerEvents: open2 ? contentImplProps.pointerEvents ?? "auto" : "none",
      children: /* @__PURE__ */ jsx44(PopoverContentImpl, {
        ...contentImplProps,
        context: context4,
        open: open2,
        enableRemoveScroll,
        ref: composedRefs,
        setIsFullyHidden,
        scope,
        trapFocus: trapFocus ?? open2,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: props.onCloseAutoFocus === false ? void 0 : composeEventHandlers(props.onCloseAutoFocus, (event) => {
          event.defaultPrevented || (event.preventDefault(), isRightClickOutsideRef.current || context4.triggerRef.current?.focus());
        }),
        onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
          const originalEvent = event.detail.originalEvent, ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true, isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          isRightClickOutsideRef.current = isRightClick;
        }, {
          checkDefaultPrevented: false
        }),
        onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => event.preventDefault(), {
          checkDefaultPrevented: false
        })
      })
    })
  });
});
var useParentContexts = /* @__PURE__ */ __name((scope) => {
  const context4 = usePopoverContext(scope), triggerContext = usePopoverTriggerContext(scope), popperContext = usePopperContext(scope), adaptContext = useAdaptContext(context4.adaptScope);
  return {
    popperContext,
    adaptContext,
    context: context4,
    triggerContext
  };
}, "useParentContexts");
function RepropagateParentContexts({
  adaptContext,
  children,
  context: context4,
  triggerContext,
  popperContext
}) {
  return /* @__PURE__ */ jsx44(PopperProvider, {
    scope: context4.popoverScope,
    ...popperContext,
    children: /* @__PURE__ */ jsx44(PopoverContext.Provider, {
      scope: context4.popoverScope,
      ...context4,
      children: /* @__PURE__ */ jsx44(PopoverTriggerContext.Provider, {
        scope: context4.popoverScope,
        ...triggerContext,
        children: /* @__PURE__ */ jsx44(ProvideAdaptContext, {
          ...adaptContext,
          children
        })
      })
    })
  });
}
__name(RepropagateParentContexts, "RepropagateParentContexts");
var PortalAdaptSafe = /* @__PURE__ */ __name(({
  children,
  context: context4
}) => {
  "use no memo";
  if (needsRepropagation2) {
    const parentContexts = useParentContexts(context4.popoverScope);
    return /* @__PURE__ */ jsx44(AdaptPortalContents, {
      scope: context4.adaptScope,
      children: /* @__PURE__ */ jsx44(RepropagateParentContexts, {
        ...parentContexts,
        children
      })
    });
  }
  return /* @__PURE__ */ jsx44(AdaptPortalContents, {
    scope: context4.adaptScope,
    children
  });
}, "PortalAdaptSafe");
function PopoverPortal({
  context: context4,
  open: open2,
  zIndex,
  passThrough,
  children,
  onPress
}) {
  "use no memo";
  let content = children;
  if (needsRepropagation2) {
    const parentContexts = useParentContexts(context4.popoverScope);
    content = /* @__PURE__ */ jsx44(RepropagateParentContexts, {
      ...parentContexts,
      children: content
    });
  }
  return /* @__PURE__ */ jsxs9(Portal, {
    passThrough,
    stackZIndex: true,
    zIndex,
    children: [!!open2 && !context4.breakpointActive && !context4.hoverable && /* @__PURE__ */ jsx44(YStack, {
      fullscreen: true,
      onPress: composeEventHandlers(onPress, context4.onOpenToggle)
    }), content]
  });
}
__name(PopoverPortal, "PopoverPortal");
var PopoverContentImpl = React66.forwardRef(function(props, forwardedRef) {
  const {
    trapFocus,
    scope,
    onOpenAutoFocus,
    onCloseAutoFocus,
    disableOutsidePointerEvents,
    disableFocusScope,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside,
    onInteractOutside,
    children,
    enableRemoveScroll,
    freezeContentsWhenHidden,
    setIsFullyHidden,
    lazyMount,
    forceUnmount,
    context: context4,
    open: open2,
    alwaysDisable,
    ...contentProps
  } = props, {
    keepChildrenMounted,
    disableDismissable
  } = context4, handleExitComplete = React66.useCallback(() => {
    setIsFullyHidden?.(true);
  }, [setIsFullyHidden]);
  let contents = /* @__PURE__ */ jsx44(ResetPresence, {
    disable: context4.breakpointActive,
    children
  });
  const handleDismiss = React66.useCallback(() => {
    context4.onOpenChange(false, "press");
  }, [context4]);
  return context4.breakpointActive || ((!alwaysDisable || !alwaysDisable.focus) && (contents = /* @__PURE__ */ jsx44(FocusScope, {
    loop: trapFocus !== false,
    enabled: context4.breakpointActive || disableFocusScope ? false : open2,
    trapped: context4.breakpointActive ? false : trapFocus,
    onMountAutoFocus: onOpenAutoFocus,
    onUnmountAutoFocus: onCloseAutoFocus === false ? void 0 : onCloseAutoFocus,
    children: /* @__PURE__ */ jsx44("div", {
      style: dspContentsStyle,
      children: contents
    })
  })), (!alwaysDisable || !alwaysDisable["remove-scroll"]) && (contents = /* @__PURE__ */ jsx44(RemoveScroll, {
    enabled: context4.breakpointActive ? false : enableRemoveScroll ? open2 : false,
    children: contents
  })), (!alwaysDisable || !alwaysDisable.dismiss) && (contents = /* @__PURE__ */ jsx44(Dismissable, {
    branches: context4.branches,
    forceUnmount: disableDismissable || (forceUnmount ?? !open2),
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside,
    onInteractOutside,
    onDismiss: handleDismiss,
    children: contents
  }))), /* @__PURE__ */ jsx44(Animate, {
    type: "presence",
    present: !!open2,
    keepChildrenMounted: !!keepChildrenMounted,
    onExitComplete: handleExitComplete,
    lazyMount,
    passThrough: context4.breakpointActive,
    children: /* @__PURE__ */ jsx44(PopperContent, {
      scope,
      "data-state": getState5(open2),
      id: context4.contentId,
      ref: forwardedRef,
      passThrough: context4.breakpointActive,
      ...!contentProps.unstyled && {
        size: "$true",
        backgroundColor: "$background",
        alignItems: "center"
      },
      ...contentProps,
      children: /* @__PURE__ */ jsx44(PortalAdaptSafe, {
        context: context4,
        children: contents
      })
    }, context4.contentId)
  });
});
var dspContentsStyle = {
  display: "contents"
};
var PopoverClose = React66.forwardRef(function(props, forwardedRef) {
  const {
    scope,
    ...rest
  } = props, context4 = usePopoverContext(scope);
  return /* @__PURE__ */ jsx44(YStack, {
    ...rest,
    ref: forwardedRef,
    componentName: "PopoverClose",
    onPress: composeEventHandlers(props.onPress, () => context4?.onOpenChange?.(false, "press"))
  });
});
var PopoverArrow = PopperArrowFrame.styleable(function(props, forwardedRef) {
  const {
    scope,
    ...rest
  } = props, context4 = usePopoverContext(scope);
  return useAdaptIsActive(context4.adaptScope) ? null : /* @__PURE__ */ jsx44(PopperArrow, {
    scope,
    componentName: "PopoverArrow",
    ...rest,
    ref: forwardedRef
  });
});
var PopoverScrollView = React66.forwardRef(({
  scope,
  ...props
}, ref) => {
  const context4 = usePopoverContext(scope);
  return /* @__PURE__ */ jsx44(ScrollView2, {
    ref,
    pointerEvents: context4.breakpointActive ? "none" : void 0,
    scrollEnabled: !context4.breakpointActive,
    passThrough: context4.breakpointActive,
    ...props
  });
});
var DEFAULT_SCOPE = "";
var Popover = withStaticProperties(React66.forwardRef(function({
  scope = DEFAULT_SCOPE,
  ...props
}, ref) {
  const id = React66.useId(), adaptScope = `PopoverAdapt${scope}`;
  return /* @__PURE__ */ jsx44(AdaptParent, {
    scope: adaptScope,
    portal: true,
    children: /* @__PURE__ */ jsx44(PopoverInner, {
      adaptScope,
      ref,
      id,
      scope,
      ...props
    })
  });
}), {
  Anchor: PopoverAnchor,
  Arrow: PopoverArrow,
  Trigger: PopoverTrigger,
  Content: PopoverContent,
  Close: PopoverClose,
  Adapt,
  ScrollView: PopoverScrollView,
  FocusScope: FocusScopeControllerComponent
});
var PopoverInner = React66.forwardRef(function(props, forwardedRef) {
  const {
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    scope = DEFAULT_SCOPE,
    keepChildrenMounted: keepChildrenMountedProp,
    hoverable,
    disableFocus,
    disableDismissable,
    zIndex,
    id,
    adaptScope,
    ...restProps
  } = props, triggerRef = React66.useRef(null), [hasCustomAnchor, setHasCustomAnchor] = React66.useState(false), viaRef = React66.useRef(void 0), [keepChildrenMounted] = useControllableState({
    prop: keepChildrenMountedProp,
    defaultProp: false,
    transition: keepChildrenMountedProp === "lazy"
  }), [open2, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen || false,
    onChange: /* @__PURE__ */ __name((val) => {
      onOpenChange?.(val, viaRef.current);
    }, "onChange")
  });
  React66.useEffect(() => {
    if (open2) return openPopovers.add(setOpen), () => {
      openPopovers.delete(setOpen);
    };
  }, [open2, setOpen]);
  const handleOpenChange = useEvent5((val, via) => {
    viaRef.current = via, setOpen(val);
  }), isAdapted = useAdaptIsActive(adaptScope), floatingContext = useFloatingContext({
    open: open2,
    setOpen: handleOpenChange,
    disable: isAdapted,
    hoverable,
    disableFocus
  }), [anchorTo, setAnchorToRaw] = React66.useState(), setAnchorTo = useCreateShallowSetState(setAnchorToRaw);
  React66.useImperativeHandle(forwardedRef, () => ({
    anchorTo: setAnchorTo,
    toggle: /* @__PURE__ */ __name(() => setOpen((prev) => !prev), "toggle"),
    open: /* @__PURE__ */ __name(() => setOpen(true), "open"),
    close: /* @__PURE__ */ __name(() => setOpen(false), "close"),
    setOpen
  }));
  const contentId = React66.useId(), onOpenToggle = useEvent5(() => {
    open2 && isAdapted || setOpen(!open2);
  }), onCustomAnchorAdd = React66.useCallback(() => setHasCustomAnchor(true), []), onCustomAnchorRemove = React66.useCallback(() => setHasCustomAnchor(false), []), contents = /* @__PURE__ */ jsx44(Popper, {
    open: open2,
    passThrough: isAdapted,
    scope,
    stayInFrame: true,
    ...restProps,
    children: /* @__PURE__ */ jsx44(PopoverContextProvider, {
      scope,
      open: open2,
      onOpenChange: handleOpenChange,
      onOpenToggle,
      triggerRef,
      id,
      contentId,
      hasCustomAnchor,
      onCustomAnchorAdd,
      onCustomAnchorRemove,
      anchorTo,
      adaptScope,
      breakpointActive: isAdapted,
      keepChildrenMounted,
      disableDismissable,
      hoverable,
      children: /* @__PURE__ */ jsx44(PopoverSheetController, {
        onOpenChange: setOpen,
        open: open2,
        scope,
        children
      })
    })
  });
  let result = /* @__PURE__ */ jsx44(Fragment13, {
    children: isWeb ? /* @__PURE__ */ jsx44(FloatingOverrideContext.Provider, {
      value: floatingContext,
      children: contents
    }) : contents
  });
  return zIndex !== void 0 ? /* @__PURE__ */ jsx44(PopoverZIndexContext.Provider, {
    value: zIndex,
    children: result
  }) : result;
});
function getState5(open2) {
  return open2 ? "open" : "closed";
}
__name(getState5, "getState");
var PopoverSheetController = /* @__PURE__ */ __name(({
  open: open2,
  scope,
  ...props
}) => {
  const context4 = usePopoverContext(scope), showSheet = useShowPopoverSheet(context4, open2), breakpointActive = context4?.breakpointActive, getShowSheet = useGet2(showSheet);
  return /* @__PURE__ */ jsx44(SheetController, {
    onOpenChange: /* @__PURE__ */ __name((val) => {
      getShowSheet() && props.onOpenChange?.(val);
    }, "onOpenChange"),
    open: open2,
    hidden: !breakpointActive,
    children: props.children
  });
}, "PopoverSheetController");
var useShowPopoverSheet = /* @__PURE__ */ __name((context4, open2) => {
  const isAdapted = useAdaptIsActive(context4.adaptScope);
  return open2 === false ? false : isAdapted;
}, "useShowPopoverSheet");

// node_modules/@tamagui/progress/dist/esm/Progress.mjs
import { getVariableValue as getVariableValue6, isWeb as isWeb9, styled as styled32 } from "@tamagui/core";
import { useState as useState18 } from "react";
import { jsx as jsx45 } from "react/jsx-runtime";
var PROGRESS_NAME = "Progress";
var [createProgressContext, createProgressScope] = createContextScope(PROGRESS_NAME);
var [ProgressProvider, useProgressContext] = createProgressContext(PROGRESS_NAME);
var INDICATOR_NAME2 = "ProgressIndicator";
var ProgressIndicatorFrame = styled32(YStack, {
  name: INDICATOR_NAME2,
  variants: {
    unstyled: {
      false: {
        height: "100%",
        width: "100%",
        backgroundColor: "$background"
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var ProgressIndicator = ProgressIndicatorFrame.styleable(function(props, forwardedRef) {
  const {
    __scopeProgress,
    transition: transition2,
    ...indicatorProps
  } = props, context4 = useProgressContext(INDICATOR_NAME2, __scopeProgress), progressRatio = (context4.value ?? 0) / context4.max;
  let x;
  if (isWeb9) x = `${-100 + progressRatio * 50}%`;
  else {
    const baseWidth = context4.width || 0;
    x = Math.ceil(-baseWidth * (2 - progressRatio));
  }
  return /* @__PURE__ */ jsx45(ProgressIndicatorFrame, {
    "data-state": getProgressState(context4.value, context4.max),
    "data-value": context4.value ?? void 0,
    "data-max": context4.max,
    x,
    width: "200%",
    ...!props.unstyled && {
      animateOnly: ["transform"],
      // on native, hide until we have width measurement
      ...!isWeb9 && context4.width === 0 && {
        opacity: 0
      }
    },
    ...indicatorProps,
    ref: forwardedRef,
    transition: !isWeb9 && !context4.width ? null : transition2
  });
});
function defaultGetValueLabel(value, max2) {
  return `${Math.round(value / max2 * 100)}%`;
}
__name(defaultGetValueLabel, "defaultGetValueLabel");
function getProgressState(value, maxValue) {
  return value == null ? "indeterminate" : value === maxValue ? "complete" : "loading";
}
__name(getProgressState, "getProgressState");
function isNumber(value) {
  return typeof value == "number";
}
__name(isNumber, "isNumber");
function isValidMaxNumber(max2) {
  return isNumber(max2) && !Number.isNaN(max2) && max2 > 0;
}
__name(isValidMaxNumber, "isValidMaxNumber");
function isValidValueNumber(value, max2) {
  return isNumber(value) && !Number.isNaN(value) && value <= max2 && value >= 0;
}
__name(isValidValueNumber, "isValidValueNumber");
var DEFAULT_MAX = 100;
var ProgressFrame = styled32(YStack, {
  name: "Progress",
  variants: {
    unstyled: {
      false: {
        borderRadius: 1e5,
        overflow: "hidden",
        backgroundColor: "$background"
      }
    },
    size: {
      "...size": /* @__PURE__ */ __name((val) => {
        const size4 = Math.round(getVariableValue6(getSize(val)) * 0.25);
        return {
          height: size4,
          minWidth: getVariableValue6(size4) * 20,
          width: "100%"
        };
      }, "...size")
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var Progress = withStaticProperties(ProgressFrame.styleable(function(props, forwardedRef) {
  const {
    // @ts-expect-error
    __scopeProgress,
    value: valueProp,
    max: maxProp,
    getValueLabel = defaultGetValueLabel,
    size: size4 = "$true",
    ...progressProps
  } = props, max2 = isValidMaxNumber(maxProp) ? maxProp : DEFAULT_MAX, value = isValidValueNumber(valueProp, max2) ? Math.round(valueProp) : null, valueLabel = isNumber(value) ? getValueLabel(value, max2) : void 0, [width, setWidth] = useState18(0);
  return /* @__PURE__ */ jsx45(ProgressProvider, {
    scope: __scopeProgress,
    value,
    max: max2,
    width,
    children: /* @__PURE__ */ jsx45(ProgressFrame, {
      "aria-valuemax": max2,
      "aria-valuemin": 0,
      "aria-valuenow": isNumber(value) ? value : void 0,
      "aria-valuetext": valueLabel,
      role: "progressbar",
      "data-state": getProgressState(value, max2),
      "data-value": value ?? void 0,
      "data-max": max2,
      ...progressProps.unstyled !== true && {
        size: size4
      },
      ...progressProps,
      ...!isWeb9 && {
        onLayout: /* @__PURE__ */ __name((e) => {
          const newWidth = Math.round(e.nativeEvent.layout.width);
          newWidth !== width && setWidth(newWidth), progressProps.onLayout?.(e);
        }, "onLayout")
      },
      ref: forwardedRef
    })
  });
}), {
  Indicator: ProgressIndicator
});

// node_modules/@tamagui/radio-group/dist/esm/RadioGroup.mjs
import { getVariableValue as getVariableValue7, styled as styled33 } from "@tamagui/core";
var RADIO_GROUP_ITEM_NAME = "RadioGroupItem";
var RadioGroupItemFrame = styled33(YStack, {
  name: RADIO_GROUP_ITEM_NAME,
  render: "button",
  variants: {
    unstyled: {
      false: {
        size: "$true",
        borderRadius: 1e3,
        backgroundColor: "$background",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "$borderColor",
        padding: 0,
        hoverStyle: {
          borderColor: "$borderColorHover",
          backgroundColor: "$backgroundHover"
        },
        focusStyle: {
          borderColor: "$borderColorHover",
          backgroundColor: "$backgroundHover"
        },
        focusVisibleStyle: {
          outlineStyle: "solid",
          outlineWidth: 2,
          outlineColor: "$outlineColor"
        },
        pressStyle: {
          borderColor: "$borderColorFocus",
          backgroundColor: "$backgroundFocus"
        }
      }
    },
    disabled: {
      true: {
        pointerEvents: "none",
        userSelect: "none",
        cursor: "not-allowed",
        hoverStyle: {
          borderColor: "$borderColor",
          backgroundColor: "$background"
        },
        pressStyle: {
          borderColor: "$borderColor",
          backgroundColor: "$background"
        },
        focusVisibleStyle: {
          outlineWidth: 0
        }
      }
    },
    size: {
      "...size": /* @__PURE__ */ __name((value, {
        props
      }) => {
        const size4 = Math.floor(getVariableValue7(getSize(value)) * (props.scaleSize ?? 0.5));
        return {
          width: size4,
          height: size4
        };
      }, "...size")
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var RADIO_GROUP_INDICATOR_NAME = "RadioGroupIndicator";
var RadioGroupIndicatorFrame = styled33(YStack, {
  name: RADIO_GROUP_INDICATOR_NAME,
  variants: {
    unstyled: {
      false: {
        width: "33%",
        height: "33%",
        borderRadius: 1e3,
        backgroundColor: "$color",
        pressTheme: true
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var RADIO_GROUP_NAME = "RadioGroup";
var RadioGroupFrame = styled33(YStack, {
  name: RADIO_GROUP_NAME,
  variants: {
    orientation: {
      horizontal: {
        flexDirection: "row",
        spaceDirection: "horizontal"
      },
      vertical: {
        flexDirection: "column",
        spaceDirection: "vertical"
      }
    }
  }
});

// node_modules/@tamagui/radio-group/dist/esm/createRadioGroup.mjs
import { isWeb as isWeb10, withStaticProperties as withStaticProperties11 } from "@tamagui/core";

// node_modules/@tamagui/radio-headless/dist/esm/useRadioGroup.mjs
import { useContext as useContext18, useEffect as useEffect30, useRef as useRef33, useState as useState19 } from "react";

// node_modules/@tamagui/radio-headless/dist/esm/BubbleInput.mjs
import React67 from "react";
import { jsx as jsx46 } from "react/jsx-runtime";
var BubbleInput2 = /* @__PURE__ */ __name((props) => {
  const {
    checked,
    bubbles = true,
    control,
    isHidden: isHidden2,
    accentColor,
    ...inputProps
  } = props, ref = React67.useRef(null), prevChecked = usePrevious(checked);
  return React67.useEffect(() => {
    const input = ref.current, inputProto = window.HTMLInputElement.prototype, setChecked = Object.getOwnPropertyDescriptor(inputProto, "checked").set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", {
        bubbles
      });
      setChecked.call(input, checked), input.dispatchEvent(event);
    }
  }, [prevChecked, checked, bubbles]), /* @__PURE__ */ jsx46("input", {
    type: "radio",
    defaultChecked: checked,
    ...inputProps,
    tabIndex: -1,
    ref,
    "aria-hidden": isHidden2,
    style: {
      ...isHidden2 ? {
        // ...controlSize,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      } : {
        appearance: "auto",
        accentColor
      },
      ...props.style
    }
  });
}, "BubbleInput");

// node_modules/@tamagui/radio-headless/dist/esm/utils.mjs
function getState6(checked) {
  return checked ? "checked" : "unchecked";
}
__name(getState6, "getState");

// node_modules/@tamagui/radio-headless/dist/esm/useRadioGroup.mjs
import { jsx as jsx47 } from "react/jsx-runtime";
function useRadioGroup(params) {
  const {
    value: valueProp,
    onValueChange,
    defaultValue: defaultValue2,
    required,
    disabled,
    name,
    native,
    accentColor,
    orientation,
    ref
  } = params, [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue2,
    onChange: onValueChange
  });
  return {
    providerValue: {
      value,
      onChange: setValue,
      required,
      disabled,
      name,
      native,
      accentColor
    },
    frameAttrs: {
      role: "radiogroup",
      "aria-orientation": orientation,
      "data-disabled": disabled ? "" : void 0
    },
    rovingFocusGroupAttrs: {
      orientation,
      loop: true
    }
  };
}
__name(useRadioGroup, "useRadioGroup");
var ARROW_KEYS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var useRadioGroupItem = /* @__PURE__ */ __name((params) => {
  const {
    radioGroupContext,
    value,
    labelledBy: ariaLabelledby,
    disabled: itemDisabled,
    ref: refProp,
    id,
    onPress,
    onKeyDown,
    onFocus
  } = params, {
    value: groupValue,
    disabled,
    required,
    onChange,
    name,
    native,
    accentColor
  } = useContext18(radioGroupContext), [button, setButton] = useState19(null), hasConsumerStoppedPropagationRef = useRef33(false), ref = useRef33(null), composedRefs = useComposedRefs(refProp, (node) => setButton(node), ref), isArrowKeyPressedRef = useRef33(false), isFormControl = isWeb ? button ? !!button.closest("form") : true : false, checked = groupValue === value, labelId = useLabelContext(button), labelledBy = ariaLabelledby || labelId;
  useEffect30(() => {
    if (isWeb) {
      const handleKeyDown = /* @__PURE__ */ __name((event) => {
        ARROW_KEYS.includes(event.key) && (isArrowKeyPressedRef.current = true);
      }, "handleKeyDown"), handleKeyUp = /* @__PURE__ */ __name(() => {
        isArrowKeyPressedRef.current = false;
      }, "handleKeyUp");
      return document.addEventListener("keydown", handleKeyDown), document.addEventListener("keyup", handleKeyUp), () => {
        document.removeEventListener("keydown", handleKeyDown), document.removeEventListener("keyup", handleKeyUp);
      };
    }
  }, []);
  const isDisabled2 = disabled || itemDisabled;
  return {
    providerValue: {
      checked
    },
    checked,
    isFormControl,
    bubbleInput: /* @__PURE__ */ jsx47(BubbleInput2, {
      isHidden: !native,
      control: button,
      bubbles: !hasConsumerStoppedPropagationRef.current,
      name,
      value,
      checked,
      required,
      disabled: isDisabled2,
      ...isWeb && native && {
        accentColor,
        id
      }
    }),
    native,
    frameAttrs: {
      "data-state": getState6(checked),
      "data-disabled": isDisabled2 ? "" : void 0,
      role: "radio",
      "aria-labelledby": labelledBy,
      "aria-checked": checked,
      "aria-required": required,
      disabled: isDisabled2,
      ref: composedRefs,
      ...isWeb && {
        type: "button",
        value
      },
      id,
      onPress: composeEventHandlers(onPress, (event) => {
        checked || onChange?.(value), isFormControl && (hasConsumerStoppedPropagationRef.current = event.isPropagationStopped(), hasConsumerStoppedPropagationRef.current || event.stopPropagation());
      }),
      ...isWeb && {
        onKeyDown: composeEventHandlers(onKeyDown, (event) => {
          (event.key === "Enter" || event.key === " ") && (checked || onChange?.(value));
        }),
        onFocus: composeEventHandlers(onFocus, () => {
          isArrowKeyPressedRef.current && ref.current?.click();
        })
      }
    },
    rovingFocusGroupAttrs: {
      asChild: "except-style",
      focusable: !isDisabled2,
      active: checked
    }
  };
}, "useRadioGroupItem");
function useRadioGroupItemIndicator(params) {
  const {
    radioGroupItemContext,
    disabled,
    ...rest
  } = params, {
    checked
  } = useContext18(radioGroupItemContext);
  return {
    checked,
    "data-state": getState6(checked),
    "data-disabled": disabled ? "" : void 0,
    ...rest
  };
}
__name(useRadioGroupItemIndicator, "useRadioGroupItemIndicator");

// node_modules/@tamagui/radio-group/dist/esm/createRadioGroup.mjs
import React68 from "react";
import { Fragment as Fragment14, jsx as jsx48, jsxs as jsxs10 } from "react/jsx-runtime";
var ensureContext2 = /* @__PURE__ */ __name((x) => {
  x.context || (x.context = RadioGroupContext);
}, "ensureContext");
var RadioGroupContext = React68.createContext({});
var RadioGroupItemContext = React68.createContext({
  checked: false,
  disabled: false
});
function createRadioGroup(createProps) {
  const {
    disableActiveTheme,
    Frame: Frame3 = RadioGroupFrame,
    Indicator = RadioGroupIndicatorFrame,
    Item = RadioGroupItemFrame
  } = createProps;
  ensureContext2(Frame3), ensureContext2(Indicator), ensureContext2(Item);
  const RadioGroupImp = Frame3.styleable((props, ref) => {
    const {
      value,
      defaultValue: defaultValue2,
      onValueChange,
      required = false,
      disabled = false,
      name,
      native,
      accentColor,
      orientation = "vertical",
      ...rest
    } = props, {
      providerValue,
      frameAttrs,
      rovingFocusGroupAttrs
    } = useRadioGroup({
      orientation,
      name,
      defaultValue: defaultValue2,
      value,
      onValueChange,
      required,
      disabled,
      native,
      accentColor
    });
    return /* @__PURE__ */ jsx48(RadioGroupContext.Provider, {
      value: providerValue,
      children: /* @__PURE__ */ jsx48(RovingFocusGroup, {
        ...rovingFocusGroupAttrs,
        children: /* @__PURE__ */ jsx48(RadioGroupFrame, {
          ...frameAttrs,
          ref,
          ...rest
        })
      })
    });
  }), RadioGroupItemImp = Item.styleable((props, ref) => {
    const {
      value,
      labelledBy,
      onPress,
      onKeyDown,
      disabled,
      id,
      ...rest
    } = props, {
      providerValue,
      bubbleInput,
      rovingFocusGroupAttrs,
      frameAttrs,
      isFormControl,
      native
    } = useRadioGroupItem({
      radioGroupContext: RadioGroupContext,
      value,
      id,
      labelledBy,
      disabled,
      onPress,
      onKeyDown
    });
    return /* @__PURE__ */ jsx48(RadioGroupItemContext.Provider, {
      value: providerValue,
      children: isWeb10 && native ? bubbleInput : /* @__PURE__ */ jsxs10(Fragment14, {
        children: [/* @__PURE__ */ jsx48(RovingFocusGroup.Item, {
          ...rovingFocusGroupAttrs,
          children: /* @__PURE__ */ jsx48(RadioGroupItemFrame, {
            ...frameAttrs,
            ref,
            ...rest
          })
        }), isFormControl && bubbleInput]
      })
    });
  });
  RadioGroupItemImp.displayName = "RadioGroupItem";
  const RadioIndicator = Indicator.styleable((props, forwardedRef) => {
    const {
      forceMount,
      disabled,
      ...indicatorProps
    } = props, {
      checked,
      ...useIndicatorRest
    } = useRadioGroupItemIndicator({
      radioGroupItemContext: RadioGroupItemContext,
      disabled
    });
    return forceMount || checked ? /* @__PURE__ */ jsx48(Indicator, {
      ...useIndicatorRest,
      ref: forwardedRef,
      ...indicatorProps
    }) : null;
  });
  RadioIndicator.displayName = "RadioIndicator";
  const RadioGroup2 = withStaticProperties11(RadioGroupImp, {
    Item: RadioGroupItemImp,
    Indicator: RadioIndicator
  });
  return RadioGroup2.displayName = "RadioGroup", RadioGroup2;
}
__name(createRadioGroup, "createRadioGroup");

// node_modules/@tamagui/radio-group/dist/esm/RadioGroupStyledContext.mjs
import { createStyledContext as createStyledContext18 } from "@tamagui/core";
var RadioGroupStyledContext = createStyledContext18({
  size: "$true",
  scaleIcon: 1
}, "RadioGroup");

// node_modules/@tamagui/radio-group/dist/esm/index.mjs
var RadioGroup = createRadioGroup({
  Frame: RadioGroupFrame,
  Indicator: RadioGroupIndicatorFrame,
  Item: RadioGroupItemFrame
});

// node_modules/@tamagui/select/dist/esm/Select.mjs
import { createStyledContext as createStyledContext21, getVariableValue as getVariableValue8, styled as styled37, useEvent as useEvent7, useGet as useGet3 } from "@tamagui/core";

// node_modules/@tamagui/separator/dist/esm/Separator.mjs
import { View as View20, styled as styled34 } from "@tamagui/core";
var Separator = styled34(View20, {
  name: "Separator",
  variants: {
    unstyled: {
      false: {
        borderColor: "$backgroundFocus",
        flexShrink: 0,
        borderWidth: 0,
        flex: 1,
        height: 0,
        maxHeight: 0,
        borderBottomWidth: 1,
        y: -0.5
      }
    },
    vertical: {
      true: {
        y: 0,
        x: -0.5,
        height: isWeb ? "initial" : "auto",
        // maxHeight auto WILL BE passed to style attribute, but for some reason not used?
        // almost seems like a react or browser bug, but for now `initial` works
        // also, it doesn't happen for `height`, but for consistency using the same values
        maxHeight: isWeb ? "initial" : "auto",
        width: 0,
        maxWidth: 0,
        borderBottomWidth: 0,
        borderRightWidth: 1
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});

// node_modules/@tamagui/select/dist/esm/Select.mjs
import * as React75 from "react";

// node_modules/@tamagui/select/dist/esm/context.mjs
import { createStyledContext as createStyledContext19 } from "@tamagui/core";
import { createContext as createContext15 } from "react";
import { jsx as jsx49 } from "react/jsx-runtime";
var SelectZIndexContext = createContext15(void 0);
var {
  Provider: SelectProvider,
  useStyledContext: useSelectContext
} = createStyledContext19(null, "Select");
var {
  Provider: SelectItemParentProvider,
  useStyledContext: useSelectItemParentContext
} = createStyledContext19(null, "SelectItem");
var ForwardSelectContext = /* @__PURE__ */ __name(({
  context: context4,
  itemContext,
  children
}) => getPortal().state.type === "teleport" ? children : /* @__PURE__ */ jsx49(SelectProvider, {
  isInSheet: true,
  scope: context4.scopeName,
  ...context4,
  children: /* @__PURE__ */ jsx49(SelectItemParentProvider, {
    scope: context4.scopeName,
    ...itemContext,
    children
  })
}), "ForwardSelectContext");

// node_modules/@tamagui/select/dist/esm/SelectContent.mjs
import { isWeb as isWeb11 } from "@tamagui/core";
import { useContext as useContext19 } from "react";

// node_modules/@tamagui/select/dist/esm/useSelectBreakpointActive.mjs
var useShowSelectSheet = /* @__PURE__ */ __name((context4) => {
  const breakpointActive = useAdaptIsActive(context4.adaptScope);
  return context4.open === false ? false : breakpointActive;
}, "useShowSelectSheet");

// node_modules/@tamagui/select/dist/esm/SelectContent.mjs
import { Fragment as Fragment15, jsx as jsx50 } from "react/jsx-runtime";
var SelectContent = /* @__PURE__ */ __name(({
  children,
  scope,
  ...focusScopeProps
}) => {
  const context4 = useSelectContext(scope), itemParentContext = useSelectItemParentContext(scope), zIndex = useContext19(SelectZIndexContext), showSheet = useShowSelectSheet(context4), contents = children;
  return itemParentContext.shouldRenderWebNative ? /* @__PURE__ */ jsx50(Fragment15, {
    children
  }) : showSheet ? context4.open ? /* @__PURE__ */ jsx50(Fragment15, {
    children: contents
  }) : null : /* @__PURE__ */ jsx50(Portal, {
    open: context4.open,
    zIndex,
    stackZIndex: 1e5,
    children: /* @__PURE__ */ jsx50(RemoveScroll, {
      enabled: context4.open && !context4.disablePreventBodyScroll,
      children: /* @__PURE__ */ jsx50(Dismissable, {
        asChild: true,
        forceUnmount: !context4.open,
        onDismiss: /* @__PURE__ */ __name(() => itemParentContext.setOpen(false), "onDismiss"),
        onFocusOutside: /* @__PURE__ */ __name((e) => e.preventDefault(), "onFocusOutside"),
        onPointerDownOutside: /* @__PURE__ */ __name((e) => e.preventDefault(), "onPointerDownOutside"),
        children: /* @__PURE__ */ jsx50(FocusScope, {
          ...focusScopeProps,
          enabled: !!context4.open,
          trapped: true,
          onMountAutoFocus: /* @__PURE__ */ __name((e) => {
            e.preventDefault();
          }, "onMountAutoFocus"),
          onUnmountAutoFocus: /* @__PURE__ */ __name((e) => {
            e.preventDefault();
            const trigger = context4.floatingContext?.refs?.reference?.current;
            trigger instanceof HTMLElement && trigger.focus();
          }, "onUnmountAutoFocus"),
          children: isWeb11 ? /* @__PURE__ */ jsx50("div", {
            style: {
              display: "contents"
            },
            children: contents
          }) : contents
        })
      })
    })
  });
}, "SelectContent");

// node_modules/@tamagui/select/dist/esm/SelectImpl.mjs
import { useEvent as useEvent6, useIsTouchDevice as useIsTouchDevice3 } from "@tamagui/core";
import * as React69 from "react";
import { flushSync as flushSync6 } from "react-dom";

// node_modules/@tamagui/select/dist/esm/constants.mjs
var SCROLL_ARROW_THRESHOLD = 8;
var VIEWPORT_NAME = "SelectViewport";

// node_modules/@tamagui/select/dist/esm/SelectImpl.mjs
import { jsx as jsx51 } from "react/jsx-runtime";
var SelectInlineImpl = /* @__PURE__ */ __name((props) => {
  const {
    scope,
    children,
    open: open2 = false,
    listContentRef,
    setActiveIndexFast
  } = props, selectContext = useSelectContext(scope), selectItemParentContext = useSelectItemParentContext(scope), {
    setActiveIndex,
    selectedIndex,
    activeIndexRef
  } = selectContext, {
    setOpen,
    setSelectedIndex
  } = selectItemParentContext, [scrollTop, setScrollTop] = React69.useState(0), touch = useIsTouchDevice3(), listItemsRef = React69.useRef([]), overflowRef = React69.useRef(null), upArrowRef = React69.useRef(null), downArrowRef = React69.useRef(null), allowSelectRef = React69.useRef(false), allowMouseUpRef = React69.useRef(true), selectTimeoutRef = React69.useRef(null), state5 = React69.useRef({
    isMouseOutside: false,
    isTyping: false
  }), [controlledScrolling, setControlledScrolling] = React69.useState(false), [fallback, setFallback] = React69.useState(false), [innerOffset, setInnerOffset] = React69.useState(0), [blockSelection, setBlockSelection] = React69.useState(false), floatingStyle = React69.useRef({});
  React69.useEffect(() => {
    open2 ? setActiveIndexFast(selectedIndex ?? 0) : (setScrollTop(0), setFallback(false), setActiveIndexFast(null), setControlledScrolling(false));
  }, [open2, selectedIndex, setActiveIndexFast]), useIsomorphicLayoutEffect(() => {
    if (!open2) return;
    const mouseUp = /* @__PURE__ */ __name((e) => {
      state5.current.isMouseOutside && setOpen(false);
    }, "mouseUp");
    return document.addEventListener("mouseup", mouseUp), () => {
      document.removeEventListener("mouseup", mouseUp);
    };
  }, [open2]);
  const {
    x,
    y,
    strategy,
    refs,
    update: update2,
    placement: computedPlacement
  } = useFloating({
    open: open2,
    placement: "bottom-start",
    whileElementsMounted: autoUpdate,
    // eslint-disable-next-line no-constant-condition
    middleware: [size3({
      apply({
        rects: {
          reference: {
            width
          }
        }
      }) {
        Object.assign(floatingStyle.current, {
          minWidth: width + 8
        }), refs.floating.current && Object.assign(refs.floating.current.style, floatingStyle.current);
      }
    }), inner({
      listRef: listItemsRef,
      overflowRef,
      index: selectedIndex,
      offset: innerOffset,
      onFallbackChange: setFallback,
      padding: 10,
      minItemsVisible: touch ? 10 : 4,
      referenceOverflowThreshold: 20
    }), offset3({
      crossAxis: -5
    })]
  }), floatingRef = refs.floating, showUpArrow = open2 && scrollTop > SCROLL_ARROW_THRESHOLD, showDownArrow = open2 && floatingRef.current && scrollTop < floatingRef.current.scrollHeight - floatingRef.current.clientHeight - SCROLL_ARROW_THRESHOLD, isScrollable = showDownArrow || showUpArrow;
  useIsomorphicLayoutEffect(() => {
    if (!(typeof window > "u")) return window.addEventListener("resize", update2), open2 && update2(), () => window.removeEventListener("resize", update2);
  }, [update2, open2]);
  const onMatch = useEvent6((index2) => (open2 ? setActiveIndex : setSelectedIndex)(index2)), dataRef = React69.useRef({});
  dataRef.current.placement = computedPlacement;
  const interactionContext = {
    open: open2,
    onOpenChange: /* @__PURE__ */ __name((val) => setOpen(val), "onOpenChange"),
    refs: {
      reference: refs.reference,
      floating: refs.floating,
      domReference: refs.reference
    },
    elements: {
      reference: refs.reference?.current || null,
      floating: refs.floating?.current || null,
      domReference: refs.reference?.current || null
    },
    dataRef
  }, interactionsProps = [
    useClick(interactionContext, {
      event: "mousedown",
      keyboardHandlers: false
    }),
    // useDismiss removed - already handled by Dismissable in SelectContent
    useRole(interactionContext, {
      role: "listbox"
    }),
    useInnerOffset(interactionContext, {
      enabled: !fallback && isScrollable,
      onChange: setInnerOffset,
      overflowRef,
      scrollRef: refs.floating
    }),
    useListNavigation(interactionContext, {
      listRef: listItemsRef,
      activeIndex: selectContext.activeIndex ?? 0,
      selectedIndex,
      onNavigate: /* @__PURE__ */ __name((index2) => {
        index2 !== null && setActiveIndex(index2);
      }, "onNavigate"),
      scrollItemIntoView: false
    }),
    useTypeahead(interactionContext, {
      listRef: listContentRef,
      onMatch,
      selectedIndex,
      activeIndex: selectContext.activeIndex,
      onTypingChange: /* @__PURE__ */ __name((e) => {
        state5.current.isTyping = e;
      }, "onTypingChange")
    })
  ], interactions = useInteractions(React69.useMemo(() => interactionsProps, interactionsProps)), interactionsContext = React69.useMemo(() => ({
    ...interactions,
    getReferenceProps() {
      return interactions.getReferenceProps({
        ref: refs.reference,
        className: "SelectTrigger",
        onKeyDown(event) {
          (event.key === "Enter" || event.code === "Space" || event.key === " " && !state5.current.isTyping) && (event.preventDefault(), setOpen(true));
        }
      });
    },
    getFloatingProps(props2) {
      return interactions.getFloatingProps({
        ref: refs.floating,
        className: "Select",
        ...props2,
        style: {
          position: strategy,
          top: y ?? "",
          left: x ?? "",
          outline: 0,
          scrollbarWidth: "none",
          ...floatingStyle.current,
          ...props2?.style
        },
        onPointerEnter() {
          setControlledScrolling(false), state5.current.isMouseOutside = false;
        },
        onPointerLeave() {
          state5.current.isMouseOutside = true;
        },
        onPointerMove() {
          state5.current.isMouseOutside = false, setControlledScrolling(false);
        },
        onKeyDown() {
          setControlledScrolling(true);
        },
        onContextMenu(e) {
          e.preventDefault();
        },
        onScroll(event) {
          flushSync6(() => {
            setScrollTop(event.currentTarget.scrollTop);
          });
        }
      });
    }
  }), [refs.reference.current, x, y, refs.floating.current, interactions]);
  useIsomorphicLayoutEffect(() => {
    if (open2) return allowMouseUpRef.current = false, selectTimeoutRef.current = setTimeout(() => {
      allowSelectRef.current = true, allowMouseUpRef.current = true;
    }, 300), () => {
      clearTimeout(selectTimeoutRef.current);
    };
    allowSelectRef.current = false, allowMouseUpRef.current = true, setInnerOffset(0), setFallback(false), setBlockSelection(false);
  }, [open2]), useIsomorphicLayoutEffect(() => {
    !open2 && state5.current.isMouseOutside && (state5.current.isMouseOutside = false);
  }, [open2]), useIsomorphicLayoutEffect(() => {
    function onPointerDown(e) {
      const target = e.target;
      refs.floating.current?.contains(target) || upArrowRef.current?.contains(target) || downArrowRef.current?.contains(target) || (setOpen(false), setControlledScrolling(false));
    }
    __name(onPointerDown, "onPointerDown");
    if (open2) return document.addEventListener("pointerdown", onPointerDown), () => {
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open2, refs, setOpen]), React69.useEffect(() => {
    if (!open2) return;
    const scrollActiveIntoView = /* @__PURE__ */ __name((index2) => {
      controlledScrolling && index2 != null && listItemsRef.current[index2]?.scrollIntoView({
        block: "nearest"
      }), setScrollTop(refs.floating.current?.scrollTop ?? 0);
    }, "scrollActiveIntoView");
    return scrollActiveIntoView(activeIndexRef.current), selectItemParentContext.activeIndexSubscribe(scrollActiveIntoView);
  }, [open2, refs, controlledScrolling, selectItemParentContext.activeIndexSubscribe]), React69.useEffect(() => {
    open2 && fallback && selectedIndex != null && listItemsRef.current[selectedIndex]?.scrollIntoView({
      block: "nearest"
    });
  }, [open2, fallback, selectedIndex]), useIsomorphicLayoutEffect(() => {
    refs.floating.current && fallback && (refs.floating.current.style.maxHeight = "");
  }, [refs, fallback]);
  const floatingContext = React69.useMemo(() => ({
    refs,
    dataRef
  }), [refs]);
  return /* @__PURE__ */ jsx51(SelectProvider, {
    scope,
    ...selectContext,
    setScrollTop,
    setInnerOffset,
    fallback,
    floatingContext,
    canScrollDown: !!showDownArrow,
    canScrollUp: !!showUpArrow,
    controlledScrolling,
    blockSelection,
    upArrowRef,
    downArrowRef,
    update: update2,
    children: /* @__PURE__ */ jsx51(SelectItemParentProvider, {
      scope,
      ...selectItemParentContext,
      allowMouseUpRef,
      allowSelectRef,
      dataRef,
      interactions: interactionsContext,
      listRef: listItemsRef,
      selectTimeoutRef,
      children
    })
  });
}, "SelectInlineImpl");

// node_modules/@tamagui/select/dist/esm/SelectItem.mjs
import { createStyledContext as createStyledContext20 } from "@tamagui/core";
import * as React70 from "react";
import { jsx as jsx52 } from "react/jsx-runtime";
var ITEM_NAME3 = "SelectItem";
var {
  Provider: SelectItemContextProvider,
  useStyledContext: useSelectItemContext
} = createStyledContext20(null, ITEM_NAME3);
var SelectItem = ListItem2.Frame.styleable(function(props, forwardedRef) {
  const {
    scope,
    value,
    disabled = false,
    textValue: textValueProp,
    index: index2,
    ...restProps
  } = props, context4 = useSelectItemParentContext(scope), {
    setSelectedIndex,
    listRef,
    setOpen,
    onChange,
    activeIndexSubscribe,
    activeIndexRef,
    valueSubscribe,
    allowMouseUpRef,
    allowSelectRef,
    setValueAtIndex,
    selectTimeoutRef,
    dataRef,
    interactions,
    shouldRenderWebNative,
    size: size4,
    onActiveChange,
    initialValue: initialValue2,
    setActiveIndexFast
  } = context4, [isSelected, setSelected] = React70.useState(initialValue2 === value);
  useIsomorphicLayoutEffect(() => {
    initialValue2 === value && setSelectedIndex(index2);
  }, []), React70.useEffect(() => {
    const handleActiveIndex = /* @__PURE__ */ __name((i) => {
      index2 === i && (onActiveChange(value, index2), isWeb && requestAnimationFrame(() => {
        listRef?.current[index2]?.focus();
      }));
    }, "handleActiveIndex"), currentActiveIndex = activeIndexRef?.current;
    return currentActiveIndex != null && handleActiveIndex(currentActiveIndex), activeIndexSubscribe(handleActiveIndex);
  }, [index2]), React70.useEffect(() => valueSubscribe((val) => {
    setSelected(val === value);
  }), [value]);
  const textId = React70.useId(), refCallback = React70.useCallback((node) => {
    isWeb && node instanceof HTMLElement && listRef && (listRef.current[index2] = node);
  }, [index2, listRef]), composedRefs = useComposedRefs(forwardedRef, refCallback);
  useIsomorphicLayoutEffect(() => {
    setValueAtIndex(index2, value);
  }, [index2, setValueAtIndex, value]);
  function handleSelect() {
    setSelectedIndex(index2), onChange(value), setOpen(false);
  }
  __name(handleSelect, "handleSelect");
  const selectItemProps = React70.useMemo(() => interactions ? interactions.getItemProps({
    onTouchMove() {
      allowSelectRef.current = true, allowMouseUpRef.current = false;
    },
    onTouchEnd() {
      allowSelectRef.current = false, allowMouseUpRef.current = true;
    },
    onKeyDown(event) {
      if (event.key === "Enter" || event.key === " " && !dataRef?.current.typing) event.preventDefault(), handleSelect();
      else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault(), event.stopPropagation();
        const itemCount = listRef?.current.length ?? 0;
        if (itemCount === 0) return;
        let nextIndex;
        event.key === "ArrowDown" ? nextIndex = index2 + 1 >= itemCount ? 0 : index2 + 1 : nextIndex = index2 - 1 < 0 ? itemCount - 1 : index2 - 1, setActiveIndexFast?.(nextIndex);
      } else allowSelectRef.current = true;
    },
    onClick() {
      allowSelectRef.current && handleSelect();
    },
    onMouseUp() {
      if (!allowMouseUpRef.current) {
        allowMouseUpRef.current = true, allowSelectRef.current = true;
        return;
      }
      allowSelectRef.current && handleSelect(), clearTimeout(selectTimeoutRef.current), selectTimeoutRef.current = setTimeout(() => {
        allowSelectRef.current = true;
      });
    }
  }) : {
    onPress: handleSelect
  }, [handleSelect, index2, listRef, setActiveIndexFast]);
  return /* @__PURE__ */ jsx52(SelectItemContextProvider, {
    scope,
    value,
    textId: textId || "",
    isSelected,
    children: shouldRenderWebNative ? /* @__PURE__ */ jsx52("option", {
      value,
      children: props.children
    }) : /* @__PURE__ */ jsx52(ListItem2.Frame, {
      render: "div",
      componentName: ITEM_NAME3,
      ref: composedRefs,
      role: "option",
      "aria-labelledby": textId,
      "aria-selected": isSelected,
      "data-state": isSelected ? "active" : "inactive",
      "aria-disabled": disabled || void 0,
      "data-disabled": disabled ? "" : void 0,
      tabIndex: disabled ? void 0 : -1,
      ...!props.unstyled && {
        cursor: "default",
        size: size4,
        outlineOffset: -0.5,
        zIndex: 100,
        hoverStyle: {
          backgroundColor: "$backgroundHover"
        },
        pressStyle: {
          backgroundColor: "$backgroundPress"
        },
        focusStyle: {
          backgroundColor: "$backgroundFocus"
        },
        focusVisibleStyle: {
          outlineColor: "$outlineColor",
          outlineWidth: 1,
          outlineStyle: "solid"
        }
      },
      ...restProps,
      ...selectItemProps
    })
  });
}, {
  disableTheme: true
});

// node_modules/@tamagui/select/dist/esm/SelectItemText.mjs
import { styled as styled35, useIsomorphicLayoutEffect as useIsomorphicLayoutEffect2 } from "@tamagui/core";
import * as React71 from "react";
import { Fragment as Fragment16, jsx as jsx53 } from "react/jsx-runtime";
var ITEM_TEXT_NAME = "SelectItemText";
var SelectItemTextFrame = styled35(SizableText2, {
  name: ITEM_TEXT_NAME,
  variants: {
    unstyled: {
      false: {
        userSelect: "none",
        color: "$color",
        ellipsis: true
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var SelectItemText = SelectItemTextFrame.styleable(function(props, forwardedRef) {
  const {
    scope,
    className,
    ...itemTextProps
  } = props, itemParentContext = useSelectItemParentContext(scope), ref = React71.useRef(null), composedRefs = useComposedRefs(forwardedRef, ref), itemContext = useSelectItemContext(scope), contents = React71.useRef(null);
  return contents.current = /* @__PURE__ */ jsx53(SelectItemTextFrame, {
    className,
    size: itemParentContext.size,
    id: itemContext.textId,
    ...itemTextProps,
    ref: composedRefs
  }), useIsomorphicLayoutEffect2(() => {
    itemParentContext.initialValue === itemContext.value && itemParentContext.setSelectedItem(contents.current);
  }, []), useIsomorphicLayoutEffect2(() => itemParentContext.valueSubscribe((val) => {
    val === itemContext.value && itemParentContext.setSelectedItem(contents.current);
  }), [itemContext.value]), itemParentContext.shouldRenderWebNative ? /* @__PURE__ */ jsx53(Fragment16, {
    children: props.children
  }) : /* @__PURE__ */ jsx53(Fragment16, {
    children: contents.current
  });
});

// node_modules/@tamagui/select/dist/esm/SelectScrollButton.mjs
import * as React72 from "react";
import { flushSync as flushSync7 } from "react-dom";
import { jsx as jsx54 } from "react/jsx-runtime";
var SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton";
var SelectScrollUpButton = React72.forwardRef((props, forwardedRef) => /* @__PURE__ */ jsx54(SelectScrollButtonImpl, {
  componentName: SCROLL_UP_BUTTON_NAME,
  ...props,
  dir: "up",
  ref: forwardedRef
}));
SelectScrollUpButton.displayName = SCROLL_UP_BUTTON_NAME;
var SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton";
var SelectScrollDownButton = React72.forwardRef((props, forwardedRef) => /* @__PURE__ */ jsx54(SelectScrollButtonImpl, {
  componentName: SCROLL_DOWN_BUTTON_NAME,
  ...props,
  dir: "down",
  ref: forwardedRef
}));
SelectScrollDownButton.displayName = SCROLL_DOWN_BUTTON_NAME;
var SelectScrollButtonImpl = React72.memo(React72.forwardRef((props, forwardedRef) => {
  const {
    scope,
    dir,
    componentName,
    ...scrollIndicatorProps
  } = props, {
    forceUpdate,
    open: open2,
    fallback,
    setScrollTop,
    setInnerOffset,
    ...context4
  } = useSelectContext(scope), floatingRef = context4.floatingContext?.refs.floating, statusRef = React72.useRef("idle"), isVisible = context4[dir === "down" ? "canScrollDown" : "canScrollUp"], frameRef = React72.useRef(null), {
    x,
    y,
    refs,
    strategy
  } = useFloating({
    open: open2 && isVisible,
    strategy: "fixed",
    elements: {
      reference: floatingRef?.current
    },
    placement: dir === "up" ? "top" : "bottom",
    middleware: [offset3(({
      rects
    }) => -rects.floating.height)],
    whileElementsMounted: /* @__PURE__ */ __name((...args) => autoUpdate(...args, {
      animationFrame: true
    }), "whileElementsMounted")
  }), composedRef = useComposedRefs(forwardedRef, refs.setFloating);
  if (!isVisible) return null;
  const onScroll = /* @__PURE__ */ __name((amount) => {
    const floating = floatingRef;
    floating && (fallback ? floating.current && (floating.current.scrollTop -= amount, flushSync7(() => setScrollTop(floating.current?.scrollTop ?? 0))) : flushSync7(() => setInnerOffset((value) => value - amount)));
  }, "onScroll");
  return /* @__PURE__ */ jsx54(YStack, {
    ref: composedRef,
    componentName,
    "aria-hidden": true,
    ...scrollIndicatorProps,
    zIndex: 1e3,
    position: strategy,
    left: x || 0,
    top: y || 0,
    width: `calc(${(floatingRef?.current?.offsetWidth ?? 0) - 2}px)`,
    onPointerEnter: /* @__PURE__ */ __name(() => {
      statusRef.current = "active";
      let prevNow = Date.now();
      function frame() {
        const element = floatingRef?.current;
        if (element) {
          const currentNow = Date.now(), msElapsed = currentNow - prevNow;
          prevNow = currentNow;
          const pixelsToScroll = msElapsed / 2, remainingPixels = dir === "up" ? element.scrollTop : element.scrollHeight - element.clientHeight - element.scrollTop, scrollRemaining = dir === "up" ? element.scrollTop - pixelsToScroll > 0 : element.scrollTop + pixelsToScroll < element.scrollHeight - element.clientHeight;
          onScroll(dir === "up" ? Math.min(pixelsToScroll, remainingPixels) : Math.max(-pixelsToScroll, -remainingPixels)), scrollRemaining && (frameRef.current = requestAnimationFrame(frame));
        }
      }
      __name(frame, "frame");
      cancelAnimationFrame(frameRef.current), frameRef.current = requestAnimationFrame(frame);
    }, "onPointerEnter"),
    onPointerLeave: /* @__PURE__ */ __name(() => {
      statusRef.current = "idle", cancelAnimationFrame(frameRef.current);
    }, "onPointerLeave")
  });
}));

// node_modules/@tamagui/select/dist/esm/SelectTrigger.mjs
import * as React73 from "react";
import { jsx as jsx55 } from "react/jsx-runtime";
var TRIGGER_NAME3 = "SelectTrigger";
var isPointerCoarse = typeof window < "u" ? window.matchMedia("(pointer:coarse)").matches : true;
var SelectTrigger = React73.forwardRef(function(props, forwardedRef) {
  const {
    scope,
    disabled = false,
    unstyled = false,
    ...triggerProps
  } = props, context4 = useSelectContext(scope), itemParentContext = useSelectItemParentContext(scope), composedRefs = useComposedRefs(forwardedRef, context4.floatingContext?.refs.setReference);
  return itemParentContext.shouldRenderWebNative ? null : /* @__PURE__ */ jsx55(ListItem2, {
    componentName: TRIGGER_NAME3,
    unstyled,
    render: "button",
    type: "button",
    id: itemParentContext.id,
    ...!unstyled && {
      focusVisibleStyle: {
        outlineStyle: "solid",
        outlineWidth: 2,
        outlineColor: "$outlineColor"
      },
      borderWidth: 1,
      size: itemParentContext.size
    },
    role: "combobox",
    "aria-haspopup": "listbox",
    "aria-expanded": context4.open,
    "aria-autocomplete": "none",
    dir: context4.dir,
    disabled,
    "data-disabled": disabled ? "" : void 0,
    ...triggerProps,
    ref: composedRefs,
    ...itemParentContext.interactions ? {
      ...itemParentContext.interactions.getReferenceProps(),
      ...isPointerCoarse ? {
        onPress() {
          itemParentContext.setOpen(!context4.open);
        }
      } : {
        onMouseDown() {
          context4.floatingContext?.update?.(), itemParentContext.setOpen(!context4.open);
        }
      }
    } : {
      onPress() {
        itemParentContext.setOpen(!context4.open);
      }
    }
  });
});

// node_modules/@tamagui/select/dist/esm/SelectViewport.mjs
import { styled as styled36 } from "@tamagui/core";
import * as React74 from "react";
import { Fragment as Fragment17, jsx as jsx56, jsxs as jsxs11 } from "react/jsx-runtime";
var SelectViewportFrame = styled36(YStack, {
  name: VIEWPORT_NAME,
  variants: {
    unstyled: {
      false: {
        size: "$2",
        backgroundColor: "$background",
        elevate: true,
        bordered: true,
        userSelect: "none",
        outlineWidth: 0
      }
    },
    size: {
      "...size": /* @__PURE__ */ __name((val, {
        tokens
      }) => ({
        borderRadius: tokens.radius[val] ?? val
      }), "...size")
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var needsRepropagation3 = needsPortalRepropagation();
var SelectViewport = SelectViewportFrame.styleable(function(props, forwardedRef) {
  const {
    scope,
    children,
    disableScroll,
    ...viewportProps
  } = props, context4 = useSelectContext(scope), itemContext = useSelectItemParentContext(scope), isAdapted = useAdaptIsActive(context4.adaptScope), [lazyMounted, setLazyMounted] = React74.useState(!context4.lazyMount);
  React74.useEffect(() => {
    context4.lazyMount && context4.open && (lazyMounted || startTransition(() => {
      setLazyMounted(true);
    }));
  }, [context4.lazyMount, context4.open, lazyMounted]);
  const composedRefs = useComposedRefs(
    // @ts-ignore TODO react 19 type needs fix
    forwardedRef,
    context4.floatingContext?.refs.setFloating
  );
  if (useIsomorphicLayoutEffect(() => {
    context4.update && context4.update();
  }, [isAdapted]), useIsomorphicLayoutEffect(() => {
    context4.lazyMount && lazyMounted && context4.open && context4.update && context4.update();
  }, [lazyMounted]), itemContext.shouldRenderWebNative) return /* @__PURE__ */ jsx56(YStack, {
    position: "relative",
    children
  });
  if (isAdapted || !isWeb) {
    let content = children;
    return needsRepropagation3 && (content = /* @__PURE__ */ jsx56(ForwardSelectContext, {
      itemContext,
      context: context4,
      children: content
    })), /* @__PURE__ */ jsx56(AdaptPortalContents, {
      scope: context4.adaptScope,
      children: content
    });
  }
  if (!itemContext.interactions) return process.env.NODE_ENV === "development" && console.warn("No interactions provided to Select, potentially missing Adapt"), null;
  const {
    style,
    // remove this, it was set to "Select" always
    className,
    ...floatingProps
  } = itemContext.interactions.getFloatingProps();
  return /* @__PURE__ */ jsxs11(Fragment17, {
    children: [!disableScroll && !props.unstyled && /* @__PURE__ */ jsx56("style", {
      dangerouslySetInnerHTML: {
        __html: selectViewportCSS
      }
    }), /* @__PURE__ */ jsx56(AnimatePresence, {
      children: context4.open ? /* @__PURE__ */ jsx56(SelectViewportFrame, {
        size: itemContext.size,
        role: "presentation",
        ...viewportProps,
        ...style,
        ...floatingProps,
        ...!props.unstyled && {
          overflowY: disableScroll ? void 0 : style.overflow ?? "auto"
        },
        ref: composedRefs,
        children: lazyMounted ? children : null
      }, "select-viewport") : null
    }), !context4.open && !(context4.lazyMount && context4.renderValue) && lazyMounted && /* @__PURE__ */ jsx56("div", {
      style: {
        display: "none"
      },
      children
    })]
  });
});
var selectViewportCSS = `
.is_SelectViewport {
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
}

.is_SelectViewport::-webkit-scrollbar{
  display:none
}
`;

// node_modules/@tamagui/select/dist/esm/Select.mjs
import { Fragment as Fragment18, jsx as jsx57 } from "react/jsx-runtime";
var VALUE_NAME = "SelectValue";
var SelectValueFrame = styled37(SizableText2, {
  name: VALUE_NAME,
  userSelect: "none"
});
var SelectValue = SelectValueFrame.styleable(function({
  scope,
  children: childrenProp,
  placeholder,
  ...props
}, forwardedRef) {
  const context4 = useSelectContext(scope), itemParentContext = useSelectItemParentContext(scope), composedRefs = useComposedRefs(
    // @ts-ignore TODO react 19 type needs fix
    forwardedRef,
    context4.onValueNodeChange
  ), isEmptyValue = context4.value == null || context4.value === "", renderedValue = context4.renderValue?.(context4.value), children = childrenProp ?? renderedValue ?? itemParentContext.selectedItem ?? context4.value, selectValueChildren = isEmptyValue ? placeholder ?? children : children;
  return /* @__PURE__ */ jsx57(SelectValueFrame, {
    ...!props.unstyled && {
      size: itemParentContext.size,
      ellipsis: true,
      // we don't want events from the portalled `SelectValue` children to bubble
      // through the item they came from
      pointerEvents: "none"
    },
    ref: composedRefs,
    ...props,
    children: unwrapSelectItem(selectValueChildren)
  });
});
function unwrapSelectItem(selectValueChildren) {
  return React75.Children.map(selectValueChildren, (child) => {
    if (child) {
      if (child.type?.staticConfig?.componentName === ITEM_TEXT_NAME) return child.props.children;
      if (child.props?.children) return unwrapSelectItem(child.props.children);
    }
    return child;
  });
}
__name(unwrapSelectItem, "unwrapSelectItem");
var SelectIcon = styled37(XStack, {
  name: "SelectIcon",
  // @ts-ignore
  "aria-hidden": true,
  children: /* @__PURE__ */ jsx57(Paragraph, {
    children: "\u25BC"
  })
});
var SelectItemIndicatorFrame = styled37(XStack, {
  name: "SelectItemIndicator"
});
var SelectItemIndicator = React75.forwardRef(function(props, forwardedRef) {
  const {
    scope,
    ...itemIndicatorProps
  } = props, context4 = useSelectItemParentContext(scope), itemContext = useSelectItemContext(scope);
  return context4.shouldRenderWebNative ? null : itemContext.isSelected ? /* @__PURE__ */ jsx57(SelectItemIndicatorFrame, {
    "aria-hidden": true,
    ...itemIndicatorProps,
    ref: forwardedRef
  }) : null;
});
var SelectIndicatorFrame = styled37(YStack, {
  name: "SelectIndicator",
  variants: {
    unstyled: {
      false: {
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 10,
        backgroundColor: "$background",
        borderRadius: 0
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var SelectIndicator = SelectIndicatorFrame.styleable(function({
  scope,
  ...props
}, forwardedRef) {
  const itemContext = useSelectItemParentContext(scope), context4 = useSelectContext(scope), [layout, setLayout] = React75.useState(null), rafRef = React75.useRef(0);
  return React75.useLayoutEffect(() => {
    const update2 = /* @__PURE__ */ __name((index2) => {
      typeof index2 == "number" && (cancelAnimationFrame(rafRef.current), rafRef.current = requestAnimationFrame(() => {
        const node = itemContext.listRef?.current?.[index2];
        node && setLayout({
          width: Math.round(node.offsetWidth),
          height: Math.round(node.offsetHeight),
          x: Math.round(node.offsetLeft),
          y: Math.round(node.offsetTop)
        });
      }));
    }, "update");
    return context4.open && context4.activeIndexRef.current !== null && update2(context4.activeIndexRef.current), itemContext.activeIndexSubscribe(update2);
  }, [context4.open, itemContext.listRef]), layout ? /* @__PURE__ */ jsx57(SelectIndicatorFrame, {
    ref: forwardedRef,
    ...props,
    width: layout.width,
    height: layout.height,
    x: layout.x,
    y: layout.y
  }) : null;
});
var GROUP_NAME4 = "SelectGroup";
var {
  Provider: SelectGroupContextProvider,
  useStyledContext: useSelectGroupContext
} = createStyledContext21({
  id: ""
}, "SelectGroup");
var SelectGroupFrame = styled37(YStack, {
  name: GROUP_NAME4,
  width: "100%"
});
var NativeSelectTextFrame = styled37(SizableText2, {
  render: "select",
  backgroundColor: "$background",
  borderColor: "$borderColor",
  hoverStyle: {
    backgroundColor: "$backgroundHover"
  }
});
var NativeSelectFrame = styled37(YStack, {
  name: "NativeSelect",
  variants: {
    size: {
      "...size": /* @__PURE__ */ __name((val, extras) => {
        const {
          tokens
        } = extras, paddingHorizontal = getVariableValue8(tokens.space[val]);
        return {
          borderRadius: tokens.radius[val] ?? val,
          minHeight: tokens.size[val],
          paddingRight: paddingHorizontal + 20,
          paddingLeft: paddingHorizontal,
          paddingVertical: getSpace(val, {
            shift: -3
          })
        };
      }, "...size")
    },
    unstyled: {
      false: {
        borderWidth: 1,
        borderColor: "$borderColor",
        userSelect: "none",
        outlineWidth: 0,
        paddingRight: 10
      }
    }
  },
  defaultVariants: {
    size: "$2",
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var SelectGroup = React75.forwardRef((props, forwardedRef) => {
  const {
    scope,
    ...groupProps
  } = props, groupId = React75.useId(), context4 = useSelectContext(scope), itemParentContext = useSelectItemParentContext(scope), size4 = itemParentContext.size ?? "$true", nativeSelectRef = React75.useRef(null), content = itemParentContext.shouldRenderWebNative ? /* @__PURE__ */ jsx57(NativeSelectFrame, {
    asChild: true,
    size: size4,
    value: context4.value,
    id: itemParentContext.id,
    children: /* @__PURE__ */ jsx57(NativeSelectTextFrame, {
      onChange: /* @__PURE__ */ __name((event) => {
        itemParentContext.onChange(event.currentTarget.value);
      }, "onChange"),
      size: size4,
      ref: nativeSelectRef,
      style: {
        color: "var(--color)",
        // @ts-ignore
        appearance: "none"
      },
      children: props.children
    })
  }) : /* @__PURE__ */ jsx57(SelectGroupFrame, {
    role: "group",
    "aria-labelledby": groupId,
    ...groupProps,
    ref: forwardedRef
  });
  return /* @__PURE__ */ jsx57(SelectGroupContextProvider, {
    scope,
    id: groupId || "",
    children: content
  });
});
SelectGroup.displayName = GROUP_NAME4;
var LABEL_NAME2 = "SelectLabel";
var SelectLabelFrame = styled37(SizableText2, {
  name: LABEL_NAME2,
  variants: {
    unstyled: {
      false: {
        size: "$true",
        ellipsis: true,
        maxWidth: "100%",
        cursor: "default"
      }
    },
    size: {
      "...size": /* @__PURE__ */ __name((val, {
        tokens
      }) => ({
        paddingHorizontal: tokens.space[val],
        paddingVertical: getSpace(tokens.space[val], {
          shift: -4
        })
      }), "...size")
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var SelectLabel = SelectLabelFrame.styleable((props, forwardedRef) => {
  const {
    scope,
    ...labelProps
  } = props, context4 = useSelectItemParentContext(scope), groupContext = useSelectGroupContext(scope);
  return context4.shouldRenderWebNative ? null : /* @__PURE__ */ jsx57(SelectLabelFrame, {
    render: "div",
    id: groupContext.id,
    size: context4.size,
    ...labelProps,
    ref: forwardedRef
  });
});
var SelectSeparator = styled37(Separator, {
  name: "SelectSeparator"
});
var SelectSheetController = /* @__PURE__ */ __name((props) => {
  const context4 = useSelectContext(props.scope), showSheet = useShowSelectSheet(context4), isAdapted = useAdaptIsActive(context4.adaptScope), getShowSheet = useGet3(showSheet);
  return /* @__PURE__ */ jsx57(SheetController, {
    onOpenChange: /* @__PURE__ */ __name((val) => {
      getShowSheet() && props.onOpenChange(val);
    }, "onOpenChange"),
    open: context4.open,
    hidden: !isAdapted,
    children: props.children
  });
}, "SelectSheetController");
var SelectSheetImpl = /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsx57(Fragment18, {
  children: props.children
}), "SelectSheetImpl");
var Select = withStaticProperties(function(props) {
  const adaptScope = `AdaptSelect${props.scope || ""}`;
  return /* @__PURE__ */ jsx57(AdaptParent, {
    scope: adaptScope,
    portal: true,
    children: /* @__PURE__ */ jsx57(SelectInner, {
      scope: props.scope,
      adaptScope,
      ...props
    })
  });
}, {
  Adapt,
  Content: SelectContent,
  Group: SelectGroup,
  Icon: SelectIcon,
  Item: SelectItem,
  ItemIndicator: SelectItemIndicator,
  ItemText: SelectItemText,
  Label: SelectLabel,
  ScrollDownButton: SelectScrollDownButton,
  ScrollUpButton: SelectScrollUpButton,
  Trigger: SelectTrigger,
  Value: SelectValue,
  Viewport: SelectViewport,
  Indicator: SelectIndicator,
  FocusScope: FocusScopeControllerComponent
});
function useEmitter() {
  const listenersRef = React75.useRef(/* @__PURE__ */ new Set()), emit = React75.useCallback((value) => {
    listenersRef.current.forEach((l) => l(value));
  }, []), subscribe3 = React75.useCallback((listener) => (listenersRef.current.add(listener), () => {
    listenersRef.current.delete(listener);
  }), []);
  return [emit, subscribe3];
}
__name(useEmitter, "useEmitter");
function SelectInner(props) {
  const {
    scope = "",
    adaptScope,
    native,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    value: valueProp,
    defaultValue: defaultValue2,
    onValueChange,
    disablePreventBodyScroll,
    size: sizeProp = "$true",
    onActiveChange,
    dir,
    id,
    renderValue,
    lazyMount,
    zIndex
  } = props, SelectImpl = useAdaptIsActive(adaptScope) || !isWeb ? SelectSheetImpl : SelectInlineImpl, forceUpdate = React75.useReducer(() => ({}), {})[1], [selectedItem, setSelectedItem] = React75.useState(null), [open2, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen || false,
    onChange: onOpenChange
  }), [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue2 || "",
    onChange: onValueChange,
    transition: true
  });
  React75.useEffect(() => {
    open2 && emitValue(value);
  }, [open2]), React75.useEffect(() => {
    emitValue(value);
  }, [value]);
  const activeIndexRef = React75.useRef(null), [activeIndex, setActiveIndexState] = React75.useState(null), [emitValue, valueSubscribe] = useEmitter(), [emitActiveIndex, activeIndexSubscribe] = useEmitter(), selectedIndexRef = React75.useRef(null), listContentRef = React75.useRef([]), [selectedIndex, setSelectedIndex] = React75.useState(0), [valueNode, setValueNode] = React75.useState(null);
  useIsomorphicLayoutEffect(() => {
    selectedIndexRef.current = selectedIndex;
  });
  const shouldRenderWebNative = isWeb && (native === true || native === "web" || Array.isArray(native) && native.includes("web")), setActiveIndexFast = React75.useCallback((index2) => {
    activeIndexRef.current !== index2 && (activeIndexRef.current = index2, typeof index2 == "number" && emitActiveIndex(index2));
  }, [emitActiveIndex]), setActiveIndex = React75.useCallback((index2) => {
    setActiveIndexFast(index2), setActiveIndexState(index2);
  }, [setActiveIndexFast]), content = /* @__PURE__ */ jsx57(SelectItemParentProvider, {
    scopeName: scope,
    scope,
    adaptScope,
    initialValue: React75.useMemo(() => value, [open2]),
    size: sizeProp,
    activeIndexSubscribe,
    activeIndexRef,
    valueSubscribe,
    setOpen,
    id,
    onChange: React75.useCallback((val) => {
      setValue(val), emitValue(val);
    }, []),
    onActiveChange: useEvent7((value2, index2) => {
      onActiveChange?.(value2, index2);
    }),
    setSelectedIndex,
    setValueAtIndex: React75.useCallback((index2, value2) => {
      listContentRef.current[index2] = value2;
    }, []),
    shouldRenderWebNative,
    setActiveIndexFast,
    selectedItem,
    setSelectedItem,
    children: /* @__PURE__ */ jsx57(SelectProvider, {
      scope,
      scopeName: scope,
      adaptScope,
      disablePreventBodyScroll,
      dir,
      blockSelection: false,
      fallback: false,
      forceUpdate,
      valueNode,
      onValueNodeChange: setValueNode,
      activeIndex,
      activeIndexRef,
      selectedIndex,
      setActiveIndex,
      value,
      open: open2,
      native,
      renderValue,
      lazyMount,
      children: /* @__PURE__ */ jsx57(SelectSheetController, {
        onOpenChange: setOpen,
        scope,
        children: shouldRenderWebNative ? children : /* @__PURE__ */ jsx57(SelectImpl, {
          activeIndexRef,
          listContentRef,
          selectedIndexRef,
          setActiveIndexFast,
          ...props,
          open: open2,
          value,
          children
        })
      })
    })
  });
  return zIndex !== void 0 ? /* @__PURE__ */ jsx57(SelectZIndexContext.Provider, {
    value: zIndex,
    children: content
  }) : content;
}
__name(SelectInner, "SelectInner");

// node_modules/@tamagui/sheet/dist/esm/Sheet.mjs
import { styled as styled38 } from "@tamagui/core";

// node_modules/@tamagui/sheet/dist/esm/constants.mjs
var SHEET_NAME = "Sheet";
var SHEET_HANDLE_NAME = "SheetHandle";
var SHEET_OVERLAY_NAME = "SheetOverlay";

// node_modules/@tamagui/sheet/dist/esm/createSheet.mjs
import { View as View22 } from "@tamagui/core";

// node_modules/@tamagui/use-did-finish-ssr/dist/esm/index.mjs
import * as React76 from "react";

// node_modules/@tamagui/use-did-finish-ssr/dist/esm/ClientOnly.mjs
import { createContext as createContext16, useContext as useContext20 } from "react";
import { jsx as jsx58 } from "react/jsx-runtime";
var ClientOnlyContext = createContext16(false);

// node_modules/@tamagui/use-did-finish-ssr/dist/esm/index.mjs
function useDidFinishSSR2() {
  return React76.useContext(ClientOnlyContext) ? true : React76.useSyncExternalStore(subscribe, () => true, () => false);
}
__name(useDidFinishSSR2, "useDidFinishSSR");
var subscribe = /* @__PURE__ */ __name(() => () => {
}, "subscribe");

// node_modules/@tamagui/sheet/dist/esm/createSheet.mjs
import { forwardRef as forwardRef19, useMemo as useMemo31, useEffect as useEffect37, useRef as useRef42 } from "react";

// node_modules/@tamagui/sheet/dist/esm/SheetContext.mjs
var [createSheetContext, createSheetScope] = createContextScope(SHEET_NAME);
var [SheetProvider, useSheetContext] = createSheetContext(SHEET_NAME, {});

// node_modules/@tamagui/sheet/dist/esm/SheetImplementationCustom.mjs
import { LayoutMeasurementController as LayoutMeasurementController3, View as TamaguiView2, useConfiguration as useConfiguration2, useDidFinishSSR as useDidFinishSSR3, useEvent as useEvent8, useThemeName as useThemeName5 } from "@tamagui/core";
import React79, { useState as useState24 } from "react";

// node_modules/@tamagui/sheet/dist/esm/contexts.mjs
import React77 from "react";
var ParentSheetContext = React77.createContext({
  zIndex: 1e5
});
var SheetInsideSheetContext = React77.createContext(null);

// node_modules/@tamagui/sheet/dist/esm/gestureState.mjs
function isGestureHandlerEnabled() {
  return getGestureHandler().isEnabled;
}
__name(isGestureHandlerEnabled, "isGestureHandlerEnabled");
function getGestureHandlerState() {
  return getGestureHandler().state;
}
__name(getGestureHandlerState, "getGestureHandlerState");

// node_modules/@tamagui/sheet/dist/esm/GestureDetectorWrapper.mjs
import { jsx as jsx59 } from "react/jsx-runtime";
function GestureDetectorWrapper({
  gesture,
  children,
  style
}) {
  const {
    GestureDetector
  } = getGestureHandlerState();
  return isGestureHandlerEnabled() && GestureDetector && gesture ? /* @__PURE__ */ jsx59(GestureDetector, {
    gesture,
    children: /* @__PURE__ */ jsx59(View_default, {
      style,
      collapsable: false,
      children
    })
  }) : /* @__PURE__ */ jsx59(View_default, {
    style,
    children
  });
}
__name(GestureDetectorWrapper, "GestureDetectorWrapper");

// node_modules/@tamagui/sheet/dist/esm/GestureSheetContext.mjs
import { createContext as createContext17, useContext as useContext22 } from "react";
import { jsx as jsx60 } from "react/jsx-runtime";
var GestureSheetContext = createContext17(null);
function useGestureSheetContext() {
  return useContext22(GestureSheetContext);
}
__name(useGestureSheetContext, "useGestureSheetContext");
function GestureSheetProvider({
  children,
  isDragging,
  blockPan,
  setBlockPan,
  panGesture,
  panGestureRef
}) {
  const value = {
    panGesture,
    panGestureRef,
    isDragging,
    blockPan,
    setBlockPan
  };
  return /* @__PURE__ */ jsx60(GestureSheetContext.Provider, {
    value,
    children
  });
}
__name(GestureSheetProvider, "GestureSheetProvider");

// node_modules/@tamagui/sheet/dist/esm/helpers.mjs
function resisted(y, minY, maxOverflow = 25) {
  if (y >= minY) return y;
  const pastBoundary = minY - y, resistedDistance = Math.sqrt(pastBoundary) * 2;
  return minY - resistedDistance;
}
__name(resisted, "resisted");

// node_modules/@tamagui/sheet/dist/esm/useGestureHandlerPan.mjs
import { useCallback as useCallback18, useMemo as useMemo30, useRef as useRef38 } from "react";
var AT_TOP_THRESHOLD = 5;
function useGestureHandlerPan(config) {
  const {
    positions,
    frameSize,
    setPosition,
    animateTo,
    stopSpring,
    scrollBridge,
    setIsDragging,
    getCurrentPosition,
    resisted: resisted2,
    disableDrag,
    isShowingInnerSheet,
    setAnimatedPosition,
    scrollGestureRef
  } = config, gestureHandlerEnabled = isGestureHandlerEnabled(), panGestureRef = useRef38(null), gestureStateRef = useRef38({
    startY: 0,
    // track last translation when pan was active (for position calculation after handoff)
    lastPanTranslationY: 0,
    // accumulated position offset from all pan movements
    accumulatedOffset: 0,
    // track previous translation for direction detection (like actions-sheet)
    prevTranslationY: 0,
    // track if scroll was engaged (scrollY > 0) at some point
    scrollEngaged: false,
    // positions frozen at gesture start — keyboard may dismiss during drag (input blur),
    // causing positions to revert. Frozen positions ensure stable snap calculation.
    frozenPositions: [],
    frozenMinY: 0,
    // whether pan gesture actually started (vs just a tap in onBegin)
    panStarted: false
  }), onStart = useCallback18(() => {
    stopSpring();
  }, [stopSpring]), onEnd = useCallback18((closestPoint, animationOverride) => {
    setIsDragging(false), scrollBridge.setParentDragging(false), scrollBridge.setScrollEnabled?.(true), setPosition(closestPoint), animateTo(closestPoint, animationOverride);
  }, [setIsDragging, scrollBridge, setPosition, animateTo]);
  return {
    panGesture: useMemo30(() => {
      if (!gestureHandlerEnabled || disableDrag || isShowingInnerSheet || !frameSize) return null;
      const {
        Gesture
      } = getGestureHandlerState();
      if (!Gesture) return null;
      const minY = positions[0], gs = gestureStateRef.current, gesture = Gesture.Pan().withRef(panGestureRef).activeOffsetY([-10, 10]).failOffsetX([-20, 20]).shouldCancelWhenOutside(false).onBegin(() => {
        gs.panStarted = false, config.pauseKeyboardHandler && (config.pauseKeyboardHandler.current = true);
        const pos = getCurrentPosition(), atTop = pos <= minY + AT_TOP_THRESHOLD, currentScrollY = scrollBridge.y;
        gs.startY = pos, gs.lastPanTranslationY = 0, gs.accumulatedOffset = 0, gs.prevTranslationY = 0, gs.scrollEngaged = currentScrollY > 0, gs.frozenPositions = [...positions], gs.frozenMinY = minY, atTop || scrollBridge.setScrollEnabled?.(false, 0);
      }).onStart(() => {
        gs.panStarted = true, setIsDragging(true), scrollBridge.initialPosition = gs.startY, onStart();
      }).onChange((event) => {
        const {
          translationY
        } = event, isSwipingDown = gs.prevTranslationY < translationY, deltaY = translationY - gs.prevTranslationY;
        gs.prevTranslationY = translationY;
        const scrollY = scrollBridge.y;
        scrollY > 0 && (gs.scrollEngaged = true);
        const isCurrentlyAtTop = gs.startY + gs.accumulatedOffset <= minY + AT_TOP_THRESHOLD, nodeIsScrolling = scrollY > 0;
        let panHandles = false;
        const hasScrollableContent = scrollBridge.hasScrollableContent !== false;
        if (isCurrentlyAtTop ? isSwipingDown ? nodeIsScrolling && hasScrollableContent ? panHandles = false : (gs.scrollEngaged, panHandles = true) : hasScrollableContent ? panHandles = false : panHandles = true : isSwipingDown ? panHandles = !nodeIsScrolling || !hasScrollableContent : panHandles = true, panHandles) {
          const lockTo = isCurrentlyAtTop && isSwipingDown && gs.scrollEngaged ? void 0 : 0;
          scrollBridge.setScrollEnabled?.(false, lockTo), gs.accumulatedOffset += deltaY;
          const newPosition = resisted2(gs.startY + gs.accumulatedOffset, minY);
          scrollBridge.paneY = newPosition, setAnimatedPosition(newPosition), scrollBridge.setParentDragging(newPosition > minY);
        } else scrollBridge.setScrollEnabled?.(true);
      }).onEnd((event) => {
        const {
          velocityY
        } = event, currentPos = gs.startY + gs.accumulatedOffset;
        scrollBridge.scrollLockY = void 0;
        const snapPositions = gs.frozenPositions.length > 0 ? gs.frozenPositions : positions, snapMinY = gs.frozenPositions.length > 0 ? gs.frozenMinY : minY;
        if (currentPos <= snapMinY + AT_TOP_THRESHOLD && scrollBridge.y > 0) {
          onEnd(0);
          return;
        }
        const velocity = velocityY / 1e3, projectedEnd = currentPos + frameSize * velocity * 0.2;
        let closestPoint = 0, minDist = Number.POSITIVE_INFINITY;
        for (let i = 0; i < snapPositions.length; i++) {
          const pos = snapPositions[i], dist = Math.abs(projectedEnd - pos);
          dist < minDist && (minDist = dist, closestPoint = i);
        }
        onEnd(closestPoint);
      }).onFinalize(() => {
        scrollBridge.scrollLockY = void 0, gs.panStarted ? setIsDragging(false) : config.pauseKeyboardHandler && (config.pauseKeyboardHandler.current = false);
      }).runOnJS(true);
      return scrollGestureRef?.current ? gesture.simultaneousWithExternalGesture(scrollGestureRef.current) : gesture;
    }, [gestureHandlerEnabled, disableDrag, isShowingInnerSheet, frameSize, positions, scrollBridge, getCurrentPosition, resisted2, onStart, onEnd, setIsDragging, setAnimatedPosition]),
    panGestureRef,
    gestureHandlerEnabled
  };
}
__name(useGestureHandlerPan, "useGestureHandlerPan");

// node_modules/@tamagui/sheet/dist/esm/useKeyboardControllerSheet.mjs
import { useRef as useRef39 } from "react";
var noop3 = /* @__PURE__ */ __name(() => {
}, "noop");
function useKeyboardControllerSheet(_options) {
  const pauseKeyboardHandler = useRef39(false);
  return {
    keyboardControllerEnabled: false,
    keyboardHeight: 0,
    isKeyboardVisible: false,
    dismissKeyboard: noop3,
    pauseKeyboardHandler,
    flushPendingHide: noop3
  };
}
__name(useKeyboardControllerSheet, "useKeyboardControllerSheet");

// node_modules/@tamagui/sheet/dist/esm/useSheetOpenState.mjs
var useSheetOpenState = /* @__PURE__ */ __name((props) => {
  const {
    isHidden: isHidden2,
    controller
  } = useSheetController(), onOpenChangeInternal = /* @__PURE__ */ __name((val) => {
    controller?.onOpenChange?.(val), props.onOpenChange?.(val);
  }, "onOpenChangeInternal"), propVal = props.preferAdaptParentOpenState ? controller?.open ?? props.open : props.open ?? controller?.open, [open2, setOpen] = useControllableState({
    prop: propVal,
    defaultProp: props.defaultOpen ?? false,
    onChange: onOpenChangeInternal,
    strategy: "most-recent-wins"
  });
  return {
    open: open2,
    setOpen,
    isHidden: isHidden2,
    controller
  };
}, "useSheetOpenState");

// node_modules/@tamagui/sheet/dist/esm/useSheetProviderProps.mjs
import React78 from "react";
import { useConfiguration } from "@tamagui/core";
function useSheetProviderProps(props, state5, options = {}) {
  const handleRef = React78.useRef(null), contentRef = React78.useRef(null), [frameSize, setFrameSize] = React78.useState(0), [maxContentSize, setMaxContentSize] = React78.useState(0), snapPointsMode = props.snapPointsMode ?? "percent", snapPointsProp = props.snapPoints ?? (snapPointsMode === "percent" ? [80] : snapPointsMode === "constant" ? [256] : ["fit"]), hasFit = snapPointsProp[0] === "fit", snapPoints = React78.useMemo(() => props.dismissOnSnapToBottom ? [...snapPointsProp, 0] : snapPointsProp, [JSON.stringify(snapPointsProp), props.dismissOnSnapToBottom]), [position_, setPositionImmediate] = useControllableState({
    prop: props.position,
    defaultProp: props.defaultPosition || (state5.open ? 0 : -1),
    onChange: props.onPositionChange,
    strategy: "most-recent-wins"
  }), position2 = state5.open === false ? -1 : position_, {
    open: open2
  } = state5, setPosition = React78.useCallback((next) => {
    props.dismissOnSnapToBottom && next === snapPoints.length - 1 ? state5.setOpen(false) : setPositionImmediate(next);
  }, [props.dismissOnSnapToBottom, snapPoints.length, setPositionImmediate, state5.setOpen]);
  process.env.NODE_ENV === "development" && (snapPointsMode === "mixed" && snapPoints.some((p) => {
    if (typeof p == "string") {
      if (p === "fit") return false;
      if (p.endsWith("%")) {
        const n = Number(p.slice(0, -1));
        return n < 0 || n > 100;
      }
      return true;
    }
    return typeof p != "number" || p < 0;
  }) && console.warn('\u26A0\uFE0F Invalid snapPoint given, snapPoints must be positive numeric values, string percentages between 0-100%, or "fit" when snapPointsMode is mixed'), snapPointsMode === "mixed" && snapPoints.indexOf("fit") > 0 && console.warn('\u26A0\uFE0F Invalid snapPoint given, "fit" must be the first/largest snap point when snapPointsMode is mixed'), snapPointsMode === "fit" && (snapPoints.length !== (props.dismissOnSnapToBottom ? 2 : 1) || snapPoints[0] !== "fit") && console.warn("\u26A0\uFE0F Invalid snapPoint given, there are no snap points when snapPointsMode is fit"), snapPointsMode === "constant" && snapPoints.some((p) => typeof p != "number" || p < 0) && console.warn("\u26A0\uFE0F Invalid snapPoint given, snapPoints must be positive numeric values when snapPointsMode is constant"), snapPointsMode === "percent" && snapPoints.some((p) => typeof p != "number" || p < 0 || p > 100) && console.warn("\u26A0\uFE0F Invalid snapPoint given, snapPoints must be numeric values between 0 and 100 when snapPointsMode is percent")), open2 && props.dismissOnSnapToBottom && position2 === snapPoints.length - 1 && setPositionImmediate(0);
  const shouldSetPositionOpen = open2 && position2 < 0;
  React78.useEffect(() => {
    shouldSetPositionOpen && setPosition(0);
  }, [setPosition, shouldSetPositionOpen]);
  const {
    animationDriver
  } = useConfiguration();
  if (!animationDriver) throw new Error(process.env.NODE_ENV === "production" ? "\u274C 008" : "Must set animations in tamagui.config.ts");
  const scrollBridge = useConstant(() => {
    const parentDragListeners = /* @__PURE__ */ new Set(), bridge = {
      hasScrollableContent: false,
      enabled: false,
      y: 0,
      paneY: 0,
      paneMinY: 0,
      scrollStartY: -1,
      drag: /* @__PURE__ */ __name(() => {
      }, "drag"),
      release: /* @__PURE__ */ __name(() => {
      }, "release"),
      scrollLock: false,
      isParentDragging: false,
      onParentDragging: /* @__PURE__ */ __name((cb) => (parentDragListeners.add(cb), () => {
        parentDragListeners.delete(cb);
      }), "onParentDragging"),
      setParentDragging: /* @__PURE__ */ __name((val) => {
        val !== bridge.isParentDragging && (bridge.isParentDragging = val, parentDragListeners.forEach((cb) => cb(val)));
      }, "setParentDragging")
    };
    return bridge;
  });
  let disableRemoveScroll;
  props.disableRemoveScroll !== void 0 ? disableRemoveScroll = props.disableRemoveScroll || !open2 || !props.modal : props.forceRemoveScrollEnabled !== void 0 ? (process.env.NODE_ENV === "development" && console.warn("[Sheet] forceRemoveScrollEnabled is deprecated. Use disableRemoveScroll instead."), disableRemoveScroll = !props.forceRemoveScrollEnabled) : disableRemoveScroll = !open2 || !props.modal;
  const maxSnapPoint = snapPoints[0];
  return {
    screenSize: snapPointsMode === "percent" ? frameSize / ((typeof maxSnapPoint == "number" ? maxSnapPoint : 100) / 100) : maxContentSize,
    maxSnapPoint,
    disableRemoveScroll,
    scrollBridge,
    modal: !!props.modal,
    open: state5.open,
    setOpen: state5.setOpen,
    hidden: !!state5.isHidden,
    contentRef,
    handleRef,
    frameSize,
    setFrameSize,
    dismissOnOverlayPress: props.dismissOnOverlayPress ?? true,
    dismissOnSnapToBottom: props.dismissOnSnapToBottom ?? false,
    onOverlayComponent: options.onOverlayComponent,
    scope: props.__scopeSheet,
    hasFit,
    position: position2,
    snapPoints,
    snapPointsMode,
    setMaxContentSize,
    setPosition,
    setPositionImmediate,
    onlyShowFrame: false
  };
}
__name(useSheetProviderProps, "useSheetProviderProps");

// node_modules/@tamagui/sheet/dist/esm/SheetImplementationCustom.mjs
import { jsx as jsx61, jsxs as jsxs12 } from "react/jsx-runtime";
var hiddenSize = 10000.1;
var _cachedSafeAreaTop;
function getSafeAreaTopInset() {
  return _cachedSafeAreaTop !== void 0 || (_cachedSafeAreaTop = getSafeArea().getInsets().top), _cachedSafeAreaTop;
}
__name(getSafeAreaTopInset, "getSafeAreaTopInset");
var sheetHiddenStyleSheet = null;
var relativeDimensionTo = isWeb ? "window" : "screen";
var SheetImplementationCustom = React79.forwardRef(function(props, forwardedRef) {
  const parentSheet = React79.useContext(ParentSheetContext), {
    transition: transition2,
    transitionConfig: transitionConfigProp,
    modal = false,
    zIndex = parentSheet.zIndex + 1,
    moveOnKeyboardChange = false,
    unmountChildrenWhenHidden = false,
    portalProps,
    containerComponent: ContainerComponent = React79.Fragment,
    onAnimationComplete
  } = props, state5 = useSheetOpenState(props), [overlayComponent, setOverlayComponent] = React79.useState(null), providerProps = useSheetProviderProps(props, state5, {
    onOverlayComponent: setOverlayComponent
  }), {
    frameSize,
    setFrameSize,
    snapPoints,
    snapPointsMode,
    hasFit,
    position: position2,
    setPosition,
    scrollBridge,
    screenSize,
    setMaxContentSize,
    maxSnapPoint
  } = providerProps, {
    open: open2,
    controller,
    isHidden: isHidden2
  } = state5, openRef = React79.useRef(open2);
  openRef.current = open2;
  const sheetRef = React79.useRef(void 0), ref = useComposedRefs(forwardedRef, sheetRef, providerProps.contentRef), {
    animationDriver
  } = useConfiguration2();
  if (!animationDriver) throw new Error("Sheet requires an animation driver to be set");
  const transitionConfig = (() => {
    if (transitionConfigProp) return transitionConfigProp;
    const [animationProp, animationPropConfig] = transition2 ? Array.isArray(transition2) ? transition2 : [transition2] : [];
    return animationProp && animationDriver.animations?.[animationProp] ? {
      ...animationDriver.animations[animationProp],
      ...animationPropConfig
    } : null;
  })(), [isShowingInnerSheet, setIsShowingInnerSheet] = React79.useState(false), shouldHideParentSheet = !isWeb && modal && isShowingInnerSheet && needsPortalRepropagation(), sheetInsideSheet = React79.useContext(SheetInsideSheetContext), onInnerSheet = React79.useCallback((hasChild) => {
    setIsShowingInnerSheet(hasChild);
  }, []), stableFrameSize = React79.useRef(frameSize);
  React79.useEffect(() => {
    open2 && frameSize && (stableFrameSize.current = frameSize);
  }, [open2, frameSize]);
  const effectiveFrameSize = open2 ? frameSize : stableFrameSize.current || frameSize, positions = React79.useMemo(() => snapPoints.map((point) => getYPositions(snapPointsMode, point, screenSize, effectiveFrameSize)), [screenSize, effectiveFrameSize, snapPoints, snapPointsMode]), {
    keyboardHeight,
    isKeyboardVisible,
    dismissKeyboard: dismissKeyboard2,
    pauseKeyboardHandler,
    flushPendingHide
  } = useKeyboardControllerSheet({
    enabled: !isWeb && !!moveOnKeyboardChange
  }), [isDragging, setIsDragging_] = React79.useState(false), isDraggingRef = React79.useRef(false), setIsDragging = React79.useCallback((val) => {
    isDraggingRef.current = val, pauseKeyboardHandler.current = val, setIsDragging_(val), val || flushPendingHide();
  }, [pauseKeyboardHandler, flushPendingHide]), activePositionsRef = React79.useRef(positions), activePositions = React79.useMemo(() => {
    if (isDragging || isDraggingRef.current) return activePositionsRef.current;
    let result;
    if (!isKeyboardVisible || keyboardHeight <= 0) result = positions;
    else {
      const safeAreaTop = isWeb ? 0 : getSafeAreaTopInset();
      result = positions.map((p) => screenSize && p >= screenSize ? p : Math.max(safeAreaTop, p - keyboardHeight));
    }
    return activePositionsRef.current = result, result;
  }, [positions, isKeyboardVisible, keyboardHeight, screenSize, isDragging]), {
    useAnimatedNumber,
    useAnimatedNumberStyle,
    useAnimatedNumberReaction
  } = animationDriver, AnimatedView = animationDriver.View ?? TamaguiView2;
  useIsomorphicLayoutEffect(() => {
    if (sheetInsideSheet && open2) return sheetInsideSheet(true), () => {
      sheetInsideSheet(false);
    };
  }, [sheetInsideSheet, open2]);
  const nextParentContext = React79.useMemo(() => ({
    zIndex
  }), [zIndex]), startPosition = useDidFinishSSR3() && screenSize ? screenSize : hiddenSize, animatedNumber = useAnimatedNumber(startPosition), at = React79.useRef(startPosition), hasntMeasured = at.current === hiddenSize, [disableAnimation, setDisableAnimation] = useState24(hasntMeasured), skipAdaptAnimation = React79.useRef(false);
  controller?.skipNextAnimation && (skipAdaptAnimation.current = true);
  const hasScrollView = React79.useRef(false), opacityFallbackTimer = React79.useRef(null);
  useAnimatedNumberReaction({
    value: animatedNumber,
    hostRef: sheetRef
  }, React79.useCallback((value) => {
    at.current = value, scrollBridge.paneY = value;
    const minY = activePositions[0], wasAtTop = scrollBridge.isAtTop, nowAtTop = value <= minY + 5;
    wasAtTop !== nowAtTop && (scrollBridge.isAtTop = nowAtTop, nowAtTop ? (scrollBridge.y > 0 && (scrollBridge.forceScrollTo?.(0), scrollBridge.y = 0), scrollBridge.scrollLockY = void 0, scrollBridge.setScrollEnabled?.(true)) : (scrollBridge.scrollLockY = 0, scrollBridge.setScrollEnabled?.(false)));
  }, [animationDriver, activePositions]));
  function stopSpring() {
    animatedNumber.stop(), scrollBridge.onFinishAnimate && (scrollBridge.onFinishAnimate(), scrollBridge.onFinishAnimate = void 0);
  }
  __name(stopSpring, "stopSpring");
  const animateTo = useEvent8((position22, animationOverride) => {
    if (frameSize === 0) return;
    let toValue = isHidden2 || position22 === -1 ? screenSize : activePositions[position22];
    if (at.current === toValue) return;
    at.current = toValue, stopSpring();
    const isOpenAnimation = position22 !== -1 && !isHidden2;
    opacityFallbackTimer.current && (clearTimeout(opacityFallbackTimer.current), opacityFallbackTimer.current = null);
    const animationCompleteCallback = /* @__PURE__ */ __name(() => {
      opacityFallbackTimer.current && (clearTimeout(opacityFallbackTimer.current), opacityFallbackTimer.current = null), !isOpenAnimation && !open2 && setOpacity(0), onAnimationComplete?.({
        open: isOpenAnimation
      });
    }, "animationCompleteCallback");
    if (isOpenAnimation || (opacityFallbackTimer.current = setTimeout(() => {
      opacityFallbackTimer.current = null, openRef.current || setOpacity(0);
    }, 1e3)), skipAdaptAnimation.current) {
      skipAdaptAnimation.current = false, animatedNumber.setValue(toValue, {
        type: "timing",
        duration: 0
      }, animationCompleteCallback);
      return;
    }
    animatedNumber.setValue(toValue, animationOverride || {
      type: "spring",
      ...transitionConfig
    }, animationCompleteCallback);
  });
  useIsomorphicLayoutEffect(() => {
    if (hasntMeasured && screenSize && frameSize) {
      at.current = screenSize, animatedNumber.setValue(screenSize, {
        type: "timing",
        duration: 0
      }, () => {
        setTimeout(() => {
          setDisableAnimation(false);
        }, 10);
      });
      return;
    }
    if (!disableAnimation && !(!frameSize || !screenSize || isHidden2 || hasntMeasured && !open2) && (animateTo(position2), position2 === -1 && (scrollBridge.scrollLock = false, scrollBridge.scrollStartY = -1), open2 && position2 >= 0)) {
      const isTopPosition = position2 === 0;
      scrollBridge.isAtTop = isTopPosition, isTopPosition ? (scrollBridge.scrollLockY = void 0, scrollBridge.setScrollEnabled?.(true)) : (scrollBridge.scrollLockY = 0, scrollBridge.setScrollEnabled?.(false));
    }
  }, [hasntMeasured, disableAnimation, isHidden2, frameSize, screenSize, open2, position2]);
  const disableDrag = props.disableDrag ?? controller?.disableDrag, themeName = useThemeName5(), [blockPan, setBlockPan] = React79.useState(false), panResponder = React79.useMemo(() => {
    if (disableDrag || !frameSize || isShowingInnerSheet) return;
    const minY = positions[0];
    scrollBridge.paneMinY = minY;
    let startY = at.current;
    function setPanning(val) {
      setIsDragging(val), sheetHiddenStyleSheet || (sheetHiddenStyleSheet = document.createElement("style"), typeof document.head < "u" && document.head.appendChild(sheetHiddenStyleSheet)), val ? sheetHiddenStyleSheet.innerText = ":root * { user-select: none !important; -webkit-user-select: none !important; }" : sheetHiddenStyleSheet.innerText = "";
    }
    __name(setPanning, "setPanning");
    const release = /* @__PURE__ */ __name(({
      vy
    }) => {
      if (scrollBridge.setParentDragging(false), scrollBridge.scrollLock) return;
      isExternalDrag = false, previouslyScrolling = false, setPanning(false);
      const end = at.current + frameSize * vy * 0.2;
      let closestPoint = 0, dist = Number.POSITIVE_INFINITY;
      for (let i = 0; i < positions.length; i++) {
        const position22 = positions[i], curDist = end > position22 ? end - position22 : position22 - end;
        curDist < dist && (dist = curDist, closestPoint = i);
      }
      setPosition(closestPoint), animateTo(closestPoint);
    }, "release"), finish = /* @__PURE__ */ __name((_e, state22) => {
      release({
        vy: state22.vy,
        dragAt: state22.dy
      });
    }, "finish");
    let previouslyScrolling = false;
    const onMoveShouldSet = /* @__PURE__ */ __name((e, {
      dy
    }) => {
      function getShouldSet() {
        if (e.target === providerProps.handleRef.current) return true;
        if (scrollBridge.hasScrollableContent === true) {
          if (scrollBridge.scrollLock) return false;
          const isScrolled = scrollBridge.y !== 0, isDraggingUp = dy < 0, isNearTop = scrollBridge.paneY - 5 <= scrollBridge.paneMinY;
          if (isScrolled) return previouslyScrolling = true, false;
          if (isNearTop && hasScrollView.current && isDraggingUp) return false;
        }
        return Math.abs(dy) > 10;
      }
      __name(getShouldSet, "getShouldSet");
      const granted = getShouldSet();
      return granted && scrollBridge.setParentDragging(true), granted;
    }, "onMoveShouldSet"), grant = /* @__PURE__ */ __name(() => {
      setPanning(true), stopSpring(), startY = at.current;
    }, "grant");
    let isExternalDrag = false;
    return scrollBridge.drag = (dy) => {
      isExternalDrag || (isExternalDrag = true, grant());
      const to = dy + startY;
      animatedNumber.setValue(resisted(to, minY), {
        type: "direct"
      });
    }, scrollBridge.release = release, scrollBridge.snapToPosition = (positionIndex) => {
      isExternalDrag = false, previouslyScrolling = false, setPanning(false), setPosition(positionIndex), animateTo(positionIndex);
    }, PanResponder_default2.create({
      onMoveShouldSetPanResponder: onMoveShouldSet,
      onPanResponderGrant: grant,
      onPanResponderMove: /* @__PURE__ */ __name((_e, {
        dy
      }) => {
        const toFull = dy + startY, to = resisted(toFull, minY);
        to <= minY ? scrollBridge.setParentDragging(false) : scrollBridge.setParentDragging(true), animatedNumber.setValue(to, {
          type: "direct"
        });
      }, "onPanResponderMove"),
      onPanResponderEnd: finish,
      onPanResponderTerminate: finish,
      onPanResponderRelease: finish
    });
  }, [disableDrag, isShowingInnerSheet, animateTo, frameSize, positions, setPosition]);
  React79.useEffect(() => {
    isDragging || isHidden2 || !open2 || disableAnimation || !frameSize || !screenSize || animateTo(position2, {
      type: "timing",
      duration: 250
    });
  }, [isKeyboardVisible, keyboardHeight]);
  const wasDragging = React79.useRef(false);
  React79.useEffect(() => {
    if (isDragging) {
      wasDragging.current = true;
      return;
    }
    wasDragging.current && (wasDragging.current = false, !(!frameSize || !screenSize || isHidden2 || !open2) && animateTo(position2));
  }, [isDragging]), React79.useEffect(() => {
    !open2 && isKeyboardVisible && dismissKeyboard2();
  }, [open2]);
  const {
    panGesture,
    panGestureRef,
    gestureHandlerEnabled
  } = useGestureHandlerPan({
    positions: activePositions,
    frameSize,
    setPosition,
    animateTo,
    stopSpring,
    scrollBridge,
    setIsDragging,
    getCurrentPosition: /* @__PURE__ */ __name(() => at.current, "getCurrentPosition"),
    resisted,
    disableDrag,
    isShowingInnerSheet,
    setAnimatedPosition: /* @__PURE__ */ __name((val) => {
      at.current = val, animatedNumber.setValue(val, {
        type: "direct"
      });
    }, "setAnimatedPosition"),
    pauseKeyboardHandler
  }), handleAnimationViewLayout = useEvent8((e) => {
    if (!open2 && stableFrameSize.current !== 0) return;
    const layoutHeight = e.nativeEvent?.layout.height, next = modal ? Math.min(layoutHeight, Dimensions.get(relativeDimensionTo).height) : layoutHeight;
    next && setFrameSize(next);
  }), handleMaxContentViewLayout = React79.useCallback((e) => {
    const next = Math.min(e.nativeEvent?.layout.height, Dimensions.get(relativeDimensionTo).height);
    next && setMaxContentSize(next);
  }, []), animatedStyle = useAnimatedNumberStyle(animatedNumber, (val) => {
    "worklet";
    return {
      transform: [{
        translateY: frameSize === 0 ? hiddenSize : val
      }]
    };
  }), [opacity, setOpacity] = React79.useState(open2 ? 1 : 0);
  open2 && opacity === 0 && (setOpacity(1), opacityFallbackTimer.current && (clearTimeout(opacityFallbackTimer.current), opacityFallbackTimer.current = null));
  const forcedContentHeight = hasFit ? void 0 : snapPointsMode === "percent" ? (
    // Use dvh for modal (viewport-relative), % for inline (container-relative)
    `${maxSnapPoint}${isWeb && modal ? "dvh" : "%"}`
  ) : maxSnapPoint, setHasScrollView = React79.useCallback((val) => {
    hasScrollView.current = val;
  }, []);
  let contents = /* @__PURE__ */ jsx61(LayoutMeasurementController3, {
    disable: !open2,
    children: /* @__PURE__ */ jsx61(ParentSheetContext.Provider, {
      value: nextParentContext,
      children: /* @__PURE__ */ jsx61(SheetProvider, {
        ...providerProps,
        setHasScrollView,
        children: /* @__PURE__ */ jsxs12(GestureSheetProvider, {
          isDragging,
          blockPan,
          setBlockPan,
          panGesture,
          panGestureRef,
          children: [/* @__PURE__ */ jsx61(AnimatePresence, {
            custom: {
              open: open2
            },
            children: shouldHideParentSheet || !open2 ? null : overlayComponent
          }), snapPointsMode !== "percent" && /* @__PURE__ */ jsx61(View_default, {
            style: {
              opacity: 0,
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: "none"
            },
            onLayout: handleMaxContentViewLayout
          }), /* @__PURE__ */ jsx61(AnimatedView, {
            ref,
            onLayout: handleAnimationViewLayout,
            transition: isDragging || disableAnimation ? null : transition2,
            disableClassName: true,
            style: [{
              position: "absolute",
              zIndex,
              width: "100%",
              height: forcedContentHeight,
              minHeight: forcedContentHeight,
              opacity: shouldHideParentSheet ? 0 : opacity,
              ...(shouldHideParentSheet || !open2) && {
                pointerEvents: "none"
              }
            }, animatedStyle],
            children: gestureHandlerEnabled && panGesture ? /* @__PURE__ */ jsx61(GestureDetectorWrapper, {
              gesture: panGesture,
              style: {
                flex: 1
              },
              children: props.children
            }) : /* @__PURE__ */ jsx61(View_default, {
              ...panResponder?.panHandlers,
              style: {
                flex: 1,
                width: "100%",
                height: "100%"
              },
              children: props.children
            })
          })]
        })
      })
    })
  });
  const shouldMountChildren = unmountChildrenWhenHidden ? !!opacity : true;
  if (modal) {
    const modalContents = /* @__PURE__ */ jsx61(Portal, {
      stackZIndex: zIndex,
      ...portalProps,
      children: shouldMountChildren && /* @__PURE__ */ jsx61(ContainerComponent, {
        children: contents
      })
    });
    return isWeb ? modalContents : /* @__PURE__ */ jsx61(SheetInsideSheetContext.Provider, {
      value: onInnerSheet,
      children: modalContents
    });
  }
  return contents;
});
function getYPositions(mode, point, screenSize, frameSize) {
  if (!screenSize || !frameSize) return 0;
  if (mode === "mixed") {
    if (typeof point == "number") return screenSize - Math.min(screenSize, Math.max(0, point));
    if (point === "fit") return screenSize - Math.min(screenSize, frameSize);
    if (point.endsWith("%")) {
      const pct2 = Math.min(100, Math.max(0, Number(point.slice(0, -1)))) / 100;
      return Number.isNaN(pct2) ? (console.warn("Invalid snapPoint percentage string"), 0) : Math.round(screenSize - pct2 * screenSize);
    }
    return console.warn("Invalid snapPoint unknown value"), 0;
  }
  if (mode === "fit") return point === 0 ? screenSize : screenSize - Math.min(screenSize, frameSize);
  if (mode === "constant" && typeof point == "number") return screenSize - Math.min(screenSize, Math.max(0, point));
  const pct = Math.min(100, Math.max(0, Number(point))) / 100;
  return Number.isNaN(pct) ? (console.warn("Invalid snapPoint percentage"), 0) : Math.round(screenSize - pct * screenSize);
}
__name(getYPositions, "getYPositions");

// node_modules/@tamagui/sheet/dist/esm/SheetScrollView.mjs
import { View as View21 } from "@tamagui/core";
import React80, { useEffect as useEffect36, useRef as useRef41, useState as useState25 } from "react";

// node_modules/@tamagui/sheet/dist/esm/useSheetScrollViewGestures.mjs
import { useEffect as useEffect35, useRef as useRef40 } from "react";
function useSheetScrollViewGestures({
  scrollRef,
  scrollBridge,
  hasScrollableContent
}) {
  const state5 = useRef40({
    startY: 0,
    lastY: 0,
    owner: "none",
    panDragOffset: 0,
    dys: [],
    scrollYAtGestureStart: 0
  });
  return useEffect35(() => {
    if (!scrollRef.current) return;
    const controller = new AbortController(), node = scrollRef.current?.getScrollableNode();
    if (!node) return;
    node.style.overscrollBehavior = "contain";
    let originalOverflow = "";
    const disableScroll = /* @__PURE__ */ __name(() => {
      node.style.overflowY !== "hidden" && (originalOverflow = node.style.overflowY, node.style.overflowY = "hidden");
    }, "disableScroll"), enableScroll = /* @__PURE__ */ __name(() => {
      node.style.overflowY = originalOverflow;
    }, "enableScroll"), handleTouchStart = /* @__PURE__ */ __name((e) => {
      const touch = e.touches[0];
      if (!touch) return;
      const currentScrollY = node.scrollTop;
      state5.current = {
        startY: touch.pageY,
        lastY: touch.pageY,
        owner: "none",
        panDragOffset: 0,
        dys: [],
        scrollYAtGestureStart: currentScrollY
      }, scrollBridge.scrollStartY = touch.pageY;
    }, "handleTouchStart"), handleTouchMove = /* @__PURE__ */ __name((e) => {
      const touch = e.touches[0];
      if (!touch) return;
      const {
        current: s
      } = state5, pageY = touch.pageY, dy = pageY - s.lastY;
      if (s.lastY = pageY, dy === 0) return;
      const isDraggingDown = dy > 0, currentScrollY = node.scrollTop, isPaneAtTop = scrollBridge.paneY <= scrollBridge.paneMinY + 5;
      scrollBridge.y = currentScrollY;
      let shouldPanOwn = false;
      isPaneAtTop ? currentScrollY <= 0 && isDraggingDown && (shouldPanOwn = true) : shouldPanOwn = true;
      const newOwner = shouldPanOwn ? "pan" : "scroll";
      if (newOwner !== s.owner && (newOwner === "pan" ? (s.panDragOffset = 0, s.dys = [], scrollBridge.setParentDragging(true), disableScroll()) : (scrollBridge.setParentDragging(false), scrollBridge.scrollLock = false, enableScroll()), s.owner = newOwner), s.owner === "pan") e.cancelable && e.preventDefault(), s.panDragOffset += dy, scrollBridge.drag(s.panDragOffset), s.dys.push(dy), s.dys.length > 100 && (s.dys = s.dys.slice(-10));
      else if (s.owner === "scroll") {
        const scrollDelta = -dy, maxScrollY = node.scrollHeight - node.clientHeight, newScrollY = Math.max(0, Math.min(maxScrollY, currentScrollY + scrollDelta));
        newScrollY !== currentScrollY && (node.scrollTop = newScrollY, scrollBridge.y = newScrollY);
      }
    }, "handleTouchMove"), handleTouchEnd = /* @__PURE__ */ __name(() => {
      const {
        current: s
      } = state5;
      if (s.owner === "pan") {
        scrollBridge.setParentDragging(false);
        let vy = 0;
        if (s.dys.length) {
          const recentDys = s.dys.slice(-10);
          vy = recentDys.reduce((a, b) => a + b, 0) / recentDys.length * 0.04;
        }
        scrollBridge.release({
          dragAt: s.panDragOffset,
          vy
        });
      }
      enableScroll(), s.owner = "none", s.panDragOffset = 0, s.dys = [];
    }, "handleTouchEnd");
    return node.addEventListener("touchstart", handleTouchStart, {
      signal: controller.signal,
      passive: true
    }), node.addEventListener("touchmove", handleTouchMove, {
      signal: controller.signal,
      passive: false
    }), node.addEventListener("touchend", handleTouchEnd, {
      signal: controller.signal,
      passive: true
    }), node.addEventListener("touchcancel", handleTouchEnd, {
      signal: controller.signal,
      passive: true
    }), () => {
      enableScroll(), controller.abort();
    };
  }, [scrollRef, scrollBridge, hasScrollableContent]), {};
}
__name(useSheetScrollViewGestures, "useSheetScrollViewGestures");

// node_modules/@tamagui/sheet/dist/esm/SheetScrollView.mjs
import { jsx as jsx62 } from "react/jsx-runtime";
var SHEET_SCROLL_VIEW_NAME = "SheetScrollView";
var SheetScrollView = React80.forwardRef(({
  __scopeSheet,
  children,
  onScroll,
  scrollEnabled: scrollEnabledProp,
  ...props
}, ref) => {
  const context4 = useSheetContext(SHEET_SCROLL_VIEW_NAME, __scopeSheet), gestureContext = useGestureSheetContext(), {
    scrollBridge,
    setHasScrollView
  } = context4, [scrollEnabled] = useControllableState({
    prop: scrollEnabledProp,
    defaultProp: true
  }), scrollRef = React80.useRef(null), panGestureRef = gestureContext?.panGestureRef, {
    ScrollView: RNGHScrollView
  } = getGestureHandlerState(), useRNGHScrollView = isGestureHandlerEnabled() && RNGHScrollView && panGestureRef, currentScrollOffset = useRef41(0), lockedScrollY = useRef41(0), setScrollEnabled = /* @__PURE__ */ __name((next, lockTo) => {
    if (next) lockedScrollY.current = currentScrollOffset.current, scrollBridge.scrollLockY = void 0;
    else {
      const lockY = lockTo ?? currentScrollOffset.current;
      lockedScrollY.current = lockY, scrollBridge.scrollLockY = lockY, scrollRef.current?.scrollTo?.({
        x: 0,
        y: lockY,
        animated: false
      });
    }
  }, "setScrollEnabled"), forceScrollTo = /* @__PURE__ */ __name((y) => {
    scrollRef.current?.scrollTo?.({
      x: 0,
      y,
      animated: false
    });
  }, "forceScrollTo");
  useEffect36(() => (setHasScrollView(true), isGestureHandlerEnabled() && (scrollBridge.setScrollEnabled = setScrollEnabled, scrollBridge.forceScrollTo = forceScrollTo), () => {
    setHasScrollView(false), scrollBridge.setScrollEnabled = void 0, scrollBridge.forceScrollTo = void 0;
  }), []);
  const [hasScrollableContent, setHasScrollableContent] = useState25(true), parentHeight = useRef41(0), contentHeight = useRef41(0), updateScrollable = /* @__PURE__ */ __name(() => {
    parentHeight.current && contentHeight.current && setHasScrollableContent(contentHeight.current > parentHeight.current);
  }, "updateScrollable");
  useEffect36(() => {
    scrollBridge.hasScrollableContent = hasScrollableContent;
  }, [hasScrollableContent]);
  const gestureProps = useSheetScrollViewGestures({
    scrollRef,
    scrollBridge,
    hasScrollableContent,
    scrollEnabled,
    setScrollEnabled
  }), contentWrapper = /* @__PURE__ */ jsx62(View21, {
    onLayout: /* @__PURE__ */ __name((e) => {
      const height = Math.floor(e.nativeEvent.layout.height);
      height !== contentHeight.current && (contentHeight.current = height, updateScrollable());
    }, "onLayout"),
    children
  });
  return useRNGHScrollView && RNGHScrollView && panGestureRef ? /* @__PURE__ */ jsx62(RNGHScrollView, {
    ref: composeRefs(scrollRef, ref),
    style: {
      flex: 1
    },
    scrollEventThrottle: 1,
    scrollEnabled,
    simultaneousHandlers: [panGestureRef],
    onLayout: /* @__PURE__ */ __name((e) => {
      parentHeight.current = Math.ceil(e.nativeEvent.layout.height), updateScrollable();
    }, "onLayout"),
    onScroll: /* @__PURE__ */ __name((e) => {
      const {
        y
      } = e.nativeEvent.contentOffset;
      if (currentScrollOffset.current = y, scrollBridge.scrollLockY !== void 0) {
        y !== scrollBridge.scrollLockY && scrollRef.current?.scrollTo?.({
          x: 0,
          y: scrollBridge.scrollLockY,
          animated: false
        }), scrollBridge.y = scrollBridge.scrollLockY, onScroll?.({
          ...e,
          nativeEvent: {
            ...e.nativeEvent,
            contentOffset: {
              ...e.nativeEvent.contentOffset,
              y: scrollBridge.scrollLockY
            }
          }
        });
        return;
      }
      scrollBridge.y = y, y > 0 && (scrollBridge.scrollStartY = -1), onScroll?.(e);
    }, "onScroll"),
    contentContainerStyle: {
      minHeight: "100%"
    },
    bounces: false,
    keyboardShouldPersistTaps: "always",
    keyboardDismissMode: "none",
    ...props,
    children: contentWrapper
  }) : /* @__PURE__ */ jsx62(ScrollView2, {
    onLayout: /* @__PURE__ */ __name((e) => {
      parentHeight.current = Math.ceil(e.nativeEvent.layout.height), updateScrollable();
    }, "onLayout"),
    ref: composeRefs(scrollRef, ref),
    flex: 1,
    scrollEventThrottle: 1,
    className: "_ovs-contain",
    scrollEnabled,
    onScroll: /* @__PURE__ */ __name((e) => {
      const {
        y
      } = e.nativeEvent.contentOffset;
      scrollBridge.y = y, y > 0 && (scrollBridge.scrollStartY = -1), onScroll?.(e);
    }, "onScroll"),
    contentContainerStyle: {
      minHeight: "100%"
    },
    ...gestureProps,
    ...props,
    children: contentWrapper
  });
});

// node_modules/@tamagui/sheet/dist/esm/useSheetOffscreenSize.mjs
var useSheetOffscreenSize = /* @__PURE__ */ __name(({
  snapPoints,
  position: position2,
  screenSize,
  frameSize,
  snapPointsMode
}) => {
  if (snapPointsMode === "fit") return 0;
  if (snapPointsMode === "constant") {
    const maxSize2 = Number(snapPoints[0]), currentSize2 = Number(snapPoints[position2] ?? 0);
    return maxSize2 - currentSize2;
  }
  if (snapPointsMode === "percent") {
    const maxPercentOpened = Number(snapPoints[0]) / 100, percentOpened = Number(snapPoints[position2] ?? 0) / 100;
    return (maxPercentOpened - percentOpened) * screenSize;
  }
  const maxSnapPoint = snapPoints[0];
  if (maxSnapPoint === "fit") return 0;
  const maxSize = typeof maxSnapPoint == "string" ? Number(maxSnapPoint.slice(0, -1)) / 100 * screenSize : maxSnapPoint, currentSnapPoint = snapPoints[position2] ?? 0, currentSize = typeof currentSnapPoint == "string" ? Number(currentSnapPoint.slice(0, -1)) / 100 * screenSize : currentSnapPoint, offscreenSize = maxSize - currentSize;
  return Number.isNaN(offscreenSize) ? 0 : offscreenSize;
}, "useSheetOffscreenSize");

// node_modules/@tamagui/sheet/dist/esm/createSheet.mjs
import { Fragment as Fragment19, jsx as jsx63, jsxs as jsxs13 } from "react/jsx-runtime";
function createSheet2({
  Handle: Handle2,
  Frame: Frame3,
  Overlay: Overlay2
}) {
  const SheetHandle = Handle2.styleable(({
    __scopeSheet,
    ...props
  }, forwardedRef) => {
    const context4 = useSheetContext(SHEET_HANDLE_NAME, __scopeSheet), composedRef = useComposedRefs(context4.handleRef, forwardedRef), wasDraggingRef = useRef42(false);
    return useEffect37(() => {
      if (context4.scrollBridge) return context4.scrollBridge.onParentDragging((isDragging) => {
        isDragging && (wasDraggingRef.current = true);
      });
    }, [context4.scrollBridge]), context4.onlyShowFrame ? null : (
      // @ts-ignore
      /* @__PURE__ */ jsx63(Handle2, {
        ref: composedRef,
        onPressIn: /* @__PURE__ */ __name(() => {
          wasDraggingRef.current = false;
        }, "onPressIn"),
        onPress: /* @__PURE__ */ __name(() => {
          if (wasDraggingRef.current) {
            wasDraggingRef.current = false;
            return;
          }
          const max2 = context4.snapPoints.length + (context4.dismissOnSnapToBottom ? -1 : 0), nextPos = (context4.position + 1) % max2;
          context4.setPosition(nextPos);
        }, "onPress"),
        open: context4.open,
        ...props
      })
    );
  }), SheetOverlay = Overlay2.styleable((propsIn, ref) => {
    const {
      __scopeSheet,
      ...props
    } = propsIn, context4 = useSheetContext(SHEET_OVERLAY_NAME, __scopeSheet), element = useMemo31(() => (
      // @ts-ignore
      /* @__PURE__ */ jsx63(Overlay2, {
        ...props,
        onPress: composeEventHandlers(props.onPress, context4.dismissOnOverlayPress ? () => {
          context4.setOpen(false);
        } : void 0)
      })
    ), [props.onPress, props.opacity, context4.dismissOnOverlayPress]);
    return useIsomorphicLayoutEffect(() => {
      context4.onOverlayComponent?.(element);
    }, [element]), context4.onlyShowFrame, null;
  }), SheetFrame = Frame3.styleable(({
    __scopeSheet,
    adjustPaddingForOffscreenContent,
    disableHideBottomOverflow,
    children,
    ...props
  }, forwardedRef) => {
    const context4 = useSheetContext(SHEET_NAME, __scopeSheet), {
      hasFit,
      disableRemoveScroll,
      frameSize,
      contentRef,
      open: open2
    } = context4, composedContentRef = useComposedRefs(forwardedRef, contentRef), offscreenSize = useSheetOffscreenSize(context4), stableFrameSize = useRef42(frameSize);
    useEffect37(() => {
      open2 && frameSize && (stableFrameSize.current = frameSize);
    }, [open2, frameSize]);
    const sheetContents = useMemo31(() => {
      const shouldUseFixedHeight = hasFit && !open2 && stableFrameSize.current;
      return (
        // @ts-expect-error
        /* @__PURE__ */ jsxs13(Frame3, {
          ref: composedContentRef,
          flex: hasFit && open2 ? 0 : 1,
          flexBasis: hasFit ? "auto" : void 0,
          height: shouldUseFixedHeight ? stableFrameSize.current : hasFit ? void 0 : frameSize,
          pointerEvents: open2 ? "auto" : "none",
          "data-state": open2 ? "open" : "closed",
          ...props,
          children: [/* @__PURE__ */ jsx63(StackZIndexContext, {
            zIndex: resolveViewZIndex(props.zIndex),
            children
          }), adjustPaddingForOffscreenContent && /* @__PURE__ */ jsx63(View22, {
            "data-sheet-offscreen-pad": true,
            height: offscreenSize,
            width: "100%"
          })]
        })
      );
    }, [open2, props, frameSize, offscreenSize, adjustPaddingForOffscreenContent, hasFit]);
    return /* @__PURE__ */ jsxs13(Fragment19, {
      children: [/* @__PURE__ */ jsx63(RemoveScroll, {
        enabled: !disableRemoveScroll && context4.open,
        children: sheetContents
      }), !disableHideBottomOverflow && // @ts-ignore
      /* @__PURE__ */ jsx63(Frame3, {
        ...props,
        componentName: "SheetCover",
        children: null,
        testID: void 0,
        id: void 0,
        position: "absolute",
        bottom: "-100%",
        zIndex: -1,
        height: context4.frameSize,
        left: 0,
        right: 0,
        borderWidth: 0,
        borderRadius: 0,
        shadowOpacity: 0
      })]
    });
  }), Sheet2 = forwardRef19(function(props, ref) {
    const hydrated = useDidFinishSSR2(), {
      isShowingNonSheet
    } = useSheetController();
    let SheetImplementation = SheetImplementationCustom;
    return props.native && Platform_default.OS, isShowingNonSheet || !hydrated ? null : /* @__PURE__ */ jsx63(SheetImplementation, {
      ref,
      ...props
    });
  }), components = {
    Frame: SheetFrame,
    Overlay: SheetOverlay,
    Handle: SheetHandle,
    ScrollView: SheetScrollView
  }, Controlled = withStaticProperties(Sheet2, components);
  return withStaticProperties(Sheet2, {
    ...components,
    Controlled
  });
}
__name(createSheet2, "createSheet");

// node_modules/@tamagui/sheet/dist/esm/Sheet.mjs
var Handle = styled38(XStack, {
  name: SHEET_HANDLE_NAME,
  variants: {
    open: {
      true: {
        opacity: 1,
        pointerEvents: "auto"
      },
      false: {
        opacity: 0,
        pointerEvents: "none"
      }
    },
    unstyled: {
      false: {
        height: 10,
        borderRadius: 100,
        backgroundColor: "$background",
        zIndex: 10,
        marginHorizontal: "35%",
        marginBottom: "$2",
        opacity: 0.5,
        hoverStyle: {
          opacity: 0.7
        }
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var Overlay = styled38(YStack, {
  name: SHEET_OVERLAY_NAME,
  variants: {
    open: {
      true: {
        pointerEvents: "auto"
      },
      false: {
        pointerEvents: "none"
      }
    },
    unstyled: {
      false: {
        fullscreen: true,
        position: "absolute",
        backgroundColor: "$background",
        zIndex: 99999,
        pointerEvents: "auto"
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var Frame2 = styled38(YStack, {
  name: SHEET_NAME,
  variants: {
    unstyled: {
      false: {
        flex: 1,
        backgroundColor: "$background",
        borderTopLeftRadius: "$true",
        borderTopRightRadius: "$true",
        width: "100%",
        maxHeight: "100%",
        overflow: "hidden"
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var Sheet = createSheet2({
  Frame: Frame2,
  Handle,
  Overlay
});

// node_modules/@tamagui/sheet/dist/esm/useSheet.mjs
var useSheet = /* @__PURE__ */ __name(() => useSheetContext("", void 0), "useSheet");

// node_modules/@tamagui/sheet/dist/esm/nativeSheet.mjs
import { useEffect as useEffect38, useRef as useRef43 } from "react";
import { Fragment as Fragment20, jsx as jsx64, jsxs as jsxs14 } from "react/jsx-runtime";
var nativeSheets = {
  ios: null
};
function getNativeSheet(platform2) {
  return nativeSheets[platform2];
}
__name(getNativeSheet, "getNativeSheet");
function setupNativeSheet(platform2, RNIOSModal) {
  const {
    ModalSheetView,
    ModalSheetViewMainContent
  } = RNIOSModal;
  platform2 === "ios" && (nativeSheets[platform2] = (props) => {
    const state5 = useSheetOpenState(props), providerProps = useSheetProviderProps(props, state5), {
      open: open2,
      setOpen
    } = state5, ref = useRef43(void 0);
    useEffect38(() => {
      open2 ? ref.current?.presentModal() : ref.current?.dismissModal();
    }, [open2]);
    function setOpenInternal(next) {
      props.onOpenChange?.(open2), setOpen(next);
    }
    __name(setOpenInternal, "setOpenInternal");
    return /* @__PURE__ */ jsx64(Fragment20, {
      children: /* @__PURE__ */ jsxs14(SheetProvider, {
        setHasScrollView: emptyFn,
        ...providerProps,
        onlyShowFrame: true,
        children: [/* @__PURE__ */ jsx64(ModalSheetView, {
          ref,
          onModalDidDismiss: /* @__PURE__ */ __name(() => setOpenInternal(false), "onModalDidDismiss"),
          children: /* @__PURE__ */ jsx64(ModalSheetViewMainContent, {
            children: /* @__PURE__ */ jsx64(View_default, {
              style: {
                flex: 1
              },
              children: props.children
            })
          })
        }), /* @__PURE__ */ jsx64(YStack, {
          position: "absolute",
          opacity: 0,
          pointerEvents: "none",
          width: 0,
          height: 0,
          children: props.children
        })]
      })
    });
  });
}
__name(setupNativeSheet, "setupNativeSheet");
var emptyFn = /* @__PURE__ */ __name(() => {
}, "emptyFn");

// node_modules/@tamagui/slider/dist/esm/Slider.mjs
import { getTokens as getTokens4, getVariableValue as getVariableValue10, styled as styled40, useConfiguration as useConfiguration3, useCreateShallowSetState as useCreateShallowSetState2 } from "@tamagui/core";
import * as React82 from "react";

// node_modules/@tamagui/slider/dist/esm/constants.mjs
import { createStyledContext as createStyledContext22 } from "@tamagui/core";
var SLIDER_NAME = "Slider";
var SliderContext = createStyledContext22({
  size: "$true",
  min: 0,
  max: 100,
  orientation: "horizontal"
});
var {
  Provider: SliderProvider,
  useStyledContext: useSliderContext
} = SliderContext;
var {
  Provider: SliderOrientationProvider,
  useStyledContext: useSliderOrientationContext
} = createStyledContext22({
  startEdge: "left",
  endEdge: "right",
  sizeProp: "width",
  size: 0,
  direction: 1
});
var PAGE_KEYS = ["PageUp", "PageDown"];
var ARROW_KEYS2 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var BACK_KEYS = {
  ltr: ["ArrowDown", "Home", "ArrowLeft", "PageDown"],
  rtl: ["ArrowDown", "Home", "ArrowRight", "PageDown"]
};

// node_modules/@tamagui/slider/dist/esm/helpers.mjs
function getNextSortedValues(prevValues = [], nextValue, atIndex) {
  const nextValues = [...prevValues];
  return nextValues[atIndex] = nextValue, nextValues.sort((a, b) => a - b);
}
__name(getNextSortedValues, "getNextSortedValues");
function convertValueToPercentage(value, min2, max2) {
  return 100 / (max2 - min2) * (value - min2);
}
__name(convertValueToPercentage, "convertValueToPercentage");
function getLabel(index2, totalValues) {
  if (totalValues > 2) return `Value ${index2 + 1} of ${totalValues}`;
  if (totalValues === 2) return ["Minimum", "Maximum"][index2];
}
__name(getLabel, "getLabel");
function getClosestValueIndex(values, nextValue) {
  if (values.length === 1) return 0;
  const distances = values.map((value) => Math.abs(value - nextValue)), closestDistance = Math.min(...distances);
  return distances.indexOf(closestDistance);
}
__name(getClosestValueIndex, "getClosestValueIndex");
function getThumbInBoundsOffset(width, left2, direction) {
  const quarterWidth = width / 4, offset4 = linearScale([0, 50], [0, quarterWidth]);
  return (quarterWidth - offset4(left2)) * direction;
}
__name(getThumbInBoundsOffset, "getThumbInBoundsOffset");
function getStepsBetweenValues(values) {
  return values.slice(0, -1).map((value, index2) => values[index2 + 1] - value);
}
__name(getStepsBetweenValues, "getStepsBetweenValues");
function hasMinStepsBetweenValues(values, minStepsBetweenValues) {
  if (minStepsBetweenValues > 0) {
    const stepsBetweenValues = getStepsBetweenValues(values);
    return Math.min(...stepsBetweenValues) >= minStepsBetweenValues;
  }
  return true;
}
__name(hasMinStepsBetweenValues, "hasMinStepsBetweenValues");
function linearScale(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1]) return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}
__name(linearScale, "linearScale");
function getDecimalCount(value) {
  return (String(value).split(".")[1] || "").length;
}
__name(getDecimalCount, "getDecimalCount");
function roundValue(value, decimalCount) {
  const rounder = 10 ** decimalCount;
  return Math.round(value * rounder) / rounder;
}
__name(roundValue, "roundValue");

// node_modules/@tamagui/slider/dist/esm/SliderImpl.mjs
import { getVariableValue as getVariableValue9, styled as styled39 } from "@tamagui/core";
import * as React81 from "react";
import { jsx as jsx65 } from "react/jsx-runtime";
var SliderFrame = styled39(YStack, {
  position: "relative",
  variants: {
    orientation: {
      horizontal: {},
      vertical: {}
    },
    size: /* @__PURE__ */ __name((val, extras) => {
      if (!val) return;
      const orientation = extras.props.orientation, size4 = Math.round(getVariableValue9(getSize(val)) / 6);
      return orientation === "horizontal" ? {
        height: size4,
        borderRadius: size4,
        justifyContent: "center"
      } : {
        width: size4,
        borderRadius: size4,
        alignItems: "center"
      };
    }, "size")
  }
});
var SliderImpl = React81.forwardRef((props, forwardedRef) => {
  const {
    __scopeSlider,
    onSlideStart,
    onSlideMove,
    onSlideEnd,
    onHomeKeyDown,
    onEndKeyDown,
    onStepKeyDown,
    children,
    ...sliderProps
  } = props, context4 = useSliderContext(__scopeSlider), handleResponderGrant = React81.useCallback((event) => {
    props.onResponderGrant?.(event);
    const target = event.target, thumbIndex = context4.thumbs.get(target), isStartingOnThumb = thumbIndex !== void 0;
    isWeb && target instanceof HTMLElement && context4.thumbs.has(target) && target.focus(), !isWeb && isStartingOnThumb && (context4.valueIndexToChangeRef.current = thumbIndex), onSlideStart(event, isStartingOnThumb ? "thumb" : "track");
  }, [context4, onSlideStart, props.onResponderGrant]), handleResponderMove = React81.useCallback((event) => {
    props.onResponderMove?.(event), event.stopPropagation(), onSlideMove(event);
  }, [onSlideMove, props.onResponderMove]), handleResponderRelease = React81.useCallback((event) => {
    props.onResponderRelease?.(event), onSlideEnd(event);
  }, [onSlideEnd, props.onResponderRelease]);
  return (
    // wrap with plain RN View for responder events - tamagui views no longer handle responder events on web
    /* @__PURE__ */ jsx65(SliderFrame, {
      size: "$4",
      ref: forwardedRef,
      ...sliderProps,
      "data-orientation": sliderProps.orientation,
      ...isWeb && {
        onKeyDown: /* @__PURE__ */ __name((event) => {
          event.key === "Home" ? (onHomeKeyDown(event), event.preventDefault()) : event.key === "End" ? (onEndKeyDown(event), event.preventDefault()) : PAGE_KEYS.concat(ARROW_KEYS2).includes(event.key) && (onStepKeyDown(event), event.preventDefault());
        }, "onKeyDown")
      },
      children: /* @__PURE__ */ jsx65(View_default, {
        onMoveShouldSetResponderCapture: /* @__PURE__ */ __name(() => true, "onMoveShouldSetResponderCapture"),
        onMoveShouldSetResponder: /* @__PURE__ */ __name(() => true, "onMoveShouldSetResponder"),
        onStartShouldSetResponder: /* @__PURE__ */ __name(() => true, "onStartShouldSetResponder"),
        onResponderTerminationRequest: /* @__PURE__ */ __name(() => false, "onResponderTerminationRequest"),
        onResponderGrant: handleResponderGrant,
        onResponderMove: handleResponderMove,
        onResponderRelease: handleResponderRelease,
        style: {
          inset: 0,
          position: "absolute"
        },
        children
      })
    })
  );
});

// node_modules/@tamagui/slider/dist/esm/Slider.mjs
import { jsx as jsx66 } from "react/jsx-runtime";
var activeSliderMeasureListeners = /* @__PURE__ */ new Set();
process.env.TAMAGUI_DISABLE_SLIDER_INTERVAL || setInterval?.(
  () => {
    activeSliderMeasureListeners.forEach((cb) => cb());
  },
  // really doesn't need to be super often
  1e3
);
var SliderHorizontal = React82.forwardRef((props, forwardedRef) => {
  const {
    min: min2,
    max: max2,
    dir,
    onSlideStart,
    onSlideMove,
    onStepKeyDown,
    onSlideEnd,
    ...sliderProps
  } = props, direction = useDirection(dir), isDirectionLTR = direction === "ltr", sliderRef = React82.useRef(null), [state5, setState_] = React82.useState(() => ({
    size: 0,
    offset: 0
  })), setState = useCreateShallowSetState2(setState_);
  function getValueFromPointer(pointerPosition) {
    const input = [0, state5.size];
    return linearScale(input, isDirectionLTR ? [min2, max2] : [max2, min2])(pointerPosition);
  }
  __name(getValueFromPointer, "getValueFromPointer");
  const measure = /* @__PURE__ */ __name(() => {
    sliderRef.current?.measure((_x, _y, width, _height, pageX, _pageY) => {
      setState({
        size: width,
        offset: pageX
      });
    });
  }, "measure");
  return useSliderMeasure(sliderRef, measure), /* @__PURE__ */ jsx66(SliderOrientationProvider, {
    scope: props.__scopeSlider,
    startEdge: isDirectionLTR ? "left" : "right",
    endEdge: isDirectionLTR ? "right" : "left",
    direction: isDirectionLTR ? 1 : -1,
    sizeProp: "width",
    size: state5.size,
    children: /* @__PURE__ */ jsx66(SliderImpl, {
      ref: composeRefs(forwardedRef, sliderRef),
      dir: direction,
      ...sliderProps,
      orientation: "horizontal",
      onLayout: measure,
      onSlideStart: /* @__PURE__ */ __name((event, target) => {
        const value = getValueFromPointer(event.nativeEvent.locationX);
        value && onSlideStart?.(value, target, event);
      }, "onSlideStart"),
      onSlideMove: /* @__PURE__ */ __name((event) => {
        const value = getValueFromPointer(event.nativeEvent.pageX - state5.offset);
        value && onSlideMove?.(value, event);
      }, "onSlideMove"),
      onSlideEnd: /* @__PURE__ */ __name((event) => {
        const value = getValueFromPointer(event.nativeEvent.pageX - state5.offset);
        value && onSlideEnd?.(event, value);
      }, "onSlideEnd"),
      onStepKeyDown: /* @__PURE__ */ __name((event) => {
        const isBackKey = BACK_KEYS[direction].includes(event.key);
        onStepKeyDown?.({
          event,
          direction: isBackKey ? -1 : 1
        });
      }, "onStepKeyDown")
    })
  });
});
function useOnDebouncedWindowResize(callback, amt = 200) {
  React82.useEffect(() => {
    let last;
    const onResize = /* @__PURE__ */ __name(() => {
      clearTimeout(last), last = setTimeout(callback, amt);
    }, "onResize");
    return window.addEventListener("resize", onResize), () => {
      clearTimeout(last), window.removeEventListener("resize", onResize);
    };
  }, []);
}
__name(useOnDebouncedWindowResize, "useOnDebouncedWindowResize");
function useSliderMeasure(sliderRef, measure) {
  useOnDebouncedWindowResize(measure), React82.useEffect(() => {
    const node = sliderRef.current;
    if (!node) return;
    let measureTm;
    const debouncedMeasure = /* @__PURE__ */ __name(() => {
      clearTimeout(measureTm), measureTm = setTimeout(() => {
        measure();
      }, 200);
    }, "debouncedMeasure"), io = new IntersectionObserver((entries) => {
      debouncedMeasure(), entries?.[0].isIntersecting ? activeSliderMeasureListeners.add(debouncedMeasure) : activeSliderMeasureListeners.delete(debouncedMeasure);
    }, {
      root: null,
      rootMargin: "0px",
      threshold: [0, 0.5, 1]
    });
    return io.observe(node), () => {
      activeSliderMeasureListeners.delete(debouncedMeasure), io.disconnect();
    };
  }, []);
}
__name(useSliderMeasure, "useSliderMeasure");
var SliderVertical = React82.forwardRef((props, forwardedRef) => {
  const {
    min: min2,
    max: max2,
    onSlideStart,
    onSlideMove,
    onStepKeyDown,
    onSlideEnd,
    ...sliderProps
  } = props, [state5, setState_] = React82.useState(() => ({
    size: 0,
    offset: 0
  })), setState = useCreateShallowSetState2(setState_), sliderRef = React82.useRef(null), configuration = useConfiguration3(), insets = isIos && configuration.insets ? configuration.insets : {
    top: 0,
    bottom: 0
  };
  function getValueFromPointer(pointerPosition) {
    const input = [0, state5.size];
    return linearScale(input, [max2, min2])(pointerPosition);
  }
  __name(getValueFromPointer, "getValueFromPointer");
  const measure = /* @__PURE__ */ __name(() => {
    sliderRef.current?.measure((_x, _y, _width, height, _pageX, pageY) => {
      setState({
        size: height,
        offset: pageY + (isIos ? insets.top : 0)
      });
    });
  }, "measure");
  return useSliderMeasure(sliderRef, measure), /* @__PURE__ */ jsx66(SliderOrientationProvider, {
    scope: props.__scopeSlider,
    startEdge: "bottom",
    endEdge: "top",
    sizeProp: "height",
    size: state5.size,
    direction: 1,
    children: /* @__PURE__ */ jsx66(SliderImpl, {
      ref: composeRefs(forwardedRef, sliderRef),
      ...sliderProps,
      orientation: "vertical",
      onLayout: measure,
      onSlideStart: /* @__PURE__ */ __name((event, target) => {
        const value = getValueFromPointer(event.nativeEvent.locationY);
        value && onSlideStart?.(value, target, event);
      }, "onSlideStart"),
      onSlideMove: /* @__PURE__ */ __name((event) => {
        const value = getValueFromPointer(event.nativeEvent.pageY - state5.offset);
        value && onSlideMove?.(value, event);
      }, "onSlideMove"),
      onSlideEnd: /* @__PURE__ */ __name((event) => {
        const value = getValueFromPointer(event.nativeEvent.pageY - state5.offset);
        onSlideEnd?.(event, value);
      }, "onSlideEnd"),
      onStepKeyDown: /* @__PURE__ */ __name((event) => {
        const isBackKey = BACK_KEYS.ltr.includes(event.key);
        onStepKeyDown?.({
          event,
          direction: isBackKey ? -1 : 1
        });
      }, "onStepKeyDown")
    })
  });
});
var SliderTrackFrame = styled40(SliderFrame, {
  name: "Slider",
  variants: {
    unstyled: {
      false: {
        height: "100%",
        width: "100%",
        backgroundColor: "$background",
        position: "relative",
        borderRadius: 1e5,
        overflow: "hidden"
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var SliderTrack = React82.forwardRef(function(props, forwardedRef) {
  const {
    __scopeSlider,
    ...trackProps
  } = props, context4 = useSliderContext(__scopeSlider);
  return /* @__PURE__ */ jsx66(SliderTrackFrame, {
    "data-disabled": context4.disabled ? "" : void 0,
    "data-orientation": context4.orientation,
    orientation: context4.orientation,
    size: context4.size,
    ...trackProps,
    ref: forwardedRef
  });
});
var SliderActiveFrame = styled40(SliderFrame, {
  name: "SliderActive",
  position: "absolute",
  pointerEvents: "box-none",
  variants: {
    unstyled: {
      false: {
        backgroundColor: "$background",
        borderRadius: 1e5
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var SliderActive = React82.forwardRef(function(props, forwardedRef) {
  const {
    __scopeSlider,
    ...rangeProps
  } = props, context4 = useSliderContext(__scopeSlider), orientation = useSliderOrientationContext(__scopeSlider), ref = React82.useRef(null), composedRefs = useComposedRefs(forwardedRef, ref), valuesCount = context4.values.length, percentages = context4.values.map((value) => convertValueToPercentage(value, context4.min, context4.max)), offsetStart = valuesCount > 1 ? Math.min(...percentages) : 0, offsetEnd = 100 - Math.max(...percentages);
  return /* @__PURE__ */ jsx66(SliderActiveFrame, {
    orientation: context4.orientation,
    "data-orientation": context4.orientation,
    "data-disabled": context4.disabled ? "" : void 0,
    size: context4.size,
    animateOnly: ["left", "top", "right", "bottom"],
    ...rangeProps,
    ref: composedRefs,
    [orientation.startEdge]: `${offsetStart}%`,
    [orientation.endEdge]: `${offsetEnd}%`,
    ...orientation.sizeProp === "width" ? {
      height: "100%"
    } : {
      left: 0,
      right: 0
    }
  });
});
var getThumbSize = /* @__PURE__ */ __name((val) => {
  const tokens = getTokens4(), size4 = typeof val == "number" ? val : getSize(tokens.size[val], {
    shift: -1
  });
  return {
    width: size4,
    height: size4,
    minWidth: size4,
    minHeight: size4
  };
}, "getThumbSize");
var SliderThumbFrame = styled40(ThemeableStack, {
  name: "SliderThumb",
  variants: {
    size: {
      "...size": getThumbSize,
      ":number": getThumbSize
    },
    unstyled: {
      false: {
        position: "absolute",
        borderWidth: 2,
        borderColor: "$borderColor",
        backgroundColor: "$background",
        pressStyle: {
          backgroundColor: "$backgroundPress",
          borderColor: "$borderColorPress"
        },
        hoverStyle: {
          backgroundColor: "$backgroundHover",
          borderColor: "$borderColorHover"
        },
        focusVisibleStyle: {
          outlineStyle: "solid",
          outlineWidth: 2,
          outlineColor: "$outlineColor"
        }
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var SliderThumb = SliderThumbFrame.styleable(function(props, forwardedRef) {
  const {
    __scopeSlider,
    index: index2 = 0,
    circular: circular2,
    size: sizeProp,
    ...thumbProps
  } = props, context4 = useSliderContext(__scopeSlider), orientation = useSliderOrientationContext(__scopeSlider), [thumb, setThumb] = React82.useState(null), composedRefs = useComposedRefs(forwardedRef, setThumb), value = context4.values[index2], percent = value === void 0 ? 0 : convertValueToPercentage(value, context4.min, context4.max), label = getLabel(index2, context4.values.length), sizeIn = sizeProp ?? context4.size ?? "$true", [size4, setSize] = React82.useState(() => getVariableValue10(getThumbSize(sizeIn).width)), thumbInBoundsOffset = size4 ? getThumbInBoundsOffset(size4, percent, orientation.direction) : 0;
  React82.useEffect(() => {
    if (thumb) return context4.thumbs.set(thumb, index2), () => {
      context4.thumbs.delete(thumb);
    };
  }, [thumb, context4.thumbs, index2]);
  const positionalStyles = context4.orientation === "horizontal" ? {
    x: (thumbInBoundsOffset - size4 / 2) * orientation.direction,
    y: -size4 / 2,
    top: "50%",
    ...size4 === 0 && {
      top: "auto",
      bottom: "auto"
    }
  } : {
    x: -size4 / 2,
    y: size4 / 2,
    left: "50%",
    ...size4 === 0 && {
      left: "auto",
      right: "auto"
    }
  };
  return /* @__PURE__ */ jsx66(SliderThumbFrame, {
    ref: composedRefs,
    role: "slider",
    "aria-label": props["aria-label"] || label,
    "aria-valuemin": context4.min,
    "aria-valuenow": value,
    "aria-valuemax": context4.max,
    "aria-orientation": context4.orientation,
    "data-orientation": context4.orientation,
    "data-disabled": context4.disabled ? "" : void 0,
    tabIndex: context4.disabled ? void 0 : 0,
    animateOnly: ["transform", "left", "top", "right", "bottom"],
    ...positionalStyles,
    [orientation.startEdge]: `${percent}%`,
    size: sizeIn,
    circular: circular2,
    ...thumbProps,
    onLayout: /* @__PURE__ */ __name((e) => {
      setSize(e.nativeEvent.layout[orientation.sizeProp]);
    }, "onLayout"),
    onFocus: composeEventHandlers(props.onFocus, () => {
      context4.valueIndexToChangeRef.current = index2;
    })
  });
}, {
  staticConfig: {
    memo: true
  }
});
var SliderComponent = React82.forwardRef((props, forwardedRef) => {
  const {
    name,
    min: min2 = 0,
    max: max2 = 100,
    step = 1,
    orientation = "horizontal",
    disabled = false,
    minStepsBetweenThumbs = 0,
    defaultValue: defaultValue2 = [min2],
    value,
    onValueChange = /* @__PURE__ */ __name(() => {
    }, "onValueChange"),
    size: sizeProp,
    onSlideEnd,
    onSlideMove,
    onSlideStart,
    ...sliderProps
  } = props, sliderRef = React82.useRef(null), composedRefs = useComposedRefs(sliderRef, forwardedRef), thumbRefs = React82.useRef(/* @__PURE__ */ new Map()), valueIndexToChangeRef = React82.useRef(0), isHorizontal = orientation === "horizontal", [values = [], setValues] = useControllableState({
    prop: value,
    defaultProp: defaultValue2,
    transition: true,
    onChange: /* @__PURE__ */ __name((value2) => {
      updateThumbFocus(valueIndexToChangeRef.current), onValueChange(value2);
    }, "onChange")
  });
  isWeb && React82.useEffect(() => {
    const node = sliderRef.current;
    if (!node) return;
    const preventDefault = /* @__PURE__ */ __name((e) => {
      e.preventDefault();
    }, "preventDefault");
    return node.addEventListener("touchstart", preventDefault), () => {
      node.removeEventListener("touchstart", preventDefault);
    };
  }, []);
  function updateThumbFocus(focusIndex) {
    if (isWeb) {
      for (const [node, index2] of thumbRefs.current.entries()) if (index2 === focusIndex) {
        node.focus();
        return;
      }
    }
  }
  __name(updateThumbFocus, "updateThumbFocus");
  function handleSlideMove(value2, event) {
    updateValues(value2, valueIndexToChangeRef.current), onSlideMove?.(event, value2);
  }
  __name(handleSlideMove, "handleSlideMove");
  function updateValues(value2, atIndex) {
    const decimalCount = getDecimalCount(step), snapToStep = roundValue(Math.round((value2 - min2) / step) * step + min2, decimalCount), nextValue = clamp(snapToStep, [min2, max2]);
    setValues((prevValues = []) => {
      const nextValues = getNextSortedValues(prevValues, nextValue, atIndex);
      return hasMinStepsBetweenValues(nextValues, minStepsBetweenThumbs * step) ? (valueIndexToChangeRef.current = nextValues.indexOf(nextValue), String(nextValues) === String(prevValues) ? prevValues : nextValues) : prevValues;
    });
  }
  __name(updateValues, "updateValues");
  const SliderOriented = isHorizontal ? SliderHorizontal : SliderVertical;
  return /* @__PURE__ */ jsx66(SliderProvider, {
    scope: props.__scopeSlider,
    disabled,
    min: min2,
    max: max2,
    valueIndexToChangeRef,
    thumbs: thumbRefs.current,
    values,
    orientation,
    size: sizeProp,
    children: /* @__PURE__ */ jsx66(SliderOriented, {
      "aria-disabled": disabled,
      "data-disabled": disabled ? "" : void 0,
      ...sliderProps,
      ref: composedRefs,
      min: min2,
      max: max2,
      onSlideEnd,
      onSlideStart: disabled ? void 0 : (value2, target, event) => {
        if (target !== "thumb") {
          const closestIndex = getClosestValueIndex(values, value2);
          updateValues(value2, closestIndex);
        }
        onSlideStart?.(event, value2, target);
      },
      onSlideMove: disabled ? void 0 : handleSlideMove,
      onHomeKeyDown: /* @__PURE__ */ __name(() => !disabled && updateValues(min2, 0), "onHomeKeyDown"),
      onEndKeyDown: /* @__PURE__ */ __name(() => !disabled && updateValues(max2, values.length - 1), "onEndKeyDown"),
      onStepKeyDown: /* @__PURE__ */ __name(({
        event,
        direction: stepDirection
      }) => {
        if (!disabled) {
          const multiplier = PAGE_KEYS.includes(event.key) || event.shiftKey && ARROW_KEYS2.includes(event.key) ? 10 : 1, atIndex = valueIndexToChangeRef.current, value2 = values[atIndex], stepInDirection = step * multiplier * stepDirection;
          updateValues(value2 + stepInDirection, atIndex);
        }
      }, "onStepKeyDown")
    })
  });
});
var Slider = withStaticProperties(SliderComponent, {
  Track: SliderTrack,
  TrackActive: SliderActive,
  Thumb: SliderThumb
});
Slider.displayName = SLIDER_NAME;
var Track = SliderTrack;
var Range = SliderActive;
var Thumb = SliderThumb;

// node_modules/@tamagui/switch/dist/esm/createSwitch.mjs
import { composeEventHandlers as composeEventHandlers6, getVariableValue as getVariableValue12, isWeb as isWeb12, View as View23, withStaticProperties as withStaticProperties12 } from "@tamagui/core";

// node_modules/@tamagui/switch-headless/dist/esm/useSwitch.mjs
import * as React83 from "react";
import { jsx as jsx67 } from "react/jsx-runtime";
function getState7(checked) {
  return checked ? "checked" : "unchecked";
}
__name(getState7, "getState");
var BubbleInput3 = /* @__PURE__ */ __name((props) => {
  const {
    control,
    checked,
    bubbles = true,
    ...inputProps
  } = props, ref = React83.useRef(null), prevChecked = usePrevious(checked);
  return React83.useEffect(() => {
    const input = ref.current, inputProto = window.HTMLInputElement.prototype, setChecked = Object.getOwnPropertyDescriptor(inputProto, "checked").set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", {
        bubbles
      });
      setChecked.call(input, checked), input.dispatchEvent(event);
    }
  }, [prevChecked, checked, bubbles]), // @ts-ignore
  /* @__PURE__ */ jsx67("input", {
    type: "checkbox",
    "aria-hidden": true,
    defaultChecked: checked,
    ...inputProps,
    tabIndex: -1,
    ref,
    style: {
      ...props.style,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  });
}, "BubbleInput");
function useSwitch(props, [checked, setChecked], ref) {
  {
    const {
      disabled,
      name,
      value,
      required
    } = props, hasConsumerStoppedPropagationRef = React83.useRef(false), [button, setButton] = React83.useState(null), composedRefs = useComposedRefs(ref, setButton), isFormControl = isWeb ? button ? !!button.closest("form") : true : false, labelId = useLabelContext(button), ariaLabelledBy = props["aria-labelledby"] || props.labeledBy || labelId;
    return {
      switchProps: {
        role: "switch",
        "aria-checked": checked,
        ...isWeb ? {
          tabIndex: disabled ? void 0 : 0,
          "data-state": getState7(checked),
          "data-disabled": disabled ? "" : void 0,
          disabled
        } : {},
        "aria-labelledby": ariaLabelledBy,
        onPress: composeEventHandlers(props.onPress, (event) => {
          setChecked((prevChecked) => !prevChecked), isWeb && isFormControl && (hasConsumerStoppedPropagationRef.current = event.isPropagationStopped(), hasConsumerStoppedPropagationRef.current || event.stopPropagation());
        })
      },
      switchRef: composedRefs,
      /**
       * insert as a sibling of your switch (should not be inside the switch)
       */
      bubbleInput: isWeb && isFormControl ? /* @__PURE__ */ jsx67(BubbleInput3, {
        control: button,
        bubbles: !hasConsumerStoppedPropagationRef.current,
        name,
        value,
        checked,
        required,
        disabled,
        style: {
          transform: "translateX(-100%)"
        }
      }) : null
    };
  }
}
__name(useSwitch, "useSwitch");

// node_modules/@tamagui/switch/dist/esm/createSwitch.mjs
import * as React84 from "react";

// node_modules/@tamagui/switch/dist/esm/StyledContext.mjs
import { createStyledContext as createStyledContext23 } from "@tamagui/core";
var SwitchStyledContext = createStyledContext23({
  active: false,
  disabled: false,
  frameWidth: void 0,
  size: void 0,
  unstyled: process.env.TAMAGUI_HEADLESS === "1"
});

// node_modules/@tamagui/switch/dist/esm/Switch.mjs
import { getVariableValue as getVariableValue11, styled as styled41 } from "@tamagui/core";
var SwitchThumb = styled41(YStack, {
  name: "SwitchThumb",
  variants: {
    unstyled: {
      false: {
        size: "$true",
        backgroundColor: "$background",
        borderRadius: 1e3
      }
    },
    size: {
      "...size": /* @__PURE__ */ __name((val) => {
        const size4 = getSwitchHeight(val);
        return {
          height: size4,
          width: size4
        };
      }, "...size")
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
}, {
  accept: {
    activeStyle: "style"
  }
});
var getSwitchHeight = /* @__PURE__ */ __name((val) => Math.round(getVariableValue11(getSize(val)) * 0.65), "getSwitchHeight");
var getSwitchWidth = /* @__PURE__ */ __name((val) => getSwitchHeight(val) * 2, "getSwitchWidth");
var SwitchFrame = styled41(YStack, {
  name: "Switch",
  render: "button",
  tabIndex: 0,
  variants: {
    unstyled: {
      false: {
        borderRadius: 1e3,
        backgroundColor: "$background",
        focusVisibleStyle: {
          outlineColor: "$outlineColor",
          outlineStyle: "solid",
          outlineWidth: 2
        }
      }
    },
    size: {
      "...size": /* @__PURE__ */ __name((val, {
        props
      }) => {
        if (props.unstyled) return;
        const height = getSwitchHeight(val), width = getSwitchWidth(val);
        return {
          height,
          minHeight: height,
          width
        };
      }, "...size")
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
}, {
  accept: {
    activeStyle: "style"
  }
});

// node_modules/@tamagui/switch/dist/esm/useSwitchNative.mjs
function useSwitchNative(_props) {
  return null;
}
__name(useSwitchNative, "useSwitchNative");

// node_modules/@tamagui/switch/dist/esm/createSwitch.mjs
import { Fragment as Fragment21, jsx as jsx68, jsxs as jsxs15 } from "react/jsx-runtime";
function createSwitch(createProps) {
  const {
    Frame: Frame3 = SwitchFrame,
    Thumb: Thumb2 = SwitchThumb
  } = createProps;
  process.env.NODE_ENV === "development" && (Frame3 !== SwitchFrame && Frame3.staticConfig.context && Frame3.staticConfig.context !== SwitchStyledContext || Thumb2 !== SwitchThumb && Thumb2.staticConfig.context && Thumb2.staticConfig.context !== SwitchStyledContext) && console.warn("Warning: createSwitch() needs to control context to pass checked state from Frame to Thumb, any custom context passed will be overridden."), Frame3.staticConfig.context = SwitchStyledContext, Thumb2.staticConfig.context = SwitchStyledContext;
  const SwitchThumbComponent = Thumb2.styleable(function(props, forwardedRef) {
    const {
      size: sizeProp,
      unstyled: unstyledProp,
      activeStyle,
      ...thumbProps
    } = props, styledContext = SwitchStyledContext.useStyledContext(), {
      unstyled: unstyledContext,
      size: sizeContext,
      active,
      disabled,
      frameWidth = 0
    } = styledContext, unstyled = process.env.TAMAGUI_HEADLESS === "1" ? true : unstyledProp ?? unstyledContext ?? false, size4 = sizeProp ?? sizeContext ?? "$true", initialChecked = React84.useRef(active).current, initialWidth = getVariableValue12(props.width || size4, "size"), [thumbWidth, setThumbWidth] = React84.useState(typeof initialWidth == "number" ? initialWidth : 0), distance = frameWidth - thumbWidth, x = initialChecked ? active ? 0 : -distance : active ? distance : 0;
    return /* @__PURE__ */ jsx68(Thumb2, {
      ref: forwardedRef,
      unstyled,
      ...unstyled === false && {
        size: size4
      },
      alignSelf: initialChecked ? "flex-end" : "flex-start",
      x,
      onLayout: composeEventHandlers6(props.onLayout, (e) => {
        const next = e.nativeEvent.layout.width;
        setThumbWidth(next);
      }),
      disabled,
      ...thumbProps,
      ...active && activeStyle
    });
  }), SwitchComponent = Frame3.styleable(function(_props, forwardedRef) {
    const {
      native,
      nativeProps,
      checked: checkedProp,
      defaultChecked,
      onCheckedChange,
      activeStyle,
      unstyled: unstyledProp,
      activeTheme: activeThemeProp,
      ...props
    } = _props, [checked, setChecked] = useControllableState({
      prop: checkedProp,
      defaultProp: defaultChecked || false,
      onChange: onCheckedChange,
      transition: true
    }), styledContext = React84.useContext(SwitchStyledContext.context), [frameWidth, setFrameInnerWidth] = React84.useState(0), {
      switchProps,
      bubbleInput,
      switchRef
    } = useSwitch(
      props,
      [checked, setChecked],
      // @ts-ignore TODO tamagui react 19 type error
      forwardedRef
    ), nativeSwitch = useSwitchNative({
      id: props.id,
      disabled: props.disabled,
      native,
      nativeProps,
      checked,
      setChecked
    });
    if (nativeSwitch) return nativeSwitch;
    const disabled = props.disabled, handleLayout = /* @__PURE__ */ __name((e) => {
      const next = e.nativeEvent.layout.width;
      next !== frameWidth && setFrameInnerWidth(next);
    }, "handleLayout"), unstyled = styledContext.unstyled ?? unstyledProp ?? false;
    return /* @__PURE__ */ jsxs15(Fragment21, {
      children: [/* @__PURE__ */ jsx68(SwitchStyledContext.Provider, {
        size: styledContext.size ?? props.size ?? "$true",
        unstyled,
        active: checked,
        disabled,
        frameWidth,
        children: /* @__PURE__ */ jsx68(Frame3, {
          ref: switchRef,
          render: "button",
          theme: activeThemeProp ?? null,
          ...isWeb12 && {
            type: "button"
          },
          ...!unstyled && {
            size: styledContext.size ?? props.size ?? "$true"
          },
          unstyled,
          ...props,
          ...switchProps,
          disabled,
          ...checked && {
            ...!unstyled && !activeStyle && {
              backgroundColor: "$backgroundActive"
            },
            ...activeStyle
          },
          children: /* @__PURE__ */ jsx68(View23, {
            alignSelf: "stretch",
            flex: 1,
            onLayout: handleLayout,
            children: props.children
          })
        })
      }), bubbleInput]
    });
  }, {
    disableTheme: true
  });
  return withStaticProperties12(SwitchComponent, {
    Thumb: SwitchThumbComponent
  });
}
__name(createSwitch, "createSwitch");

// node_modules/@tamagui/switch/dist/esm/index.mjs
var Switch = createSwitch({
  Frame: SwitchFrame,
  Thumb: SwitchThumb
});

// node_modules/@tamagui/sizable-context/dist/esm/index.mjs
import { createStyledContext as createStyledContext24 } from "@tamagui/core";
var SizableContext = createStyledContext24({
  size: void 0
});

// node_modules/@tamagui/tabs/dist/esm/createTabs.mjs
import { useEvent as useEvent9 } from "@tamagui/web";
import * as React85 from "react";

// node_modules/@tamagui/tabs/dist/esm/StyledContext.mjs
import { createStyledContext as createStyledContext25 } from "@tamagui/core";
var {
  Provider: TabsProvider,
  useStyledContext: useTabsContext
} = createStyledContext25();

// node_modules/@tamagui/tabs/dist/esm/Tabs.mjs
import { styled as styled42, View as View24 } from "@tamagui/core";
var TABS_NAME = "Tabs";
var DefaultTabsFrame = styled42(SizableStack, {
  name: TABS_NAME
});
var TRIGGER_NAME4 = "TabsTrigger";
var DefaultTabsTabFrame = styled42(View24, {
  name: TRIGGER_NAME4,
  role: "tab",
  variants: {
    size: {
      "...size": getButtonSized
    },
    disabled: {
      true: {
        pointerEvents: "none"
      }
    },
    unstyled: {
      false: {
        borderWidth: 0,
        backgroundColor: "$background",
        userSelect: "none",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexDirection: "row",
        cursor: "pointer",
        pressStyle: {
          backgroundColor: "$backgroundPress"
        },
        focusVisibleStyle: {
          outlineColor: "$outlineColor",
          outlineWidth: 2,
          outlineStyle: "solid",
          zIndex: 10
        }
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
}, {
  accept: {
    activeStyle: "style"
  }
});
var CONTENT_NAME4 = "TabsContent";
var DefaultTabsContentFrame = styled42(ThemeableStack, {
  name: CONTENT_NAME4
});

// node_modules/@tamagui/tabs/dist/esm/createTabs.mjs
import { jsx as jsx69 } from "react/jsx-runtime";
function createTabs(createProps) {
  const {
    ContentFrame = DefaultTabsContentFrame,
    TabFrame = DefaultTabsTabFrame,
    TabsFrame = DefaultTabsFrame
  } = createProps, TABS_CONTEXT = "TabsContext", TAB_LIST_NAME = "TabsList", TabsList = React85.forwardRef((props, forwardedRef) => {
    const {
      __scopeTabs,
      loop = true,
      children,
      ...listProps
    } = props, context4 = useTabsContext(__scopeTabs);
    return /* @__PURE__ */ jsx69(RovingFocusGroup, {
      __scopeRovingFocusGroup: __scopeTabs || TABS_CONTEXT,
      orientation: context4.orientation,
      dir: context4.dir,
      loop,
      asChild: true,
      children: /* @__PURE__ */ jsx69(Group, {
        role: "tablist",
        componentName: TAB_LIST_NAME,
        "aria-orientation": context4.orientation,
        ref: forwardedRef,
        orientation: context4.orientation,
        ...listProps,
        children
      })
    });
  });
  TabsList.displayName = TAB_LIST_NAME;
  const TRIGGER_NAME5 = "TabsTrigger", TabsTrigger = TabFrame.styleable((props, forwardedRef) => {
    const {
      __scopeTabs,
      value,
      disabled = false,
      onInteraction,
      activeStyle,
      activeTheme,
      unstyled = false,
      ...triggerProps
    } = props, context4 = useTabsContext(__scopeTabs), triggerId = makeTriggerId(context4.baseId, value), contentId = makeContentId(context4.baseId, value), isSelected = value === context4.value, [layout, setLayout] = React85.useState(null), triggerRef = React85.useRef(null), groupItemProps = useGroupItem({
      disabled: !!disabled
    });
    return React85.useEffect(() => (context4.registerTrigger(), () => context4.unregisterTrigger()), []), React85.useEffect(() => {
      if (!triggerRef.current || !isWeb) return;
      const el = triggerRef.current;
      function getTriggerSize() {
        el && setLayout({
          width: el.offsetWidth,
          height: el.offsetHeight,
          x: el.offsetLeft,
          y: el.offsetTop
        });
      }
      __name(getTriggerSize, "getTriggerSize");
      getTriggerSize();
      const observer = new ResizeObserver(getTriggerSize);
      return observer.observe(el), () => {
        observer.unobserve(el);
      };
    }, [context4.triggersCount]), React85.useEffect(() => {
      isSelected && layout && onInteraction?.("select", layout);
    }, [isSelected, value, layout]), /* @__PURE__ */ jsx69(RovingFocusGroup.Item, {
      __scopeRovingFocusGroup: __scopeTabs || TABS_CONTEXT,
      asChild: true,
      focusable: !disabled,
      active: isSelected,
      children: /* @__PURE__ */ jsx69(TabFrame, {
        onMouseEnter: composeEventHandlers(props.onMouseEnter, () => {
          layout && onInteraction?.("hover", layout);
        }),
        onMouseLeave: composeEventHandlers(props.onMouseLeave, () => {
          onInteraction?.("hover", null);
        }),
        role: "tab",
        "aria-selected": isSelected,
        "aria-controls": contentId,
        "data-state": isSelected ? "active" : "inactive",
        "data-disabled": disabled ? "" : void 0,
        id: triggerId,
        theme: activeTheme ?? null,
        unstyled,
        ...!unstyled && {
          size: context4.size
        },
        ...isSelected && {
          ...!unstyled && !activeStyle && {
            backgroundColor: "$backgroundActive"
          },
          ...activeStyle
        },
        ...groupItemProps,
        disabled: disabled ?? groupItemProps.disabled,
        ...triggerProps,
        ref: composeRefs(forwardedRef, triggerRef),
        onPress: composeEventHandlers(props.onPress ?? void 0, (event) => {
          const webChecks = !isWeb || event.button === 0 && event.ctrlKey === false;
          !disabled && !isSelected && webChecks && context4.onChange(value);
        }),
        ...isWeb && {
          onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
            [" ", "Enter"].includes(event.key) && (context4.onChange(value), event.preventDefault());
          }),
          onFocus: composeEventHandlers(props.onFocus, (event) => {
            layout && onInteraction?.("focus", layout);
            const isAutomaticActivation = context4.activationMode !== "manual";
            !isSelected && !disabled && isAutomaticActivation && context4.onChange(value);
          }),
          onBlur: composeEventHandlers(props.onBlur, () => {
            onInteraction?.("focus", null);
          })
        }
      })
    });
  });
  TabsTrigger.displayName = TRIGGER_NAME5;
  const TabsContent = ContentFrame.styleable(function(props, forwardedRef) {
    const {
      __scopeTabs,
      value,
      forceMount,
      children,
      ...contentProps
    } = props, context4 = useTabsContext(__scopeTabs), isSelected = value === context4.value, show = forceMount || isSelected, triggerId = makeTriggerId(context4.baseId, value), contentId = makeContentId(context4.baseId, value);
    return show ? /* @__PURE__ */ jsx69(ContentFrame, {
      "data-state": isSelected ? "active" : "inactive",
      "data-orientation": context4.orientation,
      role: "tabpanel",
      "aria-labelledby": triggerId,
      hidden: !show,
      id: contentId,
      tabIndex: 0,
      ...contentProps,
      ref: forwardedRef,
      children
    }, value) : null;
  }), TabsComponent = TabsFrame.styleable(function(props, forwardedRef) {
    const {
      __scopeTabs,
      value: valueProp,
      onValueChange,
      defaultValue: defaultValue2,
      orientation = "horizontal",
      dir,
      activationMode = "manual",
      size: size4 = "$true",
      ...tabsProps
    } = props, direction = useDirection(dir), [value, setValue] = useControllableState({
      prop: valueProp,
      onChange: onValueChange,
      defaultProp: defaultValue2 ?? ""
    }), [triggersCount, setTriggersCount] = React85.useState(0), registerTrigger = useEvent9(() => setTriggersCount((v) => v + 1)), unregisterTrigger = useEvent9(() => setTriggersCount((v) => v - 1));
    return /* @__PURE__ */ jsx69(SizableContext.Provider, {
      size: size4,
      children: /* @__PURE__ */ jsx69(TabsProvider, {
        scope: __scopeTabs,
        baseId: React85.useId(),
        value,
        onChange: setValue,
        orientation,
        dir: direction,
        activationMode,
        size: size4,
        registerTrigger,
        triggersCount,
        unregisterTrigger,
        children: /* @__PURE__ */ jsx69(TabsFrame, {
          direction,
          "data-orientation": orientation,
          ...tabsProps,
          ref: forwardedRef
        })
      })
    });
  });
  return withStaticProperties(TabsComponent, {
    List: TabsList,
    /**
     * @deprecated Use Tabs.Tab instead
     */
    Trigger: TabsTrigger,
    Tab: TabsTrigger,
    Content: TabsContent
  });
}
__name(createTabs, "createTabs");
function makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
__name(makeTriggerId, "makeTriggerId");
function makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
__name(makeContentId, "makeContentId");

// node_modules/@tamagui/tabs/dist/esm/index.mjs
var Tabs = createTabs({
  ContentFrame: DefaultTabsContentFrame,
  TabFrame: DefaultTabsTabFrame,
  TabsFrame: DefaultTabsFrame
});

// node_modules/@tamagui/theme/dist/esm/_mutateTheme.mjs
import { ensureThemeVariable, forceUpdateThemes, getConfig as getConfig2, getThemeCSSRules, mutatedAutoVariables, proxyThemeToParents, simpleHash as simpleHash2, updateConfig } from "@tamagui/web";
function mutateThemes({
  themes,
  batch,
  insertCSS = true,
  ...props
}) {
  const allThemesProxied = {}, allThemesRaw = {};
  for (const {
    name,
    theme
  } of themes) {
    const res = _mutateTheme({
      ...props,
      name,
      theme,
      // we'll do one update at the end
      avoidUpdate: true,
      // always add which also replaces but doesnt fail first time
      mutationType: "add"
    });
    res && (allThemesProxied[name] = res.theme, allThemesRaw[name] = res.themeRaw);
  }
  const cssRules = insertCSS ? insertThemeCSS(allThemesRaw, batch) : [];
  return startTransition(() => {
    for (const themeName in allThemesProxied) {
      const theme = allThemesProxied[themeName];
      updateThemeConfig(themeName, theme);
    }
    updateThemeStates();
  }), {
    themes: allThemesProxied,
    themesRaw: allThemesRaw,
    cssRules
  };
}
__name(mutateThemes, "mutateThemes");
function _mutateTheme(props) {
  if (isServer) {
    process.env.NODE_ENV === "development" && console.warn("Theme mutation is not supported on server side");
    return;
  }
  const config = getConfig2(), {
    name: themeName,
    theme: themeIn,
    insertCSS,
    mutationType
  } = props;
  if (process.env.NODE_ENV === "development") {
    if (!config) throw new Error("No config");
    const theme2 = config.themes[props.name];
    if (mutationType !== "add" && !theme2) throw new Error(`${mutationType === "replace" ? "Replace" : "Update"} theme failed! Theme ${props.name} does not exist`);
  }
  const theme = {
    ...mutationType === "update" ? config.themes[themeName] ?? {} : {},
    ...themeIn
  };
  for (const key in theme) ensureThemeVariable(theme, key);
  const themeProxied = proxyThemeToParents(themeName, theme), response = {
    themeRaw: theme,
    theme: themeProxied,
    cssRules: []
  };
  return props.avoidUpdate || (insertCSS && (response.cssRules = insertThemeCSS({
    [themeName]: theme
  })), updateThemeConfig(themeName, themeProxied), updateThemeStates()), response;
}
__name(_mutateTheme, "_mutateTheme");
function updateThemeConfig(themeName, theme) {
  const config = getConfig2();
  config.themes[themeName] = theme, updateConfig("themes", config.themes);
}
__name(updateThemeConfig, "updateThemeConfig");
function updateThemeStates() {
  forceUpdateThemes();
}
__name(updateThemeStates, "updateThemeStates");
function insertThemeCSS(themes, batch = false) {
  const config = getConfig2();
  let cssRules = [];
  for (const themeName in themes) {
    const theme = themes[themeName], rules = getThemeCSSRules({
      config,
      themeName,
      names: [themeName],
      hasDarkLight: true,
      theme,
      // Use mutated variable creator which starts from high index to avoid conflicts
      useMutatedVariables: true
    });
    cssRules = [...cssRules, ...rules], batch || updateStyle(`t_theme_style_${themeName}`, rules);
  }
  if (mutatedAutoVariables.length > 0) {
    const autoVarCSS = `:root{${mutatedAutoVariables.map((v) => `--${v.name}:${v.val}`).join(";")}}`;
    updateStyle("t_mutate_vars", [autoVarCSS]);
  }
  if (batch) {
    const id = typeof batch == "string" ? batch : simpleHash2(Object.keys(themes).join(""));
    updateStyle(`t_theme_style_${id}`, cssRules);
  }
  return cssRules;
}
__name(insertThemeCSS, "insertThemeCSS");
function updateStyle(id, rules) {
  const existing = document.querySelector(`#${id}`), style = document.createElement("style");
  style.id = id, style.appendChild(document.createTextNode(rules.join(`
`))), document.head.appendChild(style), existing && existing.parentElement?.removeChild(existing);
}
__name(updateStyle, "updateStyle");

// node_modules/@tamagui/theme/dist/esm/addTheme.mjs
function addTheme(props) {
  return _mutateTheme({
    ...props,
    insertCSS: true,
    mutationType: "add"
  });
}
__name(addTheme, "addTheme");

// node_modules/@tamagui/theme/dist/esm/updateTheme.mjs
function updateTheme({
  name,
  theme
}) {
  return _mutateTheme({
    name,
    theme,
    insertCSS: true,
    mutationType: "update"
  });
}
__name(updateTheme, "updateTheme");

// node_modules/@tamagui/theme/dist/esm/replaceTheme.mjs
function replaceTheme({
  name,
  theme
}) {
  return _mutateTheme({
    name,
    theme,
    insertCSS: true,
    mutationType: "replace"
  });
}
__name(replaceTheme, "replaceTheme");

// node_modules/@tamagui/toast/dist/esm/Toast.mjs
import { styled as styled47, useEvent as useEvent12 } from "@tamagui/core";
import * as React91 from "react";

// node_modules/@tamagui/toast/dist/esm/ToastAnnounce.mjs
import { View as View25, Text as Text7, styled as styled44, useEvent as useEvent10 } from "@tamagui/core";

// node_modules/@tamagui/visually-hidden/dist/esm/VisuallyHidden.mjs
import { Text as Text6, styled as styled43 } from "@tamagui/web";
var VisuallyHidden = styled43(Text6, {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  zIndex: -1e4,
  overflow: "hidden",
  opacity: 1e-8,
  pointerEvents: "none",
  variants: {
    preserveDimensions: {
      true: {
        position: "relative",
        width: "auto",
        height: "auto"
      }
    },
    visible: {
      true: {
        position: "relative",
        width: "auto",
        height: "auto",
        margin: 0,
        zIndex: 1,
        overflow: "visible",
        opacity: 1,
        pointerEvents: "auto"
      }
    }
  }
});
VisuallyHidden.isVisuallyHidden = true;

// node_modules/@tamagui/toast/dist/esm/ToastAnnounce.mjs
import * as React88 from "react";

// node_modules/@tamagui/toast/dist/esm/ToastProvider.mjs
import { createStyledContext as createStyledContext26 } from "@tamagui/core";
import * as React87 from "react";

// node_modules/@tamagui/toast/dist/esm/constants.mjs
var TOAST_NAME = "Toast";
var TOAST_CONTEXT = "Toast";

// node_modules/@tamagui/toast/dist/esm/ToastImperative.mjs
import { isAndroid as isAndroid6, isIos as isIos3, isWeb as isWeb13 } from "@tamagui/core";
import React86 from "react";

// node_modules/@tamagui/toast/dist/esm/createNativeToast.mjs
var createNativeToast = /* @__PURE__ */ __name((title, {
  message,
  notificationOptions
}) => {
  if (!("Notification" in window)) return console.error("This browser does not support notifications"), false;
  if (Notification.permission === "denied") return false;
  const showNotification = /* @__PURE__ */ __name(() => new Notification(title, {
    body: message,
    ...notificationOptions
  }), "showNotification");
  return Notification.permission === "granted" ? {
    nativeToastRef: showNotification()
  } : (Notification.requestPermission().then((permission) => {
    if (permission === "granted") return {
      nativeToastRef: showNotification()
    };
  }), true);
}, "createNativeToast");

// node_modules/@tamagui/toast/dist/esm/ToastImperative.mjs
import { jsx as jsx70 } from "react/jsx-runtime";
var ToastContext = React86.createContext({});
var ToastCurrentContext = React86.createContext(null);
var useToastController = /* @__PURE__ */ __name(() => React86.useContext(ToastContext), "useToastController");
var useToastState = /* @__PURE__ */ __name(() => React86.useContext(ToastCurrentContext), "useToastState");
var useToast = /* @__PURE__ */ __name(() => ({
  ...useToastController(),
  currentToast: useToastState()
}), "useToast");
var ToastImperativeProvider = /* @__PURE__ */ __name(({
  children,
  options
}) => {
  const counterRef = React86.useRef(0), [toast, setToast] = React86.useState(null), [lastNativeToastRef, setLastNativeToastRef] = React86.useState(null), show = React86.useCallback((title, showOptions) => {
    const native = showOptions?.native ?? options.native, isWebNative = Array.isArray(native) ? native.includes("web") : native === "web", isMobileNative = Array.isArray(native) ? native.includes("mobile") : native === "mobile", isAndroidNative = isMobileNative || (Array.isArray(native) ? native.includes("android") : native === "android"), isIosNative = isMobileNative || (Array.isArray(native) ? native.includes("ios") : native === "ios"), isHandledNatively = native === true || isWeb13 && isWebNative || !isWeb13 && isMobileNative || isAndroid6 && isAndroidNative || isIos3 && isIosNative;
    if (isHandledNatively) {
      const nativeToastResult = createNativeToast(title, showOptions ?? {});
      typeof nativeToastResult == "object" && nativeToastResult.nativeToastRef && setLastNativeToastRef(nativeToastResult.nativeToastRef);
    }
    return counterRef.current++, setToast({
      ...showOptions?.customData,
      ...showOptions,
      viewportName: showOptions?.viewportName ?? "default",
      title,
      id: counterRef.current.toString(),
      isHandledNatively
    }), true;
  }, [setToast, JSON.stringify(options.native || null)]), hide4 = React86.useCallback(() => {
    lastNativeToastRef?.close(), setToast((prev) => prev ? {
      ...prev,
      hide: true
    } : null), setTimeout(() => {
      setToast(null);
    }, 100);
  }, [setToast, lastNativeToastRef]), contextValue = React86.useMemo(() => ({
    show,
    hide: hide4,
    nativeToast: lastNativeToastRef,
    options
  }), [show, hide4, lastNativeToastRef, JSON.stringify(options || null)]);
  return /* @__PURE__ */ jsx70(ToastContext.Provider, {
    value: contextValue,
    children: /* @__PURE__ */ jsx70(ToastCurrentContext.Provider, {
      value: toast,
      children
    })
  });
}, "ToastImperativeProvider");

// node_modules/@tamagui/toast/dist/esm/ToastProvider.mjs
import { jsx as jsx71 } from "react/jsx-runtime";
var PROVIDER_NAME = "ToastProvider";
var [Collection4, useCollection4] = createCollection("Toast");
var {
  Provider: ToastProviderProvider,
  useStyledContext: useToastProviderContext
} = createStyledContext26(
  // since we always provide this we can avoid setting here
  {},
  "Toast__"
);
var ToastProvider = /* @__PURE__ */ __name((props) => {
  const {
    scope = TOAST_CONTEXT,
    id: providedId,
    burntOptions,
    native,
    notificationOptions,
    label = "Notification",
    duration = 5e3,
    swipeDirection = "right",
    swipeThreshold = 50,
    children
  } = props, backupId = React87.useId(), id = providedId ?? backupId, [viewports, setViewports] = React87.useState({}), [toastCount, setToastCount] = React87.useState(0), isFocusedToastEscapeKeyDownRef = React87.useRef(false), isClosePausedRef = React87.useRef(false), handleViewportChange = React87.useCallback((name, viewport) => {
    startTransition(() => {
      setViewports((prev) => ({
        ...prev,
        [name]: viewport
      }));
    });
  }, []), options = React87.useMemo(() => ({
    duration,
    burntOptions,
    native,
    notificationOptions
  }), [JSON.stringify([duration, burntOptions, native, notificationOptions])]);
  return /* @__PURE__ */ jsx71(Collection4.Provider, {
    scope,
    children: /* @__PURE__ */ jsx71(ToastProviderProvider, {
      scope,
      id,
      label,
      duration,
      swipeDirection,
      swipeThreshold,
      toastCount,
      viewports,
      onViewportChange: handleViewportChange,
      onToastAdd: React87.useCallback(() => {
        startTransition(() => {
          setToastCount((prevCount) => prevCount + 1);
        });
      }, []),
      onToastRemove: React87.useCallback(() => {
        startTransition(() => {
          setToastCount((prevCount) => prevCount - 1);
        });
      }, []),
      isFocusedToastEscapeKeyDownRef,
      isClosePausedRef,
      options,
      children: /* @__PURE__ */ jsx71(ToastImperativeProvider, {
        options,
        children
      })
    })
  });
}, "ToastProvider");
function ReprogapateToastProvider(props) {
  const {
    children,
    context: context4
  } = props;
  return /* @__PURE__ */ jsx71(Collection4.Provider, {
    scope: context4.toastScope,
    children: /* @__PURE__ */ jsx71(ToastProviderProvider, {
      ...context4,
      children: /* @__PURE__ */ jsx71(ToastImperativeProvider, {
        options: context4.options,
        children
      })
    })
  });
}
__name(ReprogapateToastProvider, "ReprogapateToastProvider");
ToastProvider.propTypes = {
  label(props) {
    if (props.label && typeof props.label == "string" && !props.label.trim()) {
      const error2 = `Invalid prop \`label\` supplied to \`${PROVIDER_NAME}\`. Expected non-empty \`string\`.`;
      return new Error(error2);
    }
    return null;
  }
};
ToastProvider.displayName = PROVIDER_NAME;

// node_modules/@tamagui/toast/dist/esm/ToastAnnounce.mjs
import { jsx as jsx72, jsxs as jsxs16 } from "react/jsx-runtime";
var ToastAnnounceExcludeFrame = styled44(View25, {
  name: "ToastAnnounceExclude"
});
var ToastAnnounceExclude = React88.forwardRef((props, forwardedRef) => {
  const {
    altText,
    ...announceExcludeProps
  } = props;
  return /* @__PURE__ */ jsx72(ToastAnnounceExcludeFrame, {
    "data-toast-announce-exclude": "",
    "data-toast-announce-alt": altText || void 0,
    ...announceExcludeProps,
    ref: forwardedRef
  });
});
var ToastAnnounce = /* @__PURE__ */ __name((props) => {
  const {
    scope,
    children,
    ...announceProps
  } = props, context4 = useToastProviderContext(scope), [renderAnnounceText, setRenderAnnounceText] = React88.useState(false), [isAnnounced, setIsAnnounced] = React88.useState(false);
  return useNextFrame(() => {
    startTransition(() => {
      setRenderAnnounceText(true);
    });
  }), React88.useEffect(() => {
    const timer = setTimeout(() => setIsAnnounced(true), 1e3);
    return () => clearTimeout(timer);
  }, []), isAnnounced ? null : /* @__PURE__ */ jsx72(Portal, {
    children: /* @__PURE__ */ jsx72(VisuallyHidden, {
      ...announceProps,
      children: renderAnnounceText && /* @__PURE__ */ jsxs16(Text7, {
        children: [context4.label, " ", children]
      })
    })
  });
}, "ToastAnnounce");
function useNextFrame(callback = () => {
}) {
  const fn = useEvent10(callback);
  useIsomorphicLayoutEffect(() => {
    let raf1 = 0, raf2 = 0;
    return raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(fn);
    }), () => {
      cancelAnimationFrame(raf1), cancelAnimationFrame(raf2);
    };
  }, [fn]);
}
__name(useNextFrame, "useNextFrame");

// node_modules/@tamagui/toast/dist/esm/ToastImpl.mjs
import { View as View26, Theme as Theme3, createStyledContext as createStyledContext27, styled as styled46, useConfiguration as useConfiguration4, useEvent as useEvent11, useThemeName as useThemeName6 } from "@tamagui/core";
import * as React90 from "react";

// node_modules/@tamagui/toast/dist/esm/ToastViewport.mjs
import { styled as styled45 } from "@tamagui/core";
import * as React89 from "react";

// node_modules/@tamagui/toast/dist/esm/ToastPortal.mjs
import { jsx as jsx73 } from "react/jsx-runtime";
function ToastPortal(props) {
  const {
    context: context4,
    children,
    zIndex
  } = props;
  let content = children;
  return (Platform_default.OS === "android" || Platform_default.OS === "ios") && (content = /* @__PURE__ */ jsx73(ReprogapateToastProvider, {
    context: context4,
    children
  })), /* @__PURE__ */ jsx73(Portal, {
    zIndex: zIndex || Number.MAX_SAFE_INTEGER,
    children: content
  });
}
__name(ToastPortal, "ToastPortal");

// node_modules/@tamagui/toast/dist/esm/ToastViewport.mjs
import { jsx as jsx74, jsxs as jsxs17 } from "react/jsx-runtime";
var VIEWPORT_NAME2 = "ToastViewport";
var VIEWPORT_DEFAULT_HOTKEY = ["F8"];
var VIEWPORT_PAUSE = "toast.viewportPause";
var VIEWPORT_RESUME = "toast.viewportResume";
var ToastViewportWrapperFrame = styled45(YStack, {
  name: "ViewportWrapper",
  variants: {
    unstyled: {
      false: {
        pointerEvents: "box-none",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        position: "fixed",
        maxWidth: "100%",
        tabIndex: 0,
        zIndex: 1e5
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var ToastViewportFrame = styled45(YStack, {
  name: VIEWPORT_NAME2,
  variants: {
    unstyled: {
      false: {
        pointerEvents: "box-none",
        position: "fixed",
        maxWidth: "100%"
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var ToastViewport = React89.memo(React89.forwardRef((props, forwardedRef) => {
  const {
    scope,
    hotkey = VIEWPORT_DEFAULT_HOTKEY,
    label = "Notifications ({hotkey})",
    name = "default",
    multipleToasts,
    zIndex,
    portalToRoot,
    ...viewportProps
  } = props, context4 = useToastProviderContext(scope), getItems = useCollection4(scope || TOAST_CONTEXT), headFocusProxyRef = React89.useRef(null), tailFocusProxyRef = React89.useRef(null), wrapperRef = React89.useRef(null), ref = React89.useRef(null), onViewportChange = React89.useCallback((el) => {
    context4.viewports[name] !== el && context4.onViewportChange(name, el);
  }, [name, context4.viewports]), composedRefs = useComposedRefs(forwardedRef, ref, onViewportChange), hotkeyLabel = hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, ""), hasToasts = context4.toastCount > 0;
  React89.useEffect(() => {
    if (!isWeb || context4.toastCount === 0) return;
    const handleKeyDown = /* @__PURE__ */ __name((event) => {
      hotkey.every((key) => event[key] || event.code === key) && ref.current?.focus();
    }, "handleKeyDown");
    return document.addEventListener("keydown", handleKeyDown), () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [hotkey, context4.toastCount]), React89.useEffect(() => {
    if (!isWeb || context4.toastCount === 0) return;
    const wrapper = wrapperRef.current, viewport = ref.current;
    if (hasToasts && wrapper && viewport) {
      const handlePause = /* @__PURE__ */ __name(() => {
        if (!context4.isClosePausedRef.current) {
          const pauseEvent = new CustomEvent(VIEWPORT_PAUSE);
          viewport.dispatchEvent(pauseEvent), context4.isClosePausedRef.current = true;
        }
      }, "handlePause"), handleResume = /* @__PURE__ */ __name(() => {
        if (context4.isClosePausedRef.current) {
          const resumeEvent = new CustomEvent(VIEWPORT_RESUME);
          viewport.dispatchEvent(resumeEvent), context4.isClosePausedRef.current = false;
        }
      }, "handleResume"), handleFocusOutResume = /* @__PURE__ */ __name((event) => {
        !wrapper.contains(event.relatedTarget) && handleResume();
      }, "handleFocusOutResume"), handlePointerLeaveResume = /* @__PURE__ */ __name(() => {
        wrapper.contains(document.activeElement) || handleResume();
      }, "handlePointerLeaveResume");
      return wrapper.addEventListener("focusin", handlePause), wrapper.addEventListener("focusout", handleFocusOutResume), wrapper.addEventListener("pointermove", handlePause), wrapper.addEventListener("pointerleave", handlePointerLeaveResume), window.addEventListener("blur", handlePause), window.addEventListener("focus", handleResume), () => {
        wrapper.removeEventListener("focusin", handlePause), wrapper.removeEventListener("focusout", handleFocusOutResume), wrapper.removeEventListener("pointermove", handlePause), wrapper.removeEventListener("pointerleave", handlePointerLeaveResume), window.removeEventListener("blur", handlePause), window.removeEventListener("focus", handleResume);
      };
    }
  }, [hasToasts, context4.isClosePausedRef, context4.toastCount]);
  const getSortedTabbableCandidates = React89.useCallback(({
    tabbingDirection
  }) => {
    const tabbableCandidates = getItems().map((toastItem) => {
      const toastNode = toastItem.ref.current, toastTabbableCandidates = [toastNode, ...getTabbableCandidates2(toastNode)];
      return tabbingDirection === "forwards" ? toastTabbableCandidates : toastTabbableCandidates.reverse();
    });
    return (tabbingDirection === "forwards" ? tabbableCandidates.reverse() : tabbableCandidates).flat();
  }, [getItems]);
  React89.useEffect(() => {
    if (!isWeb || context4.toastCount === 0) return;
    const viewport = ref.current;
    if (viewport) {
      const handleKeyDown = /* @__PURE__ */ __name((event) => {
        const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
        if (event.key === "Tab" && !isMetaKey) {
          const focusedElement = document.activeElement, isTabbingBackwards = event.shiftKey;
          if (event.target === viewport && isTabbingBackwards) {
            headFocusProxyRef.current?.focus();
            return;
          }
          const sortedCandidates = getSortedTabbableCandidates({
            tabbingDirection: isTabbingBackwards ? "backwards" : "forwards"
          }), index2 = sortedCandidates.findIndex((candidate) => candidate === focusedElement);
          focusFirst4(sortedCandidates.slice(index2 + 1)) ? event.preventDefault() : isTabbingBackwards ? (
            // @ts-ignore ali TODO type
            headFocusProxyRef.current?.focus()
          ) : (
            // @ts-ignore ali TODO type
            tailFocusProxyRef.current?.focus()
          );
        }
      }, "handleKeyDown");
      return viewport.addEventListener("keydown", handleKeyDown), () => viewport.removeEventListener("keydown", handleKeyDown);
    }
  }, [getItems, getSortedTabbableCandidates, context4.toastCount]);
  const contents = /* @__PURE__ */ jsxs17(ToastViewportWrapperFrame, {
    ref: wrapperRef,
    role: "region",
    "aria-label": label.replace("{hotkey}", hotkeyLabel),
    tabIndex: -1,
    children: [hasToasts && /* @__PURE__ */ jsx74(FocusProxy, {
      context: context4,
      viewportName: name,
      ref: headFocusProxyRef,
      onFocusFromOutsideViewport: /* @__PURE__ */ __name(() => {
        const tabbableCandidates = getSortedTabbableCandidates({
          tabbingDirection: "forwards"
        });
        focusFirst4(tabbableCandidates);
      }, "onFocusFromOutsideViewport")
    }), /* @__PURE__ */ jsx74(Collection4.Slot, {
      scope: context4.toastScope,
      children: /* @__PURE__ */ jsx74(ToastViewportFrame, {
        focusable: context4.toastCount > 0,
        ref: composedRefs,
        ...viewportProps,
        children: /* @__PURE__ */ jsx74(PortalHost, {
          render: /* @__PURE__ */ __name((children) => /* @__PURE__ */ jsx74(AnimatePresence, {
            exitBeforeEnter: !multipleToasts,
            children
          }), "render"),
          name: name ?? "default"
        })
      })
    }), hasToasts && /* @__PURE__ */ jsx74(FocusProxy, {
      context: context4,
      viewportName: name,
      ref: tailFocusProxyRef,
      onFocusFromOutsideViewport: /* @__PURE__ */ __name(() => {
        const tabbableCandidates = getSortedTabbableCandidates({
          tabbingDirection: "backwards"
        });
        focusFirst4(tabbableCandidates);
      }, "onFocusFromOutsideViewport")
    })]
  });
  return portalToRoot ? /* @__PURE__ */ jsx74(ToastPortal, {
    context: context4,
    ...typeof zIndex == "number" ? {
      zIndex
    } : {},
    children: contents
  }) : contents;
}));
ToastViewport.displayName = VIEWPORT_NAME2;
var FOCUS_PROXY_NAME = "ToastFocusProxy";
var FocusProxy = React89.forwardRef((props, forwardedRef) => {
  const {
    onFocusFromOutsideViewport,
    viewportName,
    context: context4,
    ...proxyProps
  } = props, viewport = context4.viewports[viewportName];
  return /* @__PURE__ */ jsx74(VisuallyHidden, {
    "aria-hidden": true,
    tabIndex: 0,
    ...proxyProps,
    ref: forwardedRef,
    position: "fixed",
    onFocus: /* @__PURE__ */ __name((event) => {
      if (!isWeb) return;
      const prevFocusedElement = event.relatedTarget;
      !viewport?.contains(prevFocusedElement) && onFocusFromOutsideViewport();
    }, "onFocus")
  });
});
FocusProxy.displayName = FOCUS_PROXY_NAME;
function focusFirst4(candidates) {
  if (!isWeb) return;
  const previouslyFocusedElement = document.activeElement;
  return candidates.some((candidate) => candidate === previouslyFocusedElement ? true : (candidate.focus(), document.activeElement !== previouslyFocusedElement));
}
__name(focusFirst4, "focusFirst");
function getTabbableCandidates2(container) {
  if (!isWeb) return [];
  const containerHtml = container, nodes = [], walker = document.createTreeWalker(containerHtml, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ __name((node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      return node.disabled || node.hidden || isHiddenInput ? NodeFilter.FILTER_SKIP : node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; walker.nextNode(); ) nodes.push(walker.currentNode);
  return nodes;
}
__name(getTabbableCandidates2, "getTabbableCandidates");

// node_modules/@tamagui/toast/dist/esm/ToastImpl.mjs
import { Fragment as Fragment22, jsx as jsx75, jsxs as jsxs18 } from "react/jsx-runtime";
var ToastImplFrame = styled46(YStack, {
  name: "ToastImpl",
  tabIndex: 0,
  variants: {
    unstyled: {
      false: {
        focusStyle: {
          outlineStyle: "solid",
          outlineWidth: 2,
          outlineColor: "$outlineColor"
        },
        backgroundColor: "$color6",
        borderRadius: "$4",
        paddingHorizontal: "$4",
        paddingVertical: "$3",
        marginHorizontal: "auto",
        marginVertical: "$1",
        elevation: "$3"
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var {
  Provider: ToastInteractiveProvider,
  useStyledContext: useToastInteractiveContext
} = createStyledContext27({
  onClose() {
  }
});
var ToastImpl = React90.forwardRef((props, forwardedRef) => {
  const {
    scope,
    type = "foreground",
    duration: durationProp,
    open: open2,
    onClose,
    onEscapeKeyDown,
    onPause,
    onResume,
    onSwipeStart,
    onSwipeMove,
    onSwipeCancel,
    onSwipeEnd,
    viewportName = "default",
    ...toastProps
  } = props, isPresent2 = useIsPresent(), context4 = useToastProviderContext(scope), [node, setNode] = React90.useState(null), composedRefs = useComposedRefs(forwardedRef, setNode), duration = durationProp || context4.duration, closeTimerStartTimeRef = React90.useRef(0), closeTimerRemainingTimeRef = React90.useRef(duration), closeTimerRef = React90.useRef(0), {
    onToastAdd,
    onToastRemove
  } = context4, viewport = React90.useMemo(() => context4.viewports[viewportName], [context4.viewports, viewportName]), handleClose = useEvent11(() => {
    isPresent2 && (isWeb && node?.contains(document.activeElement) && viewport?.focus(), onClose());
  }), startTimer = React90.useCallback((duration2) => {
    !duration2 || duration2 === Number.POSITIVE_INFINITY || (clearTimeout(closeTimerRef.current), closeTimerStartTimeRef.current = (/* @__PURE__ */ new Date()).getTime(), closeTimerRef.current = setTimeout(handleClose, duration2));
  }, [handleClose]), handleResume = React90.useCallback(() => {
    startTimer(closeTimerRemainingTimeRef.current), onResume?.();
  }, [onResume, startTimer]), handlePause = React90.useCallback(() => {
    const elapsedTime = (/* @__PURE__ */ new Date()).getTime() - closeTimerStartTimeRef.current;
    closeTimerRemainingTimeRef.current = closeTimerRemainingTimeRef.current - elapsedTime, window.clearTimeout(closeTimerRef.current), onPause?.();
  }, [onPause]);
  React90.useEffect(() => {
    if (isWeb && viewport) return viewport.addEventListener(VIEWPORT_PAUSE, handlePause), viewport.addEventListener(VIEWPORT_RESUME, handleResume), () => {
      viewport.removeEventListener(VIEWPORT_PAUSE, handlePause), viewport.removeEventListener(VIEWPORT_RESUME, handleResume);
    };
  }, [viewport, duration, onPause, onResume, startTimer]), React90.useEffect(() => {
    open2 && !context4.isClosePausedRef.current && startTimer(duration);
  }, [open2, duration, context4.isClosePausedRef, startTimer]), React90.useEffect(() => (onToastAdd(), () => onToastRemove()), [onToastAdd, onToastRemove]);
  const announceTextContent = React90.useMemo(() => isWeb && node ? getAnnounceTextContent(node) : null, [node]), isHorizontalSwipe = ["left", "right", "horizontal"].includes(context4.swipeDirection), {
    animationDriver
  } = useConfiguration4();
  if (!animationDriver) throw new Error("Must set animations in tamagui.config.ts");
  const {
    useAnimatedNumber,
    useAnimatedNumberStyle
  } = animationDriver, animatedNumber = useAnimatedNumber(0), AnimatedView = animationDriver.NumberView ?? animationDriver.View ?? View26, animatedStyles = useAnimatedNumberStyle(animatedNumber, (val) => {
    "worklet";
    return {
      transform: [isHorizontalSwipe ? {
        translateX: val
      } : {
        translateY: val
      }]
    };
  }), panResponder = React90.useMemo(() => PanResponder_default2.create({
    onMoveShouldSetPanResponder: /* @__PURE__ */ __name((e, gesture) => shouldGrantGestureMove(context4.swipeDirection, gesture) ? (onSwipeStart?.(e), true) : false, "onMoveShouldSetPanResponder"),
    onPanResponderGrant: /* @__PURE__ */ __name((e) => {
      isWeb || handlePause?.();
    }, "onPanResponderGrant"),
    onPanResponderMove: /* @__PURE__ */ __name((e, gesture) => {
      const {
        x,
        y
      } = getGestureDistance(context4.swipeDirection, gesture), delta = {
        x,
        y
      };
      animatedNumber.setValue(isHorizontalSwipe ? x : y, {
        type: "direct"
      }), isDeltaInDirection(delta, context4.swipeDirection, context4.swipeThreshold) && onSwipeEnd?.(e), onSwipeMove?.(e);
    }, "onPanResponderMove"),
    onPanResponderEnd: /* @__PURE__ */ __name((e, {
      dx,
      dy
    }) => {
      isDeltaInDirection({
        x: dx,
        y: dy
      }, context4.swipeDirection, context4.swipeThreshold) || (isWeb || handleResume?.(), onSwipeCancel?.(e), animatedNumber.setValue(0, {
        type: "spring"
      }));
    }, "onPanResponderEnd")
  }), [handlePause, handleResume]), themeName = useThemeName6();
  return /* @__PURE__ */ jsxs18(Fragment22, {
    children: [announceTextContent && /* @__PURE__ */ jsx75(ToastAnnounce, {
      scope,
      role: "status",
      "aria-live": type === "foreground" ? "assertive" : "polite",
      "aria-atomic": true,
      children: announceTextContent
    }), /* @__PURE__ */ jsx75(GorhomPortalItem, {
      hostName: viewportName ?? "default",
      children: /* @__PURE__ */ jsx75(ToastInteractiveProvider, {
        scope,
        onClose: /* @__PURE__ */ __name(() => {
          handleClose();
        }, "onClose"),
        children: /* @__PURE__ */ jsx75(Dismissable, {
          onEscapeKeyDown: composeEventHandlers(onEscapeKeyDown, () => {
            context4.isFocusedToastEscapeKeyDownRef.current || handleClose(), context4.isFocusedToastEscapeKeyDownRef.current = false;
          }),
          children: /* @__PURE__ */ jsx75(Theme3, {
            contain: true,
            forceClassName: true,
            name: themeName,
            children: /* @__PURE__ */ jsx75(AnimatedView, {
              ...panResponder?.panHandlers,
              style: [{
                margin: "auto"
              }, animatedStyles],
              children: /* @__PURE__ */ jsx75(Collection4.ItemSlot, {
                scope: context4.toastScope,
                children: /* @__PURE__ */ jsx75(ToastImplFrame, {
                  role: "status",
                  "aria-live": "off",
                  "aria-atomic": true,
                  "data-state": open2 ? "open" : "closed",
                  "data-swipe-direction": context4.swipeDirection,
                  pointerEvents: "auto",
                  "$platform-web": {
                    touchAction: "none",
                    userSelect: "none"
                  },
                  ...toastProps,
                  ref: composedRefs,
                  ...isWeb && {
                    onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
                      event.key === "Escape" && (onEscapeKeyDown?.(event), event.defaultPrevented || (context4.isFocusedToastEscapeKeyDownRef.current = true, handleClose()));
                    })
                  }
                })
              })
            })
          })
        })
      }, props.id)
    })]
  });
});
ToastImpl.propTypes = {
  type(props) {
    if (props.type && !["foreground", "background"].includes(props.type)) {
      const error2 = `Invalid prop \`type\` supplied to \`${TOAST_NAME}\`. Expected \`foreground | background\`.`;
      return new Error(error2);
    }
    return null;
  }
};
var isDeltaInDirection = /* @__PURE__ */ __name((delta, direction, threshold = 0) => {
  const deltaX = Math.abs(delta.x), deltaY = Math.abs(delta.y), isDeltaX = deltaX > deltaY;
  return direction === "left" || direction === "right" || direction === "horizontal" ? isDeltaX && deltaX > threshold : !isDeltaX && deltaY > threshold;
}, "isDeltaInDirection");
function getAnnounceTextContent(container) {
  if (!isWeb) return "";
  const textContent = [];
  return Array.from(container.childNodes).forEach((node) => {
    if (node.nodeType === node.TEXT_NODE && node.textContent && textContent.push(node.textContent), isHTMLElement3(node)) {
      const isHidden2 = node.ariaHidden || node.hidden || node.style.display === "none", isExcluded = node.dataset.toastAnnounceExclude === "";
      if (!isHidden2) if (isExcluded) {
        const altText = node.dataset.toastAnnounceAlt;
        altText && textContent.push(altText);
      } else textContent.push(...getAnnounceTextContent(node));
    }
  }), textContent;
}
__name(getAnnounceTextContent, "getAnnounceTextContent");
function isHTMLElement3(node) {
  return node.nodeType === node.ELEMENT_NODE;
}
__name(isHTMLElement3, "isHTMLElement");
var GESTURE_GRANT_THRESHOLD = 10;
var shouldGrantGestureMove = /* @__PURE__ */ __name((dir, {
  dx,
  dy
}) => (dir === "horizontal" || dir === "left") && dx < -GESTURE_GRANT_THRESHOLD || (dir === "horizontal" || dir === "right") && dx > GESTURE_GRANT_THRESHOLD || (dir === "vertical" || dir === "up") && dy > -GESTURE_GRANT_THRESHOLD || (dir === "vertical" || dir === "down") && dy < GESTURE_GRANT_THRESHOLD, "shouldGrantGestureMove");
var getGestureDistance = /* @__PURE__ */ __name((dir, {
  dx,
  dy
}) => {
  let y = 0, x = 0;
  return dir === "horizontal" ? x = dx : dir === "left" ? x = Math.min(0, dx) : dir === "right" ? x = Math.max(0, dx) : dir === "vertical" ? y = dy : dir === "up" ? y = Math.min(0, dy) : dir === "down" && (y = Math.max(0, dy)), {
    x,
    y
  };
}, "getGestureDistance");

// node_modules/@tamagui/toast/dist/esm/Toast.mjs
import { jsx as jsx76 } from "react/jsx-runtime";
var TITLE_NAME2 = "ToastTitle";
var ToastTitle = styled47(SizableText2, {
  name: TITLE_NAME2,
  variants: {
    unstyled: {
      false: {
        color: "$color",
        size: "$4"
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var DESCRIPTION_NAME2 = "ToastDescription";
var ToastDescription = styled47(SizableText2, {
  name: DESCRIPTION_NAME2,
  variants: {
    unstyled: {
      false: {
        color: "$color11",
        size: "$1"
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var ACTION_NAME2 = "ToastAction";
var ToastAction = React91.forwardRef(function(props, forwardedRef) {
  const {
    altText,
    ...actionProps
  } = props;
  return altText ? /* @__PURE__ */ jsx76(ToastAnnounceExclude, {
    altText,
    asChild: true,
    children: /* @__PURE__ */ jsx76(ToastClose, {
      ...actionProps,
      ref: forwardedRef
    })
  }) : null;
});
ToastAction.propTypes = {
  altText(props) {
    return props.altText ? null : new Error(`Missing prop \`altText\` expected on \`${ACTION_NAME2}\``);
  }
};
var CLOSE_NAME2 = "ToastClose";
var ToastCloseFrame = styled47(YStack, {
  name: CLOSE_NAME2,
  render: "button"
});
var ToastClose = React91.forwardRef(function(props, forwardedRef) {
  const {
    scope,
    ...closeProps
  } = props, interactiveContext = useToastInteractiveContext(scope);
  return /* @__PURE__ */ jsx76(ToastAnnounceExclude, {
    asChild: true,
    children: /* @__PURE__ */ jsx76(ToastCloseFrame, {
      "aria-label": "Close",
      ...closeProps,
      ref: forwardedRef,
      onPress: composeEventHandlers(props.onPress, interactiveContext.onClose)
    })
  });
});
var ToastComponent = ToastImplFrame.styleable(function(props, forwardedRef) {
  const {
    forceMount,
    open: openProp,
    defaultOpen,
    onOpenChange,
    ...toastProps
  } = props, [open2, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? true,
    onChange: onOpenChange,
    strategy: "most-recent-wins"
  }), currentToast = useToastState(), {
    hide: hide4
  } = useToastController(), id = React91.useId(), onPause = useEvent12(props.onPause), onResume = useEvent12(props.onResume), isHide = currentToast?.hide === true;
  return /* @__PURE__ */ jsx76(AnimatePresence, {
    children: (forceMount || open2) && !isHide ? /* @__PURE__ */ jsx76(ToastImpl, {
      id,
      open: open2,
      ...toastProps,
      ref: forwardedRef,
      onClose: /* @__PURE__ */ __name(() => {
        setOpen(false), hide4();
      }, "onClose"),
      onPause,
      onResume,
      onSwipeEnd: composeEventHandlers(props.onSwipeEnd, (event) => {
        setOpen(false);
      })
    }) : null
  }, id);
});
var Toast2 = withStaticProperties(ToastComponent, {
  Title: ToastTitle,
  Description: ToastDescription,
  Action: ToastAction,
  Close: ToastClose
});

// node_modules/@tamagui/toggle-group/dist/esm/ToggleGroup.mjs
import { createStyledContext as createStyledContext29, styled as styled49, View as View28 } from "@tamagui/web";
import React93 from "react";

// node_modules/@tamagui/toggle-group/dist/esm/Toggle.mjs
import { styled as styled48, View as View27 } from "@tamagui/web";
import * as React92 from "react";

// node_modules/@tamagui/toggle-group/dist/esm/context.mjs
import { createStyledContext as createStyledContext28 } from "@tamagui/web";
var context3 = createStyledContext28({
  color: "",
  active: false
});
var useToggleGroupItem = /* @__PURE__ */ __name(() => context3.useStyledContext(), "useToggleGroupItem");

// node_modules/@tamagui/toggle-group/dist/esm/Toggle.mjs
import { jsx as jsx77 } from "react/jsx-runtime";
var NAME3 = "Toggle";
var ToggleFrame = styled48(View27, {
  name: NAME3,
  render: "button",
  context: context3,
  variants: {
    unstyled: {
      false: {
        size: "$true",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        backgroundColor: "$background",
        borderColor: "$borderColor",
        borderWidth: 1,
        margin: -1,
        hoverStyle: {
          backgroundColor: "$backgroundHover",
          borderColor: "$borderColorHover"
        },
        pressStyle: {
          backgroundColor: "$backgroundPress",
          borderColor: "$borderColorPress"
        },
        focusVisibleStyle: {
          outlineColor: "$outlineColor",
          outlineWidth: 2,
          outlineStyle: "solid",
          zIndex: 10
        }
      }
    },
    size: {
      "...size": /* @__PURE__ */ __name((val, {
        tokens
      }) => {
        if (val) return {
          width: tokens.size[val],
          height: tokens.size[val]
        };
      }, "...size"),
      ":number": /* @__PURE__ */ __name((val) => ({
        width: val,
        height: val
      }), ":number")
    },
    defaultActiveStyle: {
      true: {
        backgroundColor: "$backgroundActive",
        hoverStyle: {
          backgroundColor: "$backgroundActive"
        },
        focusStyle: {
          backgroundColor: "$backgroundActive"
        }
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
}, {
  accept: {
    activeStyle: "style"
  }
});
var Toggle = React92.forwardRef(function(props, forwardedRef) {
  const {
    active: activeProp,
    activeStyle,
    defaultActive = false,
    onActiveChange,
    activeTheme,
    unstyled = false,
    ...buttonProps
  } = props, [active = false, setActive] = useControllableState({
    prop: activeProp,
    onChange: onActiveChange,
    defaultProp: defaultActive
  });
  return /* @__PURE__ */ jsx77(ToggleFrame, {
    theme: activeTheme ?? null,
    "aria-pressed": active,
    "data-state": active ? "on" : "off",
    "data-disabled": props.disabled ? "" : void 0,
    unstyled,
    ...active && !activeStyle && !unstyled && {
      defaultActiveStyle: true
    },
    ...active && activeStyle && {
      ...activeStyle,
      hoverStyle: activeStyle,
      focusStyle: activeStyle
    },
    ...buttonProps,
    ref: forwardedRef,
    onPress: composeEventHandlers(props.onPress ?? void 0, () => {
      props.disabled || setActive((prev) => !prev);
    })
  });
});

// node_modules/@tamagui/toggle-group/dist/esm/ToggleGroup.mjs
import { jsx as jsx78 } from "react/jsx-runtime";
var TOGGLE_GROUP_NAME = "ToggleGroup";
var TOGGLE_GROUP_ITEM_NAME = "ToggleGroupItem";
var TOGGLE_GROUP_CONTEXT = "ToggleGroup";
var {
  Provider: ToggleGroupItemProvider
} = createStyledContext29();
var {
  Provider: ToggleGroupContext,
  useStyledContext: useToggleGroupContext
} = createStyledContext29({});
var ToggleGroupItem = ToggleFrame.styleable((props, forwardedRef) => {
  const valueContext = useToggleGroupValueContext(props.__scopeToggleGroup), context4 = useToggleGroupContext(props.__scopeToggleGroup), toggleContext = context3.useStyledContext(props.__scopeToggleGroup), active = valueContext?.value.includes(props.value), color = props.color || toggleContext.color, disabled = context4.disabled || props.disabled || false, inner2 = /* @__PURE__ */ jsx78(ToggleGroupItemImpl, {
    ref: forwardedRef,
    tabIndex: disabled ? -1 : 0,
    ...props,
    active,
    disabled
  });
  return /* @__PURE__ */ jsx78(ToggleGroupItemProvider, {
    scope: props.__scopeToggleGroup,
    children: /* @__PURE__ */ jsx78(context3.Provider, {
      color,
      active,
      children: context4.rovingFocus ? /* @__PURE__ */ jsx78(RovingFocusGroup.Item, {
        asChild: "except-style",
        __scopeRovingFocusGroup: props.__scopeToggleGroup || TOGGLE_GROUP_CONTEXT,
        focusable: !disabled,
        active,
        children: inner2
      }) : inner2
    })
  });
});
ToggleGroupItem.displayName = TOGGLE_GROUP_ITEM_NAME;
var ToggleGroupItemImpl = React93.forwardRef((props, forwardedRef) => {
  const {
    __scopeToggleGroup,
    value,
    ...itemProps
  } = props, valueContext = useToggleGroupValueContext(__scopeToggleGroup), singleProps = {
    "aria-pressed": void 0
  }, typeProps = valueContext.type === "single" ? singleProps : void 0;
  return /* @__PURE__ */ jsx78(Toggle, {
    ...typeProps,
    ...itemProps,
    ref: forwardedRef,
    onActiveChange: /* @__PURE__ */ __name((pressed) => {
      pressed ? valueContext.onItemActivate(value) : valueContext.onItemDeactivate(value);
    }, "onActiveChange")
  });
});
var ToggleGroup = withStaticProperties(React93.forwardRef((props, forwardedRef) => {
  const {
    type,
    ...toggleGroupProps
  } = props;
  if (isWeb || React93.useEffect(() => {
    if (props.id) return registerFocusable(props.id, {
      focus: /* @__PURE__ */ __name(() => {
      }, "focus")
    });
  }, [props.id]), type === "single") return /* @__PURE__ */ jsx78(ToggleGroupImplSingle, {
    ...toggleGroupProps,
    ref: forwardedRef
  });
  if (type === "multiple") return /* @__PURE__ */ jsx78(ToggleGroupImplMultiple, {
    ...toggleGroupProps,
    ref: forwardedRef
  });
  throw new Error(`Missing prop \`type\` expected on \`${TOGGLE_GROUP_NAME}\``);
}), {
  Item: ToggleGroupItem
});
ToggleGroup.displayName = TOGGLE_GROUP_NAME;
var {
  Provider: ToggleGroupValueProvider,
  useStyledContext: useToggleGroupValueContext
} = createStyledContext29();
var ToggleGroupImplSingle = React93.forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue: defaultValue2,
    onValueChange = /* @__PURE__ */ __name(() => {
    }, "onValueChange"),
    disableDeactivation = false,
    children,
    ...toggleGroupSingleProps
  } = props, [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue2,
    onChange: onValueChange
  });
  return /* @__PURE__ */ jsx78(ToggleGroupValueProvider, {
    scope: props.__scopeToggleGroup,
    type: "single",
    value: value ? [value] : [],
    defaultValue: value,
    onItemActivate: setValue,
    onItemDeactivate: React93.useCallback(() => disableDeactivation ? null : setValue(""), [setValue, disableDeactivation]),
    children: /* @__PURE__ */ jsx78(ToggleGroupImpl, {
      ...toggleGroupSingleProps,
      ref: forwardedRef,
      children
    })
  });
});
var ToggleGroupImplMultiple = React93.forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue: defaultValue2,
    onValueChange = /* @__PURE__ */ __name(() => {
    }, "onValueChange"),
    disableDeactivation,
    children,
    ...toggleGroupMultipleProps
  } = props, [value = [], setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue2,
    onChange: onValueChange
  }), handleButtonActivate = React93.useCallback((itemValue) => setValue((prevValue = []) => [...prevValue, itemValue]), [setValue]), handleButtonDeactivate = React93.useCallback((itemValue) => setValue((prevValue = []) => prevValue.filter((value2) => value2 !== itemValue)), [setValue]);
  return /* @__PURE__ */ jsx78(ToggleGroupValueProvider, {
    scope: props.__scopeToggleGroup,
    type: "multiple",
    value,
    defaultValue: value,
    onItemActivate: handleButtonActivate,
    onItemDeactivate: handleButtonDeactivate,
    children: /* @__PURE__ */ jsx78(ToggleGroupImpl, {
      ...toggleGroupMultipleProps,
      ref: forwardedRef,
      children
    })
  });
});
var ToggleGroupFrame = styled49(View28, {
  name: TOGGLE_GROUP_NAME
});
var ToggleGroupImpl = ToggleGroupFrame.styleable((props, forwardedRef) => {
  const {
    __scopeToggleGroup,
    disabled = false,
    orientation = "horizontal",
    dir,
    rovingFocus = true,
    loop = true,
    color,
    ...toggleGroupProps
  } = props, direction = useDirection(dir), content = /* @__PURE__ */ jsx78(ToggleGroupFrame, {
    role: "group",
    ref: forwardedRef,
    "data-disabled": disabled ? "" : void 0,
    ...toggleGroupProps
  });
  return /* @__PURE__ */ jsx78(ToggleGroupContext, {
    scope: __scopeToggleGroup,
    rovingFocus,
    disabled,
    children: /* @__PURE__ */ jsx78(context3.Provider, {
      color,
      children: rovingFocus ? /* @__PURE__ */ jsx78(RovingFocusGroup, {
        asChild: "except-style",
        __scopeRovingFocusGroup: __scopeToggleGroup || TOGGLE_GROUP_CONTEXT,
        orientation,
        dir: direction,
        loop,
        children: content
      }) : content
    })
  });
});

// node_modules/@tamagui/tooltip/dist/esm/Tooltip.mjs
import { useEvent as useEvent13 } from "@tamagui/core";
import * as React94 from "react";
import { jsx as jsx79 } from "react/jsx-runtime";
var TOOLTIP_SCOPE = "";
var ALWAYS_DISABLE_TOOLTIP = {
  focus: true,
  "remove-scroll": true
  // it's nice to hit escape to hide a tooltip
  // dismiss: true
};
var TooltipContent = PopperContentFrame.styleable((props, ref) => {
  const preventAnimation = React94.useContext(PreventTooltipAnimationContext), zIndexFromContext = React94.useContext(TooltipZIndexContext);
  return /* @__PURE__ */ jsx79(PopoverContent, {
    scope: props.scope || TOOLTIP_SCOPE,
    alwaysDisable: ALWAYS_DISABLE_TOOLTIP,
    ...!props.unstyled && {
      backgroundColor: "$background",
      alignItems: "center",
      pointerEvents: "none",
      size: "$true"
    },
    ref,
    ...zIndexFromContext !== void 0 && {
      zIndex: zIndexFromContext
    },
    ...props,
    ...preventAnimation && {
      transition: null
    }
  });
}, {
  staticConfig: {
    componentName: "Tooltip"
  }
});
var TooltipArrow = React94.forwardRef((props, ref) => /* @__PURE__ */ jsx79(PopoverArrow, {
  scope: props.scope || TOOLTIP_SCOPE,
  componentName: "Tooltip",
  ref,
  ...props
}));
var PreventTooltipAnimationContext = React94.createContext(false);
var TooltipZIndexContext = React94.createContext(void 0);
var TooltipGroup = /* @__PURE__ */ __name(({
  children,
  delay,
  preventAnimation = false,
  timeoutMs
}) => /* @__PURE__ */ jsx79(PreventTooltipAnimationContext.Provider, {
  value: preventAnimation,
  children: /* @__PURE__ */ jsx79(FloatingDelayGroup, {
    timeoutMs,
    delay: React94.useMemo(() => delay, [JSON.stringify(delay)]),
    children
  })
}), "TooltipGroup");
var setOpens = /* @__PURE__ */ new Set();
var closeOpenTooltips = /* @__PURE__ */ __name(() => {
  setOpens.forEach((x) => x(false));
}, "closeOpenTooltips");
var TooltipComponent = React94.forwardRef(function(props, ref) {
  "use no memo";
  const {
    children,
    delay: delayProp,
    restMs: restMsProp,
    onOpenChange: onOpenChangeProp,
    focus: focus2,
    open: openProp,
    disableAutoCloseOnScroll,
    zIndex,
    scope = TOOLTIP_SCOPE,
    ...restProps
  } = props, triggerRef = React94.useRef(null), [hasCustomAnchor, setHasCustomAnchor] = React94.useState(false), {
    delay: delayGroup,
    setCurrentId
  } = useDelayGroupContext(), delay = delayProp !== void 0 ? delayProp : delayGroup ?? 400, restMs = restMsProp ?? (typeof delay == "number" ? delay : 0), [open2, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: false,
    onChange: onOpenChangeProp
  }), id = props.groupId, onOpenChange = useEvent13((open22) => {
    open22 && setCurrentId(id), setOpen(open22);
  });
  React94.useEffect(() => {
    if (!open2 || disableAutoCloseOnScroll || typeof document > "u") return;
    const closeIt = /* @__PURE__ */ __name(() => {
      setOpen(false);
    }, "closeIt");
    return setOpens.add(setOpen), document.documentElement.addEventListener("scroll", closeIt), () => {
      setOpens.delete(setOpen), document.documentElement.removeEventListener("scroll", closeIt);
    };
  }, [open2, disableAutoCloseOnScroll]);
  const floatingContext = useFloatingContext({
    open: open2,
    setOpen: onOpenChange,
    disable: false,
    disableFocus: false,
    hoverable: true,
    role: "tooltip",
    focus: focus2,
    groupId: id,
    delay,
    restMs
  }), onCustomAnchorAdd = React94.useCallback(() => setHasCustomAnchor(true), []), onCustomAnchorRemove = React94.useCallback(() => setHasCustomAnchor(false), []), contentId = React94.useId(), smallerSize = props.unstyled ? null : getSize("$true", {
    shift: -2,
    bounds: [0]
  }), content = /* @__PURE__ */ jsx79(FloatingOverrideContext.Provider, {
    value: floatingContext,
    children: /* @__PURE__ */ jsx79(Popper, {
      scope,
      size: smallerSize?.key,
      allowFlip: true,
      stayInFrame: true,
      open: open2,
      ...restProps,
      children: /* @__PURE__ */ jsx79(PopoverContextProvider, {
        scope,
        contentId,
        triggerRef,
        open: open2,
        onOpenChange: setOpen,
        onOpenToggle: voidFn2,
        hasCustomAnchor,
        onCustomAnchorAdd,
        onCustomAnchorRemove,
        children
      })
    })
  });
  return zIndex !== void 0 ? /* @__PURE__ */ jsx79(TooltipZIndexContext.Provider, {
    value: zIndex,
    children: content
  }) : content;
});
var TooltipTrigger = React94.forwardRef(function(props, ref) {
  const {
    scope,
    ...rest
  } = props;
  return /* @__PURE__ */ jsx79(PopoverTrigger, {
    ...rest,
    scope: scope || TOOLTIP_SCOPE,
    ref
  });
});
var TooltipAnchor = React94.forwardRef(function(props, ref) {
  const {
    scope,
    ...rest
  } = props;
  return /* @__PURE__ */ jsx79(PopoverAnchor, {
    ...rest,
    scope: scope || TOOLTIP_SCOPE,
    ref
  });
});
var Tooltip2 = withStaticProperties(TooltipComponent, {
  Anchor: TooltipAnchor,
  Arrow: TooltipArrow,
  Content: TooltipContent,
  Trigger: TooltipTrigger
});
var voidFn2 = /* @__PURE__ */ __name(() => {
}, "voidFn");

// node_modules/@tamagui/tooltip/dist/esm/TooltipSimple.mjs
import * as React95 from "react";
import { jsx as jsx80, jsxs as jsxs19 } from "react/jsx-runtime";
var TooltipSimple = React95.forwardRef(({
  label,
  children,
  contentProps,
  disabled,
  ...tooltipProps
}, ref) => {
  "use no memo";
  const child = React95.Children.only(children);
  return label ? /* @__PURE__ */ jsxs19(Tooltip2, {
    disableRTL: true,
    offset: 15,
    restMs: 40,
    delay: 40,
    zIndex: 1e6,
    ...tooltipProps,
    ...disabled ? {
      open: false
    } : null,
    children: [/* @__PURE__ */ jsx80(Tooltip2.Trigger, {
      ...typeof label == "string" && {
        "aria-label": label
      },
      asChild: "except-style",
      children: ref && React95.isValidElement(child) ? React95.cloneElement(child, {
        ref
      }) : child
    }), /* @__PURE__ */ jsxs19(Tooltip2.Content, {
      enterStyle: {
        y: -4,
        opacity: 0,
        scale: 0.96
      },
      exitStyle: {
        y: -4,
        opacity: 0,
        scale: 0.96
      },
      scale: 1,
      elevation: "$0.5",
      opacity: 1,
      pointerEvents: "none",
      paddingVertical: getSpace(tooltipProps.size || "$true", {
        shift: -4
      }),
      animateOnly: ["transform", "opacity"],
      transition: ["quicker", {
        opacity: {
          overshootClamping: true
        }
      }],
      ...contentProps,
      children: [/* @__PURE__ */ jsx80(Tooltip2.Arrow, {}), /* @__PURE__ */ jsx80(Paragraph, {
        maxWidth: 350,
        overflow: "hidden",
        size: "$3",
        textAlign: "center",
        "$platform-web": {
          textWrap: "balance"
        },
        children: label
      })]
    })]
  }) : children;
});

// node_modules/@tamagui/use-debounce/dist/esm/index.mjs
import * as React96 from "react";
function debounce(func2, wait, leading) {
  let timeout, isCancelled = false;
  function debounced() {
    isCancelled = false;
    const args = arguments;
    leading && !timeout && func2.apply(this, args), clearTimeout(timeout), timeout = setTimeout(() => {
      timeout = null, leading || isCancelled || func2.apply(this, args), isCancelled = false;
    }, wait);
  }
  __name(debounced, "debounced");
  return debounced.cancel = () => {
    isCancelled = true;
  }, debounced;
}
__name(debounce, "debounce");
var defaultOpts = {
  leading: false
};
function useDebounce(fn, wait, options = defaultOpts, mountArgs = [fn]) {
  const dbEffect = React96.useRef(null);
  return React96.useEffect(() => () => {
    dbEffect.current?.cancel();
  }, []), React96.useMemo(() => (dbEffect.current = debounce(fn, wait, options.leading), dbEffect.current), [options.leading, ...mountArgs]);
}
__name(useDebounce, "useDebounce");
function useDebounceValue(val, amt = 0) {
  const [state5, setState] = React96.useState(val);
  return React96.useEffect(() => {
    const tm = setTimeout(() => {
      setState((prev) => prev === val ? prev : val);
    }, amt);
    return () => {
      clearTimeout(tm);
    };
  }, [val]), state5;
}
__name(useDebounceValue, "useDebounceValue");

// node_modules/@tamagui/element/dist/esm/useWebRef.mjs
import * as React97 from "react";
function useWebRef(forwardedRef) {
  const ref = React97.useRef(null), composedRef = useComposedRefs(ref, forwardedRef);
  return {
    ref,
    composedRef
  };
}
__name(useWebRef, "useWebRef");

// node_modules/@tamagui/element/dist/esm/useNativeRef.mjs
import * as React98 from "react";
function useNativeRef(forwardedRef) {
  const ref = React98.useRef(null), composedRef = useComposedRefs(ref, forwardedRef);
  return {
    ref,
    composedRef
  };
}
__name(useNativeRef, "useNativeRef");
function useNativeInputRef(forwardedRef) {
  const ref = React98.useRef(null), composedRef = useComposedRefs(ref, forwardedRef);
  return {
    ref,
    composedRef
  };
}
__name(useNativeInputRef, "useNativeInputRef");

// node_modules/@tamagui/element/dist/esm/getWebElement.mjs
function getWebElement(element) {
  if (!element) throw new Error("Element is null or undefined");
  if (!(element instanceof HTMLElement)) throw new Error("Element is not an HTMLElement");
  return element;
}
__name(getWebElement, "getWebElement");

// node_modules/@tamagui/use-window-dimensions/dist/esm/index.mjs
import React99 from "react";

// node_modules/@tamagui/use-window-dimensions/dist/esm/initialValue.mjs
var initialValue = {
  width: 800,
  height: 600,
  scale: 1,
  fontScale: 1
};
function configureInitialWindowDimensions(next) {
  Object.assign(initialValue, next);
}
__name(configureInitialWindowDimensions, "configureInitialWindowDimensions");

// node_modules/@tamagui/use-window-dimensions/dist/esm/helpers.mjs
var lastSize = initialValue;
var docEl = null;
function getWindowSize() {
  docEl ||= window.document.documentElement;
  const nextSize = {
    fontScale: 1,
    height: docEl.clientHeight,
    scale: window.devicePixelRatio || 1,
    width: docEl.clientWidth
  };
  return nextSize.height !== lastSize.height || nextSize.width !== lastSize.width || nextSize.scale !== lastSize.scale ? (lastSize = nextSize, nextSize) : lastSize;
}
__name(getWindowSize, "getWindowSize");
var cbs = /* @__PURE__ */ new Set();
if (isClient) {
  let flushUpdate = /* @__PURE__ */ __name(function() {
    lastUpdate = Date.now(), cbs.forEach((cb) => cb(getWindowSize()));
  }, "flushUpdate"), lastUpdate = Date.now(), tm;
  const USER_MAX_MS = process.env.TAMAGUI_USE_WINDOW_DIMENSIONS_MAX_UPDATE_MS, updateMaxMs = USER_MAX_MS ? +USER_MAX_MS : 100, onResize = /* @__PURE__ */ __name(() => {
    clearTimeout(tm);
    const timeSinceLast = Date.now() - lastUpdate;
    timeSinceLast < updateMaxMs ? tm = setTimeout(() => {
      flushUpdate();
    }, updateMaxMs - timeSinceLast) : flushUpdate();
  }, "onResize");
  window.addEventListener("resize", onResize);
}
function subscribe2(cb) {
  return cbs.add(cb), () => cbs.delete(cb);
}
__name(subscribe2, "subscribe");

// node_modules/@tamagui/use-window-dimensions/dist/esm/index.mjs
function useWindowDimensions({
  serverValue = initialValue
} = {}) {
  return React99.useSyncExternalStore(subscribe2, getWindowSize, () => isWeb ? serverValue : getWindowSize());
}
__name(useWindowDimensions, "useWindowDimensions");

// node_modules/tamagui/dist/esm/createTamagui.mjs
import { createTamagui as createTamaguiCore } from "@tamagui/core";
var createTamagui = process.env.NODE_ENV !== "development" ? createTamaguiCore : (conf) => {
  const sizeTokenKeys = ["$true"], hasKeys = /* @__PURE__ */ __name((expectedKeys, obj) => expectedKeys.every((k) => typeof obj[k] < "u"), "hasKeys"), tamaguiConfig = createTamaguiCore(conf);
  for (const name of ["size", "space"]) {
    const tokenSet = tamaguiConfig.tokensParsed[name];
    if (!tokenSet) throw new Error(`Expected tokens for "${name}" in ${Object.keys(tamaguiConfig.tokensParsed).join(", ")}`);
    if (!hasKeys(sizeTokenKeys, tokenSet)) throw new Error(`
createTamagui() missing expected tokens.${name}:

Received: ${Object.keys(tokenSet).join(", ")}

Expected: ${sizeTokenKeys.join(", ")}

Tamagui expects a "true" key that is the same value as your default size. This is so 
it can size things up or down from the defaults without assuming which keys you use.

Please define a "true" or "$true" key on your size and space tokens like so (example):

size: {
  sm: 2,
  md: 10,
  true: 10, // this means "md" is your default size
  lg: 20,
}

`);
  }
  const expected = Object.keys(tamaguiConfig.tokensParsed.size);
  for (const name of ["radius", "zIndex"]) {
    const tokenSet = tamaguiConfig.tokensParsed[name], received = Object.keys(tokenSet);
    if (!received.some((rk) => expected.includes(rk))) throw new Error(`
createTamagui() invalid tokens.${name}:

Received: ${received.join(", ")}

Expected a subset of: ${expected.join(", ")}

`);
  }
  return tamaguiConfig;
};

// node_modules/tamagui/dist/esm/views/TamaguiProvider.mjs
import { TamaguiProvider as OGProvider } from "@tamagui/core";
import { jsx as jsx81 } from "react/jsx-runtime";
var TamaguiProvider = /* @__PURE__ */ __name(({
  children,
  ...props
}) => /* @__PURE__ */ jsx81(OGProvider, {
  ...props,
  children: /* @__PURE__ */ jsx81(ZIndexStackContext.Provider, {
    value: 1,
    children: /* @__PURE__ */ jsx81(PortalProvider, {
      shouldAddRootHost: true,
      children
    })
  })
}), "TamaguiProvider");

// node_modules/tamagui/dist/esm/views/Anchor.mjs
import { styled as styled50 } from "@tamagui/core";
import { jsx as jsx82 } from "react/jsx-runtime";
var AnchorFrame = styled50(SizableText2, {
  name: "Anchor",
  render: "a",
  role: "link"
});
var Anchor = AnchorFrame.styleable(({
  href,
  target,
  rel,
  ...props
}, ref) => /* @__PURE__ */ jsx82(AnchorFrame, {
  ...props,
  ...isWeb ? {
    href,
    target,
    rel
  } : {
    onPress: /* @__PURE__ */ __name((event) => {
      props.onPress?.(event), href !== void 0 && Linking_default.openURL(href);
    }, "onPress")
  },
  ref
}));

// node_modules/tamagui/dist/esm/views/EnsureFlexed.mjs
import { Text as Text8, styled as styled51 } from "@tamagui/core";
var EnsureFlexed = styled51(Text8, {
  opacity: 0,
  lineHeight: 0,
  height: 0,
  display: "flex",
  fontSize: 200,
  children: "wwwwwwwwwwwwwwwwwww",
  pointerEvents: "none"
});
EnsureFlexed.isVisuallyHidden = true;

// node_modules/tamagui/dist/esm/views/Fieldset.mjs
import { styled as styled52 } from "@tamagui/core";
var Fieldset = styled52(YStack, {
  name: "Fieldset",
  render: "fieldset",
  // remove browser default styling
  borderWidth: 0,
  variants: {
    horizontal: {
      true: {
        flexDirection: "row",
        alignItems: "center"
      }
    }
  }
});

// node_modules/@tamagui/input/dist/esm/Input.mjs
import { View as View29, styled as styled53, useTheme as useTheme3 } from "@tamagui/core";
import React100 from "react";

// node_modules/@tamagui/input/dist/esm/shared.mjs
import { Text as Text9 } from "@tamagui/core";
import { getVariableValue as getVariableValue13, isWeb as isWeb14 } from "@tamagui/core";
var defaultStyles = {
  size: "$true",
  fontFamily: "$body",
  borderWidth: 1,
  outlineWidth: 0,
  color: "$color",
  ...isWeb14 ? {
    tabIndex: 0
  } : {
    focusable: true
  },
  borderColor: "$borderColor",
  backgroundColor: "$background",
  // this fixes a flex bug where it overflows container
  minWidth: 0,
  hoverStyle: {
    borderColor: "$borderColorHover"
  },
  focusStyle: {
    borderColor: "$borderColorFocus"
  },
  focusVisibleStyle: {
    outlineColor: "$outlineColor",
    outlineWidth: 2,
    outlineStyle: "solid"
  }
};
var inputSizeVariant = /* @__PURE__ */ __name((val = "$true", extras) => {
  if (extras.props.tag === "textarea" || extras.props.rows > 1 || extras.props.multiline || extras.props.numberOfLines > 1) return textAreaSizeVariant(val, extras);
  const buttonStyles = getButtonSized(val, extras), paddingHorizontal = getSpace(val, {
    shift: -1,
    bounds: [2]
  }), fontStyle = getFontSized(val, extras);
  return !isWeb14 && fontStyle && delete fontStyle.lineHeight, {
    ...fontStyle,
    ...buttonStyles,
    paddingHorizontal
  };
}, "inputSizeVariant");
var textAreaSizeVariant = /* @__PURE__ */ __name((val = "$true", extras) => {
  const {
    props
  } = extras, buttonStyles = getButtonSized(val, extras), fontStyle = getFontSized(val, extras), lines = props.rows ?? props.numberOfLines, height = typeof lines == "number" ? lines * getVariableValue13(fontStyle.lineHeight) : "auto";
  !isWeb14 && fontStyle && delete fontStyle.lineHeight;
  const paddingVertical = getSpace(val, {
    shift: -2,
    bounds: [2]
  }), paddingHorizontal = getSpace(val, {
    shift: -1,
    bounds: [2]
  });
  return {
    ...buttonStyles,
    ...fontStyle,
    paddingVertical,
    paddingHorizontal,
    height
  };
}, "textAreaSizeVariant");
var INPUT_NAME = "Input";
var styledBody = [{
  name: INPUT_NAME,
  render: "input",
  variants: {
    unstyled: {
      false: defaultStyles
    },
    size: {
      "...size": inputSizeVariant
    },
    disabled: {
      true: {}
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
}, {
  isInput: true,
  accept: {
    placeholderTextColor: "color",
    selectionColor: "color",
    cursorColor: "color",
    selectionHandleColor: "color",
    underlineColorAndroid: "color"
  },
  validStyles: Text9.staticConfig.validStyles
}];

// node_modules/@tamagui/input/dist/esm/Input.mjs
import { jsx as jsx83 } from "react/jsx-runtime";
var StyledInput = styled53(View29, styledBody[0], styledBody[1]);
var Input = StyledInput.styleable((props, _forwardedRef) => {
  const {
    disabled,
    id,
    onChangeText,
    onSubmitEditing,
    onSelectionChange,
    selection,
    placeholderTextColor,
    selectionColor,
    rows,
    // Native-only props (ignored on web)
    keyboardAppearance,
    returnKeyType,
    submitBehavior,
    blurOnSubmit,
    caretHidden,
    contextMenuHidden,
    selectTextOnFocus,
    secureTextEntry,
    maxFontSizeMultiplier,
    allowFontScaling,
    multiline,
    keyboardType,
    autoCapitalize: autoCapitalizeProp,
    autoCorrect: autoCorrectProp,
    autoFocusNative,
    textContentType,
    onEndEditing,
    onContentSizeChange,
    onScroll,
    onKeyPress,
    // iOS-only props (ignored on web)
    clearButtonMode,
    clearTextOnFocus,
    enablesReturnKeyAutomatically,
    dataDetectorTypes,
    scrollEnabled,
    passwordRules,
    rejectResponderTermination,
    spellCheck,
    lineBreakStrategyIOS,
    lineBreakModeIOS,
    smartInsertDelete,
    inputAccessoryViewID,
    inputAccessoryViewButtonLabel,
    disableKeyboardShortcuts,
    // Android-only props (ignored on web)
    cursorColor,
    selectionHandleColor,
    underlineColorAndroid,
    importantForAutofill,
    disableFullscreenUI,
    inlineImageLeft,
    inlineImagePadding,
    returnKeyLabel,
    textBreakStrategy,
    textAlignVertical,
    verticalAlign,
    showSoftInputOnFocus,
    numberOfLines,
    ...rest
  } = props, {
    ref,
    composedRef
  } = useWebRef(_forwardedRef), theme = useTheme3(), autoCorrect = autoCorrectProp === true ? "on" : autoCorrectProp === false ? "off" : autoCorrectProp, autoCapitalize = autoCapitalizeProp === "sentences" || autoCapitalizeProp === "words" ? "on" : autoCapitalizeProp === "none" || autoCapitalizeProp === "characters" ? "off" : autoCapitalizeProp;
  React100.useEffect(() => {
    if (!onSelectionChange) return;
    const node = ref.current;
    if (!node) return;
    const handleSelectionChange = /* @__PURE__ */ __name(() => {
      onSelectionChange({
        nativeEvent: {
          selection: {
            start: node.selectionStart ?? 0,
            end: node.selectionEnd ?? 0
          }
        }
      });
    }, "handleSelectionChange");
    return node.addEventListener("select", handleSelectionChange), () => node.removeEventListener("select", handleSelectionChange);
  }, [onSelectionChange]), React100.useEffect(() => {
    selection && ref.current && ref.current.setSelectionRange(selection.start, selection.end ?? selection.start);
  }, [selection?.start, selection?.end]), React100.useEffect(() => {
    if (!(!id || disabled)) return registerFocusable(id, {
      focusAndSelect: /* @__PURE__ */ __name(() => ref.current?.focus(), "focusAndSelect"),
      focus: /* @__PURE__ */ __name(() => ref.current?.focus(), "focus")
    });
  }, [id, disabled]);
  const handleKeyDown = /* @__PURE__ */ __name((e) => {
    e.key === "Enter" && onSubmitEditing && onSubmitEditing({
      nativeEvent: {
        text: e.target.value
      }
    }), rest.onKeyDown?.(e);
  }, "handleKeyDown"), handleChange = /* @__PURE__ */ __name((e) => {
    onChangeText?.(e.target.value), rest.onChange?.(e);
  }, "handleChange"), finalProps = {
    ...rest,
    disabled,
    id,
    rows,
    autoCorrect,
    autoCapitalize,
    onKeyDown: onSubmitEditing ? handleKeyDown : rest.onKeyDown,
    onChange: onChangeText ? handleChange : rest.onChange,
    style: {
      ...rest.style,
      ...placeholderTextColor && {
        "--placeholderColor": theme[placeholderTextColor]?.variable || placeholderTextColor
      },
      ...selectionColor && {
        "--selectionColor": theme[selectionColor]?.variable || selectionColor
      }
    }
  };
  return /* @__PURE__ */ jsx83(StyledInput, {
    ref: composedRef,
    ...finalProps
  });
});

// node_modules/@tamagui/input/dist/esm/TextArea.mjs
import { styled as styled54 } from "@tamagui/web";
var TextArea = styled54(Input, {
  name: "TextArea",
  render: "textarea",
  // this attribute fixes firefox newline issue
  // @ts-ignore
  whiteSpace: "pre-wrap",
  variants: {
    unstyled: {
      false: {
        height: "auto",
        ...defaultStyles,
        rows: 3
      }
    },
    size: {
      "...size": textAreaSizeVariant
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});

// node_modules/@tamagui/spinner/dist/esm/Spinner.mjs
import { useTheme as useTheme4, variableToString } from "@tamagui/core";
import { jsx as jsx84 } from "react/jsx-runtime";
var Spinner = YStack.styleable((props, ref) => {
  const {
    size: size4,
    color: colorProp,
    ...stackProps
  } = props, theme = useTheme4();
  let color = colorProp;
  return color && color[0] === "$" && (color = variableToString(theme[color])), /* @__PURE__ */ jsx84(YStack, {
    ref,
    ...stackProps,
    children: /* @__PURE__ */ jsx84(ActivityIndicator_default, {
      size: size4,
      color
    })
  });
});

// node_modules/tamagui/dist/esm/views/Text.mjs
import { Text as TamaguiText, styled as styled55 } from "@tamagui/core";
var Text10 = styled55(TamaguiText, {
  variants: {
    unstyled: {
      false: {
        color: "$color"
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});

// node_modules/tamagui/dist/esm/index.mjs
import { ClientOnly, Configuration, ComponentContext, GroupContext, FontLanguage, Theme as Theme4, View as View30, createComponent as createComponent2, createFont, createShorthands, createStyledContext as createStyledContext30, createTokens, createVariable, getConfig as getConfig3, getMedia, getCSSStylesAtomic, getThemes, getToken, getTokenValue as getTokenValue4, getTokens as getTokens5, getVariable as getVariable2, getVariableName, getVariableValue as getVariableValue14, insertFont, setConfig, setupDev, _withStableStyle, isBrowser as isBrowser2, isChrome as isChrome2, isClient as isClient3, isServer as isServer3, isTamaguiComponent, isTamaguiElement, isTouchable as isTouchable2, isVariable as isVariable4, isWeb as isWeb15, isWebTouchable as isWebTouchable2, matchMedia as matchMedia2, mediaObjectToString, mediaQueryConfig, mediaState, setOnLayoutStrategy, styled as styled56, themeable, useClientValue, useDidFinishSSR as useDidFinishSSR4, useEvent as useEvent14, useGet as useGet4, useIsTouchDevice as useIsTouchDevice4, useIsomorphicLayoutEffect as useIsomorphicLayoutEffect3, useMedia as useMedia2, useProps as useProps3, usePropsAndStyle, useStyle, useConfiguration as useConfiguration5, useTheme as useTheme5, useThemeName as useThemeName7, variableToString as variableToString2, withStaticProperties as withStaticProperties13 } from "@tamagui/core";
export {
  ACTIONS,
  Accordion,
  Adapt,
  AdaptContents,
  AdaptContext,
  AdaptParent,
  AdaptPortalContents,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogDestructive,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  Anchor,
  Animate,
  AnimatePresence,
  Article,
  Aside,
  Avatar,
  AvatarFallback,
  AvatarFallbackFrame,
  AvatarFrame,
  AvatarImage,
  Button,
  ButtonContext,
  ButtonNestingContext,
  Card,
  CardBackground,
  CardFooter,
  CardFrame,
  CardHeader,
  Checkbox,
  CheckboxContext,
  CheckboxFrame,
  CheckboxIndicatorFrame,
  CheckboxStyledContext,
  Circle,
  ClientOnly,
  Collapsible,
  CollapsibleContent,
  CollapsibleContentFrame,
  CollapsibleTrigger,
  CollapsibleTriggerFrame,
  ComponentContext,
  Configuration,
  ContextMenu,
  Dialog,
  DialogClose,
  DialogContent,
  DialogContext,
  DialogDescription,
  DialogOverlay,
  DialogOverlayFrame,
  DialogPortal,
  DialogPortalFrame,
  DialogProvider,
  DialogTitle,
  DialogTrigger,
  DialogWarningProvider,
  Em,
  EnsureFlexed,
  Fieldset,
  FontLanguage,
  Footer,
  Form2 as Form,
  FormContext,
  FormFrame,
  FormProvider,
  FormTrigger,
  ForwardSelectContext,
  Frame2 as Frame,
  Group,
  GroupContext,
  GroupFrame,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Handle,
  Header,
  Heading,
  INITIAL_STATE,
  Image,
  Input,
  Label,
  LabelFrame,
  ListItem2 as ListItem,
  Main,
  Menu,
  MenuPredefined,
  Nav,
  Overlay,
  Paragraph,
  ParentSheetContext,
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverContext,
  PopoverContextProvider,
  PopoverTrigger,
  PopoverTriggerContext,
  PopoverZIndexContext,
  Popper,
  PopperAnchor,
  PopperArrow,
  PopperArrowFrame,
  PopperContent,
  PopperContentFrame,
  PopperContextFast,
  PopperContextSlow,
  PopperPositionContext,
  PopperProvider,
  PopperProviderFast,
  PopperProviderSlow,
  Portal,
  PortalHost,
  GorhomPortalItem as PortalItem,
  PortalProvider,
  PresenceChild,
  PresenceContext,
  Progress,
  ProgressFrame,
  ProgressIndicator,
  ProgressIndicatorFrame,
  ProvideAdaptContext,
  RadioGroup,
  RadioGroupFrame,
  RadioGroupIndicatorFrame,
  RadioGroupItemFrame,
  RadioGroupStyledContext,
  Range,
  ResetPresence,
  ScrollView2 as ScrollView,
  Section,
  Select,
  SelectGroupFrame,
  SelectIcon,
  SelectItemParentProvider,
  SelectProvider,
  SelectSeparator,
  SelectZIndexContext,
  Separator,
  Sheet,
  SheetController,
  SheetControllerContext,
  SheetInsideSheetContext,
  SheetScrollView,
  SizableStack,
  SizableText2 as SizableText,
  Slider,
  SliderActive,
  SliderActiveFrame,
  SliderContext,
  SliderFrame,
  SliderThumb,
  SliderThumbFrame,
  SliderTrack,
  SliderTrackFrame,
  Spacer,
  Span,
  Spinner,
  Square,
  Strong,
  StyleObjectIdentifier,
  StyleObjectProperty,
  StyleObjectPseudo,
  StyleObjectRules,
  StyleObjectValue,
  Switch,
  SwitchFrame,
  SwitchStyledContext,
  SwitchThumb,
  Tabs,
  TabsProvider,
  TamaguiProvider,
  Text10 as Text,
  TextArea,
  Theme4 as Theme,
  ThemeableStack,
  Thumb,
  Toast2 as Toast,
  ToastProvider,
  ToastViewport,
  ToggleGroup,
  Tooltip2 as Tooltip,
  TooltipGroup,
  TooltipSimple,
  Track,
  Unspaced,
  View30 as View,
  VisuallyHidden,
  XGroup,
  XStack,
  YGroup,
  YStack,
  ZStack,
  _withStableStyle,
  addTheme,
  allPortalHosts,
  clamp,
  closeLastOpenedPopover,
  closeOpenPopovers,
  closeOpenTooltips,
  composeEventHandlers,
  composeRefs,
  configureInitialWindowDimensions,
  createAvatarScope,
  createBaseMenu,
  createCheckbox,
  createComponent2 as createComponent,
  createContext8 as createContext,
  createContextScope,
  createFont,
  createGroupScope,
  createImage,
  createMedia,
  createNativeMenu,
  createProgressScope,
  createRadioGroup,
  createSheet2 as createSheet,
  createSheetScope,
  createShorthands,
  createStyledContext30 as createStyledContext,
  createSwitch,
  createTabs,
  createTamagui,
  createTokens,
  createVariable,
  cssShorthandLonghands,
  debounce,
  fullscreenStyle,
  getCSSStylesAtomic,
  getConfig3 as getConfig,
  getElevation,
  getFontSize,
  getFontSizeToken,
  getFontSizeVariable,
  getIcon,
  getMedia,
  getNativeSheet,
  getShapeSize,
  getSizedElevation,
  getThemes,
  getToken,
  getTokenValue4 as getTokenValue,
  getTokens5 as getTokens,
  getVariable2 as getVariable,
  getVariableName,
  getVariableValue14 as getVariableValue,
  getWebElement,
  hasOpenPopovers,
  inputSizeVariant,
  insertFont,
  isBrowser2 as isBrowser,
  isChrome2 as isChrome,
  isClient3 as isClient,
  isPresent,
  isServer3 as isServer,
  isServerSide,
  isTamaguiComponent,
  isTamaguiElement,
  isTeleportEnabled,
  isTouchable2 as isTouchable,
  isUnspaced,
  isVariable4 as isVariable,
  isWeb15 as isWeb,
  isWebTouchable2 as isWebTouchable,
  matchMedia2 as matchMedia,
  mediaObjectToString,
  mediaQueryConfig,
  mediaState,
  mutateThemes,
  needsPortalRepropagation,
  nonAnimatableStyleProps,
  nonAnimatableWebTextProps,
  nonAnimatableWebViewProps,
  portalListeners,
  prevent,
  replaceTheme,
  resolveViewZIndex,
  setConfig,
  setOnLayoutStrategy,
  setRef,
  setupDev,
  setupNativeSheet,
  setupPopper,
  shouldRenderNativePlatform,
  simpleHash,
  spacedChildren,
  stylePropsAll,
  stylePropsText,
  stylePropsTextOnly,
  stylePropsTransform,
  stylePropsUnitless,
  stylePropsView,
  styled56 as styled,
  textAreaSizeVariant,
  themeable,
  themeableVariants,
  tokenCategories,
  updateTheme,
  useAdaptContext,
  useAdaptIsActive,
  useClientValue,
  useComposedRefs,
  useConfiguration5 as useConfiguration,
  useControllableState,
  useCurrentColor,
  useDebounce,
  useDebounceValue,
  useDialogContext,
  useDidFinishSSR4 as useDidFinishSSR,
  useEvent14 as useEvent,
  useFloatingContext,
  useForceUpdate,
  useFormContext,
  useGet4 as useGet,
  useGetThemedIcon,
  useGroupItem,
  useIsPresent,
  useIsTouchDevice4 as useIsTouchDevice,
  useIsomorphicLayoutEffect3 as useIsomorphicLayoutEffect,
  useLabelContext,
  useMedia2 as useMedia,
  useNativeInputRef,
  useNativeRef,
  usePopoverContext,
  usePopoverOpen,
  usePopoverTriggerContext,
  usePopoverTriggerSetup,
  usePopperContext,
  usePopperContextSlow,
  usePortal,
  usePresence,
  useProps3 as useProps,
  usePropsAndStyle,
  useSelectContext,
  useSelectItemParentContext,
  useSheet,
  useSheetController,
  useSheetOffscreenSize,
  useSheetOpenState,
  useStyle,
  useSwitchNative,
  useTabsContext,
  useTheme5 as useTheme,
  useThemeName7 as useThemeName,
  useToast,
  useToastController,
  useToastState,
  useToggleGroupItem,
  useWebRef,
  useWindowDimensions,
  validPseudoKeys,
  validStyles,
  variableToString2 as variableToString,
  webOnlyStylePropsText,
  webOnlyStylePropsView,
  withNativeMenu,
  withStaticProperties13 as withStaticProperties,
  wrapChildrenInText
};
