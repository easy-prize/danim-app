import * as React from 'react';
import styled from 'styled-components/native';

import Ticket from '../activity/Ticket';
import CourseProfile from './Profile';

type CourseProps = {
  course: any;
  activities: any;
};

const Course: React.FC<CourseProps> = ({ course, activities }) => {
  return (
    <Container>
      <CourseProfile {...course} />
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
    </Container>
  );
};

export default Course;

const Container = styled.View`
`;
