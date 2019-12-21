import * as React from 'react';

import styled, { css } from 'styled-components/native';

type GiveButtonProps = {
  text: string;
  color: string;
  style?: any;
  onPress?: () => void;
};

const GiveButton: React.FC<GiveButtonProps> = ({ text, color, style, onPress }) => {
  return (
    <Button
      style={style}
      color={color}
      onPress={onPress}
    >
      <Text>{text}</Text>
    </Button>
  );
};

export default GiveButton;

type ButtonProps = {
  color: string;
};

const Button = styled.TouchableOpacity<ButtonProps>`
  border-radius: 4px;
  width: 120px;
  margin-top: 10px;
  padding-top: 10;
  padding-bottom: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ color }) => color && css`
    background-color: ${color};
  `};
`;

const Text = styled.Text`
  color: white;
  font-size: 15;
  font-family: 'NotoSansKR-Medium';
  line-height: ${1.4 * 15};
`;
