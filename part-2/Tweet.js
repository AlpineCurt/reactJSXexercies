const Tweet = ({ name, date, msg }) => {
    return (
        <div>
            <span>{name}  :  {date}</span>
            <p>{msg}</p>
        </div>
    )
}