/**
 * @Author: Your name
 * @Date:   2023-02-01 08:01:51
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-02-01 08:06:14
 */
function diffInDays(start, end) {
    // Calculate the difference in milliseconds
    var diff = end.getTime() - start.getTime();
    // Convert the difference to days and return as an integer
    return Math.floor(diff / (1000 * 3600 * 24));
  }

  var start = new Date("2022-01-01");
  var end = new Date("2022-01-07");
  var diffInDays = diffInDays(start, end);
  console.log(diffInDays);
