## [1.9.0] 2022 - 04 - 18
### Updated dependencies
- dependencies updated
- `expo` module core added 
- `stackNavigator` and `drawerNavigation` changes ( color scheme set ) 
- `expo` updated
- syntax update in `header Shown`

## [1.8.0] 2021 - 03 - 04
### Updated dependencies
- updated `expo-asset@8.2.0` to `expo-asset@8.2.1`
- updated `expo-font@8.3.0` to `expo-font@8.4.0`
- updated `expo-linear-gradient@8.3.0` to `expo-linear-gradient@8.4.0`
- updated `react-native-gesture-handler@1.7.0` to  `react-native-gesture-handler@1.8.0`
- updated `react-native SDK@39.0.3` to `react-native SDK@40.0.1`
- updated `Expo @39.0.0` to `Expo @40.0.0`
- updated `jest-expo@39.0.0` to `jest-expo@40.0.0`
- updated `react-native-screens@2.10.1` to `react-native-screens@2.15.2`
- updated `react-native-safe-area-context@3.1.4` to `react-native-safe-area-context@3.1.9`
- updated `@react-navigation/drawer@5.8.2` to `@react-navigation/drawer@5.12.4`
- updated `@react-navigation/native@5.5.0` to `@react-navigation/native@5.9.3`
- updated `@react-navigation/stack@5.4.1` to `@react-navigation/stack@5.14.3`
- added `expo-app-loading@1.01`

## [1.7.0] 2020 - 10 - 30
### Updated dependencies
- updated `expo-asset@8.1.5` to `expo-asset@8.2.0`
- updated `expo-font@8.1.0` to `expo-font@8.3.0`
- updated `expo-linear-gradient@8.1.5` to `expo-linear-gradient@8.3.0`
- updated `react-native-gesture-handler@1.6.0` to  `react-native-gesture-handler@1.7.0`
- updated `react-native SDK@37.0.1` to `react-native SDK@39.0.3`
- updated `babel-preset-expo@8.2.1` to `babel-preset-expo@8.3.0`
- updated `Expo @37.0.0` to `Expo @39.0.0`
- updated `jest-expo@37.0.0` to `jest-expo@39.0.0`
- updated `react-native-reanimated@1.7.0` to `react-native-reanimated@1.13.0`
- updated `react-native-screens@2.2.0` to `react-native-screens@2.10.1`
- updated `react-native-safe-area-context@0.7.3` to `react-native-safe-area-context@3.1.4`
- updated `@react-native-community/masked-view@0.1.6` to `@react-native-community/masked-view@0.1.10`
- updated `react@16.9.0` to `react@16.13.1`
- updated `galio-framework@0.6.3` to `galio-framework@0.7.1`
- changed fork for `react-native-modal-dropdown`

### Updated files
- updated `Onboarding.js` -> fixed background color
- updated `Pro.js` -> fixed background color
- updated `Components.js` -> fixed ScrollView bug, error related to button color, added marginTop for the Dropdown and removed unnecessary styles

## [1.6.0] 2020 - 06 - 11
### Updated dependencies
- updated `expo-asset@8.0.0` to `expo-asset@8.1.5`
- updated `expo-font@8.0.0` to `expo-font@8.1.0`
- updated `react-native-gesture-handler@1.5.0` to  `react-native-gesture-handler@1.6.0`
- updated `react-native-screens@2.0.0-beta.8` to `react-native-screens@2.2.0`
- updated `react-native SDK@36.0.0` to `react-native SDK@37.0.0`
- updated `babel-preset-expo@8.0.0` to `babel-preset-expo@8.2.1`
- updated `Expo @36.0.0` to `Expo @37.0.0`
- updated `@react-navigation/native@5.0.5` to `@react-navigation/native@5.5.0`
- updated `@react-navigation/stack@5.0.6` to `@react-navigation/stack@5.4.1`
- updated `@react-navigation/compat@5.0.5` to `@react-navigation/compat@5.1.25`
- updated `@react-navigation/drawer@5.0.5` to `@react-navigation/drawer@5.8.2`
- updated `jest-expo@36.0.0` to `jest-expo@37.0.0`

### Updated files
- updated `Settings.js` and removed a warning which was showing up because of `ScrollView`

