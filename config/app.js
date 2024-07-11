'use script';

const isProduction = global.process.argv.includes('--production');
const isDev = !isProduction;

module.exports = {
    isProd: isProduction,
    isDev: isDev,
    webpack: {
        mode: isProduction ? "production" : "development",
    }
}