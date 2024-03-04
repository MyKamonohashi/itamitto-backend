import setUpServer from "./server";

const PORT = process.env.PORT || 8000;
const server = setUpServer();

(async () => {
  try {
    server.listen(PORT, () => {
      console.log(`App is listening @ http://localhost:${PORT}`);
    })
  } catch (err) {
    console.error(`app failed to start: ${err}`);
  }
})();