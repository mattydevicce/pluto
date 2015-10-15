Part 1
use monsters
db.createCollection('vampires')
db.vampires.insert([]);

Part 2
db.vampires.find({victims: {$gt: 500}})
db.vampires.find({victims: {$lte: 150}})
db.vampires.find({victims: {$ne: 21023}})
db.vampires.find({$and: [{victims: {$lt: 500}},{victims:{$gt:150}}]})

Part 3
db.vampires.find({title})
db.vampires.find({victims: {$exists: false}})
db.vampires.find({$and:[{title: {$exists: true}},{victims: {$exists: false}}]})
db.vampires.find({$and: [{victims: {$exists: true}},{victims: {$gt: 1000}}]})

Part 4
db.vampires.find({$or: [{loves: 'frilly shirtsleeves'}, {loves: 'frilly collars'}]})
db.vampires.find({loves: 'brooding'})
db.vampires.find(loves: {$elemMatch: {["appearing innocent", "trickery", "lurking in rotting mansions", "R&B music"]}})
db.vampires.find({$and: [{loves: 'fancy cloaks'}, {loves: { $nin: ['top hats','virgin blood']}}]})

Part 5
db.vampires.find({$or: [{location: 'New York, New York, US'}]})
db.vampires.find({$or: [{loves: 'brooding'},{loves:'being tragic'}]})
db.vampires.find({$or: [{loves: 'marshmallows'},{victims: {$gt: 1000}}]}) 
db.vampires.find({$or: [{hair_color: 'red'},{eye_color:'green'}]})

Part 6
db.vampires.find({$and: [{loves: 'ribbons'}, {hair_color: {$ne: 'blonde'}}]})
db.vampires.find({location: {$ne: 'Rome'}})
db.vampires.find({loves: {$nin: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding']}})
 db.vampires.find({victims: {$not: {$gt: 200}}})