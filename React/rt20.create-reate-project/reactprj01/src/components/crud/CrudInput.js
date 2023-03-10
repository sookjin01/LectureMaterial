import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useReducer,
  Fragment,
  forwardRef,
  useImperativeHandle,
} from 'react';
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

const StyledCrudInput = styled.div`
  /* styled 설정. https://styled-components.com/docs/basics#adapting-based-on-props */
`;

function CrudInput({ callbackAdd }) {
  // ref 만들기.
  const refInputName = useRef();
  const refInputPower = useRef();

  const handlerAdd = (e) => {
    console.log(e.target);
    debugger;
    /*
  Name 입력 여부 유효성 검사
      포커스 주기
      이벤트 취소
  Power 입력 여부 유효성 검사
      포커스 주기
      이벤트 취소
  Power의 입력값이 숫자인지 유효성 검사.
  Power의 입력값을 숫자로 바꾸시오.(문자열를 숫자로)
  부모 메서드 CrudContainer.callbackAdd() 호출
  input 태그에 남아있는 입력값 지우기.
  */
    // Name 입력 여부 유효성 검사
    const name = refInputName.current.value;
    if (!name || !name.trim()) {
      alert('네임 값을 입력하세요');
      refInputName.current.focus(); // 포커스qweqwe 주기
      e.stopPropagation(); // 이벤트 취소
      return false;
    }

    const power = refInputPower.current.value;
    if (!power || !power.trim()) {
      alert('파워에 값을 입력하세요');
      refInputPower.current.focus(); // 포커스 주기
      e.stopPropagation(); // 이벤트 취소
      return false;
    }

    // Power의 입력값이 숫자인지 유효성 검사.
    if (isNaN(Number(power))) {
      alert('파워에 값을 입력하세요');
      refInputPower.current.focus(); // 포커스 주기
      e.stopPropagation(); // 이벤트 취소
      return false;
    }

    const newItem = {
      id: null,
      name: name,
      power: Number(refInputPower.current.value),
    };

    callbackAdd(newItem);

    refInputName.current.value = '';
    refInputPower.current.value = 0;
  };

  return (
    <StyledCrudInput>
      <div>
        <div>
          <label htmlFor="">Name : </label>
          <input
            type="text"
            name="name"
            placeholder="이름을 입력하세요"
            defaultValue={''}
            ref={refInputName}
          />
        </div>
        <div>
          <label htmlFor="">Power : </label>
          <input
            type="number"
            name="power"
            placeholder="숫자를 입력하세요"
            defaultValue={0}
            ref={refInputPower}
          />
        </div>
        <button type="button" onClick={handlerAdd}>
          Add
        </button>
      </div>
    </StyledCrudInput>
  );
}

CrudInput.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
  callbackAdd: PropTypes.func.isRequired,
};
CrudInput.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
  callbackAdd: () => {},
};

export default React.memo(CrudInput); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
