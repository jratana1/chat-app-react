function Winner(props){
    return (
        <strong className="winner" id="winner" style = {{visibility: "hidden"}}>{props.winner} is the winner!!!</strong>
    )
}

export default Winner