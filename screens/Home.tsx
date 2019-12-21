import * as React from 'react';

import HeaderTitle from '../components/HeaderTitle';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Separator from '../components/Separator';

import background from '../assets/headers/home.png';
import Course from '../components/course/Course';

import courseImage1 from '../assets/examples/0.jpeg';
import activityImage1 from '../assets/examples/2.jpeg';
import activityImage2 from '../assets/examples/3.jpeg';

import {
  exampleActivities,
  exampleCourse,
} from '../data/example';

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
        showNavbar={true}
        current="house"
      >
        <Section
          name="2019년 12월 22일"
          title=", 당신만을 위한 추천!"
        >
          <Course
            course={{
              agency: '다님투어',
              description: '젊음의 도시, 부산으로 떠나요!',
              image: courseImage1,
              title: '환상적인 부산여행',
            }}
            activities={[
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
            ]}
          />
        </Section>
        <Separator />
        <Section
          name="선물하기"
          title="로 마음을 전해보세요!"
        >
          <Course
            course={exampleCourse}
            activities={exampleActivities}
          />
        </Section>
      </Layout>
    );
  }
}
