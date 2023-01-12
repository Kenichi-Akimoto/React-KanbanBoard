import React, { Component } from 'react';
import './detail.css'
export default class Explain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dbgLevel: 0 // 1以上でデバッグを表示
    };

    this.dbgDisp = this.dbgDisp.bind(this);
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
    if(this.props.exState===0)
    {
      return (
        <React.Fragment>
          <input class='detail-cmn-button' type="button" value="編集" onClick ={() => { this.props.cbEditExplain() ; }} /><br/>
          {this.props.exValue}
          {this.dbgDisp()}
        </React.Fragment>
      );
    }
    else
    {
      return (
        <React.Fragment>
          <input class='detail-cmn-edit-button' type="button" value="更新" onClick ={() => { this.props.cbUpdateExplain() ; }} />
          <input class='detail-cmn-edit-button' type="button" value="キャンセル" onClick ={() => { this.props.cbCancellExplain() ; }} /><br/>
          {this.props.exState===1 ? (
            <input type="text" value={this.props.exValue} onChange={(event) => { this.props.cbInputExplain(event) ;}} />
          ) : (
            <input type="text" onChange={(event) => { this.props.cbInputExplain(event) ;}} />
          )}

          {this.dbgDisp()}
        </React.Fragment>
      );
    }
  }
}