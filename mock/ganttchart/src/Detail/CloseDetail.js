import React, { Component } from 'react';
import jsonData from '../data.json';
import './detail.css'
export default class CloseDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    
    this.jsonWrite = this.jsonWrite.bind(this);
    this.putTask = this.putTask.bind(this);
    this.fetchTasks = this.fetchTasks.bind(this);
    this.closeFnc = this.closeFnc.bind(this);
  }
  
  fetchTasks(){
    fetch("http://localhost:3000/tasks") // データを取得しに行く
    .then( response => response.json() ) // json型のレスポンスをオブジェクトに変換する
    .then( json => { // オブジェクトに変換したレスポンスを受け取り、
      this.setState({ tasks: json }) // Stateを更新する
    })
  }

  putTask(taskId){
    fetch("http://localhost:3000/tasks/"+taskId, {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ body: "やったよ" })
    })
    .then( this.fetchTasks )
  }


  jsonWrite(){
    // ➀this.propsから取得した値で、jsonのデータを書き換える。
    // const fs = require('fs');
    // const s = "新規にファイルを作成するテスト";
    // fs.writeFileSync('./writefile.txt', s, 'utf-8');

    // const ret = function(){
    //   var fs = WScript.CreateObject("Scripting.FileSystemObject");
    //   var file = fs.CreateTextFile("text.txt");
    //   file.Write("マルペケつくろ～");
    //   file.Close();
    //   return true;
    // }
    //this.putTask( 123 );
    // jsonData.cards[0].description = "あいうえお";
    // console.log(jsonData.cards[0].description);

  }

  closeFnc(){
    //this.jsonWrite();
    this.props.cbCloseDetail();
  }

  render() {
    return (
      <React.Fragment>
        <input className="detailClose-button" type="button" value="×" onClick ={() => { this.closeFnc() ; }} />
      </React.Fragment>
    );
  }
}