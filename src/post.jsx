import { Link } from "react-router-dom"
import { useContext } from 'react';
import DataContext from './context/dataContext';

const Post = ({post}) => {
  const {setSearch} = useContext(DataContext)
  return (
    <article className="post">
      <Link to={`/post/${post.id}`} onClick={()=> setSearch('')}>
        <h2>{post.title}</h2>
        <p className="postDate">{post.datetime}</p>
      </Link>
      <p className="postBody">{
        (post.body).length <= 25
          ? post.body
          : `${(post.body).slice(0,25)}...`    
      }</p>
    </article>
  )
}

export default Post
