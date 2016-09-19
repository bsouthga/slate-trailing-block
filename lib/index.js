const makeSchema = require('./makeSchema');

/**
 * Slate plugin to ensure a trailing block.
 * @param {Object} [opts] Options for the plugin
 * @param {String} [opts.type='paragraph'] The type of the trailing block
 * @return {Object}
 */

function TrailingBlock(opts) {
    opts             = opts || {};
    opts.type        = opts.type || 'paragraph';

    const schema = makeSchema(opts);

    return {
        schema,

        transforms: {

        }
    };
}

module.exports = TrailingBlock;