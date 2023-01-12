import React, { Component } from 'react';
import './detail.css'
export default class CardName extends Component {
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
          ↓↓↓CardNameデバッグ用↓↓↓<br/>
          cardNameState[{this.props.cdState}]<br/>
          cardName[{this.props.cdValue}]<br/>
          ↑↑↑CardNameデバッグ用↑↑↑<br/>
          <br/>
        </React.Fragment>
      )
    } else return;
  }

  render() {
    if(this.props.cdState===0)
    {
      return (
        <React.Fragment>
          <div onClick={() => this.props.cbEditCardName()}>
            <label>{this.props.cdValue}</label><br/>
          </div>
          {this.dbgDisp()}
        </React.Fragment>
      );
    }
    else
    {
      return (
        <React.Fragment>
          {this.props.cdState===1 ? (
            <input class='cardName' type="text" value={this.props.cdValue}
              onChange={(event) => { this.props.cbInputCardName(event) ;}}
              onBlur={() => {this.props.cbUpdateCardName()}} />
          ) : (
            <input class='cardName' type="text"
              onChange={(event) => { this.props.cbInputCardName(event) ;}}
              onBlur={() => {this.props.cbUpdateCardName()}} />
          )}

          {this.dbgDisp()}
        </React.Fragment>
      );
    }
  }
}