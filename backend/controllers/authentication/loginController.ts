import User from "../../models/User.js";
import { comparePasswords } from "../../utils/bcrypt.js";


const loginUser = async (req: any, res: any) => {
  console.log("Nu er vi startet! fra localhost 4000.");
  console.log(req.body);
  try {
    const { email, password: plainTextPassword } = req.body;
    console.log("Plain text er ", plainTextPassword)
    const user = await matchingPasswords(email, plainTextPassword);
    if(user){
      req.session.user = user; // store user object in session. A cookie is set on the client side containing the session ID The client-side then sends this cookie back to the server with each subsequent request, allowing the server to identify the session and retrieve the corresponding session data.
      res.status(200).json("Succesfull");
    }
    else{
      res.status(400).json("Access denied!");
    }
  } catch (err) {
    console.log(err);
  }
};

async function getUserByEmail(email: string): Promise<any> {
  return await User.findOne({ email: email });
}

// const isLoggedIn = (req:any, res:any, next:any) => {
//      if(req.isAuthenticated()){
//       console.log("Du må godt logge ind!");
//       return next();
//      } 
//      else{
//       res.status(400).json("You must be logged in to access this features")
//      }
// };

const logoutUser = (req:any, res:any) => {
  req.session.destroy(() => { //sessions gets destroyed and the user's session cookie is cleared as well.
    res.status(200).json('Logged out!');
  });
};

async function matchingPasswords(
  email: string,
  plainTextPassword: string
): Promise<boolean> {
  console.log("Nu går det galt!")
  let hashedPassword = ""
  try{
  console.log(email);
  console.log(plainTextPassword);
  const user = await getUserByEmail(email);
  console.log(user);
  if(!user){
   console.log("Ingen kendt bruger!");
   console.log("User does not exist");
   return false;
  }
  //hashedPassword = (await getUserByEmail(email)).password;
  //console.log("Der eksisterede faktisk en bruger med mail", email)
  //console.log("Værid af hashed password er", hashedPassword);
  console.log(plainTextPassword === user.password);
  return await comparePasswords(plainTextPassword, user.password);
  }
  catch(error){
    console.log("User does not exists", error);
  }
  console.log("Vi nåede herned!");
  return false;
}
export const loginController = { loginUser, matchingPasswords, getUserByEmail, logoutUser};
