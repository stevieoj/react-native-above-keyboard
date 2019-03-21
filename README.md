# react-native-above-keyboard
React native component that places items above the keyboard

![](demo/IMG_E0345.JPG)


### Description

This component is not a replacement for `KeyboardAvoidingView`. It is useful for scenarios where you want to display
items at the bottom of the screen but when the keyboard triggerd it moves the items just above the keyboard.


## Installation

Installation can be done through `npm` or `yarn`:

```shell
npm i react-native-keyboard-aware-scroll-view --save
```

```shell
yarn add react-native-keyboard-aware-scroll-view
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
