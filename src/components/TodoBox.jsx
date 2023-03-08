import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  StBtn,
  StBtnPlace,
  StInput,
  StInputBox,
  StSubBtn,
  StTodBoxText,
  StTodoBox,
} from "../GlobalStyles";
import { RemoveTodo, CompletTodo, EditTodo } from "../redux/modules/todos";

function TodoBox({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editTitle, setEditTitle] = useState(item.title);
  const [editContent, setEditContent] = useState(item.content);
  const [edit, setEdit] = useState(false);
  return (
    <StTodoBox>
      {!edit ? (
        <div>
          <StSubBtn>
            {/* <Link to={`/sub/${item.id}`}>상세페이지</Link> */}
            <StBtn
              borderColor={"#ffc95f"}
              onClick={() => {
                navigate(`/sub/${item.id}`);
              }}
            >
              상세페이지
            </StBtn>
          </StSubBtn>
          <StTodBoxText>
            <h2 style={{ margin: "0px" }}>{item.title}</h2>
            <span style={{ margin: "20px 0px" }}>{item.content}</span>
          </StTodBoxText>
          <StBtnPlace>
            <StBtn
              borderColor={"#ff7c92"}
              onClick={() => {
                dispatch(RemoveTodo(item));
              }}
            >
              삭제하기
            </StBtn>
            <StBtn
              borderColor={"#83c671"}
              onClick={() => {
                dispatch(CompletTodo(item));
              }}
            >
              {item.isDone ? "취소" : "완료"}
            </StBtn>
            <StBtn
              borderColor={"#5fc4ff"}
              onClick={() => {
                setEdit(!edit);
                dispatch(EditTodo(item.id, editTitle, editContent));
              }}
            >
              수정하기
            </StBtn>
          </StBtnPlace>
        </div>
      ) : (
        <div>
          <div>
            제목 :
            <StInput
              type="text"
              value={editTitle}
              onChange={(e) => {
                setEditTitle(e.target.value);
              }}
            />
          </div>
          <div>
            내용 :
            <StInput
              style={{ margin: "20px 0px" }}
              type="text"
              value={editContent}
              onChange={(e) => {
                setEditContent(e.target.value);
              }}
            />
          </div>
          <div>
            <StBtn
              borderColor={"#5fc4ff"}
              onClick={() => {
                setEdit(!edit);
                dispatch(EditTodo(item.id, editTitle, editContent));
              }}
            >
              수정완료
            </StBtn>
          </div>
        </div>
      )}
    </StTodoBox>
  );
}

export default TodoBox;
