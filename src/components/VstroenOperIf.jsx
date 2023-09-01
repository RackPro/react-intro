import React, {useState} from "react";
import styles from "../styles/general.module.css";

const VstroenOperIf=()=>{
    const [state, setState] = useState(false);
    function vivod(){
        setState(!state);
    }
    function Text(props){
        return(
            <div>
                <h1>Прив</h1>
                {props.kol>0 && <h1>У вас {props.kol} непрочитанных сообщений</h1>}
            </div>
        );
            
    }

    return(
        <div>
            <h1>Встроенный оператор if с логическим оператором &&</h1>
            <div className={styles.gl}>
                <div className={styles.list}><p className={styles.nameisp}>Александр</p>
                    <Text kol="3"/>
                </div>
                <div className={styles.list}><p className={styles.nameisp}>Марат</p>
                
                </div>
            </div>
        </div>
    );
}

export default VstroenOperIf;