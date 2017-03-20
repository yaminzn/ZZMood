var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://bezheng:aqwzsx123@ds161518.mlab.com:61518/mood', ['channels']);
var db2 = mongojs('mongodb://bezheng:aqwzsx123@ds161518.mlab.com:61518/mood', ['votes']);
var db3 = mongojs('mongodb://bezheng:aqwzsx123@ds161518.mlab.com:61518/mood', ['comments']);

// Get all channels from the database
router.get('/channels', function (req, res, next) {
    /* Allowing the HTTP requests between tw different domains
       in this case, the app and the database website */
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    /* finding all the channels documents */
    db.channels.find(function (err, channels) {
        if (err) {
            res.send(err);
        }
        res.json(channels);
    });
});

// Get one channel
router.get('/channel/:id', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    db.channels.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, channel) {
        if (err) {
            res.send(err);
        }
        res.json(channel);
    });
});

// Save new channel
router.post('/channel', function (req, res, next) {
    var channel = req.body;
    if (!channel.title) {
        res.status(400);
        res.json({
            "error": "bad data"
        });
    } else {
        db.channels.save(channel, function (err, channel) {
            if (err) {
                res.send(err);
            }
            res.json(channel._id);
        });
    }
});

// Get all votes
router.get('/votes', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    db2.votes.find(function (err, votes) {
        if (err) {
            res.send(err);
        }
        res.json(votes);
    });
});

// Get all comments
router.get('/comments', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    db3.comments.find(function (err, comments) {
        if (err) {
            res.send(err);
        }
        res.json(comments);
    });
});


router.get('/comment/:channelId', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    db3.comments.find({ channelId: req.params.channelId }, function (err, comments) {
        if (err) {
            res.send(err);
        }
        res.json(comments);
    });
});

// Get one vote
router.get('/vote/:channelId', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    db2.votes.find({ channelId: req.params.channelId }, function (err, votes) {
        if (err) {
            res.send(err);
        }
        res.json(votes);
    });
});

// Save new vote
router.post('/vote', function (req, res, next) {
    if (!req.body) {
        res.status(400);
        res.json({
            "error": "bad data"
        });
    }
    var vote = req.body;
    db2.votes.save(vote, function (err, obj) {
        if (err) {
            res.send(err);
        }
        res.json(obj);
    });
});

// Save comments
router.post('/comment', function (req, res, next) {
    if (!req.body) {
        res.status(400);
        res.json({
            "error": "bad data"
        });
    }
    var comment = req.body;
    db3.comments.save(comment, function (err, obj) {
        if (err) {
            res.send(err);
        }
        res.json(obj);
    });
});


module.exports = router;