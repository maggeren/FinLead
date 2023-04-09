import loginRouter from "./authentication/login.js";
import registerRouter from "./authentication/register.js";
import resetRouter from "./authentication/reset.js";
import authenticateRouter from "./authentication/authenticate.js";
export const routes = { loginRouter, registerRouter, resetRouter, authenticateRouter };
