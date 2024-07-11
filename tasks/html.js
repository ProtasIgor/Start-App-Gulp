
// Plagins
const size = require('gulp-size');


const Html = () => {
    return $.gulp.src($.path.html.src)
        .pipe(size({ title: 'Page Size: ' }))
        .pipe($.gulp.dest($.path.html.dest))
}
module.exports = Html;