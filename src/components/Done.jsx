import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CompletTodo, RemoveTodo } from "../redux/modules/todos";

function Done() {
  const todo = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <h2>Done...</h2>
      <div>
        {todo.map((item) => {
          if (item.isDone === true)
            return (
              <div key={item.id} style={{ backgroundColor: "steelblue" }}>
                <h3>{item.title}</h3>
                <span>{item.content}</span>
                <Link to={`/sub/${item.id}`}>상세페이지</Link>
                <button
                  onClick={() => {
                    navigate(`/sub/${item.id}`);
                  }}
                >
                  상세페이지
                </button>
                <button
                  onClick={() => {
                    dispatch(RemoveTodo(item));
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    dispatch(CompletTodo(item));
                  }}
                >
                  취소
                </button>
              </div>
            );
        })}
      </div>
    </>
  );
}

export default Done;
