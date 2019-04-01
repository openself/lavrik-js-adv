/*
Реализовать класс EmailParser по следующим правилам:
    - в объекте существует только одно реальное поле email
	- также присутствует возможность обратиться к полям
		- isCorrect: (boolean) корректный ли адрес
		- name: (string) часть до собаки || null if !isCorrect
		- domain: (string) часть после собаки || null if !isCorrect
*/
export class EmailParser {
    constructor(email) {
        this.email = email
        Object.defineProperty(this, 'name' ,{
            get(){
                return this.isCorrect ? this.email.split('@')[0] : null
            }
        })
    }

    get isCorrect() {
        return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(this.email)
    }

    get domain() {
        return this.isCorrect ? this.email.split('@')[1] : null
    }
}

// Реализовать фукнцию watchObj принимающую объект DOM и возвращающую Proxy.

/* global Proxy */
export function watchObj(node, callback) {
    return new Proxy(node, {
        set(target, p, value) {
            target[p] = value
            callback(p, value)
            return true
        },

        get(target, p) {
            switch (typeof target[p]) {
                case "object":
                    return watchObj(target[p], callback)
                case "function":
                    return target[p].bind(target)
                default:
                    return target[p]
                
            }

        }
    })


}