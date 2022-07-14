//html const that the api is gonna use
const BRL = document.querySelector('#BRLPrice');
const USD = document.querySelector('#USDPrice');
const EUR = document.querySelector('#EURPrice');

// make the api request the prices

async function BitcoinPrice (time) {
     setTimeout(function(){
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false")
		.then( res => {
            BRL.innerHTML = res.data[0].current_price;})
        .then(BitcoinPrice(4000)) //recursion to make the api request continun
        },time)
}
BitcoinPrice(0) // api request right when the page load 
