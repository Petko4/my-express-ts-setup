import express, { Express, Request, Response } from "express";

const PORT = 8000;
const app: Express = express();

app.get("/", async (request: Request, response: Response) => {
  response.send("Hello World!!");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
