const initialState ={
    contacts: [],
    dataForChange: {}
}

const phoneBook = (state = initialState, {type, payload}) => {
    switch (type){
        case 'PHONEBOOK:SET_ALL_CONTACTS' :{
            return {
                ...state,
                contacts: [...payload]
            }
        }
        case 'PHONEBOOK:SET_DATA_FOR_CHANGE' :{
            return {
                ...state,
                dataForChange: payload
            }
        }
        default :{
            return state;
        }
    }
}

export default phoneBook;