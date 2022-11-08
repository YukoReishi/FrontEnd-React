const MiddleContent = (props) => {
    return(
        <div className="middlecontent">
            <h2>Middle Content STARTS</h2>

            <h4>{props.name}</h4>
            <p>{props.company}</p>
            <p>{props.department}</p>

            <h2>Middle Content ENDS</h2>
        </div>
    )
}

export default MiddleContent;