function diffInTimeUnits(start, end) {
    // Verifica se a data final é anterior à data inicial
    if (end < start) {
        return "A data final não pode ser menor que a data inicial";
    }

    // Calcula a diferença entre as datas
    var diffInMilliseconds = end.getTime() - start.getTime();
    var diffInSeconds = diffInMilliseconds / 1000;
    var diffInMinutes = diffInSeconds / 60;
    var diffInHours = diffInMinutes / 60;
    var diffInDays = diffInHours / 24;
    var diffInMonths = (end.getMonth() - start.getMonth()) +
                       (12 * (end.getFullYear() - start.getFullYear()));
    var diffInYears = diffInMonths / 12;

    // Retorna a diferença em diferentes unidades de tempo
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
    // Verifica se a diferença já foi calculada
    if (typeof diff === "string") {
        return diff;
    }

    // Converte a diferença para uma string legível
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

  // Adiciona eventos change aos inputs de data
  document.querySelector("#dtStart").addEventListener("change", function() {
    var start = new Date(this.value);
    var end = new Date(document.querySelector("#dtEnd").value);
    var diff = diffInTimeUnits(start, end);
    var diffHumanized = humanize(diff);
    console.log(diffHumanized);
  })