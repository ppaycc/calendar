const initialState ={
    contacts: [],
    typeView: '',
}

const calendar = (state = initialState, {type, payload}) => {
    switch (type){
        case 'CALENDAR:SET_TYPE_VIEW' :{
            return {
                ...state,
                typeView: payload
            }
        }
        default :{
            return state;
        }
    }
}

export default calendar;