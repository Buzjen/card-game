export const useDebounce = (func, delay = 300) => {
  let timeout;
  return function () {
    const fncall = () => {
      func.apply(this, arguments);
    };
    clearTimeout(timeout);
    timeout = setTimeout(fncall, delay);
  };
};
