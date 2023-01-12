import React, { Component } from 'react';
import OpenDetail from './OpenDetail';
import CloseDetail from './CloseDetail';
import CardName from './CardName';
import Date from './Date';
import Explain from './Explain';
import './detail.css'
export default class Detail extends Component {
  constructor( props ){
    super( props ) ;
    this.state = {
      onloadFlg : 0,
      keyName: this.props.cardName,
      cardName: '',
      cardNameInput: '',
      cardNameState: 0,
      listName:'',
      labels: [],
      explain: '',
      explainInput: '',
      explainState: 0,
      //date: '',
      startDate:'',
      startTimeInput:'',
      endDate:'',
      endTimeInput:'',
      dateState: 0,
      dbgCBF:'',
      dbgLevel: 0 // 1以上でデバッグを表示
    };
 
    this.dataGet = this.dataGet.bind(this);
    
    this.inputCardName = this.inputCardName.bind(this);
    this.editCardName = this.editCardName.bind(this);
    this.updateCardName = this.updateCardName.bind(this);

    this.editExplain = this.editExplain.bind(this);
    this.inputExplain = this.inputExplain.bind(this);
    this.updateExplain = this.updateExplain.bind(this);
    this.cancellExplain = this.cancellExplain.bind(this);

    this.editDate = this.editDate.bind(this);
    this.inputStartTime = this.inputStartTime.bind(this);
    this.inputEndTime = this.inputEndTime.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.cancelDate = this.cancelDate.bind(this);

    this.closeDetail = this.closeDetail.bind(this);
    this.dbgDisp = this.dbgDisp.bind(this);
 
  }

  dataGet( jData ){
     this.setState( { cardName : jData.cardName } ) ;
     this.setState( { cardNameInput : jData.cardName } ) ;
     this.setState( { listName : jData.list_name } ) ;
     this.setState( { explain : jData.explain } ) ;
     this.setState( { explainInput : jData.explain } ) ;
     this.setState( { startDate : jData.startDate } ) ;
     this.setState( { endDate : jData.endDate } ) ;
     //this.setState( { date : jData.startDate + "～" + jData.endDate } ) ;

     // 表記表示済に変更
     this.setState( { onloadFlg : 1 } ) ;
  }
  
  // -------------------- カード名 --------------------
  // 入力中
  inputCardName(event){
    this.setState( { cardNameState : 2 } ) ;
    this.setState( { cardNameInput: event.target.value } )
    this.setState( { dbgCBF : "inputCardName" } ) ;
  }

  // 編集
  editCardName(){
    this.setState( { cardNameState : 1 } ) ;
    this.setState( { dbgCBF : "editCardName" } ) ;
  }
  
  // 更新
  updateCardName(){
    this.setState( { cardNameState : 0 } ) ;
    this.setState( { cardName : this.state.cardNameInput } ) ;
    this.setState( { dbgCBF : "updateCardName" } ) ;
  }
  // ----------------------------------------------
  // -------------------- 日付 --------------------
  // 入力中
  inputStartTime(event){
    this.setState( { dateState : 2 } ) ;
    this.setState( { startTimeInput: event.target.value } )
    this.setState( { dbgCBF : "inputStartTime" } ) ;
  }
  inputEndTime(event){
    this.setState( { dateState : 2 } ) ;
    this.setState( { endTimeInput: event.target.value } )
    this.setState( { dbgCBF : "inputEndTime" } ) ;
  }

  // 編集
  editDate(){
    this.setState( { dateState : 1 } ) ;
    this.setState( { dbgCBF : "editDate" } ) ;
  }
  
  // 更新
  updateDate(sDay, eDay){
    this.setState( { dateState : 0 } ) ;
    const sDate = sDay + " " + this.state.startTimeInput;
    const eDate = eDay + " " + this.state.endTimeInput;
    this.setState( { startDate : sDate} ) ;
    this.setState( { endDate : eDate} ) ;
    this.setState( { date : sDate + "～" + eDate} ) ;
    this.setState( { dbgCBF : "updateDate" } ) ;
  }
  
  // キャンセル
  cancelDate(){
    this.setState( { dateState : 0 } ) ;
    this.setState( { dbgCBF : "cancelDate" } ) ;
  }

  // ----------------------------------------------
  // -------------------- 説明 --------------------
  // 入力中
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
    this.props.cbSetShowDetail(false);
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
            cardNameState[{this.state.cardNameState}]<br/>
            cardName[{this.state.cardName}]<br/>
            cardNameInput[{this.state.cardNameInput}]<br/>
            <br/>
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
            <OpenDetail cbDataGet={this.dataGet} keyName={this.state.keyName} />
          ) : (
            <div name="初期表示"></div>
          )
        }
        <div className='detail-outer'><div className='detail-inner'>
          <div className='detailClose'>
            <CloseDetail
              cbCloseDetail={this.closeDetail}
              keyName={this.state.keyName}
              cardName={this.state.cardName}
              labels={this.state.labels}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              explain={this.state.explain} 
            />
          </div>
          <div className='cardName'>
            <CardName
              cbInputCardName={this.inputCardName}
              cbEditCardName={this.editCardName}
              cbUpdateCardName={this.updateCardName}
              cdState={this.state.cardNameState}
              cdValue={this.state.cardName}
            />
          </div>

          <div className='listName'>
            <label>リスト：{this.state.listName}</label>
            <br/>
          </div>
          <br/>
          {/*
          <div>ラベル：</div>
          {this.state.labels.map((label, index) => <li key={index}>
            {label}
            <button onClick={() => { this.updateLabel() }}>ラベル編集</button>
          </li>)}
          <br/>
          */}

          <div className='date'>
            <label class='date-title'> 日付 </label><br/>
            {/* {this.state.date}<br/> */}
            <Date
              cbeditDate={this.editDate}
              cbUpdateDate={this.updateDate}
              cbCancelDate={this.cancelDate}
              cbInputStartTime={this.inputStartTime}
              cbInputEndTime={this.inputEndTime}
              dtState={this.state.dateState}
              stDate={this.state.startDate}
              edDate={this.state.endDate}
            />
          </div>
          <br/>
          <div className='explain'>
            <label className='explain-title'> 説明 </label>
            <Explain
              cbEditExplain={this.editExplain}
              cbUpdateExplain={this.updateExplain}
              cbCancellExplain={this.cancellExplain} 
              cbInputExplain={this.inputExplain} 
              exState={this.state.explainState}
              exValue={this.state.explain}
            />
            <br/>
          </div>
          {this.dbgDisp()}
        </div></div>
      </React.Fragment>
    ) ;
  }
}