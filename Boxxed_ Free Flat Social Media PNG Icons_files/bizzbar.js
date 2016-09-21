/*
Bizz Bar
*/

$(document).ready(function(){$("open").click(function(){$("#newsletter-form-top").effect("bounce","slow");$("open").slideUp()})});$(document).ready(function(){$("#newsletter-form-top").effect("bounce","slow");$("close").click(function(){$("#newsletter-form-top").slideUp();$("open").slideDown()})});