class UserControlller {

    index(req, res) {
        console.log(req.body);
    }

    show(req, res) {

        var users = ["ada", "lovelace", "stefanini"]
        return res.status(200).json({
            error: false,
            users
        })
    }

}

module.exports = new UserControlller();