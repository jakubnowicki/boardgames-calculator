import {
  compose,
  sum,
  values,
 } from 'ramda'

 export const sumValues = compose(sum, values);
