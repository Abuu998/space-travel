import SubHeading1 from "../text/SubHeading1"
import SubHeading2 from "../text/SubHeading2"


function Coordinates({ label="", data="", className="", ...props }) {
    return (
        <div
            className={`inline-block text-center sm:text-start ${className}`}
            {...props}
        >
            <SubHeading2>{label}</SubHeading2>
            <SubHeading1 className="text-white mt-2">{data}</SubHeading1>
        </div>
    )
}
export default Coordinates