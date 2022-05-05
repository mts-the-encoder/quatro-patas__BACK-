class CompanyController {

    index(req, res) {
        console.log(req.body)
    }

}

module.exports = new CompanyController();