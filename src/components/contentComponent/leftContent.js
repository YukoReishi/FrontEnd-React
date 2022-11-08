import { useState } from "react";

const Left = () => {

    const [age, setAge] = useState("35");
    const [name, setName] = useState("Sandeep")

    const handleClick = (e) => {
        setAge("25");
        setName("Rajasekhar");
    }

    return (
        <div className="left">
            <p>My name is {name} and {age} years old.</p>
            <button onClick={handleClick}>Print Age</button>
        </div>
      );
}
 
export default Left