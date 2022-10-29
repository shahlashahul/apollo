import React from 'react'
import AddBook from './AddBook'
import BookList from './BookList'

function Home() {
  return (
    <div id="main">
      <BookList />
      <AddBook/>
    </div>
  )
}

export default Home
