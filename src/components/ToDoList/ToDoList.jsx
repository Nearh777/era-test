import React, { Component } from 'react';
import ToDo from '../ToDo/ToDo';
import todo from '../../todo.json';
import { ContainerList, List } from './ToDoList.styled';



class ToDoList extends Component {
  
  render() {
    return (
      
      <ContainerList>
      
        <List>
          {todo.map(todo => (
            <ToDo key={todo.id} todo={todo} />
          ))}
        </List>
      </ContainerList>
    );
  }
}





export default ToDoList