'use strict'

const pathBaseSource = './build/';
const pathBaseDestination = './';

const path = {

    html: {
        src: pathBaseSource + `index.html`,
        watch: pathBaseSource + `index.html`,
        dest: pathBaseSource,
    },
    style: {
        src: pathBaseSource + `scss/style.scss`,
        watch: pathBaseSource + 'scss/**/*',
        dest: pathBaseSource + `css`,
    },
    script: {
        src: pathBaseSource + `js/src/index.js`,
        watch: [pathBaseSource + 'js/**/*', '!' + pathBaseSource + '/js/script.min.js'],
        dest: pathBaseSource + `js`,
    },
    font: {
        src: pathBaseSource + `fonts/src/*`,
        dest: pathBaseSource + `fonts`,
    },
    image: {
        src: pathBaseSource + 'images/src/*',
        watch: pathBaseSource + 'images/src/*',
        dest: pathBaseSource + `images`,
    },
    svg: {
        src: pathBaseSource + 'svg/src/*',
        watch: pathBaseSource + 'svg/src/*',
        dest: pathBaseSource + `svg`,
    },
    sprite: {
        src: [pathBaseSource + 'svg/*',
        '!' + pathBaseSource + 'svg/sprite.svg'],
        watch: [pathBaseSource + 'svg/*',
        '!' + pathBaseSource + 'svg/sprite.svg'],
        dest: pathBaseSource + `svg`,
    },
    cleanBuild: {
        src: [`${pathBaseDestination}css`,
        `${pathBaseDestination}js`,
        `${pathBaseDestination}index.html`,
        `${pathBaseDestination}fonts`,
        `${pathBaseDestination}favicon`,
        `${pathBaseDestination}images`,
        `${pathBaseDestination}svg`],
        dest: pathBaseDestination,
    },
    clean: {
        src: [`${pathBaseSource}css/*.*`,
        `${pathBaseSource}js/*.*`,
        `${pathBaseSource}fonts/*.*`,
        `${pathBaseSource}/images/*.*`,
        `${pathBaseSource}/svg/*.*`],
        dest: pathBaseSource
    },
    build: {
        base: pathBaseSource,
        src: {
            html: pathBaseSource + 'index.html',
            css: pathBaseSource + 'css/style.min.css',
            js: pathBaseSource + 'js/script.min.js',
            font: pathBaseSource + 'fonts/*.*',
            favicon: pathBaseSource + 'favicon/*.*',
            img: pathBaseSource + 'images/*.*',
            svg: pathBaseSource + 'svg/sprite.svg',
        },
        dest: pathBaseDestination,
    },
    server: pathBaseSource,
};

module.exports = path;