## [1.5.0] 2019 - 02 - 20
### Removed dependencies
- removed `react-navigation@3.11.0`
### Added dependencies
- added `@react-navigation/compat@5.0.0`
- added `@react-navigation/drawer@5.0.0`
- added `@react-navigation/native@5.0.0`
- added `@react-navigation/stack@5.0.0`
- added `@react-native-community/masked-view@0.1.5`
- added `react-native-reanimated@1.4.0`
- added `react-native-safe-area-context@0.6.0`
- added `react-native-screeens@2.0.0-alpha.12`
### Updated dependencies
- updated `expo@35.0.0` to `expo@36.0.0`
- updated `expo-asset@7.0.0` to `expo-asset@8.0.0`
- updated `expo-font@7.0.0` to `expo-font@8.0.0`
- updated `expo-cli@2.4.0` to `expo-cli@3.11.7`
- updated `expo-linear-gradient@7.0.0` to `expo-linear-gradient@8.0.0`
- updated `react@16.8.3` to `react@16.9.0`
- updated `babel-preset-expo@7.0.0` to `babel-preset-expo@8.0.0`
- updated `cross-env@5.2.0` to `cross-env@7.0.0`
- updated `jest-expo@35.0.0` to `jest-expo@36.0.0`
### Updated files
- changed the whole routing from `Screens.js` because `react-navigation@5.0.0` has a new dynamic API
- changed `Menu.js` for a new Drawer custom component
- changed `Drawer.js` for a new type of `<DrawerCustomItem />`
- changed props and variables so that the new `react-navigation` API could work with the following files: `Pro.js`, `Header.js`, `Product.js`, `Onboarding.js`

## [1.4.0] 2019 - 10 - 27
### Updated dependencies
- `expo@34.0.3` to `expo@35.0.0`
- `expo-asset@6.0.0` to `expo-asset@7.0.0`
- `expo-font@6.0.1` to `expo-font@7.0.0`
- `expo-linear-gradient@6.0.0` to `expo-linear-gradient@7.0.0`
- `galio-framework@0.6.1` to `galio-framework@0.6.3`
`react-native SDK@34.0.0` to `react-native SDK@35.0.0`
### Updated devDependencies
- `babel-preset-expo@5.0.0` to `babel-preset-expo@7.0.0`
- `jest-expo@31.0.0` to `jest-expo@35.0.0`

## [1.3.0] 2019 - 09 - 19
### Updated dependencies
- `expo@33.0.0` to `expo@34.0.3`
- `expo-font@5.0.1` to `expo-font@6.0.1`
- `expo-linear-gradient@5.0.1` to `expo-linear-gradient@6.0.0`
- `galio-framework@0.5.3` to `galio-framework@0.6.1`
- `react-native SDK@33.0.0` to `react-native SDK@34.0.0`
- added `expo-asset@6.0.0`
- added `react-native-gesture-handler@1.3.0`
### Updated files
- updated `Header.js` because of galio's new version
- updated `App.js` because of `expo-asset`

## [1.2.0] 2019 - 06 - 19
### Updated dependencies
- `expo@32.0.0` to `expo@33.0.0`
- `galio-framework@0.4.3` to `galio-framework@0.5.3`
- `react-native SDK@32.0.0` to `react-native SDK@33.0.0`
-  `react-navigation@2.18.2` to `react-navigation@3.11.0`
- `react@16.5.0` to `react@16.8.3`
### Updated files
- Changed screen icons and local components to be fully supported by the newest `galio-framework` version
- `Screens.js` got a new update which fixed the previous bug related to #2 
- `.gitignore` got updated with new files

## [1.1.2] 2019-03-05
### Updated license
- added license inside App.js

## [1.1.1] 2019-02-18
### Updated dependencies
- `galio-framework@0.4.3` to `galio-framework@0.4.4`

## [1.1.0] 2019-02-18
### Added files
- Added .gitignore file
### Updated dependencies
- `expo@31.0.2` to `expo@32.0.0`
- `galio-framework@0.4.2` to `galio-framework@0.4.3`
- `react-native SDK@31.0.0` to `react-native SDK@32.0.0`

## [1.0.0] 2019-02-06
### Initial Release
