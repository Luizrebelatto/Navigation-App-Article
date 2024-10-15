import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabTwo from "../screens/Tabs/GroupTabs/TabTwo";
import TabThree from "../screens/Tabs/GroupTabs/TabThree";

export default function StackGroupRoutes(){
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="user"
            screenOptions={{ 
                headerShown: false, 
                gestureEnabled: false, 
            }}
        >
            <Stack.Screen name="tabTwo" component={TabTwo}/>
            <Stack.Screen name="tabThree" component={TabThree}/>
        </Stack.Navigator>
    )
}