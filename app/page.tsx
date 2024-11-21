import React from 'react'
import Intro from '../components/intro'
import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'
import NewsletterForm from '@/components/newsletter-form'

type Props = {}

function Home({}: Props) {
  return (
    <>
    <section className='py-24  '>
      <div className="container max-w-3xl">
          {/* <h1 className="text-3xl font-bold">Portfolio</h1> */}
          <Intro />
          <RecentPosts />
          <RecentProjects />
          <NewsletterForm />
      </div>
    </section>
    </>
  )
}

export default Home