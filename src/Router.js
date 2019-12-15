import React from 'react';


import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer';


import Icon from 'react-native-vector-icons/Ionicons';

// screens
import Home from './screens/Home';

import Contacts from './screens/Contacts';
import ContactDetail from './screens/ContactDetail';

import Settings from './screens/Settings';
import SettingsModal from './components/SettingsModal';

import DrawerMenu from './components/DrawerMenu';

const ContactStack = createStackNavigator({
	Contacts: {
		screen: Contacts,
		navigationOptions: {
			title: 'Contacts'
		}
	},
	ContactDetail: {
		screen: ContactDetail
	}
});

const TabNavigator = createBottomTabNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			tabBarIcon: ({ tintColor }) => (<Icon name="ios-home" size={22} color={tintColor} />)
		}
	},
	Contacts: {
		screen: ContactStack,
		navigationOptions: {
			tabBarIcon: ({ tintColor }) => (<Icon name="ios-contacts" size={22} color={tintColor} />)
		}
	},
	Settings: {
		screen: Settings,
		navigationOptions: {
			tabBarIcon: ({ tintColor }) => (<Icon name="ios-settings" size={22} color={tintColor} />)
		}
	}
}, {
	tabBarOptions: {
		showLabel: false,
		activeTintColor: '#f8f8f8',
		inactiveTintColor: '#586589',
		style: {
			backgroundColor: '#171f33'
		}
	},
	initialRouteName: 'Contacts'
});

const ModalStack = createStackNavigator({
	Tabs: {
		screen: TabNavigator
	},
	SettingsModal: {
		screen: SettingsModal
	}
},{
	mode: 'modal',
	headerMode: 'none'
});

const DrawerNavigator = createDrawerNavigator({
	ModalStack: {
		screen: ModalStack
	},
}, {
	contentComponent: DrawerMenu
});

export default createAppContainer(DrawerNavigator);