function factorialize(num) {
    if (num < 0) return -1;
    else if (num == 0) return 1;
    else {
        return num * factorialize(num - 1);
    }
}

module.exports = { factorialize }