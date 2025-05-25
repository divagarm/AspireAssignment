// @flow Copyright © 2019 Rently Softwares, All Rights Reserved
import * as React from 'react';
import { Text } from 'react-native';
import Colors from '../../theme/color';
import Sizes from '../../theme/size';

type labelPopsType = {
  title: string,
  center?: boolean,
  right?: boolean,

  textPrimary?: boolean,
  textSecondary?: boolean,
  textOpaque?: boolean,
  textGreen?: boolean,

  smallText?: boolean,
  regularText?: boolean,
  mediumText?: boolean,
  largeText?: boolean,
  titleText?: boolean,
  headerText?: boolean,
  
  style?: object,
  ellipsizeMode?: string,
  numberOfLines?: number,
  testID?: string,
  accessibilityLabel?: string,
  allowFontScaling?: boolean
};
export const CustomText = ({
  title,
  center,
  right,

  textPrimary,
  textSecondary,
  textOpaque,
  textGreen,

  smallText,
  regularText,
  mediumText,
  largeText,
  titleText,
  headerText,

  style,
  ellipsizeMode,
  numberOfLines=1,
  testID,
  accessibilityLabel,
  allowFontScaling=true
}: labelPopsType): JSX.Element => {
  // Default style
  const newStyle: any = {
    fontSize: Sizes.mediumText,
    color: Colors.textPrimary
  };

  // Assign Font Colors based on type.
  textPrimary && (newStyle.color = Colors.textPrimary);
  textSecondary && (newStyle.color = Colors.textSecondary);
  textOpaque && (newStyle.color = Colors.textOpaque);
  textGreen && (newStyle.color = Colors.textGreen);

  // Align Self
  center && (newStyle.alignSelf = newStyle.textAlign = 'center');
  right && (newStyle.textAlign = 'right');

  // Easily Set Font Sizes
  smallText && (newStyle.fontSize = Sizes.smallText);
  regularText && (newStyle.fontSize = Sizes.regularText);
  mediumText && (newStyle.fontSize = Sizes.mediumText);
  largeText && (newStyle.fontSize = Sizes.largeText);
  titleText && (newStyle.fontSize = Sizes.titleText);
  headerText && (newStyle.fontSize = Sizes.headerText);

  return (
    <Text testID = {testID} accessibilityLabel = {accessibilityLabel} maxFontSizeMultiplier = {1.3} ellipsizeMode = {ellipsizeMode} numberOfLines = {(ellipsizeMode === undefined) ? undefined : numberOfLines} style = {{ ...newStyle, ...style }} allowFontScaling = {allowFontScaling}>
      {title}
    </Text>
  );
};
