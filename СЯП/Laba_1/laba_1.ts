function createPhoneNumber(arr: number[]) : string {
  return `+${arr[0]}${arr[1]}${arr[2]} (${arr[3]}${arr[4]}) ${arr[5]}${arr[6]}${arr[7]}-${arr[8]}`;
}

let result: string = createPhoneNumber([3, 7, 5, 3, 3, 4, 6, 5, 2]);
console.log(result);


class Challenge {
  static solution(num: number) {
    if(num <= 0) return 0;

    let sum:  number = 0;
    for(let i = 0; i < num; i++) {
      if(i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  }
}

console.log(Challenge.solution(54));


function rotateArray(nums: number[], k: number): number[] {
  if (k < 0 || nums.length === 0) return nums;

  k = k % nums.length;
  
  const rotatedPart = nums.splice(nums.length - k, k);
  nums.unshift(...rotatedPart);

  return nums;
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3).join(" "));



function getMediOfArrays(nums1: number[], nums2: number[]): number {
  const mergedArray = nums1.concat(nums2);

  mergedArray.sort((a, b) => a - b);
  const length = mergedArray.length;

  if (length === 0) {
      return NaN;
  }

  if (length === 1) {
      return mergedArray[0];
  }

  const mid = Math.floor(length / 2);

  if (length % 2 === 0) {
      return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
  } else {
      return mergedArray[mid];
  }
}

console.log(getMediOfArrays([2, 5, 3, 30], [4, 6, 12, 4, 5]));