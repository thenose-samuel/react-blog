import './topbar.css';

function TopBar() {
  return (
    <div className='top'>
        <div className="topLeft">
        <i class="topIcon fa-brands fa-github"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className='topListItem'>HOME</li>
                <li className="topListItem">ABOUT</li>
             <li className="topListItem">CONTACT</li>
             <li className="topListItem">WRITE</li>
             <li className="topListItem">LOGOUT</li>

            </ul>
        </div>
        <div className="topRight">
            <img className="topImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgi24mTA24efSIk5Wq8A44hBvV8H0Awn6XrA&usqp=CAU" alt="profile-icon" />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
        </div>
  )
}

export default TopBar