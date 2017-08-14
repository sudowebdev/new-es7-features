const fetch = require("node-fetch");

async function fetchAvatarUrl(userId) {
    const response = await fetch(`https://catappapi.herokuapp.com/users/${userId}`)
    const data = await response.json()
    return data.imageUrl
}

// function fetchAvatarUrl(userId) {
// 	return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
// 		.then(res => {
// 			console.log("Response: ", res);
// 			res
// 			return res.json();
// 		})
// 		.then(data => {
// 			console.log("Data: ", data);
// 			return data.imgUrl;
// 		});
// }

  
const result = fetchAvatarUrl(123);
result.then(imgUrl => {console.log(imgUrl)})
