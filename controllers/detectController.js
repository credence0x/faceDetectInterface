const superagent = require('superagent');
module.exports = {
    home: (req, res) => {
        // superagent
        //     .get("https://qolom.com")
        //     .end((err, res) => {
        //         console.log(res.text)
        //     })
        res.render("detect/upload")

    },
}