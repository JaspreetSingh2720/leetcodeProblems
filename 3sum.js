var threeSum = function(nums) {
    nums.sort((a,b)=>a-b);
    let newArray = [];
    for(let i = 0 ; i<nums.length-2; i++){
        if(i>0 && nums[i] == nums[i-1])continue
        let left = i+1, right =nums.length-1
        while(left<right){
            if(nums[i] + nums[left] + nums[right] == 0){
                newArray.push([nums[i], nums[left], nums[right]]); 
                left++
            }
            else if(nums[i] + nums[left] + nums[right] < 0){
               left++ 
            }
            else if(nums[i] + nums[left] + nums[right] > 0){
               right--
            }
            while(i !== left-1 && left <right && nums[left-1]==nums[left] ){
                left++
            }
        }
    }
    return newArray
}

/**
 * Finds all triplets in the given array that sum to zero.
*
* @param {number[]} nums - The input array of integers.
* @returns {number[][]} An array of triplets that sum to zero.
 * @throws {Error} If the input array is null or undefined.
 * @example
 *   threeSum([-1, 0, 1, 2, -1, -4]) // returns [[-1, -1, 2], [-1, 0, 1]]
 * @see https://leetcode.com/problems/3sum/
*/
var threeSum = function(nums) {
    // ...    nums.sort((a,b)=>a-b);
    let newArray = [];
    for(let i = 0 ; i<nums.length-2; i++){
        if(i>0 && nums[i] == nums[i-1])continue
        let left = i+1, right =nums.length-1
        while(left<right){
            if(nums[i] + nums[left] + nums[right] == 0){
                newArray.push([nums[i], nums[left], nums[right]]); 
                left++
            }
            else if(nums[i] + nums[left] + nums[right] < 0){
               left++ 
            }
            else if(nums[i] + nums[left] + nums[right] > 0){
                right--
            }
            while(i !== left-1 && left <right && nums[left-1]==nums[left] ){
                left++
            }
        }
    }
    return newArray
}
console.log(threeSum([0,0,0,0,0, 1,1,1,-1,-1,1,-21,20,-2,1,1]))
