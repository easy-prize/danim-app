import * as React from 'react';
import styled from 'styled-components/native';

import Shadow from '../Shadow';

type TicketProps = {
  image: any;
  address: string;
  name: string;
  description: string;
};

const Ticket: React.FC<TicketProps> = ({ image, address, name, description }) => {
  return (
    <Container style={Shadow}>
      <Line />
      <Image
        source={image}
      />
      <Content>
        <Address>
          {address}
        </Address>
        <Name>
          {name}
        </Name>
        <Description>
          {description}
        </Description>
      </Content>
    </Container>
  );
};

export default Ticket;

const Container = styled.View`
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  background-color: white;
`;

const Line = styled.View`
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: #7000FF;
  height: 100%;
  width: 5px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Image = styled.Image`
  height: 75;
  width: 75;
  border-radius: 4px;
  margin: 15px;
`;

const Content = styled.View`
`;

const Address = styled.Text`
  color: #6E00FF;
  font-size: 15;
  font-family: 'NotoSansKR-Regular';
  line-height: ${1.4 * 15};
`;

const Name = styled.Text`
  color: #433D63;
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
