module.exports = {
  extends: [
    './.eslintrc.js'
  ],
  parser: 'babel-eslint',
  rules: {
    'ember/avoid-leaking-state-in-components': ['warn'],
    'ember/closure-actions': ['warn'],
    'ember/jquery-ember-run': ['warn'],
    'ember/new-module-imports': ['off'],
    'ember/no-empty-attrs': ['warn'],
    'ember/no-function-prototype-extensions': ['warn'],
    'ember/no-observers': ['warn'],
    'ember/no-on-calls-in-components': ['warn'],
    'ember/no-side-effects': ['warn'],
    'ember/routes-segments-snake-case': ['warn'],
    'ember/use-brace-expansion': ['warn'],
    'space-before-function-paren': ['off']
  }
};
