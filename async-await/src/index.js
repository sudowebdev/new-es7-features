const fetch = require("node-fetch");

// Example 1 (Without async-await)
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
// const result = fetchAvatarUrl(123)


// Example 1 (With async-await)
// async function fetchAvatarUrl(userId) {
//     const response = await fetch(`https://catappapi.herokuapp.com/users/${userId}`)
//     const data = await response.json()
//     return data.imageUrl
// }
// const result = fetchAvatarUrl(123);
// result.then(imgUrl => {console.log(imgUrl)})



//  Example 2 (With promises)
//  function fetchCatAvatarsOfAUser(userId) {
//     return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
//             .then(res => res.json())
//             .then(data => data.cats)
//             .then(catIds => {
//                 const promises = catIds.map((catId) => {
//                     return fetch(`https://catappapi.herokuapp.com/cats/${catId}`)
//                             .then(res => res.json())
//                             .then(catData => catData.imageUrl)
                            
//                 })
//              return Promise.all(promises);
//             })
// }

// const result = fetchCatAvatarsOfAUser(123);
// result.then(data => {console.log(data)})  


async function fetchCatAvatarsOfAUser(userId) {
    const userResponse = await fetch(`https://catappapi.herokuapp.com/users/${userId}`);
    const userData = await userResponse.json();
    return await Promise.all(userData.cats.map(async (catId) => {
        const catResponse = await fetch(`https://catappapi.herokuapp.com/cats/${catId}`);
        const catData = await catResponse.json();
        return catData.imageUrl;
    }))
}

const result = fetchCatAvatarsOfAUser(123);
result 