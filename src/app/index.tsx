import { Text, View } from 'react-native';

export default function index(params: unknown) {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text>Hello React Native</Text>
		</View>
	);
}
