const nums1 = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const length1 = nums1.length;
const nums2 = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5];
const length2 = nums2.length;
const nums3 = [100];
const length3 = nums3.length;
const nums4 = [10, 20, 30];
const length4 = nums4.length;

function sockMerchant(n, ar) {
  let pairs = 0;
  let sorted = ar.sort((a, b) => a - b);

  while (sorted.length > 0) {
    if (n <= 1) {
      console.log(pairs);
      return pairs;
    } else if (sorted[0] === sorted[1]) {
      pairs++;
      sorted.shift();
      sorted.shift();
    } else {
      sorted.shift();
    }
  }
  console.log(pairs);
  return pairs;
}

sockMerchant(length1, nums1);
sockMerchant(length2, nums2);
sockMerchant(length3, nums3);
sockMerchant(length4, nums4);
