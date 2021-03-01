import {AddModal, Header, MiniCalendar} from "./components";
import {Route, Redirect} from 'react-router-dom';
import {MonthView} from "./pages";
import {useState} from "react";
import WeekView from "./pages/weekView/WeekView";
import {useDispatch} from "react-redux";
import {addNewEvent, getAllEvents} from "./redux/actions/calendar";
import {useEffect} from "react";

function App() {

    const nameOfMonth = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const d = new Date();
    const [year, setYear] = useState(d.getFullYear());
    const [month, setMonth] = useState(d.getMonth());
    const [week, setWeek] = useState(0);
    const [maxWeek, setMaxWeek] = useState(0);
    const today = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    const [addModal, setAddModal] = useState(false);
    const [addToData, setAddToData] = useState('');
    const dispatch = useDispatch();
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
    const addWeek = () => {
        if(week + 1 < maxWeek){
            setWeek(week +1)
        } else{
            setWeek(0);
            addMonth();
        }
    }
    const removeWeek = () => {
        if(week - 1 >= 0){
            setWeek(week - 1);
        } else {
            setWeek(maxWeek);
            removeMonth();
        }
    }

    const addEvent = (data) => {
        setAddToData(data);
        setAddModal(true);
    }
    const closeModal = () => {
        setAddModal(false);
    }
    const addEventToCalendar = (data) => {
        dispatch(addNewEvent(data))
        closeModal();
    }
    useEffect(()=>{
        dispatch(getAllEvents());
    },[dispatch])

  return (
    <div className='view'>
        <Header addMonth={addMonth}
                removeMonth={removeMonth}
                backToToday={backToToday}
                nameOfMonth={nameOfMonth[month]}
                year={year}
                addWeek={addWeek}
                removeWeek={removeWeek}
        />
        <div className='main-window'>
            <MiniCalendar addEvent={addEvent}/>
                <div className='main-celendar'>
                    <Route path='/' render={()=><Redirect to='/calendar/month'/>}/>
                    <Route path='/calendar/month' render={()=><MonthView
                        year={year}
                        month={month}
                        today={today}
                        addEvent={addEvent}
                    />}/>
                    <Route path='/calendar/week' render={()=> <WeekView
                        year={year}
                        month={month}
                        week={week}
                        today={today}
                        setMaxWeek={setMaxWeek}
                        addEvent={addEvent}
                    />}/>
                </div>
        </div>
        {addModal && <AddModal date={addToData} closeModal={closeModal} addEventToCalendar={addEventToCalendar}/>}
    </div>
  );
}

export default App;
