describe('Airport', function () {
  var airport;
  var plane;
  beforeEach(function () {
    airport = new Airport();
    plane1 = new Plane();
  });
  describe('land', function () {
    it('has 1 plane when landed', function () {
      airport.land(plane1);
      expect(airport.planes()).toEqual([plane1]);
    });
  });
  describe('take-off', function () {
    it('should take-off a plane', function () {
      airport.land(plane1)
      airport.takeOff(plane1)
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
        expect(function(){ airport.land(plane1);}).toThrowError('Airport full');
      });
    });
});