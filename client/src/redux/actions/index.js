
const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})

export const logoutUser = () => ({
    type: 'LOGOUT_USER'
})

export function userRegisterFetch(user) {
    return dispatch => {
        return fetch('http://localhost:9998/api/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ user })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.message)

            }).catch(console.error);
    }
}

export function userLoginFetch(user) {

    return dispatch => {
        return fetch('http://localhost:9998/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ user })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === false) {
                    console.log(data.message)
                } else {
                    console.log(data)
                    localStorage.setItem('token', data.token)
                    dispatch(loginUser(data.user));
                }
            })
    }
}
export function checkAuthentication(user) {

    return dispatch => {
        const token = localStorage.token;
        if (token) {
            return fetch('http://localhost:9998/api/user', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.success === false) {
                        //console.log(data.message)
                        localStorage.removeItem("token")
                    } else {
                        dispatch(loginUser(data.user));
                    }
                })
        }
    }
}
