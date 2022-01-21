import Button from './Button'
import './css.css'

function InputNum(props) {

    function addToCart(){
        if (props.value > 0){
            let toSum = props.cart.find(product => props.id === product.id)
            if (toSum)
                toSum.amount += parseInt(props.value);
            else
                props.cart.push({
                    id: props.id, 
                    name: props.name, 
                    amount: parseInt(props.value),
                    nutritions: {
                        calories: props.nutrition.calories,
                        carbohydrates: props.nutrition.carbohydrates,
                        fat: props.nutrition.fat,
                        protein: props.nutrition.protein,
                        sugar: props.nutrition.sugar
                    }
                });
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
            <ul className="prod-content">
                <li>Calories: {props.nutrition.calories}</li>
                <li>Carbohydrates: {props.nutrition.carbohydrates}</li>
                <li>Fat: {props.nutrition.fat}</li>
                <li>Protein: {props.nutrition.protein}</li>
                <li>Sugar: {props.nutrition.sugar}</li>
            </ul>
            <div className='modal-row'>
                <input type="number" value={props.value} min={props.min} id={props.id} placeholder={props.min} onChange={props.onChange} autoFocus/>
                <Button text="Confirm Amount" className="confirmamount" buttonAction={props.buttonAction===1?addToCart:updateCart}/>
            </div>
        </div>
    )
}

export default InputNum