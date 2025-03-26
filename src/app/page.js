import React, { Suspense } from 'react'
import { HomePage } from './component/HomePage'
function page() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <HomePage />
      </Suspense>
    </>
  )
}

export default page