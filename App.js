import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import Mega from "./src/mega/Mega"
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <>
    <LinearGradient colors={['#1fa2ff', '#12d8fa', '#a6ffcb']} style={style.App}>
       <Mega qtdNum={0}/>
    </LinearGradient>
    </>
  );
}

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        padding: 20,
        alignItems: "center"
    }
})


