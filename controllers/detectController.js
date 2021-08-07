const superagent = require('superagent');
module.exports = {
    home: (req, res) => {
        let django = '127.0.0.1:8000'
        superagent
            .get(`http://${django}/api/detect`)
            .end((err, res) => {
                console.log(res)
            })
        res.render("detect/upload")
    },
}