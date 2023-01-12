import React, { Component } from 'react';
import DatePicker from "react-datepicker"
import dateFormat from "./DateFunc.js"
import "react-datepicker/dist/react-datepicker.css"
import './detail.css'
export default class Date extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateState : props.dtState,
      startDate:null,
      startDateStr:"",
      startTime:"",
      endDate:null,
      endDateStr:"",
      endTime:"",
      dbgLevel: 0 // 1以上でデバッグを表示
    };

    this.timeElem = this.timeElem.bind(this);
  }

  getFormatDate(date){
    console.log("this.state.startTime[" + this.state.startTime);
    return date.getFullYear() + "-" 
    + ("00" + (date.getMonth() + 1)).slice(-2) + "-" 
    + ("00" + date.getDate()).slice(-2);
  }

  startDateChange = (date) => {
    this.setState({ startDate: date });
    this.setState({ startDateStr: this.getFormatDate(date)});
  }

  endDateChange = (date) => {
    this.setState({ endDate: date });
    this.setState({ endDateStr: this.getFormatDate(date)});
  }

  timeElem()
  {
    return(
      <React.Fragment>
          <option value="00:00">00:00</option>
          <option value="00:30">00:30</option>
          <option value="01:00">01:00</option>
          <option value="01:30">01:30</option>
          <option value="02:00">02:00</option>
          <option value="02:30">02:30</option>
          <option value="03:00">03:00</option>
          <option value="03:30">03:30</option>
          <option value="04:00">04:00</option>
          <option value="04:30">04:30</option>
          <option value="05:00">05:00</option>
          <option value="05:30">05:30</option>
          <option value="06:00">06:00</option>
          <option value="06:30">06:30</option>
          <option value="07:00">07:00</option>
          <option value="07:30">07:30</option>
          <option value="08:00">08:00</option>
          <option value="08:30">08:30</option>
          <option value="09:00">09:00</option>
          <option value="09:30">09:30</option>
          <option value="10:00">10:00</option>
          <option value="10:30">10:30</option>
          <option value="11:00">11:00</option>
          <option value="11:30">11:30</option>
          <option value="12:00">12:00</option>
          <option value="12:30">12:30</option>
          <option value="13:00">13:00</option>
          <option value="13:30">13:30</option>
          <option value="14:00">14:00</option>
          <option value="14:30">14:30</option>
          <option value="15:00">15:00</option>
          <option value="15:30">15:30</option>
          <option value="16:00">16:00</option>
          <option value="16:30">16:30</option>
          <option value="17:00">17:00</option>
          <option value="17:30">17:30</option>
          <option value="18:00">18:00</option>
          <option value="18:30">18:30</option>
          <option value="19:00">19:00</option>
          <option value="19:30">19:30</option>
          <option value="20:00">20:00</option>
          <option value="20:30">20:30</option>
          <option value="21:00">21:00</option>
          <option value="21:30">21:30</option>
          <option value="22:00">22:00</option>
          <option value="22:30">22:30</option>
          <option value="23:00">23:00</option>
          <option value="23:30">23:30</option>
      </React.Fragment>
    )
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
  
    if(this.props.dtState===0) 
    {
      return (
        <React.Fragment>
          <label class='date-text'>{dateFormat(this.props.stDate) + " ～ " + dateFormat(this.props.edDate) + " "}</label>
          <input class='date-button' type="button" value="▼" onClick ={() => { this.props.cbeditDate() ; }} />
          {this.dbgDisp()}
        </React.Fragment>
      )
    }
    else
    {
      return (
        <React.Fragment>
          <label class='date-text'>{dateFormat(this.props.stDate) + " ～ " + dateFormat(this.props.edDate) + "　"}</label>
          <tbody>
            <tr>
              <td>開始日時</td>
              {/* <td><input type="checkbox" id="startCB" /></td> */}
              <td><DatePicker dateFormat="yyyy/MM/dd" selected={this.state.startDate} onChange={this.startDateChange} id="startDP" /></td>
              <td>
                <select onChange={(event) => this.props.cbInputStartTime(event)}>
                  {this.timeElem()}
                </select>
              </td>
            </tr>
            <tr>
              <td>終了日時</td>
              {/* <td><input type="checkbox" id="endCB" /></td> */}
              <td><DatePicker dateFormat="yyyy/MM/dd" selected={this.state.endDate} onChange={this.endDateChange} id="endDP"/><br/></td>
              <td>
                <select onChange={(event) => this.props.cbInputEndTime(event)}>
                  {this.timeElem()}
                </select>
              </td>
            </tr>
          </tbody>
          <input class='detail-cmn-edit-button' type="button" value="更新" onClick ={() => { 
            this.props.cbUpdateDate(this.state.startDateStr, this.state.endDateStr) ; }} />
          <input class='detail-cmn-edit-button' type="button" value="キャンセル" onClick ={() => { this.props.cbCancelDate() ; }} />
          <br/>
          {this.dbgDisp()}
        </React.Fragment>
      );
    }
    
  }
}