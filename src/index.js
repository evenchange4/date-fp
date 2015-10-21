'use strict';
import parse from './parse';
import get from './get';
import equals from './equals';
import diff from './diff';
import format from './format';
import set from './set';
import add from './add';
import sub from './sub';
import min from './min';
import max from './max';
import isValid from './isValid';
import convertTo from './convertTo';
import unixTime from './unixTime';

const clone = date => new Date(date.getTime());

export default {
  add,
  clone,
  equals,
  diff,
  format,
  get,
  parse,
  set,
  sub,
  min,
  max,
  isValid,
  convertTo,
  unixTime
};
