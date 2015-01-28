var gulp = require('gulp');
var gulpif = require('gulp-if');
var browserify = require('gulp-browserify');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');

// set to false to remove source mapping for js files
// and minifcation for css files when used in production
var condition = {
	devMode: true
};


/***************************************************
 *
 *					TERMINAL
 *
 **************************************************/
 var terminal = {
	js: {
		main:		'src/terminal/js/main.js',
		src:		'src/terminal/js/*.js',
		dest:		'build/terminal/',
		destFile:	'terminal.js'
	},
	css: {
		src: 		'src/terminal/css/*.less',
		dest:		'build/terminal/',
		destFile:	'terminal.css'
	}
};

gulp.task('terminal_js', function() {
	gulp.src(terminal.js.main)
	.pipe(plumber())
	.pipe(browserify({
		insertGlobals : true,
		debug : condition.devMode
	}))
	.pipe(rename(terminal.js.destFile))
	.pipe(gulp.dest(terminal.js.dest));
});

gulp.task('terminal_less', function() {
	gulp.src(terminal.css.src)
		.pipe(plumber())
		.pipe(less())
		.pipe(gulpif(!condition.devMode, minifyCSS()))
		.pipe(rename(terminal.css.destFile))
		.pipe(gulp.dest(terminal.css.dest));
});

/***************************************************
 *
 *				PACKAGE Router
 *
 **************************************************/
 var packageRouter = {
	main:		'src/packageRouter/main.js', 
	src:		'src/packageRouter/*.js',
	dest:		'build/packageRouter/',
	destFile:	'pkgRouter.js'
};

gulp.task('package_Router', function() {
	gulp.src(packageRouter.main)
	.pipe(plumber())
	.pipe(browserify({
		insertGlobals : true,
		debug : condition.devMode
	}))
	// .pipe(uglify())
	.pipe(rename(packageRouter.destFile))
	.pipe(gulp.dest(packageRouter.dest));
});


/***************************************************
 *
 *					PACKAGES
 *
 **************************************************/
var packages = {
	packageStats: {
		main:		'src/packages/stats/main.js', 
		src:		'src/packages/stats/*.js',
		dest:		'build/packages/',
		destFile:	'pkg_stats.js'
	}
};

gulp.task('package_stats', function() {
	gulp.src(packages.packageStats.main)
	.pipe(plumber())
	.pipe(browserify({
		insertGlobals : true,
		debug : condition.devMode
	}))
	// .pipe(uglify())
	.pipe(rename(packages.packageStats.destFile))
	.pipe(gulp.dest(packages.packageStats.dest));
});



/***************************************************
 *
 *					WATCH
 *
 **************************************************/
gulp.task('watch', function() {
	//livereload.listen();
	gulp.watch(terminal.js.src, ['terminal_js']);
	gulp.watch(terminal.css.src, ['terminal_less']);

	gulp.watch(packageRouter.src, ['package_Router']);

	//When you add a new package, make sure to add a new task
	gulp.watch(packages.packageStats.src, ['package_stats']);
});


gulp.task('default', ['watch']);