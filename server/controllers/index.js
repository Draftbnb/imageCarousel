const models = require('../models');

module.exports = {
  gallery: {

    getOne: (req, res) => {
      const id = req.params.id;
      models.gallery.getOne(id, (err, results) => {
        if (err) {
          res.sendStatus(500);
          res.end(err);
        } else {
          var reformattedObj = {};
          reformattedObj["listing_id"] = results[0]["listing_id"];
          reformattedObj["listing_title"] = results[0]["listing_title"];
          reformattedObj["listing_images"] = [];
          for (var i = 0; i < results.length; i++) {
            var newObj = {};
            newObj["id"] = results[i]["id"];
            newObj["url"] =  results[i]["url"];
            newObj["caption"] = results[i]["caption"];
            reformattedObj["listing_images"].push(newObj);
          }
          res.json([reformattedObj]);
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
      console.log(req.body);
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
      models.gallery.deleteAll((err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });
    },
  }
};
