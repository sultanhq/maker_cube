(function(exports) {

  function updateClock(clock) {
    clock.innerHTML = '<span id="clock">' + new Date().toLocaleTimeString() + '</span>';
  }

  exports.updateClock = updateClock;

}(this));
