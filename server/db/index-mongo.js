const mongoose = require('mongoose');

const GallerySchema = mongoose.Schema({
  listing_id: { type: Number, required: true, unique: true },
  listing_title: { type: String },
  listing_images: [{ id: Number, url: String, caption: String }],
});

module.exports = mongoose.model('Gallery', GallerySchema);
