import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import '../css/book.less'

class Book extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showRemark: false,
      bookid: props.match.params.id
    }
    this.remarkClick = this.remarkClick.bind(this)
    console.log(this.state.bookid)
  }

  remarkClick () {
    this.setState({ showRemark: true })
  }
  render () {
    return (
      <div>
        <Header />
        <div id='book-content' className='book-content'>
          <div className='content-header'>
            <div className='bookcover'>
              <h2><span className='verticle'>事林廣記</span></h2>
            </div>
            <p><span className='subtitle'>撰刊年代</span><span>元 泰定、至顺年间</span><span><a href='javascripts:viod(0)' onClick={this.remarkClick}>①</a></span></p>
            <p><span className='subtitle'>撰辑人</span><span>陈元靓</span></p>
          </div>
          <div>
            <h6>目录</h6>
            <ul>
              <li><a href='/books/doc-1'>1. 琴谱总说</a></li>
              <li><a href='/books/doc-1'>2. 开指黄莺吟</a></li>
              <li><a href='/books/doc-1'>3. 宫调</a></li>
              <li><a href='/books/doc-1'>4. 商调</a></li>
              <li><a href='/books/doc-1'>5. 角调</a></li>
              <li><a href='/books/doc-1'>6. 徽调</a></li>
            </ul>
          </div>
        </div>

      </div>
    )
  }
}

Book.propTypes = {
  match: PropTypes.object
}
export default Book
