import React from 'react'
import { Timeline } from 'antd'
import Header from './Header'
import '../css/books.less'

class Books extends React.Component {
  render () {
    const bookid = 8
    return (
      <div className='books-content'>
        <Header />
        <h2>古琴文献合集</h2>
        <h4 className='main-blue'>共收藏琴谱156部，按年代排列</h4>
        <div className='timeline-container'>
          <Timeline>
            <Timeline.Item dot={<div><span className='dnasty'>唐.大歷年間</span><span className='dnasty year'>(762-779)</span></div>}>
            <span className='title'><a href={`/books/${bookid}`}>碣石調幽蘭</a></span><span className='author'>撰辑人: 丘明</span>
          </Timeline.Item>
            <Timeline.Item dot={<div><span className='dnasty'>宋.元豐七年</span><span className='dnasty year'>(1084)</span></div>}>
            <span className='title'><a href={`/books/${bookid}`}>琴史</a></span><span className='author'>撰辑人: 朱長文</span>
          </Timeline.Item>
            <Timeline.Item dot={<div><span className='dnasty'>宋.嘉泰二年</span><span className='dnasty year'>(1202)</span></div>}>
            <span className='title'><a href={`/books/${bookid}`}>白石道人歌曲</a></span><span className='author'>撰辑人: 姜夔</span>
          </Timeline.Item>
            <Timeline.Item dot={<div><span className='dnasty'>宋.年代不详</span><span className='dnasty year'>(不详)</span></div>}>
            <span className='title'><a href={`/books/${bookid}`}>太古遗音</a></span><span className='author'>撰辑人: 田芝翁</span>
          </Timeline.Item>
            <Timeline.Item dot={<div><span className='dnasty'>元.泰定、至顺年间</span><span className='dnasty year'>(-)</span></div>}>
            <span className='title'><a href={`/books/${bookid}`}>事林廣記</a></span><span className='author'>撰辑人: 陳元靚</span>
          </Timeline.Item>
            <Timeline.Item dot={<div><span className='dnasty'>明.永樂六年</span><span className='dnasty year'>(1408)</span></div>}>
            <span className='title'><a href={`/books/${bookid}`}>永樂琴書集成</a></span><span className='author'>撰辑人: 明成祖敕撰</span>
          </Timeline.Item>
            <Timeline.Item dot={<div><span className='dnasty'>明.洪熙元年</span><span className='dnasty year'>(1425)</span></div>}>
            <span className='title'><a href={`/books/${bookid}`}>神奇秘谱</a></span><span className='author'>撰辑人: 朱權(臞仙)</span>
          </Timeline.Item>
            <Timeline.Item dot={<div><span className='dnasty'>明.天顺元年</span><span className='dnasty year'>(1457)</span></div>}>
            <span className='title'><a href={`/books/${bookid}`}>五聲琴谱</a></span><span className='author'>撰辑人: 懒仙</span>
          </Timeline.Item>
            <Timeline.Item dot={<div><span className='dnasty year'>( ... )</span></div>} />
          </Timeline>
        </div>

      </div>
    )
  }
}

export default Books
