
export default function ClueDisplay(props){
    return(
        <>
        <h1>{props.category} for {props.value}</h1>
        <h2>{props.clue}</h2>
        </>
    )
}