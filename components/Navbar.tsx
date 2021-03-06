import * as React from 'react';
import { withNavigationFocus } from 'react-navigation';
import styled from 'styled-components/native';

const navbarIcons = [
  {
    active: require('../assets/icons/active/house.png'),
    default: require('../assets/icons/default/house.png'),
    name: 'house',
    routeName: 'Home',
  },
  {
    active: require('../assets/icons/active/list.png'),
    default: require('../assets/icons/default/list.png'),
    name: 'list',
    routeName: 'Feed',
  },
  {
    active: require('../assets/icons/active/basket.png'),
    default: require('../assets/icons/default/basket.png'),
    name: 'basket',
    routeName: 'Basket',
  },
  {
    active: require('../assets/icons/active/user.png'),
    default: require('../assets/icons/default/user.png'),
    name: 'user',
    routeName: 'Mypage',
  },
];

type NavbarProps = {
  current: string;
  navigation?: any;
};

const Navbar: React.FC<NavbarProps> = ({ current, navigation }) => {
  return (
    <Container>
      {navbarIcons.map((icon, idx) => {
        return (
          <Item
            key={idx}
            onPress={() => navigation.navigate(icon.routeName)}
          >
            <Icon
              source={(current === icon.name) ? icon.active : icon.default}
              resizeMode="contain"
            />
          </Item>
        );
      })}
    </Container>
  );
};

export default withNavigationFocus(Navbar);

const Container = styled.View`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: white;
  border-top-width: 1px;
  border-top-color: #D1DBE5;
`;

const Item = styled.TouchableOpacity`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.Image`
  width: 30;
  height: 30;
  margin-top: 18;
  margin-bottom: 18;
`;
