import * as React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

import { ChannelHeader, IChannelHeaderProps } from './Header';
import Navbar from './Navbar';

const Wrap = styled.View`
  position: relative;
  flex: 1;
`;

const Container = styled.ScrollView`
`;

const contentStyle = {
  flexGrow: 1,
  paddingBottom: 75,
};

interface IChannelLayoutProps extends IChannelHeaderProps {
  children: React.ReactNode;
  style?: any;
  current?: string;
  showNavbar?: boolean;
}

type LayoutState = {
  isScrollTop: boolean,
};

export default class ChannelLayout extends React.Component<IChannelLayoutProps, LayoutState> {
  constructor(props: IChannelLayoutProps) {
    super(props);

    this.state = {
      isScrollTop: true,
    };

    this.onScroll = this.onScroll.bind(this);
    this.renderNavbar = this.renderNavbar.bind(this);
  }

  public render() {
    const { style, children, ...headerProps } = this.props;
    const { isScrollTop } = this.state;
    const ConditionalNavbar = this.renderNavbar;

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
          <ChannelHeader
            {...headerProps}
          />
          {children}
        </Container>
        <ConditionalNavbar />
      </Wrap>
    );
  }

  private onScroll(event: any) {
    const { y } = event.nativeEvent.contentOffset;
    this.setState({
      isScrollTop: (y <= 50),
    });
  }

  private renderNavbar() {
    const {
      current = 'home',
      showNavbar = false,
    } = this.props;
    if (showNavbar) {
      return <Navbar current={current} />;
    }
    return (null);
  }
}
