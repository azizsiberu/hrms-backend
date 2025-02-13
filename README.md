# HRMS Backend

## 📌 Deskripsi

**HRMS Backend** adalah bagian server dari sistem manajemen sumber daya manusia (HRMS) yang dikembangkan menggunakan **Node.js** dan **Express.js**. Backend ini menyediakan API yang digunakan oleh frontend untuk mengelola data karyawan, absensi, penggajian, rekrutmen, dan berbagai aspek HR lainnya dengan akses berbasis role (RBAC). Database yang digunakan adalah **PostgreSQL** tanpa ORM. Hasil foto absensi akan diunggah ke **AWS S3**.

---

## 🚀 Tech Stack

### **Backend**

- **Node.js** - Runtime JavaScript untuk server.
- **Express.js** - Framework backend untuk membangun REST API.
- **PostgreSQL** - Database relasional untuk menyimpan data.
- **pg (node-postgres)** - Library untuk koneksi dan query PostgreSQL.
- **JWT (JSON Web Token)** - Autentikasi berbasis token.
- **bcrypt** - Hashing password untuk keamanan.
- **Multer** - Middleware untuk upload file.
- **AWS SDK** - Mengunggah dan mengelola file di AWS S3.
- **Dotenv** - Manajemen variabel environment.

---

## 📂 Struktur Direktori

```
hrms-backend/
│── src/
│   ├── config/             # Konfigurasi aplikasi
│   │   ├── db.js           # Koneksi ke PostgreSQL
│   │   ├── env.js          # Load environment variables
│   │   ├── logger.js       # Logging konfigurasi
│   │   ├── authConfig.js   # Konfigurasi autentikasi JWT
│   │   ├── awsConfig.js    # Konfigurasi AWS S3
│   │   └── index.js
│   │
│   ├── controllers/        # Controller untuk menangani request API
│   │   ├── authController.js
│   │   ├── employeeController.js
│   │   ├── payrollController.js
│   │   ├── leaveController.js
│   │   ├── attendanceController.js
│   │   ├── performanceController.js
│   │   ├── claimController.js
│   │   ├── businessTripController.js
│   │   ├── overtimeController.js
│   │   ├── companyController.js
│   │   ├── roleController.js      # Manajemen role & akses user
│   │   ├── reportController.js
│   │   ├── uploadController.js    # Mengelola upload foto ke AWS S3
│   │   └── index.js
│   │
│   ├── routes/              # Definisi endpoint API
│   │   ├── authRoutes.js
│   │   ├── employeeRoutes.js
│   │   ├── payrollRoutes.js
│   │   ├── leaveRoutes.js
│   │   ├── attendanceRoutes.js
│   │   ├── performanceRoutes.js
│   │   ├── claimRoutes.js
│   │   ├── businessTripRoutes.js
│   │   ├── overtimeRoutes.js
│   │   ├── companyRoutes.js
│   │   ├── roleRoutes.js     # Routing untuk manajemen role
│   │   ├── reportRoutes.js
│   │   ├── uploadRoutes.js   # Routing untuk upload foto
│   │   └── index.js
│   │
│   ├── services/            # Logika bisnis aplikasi
│   │   ├── authService.js
│   │   ├── employeeService.js
│   │   ├── payrollService.js
│   │   ├── leaveService.js
│   │   ├── attendanceService.js
│   │   ├── performanceService.js
│   │   ├── claimService.js
│   │   ├── businessTripService.js
│   │   ├── overtimeService.js
│   │   ├── companyService.js
│   │   ├── roleService.js
│   │   ├── reportService.js
│   │   ├── uploadService.js  # Mengunggah foto ke AWS S3
│   │   └── index.js
│   │
│   ├── utils/               # Helper functions
│   │   ├── jwt.js           # Helper untuk generate dan verifikasi JWT
│   │   ├── hashPassword.js  # Helper untuk hashing password
│   │   ├── email.js         # Helper untuk pengiriman email
│   │   ├── response.js      # Standardized API response
│   │   ├── formatDate.js    # Helper untuk format tanggal
│   │   ├── generateReport.js # Helper untuk generate laporan
│   │   ├── awsUtils.js      # Helper untuk AWS S3
│   │   └── index.js
│   │
│   ├── app.js               # Inisialisasi server Express
│   ├── server.js            # Entry point aplikasi
│   ├── .env                 # Environment variables
│   ├── package.json         # Dependencies
│   ├── README.md            # Dokumentasi proyek
```

---

## 🔧 Konfigurasi AWS S3

Tambahkan konfigurasi AWS di `.env`:

```env
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_REGION=your_aws_region
AWS_BUCKET_NAME=your_s3_bucket
```

---

## 🔧 Instalasi & Setup

### **1️⃣ Clone Repository**

```bash
git clone https://github.com/your-repo/hrms-backend.git
cd hrms-backend
```

### **2️⃣ Install Dependencies**

```bash
npm install
```

### **3️⃣ Menjalankan Server**

```bash
npm start
```

Akses API di `http://localhost:5000/api`

---

## 📄 Lisensi

Proyek ini berlisensi di bawah **MIT License**.
