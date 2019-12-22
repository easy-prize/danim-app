import * as React from 'react';
import styled from 'styled-components/native';

type HeaderTitleProps = {
  text: string,
  primary: string,
};

const HeaderTitle: React.FC<HeaderTitleProps> = ({ text, primary }) => {
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
      <Title>
        {text}
      </Title>
      <Primary.Container>
        <Primary.Title>
          {primary}
        </Primary.Title>
      </Primary.Container>
    </>
  );
};

export default HeaderTitle;
