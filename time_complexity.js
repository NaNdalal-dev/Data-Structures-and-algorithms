const prompt = require('prompt-sync')();

// CASE 1 O(N)
function case1(n){
	step=0
	for(i=0; i<n; i++){
		step++
	}
	console.log('steps taken:',step)
	console.log('time complexity:O(',n,')')
}

//CASE 2 O(N)
function case2(n){
	step=0
	for(i=n; i>0; i--){
		step++
	}
	console.log('steps taken:',step)
	console.log('time complexity:O(',n,')')
}

//CASE 3 O(N)
function case3(n,step_size){
	step=0
	for(i=0; i<n ; i=i+step_size){
		step++
	}
	console.log('steps taken:',step)
	console.log('time complexity:O(',n,')')
}

//CASE 4 O(N^2)
function case4(n){
	step=0
	for(i=0; i<n ; i++){
		for(j=0; j<i ;j++){
			step++
		}
	}
	console.log('steps taken:',step)
	console.log('Time complexity',(n*n))
	
}

//CASE 5 O(SQRT(N))
function case5(n){
	step=0
	p=0
	for(i=0; p<=n; i++){
		p = p+i
		step++
	}
	console.log('steps taken:',step)
	console.log('Time complexity',Math.sqrt(n).toFixed(2))
}

