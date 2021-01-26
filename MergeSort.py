def MergeSort(arr):
	l =  len(arr)
	if l>1:
		mid = l//2
		left_arr = arr[:mid]
		right_arr = arr[mid:]
		MergeSort(left_arr)
		MergeSort(right_arr)

		i=j=k=0

		while i<len(left_arr) and j< len(right_arr):
			if left_arr[i]<right_arr[j]:
				arr[k] = left_arr[i]
				i+=1
				k+=1
			else:
				arr[k] = right_arr[j]
				k+=1
				j+=1
		while i<len(left_arr):
			arr[k] = left_arr[i]
			k+=1
			i+=1
		while j<len(right_arr):
			arr[k] = right_arr[j]
			k+=1
			j+=1