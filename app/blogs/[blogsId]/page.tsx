import React from 'react'

const blogDetails = ({params}: {params: {blogsId: string};}) => {
  return (
    <div>blogDetails {params.blogsId}</div>
  )
}

export default blogDetails