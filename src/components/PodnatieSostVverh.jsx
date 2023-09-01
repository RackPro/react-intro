import React, {useState} from "react";
import styles from "../styles/general.module.css";

const PodnatieSostVverh=()=>{
    const [sost, sostSet] = useState({temperature: 50, namet:"c"});
    function cipvoda(props){
        if((props.namet==="c" && props.temperature>=100) || (props.namet==="f" && props.temperature>=3380)){
            return "Вода кипит";
        }else{
            return "Вода не кипит"
        }
    }
    function convertInCelsie(tp){return tp/33.8;}
    function convertInFaringeit(tp){return tp*33.8;};
    function changec(e){
        sostSet({namet: e.target.name, temperature: e.target.value});
    }
    return(
        <div>
            <h1>Поднятие состояния вверх</h1>
            <div className={styles.gl}>
                <div className={styles.list}><p className={styles.nameisp}>Александр</p>
                    <input type="text" name="c" onChange={changec} value={(sost.namet==="c"?sost.temperature:convertInCelsie(sost.temperature))}/>
                    <input type="text" name="f" onChange={changec} value={(sost.namet==="f"?sost.temperature:convertInFaringeit(sost.temperature))}/>
                    <label>{cipvoda(sost)}</label>
                </div>
                <div className={styles.list}><p className={styles.nameisp}>Марат</p>
                
                </div>
            </div>
        </div>
    );
}

export default PodnatieSostVverh;