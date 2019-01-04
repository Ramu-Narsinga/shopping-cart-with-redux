//this code is used to update state on add to cart click, that props for cart list are used in itemCartElement function

import { connect } from 'react-redux'
import ItemsList from '../components/itemsList'
import { addToCart } from '../actions';

const mapStateToProps = state => {
    console.log("state in mapStateToProps", state)
    return {
        shoppingItemsData: state.shoppingItemsData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onItemClick: item => {
            console.log("about to dispatch about item add to cart click", item)
            dispatch(addToCart(item));
        }
    }
}

const ItemsCartList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemsList)

export default ItemsCartList