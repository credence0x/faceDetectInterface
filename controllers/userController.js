const User = require('../models/user'),
    passport = require('passport');

//function to prepare data for storage in User model
constructQueryParams = (body) => {
    let first = body.first,
        last = body.last,
        email = body.email,
        queryParams = `?first=${first}&last=${last}&email=${email}`;
    return queryParams;
}
getUserParams = body => {
    return {
        name: {
            first: body.first,
            last: body.last
        },
        email: body.email,
        password: body.password
    };
};
module.exports = {
    login: (req, res) => {
        res.render("users/login")
    },
    redirectView: (req, res, next) => {
        let redirectPath = res.locals.redirect;
        if (redirectPath) res.redirect(redirectPath);
        else next();
    },

    authenticate: (req, res, next) => {
        // intentionally didn't use the passport shorcuts
        passport.authenticate('local', (err, user, info) => {
            if (err) { next(err) }
            else if (!user) {
                req.flash("error", info.message)
                res.locals.redirect = "/login"
                next()
            } else {
                req.logIn(user, (err) => {
                    if (err) { next(err); }
                    req.flash("success", "Logged in successfully!")
                    if (!req.session.returnTo) {
                        res.locals.redirect = "/"
                    } else {
                        res.locals.redirect = req.session.returnTo //connect-ensure-login variable
                    }
                    next()
                });
            }
        })(req, res, next);

    },

    GetSignUp: (req, res) => {
        let repopulate = req.query || false
        res.render("users/signUp", { repopulate: repopulate })
    },



    PostSignUp: (req, res, next) => {
        if (req.skip) { next() };
        let newUser = new User(getUserParams(req.body));
        User.register(newUser, req.body.password, (error, user) => {
            if (user) {
                req.flash("success", "Your registration was successful. Please sign-in to continue");
                res.locals.redirect = "/users/login"
                next()
            } else {
                if (error.name == "UserExistsError") {
                    // em = ErrorMessage
                    let em = "A user with the given email address already exists"
                    req.flash("error", em)
                    queryParams = constructQueryParams(req.body)
                    res.locals.redirect = "/users/sign-up" + queryParams
                    next()
                };
                next(error)
            }
        })

    },
    validate: (req, res, next) => {
        req.sanitizeBody("email")
            .normalizeEmail({
                all_lowercase: true
            })
            .trim();
        req.check("email", "Email is invalid").isEmail();
        req.check("password", "Password cannot be empty").notEmpty();
        req.getValidationResult()
            .then((error) => {
                if (!error.isEmpty()) {
                    let messages = error.array().map(e => e.msg);
                    req.skip = true;
                    req.flash("error", messages.join(" and "));
                    queryParams = constructQueryParams(req.body)
                    res.locals.redirect = "/users/sign-up" + queryParams
                    next();
                } else {
                    next();
                }
            });
    },

    logout: (req, res, next) => {
        // console.log("Goodnight, my love")
        req.logout();
        req.flash("success", "You have been logged out!");
        res.locals.redirect = "/users/login";
        next();
    },
}