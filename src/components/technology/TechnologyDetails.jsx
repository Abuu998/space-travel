import ForthHeading from "../text/ForthHeading"

function TechnologyDetails({ technology={}, className, ...props }) {
    return (
        <div
            className={`grid gap-4 ${className}`}
            {...props}
        >
            <ForthHeading className="tracking-widest">{technology?.name}</ForthHeading>
            <p>{technology?.description}</p>
        </div>
    )
}
export default TechnologyDetails