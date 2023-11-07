
const user_reducer = (state, action) => {

    if (action.type === 'USER_LOGIN_REQUEST') {
        return {...state, loading: true}
    }

    if (action.type === 'USER_LOGIN_SUCCESS') {

        const newState = {...state,
            userId: action.payload.userId,
            token: action.payload.token,
            loading: false,
            error: ''
        }

        localStorage.setItem('userInfo', JSON.stringify(newState))
        return newState
    }

    if (action.type === 'USER_LOGIN_FAIL') {
        
        return {...state, loading: false, error: action.payload}
    }


    if (action.type === 'USER_LOGOUT') {
        localStorage.removeItem('userInfo')
        return {...state, userId: '', token: ''}
    }

    if (action.type === 'USER_REGISTER_REQUEST') {
        
        return {...state, loading: true}
    }
    if (action.type === 'USER_REGISTER_FAIL') {
        return {...state, loading: false, error: action.payload }
    }
    if (action.type === 'USER_REGISTER_SUCCESS') {
        return {...state, loading: false, error: action.payload }
    }
    
}

export default user_reducer
  