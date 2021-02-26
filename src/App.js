import createCalendarOfMonth from "./helpers/createCalendarOfMonth";
import {Header, MiniCalendar} from "./components";
import {Route} from 'react-router-dom';
import {MonthView} from "./pages";
import {Redirect} from 'react-router-dom'

function App() {
  return (
    <div className='view'>
        <Header/>
        <div className='main-window'>
            <MiniCalendar/>
                <div className='main-celendar'>
                    <Route path='/' render={()=><Redirect to='/calendar/month'/>}/>
                    <Route path='/calendar/month' render={()=><MonthView/>}/>
                </div>
        </div>
    </div>
  );
}

export default App;
