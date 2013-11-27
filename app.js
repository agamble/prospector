
/**
 * Module dependencies.
 */

 var express = require('express');
 var routes = require('./routes');
 var user = require('./routes/user');
 var http = require('http');
 var path = require('path');
 var mongoose = require('mongoose');
 var app = express();

 var Schema = mongoose.Schema;
 var server = require('http').createServer(app);


 var io = require('socket.io').listen(server);

 mongoose.connect('mongodb://localhost/test');

 var schoolSchema = new Schema({
 	name: String,
 	classes: [String],
 	coords: [Number, Number],
 	address: String,
 })

 var pupilSchema = new Schema({
 	name: String,
 	school: String,
 	subjects: [String],
 	distanceFromSchool: Number,
 	results: [{
 		subject: String,
 		grade: Number,
 		date: Date,
 	}],
 	attendance: [{
 		date: Date,
 		present: Boolean,
 	}]
 })

 var teacherSchema = new Schema({
 	name: String, 
 	school: String, 
 	subjects: [String],
 })

 var School = mongoose.model('School', schoolSchema);
 var Pupil = mongoose.model('Pupil', pupilSchema);
 var Teacher = mongoose.model('Teacher', teacherSchema);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser({strict: false}));
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

app.get('/', function(req,res){
	context = {}
	Pupil.find({}, function(err, doc){
		console.log(doc)
		context.pupils = doc;
	});
	School.find({}, function(err, doc) {
		context.schools = doc;
	})	
	Teacher.find({}, function(err, doc) {
		context.teachers = doc;
		return res.render('index', context)
	})

});

var thesocket;

io.sockets.on('connection', function (socket) {
	thesocket = socket;
	socket.on('disconnect', function(){
		thesocket = null;
	})
})

app.post('/teacher.json', function(req, res) {
	if (req.is('json')) {
		for (var i in req.body.schools) {
			var teacher = req.body[i];
			var query = { name: teacher.name };
			Teacher.findOne(query, function(err, doc){
				if(doc){			
					School.findOneAndUpdate(query, teacher, {upsert: true}, function(err,doc){
						console.log("update called")
						if(err){
							console.log(err)
						}
					});
				} else {
					teacher = new Teacher(teacher)
					console.log("nonupdate called")
					teacher.save()
				}
			})
		}
	} else {
		res.redirect('/');
	}
});

app.post('/school.json', function(req, res) {
	if (req.is('json')) {
		thesocket.emit('school', {name: "School of Hard Knocks"})
		for (var i in req.body) {
			var school = req.body[i];
			var query = { name: school.name };
			School.findOne(query, function(err, doc){
				if(doc){			
					School.findOneAndUpdate(query, school, {upsert: true}, function(err,doc){
						console.log("update called")
						if(err){
							console.log(err)
						}
					});
				} else {
					schoolM = new School(school)
					console.log("nonupdate called")
					schoolM.save(function(err){
						if (err) throw err;

					})
				}
			})
		}
	} else {
		res.redirect('/');
	}
});

app.post('/pupil.json', function(req, res) {
	if (req.is('json')) {
		for (var i in req.body) {
			var pupil = req.body[i];
			var query = { name: pupil.name, school: pupil.school };
			Pupil.findOne(query, function(err, doc){
				if(doc){			
					Pupil.findOneAndUpdate(query, pupil, {upsert: true}, function(err,doc){
						console.log("update called")
						if(err){
							console.log(err)
						}
					});
				} else {
					pupil = new Pupil(pupil)
					console.log("nonupdate called")
					pupil.save()
				}
			})
		}
	}
	else {
		res.redirect('/');
	}
});

app.get('/query', function(req, res) {
	console.log(Pupil.findOne({name: "kekman"}, function(err, doc){
		console.log(doc)
	}))
})

server.listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});
