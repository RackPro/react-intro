import React from "react";
import styles from "../styles/general.module.css";

const props=(props)=>{
    return(
        <div>
            <h1>Работа с пропсами</h1>
            <div className={styles.gl}>
                <div className={styles.list}><p className={styles.nameisp}>Александр</p>
                    <p>Вот пример работы с пропсами, имя - {props.Sname}</p><br/>
                    <p>А тут выведу возраст - {props.Sage}</p><br/>
                    <p>Значения по дефолту</p><br/>
                    <p>name - {props.Dname}</p>
                    <p>age - {props.Dage}</p>
                </div>
                <div className={styles.list}><p className={styles.nameisp}>Марат</p>
                
                </div>
            </div>
        </div>
        
    );
}
props.defaultProps={Dname:"HAH", Dage:"00"}; //дефолтные пропс

export default props;