import { delay, swapBarsValue, value, setBarStatus, getArray } from '../helpers.js';
import { status } from '../utils/properties.js';

const bubble = async () => {
   const arr = getArray();

   for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
         let current = arr[j];
         let next = arr[j + 1];

         setBarStatus(current, status.inLoop);
         setBarStatus(next, status.inLoop);

         if (value(current) > value(next)) {
            swapBarsValue(current, next);
            await delay();
         }

         setBarStatus(current, status.idle);
         setBarStatus(next, status.idle);

      }
      setBarStatus(arr[arr.length - i - 1], status.complete);
   }
   setBarStatus(arr[0], status.complete);
};

export const bubbleSort = () => {
   const bubbleSortBtn = document.querySelector('.bubble-sort-btn');
   bubbleSortBtn.addEventListener('click', () => {
      bubble();
   });
};



