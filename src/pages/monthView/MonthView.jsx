import './style.scss';
import classnames from "classnames";
import createCalendarOfMonth from "../../helpers/createCalendarOfMonth";
import {EventItems} from "../../components";
import {useRef} from "react";

const MonthView = ({year, month, today, addEvent}) => {
    const [tableDays, tableData] = createCalendarOfMonth(year, month);
    const mod = fullDate =>{
        if(fullDate){
            addEvent(fullDate)
        }
    }
    return (
        <div className='monthView'>
            <table >
                <tbody>
                <tr>
                    {tableDays.map(day => {
                        return <td key={day.day + 'mainCalendar'} className='empty-day days'>{day.day}</td>
                    })}
                </tr>
                {tableData.map(row => {
                    return (
                        <tr key={row[0].fullDate + 'mainCalendarRow'}>
                            {row.map(day => {
                                return <td key={day.fullDate + day.day + 'mainCalendar' + Math.random()} className={classnames({
                                    'active': day.fullDate === today,
                                    'empty-day': day.day <= 0
                                })} onClick={()=>mod(day.fullDate)}>
                                    {day.day !== -1 && <div className='td'>{day.day !== -1 && day.day}
                                        <EventItems width={100}/>
                                    </div>}
                                </td>
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default MonthView;