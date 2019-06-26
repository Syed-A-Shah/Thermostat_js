"use strict"

function Thermostat() {
  this.temperature = 20;
  this.mintemp = 10;
};

Thermostat.prototype.tempu = function(){
  this.temperature ++;
};
Thermostat.prototype.tempd = function(){
  if(this.temperature > this.mintemp){
    this.temperature --;
  }else {
    window.alert("You have reached the minimum temperature")
  }
};
