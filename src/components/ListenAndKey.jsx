import React from "react";
import styles from "../styles/general.module.css";

const ListenAndKey=()=>{
    var lis = [
        {name:"Sasha", age:23},
        {name:"Pasha", age:24},
        {name:"Lesha", age:32}
    ];

    const spis = lis.map((n,index)=><li key={index}>Name: {n.name}, Age: {n.age}</li>);
    return(
        <div>
            <h1>Списки и ключи</h1>
            <div className={styles.gl}>
                <div className={styles.list}><p className={styles.nameisp}>Александр</p>
                <ul>
                    {spis}
                </ul>
                </div>
                <div className={styles.list}><p className={styles.nameisp}>Марат</p>
                
                </div>
            </div>
        </div>
    );
}

export default ListenAndKey;