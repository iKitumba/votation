import "dotenv/config";
import http from "node:http";
import { app } from "./app";

const PORT = process.env.PORT ?? 3333;
const server = http.createServer(app);

try {
  server.listen(PORT, () => {
    console.log(`App running on port: ${process.env.PORT}`);
  });
} catch (error) {
  console.error(`Erro na inicilização do servidor: ${error}`);
}
