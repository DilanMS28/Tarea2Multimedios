import { StatusBar } from "expo-status-bar";
import {Button,Image,StyleSheet,Text,TextInput,TouchableOpacity,View,} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function Recuperar() {
    //crear el navigation para poder hacer las rutas
    const navigation = useNavigation()


  return (
    <View style={styles.container}>
      <Image source={require("../assets/image.png")} style={styles.imgLogo} />

      <Text style={styles.titulo}>Recuperar Cuenta</Text>
      <Text style={styles.texto}>Ingrese su correo electrónico para recuperar cuenta: </Text>

      <TextInput style={styles.txtInput} placeholder="Correo electrónico" keyboardType="email-address"/>


    <TouchableOpacity onPress={()=>navigation.navigate("Login")}>      
        <Text style={styles.txtIniciarSesion}>Iniciar Sesión</Text>
    </TouchableOpacity>


      <TouchableOpacity onPress={()=>navigation.navigate("RecuperarCuenta")}>
        <LinearGradient
          colors={["#00C1BB", "#005B58"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.btnLoginGradient}
        >
          <Text style={styles.btnLoginText}>Continuar</Text>
        </LinearGradient>
      </TouchableOpacity>


      <Text style={styles.txtCrearCuenta}>No tienes cuenta</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("CrearCuenta")}>
          <Text style={styles.txtRegistrarse}>Regístrate</Text>
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
  imgLogo: {},
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
    marginTop: 50,
    marginLeft:0,
    margin: 20,
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
  txtIniciarSesion: {
    color: "#00C1BB",
    marginBottom: 10,
    fontWeight: "600",
    fontSize: 18,
    textAlign: "right",
  },

  btnLoginGradient: {
    borderRadius: 30,
    width: 219,
    height: 53,
    marginTop: 30,
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
    fontSize: 16,
    color: "#00C1BB",
    marginTop: 20,
  },
  txtRegistrarse: {
    fontWeight: "900",
    color: "#00C1BB",
    fontSize: 18,
    marginBottom: 40,
  },
});
