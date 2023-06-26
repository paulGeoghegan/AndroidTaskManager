/**
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screen imports
import {AddTasksScreen} from './AddTasksScreen';
import {TaskScreen} from './TaskScreen';
import {UpcomingScreen} from './UpcomingScreen';

const tab = createBottomTabNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<tab.Navigator initialRouteName="My Tasks">
				<tab.Screen name="My Tasks" component={TaskScreen} />
				<tab.Screen name="Calendar" component={UpcomingScreen} />
				<tab.Screen name="New Task" component={AddTasksScreen} />
			</tab.Navigator>
		</NavigationContainer>
	);
}

export default App;
