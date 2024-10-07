//27. Remove Element
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let left = 0, right = nums.length - 1, k = 1, valIndex;
    while (left < right) {
            if (nums[left] == val) {
            if (nums[left] == nums[right]) {
                right--
            }
            temp = nums[right]
            nums[right] = nums[left]
            nums[left] = temp
            right--
        }
        k++
        left++
        }
    valIndex = nums.indexOf(val)
    if(valIndex == -1){
        return nums;
    }
    return valIndex

};

console.log(removeElement([3,3], 5))



