function construct(Class, ...arr) {
    // Don't forget, unnamed arguments after Constructor may be passed in!
    let obj = Object.create(Class.prototype);
    Class.apply(obj, arr);
    return obj;
}