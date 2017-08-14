const fetch = require('node-fetch');
require("babel-core/register");
require("babel-polyfill");

async function fetchAvatarUrl(userId) {
  const response = await fetch(`https://catappapi.herokuapp.com/users/${userId}`)
  const data = response.json();
  return data.imageUrl

}

