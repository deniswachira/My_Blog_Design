import  './sidebar.css';
import { Link } from "react-router-dom";
function SideBar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span> 
          <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="..." /> 
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
               Nobis facere vitae sequi dicta quaerat culpa odit itaque 
               totam perspiciatis sit accusamus!</p>
        </div> 
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className='sidebarList'>
                <li className="sidebarListItem"><Link className='link' to="/post/life">Life</Link></li>
                <li className="sidebarListItem"><Link className='link' to="/post/music">Music</Link></li>
                <li className="sidebarListItem"><Link className='link' to="/post/style">Style</Link></li>
                <li className="sidebarListItem"><Link className='link' to="/post/sport">Sport</Link></li>
                <li className="sidebarListItem"><Link className='link' to="/post/tech">Tech</Link></li>
                <li className="sidebarListItem"><Link className='link' to="/post/cinema">Cinema</Link></li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i class="siderbarIcon fa-brands fa-facebook"></i>
                <i class="siderbarIcon fa-brands fa-twitter"></i>
                <i class="siderbarIcon fa-brands fa-instagram"></i>
                <i class="siderbarIcon fa-brands fa-linkedin"></i>
            </div>
        </div> 
    </div>
  )
}

export default SideBar