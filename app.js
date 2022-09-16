
let entries = document.getElementById('field')
let btn = document.getElementById('btnplus')
let list = document.getElementById('list')


btn.onclick = function(){
    //check if input are values and create p
    if(entries.value != ""){

        var paragraph = document.createElement('p')
    }
     
   //add value in paragraph p
   paragraph.innerText = entries.value;

   paragraph.classList.add('show')

   //show the list
   list.appendChild(paragraph)

   entries.value = ""

   paragraph.addEventListener('click' , function(){
      paragraph.classList.add('checked')
   })

   //remove value in thelist
   paragraph.addEventListener('dblclick', function(){
      list.removeChild(paragraph)

   })


}

