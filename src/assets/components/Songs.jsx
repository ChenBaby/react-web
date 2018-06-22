import React from 'react'
import Header from './Header'
import '../css/songs.less'

class Songs extends React.Component {
  render () {
    return (
      <div className='songs-container'>
        <Header />
        <h2 className='songs-title'>琴曲大全</h2>
        <p className='songs-subtitle'>古琴曲目释意大全</p>
      </div>
    )
  }
}

export default Songs
