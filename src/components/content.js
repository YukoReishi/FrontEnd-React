import Left from "./contentComponent/leftContent"
import Right from "./contentComponent/rightContent"
import MiddleContent from "./contentComponent/MiddleContent"

const content = () => {
    return (
        <div className="content">
            <Left />
            <MiddleContent name="Sandeep" company="Axis Bank" department="IT Deputy Manager"/>
            <MiddleContent name="Arun" company="Axis Bank" department="IT Deputy Manager"/>
            <MiddleContent name="Rajasekhar" company="Axis Bank" department="IT Deputy Manager"/>
            <Right />
        </div>
      );
}
 
export default content