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
    bigEmoji,
  } = require('./utils');
}

start
  = BigEmoji
  / (Blocks / Inline / EndOfLine { return paragraph([plain('')]); })+

BigEmoji
  = e1:Emoji Space* e2:Emoji? Space* e3:Emoji? {
      return [bigEmoji([e1, e2, e3].filter(Boolean))];
    }

Blocks
  = MultiplelLineCode
  / Heading
  / Tasks
  / Section

Emphasis
  = Bold
  / Italic
  / Strikethrough

Inline
  = value:(
      Whitespace
      / Emoji
      / References
      / InlineCode
      / AutolinkedPhone
      / AutolinkedURL
      / Emphasis
      / Color
      / UserMention
      / ChannelMention
      / Text
      / Plain
    )+
    EndOfLine? { return paragraph(reducePlainTexts(value)); }

Whitespace = w:" "+ { return plain(w.join('')); }

Plain = text:anyText2 { return plain(text); }

Extra = e:extra { return plain(e); }

// = Line

Line = t:line { return plain(t); }

Text = text:anyText { return plain(text); }

line
  = head:Space* text:anyText+ tail:Space* {
      return head.join('') + text.join('') + tail.join('');
    }

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

anyText
  = [\x20-\x27]
  / [\x2B-\x40]
  / [\x41-\x5A]
  / [\x61-\x7A]
  / nonascii

anyText2
  = [\x20-\x40]
  / [\x41-\x60]
  / [\x61-\xFFFF]
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

SectionText
  = [-]+
  / [\x20-\x40]
  / [\x41-\x60]
  / [\x61-\x7A]
  / nonascii

Heading
  = "# "+ text:Line { return heading([text], 1); }
  / "## "+ text:Line { return heading([text], 2); }
  / "### "+ text:Line { return heading([text], 3); }
  / "#### "+ text:Line { return heading([text], 4); }

utf8_names_validation = text:[0-9a-zA-Z-_.]+ { return text.join(''); }

UserMention = "@"+ user:utf8_names_validation { return mentionUser(user); }

ChannelMention
  = t:Text "#" channel:utf8_names_validation {
      return reducePlainTexts([t, plain('#' + channel)])[0];
    }
  / "#" channel:utf8_names_validation { return mentionChannel(channel); }

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
  = t:[a-zA-Z0-9]+ tail:([\x5F] [\x5F]?) {
      return plain(t.join('') + tail.join(''));
    }
  / [\x5F] [\x5F] i:italic_Content [\x5F] [\x5F] t:[a-zA-Z0-9]+ {
      return reducePlainTexts([
        plain('__'),
        ...i,
        plain('__'),
        plain(t.join('')),
      ])[0];
    }
  / [\x5F] i:italic_Content [\x5F] t:[a-zA-Z]+ {
      return reducePlainTexts([
        plain('_'),
        ...i,
        plain('_'),
        plain(t.join('')),
      ])[0];
    }
  / [\x5F] [\x5F] i:Italic_Content [\x5F] [\x5F] { return i; }
  / [\x5F] i:Italic_Content [\x5F] { return i; }

Italic_Content = text:italic_Content { return italic(text); }

italic_Content
  = text:(Bold / Strikethrough / Line / AnyItalic)+ {
      return reducePlainTexts(text);
    }

/* **Bold** */
/* *Bold* */
Bold
  = [\x2A] [\x2A] b:Bold_Content [\x2A] [\x2A] { return b; }
  / [\x2A] b:Bold_Content [\x2A] { return b; }

Bold_Content
  = text:(Italic / Strikethrough / Line / AnyBold)+ {
      return bold(reducePlainTexts(text));
    }

/* ~~Mistaken text.~~ */
/* ~Mistaken text.~ */
Strikethrough
  = [\x7E] [\x7E] s:Strikethrough_Content [\x7E] [\x7E] { return s; }
  / [\x7E] s:Strikethrough_Content [\x7E] { return s; }

Strikethrough_Content
  = text:(Italic / Bold / Line / AnyStrike)+ {
      return strike(reducePlainTexts(text));
    }

AnyBold = t:[^\x0a\* ] { return plain(t); }

AnyStrike = t:[^\x0a\~ ] { return plain(t); }

AnyItalic = t:[^\x0a\_ ] { return plain(t); }

ListItem
  = ("\x2A " / "\x2D ") text:ListText+ Space? { return text.join('').trim(); }

TaskItem
  = (("- [x] " / "- [ ] ") text:anyText+ Space?) {
      return text.join('').trim();
    }

OrderedListItem
  = "  "? (digit1_9+ "\x2E ") text:anyText+ Space? {
      return text.join('').trim();
    }

Paragraph = EndOfLine text:anyText2 { return paragraph(text); }

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

Codetype = t:[a-zA-Z0-9 \_\-.]+ { return t.join(''); }

InlineCode = "`" text:Line "`" { return inlineCode(text); }

