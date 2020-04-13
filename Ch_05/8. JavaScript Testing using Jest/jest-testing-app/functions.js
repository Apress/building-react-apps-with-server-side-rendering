const functions = {
    add: (n1, n2) => n1 + n2,
    invalidOperation: () => { throw new Error('Operation not allowed!') }
}

module.exports = functions