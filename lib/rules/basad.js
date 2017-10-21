const defaults = require('../defaults');
module.exports = {
  meta: {
    docs: {
      description: 'Enforce בס"ד at the top of every file',
      category: 'Religious Enforcement',
      recommended: true
    },
    fixable: 'code',
    schema: [
      {
        type: 'boolean',
      },
      {
        type: 'string',
      }
    ]
  },
  create: function (context) {
    let valid = false;
    const comments = context.getAllComments();
    const blessing = context.options[1] || defaults.blessing;
    const allowAnywhere = context.options[0];
    for (let i = 0; i < comments.length && !valid; i++) {
      if (blessing.includes(comments[i].value.trim())) {
        valid = allowAnywhere || comments[i].loc.start.line === 1;
      }
    }
    if (!valid) {
      context.report({
        loc: {
          start: {
            line: 1,
            column: 0
          },
          end: {
            line: 1,
            column: 1
          }
        },
        message: 'File is not blessed by god'
      });
    }
    return {};
  }
};
