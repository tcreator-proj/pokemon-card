import {debounce} from "underscore";

type Debouncer = (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => void;

const Debounce = (ms: number): Debouncer => {
  return (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
    descriptor.value = debounce(descriptor.value, ms)
    return descriptor;
  };
}

export default Debounce;
