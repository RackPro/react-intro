import React from "react";
import styles from "../styles/general.module.css";

function VivodName(props){
    return(
        <div><h4>Name - {props.name}</h4></div>
    );
}

const CompozitionComponent=()=>{
    return(
        <div>
            <h1>Работа с хуком State</h1>
            <div className={styles.gl}>
                <div className={styles.list}><p className={styles.nameisp}>Александр</p>
                    <div>
                        <h1>Список имен</h1><br/>
                        <VivodName name="Sasha"/>
                        <VivodName name="Pasha"/>
                        <VivodName name="Lesha"/>
                    </div>
                </div>
                <div className={styles.list}><p className={styles.nameisp}>Марат</p>
                
                </div>
            </div>
        </div>
    );
}

export default CompozitionComponent;