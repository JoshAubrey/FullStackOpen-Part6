const notificationReducer = (state = '', action) => {
    switch (action.type) {
        case 'NOTIFICATION':
            return action.notification
        case 'CLEAR':
            return ''
        default:
            return state
    }
  }

  export const setNotification = (notification, displayTime) => {
    return async dispatch => {
      dispatch({
        type: 'NOTIFICATION',
        notification,
      })
      await setTimeout(() => {
        dispatch({
          type: 'CLEAR'
        })
      }, displayTime*1000)
    }
  }

  // export const setNotification = (notification) => {
  //   return {
  //     type: 'NOTIFICATION',
  //     notification,
  //   }
  // }

  // export const clearNotification = () => {
  //   return {
  //     type: 'CLEAR',
  //   }
  // }
  
  export default notificationReducer