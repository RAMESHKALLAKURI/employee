let form=document.getElementById("form");
let container=document.getElementById("container");
let onsubmitform=(event)=>{
    event.preventDefault();
    let employee={
        name:event.target.name.value,
        Employeeid:event.target.Employeeid.value,
        salary:event.target.salary.value,
    }
    console.log(employee);
}

function addemployerecord(employee){
    let record=document.createElement("tr");
    for(let key in employee){
        let cell=document.createElement("td");
        cell.innerText=employee[key];
        record.appendChild(cell);
    }
    container.appendChild(record);
    console.log(record);

}
form.addEventListener("submit",onsubmitform);