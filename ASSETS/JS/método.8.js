/**
 * @Author: Your name
 * @Date:   2023-02-01 08:37:03
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-02-01 08:44:09
 */
 function diffInTimeUnits(start, end) {
    var diffInMilliseconds = end.getTime() - start.getTime();
    var diffInSeconds = diffInMilliseconds / 1000;
    var diffInMinutes = diffInSeconds / 60;
    var diffInHours = diffInMinutes / 60;
    var diffInDays = diffInHours / 24;
    var diffInMonths = (end.getMonth() - start.getMonth()) +
                       (12 * (end.getFullYear() - start.getFullYear()));
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
      result += `${Math.floor(diff.days)} dia(s) `;
    }
    if (Math.floor(diff.hours) >= 1) {
      result += `${Math.floor(diff.hours)} hora(s) `;
    }
    if (Math.floor(diff.minutes) >= 1) {
      result += `${Math.floor(diff.minutes)} minuto(s) `;
    }
    if (Math.floor(diff.seconds) >= 1) {
      result += `${Math.floor(diff.seconds)} segundo(s) `;
    }
    if (!result) {
      result = `${Math.floor(diff.milliseconds)} milissegundo(s)`;
    }
    return result.trim();
  }

  var start = new Date("2022-01-01");
  var end = new Date("2023-01-01");
  var diff = diffInTimeUnits(start, end);
  var diffHumanized = humanize(diff);
  console.log(diffHumanized)

  document.getElementById("dtStart").addEventListener("change", function() {
    var start = new Date(this.value);
    var end = new Date(document.getElementById("dtEnd").value);
    var diff = diffInTimeUnits(start, end);
    var diffHumanized = humanize(diff);
    console.log(diffHumanized);
  });

  document.getElementById("dtEnd").addEventListener("change", function() {
    var start = new Date(document.getElementById("dtStart").value);
    var end = new Date(this.value);
    var diff = diffInTimeUnits(start, end);
    var diffHumanized = humanize(diff);
    console.log(diffHumanized);
  });
