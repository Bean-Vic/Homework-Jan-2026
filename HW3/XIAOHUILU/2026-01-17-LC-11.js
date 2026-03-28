// LC 11. container with most water
var maxAre = function (height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            maxArea = Math.max(maxArea, (right - left) * height[left]);
            left++;
        }else {
            maxArea = Math.max(maxArea, (right - left) * height[right]);
            right--;
        }
    }
    return maxArea;
}

let height = [1,8,6,2,5,4,8,3,7];
console.log(maxAre(height));