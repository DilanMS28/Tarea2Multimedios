import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from "./navegacion/login";
import CrearCuenta from "./navegacion/crearcuenta";
import Recuperar from "./navegacion/recuperar";
import RecuperarCuenta from "./navegacion/recuperarCuenta";
import Navegacion from "./Navegacion";

export default function App() {
  return (
      // {/* <Text>Open up App.js to start working on your app!</Text>
      // <StatusBar style="auto" /> */}
      // {/* <Login/> */}
      // {/* <CrearCuenta/> */}
      // {/* <Recuperar/> */}
      // {/* <RecuperarCuenta/> */}
      <Navegacion/>
  );
}


