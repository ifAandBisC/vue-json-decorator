export const debounce = function(func, wait) {
  let startTime = Date.now();
  let timer;

  return (...args) => {
    if (Date.now() - startTime < wait && timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func(...args);
    }, wait);
    startTime = Date.now();
  }
}

export const decorateText = function(func, text) {
  if (!func || typeof func !== 'function') {
    return text
  }
  const result = func(text.toString())
  if (typeof result !== 'string') {
    throw new TypeError('Decorator return type must be an string!')
  }
  return result
}