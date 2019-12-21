import * as React from 'react';

import styled from 'styled-components/native';

interface IHeaderProps {
  children?: React.ReactNode;
  image: any;
}

const Header: React.FC<IHeaderProps> = ({ children = '', image }) => {
  return (
    <Container>
      <Background source={image} />
      {children}
    </Container>
  );
};

export default Header;

interface IDefaultHeaderProps {
  name: React.ReactNode;
  desc: string;
  image: any;
}

export const DefaultHeader: React.FC<IDefaultHeaderProps> = ({ name, desc, image }) => {
  return (
    <Header image={image}>
      <Content>
        {name}
        <Desc>{desc}</Desc>
      </Content>
    </Header>
  );
};

const Container = styled.View`
  position: relative;
  height: 300;
`;

const Background = styled.ImageBackground`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
`;

const Content = styled.View`
  padding-left: 20;
  padding-right: 20;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Desc = styled.Text`
  color: #6E00FF;
  margin-top: 10;
  font-size: 12;
  font-family: 'NotoSansKR-Medium';
  line-height: ${1.4 * 12};
`;
