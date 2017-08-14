const fetch = require('node-fetch');

function fetchAvatarUrl(userId) {
	return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
		.then(res => {
			console.log("Response: ", res);
			res
			return res.json();
		})
		.then(data => {
			console.log("Data: ", data);
			return data.imgUrl;
		});
}


const result = fetchAvatarUrl(123);
console.log(result);
