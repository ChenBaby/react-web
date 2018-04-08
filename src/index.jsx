import React from 'react';
import ReactDOM from 'react-dom';
import IndexCss from './assets/css/index.less';
import Header from './assets/components/Header';


class App extends React.Component {
    render () {
        return (
            <div className="aiguqin">
                <Header></Header>
                <div className="content">
                    <div className="image-block"></div>
                    <div className="cert">
                        <h3>全球琴社</h3>
                        <div className="image-block"></div>
                    </div>
                    <div className="cert">
                        <h3>热门分享</h3>
                        <div className="image-block"></div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
