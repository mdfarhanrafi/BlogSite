
import './App.css';
import { useEffect,useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
const BASE_URL = 'http://localhost:8000/'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(BASE_URL + 'post/all')
      .then(response => {
        const json = response.json()
        console.log(json);
        if (response.ok) {
          return json
        }
        throw response
      })
      .then(data => {
        return data.reverse()
      })
      .then(data => {
        setPosts(data)
      })
      .catch(error => {
        console.log(error);
        alert(error)
      })
  }, [])
  return (
    <div>
      <div className='flex w-3/5 text-6xl ml-auto mr-auto justify-center p-5'>Blog Site</div>
      <div >
       { 
         posts.map((post) => (
                <Post key={post.id}  post = {post}  />
         ))
        }
      </div>
      <div><NewPost/></div>
    </div>
  );
}

export default App;
