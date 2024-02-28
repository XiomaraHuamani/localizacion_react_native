import React, { useState } from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  useNavigation 
} from "@react-navigation/native";
import Feed from "./screens/tabScreens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Buscar from "./screens/tabScreens/Buscar";
import Agregar from "./screens/tabScreens/Agregar";
import Favoritos from "./screens/tabScreens/Favoritos";
import Notifications from "./screens/tabScreens/Notifications";
import Settings from "./screens/tabScreens/Settingss";
import Agenda from "./screens/tabScreens/Agenda";
import TweetDetailScreen from "./screens/homeStack/ListaDetalleScreen";
import { Image, Pressable, useColorScheme, TouchableOpacity, StyleSheet, View, Text } from "react-native";
import Payments from "./screens/drawerScreens/Payments";
//Icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Mapa from "./screens/tabScreens/Mapa";
import 'expo-dev-client';


// Stack
const HomeStack = createNativeStackNavigator();

function HomeStackGroup() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="TabsGroup" component={TabsGroup} />
      <HomeStack.Screen
        name="TweetDetailScreen"
        component={TweetDetailScreen}
        options={{
          presentation: "modal",
          headerTitle: "Detalle",
          headerShown: true,
        }}
      />
    </HomeStack.Navigator>
  );
}



// Tabs
const Tab = createBottomTabNavigator();

function TabsGroup({ navigation }) {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{ 
      tabBarActiveTintColor: "#D2945A",
      //headerShown: false,
        }}
    >
      <Tab.Screen
        name="Home"
        component={TopTabsGroup}
          options={{
            header: ({ onPress, backgroundColor, textColor }) => (
              <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor: 'transparent' }]}>
                <View style={[styles.items, {paddingBottom: 30}]}>
                  <View style={[styles.infoContainer]}>
                    <View style={styles.columnContainer}>
                      <MaterialCommunityIcons name="google-maps" size={24} color="black" />
                    </View>
                    <View style={styles.columnContainer}>
                    <Text style={[styles.columnContainer, textColor, { fontSize: 14 }, { alignItems: "center" }, { justifyContent: "space-between" }]}>Nice {'<'} 10 Km</Text>
                    </View>
                    <View style={styles.columnContainer}>
                    <Text style={[styles.columnContainer, textColor, { fontSize: 14 }]}>
                        Cette semaine
                        <AntDesign name="calendar" size={18} color="black" />
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ),
          tabBarIcon: ({ color, size }) => (
						<AntDesign name="home" size={size} color={color} />
					),
        }}
      />
      <Tab.Screen 
          name="Buscar" 
          component={Buscar} options={{
          headerShown: false,
					tabBarLabel: "Buscar",
					tabBarIcon: ({ color, size }) => (
						<Feather  name="search" size={size} color={color} />
					),
				}}/>

      <Tab.Screen 
      name="Agregar" 
      component={Agregar} 
      options={{
        headerShown: false,
        tabBarLabel: "",
        tabBarIcon: ({ color, size }) => (
          <Ionicons  name="add-circle-outline" size={40} color={color} />
        ),
      }}/>
      <Tab.Screen 
      name="Favoritos" 
      component={Favoritos} 
      options={{
        headerShown: false,
        tabBarLabel: "Favoritos",
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="favorite-border" size={size} color={color} />
        ),
      }}/>
      <Tab.Screen 
      name="Agenda" 
      component={Agenda} 
      options={{
        headerShown: false,
        tabBarLabel: "Agenda",
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="calendar" size={size} color={color} />
        ),
      }}/>
    </Tab.Navigator>
  );
}

// Drawer

const Drawer = createDrawerNavigator();

