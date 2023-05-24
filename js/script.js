// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Bonnie Zhu
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

function myButtonClicked() {
  alert("The answer is..")
}
