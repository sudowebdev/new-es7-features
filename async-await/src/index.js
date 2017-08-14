require("babel-polyfill");
const fetch = require('node-fetch');

async function fetchAvatarUrl(userId) {
  const response = await fetch(`https://catappapi.herokuapp.com/users/${userId}`)
  const data = await response.json()
  return data.imageUrl
  
}

const result = fetchAvatarUrl(123);
