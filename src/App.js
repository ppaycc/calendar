import {AddModal, Header, MiniCalendar} from "./components";
import {Route, Redirect} from 'react-router-dom';
import {MonthView} from "./pages";
import {useState} from "react";

function App() {

    const nameOfMonth = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const d = new Date();
    const [year, setYear] = useState(d.getFullYear());
    const [month, setMonth] = useState(d.getMonth());
    const today = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    const [addModal, setAddModal] = useState(false);
    const [addToData, setAddToData] = useState('');

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

    // let qwe = '';
    const addEvent = (data) => {
        console.log(data);
        setAddToData(data);
        setAddModal(true);
    }
    const closeModal = () => {
        setAddModal(false)
    }
    const addEventToCalendar = (data) => {
        console.log(data)
        // closeModal();
    }

  return (
    <div className='view'>
        <Header addMonth={addMonth}
                removeMonth={removeMonth}
                backToToday={backToToday}
                nameOfMonth={nameOfMonth[month]}
                year={year}
        />
        <div className='main-window'>
            <MiniCalendar addEvent={addEvent}/>
                <div className='main-celendar'>
                    <Route path='/' render={()=><Redirect to={{pathname:'/calendar/month', state:{show:'month', ru:'Месяц'} }}/>}/>
                    <Route path='/calendar/month' render={()=><MonthView
                        year={year}
                        month={month}
                        today={today}
                        addEvent={addEvent}
                    />}/>
                </div>
        </div>
        {addModal && <AddModal date={addToData} closeModal={closeModal} addEventToCalendar={addEventToCalendar}/>}
    </div>
  );
}

export default App;
