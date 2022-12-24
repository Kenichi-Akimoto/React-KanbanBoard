import List from "../Card/List"
import dataJson from "../data.json"
import './ListEdit.css';

function ListEdit(props) {
    return <div class="interface">
              <div class="listEdit">
                {ListBuildFunc()}
              </div>
              <div class="addList">
                {ListBuilder}
              </div>
            </div>;
  }

  const ListBuilder = <List listName = "Done" />;

  function ListBuildFunc() {
    const ListBuildArray = [];
    const listNamewk = [];
    dataJson.lists.forEach((data)=>{
      listNamewk.push(data);
    })
    listNamewk.sort((a,b) => a.list_sort - b.list_sort);
    listNamewk.forEach((listName)=>{
      ListBuildArray.push(<List listName = {listName} />);
      })
    return ListBuildArray;
      
  }

  export default ListEdit;