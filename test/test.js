/**
 * Unit tests
 */

"use strict";

const app = require('../service');

const request = require('supertest')(app);

describe('Unit tests', () => {
    it('should return 404 page', (done) => {
        request
            .get('/random-url')
            .expect(404, done);
    });

    it('should return home page', (done) => {
        request
            .get('/')
            .expect(200, done);
    });
});