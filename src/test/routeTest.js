// path: test/routeTest.js
const request = require("supertest");
const app = require("../src/app");

describe("🔍 Testing API Routes", () => {
  it("✅ GET /api/auth should return 404 (route not found)", async () => {
    const res = await request(app).get("/api/auth");
    expect(res.status).toBe(404);
  });

  it("✅ POST /api/auth/register should return 400 if body is missing", async () => {
    const res = await request(app).post("/api/auth/register").send({});
    expect(res.status).toBe(400);
    expect(res.body.status).toBe("error");
  });

  it("✅ POST /api/auth/login should return 400 if body is missing", async () => {
    const res = await request(app).post("/api/auth/login").send({});
    expect(res.status).toBe(400);
    expect(res.body.status).toBe("error");
  });
});
