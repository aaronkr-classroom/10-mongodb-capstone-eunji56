// models/subscriber.js
"use strict";

/**
 * @TODO:
 * Listing 16.2 + 16.3 (p. 229)
 * 구독자 스키마 정의하고 모델 생성과 익스포트
 */
const mongoose = require('mongoose'),
    subscriberSchema = mongoose.Schema({
        name: String,
        email: String,
        phone: String,
        newsletter: Boolean,
        profileTmg: String
    })

module.exports = mongoose.model(
    "subscriber", subscriberSchema
);