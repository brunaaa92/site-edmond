
const Projeto = () => {
    const styleH1 = {
        color: "#0F6193",
        marginLeft:"35em",
        paddingTop: "0vw",
        fontSize:"35px",
        cursor:"pointer"
    }
    const styleH2 = {
        color: "#FFAB03",
        fontSize: "2.4em",
        margin: '0%'
    }
    const textSize = {
        fontSize: "2em"
    }
    return (
        <div style={{ margin: "2em"}}>
            <div onClick={ () => {window.history.back()}} style={{display: "flex", flexDirection: "row", fontSize: "1.5em"}}>
                <img  src="src/assets/1Arrow.png" alt="voltar" style={{width: "1.5em", height: '1.5em', verticalAlign: "center", cursor:"pointer"}} />
                <h1 style={styleH1}>EDMOND</h1>
            </div>
            <div style={{margin: "0.1em"}}>
                <div>
                    <div>
                        <h2 style={styleH2}>Sobre</h2>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <p style={ { fontSize: "1.5em", maxWidth: '15em', marginRight: "5em"}}>O projeto tem como objetivo a criação de um kit didático para ensino do uso de placas fotovoltaicas, com foco em sistemas educacionais.</p>
                            <img style={ { marginRight: "5em"}} src="src/Pages/BancadaEdmond.png" alt="bancada" />
                        </div>
                    </div>
                    <div>
                        <h2 style={styleH2}>Justificativa</h2>
                        <div style={{display:"flex", flexDirection: "row"}}>
                            <p style={{ fontSize: "1.5em", margin: "0.5em", maxWidth:"45em"}}>O projeto apresenta-se como uma oportunidade de facilitar o aprendizado do funcionamento da
                             energia fotovoltaica em instituições de aprendizagem. Ademais, conscientizar os estudantes acerca dos impactos
                             ambientais gerados pela utilização de energias convencionais. As bancadas didáticas são reconhecidas no mercado
                             por seus diferenciais de qualidade, necessários para o ensino completo das tecnologias presentes nas placas solares.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Projeto