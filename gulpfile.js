var gulp = require('gulp');
var rename = require('gulp-rename');
var ts = require('gulp-typescript');
var assign = require('object-assign');
var jsx = require('react-jsx-anywhere/gulp');
var sourcemaps = require('gulp-sourcemaps');

var sass = require("gulp-sass");
var autoprefixer = require('gulp-autoprefixer');

var globalConfig = {
    js: {
        target: 'ES5'
    }
};

// Helpers
var ObjToArray = function (obj) {
    return Object.keys(obj).map(function (key) {
        return obj[key]
    })
};

/*
 * p = path
 */

var p = function () {
    return arguments != null ? ObjToArray(arguments).join('/') : undefined;
};
var paths = {
    base: 'src',
    dest: 'dist',
    scripts: {
        dest: 'dist'
    },
    styles: {
        app: 'css',
        dest: 'css'
    }
};

var config = {
    ts: {
        src: p(paths.base, '**/*.ts'),
        dest: p(paths.scripts.dest),
        dev: {},
        base: {
            module: 'system',
            target: globalConfig.js.target,
            noImplicitAny: true,
            typescript: require('typescript')
        }
    },
    sass: {
        src: p(paths.base, paths.styles.app, '**/*.scss'),
        dest: p(paths.dest, paths.styles.app),
        base: {},
        dev: {
            outputStyle: 'nested'
        },
        prod: {
            outputStyle: 'compressed'
        }
    },
    autoprefixer: {
        base: {
            browsers: ['last 3 versions', '> 1%', 'IE 10', 'IE 11']
        },
        dev: {
            cascade: true
        },
        prod: {}
    }
};

// Server
// http://mindthecode.com/lets-build-an-angularjs-app-with-browserify-and-gulp
var embedlr = require('gulp-embedlr'),
    refresh = require('gulp-livereload'),
    lrserver = require('tiny-lr')(),
    express = require('express'),
    livereload = require('connect-livereload'),
    livereloadport = 35729,
    serverport = 3000;


gulp.task('default', ['watch:dev', 'build:dev', 'sass:dev' ,'serve']);
gulp.task('build:dev', ['ts:dev']);
gulp.task('watch:dev', function() {
    var tsWatcher = gulp.watch(config.ts.src, ['ts:dev']);
    var sassWatcher = gulp.watch(config.sass.src, ['sass:dev']);
});


gulp.task('ts:dev', function () {
    var tsConfig = assign(config.ts.base, config.ts.dev);

    gulp.src(config.ts.src)
        .pipe(sourcemaps.init())
        .pipe(jsx())
        .pipe(ts(tsConfig))
        .pipe(rename({ext: 'js'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.ts.dest));
});

gulp.task('sass:dev', function () {
    var sassConfig = assign(config.sass.base, config.sass.dev);
    var autoprefixerConfig = assign(config.autoprefixer.base, config.autoprefixer.dev);

    gulp.src(config.sass.src)
        .pipe(sourcemaps.init())
        .pipe(sass(sassConfig))
        .pipe(autoprefixer(autoprefixerConfig))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.sass.dest));
});


// Server
// Set up an express server (but not start it yet)
var server = express();
// Add live reload
server.use(livereload({port: livereloadport}));
server.use(express.static('./'));
// Setup HTML5 pushstate. This redirects everything back to our index.html
server.all('/*', function (req, res) {
    res.sendFile('index.html', {root: './'});
});

gulp.task('serve', function () {
    // Start webserver
    server.listen(serverport);
    // Start live reload
    lrserver.listen(livereloadport);
    // Run the watch task, to keep taps on changes
});