const form= document.querySelector("form")

//this usecase will give you empty

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height= parseInt(document.querySelector("#height").value)
    const weight= parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#results")
    

    if(height=== '' || height<0 || isNaN(height)){
        result.innerHTML=`Please Gice me a valid Height ${height}1`
    }

    else if(weight=== '' || weight<0 || isNaN(weight)){
        result.innerHTML=`Please Gice me a valid weight ${weight}1`
    }
    else{
        
        const bmi= (weight / ( (height*height)/10000)).toFixed(2)

        result.innerHTML=`<span>${bmi}</span>`
        
    }

})
