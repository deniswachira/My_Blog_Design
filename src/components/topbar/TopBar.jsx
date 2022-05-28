import './topbar.css';
import { Link } from "react-router-dom";
function TopBar() {
  const user = false;
  return (
    <div className='top'>
       <div className="topLeft">
            <a href="https://www.facebook.com/decodedblog"><i class="topIcon fa-brands fa-facebook"></i></a>
           <a href="https://twitter.com/deniswachira_"> <i class="topIcon fa-brands fa-twitter"></i></a>
           <a href="https://www.instagram.com/deniswachira_/"><i class="topIcon fa-brands fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/denis-wachira-b4501b234/"><i class="topIcon fa-brands fa-linkedin"></i></a>
       </div>
       <div className="topCenter">
           <ul className='topList'>
              <li className="topListItem">
                 <Link className='link' to="/">HOME</Link>
              </li>
               <li className="topListItem">
                  <Link className='link' to="/about">ABOUT</Link>
              </li>
               <li className="topListItem">
                  <Link className='link' to="/contact">CONTACT</Link>
              </li>
              <li className="topListItem">
                  <Link className='link' to="/write">WRITE</Link>
              </li>
              <li className="topListItem">
                {user &&  <Link className='link' to="/logout">LOGOUT</Link>}                 
              </li>
           </ul>
       </div>
       <div className="topRight">
         {
           user ? (
             <>
            <img className='topImg' src={`https://avatars.dicebear.com/api/pixel-art/${"kevin"}.svg`} alt=".." />
            
            </>
           ) : (
             <ul className='topList'>
                <li className="topListItem">
                   <Link className='link' to="/login">Login</Link>
                </li>
                <li className="topListItem">
                   <Link className='link' to="/register">Register</Link>
                </li>
            </ul>
           )
         }
          <i class="topsearchIcon fa-solid fa-magnifying-glass"></i>
       </div>
    </div>
  )
}

export default TopBar