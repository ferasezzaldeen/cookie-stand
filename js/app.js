'use strict';


let hourofwork=['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
const parentElement = document.getElementById('Salmon-Cookies');
let tableElement = document.createElement('table');
parentElement.appendChild(tableElement);

let alltotal=[0,0,0,0,0,0,0,0,0,0,0,0,0,0];

let newbrach = document.getElementById('newBranch');
let textar=[];

function Branch(name, mincus, maxcus, avgsale, sales) {

  this.name = name;
  this.mincus = mincus;
  this.maxcus = maxcus;
  this.avgsale = avgsale;
  this.sales = sales;
  this.hour = hourofwork;
  textar.push(this);
}

Branch.prototype.gitCusNum=function()
{


  for(let i=0;i<hourofwork.length;i++){

    this.sales[i]=Math.ceil(getRandomInt(this.mincus, this.maxcus) * this.avgsale);
    alltotal[i]=alltotal[i]+this.sales[i];


  }



};
Branch.prototype.render=function(){


  let trElement = document.createElement('tr');
  tableElement.appendChild(trElement);
  let total = 0;

  for (let i = -1; i < this.hour.length; i++) {

    if (i === -1) {
      let tdElement = document.createElement('td');
      tdElement.textContent = this.name;
      trElement.appendChild(tdElement);
    }
    else {
      let tdElement = document.createElement('td');
      tdElement.textContent = this.sales[i];
      trElement.appendChild(tdElement);
      total=total+this.sales[i];


    }

  }
  let tdElement = document.createElement('td');
  tdElement.textContent = total;
  trElement.appendChild(tdElement);

};


let seattle = new Branch('Seattle', 23, 65, 6.3, []);
let tokyo = new Branch('Tokyo', 3, 24, 1.2, []);
let dubai = new Branch('Dubai', 11, 38, 3.7, []);
let paris = new Branch('Paris', 20, 38, 2.3, []);
let lima = new Branch('Lima', 2, 16, 4.6, []);

function header(){
  let theadElement=document.createElement('thead');
  tableElement.appendChild(theadElement);
  let trElement = document.createElement('tr');
  theadElement.appendChild(trElement);
  let thElement = document.createElement('th');
  thElement.textContent = 'location';
  trElement.appendChild(thElement);

  for (let i = 0; i < hourofwork.length; i++) {

    let thElement = document.createElement('th');
    thElement.textContent = hourofwork[i];
    trElement.appendChild(thElement);



  }
  thElement = document.createElement('th');
  thElement.textContent = 'location total';
  trElement.appendChild(thElement);
}

function footer(){
  let tfootElement =document.createElement('tfoot');
  let trElement = document.createElement('tr');
  tableElement.appendChild(tfootElement);
  tfootElement.appendChild(trElement);
  let footerElement = document.createElement('td');
  footerElement.textContent = 'total';
  trElement.appendChild(footerElement);
  let finalTotal=0;
  for (let i = 0; i < hourofwork.length; i++) {
    let footerElement = document.createElement('td');
    footerElement.textContent = alltotal[i];
    trElement.appendChild(footerElement);
    finalTotal=finalTotal+alltotal[i];


  }
  footerElement = document.createElement('td');
  footerElement.textContent = finalTotal;
  trElement.appendChild(footerElement);
}



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
seattle.gitCusNum();
tokyo.gitCusNum();
dubai.gitCusNum();
paris.gitCusNum();
lima.gitCusNum();


seattle.render();
console.log(seattle);
tokyo.render();
console.log(tokyo);
dubai.render();
console.log(tokyo);
paris.render();
console.log(paris);
lima.render();
console.log(lima);
header();
footer();


newbrach.addEventListener('submit', eventbutton);

function eventbutton(event){
  event.preventDefault();
  let name= event.target.location.value;
  let mincus=event.target.mincustomer.value;
  let maxcus=event.target.maxcustomer.value;
  let avgsale=event.target.avgsale.value;
  let newBrach= new Branch(name,mincus,maxcus,avgsale,[]);
  console.log(textar);
  tableElement.innerHTML='';

  header();

  for(let i=0;i<textar.length-1;i++){

    textar[i].render();
  }

  newBrach.gitCusNum();
  newBrach.render();

  footer();


}


