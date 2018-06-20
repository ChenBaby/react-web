import React from 'react'
import Header from './Header'
import '../css/books.less'

class Books extends React.Component {
  render () {
    return (
      <div className='books-content'>
        <Header />
        <h2>古琴文献合集</h2>
        <h4 className='main-blue'>共收藏琴谱156部，按年代排列</h4>
      </div>
    )
  }
}

export default Books
