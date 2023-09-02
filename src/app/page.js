"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link'
import { getLatestNews } from '@/api';
import { 
  Col, Row, Avatar,
  Carousel, Image
} from 'antd';
import { getTimeText, number2Chinese } from '@/utils';

export default function Home() {
  const [time, setTime] = useState({});
  const [lastestNews, setNews] = useState({});

  const setTimeFunc = () => {
    const time = new Date();
    setTime({
      date: time.getDate(),
      month: number2Chinese(time.getMonth() + 1) + "月",
      text: getTimeText(time.getHours())
    });
  }

  const GetNews = () => {
    getLatestNews().then(res => {
      setNews(res);
    })
  }

  useEffect(() => {
    setTimeFunc();
    GetNews();
  }, [])

  return (
    <div>
      <Row className='p-2'>
        <Col span={3} className='border-dark-100 border-r pr-2'>
          <Row className='justify-center text-xl'>{ time.date }</Row>
          <Row className='justify-center text-xs'>{ time.month }</Row>
        </Col>
        <Col 
          span={18}
          className='pl-4 pr-4 text-xl font-bold flex items-center justify-center'
        >
          { time.text }
        </Col>
        <Col span={3} className='flex items-center justify-center'>
          <Avatar src="./favicon.ico" />
        </Col>
      </Row>
      <div>
      {/* lastestNews.top_stories */}
        <Carousel autoplay>
          {
            lastestNews.top_stories &&
            lastestNews.top_stories.map(item => (
              <div key={item.id}>
                <div className='relative' style={{
                  color: '#fff',
                  textAlign: 'center',
                  height: '400px',
                  backgroundImage: `url(${item.image})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}>
                  <div className='absolute bottom-0 w-full text-center h-full' style={{
                    background: "linear-gradient(180deg,rgba(0,0,0,.1) 10%,rgba(0,0,0,.5) 90%,rgba(0,0,0,.8) 100%)",
                  }}></div>
                  <div className='absolute bottom-6 w-full p-5 text-center text-lg line-clamp-2'>
                  {item.title}
                  </div>
                  <div className='absolute bottom-5 w-full pl-5 text-left'>
                  {item.hint}
                  </div>
                </div>
              </div>
            ))
          }
        </Carousel>

        <div className='stories-container'>
          {
            lastestNews.stories &&
            lastestNews.stories.map(item => (
              <Link 
                href={'/post/' + item.id} 
                key={item.id}
              >
                <Row className='p-4 h-24 hover:bg-slate-50 transition-all'>
                  <Col span={20}>
                    <Row className='text-base font-bold'>{ item.title }</Row>
                    <Row className='text-gray-400'>{ item.hint }</Row>
                  </Col>
                  <Col span={4}>
                    <div className='h-full w-full flex items-center justify-center'>
                      <Image 
                        width="4rem"
                        preview={false} 
                        src={item.images[0]} 
                        alt=""
                      />
                    </div>
                  </Col>
                </Row>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}
