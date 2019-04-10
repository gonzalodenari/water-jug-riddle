import request from "supertest";
import app from "../src/server";

describe("GET /random-url", () => {
  it("should return 404", () => {
    const value = app.run();
    expect(value).toBe(3);
  });
});
