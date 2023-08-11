import app from "../app";
import supertest from "supertest";
import dbInit from "../database/init";

describe("Test login controller", function () {
  beforeAll(async function () {
    await dbInit();
  });

  // positive test case
  test("Correct identifier and password", async function () {
    const result = await supertest(app).post("/api/login").send({
      email: "afi@mail.com",
      password: "abcd1234",
    });
    expect(result.statusCode).toEqual(200);
    expect(result.body.message).toBe("login successful");
  });

  //   nagative test case
  test("Empty identifier and password", async function () {
    const result = await supertest(app).post("/api/login").send({
      email: "",
      password: "",
    });
    expect(result.statusCode).toEqual(400);
    expect(result.body.message).toBe("invalid request");
  });
});
