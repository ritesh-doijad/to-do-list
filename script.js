const inputData=document.getElementById('input-box')
const add=document.getElementById('addBtn')
const list_container=document.getElementById('list-container')

add.addEventListener('click',(e)=>{
    e.preventDefault();
    let inputValue=inputData.value;
    if(inputValue==""){
        alert("enter your task")
    }
    else{
    let list=document.createElement('li');
    list.classList="task";
    let label=document.createElement('label')
    label.setAttribute("for",`${inputValue.replaceAll(" ", "")}`)
    let input=document.createElement('input');
    input.setAttribute("type","checkbox")
    input.setAttribute("id",`${inputValue.replaceAll(" ", "")}`)
    let para=document.createElement('p');
    para.innerHTML=`${inputValue}`;
    let icon=document.createElement('i');
    icon.classList="fa-solid fa-trash";
    list_container.appendChild(list);
    list.appendChild(label);
    label.appendChild(input);
    label.appendChild(para);
    list.appendChild(icon);
    console.log(list_container);
    label.addEventListener('click', () => {
        if (input.checked) {
            para.classList.add("cross");
        } else {
            para.classList.remove("cross");

        }
        
    });
     icon.addEventListener('click',()=>{
        list.remove();
     })
     
     inputData.value = ""; 
     saveData();
    }
    
})