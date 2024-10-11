const button = document.querySelector("btn")

let mode = 'Dark'
  btn.addEventListener('click',() =>{
   if (mode === 'Dark'){
     mode = 'Light'
     document.body.classList.add('dark');
     btn.style.backgroundColor ="black"
   }else{
     mode = 'Dark'
     document.body.classList.remove('dark')
     btn.style.backgroundColor =" rgb(0, 129, 250)"
   }
  })
