const initialState ={
    events: {},
    typeView: '',
}

const calendar = (state = initialState, {type, payload}) => {
    switch (type){
        case 'CALENDAR:GER_ALL_EVENTS' :{
            let data = {};
            for (let i = 0; i < payload.length; i++){
                data = {
                    ...data,
                    [payload[i].date]: data[payload[i].date] ? [...data[payload[i].date], payload[i]] : [payload[i]]
                }
            }
            return {
                ...state,
                events: data
            }
        }
        default :{
            return state;
        }
    }
}

export default calendar;