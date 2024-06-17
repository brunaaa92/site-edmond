import { Link } from "react-router-dom"

const Home = () => {
    
    return (
        
        <div style={{display: "flexbox", fontSize: "1.6em", verticalAlign: "center", font:"inherit"}}>
            <div style={{textAlign: "center", paddingBottom: "3vw", paddingTop: "4vw"}}>
                <Link to="/Projeto" style={{color:"black" ,textDecorationLine:"underline", paddingRight: "2vw", fontSize: "1.57em"}}>Projeto</Link>
                <Link to='/ConnectWorkbench'  style={{border: "none", backgroundColor:"#0F6193", color: "white", borderRadius: "8%", padding: "0.5em 0.8em 0.5em 0.8em", textDecoration:"none", fontSize: "1.6em"}}>Bancada</Link>
            </div>
            <div style={{textAlign: "center", paddingBottom: "3vw"}}>
                <img src="src/assets/logohome.svg" width="480em" height="400em" />
                <h4></h4>
                <div style={{fontSize: "1.6em"}}>
                  <a>Kit didático para estudo da produção de energia fotovoltaica</a>
                </div>
                <div style={{fontSize: "1em",textAlign: "right", paddingBottom: "2vw", paddingTop: "5vw"}}>
                  <a>projetoedmond@gmail.com</a>
                </div>
            </div>
        </div>
    )
}
export default Home
