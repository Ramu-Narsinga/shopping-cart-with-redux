import { connect } from 'react-redux'
import ItemsCart from '../components/cartItems'
import { removeFromCart } from '../actions';

const mapStateToProps = state => {
    console.log("state in mapStateToProps of cart element", state)
    return {
        shoppingCartItems: state.shoppingCartItems
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCartItemClick: (item, index) => {
            console.log("about to dispatch about cart item deletion", item, index)
            dispatch(removeFromCart(item, index));
        }
    }
}

const ItemsCartElement = connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemsCart)

export default ItemsCartElement