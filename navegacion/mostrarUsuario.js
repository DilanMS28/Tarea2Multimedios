import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

//importar firebases
import appFirebase from "../accesoFirebase";
import { addDoc, collection, deleteDoc, getDocs, getDoc, getFirestore, doc } from "firebase/firestore";
const db = getFirestore(appFirebase);

export default function MostrarUsuario(props) {
  //crear el navigation para poder hacer las rutas
  const navigation = useNavigation();

  //variable para almacenar la lista
  const [user, setUser] = useState([]);

    const getUser = async (id) =>{
        try {
            const ref = doc(db, "usuarios", id);
            const datos = await getDoc(ref);
            setUser(datos.data())
        } catch (error) {
            console.log(error)
        }
    }

  useEffect(() => {getUser(props.route.params.usuariosId)},[]);

  const eliminarUsuarios = async(id) =>{
    await deleteDoc(doc(db, "usuarios", id));
    alert("Usuario elimiando de manera exitosa");
    props.navigation.navigate("listauser");
  }



  return (
    <View style={styles.container}>
      <Image source={require("../assets/image.png")} style={styles.imgLogo}/>

      <Text style={styles.titulo}>Mostrar Usuarios</Text>
      <Text style={styles.texto}>Mostrar información de un usuarios especifico</Text>

      <Text  style={styles.subtitulado}>Nombre: {user.nombreCompleto}</Text>
      <Text  style={styles.subtitulado}>Email: {user.email}</Text>
      <Text  style={styles.subtitulado}>Contraseña: {user.clave}</Text>


      <TouchableOpacity onPress={() => eliminarUsuarios(props.route.params.usuariosId)}>
        <LinearGradient
          colors={["#00C1BB", "#005B58"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.btnLoginGradient}
        >
          <Text style={styles.btnLoginText}>Eliminar Registro</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("listauser")}>
          <Text style={styles.texto}>Regresar a la lista</Text>
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
  subtitulado:{
    color: "#000",
    fontSize: 20,
    fontWeight: "bold"
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
    fontSize: 18,
    fontWeight: "light",
    color: "gray",
    marginBottom: 30,
    // marginRight: 80,
    marginTop: 20,
    // textAlign: "center"
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
    marginLeft: 220,
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
    marginBottom: 60,
  },
});
