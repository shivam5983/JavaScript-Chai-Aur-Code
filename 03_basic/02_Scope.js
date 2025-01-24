let a =300

if(true){
    let a =10
    const b= 20
    // console.log("Inner : ", a);
    
}

// console.log(a)


// ********************NESTED SCOPE*************************

function one(){
    const username="shivam"

    function two(){
        const website="Youtube"
        console.log(username);
    }
    // console.log(website);
    two()    
        
    
}

// one()

if(true){
    const username="Shiv"
    if(username=== "Shiv"){
        const website= "Youtube"
        console.log(username+website);
        
    }
    // console.log(website)   // scope ke andar hone chahiye variable tab hi woh asccess hoga

}
// console.log(username);


// ***************INTERESTING**************************************

addone() // isko aaya par rakh sakte hai aur yaha se bhi value aa jayega
function addone(num){
    return num+1
}


addTwo(4) // yaha par aise nhi kar skate kyoki yaha par function ko variable mei store kiye hai isiliye 

const addTwo= function (num){
    return num+2
}

