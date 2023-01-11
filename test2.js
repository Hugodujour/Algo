var arr = [48,-2,6,12,0,-4];

function triInsertion(arr){
	for (i = 1; i < arr.length; i++){
		x = arr[i]
		j = i
		while(j > 0 && arr[j -1] > x){
			arr[j] = arr[j -1]
			j = j-1
		}
		arr[j] = x
	}
	return arr
}

console.log(triInsertion(arr));

