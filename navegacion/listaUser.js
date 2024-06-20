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
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

//almacenar la conexión
const db = getFirestore(appFirebase);

export default function ListaUser(props) {
  //crear el navigation para poder hacer las rutas
  const navigation = useNavigation();

  //variable para almacenar la lista
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const getListar = async () => {
      try {
        const qyCollection = await getDocs(collection(db, "usuarios"));
        const usuarios = [];
        qyCollection.forEach((user) => {
          const { nombreCompleto, email, clave } = user.data();
          usuarios.push({id:user.id, nombreCompleto, email, clave });
        });
        setLista(usuarios)
      } catch (error) {
        console.log(error);
      }
    };
    getListar()
  },[lista]);

//   // se encarga de recibir los valores de los input
//   const handleChangeText = (value, name) => {
//     setEstado({ ...estado, [name]: value });
//   };

  // //funcion para ver los estados
  // const RegistrarUsuario = () => {
  //   console.log(estado)
  //   // navigation.navigate("login")
  // };

  //enviar los datos al firebase a la colección por medio de una función asincrónica
  //   const RegistrarUsuario = async () => {
  //     try {
  //       await addDoc(collection(db, "usuarios"), { ...estado });

  //       Alert.alert("Alerta", "El usuario se registró con éxito");

  //       props.navigation.navigate("LoginApp");
  //     } catch {
  //       console.error(error);
  //     }
  //   };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/image.png")} style={styles.imgLogo} />

      <Text style={styles.titulo}>Listar</Text>
      <Text style={styles.texto}>Aqui se van a mostrar la lista de usuarios</Text>

     <View>
        {
            lista.map( (list)=>(
                <TouchableOpacity key={list.id} onPress={()=>{props.navigation.navigate("mostrarUsuario", {usuariosId: list.id} )  }}>
                    <Text  style={styles.subtitulado}>Nombre: {list.nombreCompleto}</Text>
                </TouchableOpacity>
            ) )
        }
     </View>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <LinearGradient
          colors={["#00C1BB", "#005B58"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.btnLoginGradient}
        >
          <Text style={styles.btnLoginText}>Ir al login</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* <Text style={styles.txtCrearCuenta}>Ya tienes cuenta</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Recuperar")}>
        <Text style={styles.txtOlvidarContraseña}>
          ¿Has olvidado su contraseña?
        </Text>
      </TouchableOpacity> */}

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
