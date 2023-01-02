import React, { Component } from 'react';
import OpenDetail from './OpenDetail';
import CloseDetail from './CloseDetail';
import Explain from './Explain';
import Date from './Date';
export default class Datail extends Component {
  constructor( props ){
    super( props ) ;
    this.state = {
      onloadFlg : 0,
      keyName: this.props.cardName,
      cardName: this.props.cardName,
      labels: [],
      explain: '',
      explainInput: '',
      explainState: 0,
      date: '',
      startDate:'',
      endDate:'',
      dateState: 0,
      dbgCBF:'',
      dbgLevel: 1 // 1以上でデバッグを表示
    };
 
    this.dataGet = this.dataGet.bind(this);
    this.inputExplain = this.inputExplain.bind(this);
    this.updateExplain = this.updateExplain.bind(this);
    this.cancellExplain = this.cancellExplain.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.cancellDate = this.cancellDate.bind(this);
    this.closeDetail = this.closeDetail.bind(this);
    this.dbgDisp = this.dbgDisp.bind(this);
 
  }
  
  dataGet( dSt ){
     //this.setState( { cardName : dSt.cardName } ) ;
     this.setState( { labels : dSt.labels } ) ;
     this.setState( { explain : dSt.explain } ) ;
     this.setState( { date : dSt.date } ) ;

     // 表記表示済に変更
     this.setState( { onloadFlg : 1 } ) ;
  }  
  
  updateLabel(){
    return (<React.Fragment>
              <button>更新</button><button>キャンセル</button>
            </React.Fragment>)
  }
  
  // -------------------- 日付 --------------------
  // 編集
  editDate(){
    this.setState( { dateState : 1 } ) ;
    this.setState( { dbgCBF : "editDate" } ) ;
  }
  
  // 更新
  updateDate(sDate, eDate){
    this.setState( { dateState : 0 } ) ;
    this.setState( { startDate : sDate} ) ;
    this.setState( { endDate : eDate} ) ;
    this.setState( { date : sDate + "～" + eDate} ) ;
    this.setState( { dbgCBF : "updateDate" } ) ;
  }
  
  // キャンセル
  cancellDate(){
    this.setState( { dateState : 0 } ) ;
    this.setState( { dbgCBF : "cancellDate" } ) ;
  }
  // ----------------------------------------------
  // -------------------- 説明 --------------------
  // 説明入力中
  inputExplain(event){
    this.setState( { explainState : 2 } ) ;
    this.setState( { explainInput: event.target.value } )
    this.setState( { dbgCBF : "inputExplain" } ) ;
  }

  // 編集
  editExplain(){
    this.setState( { explainState : 1 } ) ;
    this.setState( { dbgCBF : "editExplain" } ) ;
  }
  
  // 更新
  updateExplain(){
    this.setState( { explainState : 0 } ) ;
    this.setState( { explain : this.state.explainInput } ) ;
    this.setState( { dbgCBF : "updateExplain" } ) ;
  }
  
  // キャンセル
  cancellExplain(){
    this.setState( { explainState : 0 } ) ;
    this.setState( { explainInput : this.state.explain } ) ;
    this.setState( { dbgCBF : "cancellExplain" } ) ;
  }
  // ----------------------------------------------

  // 画面を閉じる
  closeDetail(){
    // 画面を閉じる処理

    this.setState( { dbgCBF : "closeDetail" } ) ;
  }

  // デバッグ用関数
  dbgDisp(){
    if(this.state.dbgLevel>=1)
    {
      return(
        <React.Fragment><br/>
          <div>
            <br/>
            ↓↓↓detailデバッグ用↓↓↓<br/>
            keyName[{this.state.keyName}]<br/>
            cardName[{this.state.cardName}]<br/>
            dateState[{this.state.dateState}]<br/>
            date[{this.state.date}]<br/>
            startDate[{this.state.startDate}]<br/>
            endDate[{this.state.endDate}]<br/>
            <br/>
            explainState[{this.state.explainState}]<br/>
            explain[{this.state.explain}]<br/>
            explainInput[{this.state.explainInput}]<br/>
            <br/>
            dbgCBF[{this.state.dbgCBF}]<br/>
            ↑↑↑detailデバッグ用↑↑↑<br/>
          </div>
        </React.Fragment>
      )
    } else return;
  }

  render(){
    return(
      <React.Fragment>
        {this.state.onloadFlg===0 ? (
            <OpenDetail callback={this.dataGet} keyName={this.state.keyName} />
          ) : (
            <label>初期表示済</label>
          )
        }
        <div>カード名：<label>{this.state.cardName}</label></div>
        <div>ラベル：</div>
        {this.state.labels.map((label, index) => <li key={index}>
          {label}
          <button onClick={() => { this.updateLabel() }}>ラベル編集</button>
        </li>)}
        <br/>
        <div>
          日付：{this.state.date}
          <br/>
          <button onClick={() => { this.editDate() }}>日付編集</button>
          <br/>
          <Date
              callback1={this.updateDate} callback2={this.cancellDate}
              dtState={this.state.dateState}
          />
        </div>
        <br/>
        <div>
          説明：{this.state.explain}
          <br/>
          <button onClick={() => { this.editExplain() }}>説明編集</button>
          
          <br/>
          <Explain
              callback1={this.updateExplain} callback2={this.cancellExplain}  callback3={this.inputExplain} 
              exState={this.state.explainState} exValue={this.state.explain}
          />
        </div>
        <br/>
        <CloseDetail
            keyName={this.state.keyName}
            cardName={this.state.cardName} labels={this.state.labels}
            startDate={this.state.startDate} endDate={this.state.endDate}
            explain={this.state.explain}
            />
        {this.dbgDisp()}
      </React.Fragment>
    ) ;
  }
}
