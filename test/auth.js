require('dotenv').config()
const expect = require('chai').expect;
const sinon = require('sinon');

const mongoose = require('mongoose');

const User = require('../models/user');
const AuthController = require('../controllers/auth');
const authMiddleware = require('../middleware/is-auth');

describe('Auth middleware', function () {
  it('should redirect to "/login" page if session "isLogin" is not true', function () {
    const req = {
      session: {
        isLoggedIn: false
      }
    };
    const res = {
      testRedirected: null,
      redirect: function (to) {
        this.testRedirected = to
      }
    };
    authMiddleware(req, res, () => {
    });
    expect(res.testRedirected).to.equal('/login');
  });
});

describe('Auth controller', function () {
  before(function (done) {
    mongoose
      .connect(
        process.env.mongoDB_AppTest
      )
      .then(result => {
        const user = new User({
          userName: 'Test',
          email: 'test@test.com',
          password: 'tester',
        });
        return user.save();
      })
      .then(() => {
        done();
      });
  });

  it('The login page should be rendered', function () {
    const req = {
      flash: function (type) {
        return [];
      }
    }
    const res = {
      testRenderedPage: null,
      render: function (page, params) {
        console.log('Page: ', page);
        this.testRenderedPage = page
      }
    };
    AuthController.getLogin(req, res, () => {
    });
    expect(res.testRenderedPage).to.equal('auth/login');
  });

  after(function (done) {
    User.deleteMany({})
      .then(() => {
        return mongoose.disconnect();
      })
      .then(() => {
        done();
      });
  });

});
