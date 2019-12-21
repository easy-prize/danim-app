import * as React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import FormButton from '../components/buttons/FormButton';
import HeaderTitle from '../components/HeaderTitle';
import Layout from '../components/Layout';
import Section from '../components/Section';
import TextField from '../components/TextField';

import background from '../assets/headers/join.jpeg';
import successIllust from '../assets/illusts/success.png';

const windowWidth = Dimensions.get('window').width;

const Title: React.FC = () => {
  return (
    <HeaderTitle
      text="함께 거닐어요,"
      primary="회원가입"
    />
  );
};

type JoinScreenProps = {
  navigation: any;
};

type JoinScreenState = {
  step: number,
};

export default class JoinScreen extends React.Component<JoinScreenProps, JoinScreenState> {
  constructor(props: JoinScreenProps) {
    super(props);

    this.state = {
      step: 0,
    };

    this.renderFormSection = this.renderFormSection.bind(this);
    this.renderSectionButtons = this.renderSectionButtons.bind(this);
    this.onPressNext = this.onPressNext.bind(this);
  }

  public render() {
    const { step } = this.state;
    const FormSection = this.renderFormSection;

    return (
      <FormLayout
        name={<Title />}
        description="반가워요!"
        image={background}
      >
        <FormSection step={step} />
      </FormLayout>
    );
  }

  private renderFormSection({ step }: { step: number }) {
    const { navigation } = this.props;
    const SectionButtons = this.renderSectionButtons;
    switch (step) {
      case 0:
        return (
          <>
            <Section
              name="새로운 계정"
              title="을 만들어요."
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
            <SectionButtons />
          </>
        );
      case 1:
        return (
          <>
            <Section
              name="기본 정보"
              title="를 입력해 주세요."
            >
              <TextField
                label="이메일"
                value=""
                placeholder="이메일을 입력해 주세요."
              />
              <TextField
                label="이름"
                value=""
                placeholder="이름을 입력해 주세요."
              />
              <TextField
                label="생년월일"
                value=""
                placeholder="생년월일을 입력해 주세요."
              />
            </Section>
            <SectionButtons />
          </>
        );
      default:
        return (
          <>
            <Section
              name="야호!"
              title=" 회원가입 끝"
            >
              <SuccessIllust
                source={successIllust}
              />
              <SuccessText>
                이제 로그인을 진행할 수 있어요.
              </SuccessText>
            </Section>
            <SuccessButton
              text="로그인하러 가기"
              color="#6C14FF"
              onPress={() => navigation.navigate('Login')}
            />
          </>
        );
    }
  }

  private renderSectionButtons() {
    const { navigation } = this.props;

    return (
      <ButtonRow>
        <FormButton
          text="뒤로 가기"
          color="#706B89"
          onPress={() => navigation.navigate('Login')}
        />
        <FormButton
          text="다음으로"
          color="#6C14FF"
          onPress={this.onPressNext}
        />
      </ButtonRow>
    );
  }

  private onPressNext() {
    const { step } = this.state;
    if (step < 2) {
      this.setState(prevState => ({
        step: prevState.step + 1,
      }));
    }
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

const SuccessIllust = styled.Image`
  height: 300;
  width: 300;
  align-self: center;
`;

const SuccessText = styled.Text`
  color: #15083B;
  font-size: 18;
  font-family: 'NotoSansKR-Medium';
  line-height: ${1.4 * 18};
  align-self: center;
`;

const SuccessButton = styled(FormButton)`
  width: ${windowWidth - 40};
  margin-left: 20;
  margin-right: 20;
  position: absolute;
  bottom: 20;
`;
