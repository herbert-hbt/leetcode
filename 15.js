/**
 * 方案一
 * @param {number[]} nums
 * @return {number[][]}
 * 时间复杂度：O(n2)
 * 空间复杂度：O(n)
 */

var threeSum2 = function(nums) {
    nums.sort((a, b) => a - b);
    const arr = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            return arr;
        }
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        let startIndex = i + 1;
        let endIndex = nums.length - 1;
        while (startIndex < endIndex) {
            const sum = nums[i] + nums[startIndex] + nums[endIndex];
            if (sum > 0) {
                endIndex--
            } else if (sum < 0) {
                startIndex++
            } else {
                arr.push([nums[i], nums[startIndex], nums[endIndex]]);
                startIndex++;
                endIndex--;
                while (nums[startIndex] === nums[startIndex - 1]) {
                    startIndex++
                }
                while (nums[endIndex] === nums[endIndex + 1]) {
                    endIndex--
                }
            }
        }
    }
    return arr;
};