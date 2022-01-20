import Button from './Button'
import './css.css'

function InputNum(props) {

    function addToCart(){
        if (props.value > 0){
            let toSum = props.cart.find(product => props.id === product.id)
            if (toSum)
                toSum.amount += parseInt(props.value);
            else
                props.cart.push({id: props.id, name: props.name, amount: parseInt(props.value)});
            // console.log(props.cart);
            props.changeCart(props.cart);
        }
        //TODO Adicionar tela de confirmação
        props.closeModal();        
    }

    function updateCart(){
        if (props.value > 0){
            let toUpdate = props.cart.find(product => props.id === product.id)
            toUpdate.amount = parseInt(props.value);
            // console.log(props.cart);
            props.changeCart(props.cart);
        }
        //TODO Adicionar tela de confirmação
        props.closeModal();    
    }

    return(
        <div className="container-modal">
            <h3>{props.name}</h3>
            <div className='modal-row'>
                <input type="number" value={props.value} min={props.min} id={props.id} placeholder={props.min} onChange={props.onChange}/>
                <Button text="Confirmar quantidade" className="confirmamount" buttonAction={props.buttonAction===1?addToCart:updateCart}/>
            </div>
        </div>
    )
}

export default InputNum