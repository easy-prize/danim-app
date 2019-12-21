import * as React from 'react';
import { withNavigationFocus } from 'react-navigation';

import CourseProfile from './Profile';
import Ticket from '../activity/Ticket';
import styled from 'styled-components/native';

type CourseProps = {
  course: any;
  activities: any;
  isUsed?: boolean;
  isCollapsed?: boolean;
  navigation?: any;
};

type CourseState = {
  isCollapsed: boolean;
};

class Course extends React.Component<CourseProps, CourseState> {
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
    const { course, isUsed = false, navigation } = this.props;
    const ConditionalActivities = this.renderActivities;

    return (
      <Container
        disabled={isUsed}
        onPress={() => navigation.navigate('Info')}
      >
        <CourseProfile
          onPress={this.onPressOpen}
          isUsed={isUsed}
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

export default withNavigationFocus(Course);

const Container = styled.TouchableOpacity`
  margin-top: 5;
  margin-bottom: 5;
`;
