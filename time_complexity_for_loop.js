const prompt = require('prompt-sync')();
/*
Time complexities:
->	O(N)

-> O(N^2)

-> O(SQRT(N))

-> O(LOG(N)) //base=2

-> O(LOG(LOG(N))) //base=2

-> O(N*LOG(N)) //base=2

*/
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
	console.log('Time complexity:',(n*n))
	
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
	console.log('Time complexity:',Math.ceil(Math.sqrt(n).toFixed(2)))
}

//CASE 5.1 O(SQRT(N))
function case5_1(n){
	step=0
	
	for(i=0; i*i<n; i++){
		step++
	}
	console.log('steps taken:',step)
	console.log('Time complexity:',Math.ceil(Math.sqrt(n).toFixed(2)))
}

//CASE 6 O(LOG(N)) base=2
function case6(n){
	step=0
	for(i=1; i<n ;i=i*2){
		step++
	}
	console.log('steps taken:',step)
	console.log('Time complexity:',Math.ceil(Math.log2(n)))
}

//CASE 6.1 O(LOG(N)) base=2
function case6_1(n){
	step=0
	for(i=n; i>=1 ;i=i/2){
		step++
	}
	console.log('steps taken:',step)
	console.log('Time complexity:',Math.ceil(Math.log2(n)))
}

//CASE 7 O(N)
function case7(n){
	step=0
	for(i=0; i<n; i++){
		step++
	}
	for(j=0; j<n; j++){
		step++
	}
	console.log('steps taken:',step)
	console.log('time complexity:O(',n,')')
}

//CASE 8 O(LOG(LOG(N))) base=2
function case8(n){
	step=0
	p=0
	for(i=1; i<n ;i=i*2){
		step++
		p++
		}
	for(j=1; j<p ;j=j*2){
		step++
	}
	console.log('steps taken:',step)
	console.log('Time complexity:',Math.ceil(Math.log2(Math.log2(n))))
}

//CASE 9 O(N*LOG(N)) base=2
function case9(n){
	step=0
	for(i=0; i<n ;i++){
		for(j=1 ;j<n; j=j*2){
			step++
		}
		step++
	}
	console.log('steps taken:',step)
	console.log('Time complexity:',Math.ceil(n*Math.log2(n)))
}
