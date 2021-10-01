type BaseTypes = "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
type DerivedTypes = BaseTypes | "array" | "date" | "null";
export function typeFromValue(value: any): DerivedTypes {
  const type: DerivedTypes = typeof value;
  if(type === "object" && Array.isArray(value)) return "array";
  if(type === "object" && isDate(value)) return "date";
  return type;
}

import moment from "moment";
export function isDate(value: any) {
  const expectedFormats = [
    moment.ISO_8601,
    "DD-MMM-YYYY",
    "DD-MM-YYYY",
    "DD-MM-YY",
    "DD/MM/YYYY",
    "DD/MM/YY",
    "MM/DD/YYYY",
    "MM/DD/YY",
  ];
  return moment(value, expectedFormats, true).isValid();
}

export function isEmpty(value): boolean {
  if(value && typeof value === "object") {
    if(Array.isArray(value) && !value.length) return true;
    if(isDate(value)) return false;
    if(!Object.keys(value).length) return true;
  }
  return [undefined, null, NaN, ""].includes(value);
}