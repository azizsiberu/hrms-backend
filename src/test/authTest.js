// path: test/authTest.js
const request = require("supertest");
const app = require("../src/app");

describe("🔐 Authentication API Tests", () => {
  let testUser = {
    username: "testuser",
    email: "testuser@example.com",
    password: "password123",
  };

  it("✅ POST /api/auth/register should register a new user", async () => {
    const res = await request(app).post("/api/auth/register").send(testUser);
    expect(res.status).toBe(201);
    expect(res.body.status).toBe("success");
  });

  it("✅ POST /api/auth/login should return token", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: testUser.email,
      password: testUser.password,
    });
    expect(res.status).toBe(200);
    expect(res.body.status).toBe("success");
    expect(res.body.data.token).toBeDefined();
  });
});
