import * as React from 'react';
import styled from 'styled-components/native';

type TextButtonProps = {
  text: string;
  disabled?: boolean;
  onPress?: () => void;
};

const TextButton: React.FC<TextButtonProps> = ({ text, disabled = false, onPress }) => {
  return (
    <Button
      onPress={onPress}
      disabled={disabled}
    >
      <Text>{text}</Text>
    </Button>
  );
};

export default TextButton;

const Button = styled.TouchableOpacity`
`;

const Text = styled.Text`
  color: #706B89;
  font-size: 15;
  font-family: 'NotoSansKR-Medium';
  line-height: ${1.4 * 15};
  margin-top: 3;
`;
