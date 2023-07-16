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

let categoryOptions = ['All'];

const AddTasksScreen = ({ navigation }:{navigation : any}) =>{
	return (
		<Formik
			initialValues={{title:'',description:'',category:'',difficulty:'',startDate:'',repeats:'',intervalNumber:'',intervalType:''}}
			onSubmit={values => console.log(values)}
		>
		{({handleChange, handleBlur, handleSubmit, values }) => (
				<View style={styles.container}>
					<View accessible={true}>
						<Text accessibilityElementsHidden={true} importantForAccessibility='no' style={styles.basicText}>Title</Text>
						<TextInput
							accessibilityLabel='Title'
							autoCapitalize='words'
							autoFocus
							onChangeText={handleChange('title')}
							onBlur={handleBlur('title')}
							maxLength={30}
							style={styles.basicText}
							value={values.title}
						/>
					</View>
					<View accessible={true}>
						<Text accessibilityElementsHidden={true} importantForAccessibility='no' style={styles.basicText}>Description</Text>
						<TextInput
							accessibilityLabel='Description'
							autoCapitalize='sentences'
							onChangeText={handleChange('title')}
							onBlur={handleBlur('title')}
							maxLength={300}
							multiline
							style={styles.basicText}
							value={values.description}
						/>
					</View>
					<View accessible={true}>
						<Text accessibilityElementsHidden={true} importantForAccessibility='no' style={styles.basicText}>Category</Text>
						<ModalDropdown
							defaultTextStyle={styles.basicText}
							defaultValue='Select a category...'
							onSelect={handleChange('category')}
							options={categoryOptions}
							showSearch
						/>
					</View>
					<View accessible={true}>

					</View>
					<View accessible={true}>
						<Text accessibilityElementsHidden={true} importantForAccessibility='no' style={styles.basicText}>Repeats every</Text>
						<View style={styles.inlineContainer}>
							<TextInput
								accessibilityLabel='Interval number'
								inputMode='numeric'
								onChangeText={handleChange('intervalNumber')}
								onBlur={handleBlur('intervalNumber')}
								maxLength={5}
								style={styles.basicText}
								value={values.intervalNumber}
							/>
							<ModalDropdown
								defaultTextStyle={styles.basicText}
								defaultValue='Select an interval type...'

								onSelect={handleChange('intervalType')}
								options={['Days','Weeks','Months','Years']}
							/>
						</View>
					</View>

					<Button onPress={handleSubmit} title='Add Task'/>
				</View>
		)}
		</Formik>
	);
};

const styles = StyleSheet.create({
	basicText:{
		color:'black'
	},
	container:{
		flex:1
	},
	inlineContainer:{
		alignItems:'center',
		flexDirection:'row'
	},
});

export {AddTasksScreen};
