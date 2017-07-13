function time(target, key, descriptor){
 	
 	const origFn = descriptor.value.bind(target);

 	let i = 0;
 	descriptor.value = function(...args){
 		
 		let id = i++;

 		console.time(key + id);
 		let value = origFn(...args);
 		console.timeEnd(key + id);

 		return value;
 	} 
}


const AnotherClass = {
    
    @time
    squareAll(a){
      
      return a.map((i) =>  i*i);
    }
}


console.log(AnotherClass.squareAll(Array(10000).fill(4)));