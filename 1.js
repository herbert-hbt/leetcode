// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
// 示例:
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]


/**
 * 方案一：
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 时间复杂度：O(n2)
 * 空间复杂度：O(1)
 */
var twoSum1 = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        var cur = nums[i];
        if (cur <= target) {
            var index = nums.findIndex(function(item) { return item + cur === target })
            if (index !== -1) {
                return [i, index]
            }
        }
    }
};
console.log(twoSum1([1, 3, 4, 5, 6, 9], 8));

/**
 * 方案二：
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 * 思路：遍历，前n个先存入map中，第n+1与前面存储的n个进行相加比较，看是否为target，因为以map的形式存储，空间换时间，少了一层遍历
 */
var twoSum2 = function(nums, target) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        var cur = nums[i];
        var searchValue = target - cur;
        if (map[searchValue] !== undefined) {
            return [map[searchValue], i]
        }
        map[cur] = i;
    }
};

console.log(twoSum2([2, 7, 11, 15], 9))


/**
 * 方案三：限制空间复杂度
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 时间复杂度：
 * 空间复杂度：O(1)
 * 
 */
var twoSum3 = function(nums, target) {
    const copyNum = [...nums]; //这个缓存，是不是也要空间复杂度？，我这个排序会改变原数组啊，有没可以不改变原数组的？
    nums.sort((a, b) => a - b); //我看快排的时间为O(nlogn),空间为O(1)
    let startIndex = 0;
    let endIndex = nums.length - 1;
    let start, end;
    while (startIndex < endIndex) {
        start = nums[startIndex];
        end = nums[endIndex];
        if (start + end > target) {
            endIndex--;
        } else if (start + end < target) {
            startIndex++;
        } else {
            break;
        }
    }
    for (let i = 0; i < copyNum.length; i++) {
        if (copyNum[i] === start) {
            startIndex = i;
        }
    }
    for (let i = copyNum.length - 1; i >= 0; i--) {
        if (copyNum[i] === end) {
            endIndex = i;
        }
    }
    return [startIndex, endIndex]
};

console.log(twoSum3([3, 3], 6))