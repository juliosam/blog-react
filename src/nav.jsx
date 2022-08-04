import { Link } from "react-router-dom"
import { useContext } from 'react';
import DataContext from './context/dataContext';

const Nav = () => {
  const {search, setSearch} = useContext(DataContext)
  return (
    <nav className='Nav'>
      <form 
      className='searchForm' 
      onSubmit={(e) => {
        e.preventDefault()
      }}
      >
        <label htmlFor='search'>Search Post</label>
        <input
          id='search'
          type="text"
          value={search}
          placeholder="Search Post"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/post">Post</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
