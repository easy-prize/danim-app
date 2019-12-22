import * as React from 'react';
import styled from 'styled-components/native';

type TextButtonProps = {
  text: string;
  onPress?: () => void;
};

const TextButton: React.FC<TextButtonProps> = ({ text, onPress }) => {
  return (
    <Button
      onPress={onPress}
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
