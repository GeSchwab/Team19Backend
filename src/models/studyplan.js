"use strict";

const mongoose = require('mongoose');

const Studyplan = new mongoose.Schema({
    name: String,
    fieldOfStudy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FieldOfStudy'
    },


    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }],

});

module.exports = mongoose.model('Studyplan', Studyplan);