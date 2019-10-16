import React, { Component } from 'react';
import  {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'

class Profile extends Component {
    handlePress = () => {
        this.props.navigation.navigate('Home')
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: `${navigation.getParam('name')} ${ navigation.getParam('age', 24) }`
        }
    }
    setParams = () => {
        this.props.navigation.setParams({
            name: 'Sheyla Luna'
        })
    }
    render() {
        return(
            <View  style={styles.container} >
                <Text>Profile</Text>
                <Button
                    onPress= { this.handlePress }
                    title= " Ir al home " />
                <Button
                onPress= { this.setParams }
                title= " Cambiar Nombre " />
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

export default Profile