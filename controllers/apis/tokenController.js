
const jwt = require('jsonwebtoken'),
    secret = process.env.JWT_SECRET || "my______secret______key________";

module.exports = {
    createToken: (user_id) => {
        //func imported in detectController.home
        value = {
            id: user_id,
        }
        token = jwt.sign({
            data: value
        }, secret, { expiresIn: '1h' });

        response_token = { token: token }
        return response_token
    },

    verifyToken: (req, res) => {
        let token = req.params.token,
            id = req.params.id;
        jwt.verify(token, secret, function (err, value) {
            if (err) {
                console.log(err)
                json_res = { authenticated: false }
                return res.json(json_res)
            }
            if (value) {
                if (value.data.id == id) {
                    json_res = { authenticated: true }
                }
                else {
                    json_res = { authenticated: false }
                }
                return res.json(json_res)
            } else {
                json_res = { authenticated: false }
                return res.json(json_res)
            }



        });
    }
}