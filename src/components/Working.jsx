import React from "react";
import { useSelector } from "react-redux";
import TodoBox from "./TodoBox";

function Working() {
  const todo = useSelector((state) => state.todos);

  console.log(todo);
  return (
    <>
      <h2>Working...</h2>
      <div>
        {todo.map((item) => {
          if (item.isDone === false)
            return (
              <div key={item.id}>
                <TodoBox item={item} />
              </div>
            );
        })}
      </div>
    </>
  );
}

export default Working;
