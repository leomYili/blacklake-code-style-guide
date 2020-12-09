module.exports = {
    extends: [
        "airbnb",
        "airbnb-typescript",
        "prettier",
        "prettier/react",
        "prettier/@typescript-eslint",
    ],
    plugins: ["eslint-comments", "jest", "unicorn", "react-hooks"],
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
        "eqeqeq": 2,

        // Conflict with prettier
        "arrow-body-style": 0, // 要求箭头函数使用大括号
        "arrow-parens": 0, // 要求箭头函数的参数使用圆括号
        "object-curly-newline": 0, // 强制大括号内换行符的一致性
        "implicit-arrow-linebreak": 0, // 强制隐式返回的箭头函数体的位置
        "operator-linebreak": 0, // 强制操作符使用一致的换行符
        "eslint-comments/no-unlimited-disable": 0, // 默认情况下禁用所有规则
        "space-before-function-paren": 0, // 强制在 function的左括号之前使用一致的空
        "no-param-reassign": 2, // 禁止对 function 的参数进行重新赋值
        "curly": 0, // 强制所有控制语句使用一致的括号风格

        /* es6 */
        "sort-imports": 0, // 强制import按照首字母顺序排序,格式化偏好
        "import/no-unresolved": 0, // 保证文件路径的指向性是正确的
        "import/order": "warn", // 强制保证模块导入顺序
        "generator-star-spacing": [
            1,
            {
                before: true,
                after: true,
            },
        ], // 强制 generator 函数中 * 号周围有空格
        "import/no-extraneous-dependencies": 1, // 禁止使用无关的环境包,这里不特别设置
        "import/prefer-default-export": 0, //如果模块导出单个名称,则首选默认导出
        "import/no-default-export": 0, // 禁止默认导出
        "import/no-cycle": 0, // 禁止模块导入具有自身依赖路径的模块
        "import/extensions": 0, // 确保在导入路径中一致使用文件扩展名

        /* react部分 */
        "react/jsx-wrap-multilines": 0, // 防止多行JSX周围缺少括号
        "react/prop-types": 0, // 防止在react组件中缺少类型验证
        "react/forbid-prop-types": 0, // 防止模糊的类型判断使用
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
        "jsx-a11y/no-noninteractive-element-interactions": 0, // 不应为非交互式元素分配事件监听
        "jsx-a11y/click-events-have-key-events": 0, // 强制可单击的非交互式元素具有至少一个键盘事件监听
        "jsx-a11y/no-static-element-interactions": 0, // 强制<div>具有单击处理程序的非交互式可见元素（例如）使用role属性。
        "jsx-a11y/anchor-is-valid": 0, // 强制所有锚点都是有效的可导航元素
        "react/destructuring-assignment": "off", // 强制props解构赋值方式,https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
        "react/jsx-filename-extension": "off", // 限制可能包含jsx的文件扩展名
        "react/no-array-index-key": "warn", // 防止在键中使用数组索引
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks,规则检查
        "react/require-default-props": 0, // 确保组件的任何不需要的参数类型都具有相应的defaultProps值。
        "react/jsx-fragments": 0, // 强制使用React片段的简写形式或标准形式

        /* typescript */
        "@typescript-eslint/no-use-before-define": [
            "error",
            {
                functions: false,
                classes: true,
                variables: true,
                typedefs: true,
            },
        ], // typescript 该判断没有问题
        "@typescript-eslint/explicit-function-return-type": 0, // 在函数和类方法上需要显式的返回类型
        "@typescript-eslint/camelcase": 0, // 强制驼峰式命名规则
        "@typescript-eslint/no-var-requires": 0, // 除导入语句外，禁止使用require语句
        "@typescript-eslint/explicit-member-accessibility": 0, // 在类属性和方法上需要显式可访问性修饰符
        "@typescript-eslint/interface-name-prefix": 0, // 强制 interface 命名时添加前缀
        "@typescript-eslint/no-non-null-assertion": 0, // 使用!后缀运算符禁止非空断言
        "@typescript-eslint/naming-convention": 0, // 对代码库中的所有内容强制执行命名约定
    },
};
