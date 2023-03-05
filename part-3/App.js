const App = () => {
    return (
        <div>
            <Person name="Old McDonald" age={78} hobbies={["derping", "herping", "slurping"]}/>
            <Person name="YoungBoi" age={14} hobbies={["reading", "reading more", "reading EVEN MORE"]}/>
            <Person name="MidLifeCrisis" age={45} hobbies={["financing expensive cars", "marrying exotic dancers", "disregarding child support"]}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));