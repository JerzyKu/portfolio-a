import React from 'react'
import Intro from './intro'

type Props = {}

function Home({}: Props) {
  return (
    <>
    <section className='py-24  '>
      <div className="container max-w-3xl">
          {/* <h1 className="text-3xl font-bold">Portfolio</h1> */}
          <Intro />
      </div>
    </section>
    </>
  )
}

export default Home