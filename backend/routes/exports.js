import loginRouter from "./authentication/login.js";
import registerRouter from "./authentication/register.js";
import resetRouter from "./authentication/reset.js";
import searchBarRouter from "./stock/searchBar.js";
import authenticateRouter from "./authentication/authenticate.js";
import commentRouter from "./user/commenting.js";
export const routes = {
    loginRouter,
    registerRouter,
    resetRouter,
    searchBarRouter,
    authenticateRouter,
    commentRouter
};
