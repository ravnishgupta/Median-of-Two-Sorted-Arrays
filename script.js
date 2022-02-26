/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    //add elements of the second array to the first array
    //sort the array
    //if length is an odd number, divide the length by 2 and get the Math.floor value
    //get the element at that value
    //if length is an even number, get the element at the length/2 and length/2 - 1, 
    //add them and divide by 2
    
    for (var i=0; i<nums2.length; i++) {
        nums1.push(nums2[i])
    }
    
    nums1.sort(function(a, b) {
      return a - b;
    });
    
    var tempVal = (nums1.length) % 2;
    var tempVal1 = nums1.length
    
    if (tempVal === 0) { //even {
        return (nums1[tempVal1/2] + nums1[tempVal1/2-1])/2;
    }
    else //odd
    {
      return nums1[Math.floor(tempVal1/2)];   
    }
 };