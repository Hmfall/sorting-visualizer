import { delay, getArray, swapBarsValue, value } from '../helpers.js';

const selection = async () => {
   const arr = getArray();

   for (let i = 0; i < arr.length; i++) {
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
         if (value(arr[j]) < value(arr[min])) {
            min = j;
         }
         await delay();
      }
      swapBarsValue(arr[i], arr[min]);
   }
};

export const selectionSort = () => {
   const selectionSortBtn = document.querySelector('.selection-sort-btn');
   selectionSortBtn.addEventListener('click', () => {
      selection();
   });
};

