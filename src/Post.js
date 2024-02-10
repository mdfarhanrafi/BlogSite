import React, { useState,useEffect } from 'react'
const BASE_URL = 'http://localhost:8000/'
function Post({post}) {
  const [imageUrl, setImageUrl] = useState('')  
    useEffect(() => {
        setImageUrl(post.image_url)
    }, [])  
    const handleDelete = (event) => {
        event?.preventDefault()

        const requestOptions = {
            method: 'DELETE'
        }

        fetch(BASE_URL + 'post/' + post.id, requestOptions)
            .then(response => {
                if (response.ok) {
                    window.location.reload()
                }
                throw response
            })
            .catch(error => {
                console.log(error);
            })
    }

  return (
      <div className='flex w-1/2 ml-auto mr-auto bg-white max-w-1/2 mb-12'>
          <img className='block w-1/5 object-contain pr-2 mb-auto' src={imageUrl} />
          <div className='block'>
              <div className='text-8xl'>{post.title}</div>
              <div className='text-sm italic m-1 ml-2'>by {post.creator}</div>
              <div className='whitespace-pre-line'>{post.content}</div>
              <div className='m-8 '>
                  <button className='border p-1 rounded-sm' onClick={handleDelete}>Delete post</button>
              </div>
          </div>
      </div>
  )
}

export default Post