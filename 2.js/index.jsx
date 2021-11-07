// Web приложение - терминал оплаты мобильного телефона.
/*
В приложении должен быть главный экран со списком операторов - МТС, Билайн,
Мегафон. Список должен быть расширяем. По клику на оператора переходить на
экран формы оплаты.
Экран с формой оплаты должен содержать выбранного оператора, поле ввода
телефона с маской и валидацией, и поле ввода суммы в рублях с маской и
валидацией (мин 1 и макс 1000 руб). Кнопка подтверждения, которая ожидает ответа
от сервера. После ответа показывается сообщение об успехе или об ошибке. В случае
успеха переходим на основной экран.
-
Стэк: TypeScript, Next.js, React и React Hooks, Styled-Components.
-
Обращение к API должны быть эмулированы. Ответы должны быть успешные
или неуспешные в случайном порядке.
-
Дизайн и верстка на ваше усмотрение, но сделайте красиво и добавьте
анимации
-
При этом верстка должна быть адаптивной и поддерживать различные размеры
экранов, включая мобильные.
-
Исходный код должен быть выложен на Github.com.
-
В репозитории должна быть ссылка на демо приложения.
*/

import '@styles/index.css'

const base= 'form.html'//то где будет форма

function MainFraim(props){
    return(
        <div className="mainFrame">
            <OperatersList />
        </div>
    )
}

function OperatersList(props){
    return(
        <article className="operBlock">
            <h2>Пополнить баланс</h2>
            <ul className="operList">
                {operatorsConstruct(0)}
            </ul>
        </article>
    )
}

function OperatersItem(props){
    return(
    <li key={props.name}>
        <div className="listItem">
            <h3>{props.name}</h3>
            <TransperentBtn forElem={props.name}/>
        </div>
    </li>)
}



class TransperentBtn extends React.Component{
    constructor(props){
        super(props);
        this.ForOnClick = this.ForOnClick.bind(this);
     }
     ForOnClick(e){
        window.open(`form/${base}?for=${this.props.forElem}`);
        e.preventDefault();
     }
     render(){
        return(
            <button onClick = {this.ForOnClick}>
                <div className="btn">
                        Оплатить
                </div>
            </button>
        )
    } 
}




function operatorsConstruct (mode){
    switch(mode){
    case 1:
        fetch('').then(//адрес api
            (req)=>{
                req.json();
            }
        )
        .then((req)=>{ 
            console.log(req);//дальнейшие действия в зависимости от организации API
            return
        })
        .catch(
            (err)=>{
                console.log(err);   
            }
        )
        break;
    case 0:{
        const arr =['МТС', 'Билайн', 'Мегафон']
        return arr.map((elem)=>{
            return( 
            <OperatersItem name={elem} key={elem}/>
            )
        }
        )
    }
    }
}


ReactDOM.render(<MainFraim />, document.querySelector('.app'));