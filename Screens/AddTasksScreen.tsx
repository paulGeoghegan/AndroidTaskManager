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
import ModalDropdown from 'react-native-modal-dropdown';

const AddTasksScreen = ({ navigation }:{navigation : any}) =>{
	return (
		<Formik
			initialValues={{title:'',description:''}}
			onSubmit={values => console.log(values)}
		>
		{({handleChange, handleBlur, handleSubmit, values }) => (
				<View style={styles.container}>
					<View accessible={true}>
						<Text accessibilityElementsHidden={true} importantForAccessibility='no'>Title</Text>
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
						<Text accessibilityElementsHidden={true} importantForAccessibility='no'>Description</Text>
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
					<View accessible={true}>
						<Text accessibilityElementsHidden={true} importantForAccessibility='no'>Category</Text>
						<ModalDropdown defaultValue='Select a category...' showSearch options={['All']}/>
					</View>
					<View accessible={true}>

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
	Text:{
		color:'black'
	},
});

export {AddTasksScreen};
