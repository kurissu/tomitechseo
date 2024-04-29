import React from 'react'

const newsDetail = ({params}: {params: {newsId: string};}) => {
  return (
    <div>newsDetails {params.newsId}</div>
  )
}

export default newsDetail