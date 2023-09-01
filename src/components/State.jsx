import React, { useState } from "react";
import styles from "../styles/general.module.css";



const Statett=()=>{
    const [state, setState] = useState(1); //parseInt(localStorage.getItem("dan"))
    const increment=()=>{setState(state + 1); localStorage.setItem("dan", state+1);}
    const decrement=()=>{setState(state-1); localStorage.setItem("dan", state-1);}
    return(
        <div>
            <h1>Работа с хуком State</h1>
            <div className={styles.gl}>
                <div className={styles.list}><p className={styles.nameisp}>Александр</p>
                    <h1>{state}</h1>
                    <div>
                        <button onClick={increment}>Прибавить 1</button><br/>
                        <button onClick={decrement}>Вычесть 1</button>
                    </div>
                </div>
                <div className={styles.list}><p className={styles.nameisp}>Марат</p>
                
                </div>
            </div>
        </div>
    );
};

export default Statett;