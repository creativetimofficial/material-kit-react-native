import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, Text, theme } from 'galio-framework';

import materialTheme from '../constants/Theme';

export default class GaButton extends React.Component {
  render() {
    const { gradient, children, style, ...props } = this.props;

    if (gradient) {
      return (
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          locations={[0.2, 1]}
          style={[styles.gradient, style]}
          colors={[materialTheme.COLORS.GRADIENT_START, materialTheme.COLORS.GRADIENT_END]}
        >
          <Button color="transparent" style={[styles.gradient, style]} {...props}>
            <Text color={theme.COLORS.WHITE}>{children}</Text>
          </Button>
        </LinearGradient>
      );
    }

    return (
      <Button {...props}>{children}</Button>
    );
  }
}

const styles = StyleSheet.create({
  gradient: {
    borderWidth: 0,
    borderRadius: theme.SIZES.BASE * 2,
  },
});