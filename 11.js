/**
 * 方案一
 * @param {number[]} height
 * @return {number}
 * 时间复杂度：O(n2)
 * 空间复杂度：O(n2)
 */
var min = function(num1, num2) {
    return num1 > num2 ? num2 : num1
}
var maxArea1 = function(height) {
    const res = [];
    for (let i = 0; i < height.length; i++) {
        for (j = i + 1; j < height.length; j++) {
            res.push({
                start: i,
                end: j,
                area: (j - i) * min(height[i], height[j])
            })
        }
    }
    res.sort((a, b) => a.area - b.area);
    return res.pop().area;
};

console.log(maxArea1([1, 8, 6, 2, 5, 4, 8, 3, 7]))

/**
 * 方案二
 * @param {number[]} height
 * @return {number}
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
var maxArea2 = function(height) {
    let max = 0;
    let startIndex = 0;
    let endIndex = height.length - 1;
    while (startIndex < endIndex) {
        const start = height[startIndex];
        const end = height[endIndex];
        max = Math.max(max, Math.min(start, end) * (endIndex - startIndex));
        if (start < end) {
            startIndex++;
        } else if (start > end) {
            endIndex--
        } else {
            startIndex++;
            endIndex--
        }
    }
    return max;
};
console.log(maxArea2([1, 8, 6, 2, 5, 4, 8, 3, 7]));