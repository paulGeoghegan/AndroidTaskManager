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


const UpcomingScreen = ({ navigation }:{navigation : any}) =>{
	return (
		<View style={styles.container}>
			<Text>Here is a list of tasks in the future</Text>
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

export {UpcomingScreen};
