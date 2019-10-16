import React, { Component } from 'react';
import  {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'

class Login extends Component {
    handlePress = () => {
        this.props.navigation.navigate('About')
    }
    render() {
        return(
            <View  style={styles.container} >
                <Text>Login </Text>
                <Button
                    onPress= { this.handlePress }
                    title= " Ir a about " />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Login