import React from 'react'

class SearchInItems extends React.Component {
    constructor(props) {
        super(props)
        console.log("props in searcInItems class defined", props)
    }
    render() {
        return (
            <div>
                {/* <p onClick={() => this.props.onSearch(searchVal)}>click this to detect onSearch func in container</p> */}
                {/* <input type="text" value = "" name="txt" onChange={(e) => {
        console.log("e val", e.target.value)
        searchVal = e.target.value
        onSearch(e.target.value)}} /> */}

                <input type="text" onChange={(event) => this.props.onSearch(event)} />
            </div>
        )
    }
}

// const SearchInItems = ({ searchVal, onSearch }) => (
//     <div><p onClick={() => onSearch(searchVal)}>click this to detect onSearch func in container</p>
//     {/* <input type="text" value = "" name="txt" onChange={(e) => {
//         console.log("e val", e.target.value)
//         searchVal = e.target.value
//         onSearch(e.target.value)}} /> */}

//     <input type="text" onChange={(event) => onSearch(event)} />
//     </div>
// )

export default SearchInItems