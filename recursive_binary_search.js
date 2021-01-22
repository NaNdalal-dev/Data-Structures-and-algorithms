step = 0
flag = 0

function RecursiveBinarySearch(arr,srh_val,low,high){

	if( low <= high ){
		mid = Math.floor((low+high)/2)
		step+=1

		if(srh_val == arr[mid]){
			console.log('Element found at index : '+mid)
			flag = 1
			
		}
		else
			if(srh_val < arr[mid]){
				return RecursiveBinarySearch(arr,srh_val,low,mid-1)
			}
		else{
			return RecursiveBinarySearch(arr,srh_val,mid+1,high)
			
		}
	}
	
	if(flag == 0){
	console.log('Element not found.')
	}

	console.log()
	console.log('Length of Array:'+arr.length)
	console.log('Steps taken:'+step)

}
