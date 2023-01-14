const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
    plugins: [
        purgecss({
            content: ['./**/*.html'],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/] +/g) || []
        }),
    ]
}
