'use client';

import { getPostInfo } from '@/api';
import { useEffect, useState } from 'react';
import { Button } from 'antd';
import Post from '@/components/post';
import Link from 'next/link';

export default function Page({ params }) {
  const [post, setPost] = useState({});

  useEffect(() => {
    getPostInfo(params.id).then(res => {
      setPost(res)
    })
  }, [params.id]);

  return (
    <div className='relative'>
      <div className='absolute left-2 top-0'>
        <Link href='/'>
          <Button type="link">回到首页</Button>
        </Link>
      </div>

      <h1 className='p-4 text-xl font-bold text-center pt-8'>{ post.title }</h1>
      <div>
        <div style={{
          color: '#fff',
          textAlign: 'center',
          height: '400px',
          width: '100%',
          backgroundImage: `url(${post.image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}></div>
      </div>
      
      <div>
        <Post html={post.body} />
      </div>
    </div>
  )
}
