import Event from "./Event"
import Title from "./Title"
import Button from "./Button"

function CardBase(props) {
    return <div>
              <table class="card">
                <tbody>
                  <Title content = "仕事" />
                  <Event content = "会議" date = "1/23 -1/25" color = "blueLine" />
                  <tr> 
                    <td>&nbsp;</td>
                  </tr>
                  <Event content = "プレゼン" date = "1/31 -1/31" color = "yellowLine"/>
                  <Button content = "＋カードを追加" />
                </tbody>
              </table>
            </div>;
  }

  export default CardBase;