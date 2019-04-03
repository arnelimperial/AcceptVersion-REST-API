
module.exports = {
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || '8080',
    URL: process.env.URL,
    MONGODB_URI: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    BASE_URL: process.env.BASE_URL
  };


