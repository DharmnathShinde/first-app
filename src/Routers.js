import React from 'react';
import { Link,NavLink } from 'react-router-dom';

function Routers() {
  return (
    <div>
      <nav className='grid'>
        <h1>Logo</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><NavLink to="/about"
        style={({ isActive }) => ({
    color: isActive
        ? "green"
        : "black"
})}
          >About</NavLink></li>
          <li><NavLink
  to="/contact"
  style={({ isActive }) => ({
    color: isActive
        ? "blue"
        : "black"
})}
>
  contact
</NavLink>;</li>
<li>
<Link to="api">Data</Link>
</li>

        </ul>
      </nav>
    </div>
  );
}

export default Routers;
