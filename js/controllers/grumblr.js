var app = angular.module('grumblr');

app.controller('grumblrController',function(){

 this.formIsVisible = false;
 this.toggleForm = function(){
     console.log("toggleform");

     if(this.formIsVisible){
       this.formIsVisible = false;
     }
     else{
       this.formIsVisible = true;
     }
 }
 this.create = function(){
   this.list.unshift(this);
   this.reset();//figure out what is going on with this
 };

 this.edit = function(index){
   var grumble = this.list[index];
   this.title = grumble.title;
   this.author_name = grumble.author_name;
   this.content = grumble.content;
   this.photo_url = grumble.photo_url;
 };

 this.update = function(index){
   var grumble = this.list[index];
   grumble.title = this.title;
   grumble.author_name = this.author_name;
   grumble.content = this.content;
   grumble.photo_url = this.photo_url;
 };
 this.delete = function (index){
    this.list.splice(index,1)
 };

  this.list = [
    {
      title:"Lets drink and Fight",
      author_name:"Earnest HemingWay ",
      content:"Cras et felis nisi. Phasellus bibendum mauris quis ante aliquam, eget consequat urna facilisis. Curabitur semper ligula vitae neque dapibus congue. Aliquam posuere massa quis lacus vulputate, id sollicitudin urna fringilla. Vivamus eu cursus risus, ut bibendum lacus.  ",
      photo_url:"http://www.dogbreedinfo.com/images10/PembrokeLucy2.jpg "
    },
    {
      title:"I am Dali",
      author_name:"Salivdor Dali ",
      content:"Cras et felis nisi. Phasellus bibendum mauris quis ante aliquam, eget consequat urna facilisis. Curabitur semper ligula vitae neque dapibus congue. Aliquam posuere massa quis lacus vulputate, id sollicitudin urna fringilla. Vivamus eu cursus risus, ut bibendum lacus.  ",
      photo_url:"http://www.dogbreedinfo.com/images10/PembrokeLucy2.jpg "
    },
    {
      title:"I am a genius but lonely",
      author_name:"Dorothy Leggings",
      content:"Cras et felis nisi. Phasellus bibendum mauris quis ante aliquam, eget consequat urna facilisis. Curabitur semper ligula vitae neque dapibus congue. Aliquam posuere massa quis lacus vulputate, id sollicitudin urna fringilla. Vivamus eu cursus risus, ut bibendum lacus.  ",
      photo_url:"http://www.dogbreedinfo.com/images10/PembrokeLucy2.jpg "
    },
    {
      title:"I am a PornStar and Body Cavity Smuggler Expert",
      author_name:"Dauny Deep",
      content:"Cras et felis nisi. Phasellus bibendum mauris quis ante aliquam, eget consequat urna facilisis. Curabitur semper ligula vitae neque dapibus congue. Aliquam posuere massa quis lacus vulputate, id sollicitudin urna fringilla. Vivamus eu cursus risus, ut bibendum lacus.  ",
      photo_url:"http://www.dogbreedinfo.com/images10/PembrokeLucy2.jpg "
    },
    {
      title:"I am Matt Damon",
      author_name:"Matt Damon",
      content:"Cras et felis nisi. Phasellus bibendum mauris quis ante aliquam, eget consequat urna facilisis. Curabitur semper ligula vitae neque dapibus congue. Aliquam posuere massa quis lacus vulputate, id sollicitudin urna fringilla. Vivamus eu cursus risus, ut bibendum lacus.  ",
      photo_url:"http://www.dogbreedinfo.com/images10/PembrokeLucy2.jpg "
    },
    {
      title:"I hate everyone",
      author_name:"Red Foreman",
      content:"Cras et felis nisi. Phasellus bibendum mauris quis ante aliquam, eget consequat urna facilisis. Curabitur semper ligula vitae neque dapibus congue. Aliquam posuere massa quis lacus vulputate, id sollicitudin urna fringilla. Vivamus eu cursus risus, ut bibendum lacus.  ",
      photo_url:"http://www.dogbreedinfo.com/images10/PembrokeLucy2.jpg "
    }
  ]
});
