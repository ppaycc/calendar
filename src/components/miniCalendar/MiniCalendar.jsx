import {useState} from "react";
import createCalendar from "../../helpers/createCalendarOfMonth";
import classnames from 'classnames';
import './style.scss';


const MiniCalendar = () => {
    const nameOfMonth = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    const d = new Date();
    const [month, setMonth] = useState(d.getMonth());
    const [year, setYear] = useState(d.getFullYear());
    const today = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    const [tableDays, tableData] = createCalendar(year, month);

    const addMonth = () => {
        if(month + 1 > 11){
            setMonth(0)
            setYear(year+1);
        } else{
            setMonth(month+1);
        }
    }
    const removeMonth = () => {
        if(month - 1 < 0){
            setMonth(11)
            setYear(year-1);
        } else{
            setMonth(month-1);
        }
    }
    const mod = (day) => {
        console.log(day)
    }

    return (
        <div className='small-calendar'>
            <div className='small-calendar-header'>
                <div className="small-calendar-header-l">
                    {nameOfMonth[month]}
                </div>
                <div className="small-calendar-header-r">
                    {year}
                    <button className='btn-prev' onClick={removeMonth}/>
                    <button className='btn-next' onClick={addMonth}/>
                </div>
            </div>
            <table>
                <tbody>
                <tr>
                    {tableDays.map(day => {
                        return <td className='empty-day'>{day.day}</td>
                    })}
                </tr>
                {tableData.map(row => {
                    return (
                        <tr>
                            {row.map(day => {
                                return <td className={classnames({
                                    'active': day.fullDate === today,
                                    'empty-day': day.day <= 0
                                })} onClick={()=>mod(day.fullDate)}>{day.day !== -1 && day.day}</td>
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}
export default MiniCalendar;