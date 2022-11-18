const axios = require("axios");

async function getUserWithTodos(userId) {
  return Promise.all([getUserDetails(userId), getUserTodos(userId)])
    .then(([userDetail, userTodos]) => {
      return {
        id: userDetail.id,
        name: userDetail.name,
        email: userDetail.email,
        phone: userDetail.phone,
        todos: userTodos,
      };
    })
    .catch((e) => {
      throw e;
    });
}

async function getUserDetails(userId) {
  return axios
    .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      throw new Error("Failed to fetch userDetails");
    });
}

async function getUserTodos(userId) {
  return axios
    .get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      throw new Error("Failed to fetch userTodos");
    });
}

module.exports = {
  getUserWithTodos,
};
