import * as React from 'react';
import styled from 'styled-components/native';

type SectionProps = {
  name: string;
  title: string;
  children?: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ name, title, children }) => {
  return (
    <Container>
      <Title>
        <Hightlight>{name}</Hightlight>
        {title}
      </Title>
      {children}
    </Container>
  );
};

export default Section;

const Container = styled.View`
  padding-top: 15;
  padding-left: 20;
  padding-right: 20;
`;

const Title = styled.Text`
  color: #706A89;
  font-size: 20;
  font-family: 'NotoSansKR-Medium';
  line-height: ${1.4 * 20};
`;

const Hightlight = styled.Text`
  color: #6E00FF;
`;
