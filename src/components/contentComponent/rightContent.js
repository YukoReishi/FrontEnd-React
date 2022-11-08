
const Right = () => {

    const handleClick = () => {
        console.log("Hii Rajasekhar")
    }

    const handleClickPrint = (name) => {
        console.log("Hii " + name)
    }

    return (
        <div className="right">

            <p>This is Right Content</p>
            <button onClick={handleClick}>Submit</button>

            <button onClick={() => {
                handleClickPrint("Sandeep")
            }}>Print</button>
        </div>
      );
}
 
export default Right