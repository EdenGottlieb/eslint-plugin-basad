const rule = require('../../../lib/rules/basad');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();

const ERROR_MESSAGE = 'File is not blessed by god';

ruleTester.run('basad', rule, {
  valid: [
    `//basad
    fasdf`,
    `// basad
    fasdf`,
    ` // basad
    fasdf`,
    ` //basad
    fasdf`,
    `/*basad*/
    fasdf`,
    `/* basad */
    fasdf`,
    ` /*basad*/
    fasdf`,
    `/*basad*/
    fasdf`,
    {
      code: `sadfasdf
      //basad`,
      options: [true]
    },
    {
      code: `//customBlessing`,
      options: [false, 'customBlessing']
    },
    {
      code: `asdfas
      //customBlessing`,
      options: [true, 'customBlessing']
    }
  ],
  invalid: [
    {
      code: `asdfasdfas
    asdfasdfasdf`,
      errors: [{message: ERROR_MESSAGE}]
    },
    {
      code: `
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
        //customBlessing
      `,
      options: [false, 'customBlessing'],
      errors: [{message: ERROR_MESSAGE}]
    },
    {
      code: `//basad
        //cusaomBling
      `,
      options: [true, 'customBlessing'],
      errors: [{message: ERROR_MESSAGE}]
    }
  ]
});
