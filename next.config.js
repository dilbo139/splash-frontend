const dotenv = require("dotenv");
dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MAGIC_PUBLISHABLE_KEY: process.env.MAGIC_PUBLISHABLE_KEY,
    MAGIC_SECRET_KEY: process.env.MAGIC_SECRET_KEY,
  },
};

module.exports = nextConfig;
