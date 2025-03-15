import {useEffect, useState} from 'react'
import InputBox from "./components/InputBox.jsx";
import ApiCall from "./assest/ApiCall.js";

function App() {
    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState("usd")
    const [to, setTo] = useState("inr")
    const currencies_info = ApiCall(from)
    const options = Object.keys(currencies_info)
    const [exchangeAmount, setExchangeAmount] = useState(0)


    useEffect(() => {
        setExchangeAmount(currencies_info[to] * amount)
    },[amount,from,to,exchangeAmount,currencies_info])
    function swap(){
        setAmount(exchangeAmount)
        setExchangeAmount(amount)
        setFrom(to)
        setTo(from)
    }
  return (
    <div className={'h-screen w-screen bg-[#212121]  flex flex-col justify-center items-center  bg-cover bg-no-repeat'}
         style={{
             backgroundImage: `url('https://images.pexels.com/photos/2387819/pexels-photo-2387819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
         }}>
        <div className="flex bg-transparent backdrop-blur-md border-blue-100 border-2 flex-col  p-5 rounded-lg gap-3">
        <InputBox
            label= "from"
            amount={amount}
            current_currency={from}
            currencies_options = {options}
            onAmountChange= {(amount) => setAmount(amount) }
            onCurrencyChange = {(from) => setFrom(from)}

        />

            <div className=" ">
                <button
                    type="button"
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-md bg-black text-white p-2"
                    onClick={swap}
                >
                    swap
                </button>
            </div>


        <InputBox
            label="to"
            amount={exchangeAmount}
            current_currency={to}
            currencies_options  = {options}
            onCurrencyChange = {(to) => setTo(to)}
            disabled
        />

        </div>
      </div>
  )
}

export default App
