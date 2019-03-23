let nums = [1, 2, 3, 6, 9, 8, 7, 4];
const ids = [1, 2, 3, 6, 9, 8, 7, 4];

let btn5 = document.getElementById("btn5");

function rotateNums() {
  // pop removes item from end of array and returns that item.
  // unshift adds items to the beginning of an array.
  nums.unshift(nums.pop());
  for (i = 0; i <= 7; i++) {
    document.getElementById("btn" + ids[i]).innerHTML = nums[i];
  }
}

btn5.addEventListener("click", rotateNums);
