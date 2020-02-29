import React, {Component} from 'react';
import UserData from "./UserData";

const List=(props)=>{
    const {id} = props
    return <div>{
    props.list.map((element, index) => (index===id)?<UserData key={index} empNames={element}/> : null)}
    </div>
};

export default List