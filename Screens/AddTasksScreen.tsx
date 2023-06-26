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
				<View style={styles.container}>
					<TextInput
						autoCapitalize='words'
						autoFocus
						onChangeText={handleChange('title')}
						onBlur={handleBlur('title')}
						maxLength={30}
						value={values.title}
					/>
					<TextInput
						autoCapitalize='sentences'
						onChangeText={handleChange('title')}
						onBlur={handleBlur('title')}
						maxLength={300}
						multiline
						value={values.description}
					/>

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
