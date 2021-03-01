import './style.scss';
import classnames from "classnames";
import createCalendarOfMonth from "../../helpers/createCalendarOfMonth";
import {Td} from "../../components";
import {useSelector} from "react-redux";

const MonthView = ({year, month, today, addEvent}) => {
    const [tableDays, tableData] = createCalendarOfMonth(year, month);
    const {events} = useSelector(state=> state.calendar);
    // console.log(events)
    const mod = (e, fullDate) =>{
        e.stopPropagation();
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
                                })} onClick={(e)=>mod(e, day.fullDate)}>
                                    {day.day !== -1 && <Td day={day.day !== -1 && day.day} data={events[day.fullDate]}/>}
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