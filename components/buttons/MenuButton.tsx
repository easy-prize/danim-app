import * as React from 'react';
import styled from 'styled-components/native';

import menuIcon from '../../assets/icons/filter.png';

type MenuButtonProps = {
  onPress: () => void;
};

const MenuButton: React.FC<MenuButtonProps> = ({ onPress }) => {
  return (
    <Icon source={menuIcon} />
  );
};

export default MenuButton;

const Icon = styled.Image`
`;
