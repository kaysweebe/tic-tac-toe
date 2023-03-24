interface SquareProps {
    value: string,
    onSquareClick: any
}

const Square = (props: SquareProps): JSX.Element => {
    const {value, onSquareClick} = props

    return (
        <button 
            className="square"
            onClick={onSquareClick}
        >
            {value}
        </button>
    )
}

export default Square;