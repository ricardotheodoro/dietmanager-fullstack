const express = require('express');

const router = express.Router();

router.get('/diet', (req, res) => {res.status(200).json('{"teste" : "sucess"}')});