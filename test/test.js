/**
 * Unit tests
 */

"use strict";

/*const routes = require('../routes');
const CpfsModel = require('../resources/models/cpfs-model');
const Cpfs = require('../resources/controllers/cpfs-controller');
let config = require('../config/global-setting');*/

const express = require('../config/custom-express');
const request = require('supertest')(express);

//const request = require('supertest')(Cpfs);
// const assert = require('assert');

describe('Unit tests for Cpfs', function() {
    // beforeEach(function(done) {
    //     Cpfs.delete({}, function(error) {
    //         done();
    //     });
    // });

    it('Should return 404 page', function(done) {
        request.get('/')
            .set('Accept', 'application/json')
            .expect(200, done);
        /*Cpfs.getAll(req, function(res) {
            assert(404, res);
        });*/
    });

    /*it('Test the route', function(done) {
        routes.get('/', function(done) {
            assert(202, done);
        });
    });*/
});