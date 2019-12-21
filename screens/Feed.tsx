import * as React from 'react';
import styled from 'styled-components/native';

import HeaderTitle from '../components/HeaderTitle';
import Layout from '../components/Layout';

import background from '../assets/headers/feed.jpeg';

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
      </Layout>
    );
  }
}
