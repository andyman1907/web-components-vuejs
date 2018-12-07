var
    gulp = require("gulp"),
    fs = require("fs"),
    watch = require('gulp-watch'),
    run = require('gulp-run-command').default

/**
 * tarea que se encarga de combinar todos los archivos de la carpeta CSS en uno solo
 */
gulp.task("moveDistFile", function () {
    var oldPath = 'dist/bundle-web-components.min.js';
    var newPath = 'dist-dashboard/js/bundle-web-components.min.js';

    fs.rename(oldPath, newPath, function (err) {
        if (err) throw err
        console.log('Successfully moved file');
    });
    // return gulp
    //     .src(["src/css/**/*.css"])
    //     .pipe(concatCss("bundle.css"))
    //     .pipe(gulp.dest("dist/"));
});

gulp.task('clean', run('npm run build:webcomponents'));


gulp.task('watch', function () {
    // Endless stream mode
    // return watch('*.*', { ignoreInitial: false })
    //     .pipe(()=>{
    //         console.log("cambios detectados");
    //     });
    return watch('src/**/*.*', ["clean"], () => {
        console.log("cambios detectados");
        return gulp.task('clean');
    });
});