/*
 * Container With Most Water
 *
 * Problem:
 * You are given an integer array `height` of length n.
 * There are n vertical lines drawn such that the two endpoints
 * of the i-th line are (i, 0) and (i, height[i]).
 *
 * Find two lines that together with the x-axis form a container,
 * such that the container contains the most water.
 *
 * Return the maximum amount of water a container can store.
 *
 * Notice that you may not slant the container.
 */
var maxArea = function(height) {
    let ans = 0, left = 0, right = height.length - 1;
    while (left < right) {
        const area = Math.min(height[left], height[right])*(right - left);
        ans = Math.max(ans, area);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return ans;
};

