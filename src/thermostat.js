"use strict"

function Thermostat() {
  this.temperature = 20;
  this.mintemp = 10;
  this.maxTemperature = 25;
  this.powerSavingMode = true;
}

Thermostat.prototype.tempu = function(){
  this.temperature ++;
}

Thermostat.prototype.tempd = function(){
  if(this.temperature > this.mintemp){
    this.temperature --;
  }};

Thermostat.prototype.powerSavingSwitch = function(){
  if(this.powerSavingMode) {
    this.powerSavingMode = false;
    this.maxTemperature = 32;
  } else {
    this.powerSavingmode = true;
    this.maxTemperature = 25;
  }
};
