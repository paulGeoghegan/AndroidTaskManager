/**
 * @format
 */

import React from 'react';
import {
	Button,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';

const TaskScreen = ({ navigation }:{navigation : any}) =>{
	return (
		<View style={styles.container}>
			<Text>Here is a list of todays tasks</Text>
			<ScrollView>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container:{
		flex:1
	},
});

export {TaskScreen};
