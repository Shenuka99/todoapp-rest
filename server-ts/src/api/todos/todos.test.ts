import request from "supertest";

import app from "../../app";
import { response } from "express";
import { Todos } from "./todos.model";

beforeAll(async () => {
  await Todos.drop();
});

describe("GET /api/v1/todos", () => {
  it("responds with an array of todos", async () => {
    request(app)
      .get("/api/v1/todos")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty("length");
        expect(response.body.length).toBe(0);
        // expect(response.body[0]).toHaveProperty("title");
        // expect(response.body[0]).toHaveProperty("done");
        // expect(response.body[0]).toHaveProperty("dueDate");
        // expect(response.body[0]).toHaveProperty("dueTime");
        // expect(response.body[0]).toHaveProperty("dueTime");
        // expect(response.body[0]).toHaveProperty("tag");
        // // done()
      });
  });
});


describe("POST /api/v1/todos", () => {
  it("responds with an error if the todo is invalid", async () => {
    request(app)
      .post("/api/v1/todos")
      .set("Accept", "application/json")
      .send({
        content: ""
      }
      )
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty("message");
        // // done()
      });
  });
});


describe("POST /api/v1/todos", () => {
  it("responds with inserted object", async () => {
    request(app)
      .post("/api/v1/todos")
      .set("Accept", "application/json")
      .send({
        content: ""
      }
      )
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty("message");
        // // done()
      });
  });
});
