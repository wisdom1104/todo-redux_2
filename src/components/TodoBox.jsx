import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RemoveTodo, CompletTodo, EditTodo } from "../redux/modules/todos";

function TodoBox({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editTitle, setEditTitle] = useState(item.title);
  const [editContent, setEditContent] = useState(item.content);
  const [edit, setEdit] = useState(false);
  return (
    <div>
      {!edit ? (
        <div>
          <Link to={`/sub/${item.id}`}>상세페이지</Link>
          <button
            onClick={() => {
              navigate(`/sub/${item.id}`);
            }}
          >
            상세페이지
          </button>
          <h3>{item.title}</h3>
          <h4>{item.content}</h4>
          <div>
            <button
              onClick={() => {
                dispatch(RemoveTodo(item));
              }}
            >
              삭제하기
            </button>
            <button
              onClick={() => {
                dispatch(CompletTodo(item));
              }}
            >
              {item.isDone ? "취소" : "완료"}
            </button>
            <button
              onClick={() => {
                setEdit(!edit);
                dispatch(EditTodo(item.id, editTitle, editContent));
              }}
            >
              수정하기
            </button>
          </div>
        </div>
      ) : (
        <div>
          제목 :
          <input
            type="text"
            value={editTitle}
            onChange={(e) => {
              setEditTitle(e.target.value);
            }}
          />
          내용 :
          <input
            type="text"
            value={editContent}
            onChange={(e) => {
              setEditContent(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setEdit(!edit);
              dispatch(EditTodo(item.id, editTitle, editContent));
            }}
          >
            수정완료
          </button>
        </div>
      )}
    </div>
  );
}

export default TodoBox;
