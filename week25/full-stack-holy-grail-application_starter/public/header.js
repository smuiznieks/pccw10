function Header(props){
    return (<>
        <header>
            <PlusMinus section="header" handle={props.handle}/>
            <div className="section">Header:{props.data.header1}</div>
            <Data data={props.data}/>
        </header>
    </>);
}


