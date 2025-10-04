const txtBox=document.getElementById('txtbox1');
const ulList=document.getElementById("list");
function addTask()
{   
    if(txtBox.value==''){
      alert("you must write somthing");
    }
    else{
      let li=document.createElement("li");
      li.innerHTML=txtBox.value;
      ulList.appendChild(li);
      let span=document.createElement("span");
      span.innerHTML="\u00d7";
      li.appendChild(span);
    }
  txtBox.value='';
  saveData();
}

ulList.addEventListener("click",function(e){

  if(e.target.tagName=="LI")
    e.target.classList.toggle("checked");
  else if(e.target.tagName=="SPAN")
    e.target.parentElement.remove();
  
},false);

function saveData()
{
  window.localStorage.setItem("data",ulList.innerHTML)
}

function showData()
{
  ulList.innerHTML= window.localStorage.getItem("data");
}

showData();