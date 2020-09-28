/**
 * 方案一
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 时间复杂度：O(n2)
 * 空间复杂度：O(1)
 */
var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};

// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));


/**
 * 方案二
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 时间复杂度：O(n2)
 * 空间复杂度：O(1)
 */
var removeElement1 = function(nums, val) {
    let startIndex = 0;
    let endIndex = nums.length - 1;
    while (startIndex <= endIndex) {
        if (nums[startIndex] === val) {
            nums.splice(startIndex, 1);
        } else {
            startIndex++;
        }
        if (nums[endIndex] === val) {
            nums.splice(endIndex, 1);
        }
        endIndex--;
    }
    return nums.length;
};

// console.log(removeElement1([0, 1, 2, 2, 3, 0, 4, 2], 2))


/**
 * 方案三
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
var removeElement2 = function(nums, val) {
    let endIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[endIndex] = nums[i];
            endIndex++;
        }
    }
    nums.length = endIndex;
    return endIndex;
};
// console.log(removeElement2([3, 2, 2, 3], 3))


/**
 * 方案四
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
var removeElement3 = function(nums, val) {
    let startIndex = 0;
    let endIndex = nums.length - 1;
    while (startIndex <= endIndex) {
        if (nums[endIndex] === val) {
            endIndex--;
            continue
        }
        if (nums[startIndex] === val) {
            nums[startIndex] = nums[endIndex];
            endIndex--;
        }
        startIndex++;
    }
    nums.length = endIndex + 1;
    return nums.length;
};
console.log(removeElement3([3, 2, 2, 3], 3))
console.log(removeElement3([0, 1, 2, 2, 3, 0, 4, 2], 2))
console.log(removeElement3([1], 1))