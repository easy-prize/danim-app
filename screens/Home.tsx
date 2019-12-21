import * as React from 'react';
import styled from 'styled-components/native';

import { DefaultHeader } from '../components/Header';

import Ticket from '../components/activity/Ticket';
import Section from '../components/Section';

import activityImage from '../assets/examples/activity.png';
import background from '../assets/headers/home.png';

const Container = styled.View``;

const HeaderTitle: React.FC = () => {
  const Title = React.useMemo(
      () => styled.Text`
        color: #15083B;
        font-size: 32;
        font-family: 'NotoSansKR-Medium';
        line-height: ${1.4 * 32};
      `,
      [],
    );
  const Primary = {
    Container: React.useMemo(
      () => styled.View`
        background-color: #6E00FF;
        align-self: flex-start;
        padding-left: 5;
        padding-right: 5;
      `,
      [],
    ),
    Title: React.useMemo(
      () => styled.Text`
        color: white;
        font-size: 32;
        font-family: 'NotoSansKR-Medium';
        line-height: ${1.4 * 32};
      `,
      [],
    ),
  };

  return (
    <>
      <Title>오늘의 레시피</Title>
      <Primary.Container>
        <Primary.Title>
          5,100원
        </Primary.Title>
      </Primary.Container>
    </>
  );
};

export default class HomeScreen extends React.Component {
  public static navigationOptions = {
    header: (props: any) => (
      <DefaultHeader
        name={<HeaderTitle />}
        description="AI 기술로 저희가 직접 생성한, 여러분에게 딱 맞는 레시피예요."
        image={background}
        {...props}
      />
    ),
  };

  public render() {
    return (
      <Container>
        <Section
          name="2019년 12월 21일"
          title="의 레시피입니다!"
        >
          <Ticket
            image={activityImage}
            address="서울특별시 용산구"
            name="용산 한 바퀴 투어"
            description="준호를 좋아하시는 젊은 경하님을 위한."
          />
        </Section>
      </Container>
    );
  }
}
