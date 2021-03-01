import {EventItems} from "../index";
import {useState} from "react";
import EventItemsAll from "../eventItemsAll/EventItemsAll";

const Td = ({data, day}) => {
    const [showAll, setShowAll] = useState(false);
    const showEvents = (arrEvent) => {
        const events = [];
        const length = arrEvent.length > 2 ? 2 : arrEvent.length;
        for (let i = 0; i < length; i++){
            events.push(<EventItems data={arrEvent[i]} key={arrEvent[i].date + 'events' + arrEvent[i].value}/>)
        }
        return events
    }
    const showAllEvents = (e) => {
        e.stopPropagation()
        setShowAll(!showAll)
        // console.log(data);
    }
    const close = () =>{
        setShowAll(!showAll)
    }
    return (
        <div className='td'>
            {day}
            {data && showEvents(data)}
            {data && data.length > 2 &&
            <button onClick={showAllEvents}>show all events</button> }
            {showAll && data && <EventItemsAll close={close} data={data}/>}

        </div>
    )
}

export default Td;