function partialKeys (obj) {
  let cache = Object.keys(obj).sort()

  const handler1 = {
    set(obj, prop, value) {
      cache = Object.keys(obj).push(prop).sort()
    },

    get(target, prop) {
      const matchingProp = cache
        .filter(key => key.indexOf(prop) === 0)[0]

      if (matchingProp) {
        return target[matchingProp]
      }
    }
  }

  return new Proxy(obj, handler1)
}


const obj = { aaa: 1, abc: 2, dfg: 3, def: 4, dfgh: 5 }
const newObj = partialKeys(obj)
console.log(newObj.blah)
obj.blah = 'hellsbells'
console.log(newObj.blah)