function DrawerGroup() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Feed" component={HomeStackGroup} />
      <Drawer.Screen name="Mapa" component={MapaStack} />
    </Drawer.Navigator>
  );
}
const MapaStackNavigator = createNativeStackNavigator();
  const MapaStack = () => {
    return (
      <MapaStackNavigator.Navigator initialRouteName="MapaScreen"  >
        <MapaStackNavigator.Screen 
        name="MapaScreen" 
        component={Mapa} 
        style={{height: 180, width:180}}
        options={{
          presentation: "modal",
          headerTitle: "Mapa",
          headerShown: true,
        }}/>
      </MapaStackNavigator.Navigator>
    ); 
  }


// Top Tabs
const TopTabs = createMaterialTopTabNavigator();



const TopTabsGroup = ({ navigation })=>{
  return (
    <React.Fragment>
    <TopTabs.Navigator
    screenOptions={{
      //tabBarActiveTintColor: '#dbab7d',
      //tabBarInactiveTintColor: 'black',
      tabBarIndicatorStyle: { height: 0, tabBarPressOpacity: 0 },
      tabBarLabelStyle: {
        //fontSize: 11,
      },
      tabBarStyle: {
        elevation: 0,
      },
      tabBarIndicatorStyle: {
        height: 0, 
      },
      //tabBarActiveTintColor: '#dbab7d', // Color activo botoncitos de abajo
      //tabBarInactiveTintColor: 'black', // Color inactivo
    
    }}
    >

      <TopTabs.Screen
        name="Toutes les categories"
        component={Feed}
        options={{
          tabBarPressOpacity: 0,
          tabBarLabel: ({ focused }) => ( 
        <View style={{
          borderRadius: 50,
          backgroundColor: focused ? '#f6dcc6' : '#EBEBEB',
          padding: 20,
          position: 'sticky', 
          left: 0
        }}>
          <Text style={{ color: focused ? '#dbab7d' : 'black', fontSize: 13}}>
            Toutes les categories
          </Text>
        </View>
      ),
        }}
        />

      <TopTabs.Screen 
        name="vos categories favorites" 
        component={Payments} 
        options={{
          tabBarPressOpacity: 0,
          tabBarLabel: ({ focused }) => (
            <View style={{
              borderRadius: 50,
              backgroundColor: focused ? '#f6dcc6' : '#EBEBEB',
              padding: 20,
              paddingHorizontal: 17,
              position: 'sticky', 
              right: 0
            }}>
              <Text style={{ color: focused ? '#dbab7d' : 'black', fontSize: 13 }}>
                Vos categories favorites
              </Text>
            </View>
          ),
        }}
        />
    </TopTabs.Navigator>
    <TouchableOpacity
        //onPress={handlePressMapa}
        //component ={MapaStack}
        //onPress={() => navigation.navigate('Mapa')}
        onPress={() => navigation.navigate('Mapa', { screen: 'Mapa' })}
        style={{ position: 'absolute', bottom: 3, marginBottom: 2, left: 290 }}>
          <View
            style={{
              width:60,
              height:60,
              borderRadius:30,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: '#000', 
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.2, 
              elevation: 4,
              marginBottom: 8, 
            }}>

              <MaterialCommunityIcons  name="map-search-outline" size={45} color="black" />
            
          </View>

      </TouchableOpacity>
    </React.Fragment>
  );
}
const Navegation = () => {
	return (
		<NavigationContainer>
			<DrawerGroup />
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
  items: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		flex: 1,
		padding: 10,
    paddingTop: 30,
    height: 80,
    backgroundColor: 'white' 
	},
	infoContainer: {
    //marginBottom: 30,
		display: "flex",
		flexDirection: "row",
		flex: 1,
    borderRadius: 50, 
    backgroundColor: '#EBEBEB',
    padding: 8,
    height: 40,
		alignItems: "center",
		justifyContent: "space-between",
    borderColor: 'red',
	},
  columnContainer: {
		flexDirection: "column",
    borderRadius: 50, 
    backgroundColor: 'rgba(255, 255, 255, 0)',
    padding: 6,
    height: 40,
		alignItems: "center",
		justifyContent: "space-between",
	},
});

export default Navegation;
