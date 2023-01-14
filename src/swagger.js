const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const files = ["./app.js"];

swaggerAutogen(outputFile, files).then(() => {
  require("./app");
});
