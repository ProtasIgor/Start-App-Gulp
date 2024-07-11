
// Plagins
const del = require('del');

const Clean = () => {
    return del($.path.cleanBuild.src, { force: true })
}


module.exports = Clean;