import React from 'react';
import styled, { css } from 'styled-components';

const StyledTodoHeader = styled.header``;

function TodoHeader({ ...props }) {
  return (
    <StyledTodoHeader>
      <h1>TODO it!</h1>
    </StyledTodoHeader>
  );
}
export default React.memo(TodoHeader); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
