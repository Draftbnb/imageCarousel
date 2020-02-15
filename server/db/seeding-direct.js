/*

{
	"listing_id" : 19,
	"listing_title" : "Downtown SF Studio Apartment Near Civic Center",
	"listing_images" : [
		{
			"id" : 561554778,
			"url" : "https://a0.muscache.com/4ea/air/v2/pictures/29a3d676-0c64-4df3-8568-ad1e48d25a5e.jpg?t=r:w1200-h720-sfit,e:fjpg-c90",
			"caption" : ""
		},
		{
			"id" : 561554726,
			"url" : "https://a0.muscache.com/4ea/air/v2/pictures/da820318-2f83-41ab-8bc2-b97ac67dd6da.jpg?t=r:w1200-h720-sfit,e:fjpg-c90",
			"caption" : ""
		},
	],
}

NoSQL SCHEMA:

Listings Table:

listing_id INT 
listing_title VARCHAR(30)
listing_image_id INT
listing_image_url VARCHAR(30)
listing_caption VARCHAR(30)

SQL SCHEMA:

Listing Table:
id (INT) AUTO_INCREMENT PRIMARY KEY
listing_title (VARCHAR(30)) 

Images Table:
id (INT) AUTO_INCREMENT PRIMARY KEY
url (VARCHAR(30))
caption (VARCHAR(50))
listing_id (INT) FOREIGN KEY
*/


var faker = require('faker');
const fs = require('fs');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var NoSQLdata = [];
var SQLdata_listings= [];
var SQLdata_images= [];

var seeding = (n) => {
    var count = 0;

    for (var i = 0; i < n; i ++) {
        console.log(i);
        //For NoSQL
        var property_nosql = {};
        property_nosql['listing_id'] = count;
        property_nosql['listing_title'] = faker.lorem.words();

        //For SQL - listings
        var property_sql = {};
        property_sql['listing_id'] = count;
        property_sql['listing_title'] = property_nosql['listing_title'];

        //For SQL - images
        var property_sql_images = {};
        property_sql_images['listing_id'] = count;

        count++;
        
        var imageID = 0;

        for (var j = 0 ; j < getRandomInt(6,15); j++) {

        //For NoSQL
            property_nosql['id'] = imageID;
            property_nosql['url'] = 'https://loremflickr.com/320/240/house';
            property_nosql['caption'] = faker.lorem.text();
            NoSQLdata.push(JSON.parse(JSON.stringify(property_nosql)));

        //For SQL - images
            property_sql_images['id'] = imageID;
            property_sql_images['url'] = 'https://loremflickr.com/320/240/house'; 
            property_sql_images['caption'] = property_nosql['caption'];
            SQLdata_images.push(JSON.parse(JSON.stringify(property_sql_images)));
            imageID++;
        }
        
        // //For SQL - listings
        SQLdata_listings.push(property_sql);
    }
}

seeding(1000);

// console.log(NoSQLdata);
// console.log(SQLdata_listings);
// console.log(SQLdata_images);