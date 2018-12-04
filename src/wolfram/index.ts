import fs = require('fs');

const { DocumentLexer } = require('@marklet/core');

const lexer = new DocumentLexer({
  main: [
    {
      regex: /([\w$`]+)\[/,
      type: 'function',
      prefix_regex: ']',
      push: 'main',
      token: ([_, name], args) => ({ name, args }),
    },
    {
      regex: /(?:([\w$`]+)|"((\\"|[^"])*)")\s*->/,
      type: 'rule',
      prefix_regex: ',',
      token: (cap, cont) => ({
        name: cap[1] || cap[2],
        value: cont[0],
      }),
      push: 'main',
    },
    {
      regex: '(?:([1-9]\\d*\\^\\^)((?:[0-9a-zA-Z]+\\.?|\\.[0-9a-zA-Z])[0-9a-zA-Z]*)|((?:\\d+\\.?|\\.\\d)\\d*))(?:(\\`\\`(?:(?:\\d+\\.?|\\.\\d)\\d*)?)|(\\`(?:(?:\\d+\\.?|\\.\\d)\\d*)?))?(\\*\\^[+-]?(?:\\d+\\.?|\\.\\d)\\d*)?',
      token: ([number]) => Number(number)
      // FIXME: mma恶心的数字语法
    },
    {
      regex: /True\b/,
      token: true
    },
    {
      regex: /False\b/,
      token: false
    },
    {
      regex: '{',
      type: 'list',
      prefix_regex: '}',
      push: 'main',
      token: (_, cont) => cont
    },
    {
      regex: /"((\\"|[^"])*)"/,
      token: ([_, string]) => string,
      // FIXME: mma恶心的字符串转义
    },
    {
      regex: /[\w$`]+/,
    },
    {
      regex: /,|\s+/,
      token: null,
    }
  ],
});


/**
 * 解析 wolfram 表达式
 */
export function serialize(path: string) {
  const wlFile = fs.readFileSync(path, 'utf8');
  return JSON.stringify(lexer.parse(wlFile), null, 2)
}
