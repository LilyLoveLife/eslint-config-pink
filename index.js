// eslint: https://eslint.org/docs/latest/use/getting-started 
// eslint-plugin-react: https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules
module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "react-hooks"],
    extends: [
      "airbnb",
      "airbnb/hooks",
      "plugin:@typescript-eslint/recommended",
      'plugin:react/recommended',
      "plugin:react-hooks/recommended",
      'plugin:prettier/recommended', // 用prettier来进行格式化
    ],
    rules: {
      quotes: [2, "double"],
      "import/extensions": 0, // 后缀扩展名
      "import/no-unresolved": 0,
      "react/jsx-filename-extension": 0,
      "react/react-in-jsx-scope": 0,
      "arrow-body-style": 0,
      "react-hooks/rules-of-hooks": 2,
      "react-hooks/exhaustive-deps": 1,
      "react/function-component-definition": [
        2,
        { namedComponents: "arrow-function" },
      ],
      "react/require-default-props": 0,
      "no-unused-expressions": [
        1,
        {
          allowShortCircuit: true,
        },
      ],
      "jsx-a11y/click-events-have-key-events": 0,
      "jsx-a11y/no-static-element-interactions": 0,
      "react/jsx-props-no-spreading": 0,
      "max-len": 0,
      "class-methods-use-this": 0,
      "import/prefer-default-export": 0,
      "react/no-danger": 0,
      "jsx-a11y/no-noninteractive-element-interactions": 0, // 非交互元素（div p ..）不支持事件处理
      "react/no-array-index-key": 1, // 数组的index 作为key
      "react/jsx-one-expression-per-line": 0, // 表达式换行
      "object-curly-newline": 0, // Enforce consistent line breaks after opening and before closing braces
      "react/jsx-wrap-multilines": 0,
      "react/no-unstable-nested-components": 0, // 
      "comma-dangle": 0, // 要有逗号
      "react/destructuring-assignment": 1, // 必须用解构
      "no-param-reassign": 1, // 形参不能被重写或加内容
    },
  };