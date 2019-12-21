import * as React from 'react';
import styled from 'styled-components/native';

type CourseProfileProps = {
  image: any;
  agency?: string;
  title: string;
  description: string;
};

const CourseProfile: React.FC<CourseProfileProps> =
  ({ image, agency = '', title, description }) => {
    return (
      <Container>
        <Image source={image} />
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
        </Content>
      </Container>
    );
  };

export default CourseProfile;

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
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
