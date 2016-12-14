module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
		    dist: {
		        src: [
		            'assets/js/libs/*.js', // All JS in the libs folder
		            'assets/js/global.js'  // General JS
		        ],
		        dest: 'build/js/production.js',
		    }
		},
		uglify: {
		    build: {
		        src: 'build/js/production.js',
		        dest: 'build/js/production.min.js'
		    }
		},
		autoprefixer: {
			options: {
				browsers: [ 'last 2 versions', 'IE 9' ]
			},
            dist: {
                files: {
                    'build/css/style.css': 'build/css/style.unprefixed.css'
                }
            }
        },
		imagemin: {
		    dynamic: {
		        files: [{
		            expand: true,
		            cwd: 'assets/images',
		            src: ['**/*.{png,jpg,gif,svg}'],
		            dest: 'build/images'
		        }]
		    }
		},
		sass: {
			options: {
		        outputStyle: 'compressed'
		    },
		    dist: {
		        files: {
		            'build/css/style.unprefixed.css': 'assets/css/style.scss'
		        }
		    } 
		},
		watch: {
			options: {
		        livereload: true,
		    },
		    scripts: {
		        files: ['assets/js/*.js', 'assets/js/libs/*.js'],
		        tasks: ['concat', 'uglify'],
		        options: {
		            spawn: false,
		        },
		    },
		    css: {
			    files: ['assets/css/**/*.scss', 'assets/css/*.scss'],
			    tasks: ['sass', 'autoprefixer' ],
			    options: {
			        spawn: false,
			    }
			},
			images: {
				files: [
					'assets/images/**/*.{png,jpg,gif,svg}', 
					'assets/images/*.{png,jpg,gif,svg}'
				],
				tasks: [ 'imagemin' ],
				options: { spawn: false }
			}
		}

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
  
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-sass');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'sass', 'autoprefixer', 'watch']);
    

};