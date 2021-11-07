import '@styles/form.css'
import {maskPhone} from '@assets/maskCreqter.js';

function $_GET(key) {
    var p = window.location.search;
    p = p.match(new RegExp(key + '=([^&=]+)'));
    return p ? decodeURI(p[1]) : false;
}

function MainFraim(){
    console.log(location.href);
    return(
        <div className="mainFrame">
            <article className="formBlock">
                <h2>Терминал оплаты мобильного телефона</h2>
                <h3>{$_GET('for')}</h3>
                <Form />
            </article>
        </div>
    )
}
class Form extends React.Component{
    constructor(props){
       super(props);
       this.ForOnTelephonChange = this.ForOnTelephonChange.bind(this);
       this.ForOnNumberChange = this.ForOnNumberChange.bind(this);
       this.ForOnSubmit = this.ForOnSubmit.bind(this);
       this.state = {tel:"", num:""};
    }
    ForOnTelephonChange(telph){
        this.setState({tel: telph});
    }
    ForOnNumberChange(number){
        if(Number(number) > 1000) this.setState({num: "1000"});
        else if(Number(number) < 1) this.setState({num: "1"});
        else this.setState({num: number});
    }
    ForOnSubmit(event){
        event.preventDefault();

        if(this.state.tel && this.state.num){
        console.log("Форма отправлена", this.state.tel, this.state.tel);
        ReactDOM.render(<EndingIndicate  answer={(Math.round(Math.random()*10) % 2)}/>, document.querySelector('.mainFrame'));
        }
        else{
            console.log("Форма не отправлена"); 
        }


    }
    render(){
        return(
            <form onSubmit={this.ForOnSubmit} className="form">
                <TelInput
                    telephone={this.state.tel}
                    onTelephoneChange={this.ForOnTelephonChange}
                />
                <NumInput
                    num = {this.state.num}
                    onNumberChange = {this.ForOnNumberChange}
                />
                <input className="formBtn" type="submit" value="Отправить" />
            </form>
        )
    }
}

class TelInput extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
     }
     handleChange(e){
        this.props.onTelephoneChange(e.target.value);
     }
     
     render(){
        const telephone = this.props.telephone;
        return(
                <label className="formInputBlock">
                    Телефон:
                    <input className="telMask formInput"
                        type="tel"
                        placeholder="+7(000)000-00-00"
                        value={telephone}
                        onChange={this.handleChange}
                    />
                </label>
        );
    } 
}



class NumInput extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
     }
     handleChange(e){
        this.props.onNumberChange(e.target.value);
     }
     render(){
        const number = this.props.num;
        return(
                <label className="formInputBlock">
                    Сумма:
                    <input className="formInput"
                        type="number"
                        value={number}
                        onChange={this.handleChange}
                        placeholder="1 - 1000"
                    />
                </label>
        );
    } 
}


function EndingIndicate(props){
    const goodInd = (
        <div className="ending">
            <svg  className="animate" viewBox="0 0 100 100">
                <path d="M 18 32.34 l -8.34 -8.34 -2.83 2.83 11.17 11.17 24 -24 -2.83 -2.83 z" stroke="#3da35a" fill="transparent"/>
            </svg>
        </div>
    )
    const badInd = (
        <div className="ending">
            <svg className="animate" viewBox="0 0 24 24">
                <line x1="1" y1="11" 
                    x2="11" y2="1" 
                    stroke="red" 
                    stroke-width="2"/>
                <line x1="1" y1="1" 
                    x2="11" y2="11" 
                    stroke="red" 
                    stroke-width="2"/>
            </svg>
        </div>
    )
    setTimeout(() => {window.close()}, 3000);
        if(props.answer) {
            return goodInd
        }
        return badInd
}


ReactDOM.render(<MainFraim />, document.querySelector('.app'));
maskPhone('.telMask');