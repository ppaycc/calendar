import './style.scss';
import {EventItems} from "../index";

const EventItemsAll = ({data, close}) => {
    console.log(data);
    const reset = e => {
        e.stopPropagation();
    }
    return (
        <>
            <div onClick={reset} className='event-items-all'>
                <div className='event-items-all-window'>
                    {data.map(el=>{
                        return <EventItems data={el} />
                    })}
                    <button onClick={close}>close</button>
                </div>
            </div>
        </>

    )
}

export default EventItemsAll;