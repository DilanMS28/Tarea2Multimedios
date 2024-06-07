import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState } from "react";

export default function RegisterApp(props){

    const navigation = useNavigation();

    const inicioEstado = {
        nombreCompleto: "",
        email: "",
        cliente: "",
    }

    const [estado, setEstado] = useState(inicioEstado);


    const handleChangeText = (value, name)=>{
        setEstado({...estado, [name]:value })
    }

}