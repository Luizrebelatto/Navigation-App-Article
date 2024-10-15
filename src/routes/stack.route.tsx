import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabRoutes from "./tab.route";
import ScreenOne from "../screens/ScreenOne";

export default function StackMainRoutes(){
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator 
            initialRouteName="screenOne"
            screenOptions={{ 
                headerShown: false, 
                gestureEnabled: false, 
            }}
        >
            <Stack.Screen name="screenOne" component={ScreenOne}/>
            <Stack.Screen name="tabRoutes" component={TabRoutes}/>
        </Stack.Navigator>
    )
}