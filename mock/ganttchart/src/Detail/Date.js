import React, { Component } from 'react';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
//import moment from 'moment'
export default class Date extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateState : props.dtState,
      startDate:null,
      startDateStr:"",
      endDate:null,
      endDateStr:"",
      callback1 : this.props.callback1,
      callback2 : this.props.callback2,
      dbgLevel: 0 // 1以上でデバッグを表示
    };

    this.CallBackFunction1= this.CallBackFunction1.bind(this);
    this.CallBackFunction2 = this.CallBackFunction2.bind(this);
    this.getFormatDate = this.getFormatDate.bind(this);
    this.startDateChange = this.startDateChange.bind(this);
    this.endDateChange = this.endDateChange.bind(this);
  }
  
  CallBackFunction1(sdate, edate){
    this.state.callback1(sdate, edate) ;
  }
  
  CallBackFunction2(){
    this.state.callback2() ;
  }

  getFormatDate(date){
    return date.getFullYear() + "-" 
    + ("00" + (date.getMonth() + 1)).slice(-2) + "-" 
    + ("00" + date.getDate()).slice(-2) + " 00:00";
  }

  startDateChange = (date) => {
    this.setState({ startDate: date });
    this.setState({ startDateStr: this.getFormatDate(date)});
  }

  endDateChange = (date) => {
    this.setState({ endDate: date });
    this.setState({ endDateStr: this.getFormatDate(date)});
  }

  // デバッグ用関数
  dbgDisp(){
    if(this.state.dbgLevel>=1)
    {
      return(
        <React.Fragment>
          <br/>
          ↓↓↓Dateデバッグ用↓↓↓<br/>
          startDateStr[{this.state.startDateStr}]<br/>
          endDateStr[{this.state.endDateStr}]<br/>
          ↑↑↑Dateデバッグ用↑↑↑<br/>
          <br/>
        </React.Fragment>
      )
    } else return;
  }


  render() {
  
    if(this.props.dtState!==0) {
      return (
        <React.Fragment>
          <table>
            <tr>
              <td><input type="checkbox" id="startCB"/></td>
              <td><DatePicker dateFormat="yyyy/MM/dd" selected={this.state.startDate} onChange={this.startDateChange} id="startDP"/></td>
            </tr>
            <tr>
              <td><input type="checkbox" id="endCB" /></td>
              <td><DatePicker dateFormat="yyyy/MM/dd" selected={this.state.endDate} onChange={this.endDateChange} id="endDP"/><br/></td>
            </tr>
          </table>
          <input type="button" value="更新" onClick ={( event ) => { 
            this.CallBackFunction1(this.state.startDateStr, this.state.endDateStr) ; }} />
          <input type="button" value="キャンセル" onClick ={( event ) => { this.CallBackFunction2() ; }} />
          <br/>
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
      )
    }
  }
}