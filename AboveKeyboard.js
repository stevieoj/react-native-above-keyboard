import React, { Component } from 'react';
import PropTypes from "prop-types";
import { KeyboardAvoidingView, Keyboard, Animated } from 'react-native';

export default class AboveKeyboard extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    containerStyle: PropTypes.object,
    keyboardAvoidingViewBehaviour: PropTypes.string
  }

  static defaultProps = {
    keyboardAvoidingViewBehaviour: "padding"
  }

  constructor(props) {
    super(props);
    this.padding = new Animated.Value(0);
  }

  componentWillMount() {
    this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    Keyboard.removeListener('keyboardWillShow', this.keyboardWillShow);
    Keyboard.removeListener('keyboardWillHide', this.keyboardWillHide);
  }

  keyboardWillShow = (event) => {
    Animated.timing(this.padding, {
      duration: event.duration,
      toValue: event.endCoordinates.height,
    }).start();
  };

  keyboardWillHide = (event) => {
    Animated.timing(this.padding, {
      duration: event.duration,
      toValue: 0,
    }).start();
  };

  render() {
    const { containerStyle, children, keyboardAvoidingViewBehaviour } = this.props;
    return (
      <KeyboardAvoidingView behavior={keyboardAvoidingViewBehaviour} style={{ flex: 1 }}>
        <Animated.View style={[{ marginBottom: this.padding, position: "absolute", bottom: 0 }, containerStyle]}>
          {children}
        </Animated.View>
      </KeyboardAvoidingView>
    );
  }
}