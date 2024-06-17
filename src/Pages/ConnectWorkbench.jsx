import React, { useState } from "react";

const ConnectWorkbench = () => {
    const styleH1 = {
        color: "#0F6193",
        marginLeft:"35em",
        paddingTop: "0vw",
        fontSize:"35px",
        cursor:"pointer"
    }
    const styleButton = {
        padding:'0.6em' ,fontSize: '1.25em',margin: "1em", border:'none', borderRadius: "15%", color: 'white', backgroundColor: '#0F6193',
        cursor:"pointer"
    }
    const [dataTxt, setDataTxt] = useState(["Temperatura (°C)"]);
    const [dataVal, setDataVal] = useState([26.4]);
    //'Tensão(V)', '11.00V' ('Corrente(A)', '3.54A') "Temperatura (°C)", '26.4')

    return (
        <div style={{margin: "3em"}}>
            <div onClick={ () => {window.history.back()}} style={{display: "flex", flexDirection: "row", fontSize: "1.5em"}}>
                <img  src="src/assets/1Arrow.png" alt="voltar" style={{width: "1.5em", height: '1.5em', verticalAlign: "center", cursor:"pointer"}} />
                <h1 style={styleH1}>EDMOND</h1>
            </div>
            <div style={{display:"flexbox" ,textAlign: "center"}}>
                <h1 style={ {fontSize: '3em', marginBottom: "0.5em", marginTop:"0.6em"}}>Monitoramento dos Sensores</h1>
                <div style={{ display: "flexbox",border: "none"}}>
                    <button onClick={() => { setDataTxt('Tensão (V)'); setDataVal('23.5')}} style={styleButton}>Tensão</button>
                    <button onClick={() => { setDataTxt('Corrente (A)'); setDataVal('3.54')}} style={styleButton}>Corrente</button>
                    <button onClick={() => { setDataTxt('Temperatura (°C)'); setDataVal('26.4')}} style={styleButton}>Temperatura</button>
                </div>
            </div>
            <div style={{textAlign: "center", paddingTop:"2em"}}>
                <h1 style={{fontSize: '2.5em',color: '#FFAB03'}}>{dataTxt}</h1>
                <p style={{fontSize: '2em'}}>{dataVal}</p>
                <button style={{fontSize: '1.5em',color: 'white', backgroundColor: "#FFAB03", padding: "0.5rem 2.2rem 0.5rem 2.2rem", border: 'none', borderRadius: '8%'}}>Atualizar</button>
            </div>
        </div>
    )
}
export default ConnectWorkbench;