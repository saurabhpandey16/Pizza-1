import React from 'react';
import {HeaderButton as Button} from 'react-navigation-header-buttons';
import {Icon} from 'react-native-vector-icons';

import {COLORS} from '../../constants/constants';

const HeaderButton = props => {
  return (
    <Button
      {...props}
      IconComponent={Icon}
      iconSize={23}
      color={props.disabled ? 'red' : COLORS.textSecondaryColor}
    />
  );
};

export {HeaderButton};
