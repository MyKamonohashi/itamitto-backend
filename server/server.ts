import express, { Express, Request, Response } from "express";

function setUpServer() {
  const app: Express = express();

  app.use(express.json());

  app.get('/api/hello', async (req: Request, res: Response) => {
    try {
      res.status(200).send("Hello World 🌏")
    } catch(err) {
      res.status(400).send(err);
    }
  });
  return app;
}

export default setUpServer;