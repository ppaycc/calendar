import './style.scss';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {deleteEvent, editEvent} from "../../redux/actions/calendar";

const EventItems = ({data}) => {
    // console.log(data)
    const [showModal, setShowModal] = useState(false);
    const [value, setValue] = useState(data.value);
    const dispatch = useDispatch();
    const click = (e) =>{
        e.stopPropagation();
        // console.log('123123131313')
        setShowModal(!showModal);
    }
    const deleteE = (e) => {
        e.stopPropagation()
        // console.log(data._id);
        dispatch(deleteEvent(data._id))
        setShowModal(false);
    }
    const updateE = (e) => {
        e.stopPropagation()
        if(value){
            dispatch(editEvent({
                _id: data._id,
                value,
                date: data.date
            }));
            setShowModal(false);
        }
    }
    const resetE = e => {
        e.stopPropagation();
    }
    return (
        <>
            <div onClick={click} className='event-items'>
                <p>{data.value}</p>
            </div>
            {showModal && <div onClick={resetE} className='event-items-modal'>
                <div className='event-items-modal-window'>
                    <textarea defaultValue={data.value} onChange={e=>setValue(e.target.value)}/>
                    <button onClick={click}>close</button>
                    <button onClick={deleteE}>delete</button>
                    <button onClick={updateE}>update</button>
                </div>
            </div>}
        </>

    )
}

export default EventItems;