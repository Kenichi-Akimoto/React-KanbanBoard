import React, { Component } from 'react';
import jsonData from './data.json';
export default class OpenDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName : 'カード名値',
      labels : ['ラベル1', 'ラベル2', 'ラベル3'],
      explain : '説明値',
      date : '2022/12/31',
      callback : this.props.callback
    };

    this.CallBackFunction = this.CallBackFunction.bind(this);
    this.jsonRead = this.jsonRead.bind(this);
    this.onloadFnc = this.onloadFnc.bind(this);
  }
  
  CallBackFunction(){
    // detail側のstateに値を設定
    this.state.callback( this.state ) ;
  }

  jsonRead(){
    // ➀this.propsからkeyNameを使用し、jsonからデータを引き出す。

    // ➁引き出したデータをthis.stateに設定する

  }

  onloadFnc(){
    this.setState( { explainState : 1 } ) ;
    this.jsonRead();
    this.CallBackFunction();
  }

  //<input type="button" value="初期表示" onClick ={( event ) => { this.onloadFnc() ; }} />

  // この書き方だと画面がフリーズする。複数回呼ばれている様なのでdetail側で1回だけ呼ばれるように制御
  render() {
    return (
      <React.Fragment>
        {this.onloadFnc()}
      </React.Fragment>
    );
  }
}