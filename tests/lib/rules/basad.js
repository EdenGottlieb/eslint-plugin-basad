const rule = require('../../../lib/rules/basad');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();

const ERROR_MESSAGE = 'File is not blessed by god';

ruleTester.run('basad', rule, {
  valid: [
    `//basad
    fasdf`,
    ` //basad
    fasdf`,
    `/*basad*/
    fasdf`,
    `/* basad */
    fasdf`,
    {
      code: `sadfasdf
      //basad`,
      options: [null, {allowAnywhere: true}]
    },
    {
      code: `//customBlessing`,
      options: ['customBlessing']
    },
    {
      code: `//blessingOne`,
      options: [['blessingOne', 'blessingTwo']]
    },
    {
      code: `asdfas
      //customBlessing`,
      options: ['customBlessing', {allowAnywhere: true}]
    },
    {
      code: `//bAsAd`,
      options: [null, {ignoreCase: true}]
    }
  ],
  invalid: [
    {
      code: `asdfasdfas
    asdfasdfasdf`,
      errors: [{message: ERROR_MESSAGE}]
    },
    {
      code: `//asdfasf
    // asdfasdfasdf`,
      errors: [{message: ERROR_MESSAGE}]
    },
    {
      code: `//asdf
    //basad`,
      errors: [{message: ERROR_MESSAGE}]
    },
    {
      code: `//basad
        //customBlessing`,
      options: ['customBlessing', {allowAnywhere: false}],
      errors: [{message: ERROR_MESSAGE}]
    },
    {
      code: `//asfdasdf
        //asdasasdf`,
      options: ['customBlessing', {allowAnywhere: true}],
      errors: [{message: ERROR_MESSAGE}]
    },
    {
      code: `//bAsAd`,
      options: [null, {ignoreCase: false}],
      errors: [{message: ERROR_MESSAGE}]
    }
  ]
});
