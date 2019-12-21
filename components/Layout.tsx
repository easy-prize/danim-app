import * as React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

import { DefaultHeader, IDefaultHeaderProps } from './Header';
import Navbar from './Navbar';

const Wrap = styled.View`
  position: relative;
`;

const Container = styled.ScrollView`
`;

const contentStyle = {
  flexGrow: 1,
  paddingBottom: 75,
};

interface ILayoutProps extends IDefaultHeaderProps {
  children: React.ReactNode;
  style?: any;
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
    const { style, children, ...headerProps } = this.props;
    const { isScrollTop } = this.state;

    return (
      <Wrap>
        <Container
          onScroll={this.onScroll}
          contentContainerStyle={contentStyle}
          style={style}
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
        <Navbar current="house" />
      </Wrap>
    );
  }

  private onScroll(event: any) {
    const { y } = event.nativeEvent.contentOffset;
    this.setState({
      isScrollTop: (y <= 50),
    });
  }
}
