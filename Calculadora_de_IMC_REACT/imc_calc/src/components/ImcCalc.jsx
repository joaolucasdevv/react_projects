import "./ImcCalc.css";
import { useState } from "react";
// componentes
import Button from "./Button";

const ImcCalc = ( { calcImc } ) => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    // Função para limpar formulário
    const clearForm = (e) => {
        e.preventDefault();
        setHeight("");
        setWeight("");
    }

    // Função para validar quais são os dígitos necessários
    const validDigits = (text) => {
        return text.replace(/[^0-9,]/g, "");
    }

    // Funções para bloquear dígitos não necessários
    const handleHeightChange = (e) => {
        const updatedValue = validDigits(e.target.value)
        setHeight(updatedValue);
    }
    const handleWeightChange = (e) => {
        const updatedValue = validDigits(e.target.value)
        setWeight(updatedValue);
    }

  return (
    <div className="calc-container">
        <h2>Calculadora de IMC</h2>
        <form id="imc-form">
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="height">Altura:</label>
                    <input 
                        type="text" 
                        name="height" 
                        id="height" 
                        placeholder="Exemplo 1,75"
                        value={height}
                        onChange={(e) => handleHeightChange(e)}
                        />
                </div>
                <div className="form-control">
                    <label htmlFor="weight">Peso:</label>
                    <input 
                        type="text" 
                        name="weight" 
                        id="weight" 
                        placeholder="Exemplo 70,5"
                        value={weight}
                        onChange={(e) => handleWeightChange(e)}
                        />
                </div>
            </div>
            <div className="action-control">
                <Button id="calc-btn" text="Calcular" action={(e) => calcImc(e, height, weight)} />
                <Button id="clear-btn" text="Limpar" action={clearForm}/>
            </div>
        </form>
    </div>
  )
}

export default ImcCalc