import React, {useState} from "react";
import styles from "../styles/general.module.css";

function Svivod(){
    alert("Выведено :)");
}
function SSvivod(e){
    e.preventDefault();
    alert("Vivod;)cvcvcv");
}

const Sobitiya=()=>{
    const [state, setState] = useState(true);
    const [state2, setState2] = useState(false);
    const [state3, setState3] = useState("Вход");
    function obrab(e){
        e.preventDefault();
        setState(!state);
    }
    function obrab2(){
        setState2(!state2);
        if (state2===false){
            setState3("Выход");   
        }else{
            setState3("Вход");
        }
    }
    function Vivod(props){
        if(props.isuser){
            return <h1>ПОЛЬЗОВАТЕЛЬ</h1>
        }else{
            return <h1>ГОСТЬ</h1>
        }
    }

    return(
        <div>
            <h1>Работа с событими</h1>
            <div className={styles.gl}>
                <div className={styles.list}><p className={styles.nameisp}>Александр</p>
                    <button onClick={Svivod}>Какое-то событие</button>
                    <button onClick={SSvivod}>Какое-то второе событие</button>
                    <button onClick={obrab}>{state?"ON":"OFF"}</button>
                    <button onClick={obrab2}>{state3}</button>
                    <Vivod isuser={state2}/>
                </div>
                <div className={styles.list}><p className={styles.nameisp}>Марат</p>
                
                </div>
            </div>
        </div>
    );
}

export default Sobitiya;