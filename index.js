/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	
	/**
	 * Module dependencies.
	 */

	// var horoscopes = require("json!./horoscopes.json");

	var horoscopes = {
	  '727502307114385411': 'You will be disappointed when you arrive with a pink ball gag in your mouth to learn that DOM is not what you expected it to be.',
	  '727256924362674176': 'As you prepare to fight a 1,000 year crusade, a part of you just can’t help but wonder if that angel funding was even worth it.',
	  '727213747106783232': 'It feels nice to have someone occasionally check in on you, but having it in the form of a retargeting ad makes it a bit creepy.',
	  '727157721447813120': 'You’ll finally find employment at the manufacturing plant, but at the expense of being able to successfully solve CAPTCHAs from now on.',
	  '726494726573031424': 'Huzzah! You will finally attain viral growth, but only after confirming it with your oncologist.',
	  '726193604184567808': 'Crossing the chasm will take on a devastating new meaning when a sudden earthquake separates you from your customers.',
	  '726099201998745600': 'Enough is enough—let’s finally see if that one weird trick to reduce belly fat works.',
	  '725809061053128704': 'The inquisitive sun will uncover some skeptics, but don’t pay them any mind. If you say it’s hamster tech, it’s hamster tech.',
	  '725721800928194560': 'From 1 to 10, how likely is it that you would recommend this horoscope to a friend or colleague?',
	  '725685587840106496': 'You’ll finally find job security by learning to wear many hats, but only after that genetic mutation experiment gone horrifically wrong.',
	  '725479024424673280': 'You will arrive at a decisive fork in the road—be prepared to merge the biggest pull request of your life.',
	  '725363985575354368': 'Be on the lookout—your recurring nightmare of Slack climbing out of your laptop to strangle you may materialize this week.',
	  '725092606204506112': 'The stars will be coming to you for answers if you don’t hit their quarterly investment predictions.',
	  '725027841545363456': 'Your request to “move fast and break things” has finally been heard—your newest junior web developer will be a ten ton white rhinoceros.',
	  '724971950263554053': 'You will be embarrassingly reminded that your company’s ability to attract talent is directly correlated with the size of your data.',
	  '724707281217019904': 'Rejoice! You’ll finally get a 360 degree view of your customers, but only after that harrowing freak accident with your neck.',
	  '724646298041753600': 'The sun is in flux—now is the time to rewrite your entire web app in that experimental new front-end javascript framework.',
	  '724615980752629761': 'Remember: your worth as a human being is tied directly to the month-over-month percentage growth of your company.',
	  '724452702005010432': 'The stars indicate that, though some failures lead to learning and growth, your failures this week are really just failures.',
	  '724399330946224128': 'Though it seems to make sense, there’s just something you don’t trust about this newfangled “make something people love” plan.',
	  '724376406709297152': 'The stars, portentously arranged at this precise moment in time, indicate that this is not a good week to merge any pull requests.',
	  '723995984171175938': 'Don’t be afraid to get your board’s approval for the new coffee machine—they’ll appreciate you looping them in.',
	  '723917134858874880': 'A nesting sun for a sensible Leo suggests saying yes to adding the ball pit in the corner of the office.',
	  '723529686093963264': 'Listen to your gut—it may be time to pull all devs from their current projects and make them work on chat bots.',
	  '723317554324733952': 'Exercise some open-mindedness—this is the week to finally allow David from accounting to design your company’s new logo.',
	  '723281642849071104': 'The sun blazes a trail through the bull’s zone, commanding you to hire the next person who walks through your door.',
	  '723211502698659843': 'Been a 9x engineer your entire life? This week try being a 10x engineer—you may surprise yourself.',
	  '723170357511757828': 'It may be finally time to accept the fact that your hockey stick growth will actually just be stick growth.',
	  '722941855743119362': 'Your app’s bugs will continue to surprise and delight you this week.',
	  '722933730717753345': 'The remorseful Pisces will stop everything and revert back to the waterfall development method for the next week.',
	  '722925416088875008': 'Now is the time to retweet generously.',
	  '722885216805593090': 'If you’re thinking about launching your startup today, do it tomorrow. Jupiter is still in retrograde.'
	};

	var domain = 'http://' + window.location.host + '/';

	/**
	 * Set horoscope in the span and in the tweet.
	 */

	function setHoroscope(horoscope) {
	  var hspan = document.querySelector('#horoscope-text');
	  hspan.innerHTML = htmlify(horoscope);
	}

	/**
	 * HTML-ify text.
	 */

	function htmlify(text) {
	  text = text.replace(/\’/g, "&rsquo;");
	  text = text.replace(/\”/g, "&rdquo;");
	  text = text.replace(/\“/g, "&ldquo;");
	  text = text.replace(/\—/g, "&mdash;");
	  return text;
	}

	/**
	 * Get querystring parameters.
	 */

	function getParameterByName(name) {
	  var url = window.location.href;
	  name = name.replace(/[\[\]]/g, "\\$&");
	  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	      results = regex.exec(url);
	  if (!results) return null;
	  if (!results[2]) return '';
	  return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	/**
	 * Get random property.
	 */

	function getRandomProperty(obj) {
	  var result;
	  var count = 0;
	  for (var prop in obj)
	    if (Math.random() < 1/++count)
	      result = prop;
	  return result;
	}

	/**
	 * Set twitter urls.
	 */

	function setTwitterButtons(tweet_id) {
	  var twitter = 'https://twitter.com/intent/';
	  var like = twitter + 'like?tweet_id=' + tweet_id;
	  var tweet = twitter + 'tweet?in_reply_to=' + tweet_id;
	  var retweet = twitter + 'retweet?tweet_id=' + tweet_id;
	  var follow = twitter + 'follow?screen_name=andreessenhoroscopes';

	  // Set
	  document.getElementById('tw-like').href = like;
	  // document.getElementById('tw-tweet').href = tweet;
	  document.getElementById('tw-retweet').href = retweet;
	}

	/**
	 * Set new horoscope button
	 */

	function setNewHoroscopeButton() {
	  document.getElementById('new-horoscope').href = domain + '?id=' + getRandomProperty(horoscopes);
	}

	/**
	 * Main logic.
	 */

	function main() {
	  var id = getParameterByName('id');
	  if (!id || !horoscopes[id]) return window.location.href = domain + '?id=' + Object.keys(horoscopes)[0];
	  setHoroscope(horoscopes[id]);
	  setTwitterButtons(id);
	  setNewHoroscopeButton();
	}

	/**
	 * Do eet.
	 */

	main();


/***/ }
/******/ ]);