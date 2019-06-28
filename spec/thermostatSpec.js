describe('Thermostat ', function(){
  var t

  beforeEach(function(){
    t = new Thermostat()
  });

  it('starts the temperature with a default of 20', function(){
    expect(t.temperature).toBe(20)
  });

  it('can increase the temperature by one', function(){
    t.tempu()
    expect(t.temperature).toBe(21)
  });

  it('can decrease the temperature by one', function(){
    t.tempd()
    expect(t.temperature).toBe(19)
  });

  it('has a default minimum temperature of 10', function(){
    for(var i = 0; i < 11; i++){
      t.tempd()
    }
    expect(t.temperature).toBe(10)
  });

  it('has a max temp of 25 when power saving mode is on', function(){
    expect(t.powerSavingMode).toBe(true);
    expect(t.maxTemperature).toBe(25);
  });

  it('has a max temp of 32 when power saving mode is off', function(){
    t.powerSavingSwitch()
    expect(t.powerSavingMode).toBe(false);
    expect(t.maxTemperature).toBe(32);
  });

  it('has powerSavingMode on by default', function(){
  expect(t.powerSavingMode).toBe(true);
  });

  it('reset function changes temperature back to 20', function(){
    t.tempd()
    t.reset()
    expect(t.temperature).toBe(20)
  });

  it('returns low-usage when temp is below 18', function(){
    for(i = 0; i < 4; i++){
      t.tempd()
    }
    expect(t.energyUsage()).toBe("Low Usage")
  });

  it('returns medium-usage when temp is above 18 and below 25', function(){
    expect(t.energyUsage()).toBe("Medium Usage")
  });

  it('returns high-usage when temp is above 25', function(){
    for(i = 0; i < 6; i++){
      t.tempu()
    }
    expect(t.energyUsage()).toBe("High Usage")
  });

});
