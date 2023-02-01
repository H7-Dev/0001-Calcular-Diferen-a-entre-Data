/**
 * @Author: Your name
 * @Date:   2023-02-01 08:13:41
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-02-01 08:16:07
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
    if (diff.years >= 1) {
      return Math.floor(diff.years) + " ano(s)";
    } else if (diff.months >= 1) {
      return Math.floor(diff.months) + " mês(es)";
    } else if (diff.days >= 1) {
      return Math.floor(diff.days) + " dia(s)";
    } else if (diff.hours >= 1) {
      return Math.floor(diff.hours) + " hora(s)";
    } else if (diff.minutes >= 1) {
      return Math.floor(diff.minutes) + " minuto(s)";
    } else if (diff.seconds >= 1) {
      return Math.floor(diff.seconds) + " segundo(s)";
    } else {
      return Math.floor(diff.milliseconds) + " milissegundo(s)";
    }
  }

  var start = new Date("2022-01-01");
  var end = new Date("2022-03-15");
  var diff = diffInTimeUnits(start, end);
  var diffHumanized = humanize(diff);
  console.log(diffHumanized);

//   console.log('days ....: '+ diff.days)
//   console.log('months...: '+diff.months)
//   console.log('minutes..: '+diff.minutes)