import {Link} from 'react-router-dom'
import './index.css'
// Write your JS code here
const BlogItem = props => {
  const {eachItem} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = eachItem
  return (
    <Link to={`/blogs/${id}`}>
      <div className="blog-item">
        <img src={imageUrl} alt="topic name" className="blog-image" />
        <div>
          <p>{topic}</p>
          <h1>{title}</h1>
          <div className="blog-author">
            <img src={avatarUrl} alt="avatar" className="blog-avatar" />
            <p>{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
