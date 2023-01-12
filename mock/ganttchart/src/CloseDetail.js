import {React, useState} from 'react';
import jsonData from './data.json';
export const  CloseDetail = () => {
  //state
  const [callback,setCallback] = useState();
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     callback : this.props.callback
  //   };
    
  //   this.CallBackFunction = this.CallBackFunction.bind(this);
  //   this.jsonWrite = this.jsonWrite.bind(this);
  //   this.closeFnc = this.closeFnc.bind(this);
  // }
  function CallBackFunction(){
    // detail画面を閉じる
    setCallback(callback);
  };

// jsonWrite(){
//   // ➀this.propsから取得した値で、jsonのデータを書き換える。

// }

  function closeFnc(){
      this.jsonWrite();
      this.CallBackFunction();
  };

  return (
    <React.Fragment>
      <input type="button" value="画面を閉じる" onClick ={( event ) => { this.closeFnc() ; }} />
    </React.Fragment>
  );

};

