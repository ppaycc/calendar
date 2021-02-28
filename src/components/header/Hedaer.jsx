import './style.scss';
import {useState} from "react";
import {NavLink, useLocation} from "react-router-dom";

const Header = ({addMonth, removeMonth, backToToday, year, nameOfMonth}) => {
    const [showModal, setShowModal] = useState(false);
    const params = useLocation();
    // console.log(params.state.ru)
    return (
        <header className='header'>
            <button onClick={backToToday} className='today-btn'>Today</button>
            <p className='header-title'>{nameOfMonth} {year}</p>
            <div className="btn-group">
                <button className='btn-prev' onClick={removeMonth} />
                <button className='btn-next' onClick={addMonth}/>
            </div>
            <div className="modal-view">
                <button onClick={()=>setShowModal(!showModal)} className='btn-view'> {params.state.ru} </button>
                {showModal && <div className='modal-view-show'>
                    <NavLink to={{pathname:'/calendar/month', state:{show:"month", ru:'Месяц'}}}>Месяц</NavLink>
                    <NavLink to={{pathname:'/calendar/week', state:{show:"week", ru:'Неделя'}}}>Неделя</NavLink>
                </div>}
            </div>
        </header>
    )
}

export default Header;