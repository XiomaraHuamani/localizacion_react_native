import {
  Button,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";
import { tweets } from "../../data/ListaLugares";
import Tweet from "../../components/Lista";
import Notifications from "./Notifications";
import Mapa from "./Mapa";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler"; // Importación corregida
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
//const ChildComponent = ({ condition }) => {


// Stack
// const EventsStackNavigator = createNativeStackNavigator();
// const EventsStack = () => {
// 	return (
// 		<EventsStackNavigator.Navigator initialRouteName="Notifications" screenOptions={{ headerShown: false }} >
// 			<EventsStackNavigator.Screen name="Notifications" component={Notifications} />
// 		</EventsStackNavigator.Navigator>
// 	); 
// }

// Stack


export default function Feed() {
  const [condition, setCondition] = useState(false);
  const MapaStackNavigator = createNativeStackNavigator();
  const MapaStack = () => {
    return (
      <MapaStackNavigator.Navigator initialRouteName="Notifications" screenOptions={{ headerShown: false }} >
        <MapaStackNavigator.Screen name="TabsGroup" component={TabsGroup} />
        <MapaStackNavigator.Screen name="Notifications" component={Mapa} />
      </MapaStackNavigator.Navigator>
    ); 
  }

  const toggleCondition = () => {
    setCondition(!condition);
  };

  const redirectToNotifications = () => {
    navigation.navigate('Notifications');
  };

  const navigation = useNavigation();
  const handlePressMapa = () => {
    navigation.navigate('Mapa'); 
  };

  return (
    <React.Fragment>
      <View style={{ flexDirection: "row", justifyContent: 'space-around',  }}>

      <TouchableOpacity
        onPress={toggleCondition}
        //component={EventsStack}
        style={{ justifyContent: 'center', alignItems: 'center', }}>
          <View
            style={{
              borderRadius: 50,
              backgroundColor:  condition ? '#f6dcc6' : '#EBEBEB',
              padding: 10,
              paddingVertical: 5,
            }}>
              <Text style={{ color:  condition ? '#dbab7d' : 'black', fontSize: 13}}>
                EVENTS
              </Text>
          </View>
      </TouchableOpacity> 

      <TouchableOpacity
        onPress={toggleCondition}
        style={{ justifyContent: 'center', alignItems: 'center', }}>
          <View
            style={{
              borderRadius: 50,
              backgroundColor:  condition ? '#f6dcc6' : '#EBEBEB',
              padding: 10,
              paddingVertical: 5,
            }}>
              <Text style={{ color:  condition ? '#dbab7d' : 'black', fontSize: 13}}>
                CULTURE
              </Text>
          </View>
      </TouchableOpacity> 

      <TouchableOpacity
        onPress={toggleCondition}
        style={{ justifyContent: 'center', alignItems: 'center', }}>
          <View
            style={{
              
              borderRadius: 50,
              backgroundColor:  condition ? '#f6dcc6' : '#EBEBEB',
              padding: 10,
              paddingVertical: 5,
            }}>
              <Text style={{ color:  condition ? '#dbab7d' : 'black', fontSize: 13}}>
                SPORT
              </Text>
          </View>
      </TouchableOpacity> 
      <TouchableOpacity
        onPress={toggleCondition}
        style={{ justifyContent: 'center', alignItems: 'center', }}>
          <View
            style={{
              borderRadius: 50,
              backgroundColor:  condition ? '#f6dcc6' : '#EBEBEB',
              padding: 10,
              paddingVertical: 5,
            }}>
              <Text style={{ color:  condition ? '#dbab7d' : 'black', fontSize: 13}}>
                NATURE
              </Text>
          </View>
      </TouchableOpacity> 
      </View>


    <SafeAreaView style={{ flex: 1 , alignItems: "center", position: 'relative',top: 0,  }}>
    <View
            style={{
              width:60,
              height: 'auto',
              position: 'absolute',
              borderRadius:5,
              backgroundColor: 'red',
              justifyContent: 'space-between',
              alignItems: 'center',
              shadowColor: '#000', 
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.2, 
              elevation: 4,
              marginBottom: 8, 
            }}>
              
            </View>
      <FlatList 
        showsVerticalScrollIndicator={false} 
        data={tweets.slice(0, 7)}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({ item }) => {
          return <Tweet tweet={item} />;
        }}
        ItemSeparatorComponent={() => <View style={[styles.separacion]} />}
        style={styles.list}
        
      />
      {/* <TouchableOpacity
        onPress={handlePressMapa}
        //component ={MapaStack}
        style={{ position: 'absolute', bottom: 3, marginBottom: 2, left: 108 }}>
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

      </TouchableOpacity> */}
    </SafeAreaView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({

  separacion:{
    paddingBottom: 20,
  },
  list: {
		display: "flex",
		flexDirection: "column",
		flex: 1,
    paddingTop: 15,
		width: "95%",
	},
  divider: {
    width: "100%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#D8D8D8",
  },
  header: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1DA1F2",
  },
  footer: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    padding: 10,
    borderRadius: 12,
    fontSize: 12,
  },
  footerTitle: {
    padding: 8,
    borderRadius: 12,
    fontSize: 12,
  },
  emptyComponentTitle: {
    color: "black",
    fontSize: 80,
    fontWeight: "bold",
  },
  emptyComponentSubtitle: {
    color: "#808080",
    padding: 8,
    fontSize: 14,
    textAlign: "center",
  },
  emptyComponent: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
