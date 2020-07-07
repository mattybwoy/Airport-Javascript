class Airport {

    constructor() {
       this.hangar = [];
       this.capacity = 3;
     };

  land(plane) {
    if (this.planes().length >= this.maximum()) {
      throw new Error('Airport full');
    }
    this.hangar.push(plane)
  };
  planes() {
    return this.hangar
  }
  takeOff(plane) {
    this.hangar.pop(plane);
  };
  maximum() {
    return this.capacity;
  }
};