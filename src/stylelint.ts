module.exports = {
    extends: [
        "stylelint-config-standard",
        "stylelint-config-css-modules",
        "stylelint-config-rational-order",
        "stylelint-config-prettier",
    ],
    plugins: [
        "stylelint-order",
        "stylelint-declaration-block-no-ignored-properties",
    ],
    rules: {
        "no-descending-specificity": null, // 禁止覆盖较低特异性的选择器，而不是覆盖较高特异性的选择器。
        //https://github.com/stylelint/stylelint/issues/4114
        "function-calc-no-invalid": null, // 禁止在calc函数内使用无效的表达式
        "function-url-quotes": "always", // 要求或禁止使用网址引号
        "font-family-no-missing-generic-family-keyword": null, // 禁止 font-family缺少通用字体库
        "plugin/declaration-block-no-ignored-properties": true, // 禁止由于同一规则中的另一个属性值而被忽略的属性值。
        "unit-no-unknown": [true, { ignoreUnits: ["rpx"] }], // 禁止使用未知单位。
    },
    ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.tsx", "**/*.ts"],
};
