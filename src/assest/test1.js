
function api(){
    let data;
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json`)
        .then(res => {
            console.log('Current response',res)
            return res.json()})
        .then(res1 => {
            data =  res1;
            console.log('Here is data',data)
        })

}

api()