// path: test/userModelTest.js
const { findUserByEmail, createUser } = require("../src/models/userModel");
const pool = require("../src/config/db");

describe("🛠️ User Model Tests", () => {
  let testUser = {
    username: "usertest",
    email: "usertest@example.com",
    passwordHash: "$2b$10$testhashedpassword",
  };

  it("✅ Should create a new user", async () => {
    const user = await createUser(
      testUser.username,
      testUser.email,
      testUser.passwordHash
    );
    expect(user).toHaveProperty("id");
  });

  it("✅ Should find user by email", async () => {
    const user = await findUserByEmail(testUser.email);
    expect(user).not.toBeNull();
    expect(user.email).toBe(testUser.email);
  });
});

afterAll(async () => {
  await pool.end(); // Tutup koneksi database setelah semua test selesai
});
