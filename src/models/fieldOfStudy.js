"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const staticData = require('../staticData');

const FieldOfStudy = new mongoose.Schema({
    name: {
        enum: staticData.fieldOfStudy
    },
    degree: {
        enum: staticData.degree,
    },
    validityPeriod: Date,
    madatory: [{
        type: Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    }],
    elective: [{
        type: Schema.Types.ObjectId,
        ref: 'Course',
        required: false
    }]
});

module.exports = mongoose.model('FieldOfStudy', FieldOfStudy);