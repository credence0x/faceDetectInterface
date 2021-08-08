const superagent = require('superagent'),
tokenController = require("./apis/tokenController");
module.exports = {
    home: (req, res) => {
        // let django = '127.0.0.1:8000'
        // superagent
        //     .get(`http://${django}/api/detect`)
        //     .end((err, res) => {
        //         console.log(res)
        //     })
        let token_obj = tokenController.createToken(req.user._id.toString())
        token = token_obj.token
        res.render("detect/upload",{token:token})
    },
}