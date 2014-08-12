'use strict';

describe('Service: pet', function () {

  // load the service's module
  beforeEach(module('puppyGramApp'));

  // instantiate service
  var pet;
  beforeEach(inject(function (_pet_) {
    pet = _pet_;
  }));

  it('should do something', function () {
    expect(!!pet).toBe(true);
  });

});
