import * as React from 'react';

import Course from '../components/course/Course';
import HeaderTitle from '../components/HeaderTitle';
import Layout from '../components/Layout';
import Section from '../components/Section';

import background from '../assets/headers/basket.jpeg';

import courseImage1 from '../assets/examples/0.jpeg';
import courseImage4 from '../assets/examples/4.jpeg';
import courseImage5 from '../assets/examples/5.jpeg';

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
      agency: '개나리여행',
      description: '날래날래 오라우 동무!',
      image: courseImage5,
      title: '웰컴 투 평양',
    },
  },
  {
    activities: [],
    course: {
      agency: '하누투어',
      description: '전국민의 대나무숲, 힐링의 장소!',
      image: courseImage4,
      title: '담양 대나무숲 이야기',
    },
    isUsed: true,
  },
  {
    activities: [],
    course: exampleCourse,
    isUsed: true,
  },
];

const Title: React.FC = () => {
  return (
    <HeaderTitle
      text="여러분의 모든 상품들,"
      primary="보관함"
    />
  );
};

export default class BasketPage extends React.Component {
  public render() {
    return (
      <Layout
        name={<Title />}
        description="여러분이 구매한 모든 상품들을 확인할 수 있어요."
        image={background}
        showNavbar={true}
        current="basket"
      >
        <Section
          name="구매한"
          title=" 상품 목록"
        >
          {exampleFeeds.map((feed, idx) => {
            return (
              <Course
                key={`feed-${idx}`}
                activities={feed.activities}
                course={feed.course}
                isUsed={feed.isUsed}
              />
            );
          })}
        </Section>
      </Layout>
    );
  }
}
