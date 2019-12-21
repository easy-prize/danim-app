import * as React from 'react';
import styled from 'styled-components/native';

const Separator: React.FC = () => {
  return <Line />;
};

export default Separator;

const Line = styled.View`
  height: 1;
  width: 100%;
  background-color: #D1DBE5;
  margin-top: 10;
`;
