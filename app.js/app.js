'use strict';

// const parentElement = document.getElementById('Salmon Cookies');
let seattle = {
  name:'Seattle',
  mincus:23,
  maxcus:65,
  avgsale:6.3,
  hour:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  gitCusNum: function(){

    return Math.ceil(getRandomInt(this.mincus,this.maxcus)*this.avgsale);
  },


  render: function(){
    const parentElement = document.getElementById('Salmon-Cookies');


    let articleElement=document.createElement('article');
    parentElement.appendChild(articleElement);

    let h2Element=document.createElement('h2');
    h2Element.textContent=this.name;
    articleElement.appendChild(h2Element);

    let ulElement=document.createElement('ul');
    h2Element.appendChild(ulElement);
    let total=0;
    for(let i=0;i<this.hour.length;i++){
      let liElement=document.createElement('li');
      let cooki=this.gitCusNum();
      liElement.textContent=this.hour[i]+': '+cooki+' cookies';
      total=total+cooki;
      ulElement.appendChild(liElement);
      if (i===13){
        let liElement=document.createElement('li');
        liElement.textContent='total: '+total+' cookies';
        ulElement.appendChild(liElement);
      }
    }





  },

};

let tokyo = {
  name:'Tokyo',
  mincus:3,
  maxcus:24,
  avgsale:1.2,
  hour:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  gitCusNum: function(){

    return Math.ceil(getRandomInt(this.mincus,this.maxcus)*this.avgsale);
  },


  render: function(){
    const parentElement = document.getElementById('Salmon-Cookies');


    let articleElement=document.createElement('article');
    parentElement.appendChild(articleElement);

    let h2Element=document.createElement('h2');
    h2Element.textContent=this.name;
    articleElement.appendChild(h2Element);

    let ulElement=document.createElement('ul');
    h2Element.appendChild(ulElement);
    let total=0;
    for(let i=0;i<this.hour.length;i++){
      let liElement=document.createElement('li');
      let cooki=this.gitCusNum();
      liElement.textContent=this.hour[i]+': '+cooki+' cookies';
      total=total+cooki;
      ulElement.appendChild(liElement);
      if (i===13){
        let liElement=document.createElement('li');
        liElement.textContent='total: '+total+' cookies';
        ulElement.appendChild(liElement);
      }
    }





  },

};




let dubai = {
  name:'Dubai',
  mincus:11,
  maxcus:38,
  avgsale:3.7,
  hour:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  gitCusNum: function(){

    return Math.ceil(getRandomInt(this.mincus,this.maxcus)*this.avgsale);
  },


  render: function(){
    const parentElement = document.getElementById('Salmon-Cookies');


    let articleElement=document.createElement('article');
    parentElement.appendChild(articleElement);

    let h2Element=document.createElement('h2');
    h2Element.textContent=this.name;
    articleElement.appendChild(h2Element);

    let ulElement=document.createElement('ul');
    h2Element.appendChild(ulElement);
    let total=0;
    for(let i=0;i<this.hour.length;i++){
      let liElement=document.createElement('li');
      let cooki=this.gitCusNum();
      liElement.textContent=this.hour[i]+': '+cooki+' cookies';
      total=total+cooki;
      ulElement.appendChild(liElement);
      if (i===13){
        let liElement=document.createElement('li');
        liElement.textContent='total: '+total+' cookies';
        ulElement.appendChild(liElement);
      }
    }





  },

};


let paris = {
  name:'Paris',
  mincus:20,
  maxcus:38,
  avgsale:2.3,
  hour:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  gitCusNum: function(){

    return Math.ceil(getRandomInt(this.mincus,this.maxcus)*this.avgsale);
  },


  render: function(){
    const parentElement = document.getElementById('Salmon-Cookies');


    let articleElement=document.createElement('article');
    parentElement.appendChild(articleElement);

    let h2Element=document.createElement('h2');
    h2Element.textContent=this.name;
    articleElement.appendChild(h2Element);

    let ulElement=document.createElement('ul');
    h2Element.appendChild(ulElement);
    let total=0;
    for(let i=0;i<this.hour.length;i++){
      let liElement=document.createElement('li');
      let cooki=this.gitCusNum();
      liElement.textContent=this.hour[i]+': '+cooki+' cookies';
      total=total+cooki;
      ulElement.appendChild(liElement);
      if (i===13){
        let liElement=document.createElement('li');
        liElement.textContent='total: '+total+' cookies';
        ulElement.appendChild(liElement);
      }
    }




  },

};

let lima = {
  name:'Lima',
  mincus:2,
  maxcus:16,
  avgsale:4.6,
  hour:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  gitCusNum: function(){

    return Math.ceil(getRandomInt(this.mincus,this.maxcus)*this.avgsale);
  },


  render: function(){
    const parentElement = document.getElementById('Salmon-Cookies');


    let articleElement=document.createElement('article');
    parentElement.appendChild(articleElement);

    let h2Element=document.createElement('h2');
    h2Element.textContent=this.name;
    articleElement.appendChild(h2Element);

    let ulElement=document.createElement('ul');
    h2Element.appendChild(ulElement);
    let total=0;
    for(let i=0;i<this.hour.length;i++){
      let liElement=document.createElement('li');
      let cooki=this.gitCusNum();
      liElement.textContent=this.hour[i]+': '+cooki+' cookies';
      total=total+cooki;
      ulElement.appendChild(liElement);
      if (i===13){
        let liElement=document.createElement('li');
        liElement.textContent='total: '+total+' cookies';
        ulElement.appendChild(liElement);
      }
    }



  },

};






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
