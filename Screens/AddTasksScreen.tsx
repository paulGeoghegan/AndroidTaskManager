/**
 * @format
 */

import React from 'react';
import {
	StyleSheet,
	Text,
	View,
} from 'react-native';

const AddTasksScreen = ({ navigation }:{navigation : any}) =>{
	return (
		<View style={styles.container}>
			<Text>Add a new task</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container:{
		flex:1
	},
});

export {AddTasksScreen};
