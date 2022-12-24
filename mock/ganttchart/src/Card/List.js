import React from 'react';
import Card from './Card';
import Title from "./Title"
import Button from "./Button"
import dataJSON from "../data.json"
import './List.css';

function List(props) {
  return　(
            <div class = "list">
              <table class="cards">
                <tbody>
                  <Title name = {props.listName.list_name} sort = {props.listName.list_sort}/>
                  <div id='mapArray'>
                    {/* {CardJSON.map((data)=>{
                      return <Card content = {data.description} date = {data.start} lineColor = "blueLine"/>
                    })} */}
                    {CardBuildFunc(props.listName)}
                  </div>
                  <Button />
                </tbody>
              </table>
            </div>
            );
}

function CardBuildFunc(listName) {
  const CardBuildArray = [];
    const matchData = dataJSON.cards.filter(function(data){
      return listName.list_name === data.list_name/* && i === data.sort*/;
    })
    matchData.sort((a,b) => a.sort - b.sort);
    matchData.forEach((data)=>{
      CardBuildArray.push(<Card content = {data.task} date = {data.start} lineColor = {data.color} description = {data.description} />);
    })
    return CardBuildArray;
    //CardBuilder.push(<Card content = {matchData[0].description} date = {matchData[0].start} lineColor = {matchData[0].color + 'Line'} />);
}






export default List;

