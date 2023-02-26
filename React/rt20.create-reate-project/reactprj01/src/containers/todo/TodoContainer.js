import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useParams,
  useLocation,
  useHistory,
  useNavigate,
} from 'react-router-dom';
import TodoHeader from './components/TodoHeader';
import TodoFooter from './components/TodoFooter';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

const StyledTodoContainer = styled.div``;

function TodoContainer({ ...props }) {
  const [todoItems, setTodoItems] = useState([
    { id: 1, todo: '영화보기', done: false },
    { id: 2, todo: '주말 산책', done: true },
    { id: 3, todo: 'ES6 학습', done: false },
    { id: 4, todo: '잠실 야구장', done: false },
  ]);

  const callbackClearAll = useCallback(() => {
    let newTodoItems = [];
    setTodoItems(newTodoItems);
  }, [todoItems]);

  const callbackDoneToggle = useCallback(
    (id) => {
      const newTodos =
        todoItems &&
        todoItems.map((item) => {
          if (item.id === id) {
            item.done = !item.done;
          }
          return item;
        });
      setTodoItems(newTodos);
    },
    [todoItems],
  );
  const callbackRemoveTodo = useCallback(
    (id) => {
      const newTodos =
        todoItems &&
        todoItems.length > 0 &&
        todoItems.filter((item) => {
          if (item.id === id) {
            return false;
          } else {
            return true;
          }
        });
      setTodoItems(newTodos);
    },
    [todoItems],
  );
  const callbackAddTodo = useCallback(
    (value) => {
      const maxid =
        todoItems &&
        todoItems
          .map((item) => item.id)
          .reduce((pvalue, cvalue) => {
            if (pvalue > cvalue) return pvalue;
            else return cvalue;
          }, 0);

      const newTodo = {
        id: maxid + 1,
        todo: value,
        done: false,
      };
      setTodoItems([...todoItems, newTodo]); // 스프레드 연산자
    },
    [todoItems],
  );

  // 이벤트 핸들러 작성.
  const handler = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
  };

  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  return (
    <StyledTodoContainer>
      <div id="app">
        <TodoHeader></TodoHeader>

        <TodoInput callbackAddTodo={callbackAddTodo}></TodoInput>

        <TodoList
          todoItems={todoItems}
          callbackDoneToggle={callbackDoneToggle}
          callbackRemoveTodo={callbackRemoveTodo}
        ></TodoList>

        <TodoFooter callbackClearAll={callbackClearAll}></TodoFooter>
      </div>
    </StyledTodoContainer>
  );
}

TodoContainer.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
};
TodoContainer.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
};

export default React.memo(TodoContainer); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
