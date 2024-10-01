export function MarkdownParser(userInput = "# Testing Testing") { 
    const symbols = /[\#|\~]/;  
    console.log(userInput)

    let isNull = userInput.match(symbols);

    if(!isNull) return;



    let supportedSymbols = {
        '#': (cont) => (<h1>{cont}</h1>),
        '##': (cont) => (<h2>{cont}</h2>),
        '###': (cont) => (<h3>{cont}</h3>),
        '#####': (cont) => (<h4>{cont}</h4>),
        '######': (cont) => (<h5>{cont}</h5>)
    }

    if(userInput.length < 6) return;
    
    //console.log(content);
    //let [prefix, content] = userInput.split(' ', 2);
    //console.log(userInput.slice(userInput.indexOf(' ')))
    let prefix = userInput.slice(0, userInput.indexOf(' '));
    let content = userInput.slice(userInput.indexOf(' '));
    if(content.length === 0) return;
    console.log(`prefix: ${prefix}`);
    console.log(`content: ${content}`);
    //const regex = /\#{1,5}/;
    //return regex.
    //match

    return supportedSymbols[prefix](content);
}