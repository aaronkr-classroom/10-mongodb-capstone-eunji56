// seed.js
"use strict";

/**
 * Listing 15.9 (p. 224)
 * 새로운 데이터 생성
 */
// 모듈 가져오기
const mongoose = require("mongoose"),
    Subscriber = require("./models/Subscriber");

// 데이터베이스 연결 설정
mongoose.connect(
    "mongodb+srv://eunji:LxwX3EaENwfXug92@ut-node.jbuqzp0.mongodb.net/?retryWrites=true&w=majority&appName=UT-Node"
);
mongoose.connection;

// subscribers 배열 생성 (5개 이상)
var subscribers = [
  {
    name: "Thor",
    email: "b@b.com",
    newsletter: true,
  },
  {
    name: "Spider",
    email: "c@b.com",
    newsletter: false,
  },
  {
    name: "민청이",
    email: "d@b.com",
    newsletter: false,
  },
  {
    name: "성진우",
    email: "f@b.com",
    newsletter: true,
  },
  {
    name: "Iron",
    email: "w@b.com",
    newsletter: true,
  },
];

// 기존 데이터 제거
/*
Subscriber
    .deletMany({})
    .exec()
    .then(result => {
        console.log(`Deleted ${result.deletedCount} records.`);
    })
    .catch(error => {
        console.log(`Error: ${error.message}`);
    });
*/
var commands = [];

// 프라미스 생성을 위한 구독자 객체 루프
subscribers.forEach(s => {
    commands.push(
        Subscriber
        .create({
            name: s.name,
            email: s.email,
            newsletter: s.newsletter
        })
        .then(s => {
            console.log(`Created: ${s.name}`);
        })
    );
});

// 프라미스 생성 후 로깅 작업
Promise.all(commands)
    .then(r => {
        console.log(JSON.stringify(r, null, 2));
        mongoose.connection.close();
    })
    .catch(error => {
        console.log(e);
    });