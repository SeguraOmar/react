import { Link } from 'react-router-dom'
  	  
function Layout() {
    <div>
      <nav>
        <ul>
        <li>
            <Link to="/">Home</Link>
         </li>
        <li>
            <Link to="/about">About</Link>
         </li>
      </nav>
    <hr />
    <Outlet />
    </div>
}
    
Export default Layout ;