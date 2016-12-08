var cheerio = require('cheerio');
function backdata(body,callback){
  var $ = cheerio.load(body);
  var title = $(".post__info__title").text();
  var article = $(".post__article").text();
  
  var img = $('.post__article a img');

  var imgs = [];
  for(i=0; i<img.length; i++){
    imgs.push('http:'+$(img[i]).attr('src'));

  }
  
  
  callback(false,{title:title,article:article,photo:imgs});
}

module.exports = backdata;