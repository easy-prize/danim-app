import * as React from 'react';

import { Alert, Dimensions } from 'react-native';

import styled from 'styled-components/native';
import user from '../api/user/user.service';
import background from '../assets/headers/login.jpeg';
import FormButton from '../components/buttons/FormButton';
import HeaderTitle from '../components/HeaderTitle';
import Layout from '../components/Layout';
import Section from '../components/Section';
import TextField from '../components/TextField';

const windowWidth = Dimensions.get('window').width;

const Title: React.FC = () => {
  return (
    <HeaderTitle
      text="돌아오신 걸 환영해요!"
      primary="로그인"
    />
  );
};

type LoginScreenProps = {
  navigation: any;
};

type LoginScreenState = {
  username: string,
  password: string,
};

export default class LoginScreen extends React.Component<LoginScreenProps, LoginScreenState> {
  constructor(props: LoginScreenProps) {
    super(props);

    this.state = {
      password: 'P@ssw0rd',
      username: 'user',
    };

    this.onPressLogin = this.onPressLogin.bind(this);
    this.renderSectionButtons = this.renderSectionButtons.bind(this);
  }

  public render() {
    const SectionButtons = this.renderSectionButtons;

    return (
      <FormLayout
        name={<Title />}
        description="오랜만이예요!"
        image={background}
      >
        <Section
          name="계정 정보"
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
            isPassword={true}
            placeholder="패스워드를 입력해 주세요."
          />
        </Section>
        <SectionButtons />
      </FormLayout>
    );
  }

  private async onPressLogin() {
    const { navigation } = this.props;
    // const isSuccess = await user.login(
    //   this.state.username, this.state.password);

    // if (!isSuccess) {
    //   return Alert.alert('오류', '로그인에 실패하였습니다.');
    // }

    navigation.navigate('Home');
  }

  private renderSectionButtons() {
    const { navigation } = this.props;

    return (
      <ButtonRow>
        <FormButton
          text="회원가입"
          color="#706B89"
          onPress={() => navigation.navigate('Join')}
        />
        <FormButton
          text="로그인"
          color="#6C14FF"
          onPress={this.onPressLogin}
        />
      </ButtonRow>
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
