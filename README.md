# react-native-above-keyboard
React native component that places items above the keyboard

![](demo/IMG_E0345.JPG)


### Description

This component is not a replacement for `KeyboardAvoidingView`. It is useful for scenarios where you want to display
items at the bottom of the screen but when the keyboard is triggerd it moves the items just above the keyboard.
Also, you may place your component anywhere on the screen using the containerStyle prop.


## Installation

Installation can be done through `npm` or `yarn`:

```shell
npm i react-native-above-keyboard --save
```

```shell
yarn add react-native-above-keyboard
```

## Usage

```js
import AboveKeyboard from "react-native-above-keyboard";
```

```jsx
<AboveKeyboard>
 <View>
   <Text>This will be placed just above the keyboard.</Text>
 </View>
</AboveKeyboard>
```

### Props

`conatinerStyle` - style the internal wrapper, can be used to adjust the position of the component.
`keyboardAvoidingViewBehaviour` - behaviour prop from `KeyboardAvoidingView`, defaults to "padding"

## License

MIT.
