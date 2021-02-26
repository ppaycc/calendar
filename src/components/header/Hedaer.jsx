import './style.scss';
import {useState} from "react";
import {NavLink, useHistory} from "react-router-dom";
import useQuery from "../../helpers/useQuery";

const Header = () => {
    const nameOfMonth = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const [showModal, setShowModal] = useState(false);
    const d = new Date();
    const [year, setYear] = useState(d.getFullYear());
    const [month, setMonth] = useState(d.getMonth());
    // console.log(view)
    const history = useHistory();
    const path = history.location.pathname.split('/')[2];

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
    const backToToday = () => {
        setMonth(d.getMonth());
        setYear(d.getFullYear());
    }

    return (
        <header className='header'>
            <button onClick={backToToday} className='today-btn'>Today</button>
            <p className='header-title'>{nameOfMonth[month]} {year}</p>
            <div className="btn-group">
                <button className='btn-prev' onClick={removeMonth} />
                <button className='btn-next' onClick={addMonth}/>
            </div>
            <div className="modal-view">
                <button onClick={()=>setShowModal(!showModal)} className='btn-view'> {path} </button>
                {showModal && <div className='modal-view-show'>
                    <NavLink to='/calendar/month'>Месяц</NavLink>
                    <NavLink to='/calendar/week'>Неделя</NavLink>
                </div>}
            </div>
        </header>
    )
}

export default Header;