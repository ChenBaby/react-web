import React from 'react'
import { Tabs } from 'antd'
import '../css/library.less'

const { TabPane } = Tabs

class Library extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className='library-content'>
        <Tabs defaultActiveKey='1'>
          <TabPane tab='指法词典' key='1'>指法词典</TabPane>
          <TabPane tab='历代琴谱' key='2'>历代琴谱</TabPane>
          <TabPane tab='琴曲大全' key='3'>琴曲大全</TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Library
