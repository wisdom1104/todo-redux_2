import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "../redux/modules/todos";

function Form() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(AddTodo({ title, content }));
          setTitle("");
          setContent("");
        }}
      >
        <span>제목: </span>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <span> 내용: </span>
        <input
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button type="submit" value="추가하기">
          추가하기
        </button>
      </form>
    </>
  );
}

export default Form;
