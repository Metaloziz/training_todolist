function indentify() {
    console.log(this.name)
}


let obj = {
    name: 'Andrew'
}

indentify.call(obj)