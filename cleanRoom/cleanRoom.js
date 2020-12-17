const cleanRoom = (input) => {
  const len = input.length;
  //! to save save as [{id, arr}]
  var nums = [];

  for (var i = 0; i < input.length; i++) {
    //! Lets find the index
    var index = nums.findIndex((x) => x.id === input[i]);
    //! If value Update the array
    if (index != -1) {
      var arr = nums[index].arr;
      arr.push(input[i]);
      nums[index].arr = arr;
    } else {
      nums.push({ id: input[i], arr: [input[i]] });
    }
  }

  var sorted = nums.sort(function (a, b) {
    return a.id - b.id;
  });

  console.log(sorted);

  console.log(JSON.stringify(nums));
  var result = [];
  for (var x = 0; x < nums.length; x++) {
    //! This is for values with array length 1
    if (nums[x].length < 1) {
      result.push(nums[x].arr[0].value);
    } else {
      result.push(nums[x].arr);
    }
  }

  console.log(JSON.stringify(result));
};

module.exports = cleanRoom;
