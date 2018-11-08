import axios from 'axios';

export function handleAdminLogin (username, password) {
    return async function (dispatch) {
        const url = '/auth/admin';
        const res = await axios.post(url);
        dispatch({type: 'ADMIN_LOGIN', payload: res});
    }
}