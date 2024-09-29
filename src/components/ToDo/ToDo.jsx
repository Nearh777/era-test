import { CardContainer, TitleItem, ListItem } from "./Todo.styled";



const ToDo = ({ todo }) => {
  return (
    <ListItem>
<CardContainer>
<TitleItem>{todo.title}</TitleItem>
      <p>{todo.descripcion}</p>
      <p>{todo.dateevent}</p>
      <p>{todo.organizer}</p>
      <p>Register</p>
      <p>View</p>
</CardContainer>
    </ListItem>
  );
};

export default ToDo;
