const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="HappyFace!"/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));