const models = require('../models');

module.exports = {
  gallery: {
    insertAll: (req, res) => {
      models.gallery.insertAll(data, (err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.sendStatus(200);
        }
      });
    },

    getOne: (req, res) => {
      const id = req.params.id;
      models.gallery.getOne(id, (err, results) => {
        if (err) {
          console.log(err);
        } else {
          console.log(results);
          res.json(results);
        }
      });
    },

    getAll: (req, res) => {
      models.gallery.getAll((err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });
    },

    postOne: (req, res) => {
      // console.log('called', req.body);
      models.gallery.postOne(req.body, (err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });
    },

    deleteOne: (req, res) => {
      const id = req.params.id;
      models.gallery.deleteOne(id, (err, results) => {
        if (err) {
          console.log(err);
        } else {
          console.log(results);
          res.json(results);
        }
      })
    },

    updateOne: (req, res) => {
      console.log(req.body);
      const id = req.params.id;
      models.gallery.updateOne(id, req.body, (err, results) => {
        if (err) {
          console.log(err);
        } else {
          console.log(results);
          res.json(results);
        }
      })

    },

    deleteAll: (req, res) => {
      models.gallery.insertAll((err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.sendStatus(200);
        }
      });
    },
  },
};
