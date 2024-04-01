let inputButton =document.querySelector('.input_text')
let list =document.querySelector('.list')
let deleteButton=document.querySelector('.button')
let arr =[]

inputButton.addEventListener('keypress', function(event){

    
    if (event.key === "Enter") {
        event.preventDefault();
        let a = inputButton.value
        list.innerHTML = ''
        arr.push(a)
        for (let  i= 0;  i< arr.length; i++) {
            list.innerHTML +=`<li>${arr[i]}</li>`
            controlButton(li,i)
        }
   }
   
    })

    function controlButton(li, i){
        let deleteButton=document.createElement("button")
        deleteButton.textContent = "Delete"
        deleteButton.classList.add("deleteButton")
        
    deleteButton.addEventListener('click',function(){
        arr.splice(i,1)
        list.removeChild(li)
    })

    }

   
   


    
    
    