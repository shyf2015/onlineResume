const { argv } = process
const build = argv[argv.length - 1] === 'build'
module.exports = {
    livereload: !build,
    build,
    useLess: true,
    gzip: true,
    buildFilter: p => /src|css|index|README|image/.test(p),
    middlewares: [
        { middleware: 'rollup' },
        { middleware: 'markdown' }
    ],
    output: require('path').join(__dirname, './output')
}
