var gulp = require("gulp")
var gutil = require("gulp-util")
var compass = require("gulp-compass")
var path = require("path")
var images = require('gulp-imagemin')

gulp.task("default", ["sass"], function() {

})

gulp.task("sass", function() {
	gulp.src( ["stylesheets/*.scss"] )
		.pipe(compass({
			config_file: "./config.rb",
			css: "build/css",
			sass: "stylesheets",
			style: "compressed"
		}))
})

gulp.task("images", function(){
	gulp.src(["images/sections/*.jpg", "images/location/*.jpg"])
		.pipe(images({
			progressive: true
		}))
		.pipe(gulp.dest("build/images"))
})