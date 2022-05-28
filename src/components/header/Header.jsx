import './header.css';

function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img  alt=".." className="headerImg"src="https://images.unsplash.com/photo-1653284086534-0895e2fe0abf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Ul9GeW4tR3d0bHd8fGVufDB8fHx8?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    </div>
  )
}

export default Header