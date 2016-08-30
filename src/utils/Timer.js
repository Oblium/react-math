function createTimer(duration, cb, endcb, context) {
  let actualTime = 0;
  cb = context ? cb.bind(context) : cb;
  endcb = context ? endcb.bind(context) : endcb;
  var currInterval = window.setInterval(function(){
    const remaining = duration - actualTime++;
    cb(getFormattedTime(remaining));
    if (remaining === 0) {
      clearTimer(currInterval);
      endcb();
    }
  }, 1000);

  cb(getFormattedTime(duration));

  return currInterval;
}

function getFormattedTime(seconds) {
  return Math.floor(seconds/60) + ":" + ("0"+(seconds % 60)).slice(-2);
}

function clearTimer(timer) {
  window.clearInterval(timer);
}

export default {
  createTimer: createTimer
};
