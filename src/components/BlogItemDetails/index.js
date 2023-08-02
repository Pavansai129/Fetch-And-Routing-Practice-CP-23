import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

// Write your JS code here

class BlogItemDetails extends Component {
  state = {blogDetails: [], isLoading: true}

  componentDidMount() {
    this.fetchBlogDetails()
  }

  fetchBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedBlogItemDetails = {
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      title: data.title,
      content: data.content,
      author: data.author,
    }

    this.setState({blogDetails: updatedBlogItemDetails, isLoading: false})
  }

  render() {
    const {blogDetails, isLoading} = this.state
    const {title, imageUrl, avatarUrl, content, author} = blogDetails
    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          <div>
            <h1>{title}</h1>
            <div className="blog-author-container">
              <img src={avatarUrl} alt="avatar" className="blog-item-avatar" />
              <p>{author}</p>
            </div>
            <img src={imageUrl} alt={title} className="blog-item-image" />
            <p>{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
