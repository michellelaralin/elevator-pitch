 $(function(){
  $(".activate-tooltip").tooltip();

    doors = $('.door');
    doorLeft = $('.door-left');
    doorRight = $('.door-right');
    // mover = $('.elevator-mover');
    pitch = $('.elevator-pitch-text');
    mouth = $('.entrepreneur-mouth');
    wrapper = $('.absolute-center');
    toAnimate = $('.toAnimate');

  $(document).on ("click", "#next-pitch-button", function(){
      $(this).blur();

      var storePitch = String(elevatorPitch());

      doors.addClass('animate');
      // mover.addClass('animate');

      setTimeout(function(){
        doors.removeClass('animate');
        // mover.removeClass('animate');
      }, 2000);

      setTimeout(function(){
        pitch.html();
          var tweetLength = 116;
          var tweetText = storePitch;
          var shortTweet = tweetText.substring(0,tweetLength);
          $(".twitter-button-area").html("<a href=\"https://www.twitter.com/share\" class=\"twitter-share-button\" data-url=\"http://startupelevatorpitch.com\" data-text=\"&ldquo;" + shortTweet + "&rdquo;\" data-dnt=\"true\" data-count=\"none\">Tweet</a>");
          twttr.widgets.load();
          pitch.fadeIn(500, function(){
            $(this).html(storePitch);
          });
        }, 1000);
    });

 function elevatorPitch() {
    var intros = ["We are", "Basically, we're", "We're building"]
    intros.singular = "intro";

    var startupAdjectives = ["transparent", "deep", "semantic", "agile", "agile", "agile", "agile", "real-time", "open source", "aggregate", "scalable", "accurate", "customizable", "premium", "next generation", "personalized", "asynchronous", "authentic", "powerful", "radical", "impactful", "innovative", "disruptive", "cutting-edge", "lean"]

    startupAdjectives.singular = "startupAdjective";

    var startupMarkets = ["enterprise", "biotech", "machine learning", "social", "marketing automation", "e-commerce", "SaaS", "mobile", "B2B", "B2B", "big data analytics", "consumer-based", "data-driven", "crowdsourced", "publishing", "crowdfunding", "cloud-based", "cloud-based", "cloud-based", "content-curation", "mobile-first", "genome analysis", "native advertising", "CMS"]
    
    startupMarkets.singular = "startupMarket";

    var startupNouns = ["platform", "network", "application", "API", "marketplace", "toolbox", "interface", "ecosystem", "loyalty platform"]

    startupNouns.singular = "startupNoun";

    var startupVerbs = ["disrupts", "scales", "connects", "generates", "expedites", "mobilizes", "revolutionizes", "partners", "transforms", "synchronizes", "maximize", "shifts the paradigms of", "leverages"]

    startupVerbs.singular = "startupVerb";

    var marketNouns = ["web marketing", "local search", "sales funnels", "angel investors", "clients", "venture capital firms", "small businesses", "content distribution", "gamification", "bitcoins", "hotels", "team collaboration", "financial projections", "biomedical research", "social media", "microblogging", "ROT", "metrics"]

    marketNouns.singular = "marketNoun";

    var connectors = ["through", "with", "and", "using", "along", "into"]

    connectors.singular = "connector";

    var marketAdjectives = ["game-changing", "transparent", "deep", "semantic", "agile", "real-time", "open source", "aggregate", "scalable", "accurate", "customizable", "premium", "traditional", "highly relevant", "visual", "next generation", "personalized", "asynchronous", "authentic", "powerful", "radical", "impactful", "innovative", "ground-breaking", "state-of-the-art", "streamlined", "dynamic"]

    marketAdjectives.singular = "marketAdjective";

    var differentiatorNouns = ["non-profits", "synergy", "virality", "group messaging", "pet shops", "video messaging", "hospitality", "fine-dining restaurants", "tablets", "online advertising", "consumers", "iteration cycles", "interest graphs", "3D motion sensing", "commercial banking", "mentorship", "minimum viable products", "engagement methods"]

    differentiatorNouns.singular = "differentiatorNoun";

    //grabs random object from singular array
    function randObjectfromArray(array) {
      var randIndex = Math.floor(Math.random() * array.length);
      var randObject = array[randIndex];
      window[array.singular] = String(randObject);
    }

    //all arrays
    var allArrays = [intros, startupMarkets, startupNouns, startupVerbs, marketNouns, marketAdjectives, connectors, startupAdjectives, differentiatorNouns]

    // runs rand function on all arrays
    function randomObjectsfromArrays(arrayOfArrays) {
      for (var n = 0; n < arrayOfArrays.length; n++) {
        randObjectfromArray(arrayOfArrays[n]);
      }
    }
    randomObjectsfromArrays(allArrays);
    function aOrAn(nextWord) {
        var nextWordStr = String(nextWord);
        var fc = nextWordStr.charAt(0);
        if (fc == "a" || fc == "e" || fc == "i" || fc == "o" || fc == "u") {
            return "an";
        }
        else {
          return "a";
        }
    }
    var elevatorPitch = intro + " " + aOrAn(startupAdjective) + " " + startupAdjective + " " + startupMarket + " " + startupNoun + " " + "that" + " " + startupVerb + " " + marketNoun + " " + connector + " " + marketAdjective + " " + differentiatorNoun + ".";
    return elevatorPitch;
  }


});

