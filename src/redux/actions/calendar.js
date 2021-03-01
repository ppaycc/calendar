import API from "../../api/API";

export const addAllEvents = (data) => ({
    type: 'CALENDAR:GER_ALL_EVENTS', payload: data
})
export const addNewEvent = data => async dispatch => {
    await API.add(data);
    dispatch(getAllEvents());
}
export const deleteEvent = id => async dispatch => {
    await API.delete(id);
    dispatch(getAllEvents());
}
export const getAllEvents = () => async dispatch => {
    const data = await API.get().then(d=>d.items);
    dispatch(addAllEvents(data));
}
export const editEvent = event => async dispatch => {
    await API.edit(event);
    dispatch(getAllEvents());
}