import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

//import los componentes
import Login from "./navegacion/login";
import CrearCuenta from "./navegacion/crearcuenta";
import RecuperarCuenta from "./navegacion/recuperarCuenta";
import Recuperar from "./navegacion/recuperar";
import Home from "./navegacion/home";
import Listar from "./navegacion/listaUser";
import MostrarUsuario from "./navegacion/mostrarUsuario";

//crear el stack
const StackNav = createStackNavigator();

//crear la funcion de los stacks
function Stacks() {
  return (
    <StackNav.Navigator initialRouteName="Login" screenOptions={ {headerShown: false}}>
      <StackNav.Screen name="Login" component={Login} />
      <StackNav.Screen name="CrearCuenta" component={CrearCuenta} />
      <StackNav.Screen name="RecuperarCuenta" component={RecuperarCuenta} />
      <StackNav.Screen name="Recuperar" component={Recuperar} />
      <StackNav.Screen name="Home" component={Home} />
      <StackNav.Screen name="listauser" component={Listar} />
      <StackNav.Screen name="mostrarUsuario" component={MostrarUsuario} />
    </StackNav.Navigator>
  );
}

export default function Navegacion() {
  return (
    // retornamos un contenedor
    <NavigationContainer>
      {/* // se llama a la funcion que contiene las rutas */}
      <Stacks/>
    </NavigationContainer>
  );
}
