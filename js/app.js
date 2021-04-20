'use strict';


let hourofwork=['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
const parentElement = document.getElementById('Salmon-Cookies');
let tableElement = document.createElement('table');
parentElement.appendChild(tableElement);
let trfElement = document.createElement('tr');
tableElement.appendChild(trfElement);
let alltotal=[0,0,0,0,0,0,0,0,0,0,0,0,0,0];
function Branch(name, mincus, maxcus, avgsale, sales) {

  this.name = name;
  this.mincus = mincus;
  this.maxcus = maxcus;
  this.avgsale = avgsale;
  this.sales = sales;
  this.hour = hourofwork;

}

Branch.prototype.gitCusNum=function()
{
  return Math.ceil(getRandomInt(this.mincus, this.maxcus) * this.avgsale);

};
Branch.prototype.render=function(){let total = 0;
  for(let i=0;i<hourofwork.length;i++){

    this.sales[i]=this.gitCusNum();
    total=total+this.sales[i];
    alltotal[i]=alltotal[i]+this.sales[i];


  }


  let trElement = document.createElement('tr');
  tableElement.appendChild(trElement);

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
  let thElement = document.createElement('th');
  thElement.textContent = 'location';
  trfElement.appendChild(thElement);

  for (let i = 0; i < hourofwork.length; i++) {

    let thElement = document.createElement('th');
    thElement.textContent = hourofwork[i];
    trfElement.appendChild(thElement);



  }
  thElement = document.createElement('th');
  thElement.textContent = 'location total';
  trfElement.appendChild(thElement);
}

function footer(){
  let trElement = document.createElement('tr');
  tableElement.appendChild(trElement);
  let tdElement = document.createElement('td');
  tdElement.textContent = 'total';
  trElement.appendChild(tdElement);
  let finalTotal=0;
  for (let i = 0; i < hourofwork.length; i++) {
    let tdElement = document.createElement('td');
    tdElement.textContent = alltotal[i];
    trElement.appendChild(tdElement);
    finalTotal=finalTotal+alltotal[i];


  }
  tdElement = document.createElement('td');
  tdElement.textContent = finalTotal;
  trElement.appendChild(tdElement);
}



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

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

