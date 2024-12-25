

{ 
let input = document.querySelector("#inputFilt");
let addBtn = document.querySelector("#add-btn");
let list = document.querySelector("#list");


addBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    if(input.value === ""){
        alert("inter value")
    } else{ 
        
        let div = document.createElement("div");
        div.id = "div";
        list.appendChild(div)
       
        let edit = document.createElement("button");
        edit.id = "edit"
        edit.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
        div.appendChild(edit);

        let remov = document.createElement("button");
        remov.id = "remov"
        remov.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
        div.appendChild(remov);

        let cros = document.createElement("button");
        cros.id = "cros"
        cros.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        div.appendChild(cros);


        let text = document.createElement("span");
        text.id = "text";
        text.style.display = "inlineBlock";
        text.textContent = input.value;
        div.appendChild(text)

       
        list.appendChild(div)

        input.value = "";
        input.focus();

        edit.addEventListener("click", (e)=>{
            e.preventDefault();
            let current = text.innerText;
           

            let input = document.createElement("input");
            input.type = "text";
            input.value = current;
            input.style.outline = 'none';
            input.id = "editinput";
            
            div.appendChild(input)
          

            
            input.focus();

            let saveBtn = document.createElement("button");
            saveBtn.innerHTML = `<i class="fa-solid fa-floppy-disk"></i>`;
            saveBtn.id = "save"
            div.appendChild(saveBtn)

            saveBtn.addEventListener("click", function(e){
                e.preventDefault();

                text.innerHTML = input.value;
                input.style.display = "none";
                saveBtn.style.display = "none";
                edit.disabled = false;
                
                
            })

          text.innerHTML = "";
          edit.disabled = true;
          
        })
        
        remov.addEventListener("click", function(e) {
            e.preventDefault();
            div.remove();
            divIput.remove();
        })

        cros.addEventListener('click', function(e){
            e.preventDefault();

            text.style.textDecoration = "line-through"

            let notCros = document.createElement("button");
            notCros.innerHTML = `<i class="fa-solid fa-rotate-right"></i>`;
            notCros.id = "notcros";
            cros.innerHTML = "";
            cros.appendChild(notCros)

            notCros.addEventListener("click", function(e){
                e.preventDefault();

                text.style.textDecoration = "none";
                cros.disabled = false;
                notCros.style.display = "none";
                cros.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
            
            })

            cros.disabled = true;
            
        })

    }

})
}




