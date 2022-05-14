import SideBar from '../../components/sidebar/Sidebar'
import SinglePost from '../../components/single/SinglePost'
import './single.css'

function Single() {
  return (
    <div className='single'>
      <SinglePost />
      <SideBar />
    </div>
  )
}

export default Single