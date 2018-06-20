import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import '../css/notation.less'

class Notation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      notationid: props.match.params.id
    }
    this.remarkClick = this.remarkClick.bind(this)
    console.log(this.state.notationid)
  }

  render () {
    return (
      <div>
        <Header />
        <div id='notation-content' className='notation-content'>指法某个页面</div>
      </div>
    )
  }
}

Notation.propTypes = {
  match: PropTypes.object
}

export default Notation
