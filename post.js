const gulp = require('gulp')
const embedSvg = require('gulp-embed-svg')

gulp.task('embedSvgs', () => {
  gulp.src('./gen/tags/html/*.html')
    .pipe(embedSvg({
      root: './gen/tags/html'
    }))
    .pipe(gulp.dest('./gen/tags/proc'))
})
