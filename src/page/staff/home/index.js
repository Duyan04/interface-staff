
import './style.scss'

function StaffHome() {
  return (
    <>
      {/* <div id="container">
        <aside className="sidebar">
          <div className="profile">
            <div className="avatar">
              <img
                src="https://inkythuatso.com/uploads/thumbnails/800/2023/03/8-anh-dai-dien-trang-inkythuatso-03-15-26-54.jpg"
                alt="" />
            </div>
            <p>Technical Staff</p>

          </div>
          <nav className="menu">
            <ul>
            <li>
              <NavLink to="/staff/" className="active">
                Home
              </NavLink></li>
              <li><NavLink to="/staff/assignment">Assignment</NavLink>
                <ul className="submenu">
                  <li><NavLink to="/staff/assignment/system">System maintenance</NavLink></li>
                  <li><NavLink to="/staff/assignment/request_repair">Request a repair</NavLink></li>
                </ul>
              </li>
              <li><NavLink to="/staff/workcontract">Work contract</NavLink></li>
              <li><NavLink to="/staff/profile">Edit profile</NavLink></li>
            </ul>
          </nav>
          <button className="signout">Sign out</button>
        </aside>
        <main className="main-content">
                <h1>Apartment management in the United States</h1>
            </main>
        </div> */}

      <main className="main-content">
        <h1>Apartment management in the United States</h1>
      </main>
    </>
  )
}

export default StaffHome;