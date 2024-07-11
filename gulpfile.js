global.$ = {

    // Plagins
    gulp: require('gulp'),
    browserSync: require('browser-sync').create(),

    // Config
    app: require('./config/app'),
    path: require('./config/path'),
}

// Plagins
const html = require('./tasks/html');
const style = require('./tasks/style');
const script = require('./tasks/script');
const imgmin = require('./tasks/imgmin');
const font = require('./tasks/font');
const svgmin = require('./tasks/svgmin');
const sprite = require('./tasks/sprite');
const clean = require('./tasks/clean');
const cleanBuild = require('./tasks/clean-build');
const build = require('./tasks/build');
const server = require('./tasks/server');


const watcher = () => {
    $.gulp.watch($.path.html.watch, html)
        .on('change', $.browserSync.reload);

    $.gulp.watch($.path.style.watch, style);
    $.gulp.watch($.path.script.watch, script);
    $.gulp.watch($.path.image.watch, imgmin);
    $.gulp.watch($.path.svg.watch, svgmin);
    $.gulp.watch($.path.sprite.watch, sprite);
}

const reliase = $.gulp.series(clean, cleanBuild, $.gulp.parallel(html,
    style, script, imgmin, svgmin, sprite), build);
const dev = $.gulp.parallel(watcher, server);


exports.html = html;
exports.style = style;
exports.script = script;
exports.font = font;
exports.imgmin = imgmin;
exports.svgmin = svgmin;
exports.sprite = sprite;
exports.build = build;
exports.clean = clean;
exports.cleanBuild = cleanBuild;
exports.watch = watcher;
exports.reliase = reliase;
exports.dev = dev;
exports.server = server;

exports.default = dev;