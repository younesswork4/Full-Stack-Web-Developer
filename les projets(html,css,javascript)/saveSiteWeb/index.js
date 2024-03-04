

let myLeads = []
let oldLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deletebtn=document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabbtn=document.getElementById("tab-btn")


if(leadsFromLocalStorage){
	myLeads = leadsFromLocalStorage
	render(myLeads)
}
tabbtn.addEventListener("click",function(){
	chrome.tabs.query({active:true,currentWindow:true},function(tabs){
		myLeads.push(tabs[0].url)
	    localStorage.setItem("myLeads",JSON.stringify(myLeads))
	    render(myLeads)
	})
	
})
deletebtn.addEventListener("dblclick",function(){
	localStorage.clear()
	myLeads=[]
	render(myLeads)
})

function render( Leads){


let listItems = " "
for(let i=0;i<Leads.length; i++){
	//ulEl.innerHTML += "<li>" + myLeads[i] +  "</li>"
	listItems += `
	<li>
	    <a target='_blank' href='${Leads[i]}'>
           ${Leads[i]}
	    </a>
	</li>
`

}
//3. Render the listItems inside the unordered list using ulEl.innerHTML
ulEl.textContent = listItems
}



inputBtn.addEventListener("click",function(){
	myLeads.push(inputEl.value)
	inputEl.value = " "
	localStorage.setItem("myLeads",JSON.stringify(myLeads))
	render(myLeads)
})
function renderLeads(){


let listItems = " "
for(let i=0;i<myLeads.length; i++){
	//ulEl.innerHTML += "<li>" + myLeads[i] +  "</li>"
	listItems += `
	<li>
	    <a target='_blank' href='${myLeads[i]}'>
           ${myLeads[i]}
	    </a>
	</li>
`

}
//3. Render the listItems inside the unordered list using ulEl.innerHTML
ulEl.innerHTML = listItems
}