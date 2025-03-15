

function InputBox({
    amount ,
    current_currency,
    onCurrencyChange,
    currencies_options = [],
    onAmountChange,
    label,
    disabled = false,
                  })
{
    return (
        <div className={'flex bg-white gap-4 rounded h-fit w-fit justify-between items-center p-2'}>
            <div className={'flex flex-col gap-4'}>
                <label htmlFor="for" className={'text-[#6f6f6f]'}>{label}</label>
                <input type="number" id={'for'} className={'form-control   text-black'}
                disabled={disabled}
                value={amount}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}/>
            </div>
            <div className={'flex flex-col gap-4'}>
                <label htmlFor="currency_type" className={'text-[#6f6f6f]'}>Currency Type</label>
                <select
                    className={'form-control text-black'}
                value={current_currency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>

                    {currencies_options.map(opt => (
                    <option value={opt} key={opt}>
                        {opt}
                    </option>
                    ))}
                </select>
            </div>
        </div>
    )
}
export  default  InputBox