'use strict';

describe('Service: Pet', function () {

  // load the service's module
  beforeEach(module('puppyGramApp'));

  // instantiate service
  var Pet;
  beforeEach(inject(function (_Pet_) {
    Pet = _Pet_;
  }));

  it('should do something', function () {
    expect(!!Pet).toBe(true);
  });

});
