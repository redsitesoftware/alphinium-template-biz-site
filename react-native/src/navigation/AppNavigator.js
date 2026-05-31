import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ServicesScreen from '../screens/ServicesScreen';
import ContactScreen from '../screens/ContactScreen';
import CaseStudyScreen from '../screens/CaseStudyScreen';
import { colors } from '../data/siteData';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.backgroundAlt, shadowColor: 'transparent' },
          headerTintColor: colors.text,
          headerTitleStyle: { fontWeight: '800' },
          cardStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Services" component={ServicesScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Case Studies" component={CaseStudyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
