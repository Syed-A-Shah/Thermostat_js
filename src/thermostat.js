"use strict"

function Thermostat() {
  this.temperature = 20;
  this.mintemp = 10;
  this.maxTemperature = 25;
  this.powerSavingMode = true;
}
Thermostat.prototype.powerSavingModeStatus = function() {
  if(this.powerSavingMode){
    return "ON"
  } else{
    return "OFF"
  }
};
Thermostat.prototype.currentTemp = function() {
  return this.temperature;
};

Thermostat.prototype.tempu = function(){
  if(this.temperature < this.maxTemperature){
      this.temperature ++;
  }};

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
  }};
Thermostat.prototype.reset = function(){
  this.temperature = 20
};
Thermostat.prototype.energyUsage = function(){
  if(this.temperature < 18){
    return "Low Usage"
  } else if(this.temperature < 25 && this.temperature >= 18){
    return "Medium Usage"
  } else { return "High Usage" }
}
