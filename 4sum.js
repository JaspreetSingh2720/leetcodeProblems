// var fourSum = function(nums, target) {
//     nums.sort((a,b)=>a-b);
//     let sumsArray = [];
//     for(let i = 0 ; i< nums.length-3; i++){
//         if(i != 0 && nums[i] == nums[i-1])continue;
//         for(let j=i+1 ; j<nums.length-2; j++){
//             if( j !=i+1 && nums[j]==nums[j-1])continue;
//             let left = j+1, right= nums.length-1;
//             while(left<right){
//                 sum = nums[i]+nums[j]+nums[left]+nums[right];
//                 if(sum == target){
//                     sumsArray.push([nums[i], nums[j], nums[left], nums[right]]);
//                     left++
//                 }
//                 else if(sum < target){
//                     left++;
//                 }
//                 else if(sum > target){
//                     right--;
//                 } 
//                 while( j != left-1 && left<right && nums[left]==nums[left-1]){
//                     left++
//                 }
//                 while(right!=(nums.length-1) && left<right && nums[right]==nums[right+1]){
//                     right--
//                 } 
//             }
//         }
// }
// return sumsArray
// }

// console.log(fourSum([1,0,-1,0,-2,2], 0))




console.log("...........1");
setTimeout(()=>console.log("...........2"), 0);
console.log("...........3");
setImmediate(()=>console.log("...........4"));
console.log("...........5");
process.nextTick(()=>console.log("...........6"));
console.log("...........7");
new Promise((resolve, reject)=> {
    console.log("...........8");
    resolve();
}).then(()=>console.log("...........9"));
console.log("...........10");