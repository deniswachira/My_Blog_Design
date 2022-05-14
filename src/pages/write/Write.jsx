import './write.css'

function Write() {
  return (
    <div className='write'>
        <img  alt="..." className="writeImg"  src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        <form className='writeForm'>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i class="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file"  id="fileInput" style={{display:"none"}}/>
                <input type="text"   placeholder='Title' className='writeInput' autoFocus={true} />
            </div>
            <div className="writeFormGroup">
               <textarea className='writeInput writeText' placeholder='Tells us your story...' typeof=''></textarea> 
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}

export default Write