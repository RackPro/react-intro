import React from "react";
import styles from "../styles/general.module.css"

const Compozition=()=>{
    function Ddiivv(props){
        return(
            <div>
                <h1>hah1</h1>
                {props.children}
                <h1>hah2</h1>
            </div>
        );
    }
    return(
        <div>
            <h1>Формы</h1>
            <div className={styles.gl}>
                <div className={styles.list}><p className={styles.nameisp}>Александр</p>
                    <Ddiivv>
                        <h1>Что-то вложенное</h1>
                    </Ddiivv>
                </div>
                <div className={styles.list}><p className={styles.nameisp}>Марат</p>
                
                </div>
            </div>
        </div>
    );
}

export default Compozition;