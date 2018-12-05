let errorHandle = {
    doCatch: (error = null) => {
        if (error != null) {
            console.log(error)
        }
        if (error.stack != null) {
            console.log(error.stack)
        }
    }
}

export {errorHandle}