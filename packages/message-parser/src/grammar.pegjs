{
  const {
    paragraph,
    bold,
    plain,
    italic,
    strike,
    code,
    link,
    heading,
    inlineCode,
    quote,
    reducePlainTexts,
    codeLine,
    mentionChannel,
    mentionUser,
    emoji,
    color,
  } = require('./utils');
}

start
  = block:(Blocks / Inline / text:EndOfLine { return paragraph([plain('')]); })+

Blocks = teste:(MultiplelLineCode / Heading / Tasks / Section)

Emphasis
  = Bold
  / Italic
  / Strikethrough

Inline
  = value:(
      Emoji
      / References
      / InlineCode
      / Phone
      / Uri
      / Emphasis
      / Color
      / UserMention
      / ChannelMention
      / Plain
    )+
    EndOfLine? { return paragraph(reducePlainTexts(value)); }

Plain
  = Line
  / text:AnyText2 { return plain(text); }

Digit1_9 = [1-9]

EOF = !.

crlf
  = "\r\n"
  / "\r"
  / "\n"

EatLine = (!crlf !EOF .)*

EndOfLine
  = "\r\n"
  / "\n"
  / "\r"

Space
  = " "+
  / "\t"

AnyText
  = [\x20-\x27]
  / [\x2B-\x40]
  / [\x41-\x5A]
  / [\x61-\x7A]
  / nonascii

ListText
  = [\x20-\x27]
  / [\x2B-\x40]
  / [\x41-\x5A]
  / [\x60-\x7A]
  / nonascii

LinkText
  = [\x20-\x2A]
  / [\x2B-\x40]
  / [\x41-\x5B]
  / [\x61-\x7A]
  / nonascii

CodeText
  = [\x20-\x2A]
  / [\x2B-\x40]
  / [\x41-\x5F]
  / [\x61-\x7E]
  / nonascii
  / EndOfLine
  / Space

AnyText2
  = [\x20-\x40]
  / [\x41-\x60]
  / [\x61-\xFFFF]
  / nonascii

SectionText
  = [-]+
  / [\x20-\x40]
  / [\x41-\x60]
  / [\x61-\x7A]
  / nonascii

Line = t:line { return plain(t); }

line
  = head:Space* text:AnyText+ tail:Space* {
      return head.join('') + text.join('') + tail.join('');
    }

Heading = "# "+ text:Line { return heading([text], 1); }

utf8_names_validation = text:[0-9a-zA-Z-_.]+ { return text.join(''); }

UserMention = "@"+ user:utf8_names_validation { return mentionUser(user); }

ChannelMention
  = "#"+ channel:utf8_names_validation { return mentionChannel(channel); }

Emoji = ":" text:utf8_names_validation ":" { return emoji(text); }

/* Sceenshot ------------- */
Section
  = text:SectionText+ ("\r\n" / "\n" / "\r") [-]+ EndOfLine? {
      return {
        section: text.join(''),
      };
    }

/* __Italic__ */
/* _Italic_ */
Italic
  = [\x5F] [\x5F] i:Italic_Content [\x5F] [\x5F] { return i; }
  / [\x5F] i:Italic_Content [\x5F] { return i; }

Italic_Content = text:(Bold / Strikethrough / Line)+ { return italic(text); }

/* **Bold** */
/* *Bold* */
Bold
  = [\x2A] [\x2A] b:Bold_Content [\x2A] [\x2A] { return b; }
  / [\x2A] b:Bold_Content [\x2A] { return b; }

Bold_Content = text:(Italic / Strikethrough / Line)+ { return bold(text); }

/* ~~Mistaken text.~~ */
/* ~Mistaken text.~ */
Strikethrough
  = [\x7E] [\x7E] s:Strikethrough_Content [\x7E] [\x7E] { return s; }
  / [\x7E] s:Strikethrough_Content [\x7E] { return s; }

// Line = t:line { return plain(t); }

// line
//   = head:Space* text:AnyText+ tail:Space* {
//       return head.join('') + text.join('') + tail.join('');
//     }

Strikethrough_Content = text:(Italic / Bold / Line)+ { return strike(text); }

ListItem
  = ("\x2A " / "\x2D ") text:ListText+ Space? { return text.join('').trim(); }

TaskItem
  = (("- [x] " / "- [ ] ") text:AnyText+ Space?) {
      return text.join('').trim();
    }

OrderedListItem
  = "  "? (Digit1_9+ "\x2E ") text:AnyText+ Space? {
      return text.join('').trim();
    }

Paragraph = EndOfLine text:AnyText2 { return paragraph(text); }

Lists
  = lists:ListItem+ {
      return {
        lists: lists,
      };
    }

// - [ ] this is an incomplete item
Tasks
  = tasks:TaskItem+ {
      return {
        tasks: tasks,
      };
    }

OrderedLists
  = lists:OrderedListItem+ {
      return {
        listsOrdered: lists,
      };
    }

Type
  = "bash" "c"
  / "cpp"
  / "html"
  / "javascript"
  / "js"
  / "json"
  / "java"
  / "ruby"

