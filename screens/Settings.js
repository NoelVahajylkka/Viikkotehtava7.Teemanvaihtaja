import React from 'react';
import { View } from 'react-native';
import ThemeSwitchButton from '../components/ThemeSwitchButton';
import Styles from '../Styles';
import { useTheme } from '../context/useTheme';

export default function Settings(){
  const {isDarkMode} = useTheme()  
  return (
        <View style = {[Styles.container,isDarkMode ? Styles.dark : Styles.light]}>
          <ThemeSwitchButton/>
        </View>
      );
}