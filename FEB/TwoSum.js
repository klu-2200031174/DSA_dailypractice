/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let frq=new Map();

    for(let i=0;i<nums.length;i++){
        diff=target-nums[i];
        if(frq.has(diff)){
            return [frq.get(diff),i];
        }
            frq.set(nums[i], i);
    }
    
};