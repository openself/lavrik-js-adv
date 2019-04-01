import 'babel-polyfill'
import Timer from './timer'
import {gen} from './gen'

///* global require*/
// const some = require('./some.js')

window.addEventListener(
    'load', function () {
        const timer1 = new Timer(document.querySelector('.timer1'), 10)
        console.log(timer1)

        for (let sym of 'hello'){
            console.log(sym)
        }

        /* global Symbol*/
        let forPassport = Symbol()
        let user = {
            firstName: "Name",
            secondName: "Second",
            [forPassport]: 1232435435435
        }

        for (let key in user){
            console.log(`key: ${key}; value: ${user[key]}`)
        }
        console.log(user[forPassport])

        let someObj = {
            to: 10,
            [Symbol.iterator]: function(){
                let current = 0;
                let stop = this.to;

                return {
                    next(){
                        if(current <= stop){
                            return {
                                done: false,
                                value: current++
                            }
                        }
                        else{
                            return {
                                done: true
                            }
                        }
                    }
                }
            }
        };

        for(let some of someObj){
            this.console.log(some);
        }

        let someGen = gen(1, 5)
        for (let some of someGen){
            console.log(some)
        }

    }
)
