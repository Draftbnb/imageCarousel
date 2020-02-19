const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost/gallery';
const GalleryModel = require('../db');

mongoose.connect(mongoUrl, { server: { reconnectTries: Number.MAX_VALUE } });

module.exports = {
  gallery: {
    insertAll: (data, cb) => {
      GalleryModel.insertMany(data)
        .then((docs) => {
          cb(null, docs);
        })
        .catch((err) => {
          cb(err);
        });
    },

    getOne: (id, cb) => {
      GalleryModel.find({ listing_id: Number(id) })
        .then((results) => {
          cb(null, results);
        })
        .catch((err) => {
          cb(err);
        });
    },

    getAll: (cb) => {
      GalleryModel.find({})
        .then((results) => {
          cb(null, results);
        })
        .catch((err) => {
          cb(err);
        });
    },

    postOne: (content, cb) => {
      var NewGallery = new GalleryModel(content);
      NewGallery.save()
        .then((results) => {
          cb(null, results);
        })
        .catch((err) => {
          cb(err);
        });
    },

    deleteOne: (id, cb) => {
      GalleryModel.deleteOne({listing_id: Number(id)})
        .then((results) => {
          cb(null, results);
        })
        .catch((err) => {
          cb(err);
        })
    },

    updateOne: (id, content, cb) => {
      GalleryModel.updateOne({listing_id: Number(id)}, content)
        .then((results) => {
          cb(null, results);
        })
        .catch((err) => {
          cb(err);
        })
    },

    deleteAll: (cb) => {
      GalleryModel.deleteMany({})
        .then((results) => {
          cb(null, results);
        })
        .catch((err) => {
          cb(err);
        });
    },
  },
};
