function Button(props) {
    return  <tbody>
              <tr>
                <td class="title" onClick={()=>{alert("click")}}>
                  {props.content}
                </td>
              </tr>
            </tbody> 
  }

  export default Button;