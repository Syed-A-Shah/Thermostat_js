describe('thermostat ', function(){
  var t

  beforeEach(function(){
    t = new Thermostat()
  }
)

  it('starts the temperature with a default of 20', function(){
    expect(t.temperature).toBe(20)
  });

  it('can increase the temperature by one', function(){
    t.tempu()
    console.log(t.tempu)
    expect(t.temperature).toBe(21)
    console.log(t.temperature)
  });

  it('can decrease the temperature by one', function(){
    t.tempd()
    console.log(t.tempd)
    expect(t.temperature).toBe(19)
    console.log(t.temperature)
  });
  it('has a minimum temperature of 10', function(){
    for(var i = 0; i < 11; i++){
      t.tempd()
    }
    expect(t.temperature).toBe(10)
  });

});
