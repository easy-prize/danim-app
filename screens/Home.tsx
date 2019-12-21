import * as React from 'react';
import styled from 'styled-components/native';

import { DefaultHeader } from '../components/Header';

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
        desc="AI 기술로 저희가 직접 생성한, 여러분에게 딱 맞는 레시피예요."
        image={background}
        {...props}
      />
    ),
  };

  public render() {
    return (
      <Container>
      </Container>
    );
  }
}
