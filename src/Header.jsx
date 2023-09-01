import React from "react";
import {Link} from "react-router-dom";
import styles from "./styles/header.module.css";

const Header=()=>{
    return (
        <div>
            <h1>Играет роль шапки</h1>
            <div className={styles.rasp}>
                <Link to="/"><button className={styles.but}>Главная страница</button></Link>
                <Link to="/chasi"><button className={styles.but}>Часы</button></Link>
                <Link to="/props"><button className={styles.but}>Пропсы</button></Link>
                <Link to="/sobitiya"><button className={styles.but}>События</button></Link>
                <Link to="/state"><button className={styles.but}>State</button></Link>
                <Link to="/CompozitionComponent"><button className={styles.but}>Композиция компонентов</button></Link>
                <Link to="/StateOnClass"><button className={styles.but}>StateOnClass</button></Link>
                <Link to="/vstoperif"><button className={styles.but}> VstOperIf</button></Link>
                <Link to="/ListenAndKey"><button className={styles.but}>Списки и ключи</button></Link>
                <Link to="/Forms"><button className={styles.but}>Формы</button></Link>
                <Link to="/PodnatieSostVverh"><button className={styles.but}>Поднятие состояния вверх</button></Link>
                <Link to="/Compozition"><button className={styles.but}>Композиция</button></Link>
            </div>
        </div>
        
        
    );
}

export default Header;