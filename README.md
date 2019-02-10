# @shaizei/babel-preset

This package contains shareable babel.js configuration used by the applications created with @shaizei/cli.

## Usage

* Create a `.babelrc` file and add `@shaizei/babel-preset` as follows:

```javascript
  {
    "presets": "@shaizei/babel-preset"
  }
```

If you're using this preset in a TypeScript project and want Babel to transpile your TypeScript code, then pass the `typescript` option as follows:

```javascript
  {
    "presets": [
      "@shaizei/babel-preset",
      {
        typescript: true
      }
    ]
  }
```
