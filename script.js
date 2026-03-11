function runAlgorithm(){

let input = document.getElementById("inputArray").value;
let arr = input.split(",").map(Number);

let stepsDiv = document.getElementById("steps");

stepsDiv.innerHTML = "";

mergeSort(arr,stepsDiv);

document.getElementById("complexity").innerHTML =
"T(n) = 2T(n/2) + O(n) <br> Time Complexity: O(n log n)";
}

function mergeSort(arr,stepsDiv){

if(arr.length<=1) return arr;

let mid=Math.floor(arr.length/2);

let left=arr.slice(0,mid);
let right=arr.slice(mid);

stepsDiv.innerHTML +=
"Divide: ["+left+"] ["+right+"] <br>";

left=mergeSort(left,stepsDiv);
right=mergeSort(right,stepsDiv);

return merge(left,right,stepsDiv);
}

function merge(left,right,stepsDiv){

let result=[];

while(left.length && right.length){

if(left[0]<right[0]){
result.push(left.shift());
}else{
result.push(right.shift());
}
}

let merged=result.concat(left,right);

stepsDiv.innerHTML +=
"Combine: ["+merged+"] <br>";

return merged;
}