import React from "react";
import { useSelector } from "react-redux";
import { StTodoPlace } from "../GlobalStyles";
import TodoBox from "./TodoBox";

function Done() {
  const todo = useSelector((state) => state.todos);
  return (
    <>
      <h2>Done...</h2>
      <StTodoPlace>
        {todo.map((item) => {
          if (item.isDone === true)
            return (
              <div key={item.id}>
                <TodoBox item={item} />
              </div>
            );
        })}
      </StTodoPlace>
    </>
  );
}

export default Done;
