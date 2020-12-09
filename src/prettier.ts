module.exports = {
    singleQuote: true, // 使用单引号而不是双引号。
    trailingComma: 'all', // 尾随逗号
    printWidth: 120, // 代码行宽度
    proseWrap: 'never', // 不要包裹 markdown 文本
    endOfLine: 'lf', // 行结束,换行符
    overrides: [
      {
        files: '.prettierrc',
        options: {
          parser: 'json',
        },
      },
      {
        files: 'document.ejs',
        options: {
          parser: 'html',
        },
      },
    ],
  };
  