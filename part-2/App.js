const App = () => (
    <div>
        <Tweet name="GossipGurl" date="JUST NOW" msg="I told you so!"/>
        <Tweet name="JessTheBest" date="1 min ago" msg="OMG Derrik is such a LOSER!"/>
        <Tweet name="Derrik" date="1 hr ago" msg="I am the GOAT"/>
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));