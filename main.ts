// import { Observable, Observer } from 'rxjs';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

let numbers = [1, 2, 4, 3, 45, 65, 67];
let source = Observable.create(observer => {
  let index = 0;
  let produceValue = () => {
    observer.next(numbers[index++]);

    if (index < numbers.length) {
      setTimeout(produceValue, 250);
    } else {
      observer.complete();
    }
  };

  produceValue();
})
  .map(n => n * 2)
  .filter(n => n > 4);

source.subscribe(
  value => console.log(`value: ${value}`),
  e => console.log(`error: ${e}`),
  () => console.log('Complete')
);

// class MyObserver implements Observer<number>{
//     next(value) {
//         console.log(`value: ${value}`);
//     }

//     error(e) {
//         console.log(`error: ${e}`);
//     }

//     complete() {
//         console.log('Complete');
//     }
// }

// source.subscribe(new MyObserver);

