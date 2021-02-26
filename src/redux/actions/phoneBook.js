import API from "../../API";

export const addNewContact = ({name, email, phone}) => dispatch => {
    API.add({name, email, phone}).then(d=>console.log(d))
}
export const getAllContacts = () => async dispatch => {
    const data = await API.get().then(res=>res.items);
    dispatch(setAllContacts(data));
}
const setAllContacts = (contactsArr) => ({
    type: 'PHONEBOOK:SET_ALL_CONTACTS', payload: contactsArr
})
export const deleteContact = id => async dispatch => {
    await API.delete(id);
    const data = await API.get().then(res=>res.items);
    dispatch(setAllContacts(data));
}
export const changeContact = contact => dispatch => {
    API.update(contact).then(d=>console.log(d));
}
export const getContactsById = id => async dispatch => {
    const data = await API.getById(id).then(d=>d.item);
    // console.log(data)
    dispatch(setDataForChange(data));
}
export const setDataForChange = contact => ({
    type: 'PHONEBOOK:SET_DATA_FOR_CHANGE', payload: contact
})

