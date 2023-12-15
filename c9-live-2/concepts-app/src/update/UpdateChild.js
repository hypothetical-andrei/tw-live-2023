import { useState, useEffect } from 'react'

function UpdateChild (props) {
  const { item } = props
  const [post, setPost] = useState({})

  const getPost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${item}`)
    const json = await response.json()
    setPost(json)
  }

  useEffect(() => {
    getPost()
  }, [item])

  return (
    <div>
      <div>
        Title <b>{post.title}</b>
      </div>
      <div>
        {post.body}
      </div>
    </div>
  )
}

export default UpdateChild