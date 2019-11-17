const db = require('../models');

module.exports = {

  findAll: function(req, res) {
    db.Book.find()
      .then(dbBooks => res.json(dbBooks))
      .catch(err => res.status(500).json(err))
  },

  create: function(req, res) {
    db.Book.create(req.body)
      .then(dbBook => {
        console.log(dbBook);
      })
      .catch(err => res.status(500).json(err))
  },

  delete: function(req, res) {
    db.Book.deleteOne({
      id: req.params.id
    }).then(dbBook => {
      console.log(dbBook);
    })
    .catch(err => res.status(500).json(err))
  }

}