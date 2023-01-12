import React, { Component } from 'react';
import jsonData from '../data.json';
export default class OpenDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.jsonRead = this.jsonRead.bind(this);
    this.onloadFnc = this.onloadFnc.bind(this);
  }

  jsonRead(){
    // ➀this.propsからkeyNameを使用し、jsonからデータを引き出す。
    const kName = this.props.keyName;
    const matchData = jsonData.cards.filter(function(data){
      return data.task === kName;
    })

    let jData  = {
      cardName : '',
      //labels : ['ラベルA', 'ラベルB', 'ラベルC'],
      explain : '',
      startDate : '',
      endDate : ''
    };

    // ➁引き出したデータを戻り値に設定する
    console.log("matchData.length[" + matchData.length);
    if (matchData.length !== 0){
      jData.cardName = matchData[0].task;
      jData.list_name = matchData[0].list_name;
      jData.explain = matchData[0].description;
      jData.startDate = matchData[0].start;
      jData.endDate = matchData[0].end;
    }
    return jData;
  }

  onloadFnc(){
    this.props.cbDataGet( this.jsonRead() )
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