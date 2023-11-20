import express from 'express';
// const express = require('express')
import Hello from "./hello.js"
import Lab5 from "./lab5.js";

const app = express()
Lab5(app)
Hello(app)
app.listen(4000)