import * as React from 'react';

import Course from '../components/course/Course';
import HeaderTitle from '../components/HeaderTitle';
import Layout from '../components/Layout';
import Section from '../components/Section';

import background from '../assets/headers/feed.jpeg';

import courseImage1 from '../assets/examples/0.jpeg';
import courseImage2 from '../assets/examples/6.jpeg';

import courseImage3 from '../assets/examples/5.jpeg';

import activityImage1 from '../assets/examples/2.jpeg';
import activityImage2 from '../assets/examples/3.jpeg';

import {
  exampleActivities,
  exampleCourse,
} from '../data/example';

const exampleFeeds = [
  {
    activities: [
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
    ],
    course: {
      agency: '다님투어',
      description: '젊음의 도시, 부산으로 떠나요!',
      image: courseImage1,
      title: '환상적인 부산여행',
    },
    isUsed: false,
  },
  {
    activities: exampleActivities,
    course: {
      agency: '둘투어',
      description: '볼거리, 먹거리가 가득한 인천 속 작은 중국.',
      image: courseImage2,
      title: '인천 차이나타운',
    },
  },
  {
    activities: exampleActivities,
    course: {
      agency: '개나리여행',
      description: '날래날래 오라우 동무!',
      image: courseImage3,
      title: '웰컴 투 평양',
    },
  },
];

const Title: React.FC = () => {
  return (
    <HeaderTitle
      text="새로운 선물을,"
      primary="탐색하기"
    />
  );
};

export default class HomeScreen extends React.Component {
  public render() {
    return (
      <Layout
        name={<Title />}
        description="나를 위한, 너를 위한 선물. 마음에 드는 코스를 골라 보세요."
        image={background}
        showNavbar={true}
        current="list"
      >
        <Section
          name="인기 코스"
          title=" 확인하기"
        >
          {exampleFeeds.map((feed, idx) => {
            return (
              <Course
                key={`feed-${idx}`}
                activities={feed.activities}
                course={feed.course}
              />
            );
          })}
        </Section>
      </Layout>
    );
  }
}
