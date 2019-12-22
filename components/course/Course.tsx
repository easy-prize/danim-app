import * as React from 'react';
import styled from 'styled-components/native';

import Ticket from '../activity/Ticket';
import CourseProfile from './Profile';

type CourseProps = {
  course: any;
  activities: any;
  isCollapsed?: boolean;
};

type CourseState = {
  isCollapsed: boolean;
};

export default class Course extends React.Component<CourseProps, CourseState> {
  constructor(props: CourseProps) {
    super(props);

    const { isCollapsed = true } = this.props;

    this.state = {
      isCollapsed,
    };

    this.onPressOpen = this.onPressOpen.bind(this);
    this.renderActivities = this.renderActivities.bind(this);
  }

  public render() {
    const { course } = this.props;
    const ConditionalActivities = this.renderActivities;

    return (
      <Container>
        <CourseProfile
          onPress={this.onPressOpen}
          {...course}
        />
        <ConditionalActivities />
      </Container>
    );
  }

  private onPressOpen() {
    this.setState(prevState => ({
      isCollapsed: !prevState.isCollapsed,
    }));
  }

  private renderActivities() {
    const { activities } = this.props;
    const { isCollapsed } = this.state;

    if (isCollapsed) {
      return (null);
    }

    return (
      <>
        {activities.map((activity: any, idx: number) => {
          return (
            <Ticket
              key={`activity-${idx}`}
              image={activity.image}
              address={activity.address}
              name={activity.name}
              description={activity.description}
            />
          );
        })}
      </>
    );
  }
}

const Container = styled.TouchableOpacity`
  margin-top: 5;
  margin-bottom: 5;
`;
