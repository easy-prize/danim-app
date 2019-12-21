import * as React from 'react';
import styled, { css } from 'styled-components/native';

type FormButtonProps = {
  text: string;
  color: string;
  style?: any;
  onPress?: () => void;
};

const FormButton: React.FC<FormButtonProps> = ({ text, color, style, onPress }) => {
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

export default FormButton;

type ButtonProps = {
  color: string;
};

const Button = styled.TouchableOpacity<ButtonProps>`
  border-radius: 4px;
  width: 48%;
  padding-top: 12;
  padding-bottom: 12;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ color }) => color && css`
    background-color: ${color};
  `};
`;

const Text = styled.Text`
  color: white;
  font-size: 18;
  font-family: 'NotoSansKR-Medium';
  line-height: ${1.4 * 18};
`;
