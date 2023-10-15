import { Injectable, Type } from '@angular/core';
import { Map } from '../utils/js-utils';

const COMPONENT_MAP: Map<Type<any>> = {};

export function register(dataType: Type<any>) {
  return (cls: Type<any>) => {
      COMPONENT_MAP[dataType.name] = cls;
  };
}

@Injectable({
  providedIn: 'root',
})
export class ComponentRegisterService {

  getComponent(dataType: Type<any>) {
    return COMPONENT_MAP[dataType.name];
  }
}
