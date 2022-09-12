import SelectLangue from "./SelectLangue"
import { useState } from "react";


export default function BoxText(){
    
    // status
    const [texto, setTexto] = useState("");
    const [texto1, setTexto1] = useState("");
    const [texto2, setTexto2] = useState("");
    const [textoTraduzido, setTextoTraduzido] = useState("");

    // função de selecionar idioma 
    const selecionarIdioma = ({texto2: {value, id}}) => {
        id === "texto1" && setTexto1(value);
        id === "texto2" && setTexto2(value);

    }
    // função de resetar texto 
    const LimparCaixaDeTexto = () => {
        if (texto === "" && textoTraduzido === "") {
            console.log("A caixa de texto está vazia")
        } else {
            success("Texto removido!")
            setTexto("");
            setTextoTraduzido("");
        }
    }

    // componente 
    return(
        <div className="mainBox">
                <div>
                    <SelectLangue/>
                    <div className="box">
                        
                    </div>
                    <div className="iconBox">
                        <p>/250</p>    
                    </div>
                </div>

                <div>
                    <SelectLangue/>
                    <div className="outputResult box">
                        <p id="output">Saida</p>
                    </div>
                    <div className="iconBox">
                        <p>/250</p>
                    </div>
                </div>
            </div>
    )



};