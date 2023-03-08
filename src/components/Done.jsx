import React from "react";
import { useSelector } from "react-redux";
import TodoBox from "./TodoBox";

function Done() {
  const todo = useSelector((state) => state.todos);
  return (
    <>
      <h2>Done...</h2>
      <div>
        {todo.map((item) => {
          if (item.isDone === true)
            return (
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
            );
        })}
      </div>
    </>
  );
}

export default Done;
