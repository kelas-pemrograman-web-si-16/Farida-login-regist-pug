'use strict';

const buku = require('../model/buku');

//InputData
exports.inputbuku = (judul, sinopsis, pengarang, harga) =>
    new Promise((resolve,reject) => {

        const inputbuku = new buku({
            kodebuku     : kodebuku,
            judul        : judul,
            sinopsis     : sinopsis,
            pengarang    : pengarang,
            harga        : harga,
            created_at   : new Date()
        });

        inputbuku.save()

            .then(() => resolve({ status: 200, message: 'Data Buku Disimpan' }))

            .catch(err => {

                if (err.code == 11000) {

                    reject({ status: 200, message: 'Buku sudah ada' });

                } else {

                    reject({ status: 200, message: 'Internal Server Error !' });
                }
            });
    });

//update databuku
export.updateBuku = (kodebuku, judul, sinopsis, pengarang, harga) =>
    new Promise((resolve,reject) => {
        const kodeBuku = ({
            kodebuku : kodebuku
        });
        const dataBuku = ({
              judul     : judul,
              sinopsis  : sinopsis,
              pengarang : pengarang,
              harga     : harga,
              created_at : new Date()
    });
        buku.update(kodeBuku, dataBuku)
            .then(() => resolve ({
                 status: 200, message: 'Berhasil Update Data Buku'}
    }))
            .catch( err => {
                reject({status:200, message: 'Gagal'});
    });