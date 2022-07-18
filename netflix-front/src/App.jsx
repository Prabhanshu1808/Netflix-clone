import "./App.css"
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import { BrowserRouter as Router,Routes,Route, Redirect} from "react-router-dom";


const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
       <Route path="/" element={ user ? <Home /> : <Register/>} exact/>
       <Route path="/register" element={!user ? <Register /> : <Home/>} exact/>
       <Route path="/login" element={!user ? <Login /> : <Home/>} exact/>  
       {user && (
        <>
        <Route path="/movies" element={<Home type="movies"/>}/>
        <Route path="/series" element={<Home type="Series"/>}/>
        <Route path="/watch" element={<Watch />}/>
        </>
       )}
     </Routes>
    </Router>
  );
}

export default App;
