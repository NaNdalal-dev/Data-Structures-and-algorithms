function IterativeBinarySearch(arr,srh_val){
	low = 0
	high = arr.length - 1
	step = 0
	flag = 0

	while( low <= high && flag != 1 ){
		mid = Math.floor((low+high)/2)
		step+=1

		if(srh_val == arr[mid]){
			console.log('Element found at index : '+mid)
			flag = 1
		}
		else
			if(srh_val < arr[mid]){
				high = mid - 1
			}
		else{
			low = mid + 1
		}
	}
	
	if(flag == 0){
	console.log('Element not found.')
	}
	console.log()
	console.log('Length of Array:'+arr.length)
	console.log('Steps taken:'+step)

}
