const heading = React.createElement(
    "h1" ,
    {id : "parent"} ,[
    React.createElement(
        "h2" ,
        {id : "child"} ,[
        React.createElement("h1" ,{} ,"Hello React World , I am h1 Tag" ),
        React.createElement("h1" ,{} ,"Hello React World , I am h2 Tag" )]
        ),
        React.createElement(
        "h3" ,
        {id : "child"} ,[
        React.createElement("h1" ,{} ,"Hello React World , I am h1 Tag" ),
        React.createElement("h1" ,{} ,"Hello React World , I am h2 Tag" )]
        )
        ]);
    

    
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    
    root.render(heading);