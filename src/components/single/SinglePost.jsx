import './singlepost.css';

function SinglePost() {
  return (
    <div className='singlePostWrapper'>
      <img className='singlePostImg'  src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=".." />
      <h1 className='singlePostTitle'>
        Lorem, ipsum dolor sit amet consectetur
        <div className="singlePostEdit">
          <i className=" singlePostIcon fa-solid fa-pen-to-square"></i>
          <i className=" singlePostIcon fa-solid fa-trash-can"></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">Author: <b>Safak</b></span> 
        <span className="singlePostDate">1 hour ago</span> 
      </div>
      <p className='singlePostDesc'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laboriosam, 
        voluptas animi dolorum ea error aliquid nobis ex voluptate, perspiciatis corrupti harum qui rem, quae magni? Eum temporibus odit eius!
        voluptas animi dolorum ea error aliquid nobis ex voluptate, perspiciatis corrupti harum qui rem, quae magni? Eum temporibus odit eius!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit consequuntur mollitia, 
        accusamus deserunt quasi corporis amet maxime quo porro eum illo, vero aspernatur nobis tenetur natus consequatur architecto eligendi esse.
        accusamus deserunt quasi corporis amet maxime quo porro eum illo, vero aspernatur nobis tenetur natus consequatur architecto eligendi esse.
      </p>
    </div>
  )
}

export default SinglePost