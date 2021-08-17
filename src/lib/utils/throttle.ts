type Func = (...args: any[]) => any;

const throttle = <T extends Func>(fn: T, delay: number) => {
  let timeout: NodeJS.Timer;
  return (...args: Parameters<T>) => {
    if (timeout !== undefined) {
      return;
    }

    timeout = setTimeout(() => {
      timeout = undefined;
    }, delay);

    return fn(...args);
  };
};

export { throttle };
