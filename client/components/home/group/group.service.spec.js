'use strict';

describe('Service: Group', function () {

  // load the service's module
  beforeEach(module('puppyGramApp'));

  // instantiate service
  var group;
  beforeEach(inject(function (_Group_) {
    group = _Group_;
  }));

  it('should do something', function () {
    expect(!!group).toBe(true);
  });

});
