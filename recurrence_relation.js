/*
Recurrence Relation

Case 1: T(n) = T(n - 1) + 1 = O(n)

Case 2: T(n) = T(n - 1) + n  = O(n^2)

Case 3: T(n) = T(n - 1) + logn = O(n*logn)

Case 4: T(n) = 2T(n-1) + 1 = O(2^n)

Case 5: T(n) = T(n / 2) + 1 = O(logn)

Case 6: T(n) = T(n / 2) + n = O(n)
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

//CASE 5
function case5(n){

	if(n>1){
		console.log(n)
		case5(n/2)
	}
}

//CASE 6
function case6(n){

	if(n>1){
		for(i=0 ;i<n ;i++){
			console.log(n)
		}
		case6(n/2)
	}
}


// Linear Search using Recursion

/*
function linear_Search(arr, search_val,i=0) {
	if(i < arr.length){
		if(arr[i]==search_val){
			console.log(arr[i]==search_val)
			return 1
		}
			linear_Search(arr,search_val,i+1)
	}
	else{
		return 0
	}

}
*/