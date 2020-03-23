/* eslint-disable */

let data = 42;

data = 10;

export interface ICar{
    color: string;
    model: string;
    topSpeed?:number;
}

const car1:ICar = {
    color: 'blue',
    model: 'BMW'
}

const car2:ICar = {
    color: 'red',
    model: 'Mercedes',
    topSpeed: 100
}

const multiply = (x:number, y:number): void => {
    x*y;
}

const divided = (x:number, y:number): string => {
    return (x/y).toString();
}

export const cars = [car1, car2];