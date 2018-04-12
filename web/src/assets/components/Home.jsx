import React from 'react';
import Header from './Header';

import { Icon, Row, Col, List, Avatar, BackTop } from 'antd';

import classNames from 'classnames';
import IndexCss from '../css/index.less';

class Home extends React.Component {
    componentDidMount() {
        
    }
    
    componentWillUnmount () {
        
    }

    render () {
        //全球琴社页面的测试数据
        let societiesList = [
            {
                name: '乔珊古琴艺术中心',
                address: '上海市静安区成都北路777号静安雕塑公园3号门梅园',
                labels: ['名家', '斫琴师', '直营社', '未认证'],
                score: 520
            },{
                name: '绿绮琴院',
                address: '东莞市万江区下坝坊52号',
                labels: ['斫琴师', '未认证'],
                score: 480
            },{
                name: '天虹琴馆',
                address: '广州市越秀区大德路202号2004房',
                labels: ['名家', '直营社', '未认证'],
                score: 400
            },{
                name: '钧天琴院',
                address: '北京市大兴区魏善庄镇前苑上村西刘路钧天坊古琴文化艺术传播有限公司',
                labels: ['名家','直营社', '未认证'],
                score: 400
            },{
                name: '春风琴社',
                address: '深圳市南山区科苑南路海阔天空雅居24',
                labels: ['名家','直营社', '未认证'],
                score: 300
            },{
                name: '绿绮室·宋大年古琴工作室',
                address: '郑州市郑东新区九如路与商务内环交叉口天下收藏北区三楼3078号',
                labels: ['名家', '未认证'],
                score: 300
            }
        ]

        //热门分享的测试数据
        let shareList = [
            {
                href: 'http://ant.design',
                title: '古琴的结构',
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1514514903,2095539617&fm=27&gp=0.jpg',
                description: '引自宋代 田紫芝 《太古遗音》',
                content: '《琴体说》 琴之首曰凤额，下曰凤舌。其次曰承露，乃临岳之前也，俗谓之岳裙。轸穴俗谓之轸眼。岳之为体，巍然而高，如山岳之状。凤嗉，琴项也。谓之喉舌。可以教令也。仙人肩者，取其若肩背之正也。龙腰者，取其曲折如龙也；又曰玉女腰，取其纤也。自肩至腰。总象凤翅耸然而张。龙唇龙龈，乃琴末承弦之异名。焦尾人谓之冠，取其状名也。',
                label: '文章'
            },
            {
                href: 'http://ant.design',
                title: '乾隆与琴 | 微杂志 · 第5期',
                avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=709031208,3322676689&fm=27&gp=0.jpg',
                image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=517701222,475752096&fm=27&gp=0.jpg',
                description: '今藏北京故宫博物院的《弘历观画图》是由擅长写实画的郎世宁绘制的一幅“画中画”。画中乾隆皇帝弘历在清风中欣赏着《洗象图》。',
                content: '乾隆早年御制诗集中的《四琴诗》，即为乾隆帝为其珍藏的四种老桐木琴——“瀛蓬仙籁”、“湘江秋碧”、“皋禽霜唳”、“云海移情”分别赐名并赋诗合并而成。乾隆还曾多次诏唐侃为其演奏琴曲，先后欣赏了《猗兰操》、《高山》、《流水》、《秋鸿》等曲。除此以外，民间还流传着很多乾隆与琴的故事，这些文化遗存让我们认识了一个“喜琴”的皇帝，“好琴”的乾隆。',
                label: '文章'
            },
            {
                href: 'http://ant.design',
                title: '分享一首《高山流水》',
                avatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=541435924,1167307690&fm=27&gp=0.jpg',
                image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3388399720,526774666&fm=27&gp=0.jpg',
                description: '乔珊先生演奏',
                content: '是曲，伯牙所作，言其志在高山，仁者之樂也，言其志在流水，智者之樂也。高山流水本只是一曲，至唐，分為兩曲，不分段數。至宋，分高山爲四段，流水為八段。按琴史，列子云，伯牙善鼓，鍾子期善聽。伯牙志在高山，鍾子曰，巍巍乎，若泰山之聳。伯牙志在流水，子期聽曰，洋洋乎，若江海波潮。伯牙曰，善哉，子期之心與吾心同。子期既沒，伯牙遂絕絃，終身不復再鼓也。高山流水之曲乃傳至于今。',
                label: '音乐'
            },
            {
                href: 'http://ant.design',
                title: '我今天练琴排名第一位，你呢？',
                avatar: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2825425622,3006033936&fm=27&gp=0.jpg',
                image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2588153910,3448064580&fm=27&gp=0.jpg',
                description: '爱古琴习琴排行榜第一名',
                content: '爱古琴习琴聚集了四面八方的琴友们，快来加入我们一起习琴吧，分享你的琴声，你的成长记录，下载APP还有调音器、节拍器等小工具',
                label: '练琴'
            }
        ]
        const IconText = ({ type, text }) => (
            <span>
                <Icon type={type} style={{ marginRight: 8 }} />
                {text}
            </span>
        );

        return (
            <div className="home">
                <div className="banner">
                    <div className="banner-background">
                    </div>
                    {/* <div className="search-box" >
                        <form>
                            <input type="text" placeholder="搜索课程..." id="header-search"/>
                            <a><Icon type="search" /></a>
                        </form>
                    </div> */}
                </div>
                <div className="home-content">
                    <div className="certs-societies">
                        <h3 className="certs-title"><span>全球琴社</span><a href="javascrit:void(0)" className="more-link">查看更多</a></h3>
                        <Row gutter={16}>
                            {societiesList.map((society, s) => {
                                return (
                                    <Col xs={ {span: 12} } sm={ {span: 8} } md={ {span: 6} } className="cert" key={s}>
                                        <div className="image-block"></div> 
                                        <div className="text-block">
                                        <p className="labels">
                                            {society.labels.map((label, l)=> {
                                                return (
                                                    <label key={l}>{label}</label>
                                                )
                                            })}
                                        </p>
                                        <h3 className="title">{society.name}</h3>
                                        <p className="address">{society.address}</p>
                                        <p className="stars">
                                            <Icon type="star" />
                                            <Icon type="star" />
                                            <Icon type="star" />
                                            <Icon type="star" />
                                            <Icon type="star" />
                                            <span className="number">{society.score}</span>
                                        </p>
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>
                    <div className="certs-hot">
                        <h3 className="certs-title"><span>热门分享</span><a href="javascrit:void(0)" className="more-link">查看更多</a></h3>
                        <List
                            itemLayout="vertical"
                            size="large"
                            dataSource={shareList}
                            renderItem={item => (
                                <List.Item
                                    key={item.title}
                                    actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />, <span className="share-label">{item.label}</span>]}
                                    extra={<img width={272} alt="logo" src={item.image} />}
                                >
                                    <List.Item.Meta
                                    avatar={<Avatar src={item.avatar} />}
                                    title={<a href={item.href}>{item.title}</a>}
                                    description={item.description}
                                    />
                                    {item.content}
                                </List.Item>
                            )}
                        />
                    </div>
                </div>
            </div>

        )
    }
}

export default Home;