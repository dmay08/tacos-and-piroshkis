const Piroshki = {
    data: [
        {
            name: 'Putin',
            filling: 'meat',
            size: 10
        },
        {
            name: 'Vladimir',
            filling: 'veggies',
            size: 12
        },
    ],
    addPiroshki: function(name, filling, size) {
        let newPiroshki = {
            name,
            filling,
            size
        };
        this.data.push(newPiroshki);
    },
    getAllPiroshkis: function() {
        return this.data;
    },
    getPiroshki: function(id) {
        return this.data[id];
    },
    updatePiroshki: function(id, name, filling, size) {
        let piroshki = {
            name,
            filling,
            size
        }
        this.data[id] = piroshki;

    },
    deletePiroshki: function(id) {
        if (id < this.data.length && id >= 0) {
            this.data.splice(id, 1); // splices out '1' piroshki
        }
    }
};

module.exports = Piroshki;