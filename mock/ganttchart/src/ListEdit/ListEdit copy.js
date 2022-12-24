import List from "../Card/List"
import CardJSON from "../json/card.json"
import './ListEdit.css';

function ListEdit(props) {
    return <div class="interface">
              <table class="list">
                <tbody>
                  <tr>
                   {ListBuildFunc()}
                  </tr>
                  <tr>
                  </tr>
                </tbody>
              </table>
              <table class="addList">
                <tbody>
                  <tr>
                   {ListBuilder}
                  </tr>
                </tbody>
              </table>
            </div>;
  }

  const ListBuilder = <td><List listName = "Done"></List></td>;

  function ListBuildFunc() {
    const ListBuildArray = [];
    const listNamewk = [];
    CardJSON.forEach((data)=>{
      listNamewk.push(data.list_name);
    })
    const listNameArray = Array.from(new Set(listNamewk));
    listNameArray.map((listName)=>{

      ListBuildArray.push(<tr><td><List listName = {listName} /></td></tr>);
      })
      return ListBuildArray;
      
  }

  export default ListEdit;