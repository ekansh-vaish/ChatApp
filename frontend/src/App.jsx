import { Route,BrowserRouter,Routes } from "react-router-dom"
import Chats from "./Components/Chats/Chats";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import UserList from "./Components/Chats/UserList";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import PrivacyPolicy from "./Components/Privacy&Policy/PrivacyPolicy";
import ChatBot from "./Components/ChatBot/ChatBot";
import NotFound from "./Components/NotFound/NotFound";
function App() {

  return (
    <>
<BrowserRouter>
<Routes>
 <Route path="/chats/:id" element={<Chats/>}/> 
 <Route path="/login" element={<Login/>}/> 
 <Route path="/users" element={<UserList/>}/> 
<Route path="/register" element={<Register/>}/> 
 <Route path="/about" element={<About/>}/> 
 <Route path="/contact" element={<Contact/>}/> 
 <Route path="/privacypolicy" element={<PrivacyPolicy/>}/> 
 <Route path="/chatbot" element={<ChatBot/>}/> 
 <Route path="*" element={<NotFound/>}/>
</Routes>
</BrowserRouter>
  <Footer/>
     </>
     
  )
}

export default App
