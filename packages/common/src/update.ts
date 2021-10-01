import unionWith from 'lodash.unionwith';
import cloneDeep from 'lodash.clonedeep';
import has from 'lodash.has';
import update from 'lodash.update';
import isEqual from 'lodash.isequal';
import get from 'lodash.get';

import { typeFromValue } from './is';

export function formUpdate(data, nextValue, defaultValues) {
  const clone = cloneDeep(data);

  const doUpdate = (key, updatedValue) => {
    if (has(updatedValue || {}, "value")) {
      updatedValue = updatedValue.value;
    }

    const type = typeFromValue(updatedValue);

    if(type === "object") {
      update(clone, key, (prev) => ({...prev, ...updatedValue}));
    } else if(type === "array") {
      updatedValue = updatedValue.map((v) => v?.value || v);
      update(clone, key, (prev) => {
        if (prev?.length === updatedValue.length) return prev;
        else if (prev?.length > updatedValue.length) return updatedValue;
        else if (prev?.length < updatedValue.length) return unionWith(prev, updatedValue, isEqual) 
      });
    } else update(clone, key, () => updatedValue);
  }

  for(const key in nextValue) {
    const defaultValue = defaultValues[key];
    const prevValue = get(clone, key);
    const newValue = get(nextValue, key, defaultValue);
    
    if(isEqual(prevValue, newValue)) continue;
    
    doUpdate(key, newValue); 
  }

  return clone;
}