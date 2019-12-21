import * as React from 'react';

import Course from '../components/course/Course';
import HeaderTitle from '../components/HeaderTitle';
import Layout from '../components/Layout';
import Section from '../components/Section';

import background from '../assets/headers/feed.jpeg';

import {
  exampleActivities,
  exampleCourse,
} from '../data/example';

const exampleFeeds = [
  {
    activities: exampleActivities,
    course: exampleCourse,
  },
  {
    activities: exampleActivities,
    course: exampleCourse,
  },
  {
    activities: exampleActivities,
    course: exampleCourse,
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
