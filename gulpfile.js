const gulp = require("gulp");
const connect = require("gulp-connect");
const sass = require("gulp-sass");
const babel = require("gulp-babel");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("html", done => {
  gulp
    .src("*.html")
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());
  done();
});
gulp.task("sass", done => {
  gulp
    .src("sass/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compact" }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
  done();
});
gulp.task("imgs", done => {
  gulp.src("imgs/**").pipe(gulp.dest("dist/imgs"));
  done();
});
gulp.task("babel", done => {
  gulp
    .src("js/*.js")
    .pipe(babel({ presets: ["@babel/env"] }))
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
  done();
});
gulp.task("libs", done => {
  gulp.src("libs/*.js").pipe(gulp.dest("dist/libs"));
  done();
});
gulp.task("server", done => {
  connect.server({
    root: "dist",
    livereload: true
  });
  done();
});

gulp.task("watch", done => {
  /* gulp.watch(
    ["*.html", "sass/*.scss", "js/*.js", "libs/*.js", "imgs/**"],
    gulp.series("html", "sass", "babel", "libs", "imgs")
  ); */
  gulp.watch("*.html", gulp.series("html"));
  gulp.watch("sass/*.scss", gulp.series("sass"));
  gulp.watch("js/*.js", gulp.series("babel"));
  gulp.watch("libs/*.js", gulp.series("libs"));
  gulp.watch("imgs/**", gulp.series("imgs"));
  done();
});

gulp.task("default", gulp.parallel("server", "watch"));