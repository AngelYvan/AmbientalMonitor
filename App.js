import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Image,ImageBackground } from 'react-native';

class HomeScreen extends React.Component {
  render() {
    let fondoHome={uri: 'http://quizupso.pansyequitysa.netdna-cdn.com/q/wp-content/uploads/2017/03/13-11.jpg'};
    return ( 
      <ImageBackground source={fondoHome} style={{width: '100%', height: '100%'}}>
        <View source={fondoHome} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
            title="Go to Tip1"
            onPress={() => this.props.navigation.navigate('Tip1')}
          />
          <Button
            title="Go to Tip2"
            onPress={() => this.props.navigation.navigate('Tip2')}
          />
        </View>
      </ImageBackground>
    );
  }
}

class Tip1Screen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Tip1 Screen</Text>
        <Button
          title="Go to Tip1... again"
          onPress={() => this.props.navigation.push('Top1')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
class Tip2Screen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Tip2 Screen</Text>
        <Button
          title="Go to Tip2... again"
          onPress={() => this.props.navigation.push('Top2')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Tip1: Tip1Screen,
  Tip2: Tip2Screen,
});

export default createAppContainer(RootStack);
