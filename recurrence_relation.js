/*
Case 1: T(n) = T(n - 1) + 1 = O(n)

Case 2: T(n) = T(n - 1) + n  = O(n^2)

Case 3: T(n) = T(n - 1) + logn = O(n*logn)

Case 4: T(n) = 2T(n-1) + 1 = O(2^n)
*/
// CASE 1
function case1(n){

	if (n>0){
		console.log(n)
		case1(n-1)
		
	}
}

//CASE 2
function case2(n) {
	
	if(n>0){
		for(i=0; i<n; i++){
			console.log(n)
		}
		case2(n-1)
	}
}

//CASE 3
function case3(n) {
	
	if(n>0){
		for(i=1; i<n; i=i*2){
			console.log(i)
		}
		case3(n-1)
	}
}

//CASE 4
function case4(n){
	if(n>0){
		console.log(n)
		case4(n-1)
		case4(n-1)
	}
}
