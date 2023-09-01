import React from "react";
import styles from "../styles/general.module.css";

class StateOnClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {time: new Date().toLocaleTimeString()};
    }

    componentDidMount(){
        this.inter = setInterval(()=>this.upl(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.inter);
    }

    upl(){
        this.setState({time: new Date().toLocaleTimeString()});
    }

    render(){
        return(
            <div>
            <h1>Работа с хуком State в классах</h1>
            <div className={styles.gl}>
                <div className={styles.list}><p className={styles.nameisp}>Александр</p>
                    <h1>{this.state.time}</h1>
                </div>
                <div className={styles.list}><p className={styles.nameisp}>Марат</p>
                
                </div>
            </div>
        </div>
        );
    }
}

export default StateOnClass;