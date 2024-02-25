import React from 'react'
import appwriteService from '../appwrite/config'
import { useEffect } from 'react'
import { useState} from 'react'
import Container from '../components/Container/Container'
import PostCard from '../components/PostCard/PostCard'

function Home() {

  const [posts, setPosts] = React.useState([])
  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])
  if (posts.length === 0) {
    return <div className='w-full py-8'>
    <Container>
      <div className='flex flex-wrap'>
        <h1>Login to read posts</h1>
      </div>
    </Container>
  </div>
  }

  return <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {posts.map((post) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard {...post}></PostCard>
            </div>
          ))}
        </div>
      </Container>
    </div>
}

export default Home