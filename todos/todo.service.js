const axios = require("axios");

async function getTodos() {
  return axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      return response.data.map((item) => {
        delete item.userId;
        return item;
      });
    })
    .catch((e) => {
      throw new error("Failed to fetch todos");
    });
}

module.exports = {
  getTodos,
};
