const Person = ( {name, age, hobbies} ) => {
    let vote;
    age >= 18 ? vote = "please go vote!" : vote = "you must be 18";
    const nameSlice = name.slice(0, 6);
    return (
        <div>
            <p>Learn some information about this person</p>
            <p>Name: {nameSlice}  |  Age: {age}</p>
            <h3>{vote}</h3>
            <h4>Hobbies:</h4>
            <ul>{hobbies.map(t => <li>{t}</li>)}</ul>
        </div>
    )
}