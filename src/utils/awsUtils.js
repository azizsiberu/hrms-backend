// path: src/utils/awsUtils.js
const {
  PutObjectCommand,
  GetObjectCommand,
  S3Client,
} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { s3, bucketName } = require("../config/awsConfig");
const fs = require("fs");

/**
 * Upload file ke AWS S3
 * @param {Buffer} fileBuffer - Buffer file
 * @param {string} fileName - Nama file yang diunggah
 * @param {string} contentType - Jenis konten file (ex: image/png, application/pdf)
 * @returns {Promise<string>} - URL file yang diunggah
 */
exports.uploadToS3 = async (fileBuffer, fileName, contentType) => {
  console.log(`📤 [DEBUG] Mengunggah file ke S3: ${fileName}`);

  const params = {
    Bucket: bucketName,
    Key: fileName,
    Body: fileBuffer,
    ContentType: contentType,
    ACL: "public-read",
  };

  try {
    await s3.send(new PutObjectCommand(params));
    console.log(`✅ [DEBUG] File berhasil diunggah: ${fileName}`);
    return `https://${bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;
  } catch (error) {
    console.error("❌ [ERROR] Gagal upload file ke S3:", error.message);
    throw new Error("Gagal upload file ke S3");
  }
};

/**
 * Buat URL Pre-Signed untuk mengakses file sementara
 * @param {string} fileName - Nama file yang disimpan di S3
 * @returns {Promise<string>} - URL yang bisa diakses secara sementara
 */
exports.getSignedUrlFromS3 = async (fileName) => {
  console.log(`🔑 [DEBUG] Membuat signed URL untuk: ${fileName}`);

  const params = {
    Bucket: bucketName,
    Key: fileName,
  };

  try {
    const url = await getSignedUrl(s3, new GetObjectCommand(params), {
      expiresIn: 3600,
    });
    console.log(`✅ [DEBUG] Signed URL berhasil dibuat: ${url}`);
    return url;
  } catch (error) {
    console.error("❌ [ERROR] Gagal membuat signed URL:", error.message);
    throw new Error("Gagal membuat signed URL");
  }
};
