import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Text, View} from 'react-native';

const TabNavigator = createMaterialTopTabNavigator<{
  Tab1: undefined;
  Tab2: undefined;
  Tab3: undefined;
  Tab4: undefined;
}>();

const Container: React.FunctionComponent = ({children}) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    {children}
  </View>
);

const Tab1 = () => (
  <Container>
    <Text>Tab 1</Text>
  </Container>
);

const Tab2 = () => (
  <Container>
    <Text>Tab 2</Text>
  </Container>
);

const Tab3 = () => (
  <Container>
    <Text>Tab 3</Text>
  </Container>
);

const Tab4 = () => (
  <Container>
    <Text>Tab 3</Text>
  </Container>
);

const App: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <TabNavigator.Navigator
        tabBarPosition="bottom"
        screenOptions={{
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          swipeEnabled: true,
          tabBarStyle: {
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 4,
            backgroundColor: '#fff',
            borderTopWidth: 0,
          },
          tabBarLabelStyle: {
            textTransform: 'capitalize',
          },
          tabBarIndicatorStyle: {
            top: 0,
          },
        }}>
        <TabNavigator.Screen
          name="Tab1"
          component={Tab1}
          options={{
            tabBarLabel: 'Tab 1',
          }}
        />
        <TabNavigator.Screen
          name="Tab2"
          component={Tab2}
          options={{
            tabBarLabel: 'Tab 2',
          }}
        />
        <TabNavigator.Screen
          name="Tab3"
          component={Tab3}
          options={{
            tabBarLabel: 'Tab 3',
          }}
        />
        <TabNavigator.Screen
          name="Tab4"
          component={Tab4}
          options={{
            tabBarLabel: 'Tab 4',
          }}
        />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;
