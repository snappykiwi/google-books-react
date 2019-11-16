const db = require('../models');

module.exports = {

  findAll: function(req, res) {
    db.Book.findAll({})
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
    db.Book.remove({
      id: req.params.id
    }).then(dbBook => {
      console.log(dbBook);
    })
    .catch(err => res.status(500).json(err))
  }

}