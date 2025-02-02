---
title    : January Updates
id       : proactive-nastalgia
subtitle : >
        Thinking aabout west coast swingas
        dasd
        Would it be cool
length   : 5 minute read
img      : /posts/random/rainbow.png
date     : 1737876335573
author   : Barak B.
---

I’ll describe two scenarios in detail. The first is the one I found myself in, and the second is why I won’t ever use a donuts inc domain for a business or client again.

## Hosting 3rd party content
I run a service that makes it super simple to put a local web app on the internet. Try it now, start a web app listening on port 8080 and run ssh -R 80:localhost:8080 localhost.run , you’ll get a domain on the internet that you can connect to to browse your local app from anywhere. Most peeps use this to develop web apps locally or test webhooks.

The vast majority of my users are awesome, but a small number peeps use this service to put up phishing campaigns. I have automated machinery that mitigates this, but some last a few hours, and this is where my problems started.

I started receiving regular phishing complaints from a bank. I took this seriously and deployed an interstitial page in front of all free domains that made it clear to browsers that what ever was behind this domain was not their bank. I was quite pleased with this, the phishing reports stopped almost immediately, and the bad actor moved on from my platform quickly.

But then, without warning, my domain disappeared off the internet. donuts inc had placed my entire domain on serverHold. I checked my emails, re-read all the phishing reports, and no where had I received reports or warnings from donuts inc. They had done this silently, without any discussion or warning.

I checked this with my registrar, AWS Route53, and they took 8 days to even check the whois record, which is another concern, but when they finally checked on the serverHold I found out that donuts inc had received just 8 phishing reports, all for domains that were removed within 4 hours of going live on my platform, before silently placing the entire domain on serverHold.

<img src="/posts/random/rainbow.png"/>