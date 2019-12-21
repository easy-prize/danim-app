import * as React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

import { DefaultHeader, IDefaultHeaderProps } from './Header';

const Container = styled.ScrollView`
`;

const contentStyle = {
  flexGrow: 1,
  paddingBottom: 20,
};

interface ILayoutProps extends IDefaultHeaderProps {
  children: React.ReactNode;
}

type LayoutState = {
  isScrollTop: boolean,
};

export default class Layout extends React.Component<ILayoutProps, LayoutState> {
  constructor(props: ILayoutProps) {
    super(props);

    this.state = {
      isScrollTop: true,
    };

    this.onScroll = this.onScroll.bind(this);
  }

  public render() {
    const { children, ...headerProps } = this.props;
    const { isScrollTop } = this.state;

    return (
      <Container
        onScroll={this.onScroll}
        contentContainerStyle={contentStyle}
      >
        <StatusBar
          translucent={true}
          backgroundColor={isScrollTop ? 'transparent' : 'white'}
          barStyle="dark-content"
        />
        {/*
        // @ts-ignore */}
        <DefaultHeader
          {...headerProps}
        />
        {children}
      </Container>
    );
  }

  private onScroll(event: any) {
    const { y } = event.nativeEvent.contentOffset;
    this.setState({
      isScrollTop: (y <= 50),
    });
  }
}
