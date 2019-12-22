import * as React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

import Ticket from '../components/activity/Ticket';
import GiveButton from '../components/buttons/GiveButton';
import ChannelLayout from '../components/ChannelLayout';
import Section from '../components/Section';
import Separator from '../components/Separator';

import background from '../assets/headers/channel.jpeg';

import courseImage1 from '../assets/examples/0.jpeg';
import activityImage1 from '../assets/examples/2.jpeg';
import activityImage2 from '../assets/examples/3.jpeg';

const exampleActivities = [
  {
    address: '강원도 태백시 통동',
    description: '경치가 정말 좋은 산.',
    image: activityImage1,
    name: '동백산',
  },
  {
    address: '부산광역시 해운대구',
    description: '완전 아름다운 바다.',
    image: activityImage2,
    name: '해운대 투어',
  },
];

const exampleCourse = {
  agency: '다님투어',
  description: '젊음의 도시, 부산으로 떠나요!',
  image: courseImage1,
  title: '환상적인 부산여행',
};

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
          name="환상적인 부산여행"
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
