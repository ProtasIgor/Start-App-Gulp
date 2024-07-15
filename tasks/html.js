
// Plagins
const size = require('gulp-size');


const Html = () => {
    return $.gulp.src($.path.html.src)
        .pipe(size({ title: 'Page Size: ' }))
}
module.exports = Html;