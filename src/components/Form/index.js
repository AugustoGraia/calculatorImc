import React, { useState } from "react";
import { 
    Text, 
    TextInput, 
    View, 
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard,
    FlatList,
    } from "react-native";                // Importando coisas que são usada no programa
import ResultImc from "./ResultImc";
import styles from "./style";


export default function Form(props) {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
    const [imc, setImc] = useState(null)                                            // Setando todos os campos  como nulo
    const [textButton, setTextButton] = useState("Calcular")
    const [errorMessage, setErrorMessage] = useState(null);
    const [imcList, setImcList] = useState([])

    function imcCalculator() {
        let heightFormat = height.replace("," , ".")
        let totalImc = (weight/(heightFormat * heightFormat)).toFixed(2);              // logica da função
        setImcList ((arr) => [...arr, {id: new Date().getTime(), imc:totalImc }])                       
        setImc(totalImc)
    }

 
    function verificationImc() {                                                    // Função de erro se nenhum campo por preenchido
        if(imc == null) {
            Vibration.vibrate();
            setErrorMessage("*campo obrigatório*")
        }
    }
     
    function validationImc() {
        console.log(imcList)
        if(weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)                                                     //verificando se esta nulo antes de chamar a função
            setMessageImc("Seu imc é igual : ") 
            setTextButton("Calcular Novamente")
            setErrorMessage(null)
        }else {
        verificationImc()                           
        setImc(null)                                                       // Chamando funções 
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e altura")
        }    
    }


    return(
        <View style = {styles.formContext}>
            {imc == null ? 
            <Pressable onPress ={Keyboard.dismiss} style = {styles.form}>
                <Text style = {styles.label}>Altura</Text>
                <Text style = {styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                style = {styles.input}           
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.75"
                keyboardType="numbers-and-punctuation"
                />
                <Text style = {styles.label}>Peso</Text>
                <Text style = {styles.errorMessage}>{errorMessage}</Text>
                <TextInput 
                style = {styles.input} 
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex. 75.365"
                keyboardType="numbers-and-punctuation"
                />  
                <TouchableOpacity
                    style = {styles.buttonCalculator}
                    onPress={() => {validationImc()}}
                    >
                    <Text style = {styles.textButtonCalculator}>Calcular</Text>               
                    </TouchableOpacity>                      
                </Pressable> 
                : 
                <View style = {styles.exhibitionResultImc}>   
                    <ResultImc messageResultImc={messageImc} resultImc={imc}/> 
                    <TouchableOpacity
                    style = {styles.buttonCalculator}
                    onPress={() => {validationImc()}}
                    >
                    <Text style = {styles.textButtonCalculator}>Calcular Novamente</Text>               
                    </TouchableOpacity>
                </View>
            } 
            <FlatList 
            showsVerticalScrollIndicator={false}
            style = {styles.listImcs}
            data = {imcList.reverse()}
            renderItem = {({item}) => {
                return (
                        <Text style = {styles.resultImcItem}> 
                            <Text style = {styles.textResultItemList}>Resultado IMC =</Text>
                             {item.imc}
                        </Text> 
                )
            }}
            keyExtractor = {(item) =>{
                item.id
            }}
            />
        </View>
    );
}
