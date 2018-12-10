let messageHandle = {
    doCatch: (error = null) => {
        if (error != null) {
            console.log(error)
        }
        if (error.stack != null) {
            console.log(error.stack)
        }
    },
    doMessage: (message = null) => {
        if (message != null) {
            console.log(message)
        }
        if (message.stack != null) {
            console.log(message.stack)
        }
    }
}

export {messageHandle}