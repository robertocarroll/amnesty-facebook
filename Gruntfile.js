module.exports = function (grunt) {

    var vendors = 'jquery backbone backbone.marionette es6-promise'.split(' ');

    grunt.initConfig({

        browserify: {
            // just the app
            app: {
                src: 'app/app.js',
                dest: 'docs/app.js',
                options: {
                    debug: true,
                    extensions: ['.hbs'],
                    transform: ['hbsfy'],
                    external: vendors
                }
            },
            // just vendors
            vendors: {
                files: {
                    'docs/vendors.js': []
                },
                options: {
                    'require': vendors
                }
            },
            // bundle all in one
            bundle: {
                src: 'app/app.js',
                dest: 'docs/bundle.js',
                options: {
                    extensions: ['.hbs'],
                    transform: ['hbsfy']
                }
            }
        },

        // produce index.html by target
        targethtml: {
            dev: {
                src: 'app/index.html',
                dest: 'docs/index.html'
            },
            prod: {
                src: 'app/index.html',
                dest: 'docs/index.html'
            }
        },

        uglify: {
            bundle: {
                src: 'docs/bundle.js',
                dest: 'docs/bundle.js'
            }
        },

        watch: {
            options: {
                livereload: true,
                spawn: false,
                interrupt: true
            },
            src: {
                files: ['app/**/*', '!app/index.html'],
                tasks: ['browserify:app'],
            },
            index: {
                files: ['app/index.html'],
                tasks: ['targethtml:dev']
            },
            assets: {
                files: ['assets/**/*']
            }
        },

        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    open: true,
                    useAvailablePort: true,
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-targethtml');

    grunt.registerTask('builddev', ['browserify:app', 'browserify:vendors', 'targethtml:dev']);
    grunt.registerTask('buildprod', ['browserify:bundle', 'uglify', 'targethtml:prod']);
    grunt.registerTask('run',   ['builddev', 'connect', 'watch']);

};
