import * as React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

import Ticket from '../components/activity/Ticket';
import GiveButton from '../components/buttons/GiveButton';
import ChannelLayout from '../components/ChannelLayout';
import Section from '../components/Section';
import Separator from '../components/Separator';

import background from '../assets/headers/channel.jpeg';

import {
  exampleActivities,
  exampleCourse,
} from '../data/example';

type InfoScreenProps = {
};

type InfoScreenState = {
};

export default class InfoScreen extends React.Component<InfoScreenProps, InfoScreenState> {
  public render() {
    return (
      <ChannelLayout
        type="코스"
        image={background}
        showNavbar={true}
        current="list"
      >
        <Container>
          <Product>
            <Image source={exampleCourse.image} />
            <Title>
              {exampleCourse.title}
            </Title>
            <Agency>
              {exampleCourse.agency}
            </Agency>
            <GiveButton
              text="선물하기"
              color="#6C14FF"
            />
          </Product>
        </Container>
        <Separator />
        <Section
          name="남산타워"
          title="의 액티비티 목록"
          style={{
            backgroundColor: '#EFF1F5',
          }}
        >
          {exampleActivities.map((activity: any, idx: number) => {
            return (
              <Ticket
                key={`activity-${idx}`}
                image={activity.image}
                address={activity.address}
                name={activity.name}
                description={activity.description}
              />
            );
          })}
          <View style={{ height: 20, width: '100%' }} />
        </Section>
      </ChannelLayout>
    );
  }
}

const Container = styled.View`
  background-color: white;
  position: relative;
  padding-bottom: 180px;
`;

const Product = styled.View`
  position: absolute;
  top: -60px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Image = styled.Image`
  height: 120;
  width: 120;
  border-radius: 60;
  border-width: 1px;
  border-color: lightgray;
`;

const Title = styled.Text`
  color: #6C14FF;
  font-family: 'NotoSansKR-Medium';
  font-size: 20;
  line-height: ${1.4 * 20};
  margin-top: 5;
`;

const Agency = styled.Text`
  color: #706B89;
  font-family: 'NotoSansKR-Medium';
  font-size: 15;
  line-height: ${1.4 * 15};
  margin-top: 2;
`;
