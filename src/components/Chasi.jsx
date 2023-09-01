import React, {useState} from "react";
import styles from "../styles/general.module.css";

const Chasi=()=>{
    const [state, setState] = useState(new Date().toLocaleTimeString());
    function tick(){
        setState(new Date().toLocaleTimeString());
    }
    setInterval(tick, 1000);
    return(
        <div>
            <h1>Работа с хуком State</h1>
            <div className={styles.gl}>
                <div className={styles.list}><p className={styles.nameisp}>Александр</p>
                    <h1>{state}</h1>
                </div>
                <div className={styles.list}><p className={styles.nameisp}>Марат</p>
                
                </div>
            </div>
        </div>
    );
}

export default Chasi;