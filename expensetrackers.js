let forms=document.getElementById('form1');

let ulist=document.getElementById('item-lister');

forms.addEventListener("submit",expenser);
 
function expenser(e){
  e.preventDefault();
 
let amount=document.getElementById('amounts').value;

let description=e.target.descriptions.value;
let catogory=e.target.catogories.value;
let li=document.createElement('li');
li.appendChild(document.createTextNode(`${amount}-${description}-${catogory}`));
let butn1=document.createElement('button');

butn1.appendChild(document.createTextNode('Delete Expense'));
let butn2=document.createElement('button');

butn2.appendChild(document.createTextNode('Edit Expense'));
li.appendChild(butn1);
li.appendChild(butn2);

ulist.appendChild(li);

const obj={
  Amounts:amount,
  Descriptions:description,
  Catogories:catogory  
}
let myobj=JSON.stringify(obj);
localStorage.setItem(amount,myobj);
butn1.addEventListener('click',function(e){
    ulist.removeChild(e.target.parentElement);
    localStorage.removeItem(obj.Amounts);
});
butn2.addEventListener('click',function(e){
    
    localStorage.removeItem(obj.Amounts);
    document.getElementById('amounts').value=obj.Amounts;
    document.getElementById('description').value=obj.Descriptions
    document.getElementById('catogory').value=obj.Catogories
});


}