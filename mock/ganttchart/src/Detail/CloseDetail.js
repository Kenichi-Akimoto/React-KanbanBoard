import React, { Component } from 'react';
import jsonData from './data.json';
export default class CloseDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      callback : this.props.callback
    };
    
    this.CallBackFunction = this.CallBackFunction.bind(this);
    this.jsonWrite = this.jsonWrite.bind(this);
    this.closeFnc = this.closeFnc.bind(this);
  }
  
  CallBackFunction(){
    // detail画面を閉じる
    this.state.callback( this.state ) ;
  }

  jsonWrite(){
    // ➀this.propsから取得した値で、jsonのデータを書き換える。

  }

  closeFnc(){
    this.jsonWrite();
    this.CallBackFunction();
  }

  render() {
    return (
      <React.Fragment>
        <input type="button" value="画面を閉じる" onClick ={( event ) => { this.closeFnc() ; }} />
      </React.Fragment>
    );
  }
}