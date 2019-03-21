# react-native-above-keyboard
React native component that places items above the keyboard

![](demo/IMG_E0345.JPG)

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
