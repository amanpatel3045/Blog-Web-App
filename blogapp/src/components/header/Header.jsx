import "./header.css"

export default function Header() {
  return (
    <div className='header'>
<div className="headerTitles">
    {/* <span className="headerTitleSm">React & Node</span> */}
    <span className="headerTitleLg">Blog</span>
</div>
{/* <img className="headerImg" src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/> */}
<img className="headerImg" src="https://cdn.pixabay.com/photo/2019/04/06/20/02/background-4108198_960_720.jpg" alt=""/>
    </div>
  )
}
