
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import TopBar from "./components/topbar/TopBar";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
function App() {
  const user = false;
  return (
    <div className="App">
       <Router>
         <TopBar/>
         <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/write" element={user ? <Write/> : <Register/>} />
          <Route path="/register" element={ user ? <Home/> : <Register/>} />
          <Route path="/settings" element={user ? <Settings/> : <Register/> } />
          <Route path="/login" element={ user ? <Home/> : <Login />} />
          <Route path="/post/:postId" element={<Single/>} />
         </Routes> 
      </Router>
     
      
     
    </div>
  );
}

export default App;
