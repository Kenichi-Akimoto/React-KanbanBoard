import dataJson from '../data.json'
import './Title.css'

function Title(props) {
    return  <tbody>
              <tr>
                <td class = "title">{props.name}</td>
                <div class = "changeSortButton">
                  <button class = "decrementSort" type="button" onClick={decrementSort(props.sort)}>←</button>
                  <button class = "incrementSort" type="button" /*onClick={}*/>→</button>
                </div>
              </tr>
            </tbody> 
  }


function decrementSort(sort){
  const listwk = dataJson[0].lists.filter((item)=>{
    return item.list_sort === sort;
  })
  console.log(listwk);
  listwk.forEach((data)=>{
    console.log(data.list_sort);
  })
 
}

  export default Title;