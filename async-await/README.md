# Async-Await

Some points to be noted here are:
1. Whenever we do something like this: 
        return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
                .then(res => {
                    console.log("Response: ", res);
                    return res.json();
                })


Means, whenever we return something inside the "then" of a promise, then it automatically becomes a Promise.  
This sounds fairly logical since, we are using the data that is not present in real (it is a Promise), so the modification of the data will also be a Promise type.  

If you want to fall into the technical bits of it, then for you this is the explanation:  
Whatever is returned inside the "then" handler of a Promise, gets wrapped by the resolve function, ie. the resolve function gets called on that returned value.

        resolve(<returned_value>)

And as we know, whatever gets passed onto the argument of a resolve function, gets passed on to the next "then" handler.

Thus, if we will write this:
        return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
                .then(res => {
                    console.log("Response: ", res);
                    return res.json();
                })
                .then(data => data);

Then, res.json() gets passed as the data.           
       
