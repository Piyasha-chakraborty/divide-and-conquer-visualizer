function runAlgorithm(){

let algo=document.getElementById("algorithm").value;
let input=document.getElementById("inputArray").value;

let arr=input.split(",").map(Number);

document.getElementById("steps").innerHTML="";
document.getElementById("explanation").innerHTML="";
document.getElementById("complexity").innerHTML="";

if(algo=="merge") mergeSortVisualizer(arr);
if(algo=="quick") quickSortVisualizer(arr);
if(algo=="minmax") minMaxVisualizer(arr);
if(algo=="subarray") largestSubarrayVisualizer(arr);
if(algo=="matrix") matrixMultiplicationVisualizer();
if(algo=="strassen") strassenVisualizer();
if(algo=="closest") closestPairVisualizer();
if(algo=="convex") convexHullVisualizer();

}

function addStep(text){

let step=document.createElement("div");
step.innerText=text;
document.getElementById("steps").appendChild(step);

}







/* MERGE SORT */

function mergeSortVisualizer(arr){

document.getElementById("explanation").innerHTML=
"Divide: split array into halves<br>Conquer: recursively sort both halves<br>Combine: merge sorted halves";

document.getElementById("complexity").innerHTML=
"T(n) = 2T(n/2) + O(n)<br>Time Complexity: O(n log n)";

let result=mergeSort(arr);

addStep("Final Sorted Array → "+result);

}

function mergeSort(arr){

if(arr.length<=1) return arr;

let mid=Math.floor(arr.length/2);

let left=arr.slice(0,mid);
let right=arr.slice(mid);

addStep("Divide → ["+left+"] | ["+right+"]");

left=mergeSort(left);
right=mergeSort(right);

return merge(left,right);

}

function merge(left,right){

let result=[];

while(left.length && right.length){

if(left[0]<right[0]){
result.push(left.shift());
}else{
result.push(right.shift());
}

}

let merged=[...result,...left,...right];

addStep("Combine → "+merged);

return merged;

}







/* QUICK SORT */

function quickSortVisualizer(arr){

document.getElementById("explanation").innerHTML=
"Divide: choose pivot element<br>Conquer: partition array around pivot<br>Combine: recursively sort partitions";

document.getElementById("complexity").innerHTML=
"T(n)=T(n-1)+T(0)+O(n)<br>Average: O(n log n)<br>Worst: O(n²)";

quickSort(arr,0,arr.length-1);

addStep("Final Sorted Array → "+arr);

}

function quickSort(arr,l,r){

if(l<r){

let p=partition(arr,l,r);

addStep("Pivot placed → "+arr);

quickSort(arr,l,p-1);
quickSort(arr,p+1,r);

}

}

function partition(arr,l,r){

let pivot=arr[r];
let i=l-1;

for(let j=l;j<r;j++){

if(arr[j]<pivot){

i++;
[arr[i],arr[j]]=[arr[j],arr[i]];

}

}

[arr[i+1],arr[r]]=[arr[r],arr[i+1]];

return i+1;

}







/* MIN MAX */

function minMaxVisualizer(arr){

document.getElementById("explanation").innerHTML=
"Divide: split array into halves<br>Conquer: find min and max of each half<br>Combine: compare results";

document.getElementById("complexity").innerHTML=
"T(n)=2T(n/2)+O(1)<br>Time Complexity: O(n)";

let result=minMax(arr,0,arr.length-1);

addStep("Minimum → "+result.min);
addStep("Maximum → "+result.max);

}

function minMax(arr,l,r){

if(l==r){
return {min:arr[l],max:arr[l]};
}

if(r==l+1){

if(arr[l]<arr[r]){
return {min:arr[l],max:arr[r]};
}else{
return {min:arr[r],max:arr[l]};
}

}

let mid=Math.floor((l+r)/2);

let left=minMax(arr,l,mid);
let right=minMax(arr,mid+1,r);

return{
min:Math.min(left.min,right.min),
max:Math.max(left.max,right.max)
};

}







/* LARGEST SUBARRAY */

function largestSubarrayVisualizer(arr){

document.getElementById("explanation").innerHTML=
"Divide array into halves<br>Find max subarray in left, right and crossing<br>Combine results";

document.getElementById("complexity").innerHTML=
"T(n)=2T(n/2)+O(n)<br>Time Complexity: O(n log n)";

let max=largestSubarray(arr);

addStep("Largest Subarray Sum → "+max);

}

function largestSubarray(arr){

let max=arr[0];
let current=arr[0];

for(let i=1;i<arr.length;i++){

current=Math.max(arr[i],current+arr[i]);
max=Math.max(max,current);

}

return max;

}







/* MATRIX MULTIPLICATION */

function matrixMultiplicationVisualizer(){

document.getElementById("explanation").innerHTML=
"Divide matrices into submatrices<br>Multiply corresponding parts<br>Combine results";

document.getElementById("complexity").innerHTML=
"T(n)=8T(n/2)+O(n²)<br>Time Complexity: O(n³)";

addStep("Matrix multiplication divides matrices into smaller blocks.");
addStep("Each block is multiplied recursively.");
addStep("Results are combined to form final matrix.");

}







/* STRASSEN MULTIPLICATION */

function strassenVisualizer(){

document.getElementById("explanation").innerHTML=
"Divide matrices into submatrices<br>Compute 7 special products<br>Combine results";

document.getElementById("complexity").innerHTML=
"T(n)=7T(n/2)+O(n²)<br>Time Complexity: O(n^2.81)";

addStep("Strassen reduces 8 multiplications to 7.");
addStep("Uses special formula combinations.");
addStep("Results merged to form final matrix.");

}







/* CLOSEST PAIR OF POINTS */

function closestPairVisualizer(){

document.getElementById("explanation").innerHTML=
"Divide points into halves<br>Find closest pair in each half<br>Check strip area";

document.getElementById("complexity").innerHTML=
"T(n)=2T(n/2)+O(n log n)<br>Time Complexity: O(n log n)";

addStep("Points divided into two halves.");
addStep("Closest pair found recursively.");
addStep("Strip region checked for cross pairs.");

}







/* CONVEX HULL */

function convexHullVisualizer(){

document.getElementById("explanation").innerHTML=
"Divide points into sets<br>Find hull recursively<br>Merge hulls";

document.getElementById("complexity").innerHTML=
"T(n)=2T(n/2)+O(n)<br>Time Complexity: O(n log n)";

addStep("Points divided into subsets.");
addStep("Hull of each subset computed.");
addStep("Hulls merged to form final convex hull.");

}