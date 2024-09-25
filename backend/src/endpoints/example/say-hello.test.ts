import supertest from "supertest";
import { App, Configuration, Context, testutils } from "d-flow-backend";
import { createApp } from "../../app";

describe("/app/example/say-hello", () => {
  let app: App<Context<Configuration>, Configuration>;

  beforeEach(async () => {
    app = await createApp();
    await testutils.runBeforeEach(app);
  });

  afterEach(async () => {
    await testutils.runAfterEach(app);
  });

  it("should response correctly", async () => {
    const response = await supertest(app.express)
      .post("/app/example/say-hello");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: "OK",
      data: "Hello world",
    });
  });
});
