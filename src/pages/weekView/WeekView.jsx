import './style.scss';
import classnames from "classnames";
import createCalendarOfMonth from "../../helpers/createCalendarOfMonth";
import {useEffect} from "react";

const WeekView = ({year, month, week, addEvent, today, setMaxWeek}) => {

    const [tableDays, tableData] = createCalendarOfMonth(year, month);
    const mod = fullDate =>{
        if(fullDate){
            addEvent(fullDate)
        }
    }
    useEffect(()=>{
        setMaxWeek(tableData.length);
    },[month, week])

    // const datas = tableData[week] ? tableData[week] : tableData[week-1] ? tableData[week-1] : tableData[week-2];
    let datas = [];
    if(tableData[week]){
        datas = tableData[week]
    } else if(tableData[week-1]){
        datas = tableData[week-1]
    } else {
        datas = tableData[week-2];
    }
    return (
        <div className='weekView'>
            <table>
                <tbody>
                <tr>
                    {tableDays.map(day => {
                        return <td key={day.day + 'mainCalendar'} className='empty-day days'>{day.day}</td>
                    })}
                </tr>
                <tr>
                {datas.map(day => {
                    return (
                        <td key={day.fullDate + day.day + 'mainCalendar' + Math.random()} className={classnames({
                            'active': day.fullDate === today,
                            'empty-day': day.day <= 0
                        })} onClick={()=>mod(day.fullDate)}>
                            {day.day !== -1 && <div className='td'>{day.day !== -1 && day.day}
                            </div>}
                        </td>
                    )
                })}
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default WeekView;