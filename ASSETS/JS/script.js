/**
 * @Author: chatGP
 * @Date:   01-02-2023 07:33:11
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-02-01 07:56:49
 * @Decrição
 * Neste exemplo, a biblioteca moment.js é usada para calcular a duração entre as duas datas.
 * A duração é convertida em anos, meses e dias, e a função retorna a diferença em formato de string, dependendo do valor mais significativo.
 */

// import moment from './../LIBS/JS/moment.min.js';

// const moment = require('moment');
// const moment = require('moment.min');

function dateDiff(date1, date2) {
    const moment1 = moment(date1);
    const moment2 = moment(date2);
    const duration = moment.duration(moment2.diff(moment1));
    const years = Math.floor(duration.asYears());
    const months = Math.floor(duration.asMonths()) - years * 12;
    const days = Math.floor(duration.asDays()) - months * 30 - years * 365;

    if (years > 0) {
        return `${years} ano(s)`;
    } else if (months > 0) {
        return `${months} mês(es)`;
    } else {
        return `${days} dia(s)`;
    }
}

// exemplo de uso:
const date1 = moment("2000-01-01");
const date2 = moment("2023-02-07");
console.log(dateDiff(date1, date2)); // retorna "6 dias"