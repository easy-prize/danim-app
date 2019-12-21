import * as React from 'react';
import styled from 'styled-components/native';

import { DefaultHeader } from '../components/Header';

import Ticket from '../components/activity/Ticket';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Separator from '../components/Separator';

import activityImage from '../assets/examples/activity.png';
import background from '../assets/headers/home.png';

const exampleActivities = [
  {
    address: '서울특별시 용산구',
    description: '준호를 좋아하시는 젊은 경하님을 위한.',
    name: '용산 한 바퀴 투어',
  },
  {
    address: '서울특별시 용산구',
    description: '준호를 좋아하시는 젊은 경하님을 위한.',
    name: '용산 한 바퀴 투어',
  },
  {
    address: '서울특별시 용산구',
    description: '준호를 좋아하시는 젊은 경하님을 위한.',
    name: '용산 한 바퀴 투어',
  },
];

const HeaderTitle: React.FC = () => {
  const Title = React.useMemo(
      () => styled.Text`
        color: #15083B;
        font-size: 32;
        font-family: 'NotoSansKR-Medium';
        line-height: ${1.4 * 32};
      `,
      [],
    );
  const Primary = {
    Container: React.useMemo(
      () => styled.View`
        background-color: #6E00FF;
        align-self: flex-start;
        padding-left: 5;
        padding-right: 5;
      `,
      [],
    ),
    Title: React.useMemo(
      () => styled.Text`
        color: white;
        font-size: 32;
        font-family: 'NotoSansKR-Medium';
        line-height: ${1.4 * 32};
      `,
      [],
    ),
  };

  return (
    <>
      <Title>오늘의 여행</Title>
      <Primary.Container>
        <Primary.Title>
          서울특별시 용산구
        </Primary.Title>
      </Primary.Container>
    </>
  );
};

export default class HomeScreen extends React.Component {
  public static navigationOptions = {
    header: null,
  };

  public render() {
    return (
      <Layout>
        <DefaultHeader
          name={<HeaderTitle />}
          description="AI 기술로 저희가 직접 생성한, 여러분에게 딱 맞는 코스랍니다."
          image={background}
        />
        <Section
          name="2019년 12월 21일"
          title=", 당신만을 위한 추천!"
        >
          {exampleActivities.map((activity, idx) => {
            return (
              <Ticket
                key={`activity-${idx}`}
                image={activityImage}
                address={activity.address}
                name={activity.name}
                description={activity.description}
              />
            );
          })}
        </Section>
        <Separator />
        <Section
          name="선물하기"
          title="로 마음을 전해보세요!"
        >
          {exampleActivities.map((activity, idx) => {
            return (
              <Ticket
                key={`activity-${idx}`}
                image={activityImage}
                address={activity.address}
                name={activity.name}
                description={activity.description}
              />
            );
          })}
        </Section>
      </Layout>
    );
  }
}
