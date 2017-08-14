const fetch = require('node-fetch');

async function fetchAvatarUrl(userId) {
	const res = await fetch(`https://catappapi.herokuapp.com/users/${userId}`);
	console.log("Response: ", res);
	const data = res.json();
	console.log("Data: ", data);
}

