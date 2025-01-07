import React from 'react'

export default async function IdPage({params: {id}}: {params: {id: string}}){

    const post = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
      ).then((res) => res.json() as Promise<{title: string; url: string; by: string}>);
    
  return  <iframe className='h-full w-full' src={post.url} title={post.title} />

}
