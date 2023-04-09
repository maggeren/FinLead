const isLoggedIn = (req, res, next) => {
    if (req.session && req.session.user) {
        console.log("Du må godt logge ind!");
        return next();
    }
    else {
        res.status(401).json({ error: "You must be logged in to access this features" });
    }
};
export const authenticateController = { isLoggedIn };
