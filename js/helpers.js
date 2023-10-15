import { palette, status } from './utils/properties.js';
import { sortingSpeedControl, bars } from './main.js';

const randomInt = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1) + min);
};

export const createArray = (arrayLength) => {
   const arr = [];
   for (let i = 0; i < arrayLength; i++) {
      arr.push(randomInt(40, 400));
   }
   return arr;
};

export const delay = () => {
   const ms = parseInt(sortingSpeedControl.value);
   return new Promise(
      resolve => setTimeout(resolve, ms),
   );
};

// get bar height with number type
export const value = (i) => {
   return parseInt(i.style.height);
};

export const swapBarsValue = (a, b) => {
   const tmp = a.style.height;
   a.style.height = b.style.height;
   b.style.height = tmp;
};

// set color of the bar depending on status
export const setBarStatus = (bar, setStatus) => {
   switch (setStatus) {
      case status.idle:
         bar.style.background = palette.idle;
         break;
      case status.inLoop:
         bar.style.background = 'red';
         break;
      case status.complete:
         bar.style.background = palette.complete;
         break;
   }
};

export const getArray = () => {
   return [...bars.childNodes];
};

