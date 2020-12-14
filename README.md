# blacklake-code-style-guide

> 定制化代码风格指南,包含 prettier,eslint,stylelint 的配置文件合集

## Use

### eslint

in `.eslintrc.js`

```()
module.exports = {
  extends: [require.resolve('blacklake-code-style-guide/dist/eslint')],

  // in antd-design-pro
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
  },

  rules: {
    // your rules
  },
};
```

#### link

[jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)

[unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)

### stylelint

in `.stylelintrc.js`

```()
module.exports = {
  extends: [require.resolve('blacklake-code-style-guide/dist/stylelint')],
  rules: {
    // your rules
  },
};
```

### prettier

in `.prettierrc.js`

```()
const fabric = require('blacklake-code-style-guide/dist/prettier');

module.exports = {
  ...fabric,
};
```
