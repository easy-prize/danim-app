import * as React from 'react';

import Ticket from '../components/activity/Ticket';
import HeaderTitle from '../components/HeaderTitle';
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

const Title: React.FC = () => {
  return (
    <HeaderTitle
      text="오늘의 여행"
      primary="서울특별시 용산구"
    />
  );
};

export default class HomeScreen extends React.Component {
  public render() {
    return (
      <Layout
        name={<Title />}
        description="AI 기술로 저희가 직접 생성한, 여러분에게 딱 맞는 코스랍니다."
        image={background}
      >
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
