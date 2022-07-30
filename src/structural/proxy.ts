// substitute the traget object with a proxy
const original = { name: "monika" }

const reactive = new Proxy(original,
    // intercept activity using the handler
    {
        get(target, key) {
            console.log('tracking: ', key)
            // @ts-ignore
            return target[key]
        },
        set(target, key, value) {
            console.log('updating: ', key)
            return Reflect.set(target, key, value)
        }
    })

reactive.name; // logs: 'tracking: name'

reactive.name = "vijay"; // logs: 'updating: name'