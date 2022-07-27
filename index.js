let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")

console.log(leadsFromLocalStorage)


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
} else {
    console.log("No local storage data")
}



inputBtn.addEventListener("click", function() {

    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)

})

deleteBtn.addEventListener("dblclick", function(){
    myLeads = [];
    localStorage.clear();
    render(myLeads);
    
})




function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                    ${leads[i]}
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}




const emailBtn = document.getElementById("email-btn")

emailBtn.addEventListener("dblclick", function() {
    let emailAddress = prompt("Enter the email address to send the notes to:")
    const sendMail = () => {
        const link =
          "mailto:" + emailAddress +
          "?subject=" +
          encodeURIComponent("Lead Notes:") +
          "&body=" +
          encodeURIComponent(myLeads.join('\n'));
        window.location.href = link;
      };
      sendMail();
})

