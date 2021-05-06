module.exports = {
    extends: [
        "airbnb",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/react",
        "prettier/@typescript-eslint",
    ],
    plugins: [
        "@typescript-eslint",
        "babel",
        "eslint-comments",
        "jest",
        "unicorn",
        "react-hooks",
    ],
    env: {
        browser: true,
        node: true,
        es6: true,
        mocha: true,
        jest: true,
        jquery: true,
    },
    rules: {
        /* 原生js部分 */
        "no-use-before-define": 0, // 禁止在变量定义之前使用它们,为何关闭 https://github.com/typescript-eslint/typescript-eslint/issues/2540
        "function-paren-newline": 0, // 强制在函数括号内使用一致的换行,会与prettier冲突
        "linebreak-style": 0, // 强制使用一致的换行风格
        "no-prototype-builtins": "off", // 禁止直接调用 Object.prototypes 的内置属性,https://eslint.org/docs/rules/no-prototype-builtins
        "unicorn/prevent-abbreviations": "off", // 防止缩写
        "getter-return": 0,
        "lines-around-comment": 0, // 要求在注释周围有空行
        "no-extra-boolean-cast": 1, // 禁止不必要的布尔转换
        eqeqeq: 2,
        "no-confusing-arrow": 0, // 禁止在可能与比较操作符相混淆的地方使用箭头函数
        "no-mixed-operators": 0, // 禁止混合使用不同的操作符
        "no-tabs": 0, // 禁用 tab
        "no-lonely-if": 1,
        "default-case": 1,
        "prefer-const": 1,
        "no-unexpected-multiline": 0, // 禁止出现令人困惑的多行表达式
        "prefer-arrow-callback": 0, // 要求回调函数使用箭头函数
        "prefer-promise-reject-errors": 0, // 要求使用Error对象作为Promise拒绝的原因
        quotes: 0, // 强制使用一致的引号或双引号
        radix: 0,
        "prefer-destructuring": 1,
        "prefer-object-spread": 1,

        // Conflict with prettier
        "arrow-body-style": 0, // 要求箭头函数使用大括号
        "arrow-parens": 0, // 要求箭头函数的参数使用圆括号
        "object-curly-newline": 0, // 强制大括号内换行符的一致性
        "implicit-arrow-linebreak": 0, // 强制隐式返回的箭头函数体的位置
        "operator-linebreak": 0, // 强制操作符使用一致的换行符
        "eslint-comments/no-unlimited-disable": 0, // 默认情况下禁用所有规则
        "space-before-function-paren": 0, // 强制在 function的左括号之前使用一致的空
        "no-param-reassign": 0, // 禁止对 function 的参数进行重新赋值
        curly: 0, // 强制所有控制语句使用一致的括号风格
        "array-bracket-newline": "off",
        "array-bracket-spacing": "off",
        "array-element-newline": "off",
        "arrow-spacing": "off",
        "block-spacing": "off",
        "brace-style": "off",
        camelcase: 0,
        "comma-dangle": "off",
        "comma-spacing": "off",
        "comma-style": "off",
        "computed-property-spacing": "off",
        "dot-location": "off",
        "eol-last": "off",
        "func-call-spacing": "off",
        "function-call-argument-newline": "off",
        "generator-star": "off",
        "generator-star-spacing": "off",
        indent: "off",
        "indent-legacy": "off",
        "jsx-quotes": "off",
        "key-spacing": "off",
        "keyword-spacing": "off",
        "multiline-ternary": "off",
        "newline-per-chained-call": "off",
        "new-parens": "off",
        "no-arrow-condition": "off",
        "no-comma-dangle": "off",
        "no-extra-parens": "off",
        "no-extra-semi": "off",
        "no-floating-decimal": "off",
        "no-mixed-spaces-and-tabs": "off",
        "no-multi-spaces": "off",
        "no-multiple-empty-lines": "off",
        "no-reserved-keys": "off",
        "no-space-before-semi": "off",
        "no-spaced-func": "off",
        "no-trailing-spaces": "off",
        "no-whitespace-before-property": "off",
        "no-wrap-func": "off",
        "nonblock-statement-body-position": "off",
        "object-curly-spacing": "off",
        "object-property-newline": "off",
        "one-var-declaration-per-line": "off",
        "padded-blocks": "off",
        "quote-props": "off",
        "rest-spread-spacing": "off",
        semi: "off",
        "semi-spacing": "off",
        "semi-style": "off",
        "space-after-function-name": "off",
        "space-after-keywords": "off",
        "space-before-blocks": "off",
        "space-before-function-parentheses": "off",
        "space-before-keywords": "off",
        "space-in-brackets": "off",
        "space-in-parens": "off",
        "space-infix-ops": "off",
        "space-return-throw-case": "off",
        "space-unary-ops": "off",
        "space-unary-word-ops": "off",
        "switch-colon-spacing": "off",
        "template-curly-spacing": "off",
        "template-tag-spacing": "off",
        "unicode-bom": "off",
        "wrap-iife": "off",
        "wrap-regex": "off",
        "yield-star-spacing": "off",
        "no-underscore-dangle": 0,
        "no-shadow": 0,
        "no-plusplus": 0,
        "no-unused-expressions": 1,

        "max-classes-per-file": 1,
        "guard-for-in": 1,
        "consistent-return": 1,
        "no-useless-escape": 1,
        "no-return-assign": 1,
        "no-await-in-loop": 1,
        "no-restricted-globals": 1,
        "no-else-return": 1,
        "no-self-assign": 1,
        "no-useless-catch": 1,
        "no-return-await": 1,
        "no-nested-ternary": 1,
        "no-restricted-syntax": [
            1,
            "ForInStatement",
            "LabeledStatement",
            "WithStatement",
        ],

        "max-len": [1, 150],
        "no-continue": 1,
        "no-console": 1,
        "no-debugger": 1,
        "no-unused-vars": 0,
        "spaced-comment": 1,
        "jsx-a11y/alt-text": 1,
        "global-require": 1,

        /* es6 */
        "sort-imports": 0, // 强制import按照首字母顺序排序,格式化偏好
        "import/no-unresolved": 0, // 保证文件路径的指向性是正确的
        "import/order": "warn", // 强制保证模块导入顺序
        "import/no-extraneous-dependencies": 1, // 禁止使用无关的环境包,这里不特别设置
        "import/prefer-default-export": 0, //如果模块导出单个名称,则首选默认导出
        "import/no-default-export": 0, // 禁止默认导出
        "import/no-cycle": 0, // 禁止模块导入具有自身依赖路径的模块
        "import/extensions": 0, // 确保在导入路径中一致使用文件扩展名
        "import/no-duplicates": 0,

        /* react部分 */
        "react/prefer-stateless-function": 0,
        "react/no-unused-state": 1,
        "react/no-find-dom-node": 0,
        "react/display-name": 0,
        "react/no-direct-mutation-state": 1, // 防止直接修改this.state
        "react/jsx-wrap-multilines": 0, // 防止多行JSX周围缺少括号
        "react/prop-types": 0, // 防止在react组件中缺少类型验证
        "react/forbid-prop-types": 0, // 防止模糊的类型判断使用
        "react/jsx-key": 1,
        "react/no-deprecated": 1,
        "react/no-access-state-in-setstate": 1,
        "react/no-typos": 1,
        "react/jsx-no-duplicate-props": 1, // 不能使用重复的prop
        "react/default-props-match-prop-types": 1,
        "react/no-unused-prop-types": 1,
        "react/no-unescaped-entities": 1,
        "react/sort-comp": [
            1,
            {
                order: [
                    "type-annotations",
                    "static-methods",
                    "lifecycle",
                    "everything-else",
                    "rendering",
                ],
                groups: {
                    rendering: ["/^render.+$/", "render"],
                },
            },
        ], //  强制执行react class中定义的method顺序,包括生命周期
        "react/jsx-one-expression-per-line": 0, // 每行限制为一个表达式
        "react/jsx-props-no-spreading": 0, // 防止jsx 中传递不必要的 props
        "react/state-in-constructor": 0, // state初始化应该在 constructor 中,
        "react/static-property-placement": 0, // 强制component的静态属性获取形式
        "react/jsx-child-element-spacing": "off", // 确保内嵌标签不会在它们之间没有空格的情况下呈现
        "react/jsx-closing-bracket-location": "off", // 验证jsx中的关闭括号位置
        "react/jsx-closing-tag-location": "off", // 验证多行jsx的结束标签位置
        "react/jsx-curly-newline": "off", // 在jsx curl内强制一致的换行符
        "react/jsx-curly-spacing": "off", // 强制或禁止JSX属性中大括号内的空格
        "react/jsx-equals-spacing": "off", // 禁止或强制在JSX属性中的等号周围添加空格
        "react/jsx-first-prop-new-line": "off", // 确保第一个属性在JSX中的正确位置
        "react/jsx-indent": "off", // 验证JSX缩进
        "react/jsx-indent-props": "off", // 验证JSX中的props缩进
        "react/jsx-max-props-per-line": "off", // 在jsx中限制props的数量
        "react/jsx-props-no-multi-spaces": "off", // 不允许在内联JSX props之间使用多个空格
        "react/jsx-space-before-closing": "off", // 在JSX中关闭括号之前验证间距
        "react/jsx-tag-spacing": "off", // 验证JSX左右方括号内和周围的空格
        "react/jsx-pascal-case": 1,
        "jsx-a11y/no-noninteractive-element-interactions": 0, // 不应为非交互式元素分配事件监听
        "jsx-a11y/click-events-have-key-events": 0, // 强制可单击的非交互式元素具有至少一个键盘事件监听
        "jsx-a11y/no-static-element-interactions": 0, // 强制<div>具有单击处理程序的非交互式可见元素（例如）使用role属性。
        "jsx-a11y/anchor-is-valid": 0, // 强制所有锚点都是有效的可导航元素
        "react/destructuring-assignment": "off", // 强制props解构赋值方式,https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
        "react/jsx-filename-extension": "off", // 限制可能包含jsx的文件扩展名
        "react/no-array-index-key": "warn", // 防止在键中使用数组索引
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks,规则检查
        "react/require-default-props": 0, // 确保组件的任何不需要的参数类型都具有相应的defaultProps值。
        "react/jsx-fragments": 1, // 强制使用React片段的简写形式或标准形式
        "react/jsx-curly-brace-presence": 0, // 强制props的传参花括号
        "class-methods-use-this": [
            0,
            {
                exceptMethods: [
                    "render",
                    "componentWillMount",
                    "componentDidMount",
                    "componentWillUnmount",
                ],
            },
        ],

        /* typescript */
        "@typescript-eslint/triple-slash-reference": 0,
        "@typescript-eslint/no-use-before-define": [0], // typescript 该判断没有问题
        "@typescript-eslint/explicit-function-return-type": 0, // 在函数和类方法上需要显式的返回类型
        "@typescript-eslint/camelcase": 0, // 强制驼峰式命名规则
        "@typescript-eslint/no-var-requires": 0, // 除导入语句外，禁止使用require语句
        "@typescript-eslint/explicit-member-accessibility": 0, // 在类属性和方法上需要显式可访问性修饰符
        "@typescript-eslint/interface-name-prefix": 0, // 强制 interface 命名时添加前缀
        "@typescript-eslint/no-non-null-assertion": 0, // 使用!后缀运算符禁止非空断言
        "@typescript-eslint/naming-convention": 0, // 对代码库中的所有内容强制执行命名约定
        "@typescript-eslint/no-unused-vars": 0, // 未使用的变量不允许引用
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/member-delimiter-style": 0, // 接口和类型文字需要特定的成员定界符样式
        "@typescript-eslint/no-this-alias": 1,
        "@typescript-eslint/ban-types": 1,
        "@typescript-eslint/class-name-casing": 1,
        "@typescript-eslint/no-inferrable-types": 1,
        "@typescript-eslint/no-empty-interface": 1,
        "@typescript-eslint/no-explicit-any": 1,
        "@typescript-eslint/no-shadow": 0,
        "@typescript-eslint/no-loop-func": 0,
        "@typescript-eslint/no-redeclare": 0,
    },
};
