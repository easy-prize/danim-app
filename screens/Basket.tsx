import * as React from 'react';

import Course from '../components/course/Course';
import HeaderTitle from '../components/HeaderTitle';
import Layout from '../components/Layout';
import Section from '../components/Section';

import background from '../assets/headers/basket.jpeg';

import {
  exampleActivities,
  exampleCourse,
} from '../data/example';

const exampleFeeds = [
  {
    activities: exampleActivities,
    course: exampleCourse,
    isUsed: false,
  },
  {
    activities: exampleActivities,
    course: exampleCourse,
    isUsed: true,
  },
  {
    activities: exampleActivities,
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
