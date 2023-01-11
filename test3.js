var arr = [48,-2,6,12,0,-4];

function triSelection(arr){
	n = arr.length
	for (i = 0; i < n - 1; i++){
		min = i
		for (j = i + 1; j < n ; j++){
			if (arr[j] < arr[min]){
				min = j
			}
		}if(min != i){
			[arr[i], arr[min]] = [arr[min], arr[i]];
		}
	}
	return arr
}

console.log(triSelection(arr))