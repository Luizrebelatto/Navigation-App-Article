import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabOne from "../screens/Tabs/TabOne";
import StackGroupRoutes from "./groupScreen.routes";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

export default function TabRoutes(){
    const Tab = createBottomTabNavigator()
    
    return (
        <Tab.Navigator 
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: ((route) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? '';
                if (routeName === 'tabThree') {
                  return { display: 'none' };
                }
              })(route),
            tabBarShowLabel: false
          })}
        >
            <Tab.Screen name="groupScreen" component={StackGroupRoutes} options={{ title: "Group Tab" }}/>
            <Tab.Screen name="tabOne" component={TabOne} options={{ title: "Tab One" }}/>
        </Tab.Navigator>
    )
}