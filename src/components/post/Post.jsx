import  './post.css';
import { Link } from "react-router-dom";
function Post() {
  return (
    <div className='post'>
        <img className='postImg' src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="..." />
    <div className="postInfo">
        <div className="postCats">
            <span className="postCat"><Link className='link' to="/post/music">Music</Link></span>
            <span className="postCat"><Link className='link' to="/post/life">Life</Link></span>
        </div>
        <span className="postTitle">lorem ipsum dolro sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
    </div>
    <p className='postDesc'>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. A aperiam praesentium deleniti suscipit earum illo quas modi eligendi, iusto quibusdam minima harum in quisquam incidunt soluta fugit explicabo saepe dolorum!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A aperiam praesentium deleniti suscipit earum illo quas modi eligendi, iusto quibusdam minima harum in quisquam incidunt soluta fugit explicabo saepe dolorum!
    </p>
    
    </div>
  )
}

export default Post