import './style.scss';
import {useState} from "react";
import {NavLink, useLocation} from "react-router-dom";

const Header = ({addMonth, removeMonth, backToToday, year, nameOfMonth, addWeek, removeWeek}) => {
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();
    const view = location.pathname.split('/')[2]
    return (
        <header className='header'>
            <button onClick={backToToday} className='today-btn'>Today</button>
            <p className='header-title'>{nameOfMonth} {year}</p>
            <div className="btn-group">
                <button className='btn-prev' onClick={view === 'month' ? removeMonth : removeWeek} />
                <button className='btn-next' onClick={view === 'month' ? addMonth : addWeek}/>
            </div>
            <div className="modal-view">
                <button onClick={()=>setShowModal(!showModal)} className='btn-view'> {view} </button>
                {showModal && <div className='modal-view-show'>
                    <NavLink to={{pathname:'/calendar/month', state:{show:"month", ru:'Месяц'}}}>Месяц</NavLink>
                    <NavLink to={{pathname:'/calendar/week', state:{show:"week", ru:'Неделя'}}}>Неделя</NavLink>
                </div>}
            </div>
        </header>
    )
}

export default Header;