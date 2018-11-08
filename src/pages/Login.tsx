import * as React from "react";
import {
  StyleSheet,
  View,
  Text
} from "react-native";

class LoginPage extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Login page</Text></View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  }
});

export default LoginPage;