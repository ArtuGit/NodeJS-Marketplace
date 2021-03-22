const expect = require('chai').expect;
const sinon = require('sinon');

const authMiddleware = require('../middleware/is-auth');

describe('Auth', function () {
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
