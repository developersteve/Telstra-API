//© Copyright 2016 Joshua 'JD' Davison - MIT License.
// Generated by CoffeeScript 1.10.0
(function() {
  var TelstraWiFi, querystring;

  querystring = require('querystring');

  TelstraWiFi = (function() {
    function TelstraWiFi(tAuthInstance) {
      this.tAuthInstance = tAuthInstance;
    }

    TelstraWiFi.prototype.getHotspots = function(latitude, longitude, radius) {
      var queryString;
      if (radius == null) {
        radius = 2000;
      }
      queryString = querystring.stringify({
        lat: latitude,
        long: longitude,
        radius: radius
      });
      return this.tAuthInstance.doSecurePost("https://api.telstra.com/v1/wifi/hotspots?" + queryString).then(function(msg) {
        var headers, ref, result, statusCode;
        statusCode = msg[0], headers = msg[1], result = msg[2];
        if (statusCode === 200) {
          return result;
        } else {
          throw Error((ref = result.message) != null ? ref : "Unknown Error");
        }
      });
    };

    return TelstraWiFi;

  })();

  module.exports = TelstraWiFi;

}).call(this);