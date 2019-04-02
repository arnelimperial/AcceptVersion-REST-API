
module.exports = {
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || '8080',
    URL: process.env.BASE_URL || 'http://localhost:8080',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://restify-db:4321abcd@ds245518.mlab.com:45518/db-restify',
    JWT_SECRET: process.env.JWT_SECRET
  };


  //''