import * as React from 'react';
import styled from 'styled-components/native';

import HeaderTitle from '../components/HeaderTitle';
import Layout from '../components/Layout';

import background from '../assets/headers/join.jpeg';

import Section from '../components/Section';
import TextField from '../components/TextField';

const Title: React.FC = () => {
  return (
    <HeaderTitle
      text="함께 거닐어요,"
      primary="회원가입"
    />
  );
};

export default class JoinScreen extends React.Component {
  public render() {
    return (
      <Layout
        name={<Title />}
        description="반가워요!"
        image={background}
      >
        <Section
          name="기본 정보"
          title="를 입력해 주세요."
        >
          <TextField
            label="아이디"
            value=""
            placeholder="아이디를 입력해 주세요."
          />
          <TextField
            label="패스워드"
            value=""
            placeholder="패스워드를 입력해 주세요."
          />
          <TextField
            label="패스워드 확인"
            value=""
            placeholder="패스워드를 다시 입력해 주세요."
          />
        </Section>
      </Layout>
    );
  }
}
