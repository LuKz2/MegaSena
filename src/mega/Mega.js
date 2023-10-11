import React from "react";
import { Button, Text, TextInput, View, TouchableOpacity, StyleSheet } from "react-native";
import Estilo from "../Estilo";
import Numero from "./Numero";


export default class Mega extends React.Component {



    state = {
        qtdNum: this.props.qtdNum,
        numeros: []
    }

    // constructor(props){
    //     super(props)

    //     this.alterarqdtNum = this.alterarqdtNum.bind(this)
    // }

    alterarqdtNum = (qtde) => {
        this.setState({ qtdNum: +qtde })
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdNum)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
            .sort((a, b) => a - b)
        this.setState({ numeros })
    }
    exibirNum = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <Numero key={num} num={num} />
        })
    }



    render() {
        return (
            <>
                <Text style={[Estilo.txtG1]}>
                    Gerar Numeros
                </Text>
                <TextInput keyboardType={'numeric'}
                    style={{ borderBottomWidth: 1 }}
                    placeholder="Digite seu numero"
                    value={`${this.state.qtdNum}`}
                    onChangeText={this.alterarqdtNum}
                // onChangeText={qtde => this.alterarqdtNum(qtde)}
                />
                <>

                    <Text></Text>

                </>
                <TouchableOpacity style={{
                    padding: 20,
                    borderRadius: 30,
                    borderWidth: 1,
                    borderColor: 'green',
                    backgroundColor: '#a6ffcb',
                }} onPress={this.gerarNumeros}>
                    <Text style={{ fontWeight: 'bold' }}>Gerar</Text>
                </TouchableOpacity>
                {/* Aparecer numero na tela <Text>{this.state.numeros.join(',')}</Text> */}
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    paddingTop: 20


                }}>
                    
                    {this.exibirNum()}
                   
                </View>

            </>


        )

    }

}
