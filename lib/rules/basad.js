const defaults = require('../defaults');
const toArray = a => a && (Array.isArray(a) ? a : Array.of(a));

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
        oneOf: [
          {
            type: 'array',
            items: {
              type: 'string'
            }
          },
          {
            type: 'string'
          },
          {
            type: 'null'
          }
        ]
      },
      {
        type: 'object',
        properties: {
          ignoreCase: {
            type: 'boolean'
          },
          allowAnywhere: {
            type: 'boolean'
          },
        }
      }
    ]
  },
  create: function (context) {
    const comments = context.getAllComments();
    const {allowAnywhere, ignoreCase} = context.options[1] || {};
    let valid = false, comment;
    let blessings = toArray(context.options[0]) || defaults.blessings;
    if (ignoreCase) {
      blessings.map(b => b.toLowerCase());
    }
    for (let i = 0; i < comments.length && !valid; i++) {
      comment = comments[i].value.trim();
      if (blessings.includes(ignoreCase ? comment.toLowerCase() : comment)) {
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
            column: context.getSourceCode().lines[0].length
          }
        },
        message: 'File is not blessed by god'
      });
    }
    return {};
  }
};

