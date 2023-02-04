/**
 * Throttle a method
 */
function Throttle(ms: any) {
  return function(target: any, key: any, descriptor: any) {
    const oldFunc = descriptor.value
    const newFunc = _throttle(oldFunc,ms)
    descriptor.value=function() {
      return newFunc.apply(this, arguments)
    }
  }
}

function _throttle(fn, ms): any {
  let timeout: any;
  function exec() {
    fn.apply()
  }
  function clear() {
    timeout == undefined ? null : clearTimeout(timeout)
  }
  if(fn !== undefined && ms !== undefined) {
    timeout = setTimeout(exec, ms)
  } else {
    console.error('callback function and the timeout must be supplied')
  }
  // API to clear the timeout
  _throttle."clearTimeout" = function() {
    clear();
  }
}
