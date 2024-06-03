import { StatusBar } from "expo-status-bar";
import {Button,Image,StyleSheet,Text,TextInput,TouchableOpacity,View,} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function Login() {

    //crear el navigation para poder hacer las rutas
    const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Image source={require("../assets/image.png")} style={styles.imgLogo} />

      <Text style={styles.titulo}>Inicio</Text>
      <Text style={styles.texto}>Estas dentro de la pagina de Inicio </Text>

      <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
        <LinearGradient
          colors={["#00C1BB", "#005B58"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}s
          style={styles.btnLoginGradient}
        >
          <Text style={styles.btnLoginText}>Cerrar Sesion</Text>
        </LinearGradient>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imgLogo: {
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 60,
    color: "#000",
    textAlign: "center",
    marginBottom: 1,
  },
  texto: {
    fontSize: 20,
    fontWeight: "light",
    color: "gray",
    marginBottom: 30,
  },
  txtInput: {
    backgroundColor: "#fff",
    margin: "0 auto",
    width: 350,
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 5,
  },
  txtOlvidar: {
    color: "#00C1BB",
    marginBottom: 50,
    fontWeight: "600",
    fontSize: 18,
    textAlign: "left",
  },

  btnLoginGradient: {
    borderRadius: 30,
    width: 219,
    height: 53,
    marginTop: 35,
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  btnLoginText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 15,
  },

  txtCrearCuenta: {
    fontSize: 18,
    color: "#00C1BB",
    marginTop: 90,
    marginBottom: 30,
  },
  txtRegistrarse: {
    fontWeight: "900",
    color: "#00C1BB",
    fontSize: 20,
  },
});
