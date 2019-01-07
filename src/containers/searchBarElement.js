import { connect } from 'react-redux'
import { searchInItems } from '../actions/index'
import SearchInItems from '../components/searchInItems.js'

const mapStateToProps = state => {
    console.log("state in searchBarElement container")
    return {
        searchVal: state.searchVal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearch: event => {
            console.log("on search div clciked function called", event.target.value);
            dispatch(searchInItems(event.target.value))
        }
    }
}

const SearchBarElement = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchInItems)

export default SearchBarElement