LineCode "LineCode"
  = text:[^"\n"\`]+ "`"? { return codeLine(plain(text.join(''))); }
  / "\n"+ text:[^"\n"\`]+ "`"? { return codeLine(plain(text.join(''))); }

MultiplelLineCode
  = "```" t:Codetype? "\n" value:LineCode+ "\n"+ "```" {
      return code(value, t);
    }

// [Visit GitHub!](www.github.com)
LinkTitle = "[" text:(Emphasis / Line) "]" { return text; }

LinkRef
  = "(" text:(URL / p:Phone { return 'tel:' + p.number; }) ")" { return text; }

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

AutolinkedPhone = p:Phone { return link('tel:' + p.number, plain(p.text)); }

AutolinkedURL = u:URL { return link(u); }

xalpha
  = alpha
  / digit
  / safe
  / escape

alpha = [a-zA-Z]

digit = [0-9]

digit1_9 = [1-9]

digits = d:digit+ { return d.join(''); }

alphanum
  = alpha
  / digit

xpalphas = a:xalpha+ { return a.join(''); }

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

hexdigit = [0-9A-Fa-f]

hexNible = a:hexdigit { return parseInt(a + a, 16); }

hexByte = a:hexdigit b:hexdigit { return parseInt(a + b, 16); }

domainName = $(domainNameLabel ("." domainNameLabel)*)

domainNameLabel = $([a-z0-9]+ $("-" [a-z0-9]+)*)

/**
 *
 * Color
 *
 */

Color = "color:#" rgba:colorRGBATuple !anyText { return color(...rgba); }

colorRGBATuple
  = r:hexByte g:hexByte b:hexByte a:hexByte { return [r, g, b, a]; }
  / r:hexByte g:hexByte b:hexByte { return [r, g, b]; }
  / r:hexNible g:hexNible b:hexNible a:hexNible { return [r, g, b, a]; }
  / r:hexNible g:hexNible b:hexNible { return [r, g, b]; }

/**
 *
 * Phone
 *
 */

Phone = "+" p:phoneNumber { return { text: '+' + p.text, number: p.number }; }

phoneNumber
  = p:phonePrefix "-" d:digits {
      return { text: p.text + '-' + d, number: p.number + d };
    }
  / p:phonePrefix d:digits {
      return { text: p.text + d, number: p.number + d };
    }
  / d:digits { return { text: d, number: d }; }

phonePrefix
  = d:digits { return { text: d, number: d }; }
  / "(" d:digits ")" { return { text: '(' + d + ')', number: d }; }

/**
 *
 * URL
 *
 */

URL
  = s:urlScheme a:urlAuthority p:urlPath? q:urlQuery? f:urlFragment? {
      const href = s + a + (p ?? '') + (q ?? '') + (f ?? '');
      // const url = {
      //   href,
      //   scheme: s,
      //   authority: a,
      //   path: p,
      //   query: q,
      //   fragment: f,
      // };

      return href;
    }

urlScheme
  = $(
    [A-Za-z]
      [A-Za-z0-9+.-]
      [A-Za-z0-9+.-]?
      [A-Za-z0-9+.-]?
      [A-Za-z0-9+.-]?
      [A-Za-z0-9+.-]?
      [A-Za-z0-9+.-]?
      [A-Za-z0-9+.-]?
      [A-Za-z0-9+.-]?
      [A-Za-z0-9+.-]?
      [A-Za-z0-9+.-]?
      [A-Za-z0-9+.-]?
      [A-Za-z0-9+.-]?
      [A-Za-z0-9+.-]?
      [A-Za-z0-9+.-]?
      [A-Za-z0-9+.-]?
      [A-Za-z0-9+.-]?
      [A-Za-z0-9+.-]?
      [A-Za-z0-9+.-]?
      [A-Za-z0-9+.-]?
      [A-Za-z0-9+.-]?
      [A-Za-z0-9+.-]?
      [A-Za-z0-9+.-]?
      [A-Za-z0-9+.-]?
      [A-Za-z0-9+.-]?
      [A-Za-z0-9+.-]?
      [A-Za-z0-9+.-]?
      [A-Za-z0-9+.-]?
      [A-Za-z0-9+.-]?
      [A-Za-z0-9+.-]?
      [A-Za-z0-9+.-]?
      [A-Za-z0-9+.-]? // up to 32 characters
      ":"
  )

urlAuthority = $("//" urlAuthorityUserInfo? urlAuthorityHost)

urlAuthorityUserInfo = $(urlAuthorityUser (":" urlAuthorityPassword)? "@")

urlAuthorityUser = $(alpha / digit / "$" / "-" / "_" / "." / "&" / "=")+

urlAuthorityPassword = $(alpha / digit / "$" / "-" / "_" / "." / "&" / "=")+

urlAuthorityHost = urlAuthorityHostName (":" urlAuthorityPort)?

urlAuthorityHostName
  = domainName
  / $(digits "." digits "." digits "." digits) // TODO: IPv4 and IPv6

urlAuthorityPort
  = digits // TODO: from "0" to "65535"

urlPath = $("/" $(alpha / digit / safe)+ urlPath*)

urlQuery = $("?" $(alpha / digit / safe)+)

urlFragment = $("#" $(alpha / digit / safe)+)
