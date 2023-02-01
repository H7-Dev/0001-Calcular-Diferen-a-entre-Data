/**
 * @Author: Your name
 * @Date:   2023-02-01 08:21:54
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-02-01 08:33:38
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

  function humanize(diff) {
    let result = "";
    if (Math.floor(diff.years) >= 1) {
      result += `${Math.floor(diff.years)} ano(s) `;
    }
    if (Math.floor(diff.months) >= 1) {
      result += `${Math.floor(diff.months)} mês(es) `;
    }
    if (Math.floor(diff.days) >= 1) {
      result += `${Math.floor(diff.days)} dia(s)`;
    }
    return result || `${Math.floor(diff.milliseconds)} milissegundo(s)`;
  }

  var start = new Date("2000-01-01");
  var end = new Date("2001-01-01");
  var diff = diffInTimeUnits(start, end);
  var diffHumanized = humanize(diff);
  console.log(diffHumanized);
