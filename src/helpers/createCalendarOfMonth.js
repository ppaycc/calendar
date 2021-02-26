function createCalendarOfMonth(year, month) {

    // let mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
    let d = new Date(year, month);

    let table = [{day:'пн'}, {day:'вт'}, {day:'ср'}, {day:'чт'}, {day:'пт'}, {day:'сб'}, {day:'вс'}];

    // пробелы для первого ряда
    // с понедельника до первого дня месяца
    // * * * 1  2  3  4
    for (let i = 0; i < getDay(d); i++) {
        table.push({day: -1});
    }

    // <td> ячейки календаря с датами
    while (d.getMonth() === month) {
        table.push({day: d.getDate(), fullDate: `${year}-${month}-${d.getDate()}`});

        // if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
        //     table += '</tr><tr>';
        // }

        d.setDate(d.getDate() + 1);
    }

    // добить таблицу пустыми ячейками, если нужно
    // 29 30 31 * * * *
    if (getDay(d) !== 0) {
        for (let i = getDay(d); i < 7; i++) {
            table.push({day: -1});
        }
    }

    // закрыть таблицу
    // table += '</tr></table>';

    const arr = [];
    const datas = table.splice(0,7)
    while (table.length > 0){
        arr.push(table.splice(0, 7));
    }
    // console.log(arr)
    return [datas, arr];
    // elem.innerHTML = table;
}

function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
    let day = date.getDay();
    if (day === 0) day = 7; // сделать воскресенье (0) последним днем
    return day - 1;
}



export default createCalendarOfMonth;