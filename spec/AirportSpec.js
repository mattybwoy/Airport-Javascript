describe('Airport', function () {
  var airport;
  var plane;
  beforeEach(function () {
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });
  describe('land', function () {
    it('has 1 plane when landed', function () {
      airport.land(plane);
      expect(airport.planes()).toEqual([plane]);
    });
  });
  describe('take-off', function () {
    it('should take-off a plane', function () {
      airport.land(plane)
      airport.takeOff(plane)
      expect(airport.planes()).toEqual([]);
    });
  });
    describe('planes', function () {
      it('has no planes when new instance created', function () {
        expect(airport.planes()).toEqual([]);
      });
    });
    describe('maximum', function () {
      it('raises error when maximum hangar capacity is reached', function () {
        airport.land(plane = new Plane());
        airport.land(plane = new Plane());
        airport.land(plane = new Plane());
        expect(function(){ airport.land(plane);}).toThrowError('Airport full');
      });
    });
});