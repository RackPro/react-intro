import React, {useState} from "react";
import styles from "../styles/general.module.css"

const Forms=()=>{
    let [state, setState] = useState("");
    let [text, setText] = useState("");
    let [option, setOption] = useState("mers");
    let [params, setParams] = useState({trtext:"", trcheckbox:false});//trtext, trcheckbox

    function send(e){
        e.preventDefault();
        console.log(state);
        console.log(text);
        console.log(option);
    }
    function change(e){
        setText(e.target.value);
        setState(e.target.value); //происходит при каждом нажатии клавишы (toLowerCase())
    }
    function selectchange(e){
        setOption(e.target.value);
    }
    function chparams(e){
        if (e.target.type==="checkbox"){
            setParams({...params, trcheckbox:e.target.checked});
        }else{
            setParams({...params, trtext:e.target.value});
        }
    }
    function trsend(e){
        e.preventDefault();
        console.log(`checkbox - ${params.trcheckbox}`);
        console.log(`text - ${params.trtext}`);
    }
    return(
        <div>
            <h1>Формы</h1>
            <div className={styles.gl}>
                <div className={styles.list}><p className={styles.nameisp}>Александр</p>
                    <p>Отправляет данные в консоль</p>
                    <form onSubmit={send}>
                        <label> Name  
                            <input type="text" name="imeno" onChange={change}/>
                        </label>
                        <input type="submit" value="Отправить"/>
                    </form><br/>
                    <form>
                        <label>
                            Text <textarea value={text} placeholder="Сюда будет отправляться текст с первой формы"/>
                        </label>
                    </form>
                    <select value={option} onChange={selectchange}>
                        <option value="bmw">BMW</option>
                        <option value="audi">AUDI</option>
                        <option value="mers">MERSEDES</option>
                        <option value="lamba">LAMBARGINI</option>
                    </select>
                    <p>Обработка нескольких полей</p>
                    <form onSubmit={trsend}>
                        <input type="text" name="trtext" value={params.trtext} onChange={chparams}/>
                        <input type="checkbox" name="trcheckbox" value={params.trcheckbox} onChange={chparams}/>
                        <input type="submit" value="send"/>
                    </form>
                </div>
                <div className={styles.list}><p className={styles.nameisp}>Марат</p>
                
                </div>
            </div>
        </div>
    );
}

export default Forms;