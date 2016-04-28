'use strict';

var horoscopes = [
  'From 1 to 10, how likely is it that you would recommend this horoscope to a friend or colleague?',
  'You’ll finally find job security by learning to wear many hats, but only after that genetic mutation experiment gone horrifically wrong.',
  'You will arrive at a decisive fork in the road—be prepared to merge the biggest pull request of your life.',
  'Be on the lookout—your recurring nightmare of Slack climbing out of your laptop to strangle you may materialize this week.',
  'The stars will be coming to you for answers if you don’t hit their quarterly investment predictions.',
  'Your request to “move fast and break things” has finally been heard—your newest junior web developer will be a ten ton white rhinoceros.',
  'You will be embarrassingly reminded that your company’s ability to attract talent is directly correlated with the size of your data.',
  'Rejoice! You’ll finally get a 360 degree view of your customers, but only after that harrowing freak accident with your neck.',
  'The sun is in flux—now is the time to rewrite your entire web app in that experimental new front-end javascript framework.',
  'Remember: your worth as a human being is tied directly to the month-over-month percentage growth of your company.',
  'The stars indicate that, though some failures lead to learning and growth, your failures this week are really just failures.',
  'Though it seems to make sense, there’s just something you don’t trust about this newfangled “make something people love” plan.',
  'The stars, portentously arranged at this precise moment in time, indicate that this is not a good week to merge any pull requests.',
  'Don’t be afraid to get your board’s approval for the new coffee machine—they’ll appreciate you looping them in.',
  'A nesting sun for a sensible Leo suggests saying yes to adding the ball pit in the corner of the office.',
  'Listen to your gut—it may be time to pull all devs from their current projects and make them work on chat bots.',
  'Exercise some open-mindedness—this is the week to finally allow David from accounting to design your company’s new logo.',
  'The sun blazes a trail through the bull’s zone, commanding you to hire the next person who walks through your door.',
  'Been a 9x engineer your entire life? This week try being a 10x engineer—you may surprise yourself.',
  'It may be finally time to accept the fact that your hockey stick growth will actually just be stick growth.',
  'Your app’s bugs will continue to surprise and delight you this week.',
  'The remorseful Pisces will stop everything and revert back to the waterfall development method for the next week.',
  'Now is the time to retweet generously.',
  'If you’re thinking about launching your startup today, do it tomorrow. Jupiter is still in retrograde.'
];

/**
 * Get random horoscope from array.
 */

function getRandomHoroscope() {
  return horoscopes[(Math.floor(Math.random() * horoscopes.length))];
}

/**
 * Set horoscope in the span and in the tweet.
 */

function setHoroscope(horoscope) {
  var hspan = document.querySelector('#horoscope');
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
 * Do eet.
 */

setHoroscope(getRandomHoroscope());
