exports.signin = (req, res) => {
    try {
        res.status(200).json({ message: "login success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to login" })
    }
}

exports.registerEmployee = (req, res) => {
    try {
        res.status(200).json({ message: "register employee success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to register employee" })
    }
}
exports.singin = (req, res) => {
    try {
        res.status(200).json({ message: "singin success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to singin" })
    }
}
exports.signout = (req, res) => {
    try {
        res.status(200).json({ message: "signout success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to signout" })
    }
}
exports.sendOTP = (req, res) => {
    try {
        res.status(200).json({ message: "sendOTP success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to sendOTP" })
    }
}
exports.verifyOTP = (req, res) => {
    try {
        res.status(200).json({ message: "verifyOTP success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to verifyOTP" })
    }
}
exports.forgetPassword = (req, res) => {
    try {
        res.status(200).json({ message: "forgetPassword success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to forgetPassword" })
    }
}
exports.changePassword = (req, res) => {
    try {
        res.status(200).json({ message: "changePassword success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to changePassword" })
    }
}