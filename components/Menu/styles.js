import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    menuItems:{
        marginTop:20,
        marginLeft:20,
        marginRight:20
    },
    menuRow:{
        marginTop:15,
        marginBottom:15,
        flexDirection:"row",
        alignItems:"center",
    },
    icon:{
        color: "white"
    },
    menuTextbox:{
        flex: 1
    },
    menuText:{
        color:"white",
        fontSize:16,
        fontWeight:"bold",
        marginLeft:15,
    },
    arrowIcon:{
        color: "#4d4d4e"
    },
    subTitle:{
        color: "grey",
        marginLeft:15,
        fontSize:14,
    }
})

export default styles;