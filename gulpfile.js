var gulp = require("gulp");  
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");

  var files = ['./lib/three.min.js', 
               './lib/stats.min.js', 
               './lib/postprocessing/EffectComposer.js', 
               './lib/postprocessing/RenderPass.js', 
               './lib/postprocessing/MaskPass.js', 
               './lib/postprocessing/ShaderPass.js', 
               './lib/shaders/CopyShader.js', 
               './lib/shaders/FXAAShader.js', 
               './lib/shaders/ConvolutionShader.js', 
               './lib/shaders/LuminosityHighPassShader.js', 
               './lib/postprocessing/UnrealBloomPass.js'
                ];

gulp.task("js.concat", function() {  
  gulp.src(files)
    .pipe(concat('threecomps.js'))
    .pipe(gulp.dest('./build'))
    ;
});

gulp.task('js.uglify', function() {
  return gulp.src('./build/threecomps.js')
    .pipe(uglify('threecomps.min.js'))
    .pipe(gulp.dest('./bin'));
});

gulp.task('default', ['js.concat', 'js.uglify']);