import * as React from 'react';
import styled, { css } from 'styled-components/native';

import TextButton from '../buttons/TextButton';

type CourseProfileProps = {
  image: any;
  agency?: string;
  title: string;
  description: string;
  isUsed?: boolean;
  onPress?: () => void;
};

const CourseProfile: React.FC<CourseProfileProps> =
  ({ image, agency = '', title, description, isUsed, onPress }) => {
    return (
      <Container
        isUsed={isUsed}
      >
        <Image
          source={image}
        />
        <Content>
          <Agency>
            {agency}
          </Agency>
          <Title>
            {title}
          </Title>
          <Description>
            {description}
          </Description>
          {(() => {
            if (!isUsed) {
              return (
                <TextButton
                  text="액티비티 열기"
                  onPress={onPress}
                />
              );
            }
            return (
              <UsedText>
                이미 사용한 상품입니다.
              </UsedText>
            );
          })()}
        </Content>
      </Container>
    );
  };

export default CourseProfile;

type isUsedProps = {
  isUsed?: boolean;
};

const Container = styled.View<isUsedProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;

  ${({ isUsed }) => isUsed && css`
    opacity: 0.35;
  `};
`;

const Image = styled.Image`
  height: 80;
  width: 80;
  border-radius: 40;
  margin-right: 15;
  border-width: 3px;
  border-color: #150C3B;
`;

const Content = styled.View`
`;

const Agency = styled.Text`
  color: #6E00FF;
  font-size: 15;
  font-family: 'NotoSansKR-Regular';
  line-height: ${1.4 * 15};
`;

const Title = styled.Text`
  color: #150C3B;
  font-size: 22;
  font-family: 'NotoSansKR-Medium';
  line-height: ${1.4 * 22};
`;

const Description = styled.Text`
  color: #706B89;
  font-size: 12;
  font-family: 'NotoSansKR-Regular';
  line-height: ${1.4 * 12};
`;

const UsedText = styled.Text`
  color: black;
  font-size: 15;
  font-family: 'NotoSansKR-Medium';
  line-height: ${1.4 * 15};
`;
