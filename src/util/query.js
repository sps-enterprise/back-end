const where = (q, filters) => {
    let v = false;
    for (const key of Object.keys(filters)) {
        q += (v ? ' AND ' : ' WHERE ') + key + ' = ' + filters[key];
        v = true;
    }
    return q;
}

module.exports = {
    where,
};