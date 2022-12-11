/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  env: {
    DB_USER: 'doaktiwpzvvmjc',
    DB_HOST: 'ec2-44-210-228-110.compute-1.amazonaws.com',
    DB_DATABASE: 'dm1hlf1k4b0mg',
    DB_PASSWORD: 'b91c8f9e7606bcf5fe18974df636603ebda9be5955769ce2b4bc0d67d2246a21',
    DB_PORT: 5432,
    DB_URL: 'postgres://doaktiwpzvvmjc:b91c8f9e7606bcf5fe18974df636603ebda9be5955769ce2b4bc0d67d2246a21@ec2-44-210-228-110.compute-1.amazonaws.com:5432/dm1hlf1k4b0mg',
  },
}

module.exports = nextConfig
