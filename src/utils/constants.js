export const BASE_URL =
  location.hostname === "localhost" ? "http://localhost:7777" : "/api/v1";
console.log("BASE_URL: ", BASE_URL);
