const arr = x => Array.from(x)
const num = x => Number(x) || 0
const str = x => String(x)
const isEmpty = xs => xs.length === 0
const take = n => xs => xs.slice(0, n)
const drop = n => xs => xs.slice(n)
const reverse = xs => xs.slice(0).reverse()
const comp = f => g => x => f(g(x))
const not = x => !x
const chunk = n => xs => isEmpty(xs) ? [] : [take(n)(xs), ...chunk(n)(drop(n)(xs))]

export {
    arr,
    num,
    str,
    isEmpty,
    take,
    drop,
    reverse,
    comp,
    not,
    chunk
}
