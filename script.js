let indice = 0
let confirmUrl = "^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?"

function save() {
  let name = document.querySelector("input[name='name']").value
  let email = document.querySelector("input[name='email']").value
  let nave = document.querySelector("input[name='nave']").value
  let cargo = document.querySelector("input[name='cargo']").value

  if(name && email && nave && cargo != ""){
    let remove = document.createElement("button")
    remove.type = "button"
    remove.setAttribute("id", "remove-button"+indice)
    remove.setAttribute("onclick", "removeRow(this)")
  
    let i = document.createElement("i")
    i.setAttribute("class", "bi bi-trash")
  
    let tbody = document.getElementById("record-info")
  
    let row = document.createElement("tr")
    row.setAttribute("id", indice)
  
    let newName = document.createElement("td")
    let newEmail = document.createElement("td")
    let newNave = document.createElement("td")
    let newCargo = document.createElement("td")
    let NewRemove = document.createElement("td")
  
    newName.innerText = name
    newEmail.innerText = email
    newNave.innerText = nave
    newCargo.innerText = cargo
    NewRemove = remove
  
    tbody.appendChild(row)
    document.getElementById(indice).appendChild(newName) 
    document.getElementById(indice).appendChild(newEmail) 
    document.getElementById(indice).appendChild(newNave) 
    document.getElementById(indice).appendChild(newCargo)  
    document.getElementById(indice).appendChild(NewRemove)
    document.getElementById("remove-button"+indice).appendChild(i) 
  
    indice += 1

    ClearFormRecord()
  }
  else{
    if(name == ""){
      alert("Digite o seu nome para continuar")
      document.getElementById("name").focus()
    }
    if(email == ""){
      alert("Digite o seu email para continuar")
      document.getElementById("email").focus()
    }
    if(nave == ""){
      alert("Digite o nome da sua nave para continuar")
      document.getElementById("nave").focus()
    }
    if(cargo == ""){
      alert("Digite o seu cargo para continuar")
      document.getElementById("cargo").focus()
    }
  }  
}

function removeRow(button){
  let removeInfo = button.parentNode
  document.getElementById("record-info").removeChild(removeInfo)
}

function ClearFormRecord(){
  document.querySelector("input[name='name']").value = ""
  document.querySelector("input[name='email']").value = ""
  document.querySelector("input[name='nave']").value = ""
  document.querySelector("input[name='cargo']").value = ""
}

function ActiveForm(){
  let cardAdd = document.getElementById("add-nave")
  cardAdd.style.display = "block"
  document.querySelector("input[name='nameNave']").value = ""
  document.querySelector("input[name='urlNave']").value = ""
  document.querySelector("input[name='descriptionNave']").value = ""
}

function RemoveForm(){
  let cardAdd = document.getElementById("add-nave")
  cardAdd.style.display = "none"
}

function SalvarNave(){
  let nameNave = document.querySelector("input[name='nameNave']").value
  let urlNave = document.querySelector("input[name='urlNave']").value
  let descriptionNave = document.querySelector("input[name='descriptionNave']").value

  if(nameNave && urlNave && descriptionNave != ""){
    let divNave = document.createElement("div")
    divNave.setAttribute("class", "w3-panel w3-card-4")
    divNave.setAttribute("id", "card"+indice)
    divNave.setAttribute("style", "width: 98%")
  
    let h = document.createElement("h3")
  
    let img = document.createElement("img")
    img.src = urlNave
    img.alt = nameNave
  
    let p = document.createElement("p")
  
    h.innerText = nameNave
    p.innerText = descriptionNave
  
    document.getElementById("cards").appendChild(divNave)
    document.getElementById("card"+indice).appendChild(h)
    document.getElementById("card"+indice).appendChild(img)
    document.getElementById("card"+indice).appendChild(p)
  
    indice += 1
  
    RemoveForm()
  }
  else{
    if(nameNave == ""){
      alert("Digite o nome da nave para continuar")
      document.getElementById("nameNave").focus()
    }
    if(urlNave == ""){
      alert("Cole ou digite a url da nave para continuar")
      document.getElementById("urlNave").focus()
    }
    if(descriptionNave == ""){
      alert("Faça uma breve descrição da nave para continuar")
      document.getElementById("descriptionNave").focus()
    }
  }  
}

function toggleIn() {
  let linksToggle = document.getElementById("content-links-toggle")
    linksToggle.style.display = "flex" 
}

function toggleOut() {
  let linksToggle = document.getElementById("content-links-toggle")
    linksToggle.style.display = "none" 
}