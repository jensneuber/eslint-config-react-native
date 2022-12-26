# eslint-conig-react-native

This eslint-config package should help developers to maintain a consistent code style throughout their react native projects.

### Install
Make sure to have configured the Github NPM registry for the `@jensneuber` scope by creating a _.npmrc_ file your projects root.

`.npmrc`
```
@jensneuber:registry=https://npm.pkg.github.com
```

Add the package to your dev dependencies
```bash
yarn add -D @jensneuber/eslint-config-react-native
```

In your react native projects root folder
 create a _.eslintrc.js_ file:

`.eslintrc.js`
```js
module.exports = {
  extends: ['@jensneuber/eslint-config-react-native'],
  rules: {}
}
```

or a _.eslintrc_ file ( non js )

`.eslintrc`
```json
{
  "extends": ["@jensneuber/eslint-config-react-native"],
  "rules": {}
}
```

### Customization
To make the transition to an eslinted project easier, you may soften some rules at the beginning.

This can be done by adding rules to the `rules` object in your _.eslintrc.js_

`.eslintrc.js`
```js
rules: {
  '@typescript-eslint/no-unused-vars': 'warn',
}
```


