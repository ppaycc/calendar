import './style.scss';
import {useState} from "react";

const AddModal = ({date, closeModal, addEventToCalendar}) => {
    const [value, setValue] = useState('');
    const addEvent = () => {
        if(value){
            addEventToCalendar({value, date})
        }
    }
    const [year, month, day] = date.split('-')
    const dateString = `${year}.${parseInt(month) + 1}.${day}`
    return (
        <div className='add-modal'>
            <div className='add-modal-window'>
                <h3> Добавить событие на {dateString}</h3>
                <textarea value={value} onChange={e=>setValue(e.target.value)}/>
                <button onClick={closeModal} className='back'>Назад</button>
                <button onClick={addEvent} className='add-event'>Добавить событие</button>
            </div>
        </div>
    )
}

export default AddModal;