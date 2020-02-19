/*

NoSQL SCHEMA:

Listings Table:

listing_id INT 
listing_title Text
listing_image_id INT
listing_image_url Text
listing_caption Text

SQL SCHEMA:

Listing Table:
id INT PRIMARY KEY
listing_title TEXT

Images Table:
id INT PRIMARY KEY
url TEXT,
caption TEXT,
listing_id INT FOREIGN KEY
*/


var faker = require('faker');
const fs = require('fs');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var createHeaders = () => {
    //For NoSQL
    var NoSQL_header = 'listing_id, listing_title, id, url, caption\n';
    var SQL_listings_header = 'listing_id, listing_title\n';
    var SQL_images_header = 'listing_id, id, url, caption\n';

    fs.appendFile('./NoSQLdata.csv', NoSQL_header, (err) => {
        if (err) {
            throw err
        } else {
            console.log('Nosql header success');
        };
    })

    fs.appendFile('./SQL_listings.csv', SQL_listings_header, (err) => {
        if (err) {
            throw err
        } else {
            console.log('SQL listings header success');
        };
    })

    fs.appendFile('./SQL_images.csv', SQL_images_header, (err) => {
        if (err) {
            throw err
        } else {
            console.log('SQL images success');
        };
    })
}

var iterationCount = 0;
var count = 0;

var seeding = (n) => {
    console.log(iterationCount);

    if (iterationCount === 1000) {
        return;
    } else {
        var NoSQLdata = '';
        var SQLdata_listings = '';
        var SQLdata_images = '';

        for (var i = 0; i < 10000; i++) {
            var fakeTitle = faker.lorem.words();
            var imageID = 0;

            //For SQL - listings
            SQLdata_listings += count;
            SQLdata_listings += ', ';
            SQLdata_listings += fakeTitle;
            SQLdata_listings += '\n';

            for (var j = 0; j < getRandomInt(6, 15); j++) {
                //For NoSQL
                NoSQLdata += count;
                NoSQLdata += ', ';
                NoSQLdata += fakeTitle;
                NoSQLdata += ', ';
                NoSQLdata += imageID;
                NoSQLdata += ', ';
                NoSQLdata += 'https://loremflickr.com/320/240/house';
                NoSQLdata += ', ';
                var fakeCaption = faker.lorem.words();
                NoSQLdata += fakeCaption;
                NoSQLdata += '\n';

                //For SQL - images
                SQLdata_images += count;
                SQLdata_images += ', ';
                SQLdata_images += imageID;
                SQLdata_images += ', ';
                SQLdata_images += 'https://loremflickr.com/320/240/house';
                SQLdata_images += ', ';
                SQLdata_images += fakeCaption;
                SQLdata_images += '\n';

                imageID++;
            }
            count++;
        }
        iterationCount++;

        //Insert into CSV for NoSQL
        fs.appendFile('./NoSQLdata.csv', NoSQLdata, (err) => {
            if (err) {
                throw err
            } else {
                console.log('NoSQL')
                //Insert into CSV for SQL listings
                fs.appendFile('./SQL_listings.csv', SQLdata_listings, (err) => {
                    if (err) {
                        throw err
                    } else {
                        console.log('SQL-Listings')
                        //Insert into CSV for SQL images
                        fs.appendFile('./SQL_images.csv', SQLdata_images, (err) => {
                            if (err) {
                                throw err
                            } else {
                                console.log('SQL-images')
                                seeding();
                            };
                        })
                    };
                })
            };
        })
    }
}

// createHeaders();
seeding();