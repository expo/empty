'use strict';

let React = require('react-native');
let {
  AppRegistry,
  Text,
  View,
} = React;

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={{ flex: 1,
                     alignItems: 'center',
                     justifyContent: 'center' }}>
        <Text style={{ fontSize: 34 }}>
          ¯\_(ツ)_/¯
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('main', () => App);
