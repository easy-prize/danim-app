import * as React from 'react';
import { ViewStyle } from 'react-native';
import styled from 'styled-components/native';

export const shadowStyle = {
  elevation: 9,
  shadowColor: '#150C3B',
  shadowOffset: {
    height: 3,
    width: 0,
  },
  shadowOpacity: 0.14,
  shadowRadius: 6,
};

type ShadowProps = {
  children?: React.ReactNode;
  style?: ViewStyle,
};

const Shadow: React.FC<ShadowProps> = ({ children, style }) => {
  return (
    <Wrap
      style={[shadowStyle, style]}
    >
      {children}
    </Wrap>
  );
};

export default Shadow;

const Wrap = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: transparent;
`;
