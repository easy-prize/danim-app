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

export interface IDefaultHeaderProps {
  name: React.ReactNode;
  description: string;
  image: any;
}

export const DefaultHeader: React.FC<IDefaultHeaderProps> = ({ name, description, image }) => {
  return (
    <Header image={image}>
      <Content>
        {name}
        <Description>
          {description}
        </Description>
      </Content>
    </Header>
  );
};

export interface IChannelHeaderProps {
  type: string;
  image: any;
}

export const ChannelHeader: React.FC<IChannelHeaderProps> = ({ type, image }) => {
  return (
    <Header image={image}>
      <ChannelContainer>
        <Channel>채널</Channel>
        <Type>{type}</Type>
      </ChannelContainer>
    </Header>
  );
};

const ChannelContainer = styled.View`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Channel = styled.Text`
  color: #6C14FF;
  font-size: 18;
  padding-bottom: 5;
  margin-bottom: 10;
  border-bottom-width: 1px;
  border-bottom-color: #6C14FF;
  font-family: 'NotoSansKR-Medium';
  line-height: ${1.4 * 18};
`;

const Type = styled.Text`
  color: #150C3B;
  font-size: 22;
  font-family: 'NotoSansKR-Medium';
  line-height: ${1.4 * 22};
`;

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
  margin-top: 34;
  padding-left: 20;
  padding-right: 20;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Description = styled.Text`
  color: #6E00FF;
  margin-top: 10;
  font-size: 12;
  font-family: 'NotoSansKR-Medium';
  line-height: ${1.4 * 12};
`;