InlineCode = "`" text:Line "`" { return inlineCode(text); }

LineCode "LineCode"
  = text:[^"\n"\`]+ "`"? { return codeLine(plain(text.join(''))); }
  / "\n" text:[^"\n"\`]+ "`"? { return codeLine(plain(text.join(''))); }

MultiplelLineCode = "```\n" value:LineCode+ "\n```" { return code(value); }

// [Visit GitHub!](www.github.com)
LinkTitle = "[" text:(Emphasis / Line) "]" { return text; }

LinkRef = "(" text:(url / phone) ")" { return text; }

References = title:LinkTitle href:LinkRef { return link(href, title); }

/* Macros */

h = [0-9a-f]i

nonascii = [\x80-\uFFFF]

unicode
  = "\\" digits:$(h h? h? h? h? h?) ("\r\n" / [ \t\r\n\f])? {
      return String.fromCharCode(parseInt(digits, 16));
    }

escape
  = unicode
  / "\\" ch:[^\r\n\f0-9a-f]i { return ch; }

nmstart
  = [_a-z]i
  / nonascii
  / escape

nmchar
  = [_a-z0-9-]i
  / nonascii
  / escape

string1
  = "\"" chars:([^\n\r\f\\"] / "\\" nl:nl { return ''; } / escape)* "\"" {
      return chars.join('');
    }

string2
  = "'" chars:([^\n\r\f\\'] / "\\" nl:nl { return ''; } / escape)* "'" {
      return chars.join('');
    }

string = chars:(string1 / [_a-zA-Z0-9-\n]+) { return chars.join(''); }

comment = "/*" [^*]* "*"+ ([^/*] [^*]* "*"+)* "/"

ident
  = prefix:$"-"? start:nmstart chars:nmchar* {
      return prefix + start + chars.join('');
    }

name = chars:nmchar+ { return chars.join(''); }

num
  = [+-]? ([0-9]+ / [0-9]* "." [0-9]+) ("e" [+-]? [0-9]+)? {
      return parseFloat(text());
    }

s = [ \t\r\n\f]+

w = s?

nl
  = "\n"
  / "\r\n"
  / "\r"
  / "\f"

Phone = p:phone { return link(p); }

phone = "+" p:__phone { return '+' + p; }

__phone
  = p1:_phone "-" p2:__phone { return p1 + '-' + p2; }
  / p1:_phone p2:__phone { return p1 + p2; }
  / _phone

_phone
  = d:digits
  / "(" d:digits ")" { return '(' + d + ')'; }

Uri = url:url { return link(url); }

Url = url

url
  = generic
  / httpaddress
  / ftpaddress

generic = scheme ":" path search?

httpaddress
  = head:"http" secure:"s"? "://" h:hostport p:path? s:search? {
      return [head, secure, '://', h, p, s].filter(Boolean).join('');
    }

ftpaddress = "ftp://" login "/" path

scheme = ialpha

ialpha = a:alpha x:xalphas { return a + x; }

xalphas = a:xalpha+ { return a.join(''); }

login = (user / user ":" password) "@" hostport

hostport
  = h:host p:(":" port)? {
      return [h, p && p[0], p && p[1]].filter(Boolean).join('');
    }

host
  = hostname
  / hostnumber

hostname = h:ialpha h2:("." hostname)* { return h + h2.join(''); }

hostnumber
  = d1:digits "." d2:digits "." d3:digits "." d4:digits {
      return `${d1}.${d2}.${d3}.${d4}`;
    }

port = digits

path = "/" x:xpalphas p:path* { return '/' + x + p.join(''); }

search = "?" s:_search { return '?' + s; }

_search = a:xalphas s:_search* { return a + s.join(''); }

user = xalphas

password = xalphas

xalpha
  = alpha
  / digit
  / safe
  / escape

alpha = [a-zA-Z]

digit = [0-9]

digits = d:digit+ { return d.join(''); }

alphanum
  = alpha
  / digit

xpalphas = a:xpalpha+ { return a.join(''); }

xpalpha = xalpha

safe
  = "$"
  / "-"
  / "\_"
  / "@"
  / "."
  / "&"
  / "="

extra
  = "!"
  / "*"
  / "\""
  / "'"
  / ":"
  / ";"
  / ","
  / " "
  / "("
  / ")"

// color

Color = "color:#" c:hexTuple !AnyText { return color('#' + c); }

hexdigit = [0-9A-Fa-f]

hexNible = a:hexdigit { return a.toLowerCase(); }

hexByte = a:hexdigit b:hexdigit { return a.toLowerCase() + b.toLowerCase(); }

hexTuple
  = a:hexByte b:hexByte c:hexByte d:hexByte { return a + b + c + d; }
  / a:hexByte b:hexByte c:hexByte { return a + b + c; }
  / a:hexNible b:hexNible c:hexNible d:hexNible { return a + b + c + d; }
  / a:hexNible b:hexNible c:hexNible { return a + b + c; }
