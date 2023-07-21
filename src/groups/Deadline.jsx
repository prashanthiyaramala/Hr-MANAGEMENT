import Description from "../Components/Description"
import Date from "../Components/Date"

const Deadline = () => {
    return (
        <div className="subcontainer">
            <Description imgsrc={"assets/date.png"} text={"Deadline of the task"} />
            <Date date={"Thu,Apr 20,2023 11:58 AM"}/>
        </div>

    )
}

export default Deadline