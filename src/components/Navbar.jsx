import { Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import './Navbar.css'
import { useState } from 'react';

export default function Navbar() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    // e.preventDefaul();

    if(!search) return;

    navigate(`/search?q=${search}`)
    console.log(search);
    setSearch('');
  }

return (
<nav id='navbar'>
 <h2>
   <Link to="/">
   <BiCameraMovie />MoviesLib</Link>
 </h2>
 
 <div className="form">
   <input
    type="text"
    className='search-input'
    placeholder='Busque um filme'
    onChange={(e) => setSearch(e.target.value)}
    value={search}
   />
   <button type="submit"
    onClick={handleClick}
   >
   <BiSearchAlt2 />
   </button>
 </div>
</nav>
)
}
