import { StyleSheet } from "react-native"

const styles = StyleSheet.create ({
    formContext: {
        backgroundColor: "#ffffff",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: "center",
        paddingTop: 30,
        marginTop: 5,
    },
    form:{
        width: "100%",
        height: 900,
        padding: 10,
    },
    label: {
        color:"#000000",
        fontSize: 18,
        paddingLeft: 20,
    },
    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    textButtonCalculator: {
        fontSize: 20,
        color: "#ffffff",
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ff0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginTop: 30,
    }, 
    errorMessage : {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,
    },
    exhibitionResultImc : {
        width: "100%",
        height : "70%",
    },
    listImcs: {
        marginTop: 20,
    },
    resultImcItem: {
        fontSize: 24,
        color: "red",
        height: 50,
        width: "100%",
        paddingRight: 20,
    },
    textResultItemList : {
        fontSize: 26,
        color: "red",
    }
    
    

});

 export default styles

 