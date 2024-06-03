import { StatusBar } from "expo-status-bar";
import {Button,Image,StyleSheet,Text,TextInput,TouchableOpacity,View,} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function CrearCuenta() {
    //crear el navigation para poder hacer las rutas
    const navigation = useNavigation()



  return (
    <View style={styles.container}>
      <Image source={require("../assets/image.png")} style={styles.imgLogo} />

      <Text style={styles.titulo}>Crear Cuenta</Text>
      <Text style={styles.texto}>Ingresa los datos solicitados: </Text>

      <TextInput style={styles.txtInput} placeholder="Nombre completo" keyboardType="ascii-capable" />
      <TextInput style={styles.txtInput} placeholder="Correo electrónico" keyboardType="email-address"/>
      <TextInput style={styles.txtInput} placeholder="Contraseña" secureTextEntry={true}/>

    <TouchableOpacity onPress={()=> navigation.navigate("Login")}>      
        <Text style={styles.txtIniciarSesion}>Iniciar Sesión</Text>
    </TouchableOpacity>


      <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
        <LinearGradient
          colors={["#00C1BB", "#005B58"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.btnLoginGradient}
        >
          <Text style={styles.btnLoginText}>Regístrate</Text>
        </LinearGradient>
      </TouchableOpacity>


      <Text style={styles.txtCrearCuenta}>Ya tienes cuenta</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("Recuperar")}>
          <Text style={styles.txtOlvidarContraseña}>¿Has olvidado su contraseña?</Text>
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
  txtOlvidarContraseña: {
    fontWeight: "900",
    color: "#00C1BB",
    fontSize: 18,
    marginBottom: 40,
  },
});
