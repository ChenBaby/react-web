import React from 'react'
import { Avatar } from 'antd'
import '../css/charity.less'
import Image from '../images/charitybg.jpg'

function Charity () {
  const datasource = [
    {
      avatar: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2825425622,3006033936&fm=27&gp=0.jpg',
      name: '蔡依林',
      date: '2018.08.28',
      money: '5000',
    },
    {
      avatar: '',
      name: '袁世杰',
      date: '2018.05.20',
      money: '90',
    },
    {
      avatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=541435924,1167307690&fm=27&gp=0.jpg',
      name: '陆星材',
      date: '2018.05.16',
      money: '5000',
    },
    {
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      name: '李银涵',
      date: '2018.05.01',
      money: '600',
    },
    {
      avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=709031208,3322676689&fm=27&gp=0.jpg',
      name: '陈文杰',
      date: '2018.04.16',
      money: '20',
    },

  ]
  return (
    <div className='charity-content'>
      <div><img src={Image} alt='' /></div>
      <div className='details'>
        <h2>爱古琴公益榜明细</h2>
        <table>
          <tbody>
            {datasource.map((data, index) => (
              <tr key={index}>
                <td className='avatar-block'><Avatar shape='circle' size='large' icon='user' src={data.avatar} className='icon-user' /></td>
                <td className='name-block'>
                  <div>
                    <span>{data.name}</span>
                    <span>{data.date}</span>
                  </div>
                </td>
                <td className='money-block'>￥{data.money}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Charity
