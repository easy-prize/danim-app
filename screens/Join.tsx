import * as React from 'react';
import styled from 'styled-components/native';

import HeaderTitle from '../components/HeaderTitle';
import Layout from '../components/Layout';

import background from '../assets/headers/join.jpeg';

import FormButton from '../components/buttons/FormButton';
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
      <FormLayout
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
        <ButtonRow>
          <FormButton
            text="뒤로 가기"
            color="#706B89"
          />
          <FormButton
            text="다음으로"
            color="#6C14FF"
          />
        </ButtonRow>
      </FormLayout>
    );
  }
}

const FormLayout = styled(Layout)`
  min-height: 100%;
  position: relative;
`;

const ButtonRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20;
  position: absolute;
  bottom: 20;
`;
