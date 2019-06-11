'use strict';

const auth = require('basic-auth');
const jwt = require('jsonwebtoken');
const buku = require('../model/buku');

const inputbukus = require('../controller/buku');
const config = require('../config/config');

module.exports = router => {

    router.get('/', (req, res) => res.end('Api its work !'));


    //input databuku
    router.post('/inputdatabuku', (req, res) => {

        const kodebuku = req.body.kodebuku;
        const judul = req.body.judul;
        const sinopsis = req.body.sinopsis;
        const pengarang = req.body.pengarang;
        const harga = req.body.harga;

        if (!kodebuku.trim() ||!judul.trim() || !sinopsis.trim()
            || !pengarang.trim() || !harga.trim()) {

            res.status(400).json({message: 'Gagal'});

        } else {

            inputbukus.inputbuku(kodebuku,judul, sinopsis, pengarang, harga)

                .then(result => {

                    res.setHeader('Location', '/buku/' + judul);
                    res.status(result.status).json({message: result.message})
                })

                .catch(err => res.status(err.status).json({message: err.message}));
        }
    });

    //read buku
    router.get('/readbuku', (req, res) => {
    //
        buku.readbuku()
            .then (result => {
                res.status(result.status).json({success: true, message: result.message});
            })
            .catch(err => res.status(err.status).json({success: false, message: err.message}));
    });

    //update buku
    router.post('/updatedatabuku', (req, res) => {
        const kodebuku = req.body.kodebuku;
        const judul = req.body.judul;
        const sinopsis = req.body.sinopsis;
        const pengarang = req.body.pengarang;
        const harga = req.body.harga;

        if (!kodebuku.trim() ||!judul.trim() || !sinopsis.trim()
            || !pengarang.trim() || !harga.trim()) {

            res.status(400).json({message: 'Gagal'});

        } else {
            buku.updatebuku(kodebuku, judul, sinopsis, pengarang, harga)
                .then(result => {
                    res.status(result.status).json({message: result.message})
                })
                .catch(err => res)
}