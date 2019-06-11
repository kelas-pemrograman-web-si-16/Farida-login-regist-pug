const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    kodebuku 		: {type: String, unique: true},
    judul 			: {type: String, unique: true},
    sinopsis 	    : String,
    pengarang		: String,
    harga		    : String
});
module.exports = mongoose.model('buku', userSchema);