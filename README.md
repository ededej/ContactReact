# Contacts App React Native

Contacts is a simple to use app that will help on your everyday life to manage your contacts. You can add, edit and delete them with just a few cliks. The idea behind is to not complicate thing that are simple. No menu are need to manage this app, just a good work flow.

## Setup

### Prerequisites

The app is not hosted on app store or google store. So, to run it locally you will need to follow this instructions. 
1. Go to [React Native Page] (https://facebook.github.io/react-native/docs/getting-started.html)
2. Choose Building Projects with Native Code ( I choose this option just in case I need to write some ios or andriod native)
3. Follow those instruction based on your local machine.

### After finishing with Prerequisites

Below you'll find information about performing common tasks. The most recent version of this guide is available [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md).

## Table of Contents

* [Running On Local Machine](#running-on-your-local-machine)
* [Folder Structure](#folder-structure)
* [Available Scripts](#available-scripts)
  * [npm start](#npm-start)
  * [npm test](#npm-test)
  * [npm run ios](#npm-run-ios)
  * [npm run android](#npm-run-android)
  * [Writing and Running Tests](#writing-and-running-tests)


## Running on your local machine
Create a folder on your local machine. 
Then clone/download this repository https://github.com/ededej/ContactReact.git
Go to directory: cd ContactReact/
Install the dependecies need for the app: npm install 
The react app is ready now. Please follow the Avaible Scripts to run the application in different devices. If you have issues with any of the scripts please got React Native page for more help about your enviroment.

## Folder Structure
Folder Structure
Android/ios has all the native code. No code changes have been made, if neccessary it will be used for device type specific requirments.

app/ folder is where all the code for the app is located.

components/ has code that will be used across different screens or services.
* components/ContactForms contains forms to be used by ContactAddScreen and ViewContactScreen

domain.model/ it is here for typescript interefaces that will bind to object to make more type safety. to be used by components, service or screens. Having objects type desing into react.
* /domain.model/contact to be used across the app

persistence/ is service package that will contain components that will deal with persitence locally, database or cloud.
* persistence/SimpleAsyncStorage I have used SimpleAsyncStorage as perstince for contacts information. It is cross plattforms saving service and keeps data secure to be used by only this app.

screens/ contains all the differents screen that we can navigate. App.js has stackNavigtor where the screens are defined to be used.
* /screens/HomeScreen/ is the home screen for the app that will display the list.
* /screens/ViewContactScreen it will show full details of contacts, edit or delete the contact from the list.
* /screens/ContactAddScreen it will add the contact to the list.


## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:


### `npm start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start -- --reset-cache
# or
yarn start -- --reset-cache
```

#### `npm test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.


## Environment Variables

You can configure some of Create React Native App's behavior using environment variables.

## Authors

**Ermal Dedej** 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
