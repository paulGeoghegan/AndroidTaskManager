/**
 * @format
 */

import React from 'react';
import { Formik } from 'formik';
import {
	Button,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';

const AddTasksScreen = ({ navigation }:{navigation : any}) =>{
	return (
		<Formik
			initialValues={{title:'',description:''}}
			onSubmit={values => console.log(values)}
		>
		{({handleChange, handleBlur, handleSubmit, values }) => (
				<View style={styles.container} accessibilityLabel='Title'>
					<View accessible={true}>
						<Text importantForAccessibility='no'>Title</Text>
						<TextInput
							accessibilityLabel='Title'
							autoCapitalize='words'
							autoFocus
							onChangeText={handleChange('title')}
							onBlur={handleBlur('title')}
							maxLength={30}
							value={values.title}
						/>
					</View>
					<View accessible={true}>
						<Text importantForAccessibility='no'>Description</Text>
						<TextInput
							accessibilityLabel='Description'
							autoCapitalize='sentences'
							onChangeText={handleChange('title')}
							onBlur={handleBlur('title')}
							maxLength={300}
							multiline
							value={values.description}
						/>
					</View>
					<Button onPress={handleSubmit} title='Add Task'/>
				</View>
		)}
		</Formik>
	);
};

const styles = StyleSheet.create({
	container:{
		flex:1
	},
});

export {AddTasksScreen};
