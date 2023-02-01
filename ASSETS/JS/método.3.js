/**
 * @Author: Your name
 * @Date:   2023-02-01 08:08:06
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-02-01 08:11:13
 */
function diffInTimeUnits(start, end) {
    var diffInMilliseconds = end.getTime() - start.getTime();
    var diffInSeconds = diffInMilliseconds / 1000;
    var diffInMinutes = diffInSeconds / 60;
    var diffInHours = diffInMinutes / 60;
    var diffInDays = diffInHours / 24;
    var diffInMonths = diffInDays / 30.44; // average number of days in a month
    var diffInYears = diffInMonths / 12;

    return {
      milliseconds: diffInMilliseconds,
      seconds: diffInSeconds,
      minutes: diffInMinutes,
      hours: diffInHours,
      days: diffInDays,
      months: diffInMonths,
      years: diffInYears
    };
  }

  var start = new Date("2022-01-01");
  var end = new Date("2023-01-01");
  var diff = diffInTimeUnits(start, end);
  console.log(diff);
  console.log('days ....: '+ diff.days)
  console.log('months...: '+diff.months)
  console.log('minutes..: '+diff.minutes)