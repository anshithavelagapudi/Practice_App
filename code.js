function code()
{
     const Total=parseFloat(document.querySelector('#field').value)
     const Rate=parseFloat(document.querySelector('#rate').value)
     console.log(Rate);
     const Tip=Total*(Rate/100)
     const TaxRate=5.5
     const Tax=Total*(TaxRate/100)
     const GrandTotal=Total+Tip+Tax;
     document.querySelector('#tip').innerHTML=`$${Tip.toFixed(2)}`
     document.querySelector('#Tax').innerHTML=`$${Tax.toFixed(2)}`
     document.querySelector('#Total').innerHTML=`$${GrandTotal.toFixed(2)}`
}
     document.querySelector('#button').addEventListener('click',code)
