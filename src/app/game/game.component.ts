import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

deviation: number;
  noOfTries: number;
  original: number;
  guess: number;
  score: number;
  highScore: number
  constructor(){
    this.initializeGame();
    this.score = 0;
  }

  initializeGame(){
    var e,fc,gc;
    e = document.getElementById("error");
    fc = document.getElementById("form-container");
    gc = document.getElementById("guesses-container"); 
    this.score = this.score;
    if(this.noOfTries==1 && this.deviation!=0){
      if (confirm("Are You A Fucking Coward?") == true){
        this.noOfTries = 0;
        this.original = Math.floor((Math.random() * 10) + 1);
        this.guess = null;
        this.deviation = null;
        e.className = e.className.replace('show','hide');
      }
    }
    else if(this.noOfTries==2 && this.deviation!=0){
      if (confirm("Are You A Fucking Coward?") == true){
        this.noOfTries = 0;
        this.original = Math.floor((Math.random() * 10) + 1);
        this.guess = null;
        this.deviation = null;
        e.className = e.className.replace('show','hide');
      }
    }
    else if(this.noOfTries==0 && this.deviation!=0){
      this.noOfTries = 0;
        this.original = Math.floor((Math.random() * 10) + 1);
        this.guess = null;
        this.deviation = null;
        e.className = e.className.replace('show','hide');
    }
    else if(this.noOfTries==3 && this.deviation!=0){
      this.noOfTries = 0;
        this.original = Math.floor((Math.random() * 10) + 1);
        this.guess = null;
        this.deviation = null;
      fc.className = fc.className.replace('hide','show');
   
    e.className = e.className.replace('show','hide');
  }
  
    
    else {
      this.noOfTries = 0;
        this.original = Math.floor((Math.random() * 10) + 1);
        this.guess = null;
        this.deviation = null;
    }
  }
  verifyGuess(){
    
    var e,fc,gc,el,gl,gh,s,d;
    e = document.getElementById("error");
    fc = document.getElementById("form-container");
    gc = document.getElementById("guesses-container"); 
    el = document.getElementById("error-limit"); 
    gl = document.getElementById("get-lower"); 
    gh = document.getElementById("get-higher"); 
    s = document.getElementById("success");
    d = document.getElementById("danger");
    if(document.forms['guessForm'].guessField.value === ""){
      this.deviation = null;
       e.className = e.className.replace('hide','show');
       el.className = el.className.replace('show','hide');

    }
    else if(this.guess<1 || this.guess>10){
      el.className = el.className.replace('hide','show');
    }
    
    
    
    
    
    else{
      this.deviation = this.original - this.guess;
    this.noOfTries = this.noOfTries + 1;
    e.className = e.className.replace('show','hide');
       el.className = el.className.replace('show','hide');
    if(this.noOfTries == 1 && this.deviation == 0){
      this.score = this.score + 5;
    }
    else if(this.noOfTries == 2 && this.deviation == 0){
      this.score = this.score + 3;
    }
    else if(this.noOfTries == 3 && this.deviation == 0){
      this.score = this.score + 1;
    }

    else if(this.noOfTries==3 && this.deviation!=0){
      fc.className = fc.className.replace('show','hide');
      this.score = this.score - 1;
    }
    }
  }
  

  ngOnInit() {
  }

}
