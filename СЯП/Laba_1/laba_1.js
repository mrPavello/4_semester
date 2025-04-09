function createPhoneNumber(arr) {
    return "+".concat(arr[0]).concat(arr[1]).concat(arr[2], " (").concat(arr[3]).concat(arr[4], ") ").concat(arr[5]).concat(arr[6]).concat(arr[7], "-").concat(arr[8]).concat(arr[9], "-").concat(arr[10]).concat(arr[11]);
}
var result = createPhoneNumber([3, 7, 5, 3, 3, 4, 6, 5, 2, 1, 7, 7]);
console.log(result);
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.solution = function (num) {
        if (num <= 0)
            return 0;
        var sum = 0;
        for (var i = 0; i < num; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }
        return sum;
    };
    return Challenge;
}());
console.log(Challenge.solution(54));
function rotateArray(nums, k) {
    if (k < 0 || nums.length === 0)
        return nums;
    k = k % nums.length;
    var rotatedPart = nums.splice(nums.length - k, k);
    nums.unshift.apply(nums, rotatedPart);
    return nums;
}
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
function getMediOfArrays(nums1, nums2) {
    var mergedArray = nums1.concat(nums2);
    mergedArray.sort(function (a, b) { return a - b; });
    var length = mergedArray.length;
    if (length === 0) {
        return NaN;
    }
    if (length === 1) {
        return mergedArray[0];
    }
    var mid = Math.floor(length / 2);
    if (length % 2 === 0) {
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    }
    else {
        return mergedArray[mid];
    }
}
console.log(getMediOfArrays([2, 5, 3, 30], [4, 6, 12, 4, 5]));
