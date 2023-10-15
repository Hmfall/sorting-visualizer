import { createArray } from './helpers.js';
import { bubbleSort } from './sort/bubble.js';
import { selectionSort } from './sort/selection.js';

// parent node of bar samples
export const bars = document.querySelector('.bars');

// sorting properties
export const sortingSpeedControl = document.getElementById('sort-speed');
const arrayLengthControl = document.getElementById('arr-lgth');

// control buttons
const newArrayBtn = document.querySelector('.newArray');

// create an array with new bars exemplars
const appendArray = () => {
   bars.replaceChildren();
   const newArray = createArray(parseInt(arrayLengthControl.value));
   const barWidth = bars.offsetWidth / newArray.length;
   for (let i = 0; i < newArray.length; i++) {
      const bar = document.createElement('div');
      const barHeight = newArray[i];
      bar.classList.add('bar');
      bar.style.width = `${barWidth}px`;
      bar.style.height = `${barHeight}px`;
      bars.append(bar);
   }
};

appendArray();

newArrayBtn.addEventListener('click', () => {
   appendArray();
});

arrayLengthControl.addEventListener('input', () => {
   appendArray();
});

sortingSpeedControl.addEventListener('input', () => {
   console.log(sortingSpeedControl.value);
});

// sorts list
bubbleSort();
selectionSort();