import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function Sub() {
  const todo = useSelector((state) => state.todos);
  const param = useParams();
  const subTodo = todo.find((item) => {
    return item.id === Number(param.id);
  });
  console.log(param);
  return (
    <div>
      <Link to="/">메인화면</Link>
      <div> ID:{param.id}</div>
      <div>제목: {subTodo.title}</div>
      <div>내용: {subTodo.content}</div>
    </div>
  );
}

export default Sub;
