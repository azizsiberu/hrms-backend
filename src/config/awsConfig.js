// path: src/config/awsConfig.js
const { S3Client } = require("@aws-sdk/client-s3");
require("dotenv").config();

// Konfigurasi AWS S3 Client
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

module.exports = {
  s3,
  bucketName: process.env.AWS_BUCKET_NAME,
};
