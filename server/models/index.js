const client = require('../db');

module.exports = {
  gallery: {

    getOne: (id, cb) => {
      var getOneListing = 'SELECT * FROM nosqldata WHERE listing_id = ?';

      client.execute(getOneListing, [id], { prepare: true })
        .then((result) => {
          cb(null, result.rows);
        })
        .catch((error) => {
          cb(error);
        })
    },

    getAll: (cb) => {
      var getAllListings = 'SELECT * FROM nosqldata';

      client.execute(getAllListings)
        .then((result) => {
          cb(null, result.rows);
        })
        .catch((error) => {
          cb(error);
        })
    },

    postOne: (content, cb) => {
      var insertListing = 'INSERT INTO nosqldata(listing_id, listing_title, id, url, caption) VALUES (?, ?, ?, ?, ?)';

      client.execute(insertListing, [content.listing_id, content.listing_title, content.id, content.url, content.caption], { prepare: true })
        .then(() => {
          cb(null, 'success');
        })
        .catch((error) => {
          cb(error);
        })
    },

    deleteOne: (id, cb) => {
      var deleteOne = 'DELETE FROM nosqldata WHERE listing_id = ?';

      client.execute(deleteOne, [id], { prepare: true })
        .then(() => {
          cb(null, 'delete success');
        })
        .catch((error) => {
          cb(error);
        })
    },

    updateOne: (id, content, cb) => {
      var updateOne = 'UPDATE nosqldata SET listing_title = ?, url = ?, caption = ? WHERE listing_id = ? and id = ?';

      client.execute(updateOne, [content.listing_title, content.url, content.caption, id, content.id], { prepare: true })
      .then(() => {
        cb(null, 'update success');
      })
      .catch((error) => {
        cb(error);
      })
    },

    deleteAll: (cb) => {
      var deleteAll = 'TRUNCATE nosqldata';

      client.execute(deleteAll)
        .then(() => {
          cb(null, 'delete all success');
        })
        .catch((err) => {
          cb(err);
        })
    }
  }
};
