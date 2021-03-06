const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 9998,
        dbURL: 'mongodb://localhost:27017/ReduxTest',
        authCookieName: 'x-auth-token'
    },
    production: {}
};

module.exports = config[env];