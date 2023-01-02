import React, { Component } from 'react';
export default class Explain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      callback1 : this.props.callback1,
      callback2 : this.props.callback2,
      callback3 : this.props.callback3,
      dbgLevel: 0 // 1以上でデバッグを表示
    };

    this.CallBackFunction1 = this.CallBackFunction1.bind(this);
    this.CallBackFunction2 = this.CallBackFunction2.bind(this);
    this.CallBackFunction3 = this.CallBackFunction3.bind(this);
    this.dbgDisp = this.dbgDisp.bind(this);
  }
  
  // 更新
  CallBackFunction1(){
    this.state.callback1() ;
  }
  
  // キャンセル
  CallBackFunction2(){
    this.state.callback2() ;
  }

  // 入力
  CallBackFunction3(event){
    this.state.callback3(event) ;
  }
  
  // デバッグ用関数
  dbgDisp(){
    if(this.state.dbgLevel>=1)
    {
      return(
        <React.Fragment>
          <br/>
          ↓↓↓Explanデバッグ用↓↓↓<br/>
          explainState[{this.props.exState}]<br/>
          explainValue[{this.props.exValue}]<br/>
          ↑↑↑Explanデバッグ用↑↑↑<br/>
          <br/>
        </React.Fragment>
      )
    } else return;
  }

  render() {
  
    if(this.props.exState!==0)
    {
      return (
        <React.Fragment>
          {this.props.exState===1 ? (
            <input type="text" value={this.props.exValue} onChange={(event) => { this.CallBackFunction3(event) ;}} />
          ) : (
            <input type="text" onChange={(event) => { this.CallBackFunction3(event) ;}} />
          )}
          <br/>
          <input type="button" value="更新" onClick ={( event ) => { this.CallBackFunction1() ; }} />
          <input type="button" value="キャンセル" onClick ={( event ) => { this.CallBackFunction2() ; }} /><br/>
          {this.dbgDisp()}
        </React.Fragment>
      );
    }
    else
    {
      return (
        <React.Fragment>
           {this.dbgDisp()}
        </React.Fragment>
      );
    }
  }
}