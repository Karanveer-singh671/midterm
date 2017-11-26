"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  //Debugging purposes only
  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("ordered_items")
      .then((results) => {
        res.json(results);
    });
  });

  return router;
}
