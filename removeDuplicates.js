//26. Remove Duplicates from Sorted Array

var removeDuplicates = function(nums) {
    const neArr  = new Set(nums);
    temp = nums.length;
    nums.unshift(...neArr)
    let k = nums.length - temp
    return k
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4])