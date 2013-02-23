
Users = new Meteor.Collection("users"); 



if (Meteor.is_client) {


//---------------------------------------------------

Template.hello.events = {
  'click input': function(){
    amplify.store('user_id', null);
  }
}

if(!amplify.store('user_id')){
  var user = Users.insert({
    name: Meteor.uuid(),
    last_activity: (new Date()).getTime(),

  });
  amplify.store('user_id', user);
  Session.set('user_id', amplify.store('user_id'));

} else {
  Session.set('user_id', amplify.store('user_id'));

}
//---------------------------------------------------





//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Pregame+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Pregame+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Pregame+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


Template.pregame.events({
		'click #weiter1': function () {
			Users.insert({user_id: Session.get("user_id")}); // Sehr Wichtig: Mongodb eröffnen
			amplify.store('status', "pregame");
			Session.set('status', amplify.store('status'));
			scrollTo(0,0);
			return console.log("pregame")
	},	

});


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Pregame+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Pregame+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Pregame+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++








//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Slider+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Slider+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Slider+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item1@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item1.events({
  'click .item1': function () {




//------- 

   if(document.getElementById('1').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item1': "1"} });
return console.log("Item1: 1")
}

//-------



//------- 

   if(document.getElementById('2').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item1': "2"} });
return console.log("Item1: 2")
}

//-------
//------- 

   if(document.getElementById('3').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item1': "3"} });
return console.log("Item1: 3")
}

//-------
//------- 

   if(document.getElementById('4').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item1': "4"} });
return console.log("Item1: 4")
}

//-------
//------- 

   if(document.getElementById('5').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item1': "5"} });
return console.log("Item1: 5")
}

//-------
//------- 

   if(document.getElementById('6').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item1': "6"} });
return console.log("Item1: 6")
}

//-------
//------- 

   if(document.getElementById('7').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item1': "7"} });
return console.log("Item1: 7")
}

//-------
//------- 

   if(document.getElementById('8').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item1': "8"} });
return console.log("Item1: 8")
}

//-------
//------- 

   if(document.getElementById('9').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item1': "9"} });
return console.log("Item1: 9")
}

//-------

 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item1@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item2@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item2.events({
  'click .item2': function () {




//------- 

   if(document.getElementById('10').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item2': "1"} });
return console.log("Item2: 1")
}

//-------



//------- 

   if(document.getElementById('11').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item2': "2"} });
return console.log("Item2: 2")
}

//-------
//------- 

   if(document.getElementById('12').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item2': "3"} });
return console.log("Item2: 3")
}

//-------
//------- 

   if(document.getElementById('13').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item2': "4"} });
return console.log("Item2: 4")
}

//-------
//------- 

   if(document.getElementById('14').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item2': "5"} });
return console.log("Item2: 5")
}

//-------
//------- 

   if(document.getElementById('15').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item2': "6"} });
return console.log("Item2: 6")
}

//-------
//------- 

   if(document.getElementById('16').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item2': "7"} });
return console.log("Item2: 7")
}

//-------
//------- 

   if(document.getElementById('17').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item2': "8"} });
return console.log("Item2: 8")
}

//-------
//------- 

   if(document.getElementById('18').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item2': "9"} });
return console.log("Item2: 9")
}

//-------

 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item2@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item3@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item3.events({
  'click .item3': function () {




//------- 

   if(document.getElementById('19').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item3': "1"} });
return console.log("Item3: 1")
}

//-------



//------- 

   if(document.getElementById('20').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item3': "2"} });
return console.log("Item3: 2")
}

//-------
//------- 

   if(document.getElementById('21').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item3': "3"} });
return console.log("Item3: 3")
}

//-------
//------- 

   if(document.getElementById('22').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item3': "4"} });
return console.log("Item3: 4")
}

//-------
//------- 

   if(document.getElementById('23').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item3': "5"} });
return console.log("Item3: 5")
}

//-------
//------- 

   if(document.getElementById('24').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item3': "6"} });
return console.log("Item3: 6")
}

//-------
//------- 

   if(document.getElementById('25').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item3': "7"} });
return console.log("Item3: 7")
}

//-------
//------- 

   if(document.getElementById('26').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item3': "8"} });
return console.log("Item3: 8")
}

//-------
//------- 

   if(document.getElementById('27').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item3': "9"} });
return console.log("Item3: 9")
}

//-------

 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item3@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item4@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item4.events({
  'click .item4': function () {




//------- 

   if(document.getElementById('28').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item4': "1"} });
return console.log("Item4: 1")
}

//-------



//------- 

   if(document.getElementById('29').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item4': "2"} });
return console.log("Item4: 2")
}

//-------
//------- 

   if(document.getElementById('30').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item4': "3"} });
return console.log("Item4: 3")
}

//-------
//------- 

   if(document.getElementById('31').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item4': "4"} });
return console.log("Item4: 4")
}

//-------
//------- 

   if(document.getElementById('32').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item4': "5"} });
return console.log("Item4: 5")
}

//-------
//------- 

   if(document.getElementById('33').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item4': "6"} });
return console.log("Item4: 6")
}

//-------
//------- 

   if(document.getElementById('34').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item4': "7"} });
return console.log("Item4: 7")
}

//-------
//------- 

   if(document.getElementById('35').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item4': "8"} });
return console.log("Item4: 8")
}

//-------
//------- 

   if(document.getElementById('36').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item4': "9"} });
return console.log("Item4: 9")
}

//-------

 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item4@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item5@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item5.events({
  'click .item5': function () {




//------- 

   if(document.getElementById('37').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item5': "1"} });
return console.log("Item5: 1")
}

//-------



//------- 

   if(document.getElementById('38').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item5': "2"} });
return console.log("Item5: 2")
}

//-------
//------- 

   if(document.getElementById('39').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item5': "3"} });
return console.log("Item5: 3")
}

//-------
//------- 

   if(document.getElementById('40').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item5': "4"} });
return console.log("Item5: 4")
}

//-------
//------- 

   if(document.getElementById('41').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item5': "5"} });
return console.log("Item5: 5")
}

//-------
//------- 

   if(document.getElementById('42').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item5': "6"} });
return console.log("Item5: 6")
}

//-------
//------- 

   if(document.getElementById('43').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item5': "7"} });
return console.log("Item5: 7")
}

//-------
//------- 

   if(document.getElementById('44').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item5': "8"} });
return console.log("Item5: 8")
}

//-------
//------- 

   if(document.getElementById('45').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item5': "9"} });
return console.log("Item5: 9")
}

//-------

 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item5@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item6@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item6.events({
  'click .item6': function () {




//------- 

   if(document.getElementById('46').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item6': "1"} });
return console.log("Item6: 1")
}

//-------



//------- 

   if(document.getElementById('47').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item6': "2"} });
return console.log("Item6: 2")
}

//-------
//------- 

   if(document.getElementById('48').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item6': "3"} });
return console.log("Item6: 3")
}

//-------
//------- 

   if(document.getElementById('49').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item6': "4"} });
return console.log("Item6: 4")
}

//-------
//------- 

   if(document.getElementById('50').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item6': "5"} });
return console.log("Item6: 5")
}

//-------
//------- 

   if(document.getElementById('51').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item6': "6"} });
return console.log("Item6: 6")
}

//-------
//------- 

   if(document.getElementById('52').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item6': "7"} });
return console.log("Item6: 7")
}

//-------
//------- 

   if(document.getElementById('53').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item6': "8"} });
return console.log("Item6: 8")
}

//-------
//------- 

   if(document.getElementById('54').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item6': "9"} });
return console.log("Item6: 9")
}

//-------

 }
});


Template.item6.events({
		'click #weiter2': function () {
			amplify.store('status', "slider");
			Session.set('status', amplify.store('status'));
			scrollTo(0,0);
			return console.log("slider")
	},	

});





//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item6@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@





//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Slider+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Slider+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Slider+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Schwartz+++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Schwartz+++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Schwartz+++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++








//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item7@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item7bis27.events({
  'click .item7': function () {




//------- 

   if(document.getElementById('55').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item7': "1"} });
return console.log("Item7: 1")
}

//-------



//------- 

   if(document.getElementById('56').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item7': "2"} });
return console.log("Item7: 2")
}

//-------
//------- 

   if(document.getElementById('57').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item7': "3"} });
return console.log("Item7: 3")
}

//-------
//------- 

   if(document.getElementById('58').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item7': "4"} });
return console.log("Item7: 4")
}

//-------
//------- 

   if(document.getElementById('59').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item7': "5"} });
return console.log("Item7: 5")
}

//-------
//------- 

   if(document.getElementById('60').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item7': "6"} });
return console.log("Item7: 6")
}

//-------



 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item7@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item8@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item7bis27.events({
  'click .item8': function () {




//------- 

   if(document.getElementById('61').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item8': "1"} });
return console.log("Item8: 1")
}

//-------



//------- 

   if(document.getElementById('62').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item8': "2"} });
return console.log("Item8: 2")
}

//-------
//------- 

   if(document.getElementById('63').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item8': "3"} });
return console.log("Item8: 3")
}

//-------
//------- 

   if(document.getElementById('64').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item8': "4"} });
return console.log("Item8: 4")
}

//-------
//------- 

   if(document.getElementById('65').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item8': "5"} });
return console.log("Item8: 5")
}

//-------
//------- 

   if(document.getElementById('66').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item8': "6"} });
return console.log("Item8: 6")
}

//-------



 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item8@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item9@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item7bis27.events({
  'click .item9': function () {




//------- 

   if(document.getElementById('67').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item9': "1"} });
return console.log("Item9: 1")
}

//-------



//------- 

   if(document.getElementById('68').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item9': "2"} });
return console.log("Item9: 2")
}

//-------
//------- 

   if(document.getElementById('69').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item9': "3"} });
return console.log("Item9: 3")
}

//-------
//------- 

   if(document.getElementById('70').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item9': "4"} });
return console.log("Item9: 4")
}

//-------
//------- 

   if(document.getElementById('71').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item9': "5"} });
return console.log("Item9: 5")
}

//-------
//------- 

   if(document.getElementById('72').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item9': "6"} });
return console.log("Item9: 6")
}

//-------



 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item9@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item10@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item7bis27.events({
  'click .item10': function () {




//------- 

   if(document.getElementById('73').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item10': "1"} });
return console.log("Item10: 1")
}

//-------



//------- 

   if(document.getElementById('74').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item10': "2"} });
return console.log("Item10: 2")
}

//-------
//------- 

   if(document.getElementById('75').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item10': "3"} });
return console.log("Item10: 3")
}

//-------
//------- 

   if(document.getElementById('76').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item10': "4"} });
return console.log("Item10: 4")
}

//-------
//------- 

   if(document.getElementById('77').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item10': "5"} });
return console.log("Item10: 5")
}

//-------
//------- 

   if(document.getElementById('78').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item10': "6"} });
return console.log("Item10: 6")
}

//-------



 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item10@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item11@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item7bis27.events({
  'click .item11': function () {




//------- 

   if(document.getElementById('79').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item11': "1"} });
return console.log("Item11: 1")
}

//-------



//------- 

   if(document.getElementById('80').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item11': "2"} });
return console.log("Item11: 2")
}

//-------
//------- 

   if(document.getElementById('81').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item11': "3"} });
return console.log("Item11: 3")
}

//-------
//------- 

   if(document.getElementById('82').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item11': "4"} });
return console.log("Item11: 4")
}

//-------
//------- 

   if(document.getElementById('83').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item11': "5"} });
return console.log("Item11: 5")
}

//-------
//------- 

   if(document.getElementById('84').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item11': "6"} });
return console.log("Item11: 6")
}

//-------



 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item11@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item12@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item7bis27.events({
  'click .item12': function () {




//------- 

   if(document.getElementById('85').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item12': "1"} });
return console.log("Item12: 1")
}

//-------



//------- 

   if(document.getElementById('86').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item12': "2"} });
return console.log("Item12: 2")
}

//-------
//------- 

   if(document.getElementById('87').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item12': "3"} });
return console.log("Item12: 3")
}

//-------
//------- 

   if(document.getElementById('88').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item12': "4"} });
return console.log("Item12: 4")
}

//-------
//------- 

   if(document.getElementById('89').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item12': "5"} });
return console.log("Item12: 5")
}

//-------
//------- 

   if(document.getElementById('90').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item12': "6"} });
return console.log("Item12: 6")
}

//-------



 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item12@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item13@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item7bis27.events({
  'click .item13': function () {




//------- 

   if(document.getElementById('91').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item13': "1"} });
return console.log("Item13: 1")
}

//-------



//------- 

   if(document.getElementById('92').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item13': "2"} });
return console.log("Item13: 2")
}

//-------
//------- 

   if(document.getElementById('93').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item13': "3"} });
return console.log("Item13: 3")
}

//-------
//------- 

   if(document.getElementById('94').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item13': "4"} });
return console.log("Item13: 4")
}

//-------
//------- 

   if(document.getElementById('95').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item13': "5"} });
return console.log("Item13: 5")
}

//-------
//------- 

   if(document.getElementById('96').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item13': "6"} });
return console.log("Item13: 6")
}

//-------



 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item13@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item14@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item7bis27.events({
  'click .item14': function () {




//------- 

   if(document.getElementById('97').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item14': "1"} });
return console.log("Item14: 1")
}

//-------



//------- 

   if(document.getElementById('98').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item14': "2"} });
return console.log("Item14: 2")
}

//-------
//------- 

   if(document.getElementById('99').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item14': "3"} });
return console.log("Item14: 3")
}

//-------
//------- 

   if(document.getElementById('100').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item14': "4"} });
return console.log("Item14: 4")
}

//-------
//------- 

   if(document.getElementById('101').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item14': "5"} });
return console.log("Item14: 5")
}

//-------
//------- 

   if(document.getElementById('102').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item14': "6"} });
return console.log("Item14: 6")
}

//-------



 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item14@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item15@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item7bis27.events({
  'click .item15': function () {




//------- 

   if(document.getElementById('103').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item15': "1"} });
return console.log("Item15: 1")
}

//-------



//------- 

   if(document.getElementById('104').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item15': "2"} });
return console.log("Item15: 2")
}

//-------
//------- 

   if(document.getElementById('105').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item15': "3"} });
return console.log("Item15: 3")
}

//-------
//------- 

   if(document.getElementById('106').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item15': "4"} });
return console.log("Item15: 4")
}

//-------
//------- 

   if(document.getElementById('107').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item15': "5"} });
return console.log("Item15: 5")
}

//-------
//------- 

   if(document.getElementById('108').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item15': "6"} });
return console.log("Item15: 6")
}

//-------



 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item15@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item16@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item7bis27.events({
  'click .item16': function () {




//------- 

   if(document.getElementById('109').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item16': "1"} });
return console.log("Item16: 1")
}

//-------



//------- 

   if(document.getElementById('110').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item16': "2"} });
return console.log("Item16: 2")
}

//-------
//------- 

   if(document.getElementById('111').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item16': "3"} });
return console.log("Item16: 3")
}

//-------
//------- 

   if(document.getElementById('112').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item16': "4"} });
return console.log("Item16: 4")
}

//-------
//------- 

   if(document.getElementById('113').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item16': "5"} });
return console.log("Item16: 5")
}

//-------
//------- 

   if(document.getElementById('114').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item16': "6"} });
return console.log("Item16: 6")
}

//-------



 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item16@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item17@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item7bis27.events({
  'click .item17': function () {




//------- 

   if(document.getElementById('115').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item17': "1"} });
return console.log("Item17: 1")
}

//-------



//------- 

   if(document.getElementById('116').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item17': "2"} });
return console.log("Item17: 2")
}

//-------
//------- 

   if(document.getElementById('117').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item17': "3"} });
return console.log("Item17: 3")
}

//-------
//------- 

   if(document.getElementById('118').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item17': "4"} });
return console.log("Item17: 4")
}

//-------
//------- 

   if(document.getElementById('119').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item17': "5"} });
return console.log("Item17: 5")
}

//-------
//------- 

   if(document.getElementById('120').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item17': "6"} });
return console.log("Item17: 6")
}

//-------



 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item17@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item18@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item7bis27.events({
  'click .item18': function () {




//------- 

   if(document.getElementById('121').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item18': "1"} });
return console.log("Item18: 1")
}

//-------



//------- 

   if(document.getElementById('122').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item18': "2"} });
return console.log("Item18: 2")
}

//-------
//------- 

   if(document.getElementById('123').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item18': "3"} });
return console.log("Item18: 3")
}

//-------
//------- 

   if(document.getElementById('124').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item18': "4"} });
return console.log("Item18: 4")
}

//-------
//------- 

   if(document.getElementById('125').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item18': "5"} });
return console.log("Item18: 5")
}

//-------
//------- 

   if(document.getElementById('126').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item18': "6"} });
return console.log("Item18: 6")
}

//-------



 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item18@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item19@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item7bis27.events({
  'click .item19': function () {




//------- 

   if(document.getElementById('127').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item19': "1"} });
return console.log("Item19: 1")
}

//-------



//------- 

   if(document.getElementById('128').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item19': "2"} });
return console.log("Item19: 2")
}

//-------
//------- 

   if(document.getElementById('129').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item19': "3"} });
return console.log("Item19: 3")
}

//-------
//------- 

   if(document.getElementById('130').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item19': "4"} });
return console.log("Item19: 4")
}

//-------
//------- 

   if(document.getElementById('131').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item19': "5"} });
return console.log("Item19: 5")
}

//-------
//------- 

   if(document.getElementById('132').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item19': "6"} });
return console.log("Item19: 6")
}

//-------



 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item19@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item20@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item7bis27.events({
  'click .item20': function () {




//------- 

   if(document.getElementById('133').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item20': "1"} });
return console.log("Item20: 1")
}

//-------



//------- 

   if(document.getElementById('134').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item20': "2"} });
return console.log("Item20: 2")
}

//-------
//------- 

   if(document.getElementById('135').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item20': "3"} });
return console.log("Item20: 3")
}

//-------
//------- 

   if(document.getElementById('136').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item20': "4"} });
return console.log("Item20: 4")
}

//-------
//------- 

   if(document.getElementById('137').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item20': "5"} });
return console.log("Item20: 5")
}

//-------
//------- 

   if(document.getElementById('138').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item20': "6"} });
return console.log("Item20: 6")
}

//-------



 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item20@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item21@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item7bis27.events({
  'click .item21': function () {




//------- 

   if(document.getElementById('139').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item21': "1"} });
return console.log("Item21: 1")
}

//-------



//------- 

   if(document.getElementById('140').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item21': "2"} });
return console.log("Item21: 2")
}

//-------
//------- 

   if(document.getElementById('141').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item21': "3"} });
return console.log("Item21: 3")
}

//-------
//------- 

   if(document.getElementById('142').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item21': "4"} });
return console.log("Item21: 4")
}

//-------
//------- 

   if(document.getElementById('143').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item21': "5"} });
return console.log("Item21: 5")
}

//-------
//------- 

   if(document.getElementById('144').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item21': "6"} });
return console.log("Item21: 6")
}

//-------



 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item21@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item22@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item7bis27.events({
  'click .item22': function () {




//------- 

   if(document.getElementById('145').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item22': "1"} });
return console.log("Item22: 1")
}

//-------



//------- 

   if(document.getElementById('146').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item22': "2"} });
return console.log("Item22: 2")
}

//-------
//------- 

   if(document.getElementById('147').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item22': "3"} });
return console.log("Item22: 3")
}

//-------
//------- 

   if(document.getElementById('148').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item22': "4"} });
return console.log("Item22: 4")
}

//-------
//------- 

   if(document.getElementById('149').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item22': "5"} });
return console.log("Item22: 5")
}

//-------
//------- 

   if(document.getElementById('150').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item22': "6"} });
return console.log("Item22: 6")
}

//-------



 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item22@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item23@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item7bis27.events({
  'click .item23': function () {




//------- 

   if(document.getElementById('151').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item23': "1"} });
return console.log("Item23: 1")
}

//-------



//------- 

   if(document.getElementById('152').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item23': "2"} });
return console.log("Item23: 2")
}

//-------
//------- 

   if(document.getElementById('153').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item23': "3"} });
return console.log("Item23: 3")
}

//-------
//------- 

   if(document.getElementById('154').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item23': "4"} });
return console.log("Item23: 4")
}

//-------
//------- 

   if(document.getElementById('155').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item23': "5"} });
return console.log("Item23: 5")
}

//-------
//------- 

   if(document.getElementById('156').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item23': "6"} });
return console.log("Item23: 6")
}

//-------



 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item23@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item24@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item7bis27.events({
  'click .item24': function () {




//------- 

   if(document.getElementById('157').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item24': "1"} });
return console.log("Item24: 1")
}

//-------



//------- 

   if(document.getElementById('158').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item24': "2"} });
return console.log("Item24: 2")
}

//-------
//------- 

   if(document.getElementById('159').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item24': "3"} });
return console.log("Item24: 3")
}

//-------
//------- 

   if(document.getElementById('160').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item24': "4"} });
return console.log("Item24: 4")
}

//-------
//------- 

   if(document.getElementById('161').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item24': "5"} });
return console.log("Item24: 5")
}

//-------
//------- 

   if(document.getElementById('162').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item24': "6"} });
return console.log("Item24: 6")
}

//-------



 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item24@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item25@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item7bis27.events({
  'click .item25': function () {




//------- 

   if(document.getElementById('163').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item25': "1"} });
return console.log("Item25: 1")
}

//-------



//------- 

   if(document.getElementById('164').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item25': "2"} });
return console.log("Item25: 2")
}

//-------
//------- 

   if(document.getElementById('165').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item25': "3"} });
return console.log("Item25: 3")
}

//-------
//------- 

   if(document.getElementById('166').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item25': "4"} });
return console.log("Item25: 4")
}

//-------
//------- 

   if(document.getElementById('167').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item25': "5"} });
return console.log("Item25: 5")
}

//-------
//------- 

   if(document.getElementById('168').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item25': "6"} });
return console.log("Item25: 6")
}

//-------



 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item25@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item26@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item7bis27.events({
  'click .item26': function () {




//------- 

   if(document.getElementById('169').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item26': "1"} });
return console.log("Item26: 1")
}

//-------



//------- 

   if(document.getElementById('170').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item26': "2"} });
return console.log("Item26: 2")
}

//-------
//------- 

   if(document.getElementById('171').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item26': "3"} });
return console.log("Item26: 3")
}

//-------
//------- 

   if(document.getElementById('172').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item26': "4"} });
return console.log("Item26: 4")
}

//-------
//------- 

   if(document.getElementById('173').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item26': "5"} });
return console.log("Item26: 5")
}

//-------
//------- 

   if(document.getElementById('174').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item26': "6"} });
return console.log("Item26: 6")
}

//-------



 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item26@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item27@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item7bis27.events({
  'click .item27': function () {




//------- 

   if(document.getElementById('175').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item27': "1"} });
return console.log("Item27: 1")
}

//-------



//------- 

   if(document.getElementById('176').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item27': "2"} });
return console.log("Item27: 2")
}

//-------
//------- 

   if(document.getElementById('177').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item27': "3"} });
return console.log("Item27: 3")
}

//-------
//------- 

   if(document.getElementById('178').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item27': "4"} });
return console.log("Item27: 4")
}

//-------
//------- 

   if(document.getElementById('179').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item27': "5"} });
return console.log("Item27: 5")
}

//-------
//------- 

   if(document.getElementById('180').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item27': "6"} });
return console.log("Item27: 6")
}

//-------



 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item27@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item7bis27.events({
		'click #weiter3': function () {
			amplify.store('status', "schwartz");
			Session.set('status', amplify.store('status'));
			scrollTo(0,0);
			return console.log("schwartz")
	},	

});






  
  
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Schwartz+++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Schwartz+++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Schwartz+++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
  
  
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Big-Five+++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Big-Five+++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Big-Five+++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 








//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item28@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item28': function () {




//------- 

   if(document.getElementById('181').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item28': "1"} });
return console.log("Item28: 1")
}

//-------



//------- 

   if(document.getElementById('182').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item28': "2"} });
return console.log("Item28: 2")
}

//-------
//------- 

   if(document.getElementById('183').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item28': "3"} });
return console.log("Item28: 3")
}

//-------
//------- 

   if(document.getElementById('184').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item28': "4"} });
return console.log("Item28: 4")
}

//-------
//------- 

   if(document.getElementById('185').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item28': "5"} });
return console.log("Item28: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item28@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item29@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item29': function () {




//------- 

   if(document.getElementById('186').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item29': "1"} });
return console.log("Item29: 1")
}

//-------



//------- 

   if(document.getElementById('187').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item29': "2"} });
return console.log("Item29: 2")
}

//-------
//------- 

   if(document.getElementById('188').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item29': "3"} });
return console.log("Item29: 3")
}

//-------
//------- 

   if(document.getElementById('189').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item29': "4"} });
return console.log("Item29: 4")
}

//-------
//------- 

   if(document.getElementById('190').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item29': "5"} });
return console.log("Item29: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item29@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item30@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item30': function () {




//------- 

   if(document.getElementById('191').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item30': "1"} });
return console.log("Item30: 1")
}

//-------



//------- 

   if(document.getElementById('192').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item30': "2"} });
return console.log("Item30: 2")
}

//-------
//------- 

   if(document.getElementById('193').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item30': "3"} });
return console.log("Item30: 3")
}

//-------
//------- 

   if(document.getElementById('194').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item30': "4"} });
return console.log("Item30: 4")
}

//-------
//------- 

   if(document.getElementById('195').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item30': "5"} });
return console.log("Item30: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item30@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item31@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item31': function () {




//------- 

   if(document.getElementById('196').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item31': "1"} });
return console.log("Item31: 1")
}

//-------



//------- 

   if(document.getElementById('197').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item31': "2"} });
return console.log("Item31: 2")
}

//-------
//------- 

   if(document.getElementById('198').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item31': "3"} });
return console.log("Item31: 3")
}

//-------
//------- 

   if(document.getElementById('199').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item31': "4"} });
return console.log("Item31: 4")
}

//-------
//------- 

   if(document.getElementById('200').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item31': "5"} });
return console.log("Item31: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item31@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item32@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item32': function () {




//------- 

   if(document.getElementById('201').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item32': "1"} });
return console.log("Item32: 1")
}

//-------



//------- 

   if(document.getElementById('202').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item32': "2"} });
return console.log("Item32: 2")
}

//-------
//------- 

   if(document.getElementById('203').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item32': "3"} });
return console.log("Item32: 3")
}

//-------
//------- 

   if(document.getElementById('204').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item32': "4"} });
return console.log("Item32: 4")
}

//-------
//------- 

   if(document.getElementById('205').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item32': "5"} });
return console.log("Item32: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item32@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item33@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item33': function () {




//------- 

   if(document.getElementById('206').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item33': "1"} });
return console.log("Item33: 1")
}

//-------



//------- 

   if(document.getElementById('207').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item33': "2"} });
return console.log("Item33: 2")
}

//-------
//------- 

   if(document.getElementById('208').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item33': "3"} });
return console.log("Item33: 3")
}

//-------
//------- 

   if(document.getElementById('209').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item33': "4"} });
return console.log("Item33: 4")
}

//-------
//------- 

   if(document.getElementById('210').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item33': "5"} });
return console.log("Item33: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item33@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item34@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item34': function () {




//------- 

   if(document.getElementById('211').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item34': "1"} });
return console.log("Item34: 1")
}

//-------



//------- 

   if(document.getElementById('212').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item34': "2"} });
return console.log("Item34: 2")
}

//-------
//------- 

   if(document.getElementById('213').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item34': "3"} });
return console.log("Item34: 3")
}

//-------
//------- 

   if(document.getElementById('214').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item34': "4"} });
return console.log("Item34: 4")
}

//-------
//------- 

   if(document.getElementById('215').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item34': "5"} });
return console.log("Item34: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item34@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item35@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item35': function () {




//------- 

   if(document.getElementById('216').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item35': "1"} });
return console.log("Item35: 1")
}

//-------



//------- 

   if(document.getElementById('217').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item35': "2"} });
return console.log("Item35: 2")
}

//-------
//------- 

   if(document.getElementById('218').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item35': "3"} });
return console.log("Item35: 3")
}

//-------
//------- 

   if(document.getElementById('219').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item35': "4"} });
return console.log("Item35: 4")
}

//-------
//------- 

   if(document.getElementById('220').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item35': "5"} });
return console.log("Item35: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item35@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item36@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item36': function () {




//------- 

   if(document.getElementById('221').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item36': "1"} });
return console.log("Item36: 1")
}

//-------



//------- 

   if(document.getElementById('222').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item36': "2"} });
return console.log("Item36: 2")
}

//-------
//------- 

   if(document.getElementById('223').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item36': "3"} });
return console.log("Item36: 3")
}

//-------
//------- 

   if(document.getElementById('224').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item36': "4"} });
return console.log("Item36: 4")
}

//-------
//------- 

   if(document.getElementById('225').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item36': "5"} });
return console.log("Item36: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item36@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item37@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item37': function () {




//------- 

   if(document.getElementById('226').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item37': "1"} });
return console.log("Item37: 1")
}

//-------



//------- 

   if(document.getElementById('227').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item37': "2"} });
return console.log("Item37: 2")
}

//-------
//------- 

   if(document.getElementById('228').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item37': "3"} });
return console.log("Item37: 3")
}

//-------
//------- 

   if(document.getElementById('229').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item37': "4"} });
return console.log("Item37: 4")
}

//-------
//------- 

   if(document.getElementById('230').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item37': "5"} });
return console.log("Item37: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item37@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item38@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item38': function () {




//------- 

   if(document.getElementById('231').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item38': "1"} });
return console.log("Item38: 1")
}

//-------



//------- 

   if(document.getElementById('232').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item38': "2"} });
return console.log("Item38: 2")
}

//-------
//------- 

   if(document.getElementById('233').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item38': "3"} });
return console.log("Item38: 3")
}

//-------
//------- 

   if(document.getElementById('234').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item38': "4"} });
return console.log("Item38: 4")
}

//-------
//------- 

   if(document.getElementById('235').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item38': "5"} });
return console.log("Item38: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item38@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item39@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item39': function () {




//------- 

   if(document.getElementById('236').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item39': "1"} });
return console.log("Item39: 1")
}

//-------



//------- 

   if(document.getElementById('237').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item39': "2"} });
return console.log("Item39: 2")
}

//-------
//------- 

   if(document.getElementById('238').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item39': "3"} });
return console.log("Item39: 3")
}

//-------
//------- 

   if(document.getElementById('239').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item39': "4"} });
return console.log("Item39: 4")
}

//-------
//------- 

   if(document.getElementById('240').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item39': "5"} });
return console.log("Item39: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item39@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item40@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item40': function () {




//------- 

   if(document.getElementById('241').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item40': "1"} });
return console.log("Item40: 1")
}

//-------



//------- 

   if(document.getElementById('242').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item40': "2"} });
return console.log("Item40: 2")
}

//-------
//------- 

   if(document.getElementById('243').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item40': "3"} });
return console.log("Item40: 3")
}

//-------
//------- 

   if(document.getElementById('244').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item40': "4"} });
return console.log("Item40: 4")
}

//-------
//------- 

   if(document.getElementById('245').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item40': "5"} });
return console.log("Item40: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item40@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item41@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item41': function () {




//------- 

   if(document.getElementById('246').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item41': "1"} });
return console.log("Item41: 1")
}

//-------



//------- 

   if(document.getElementById('247').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item41': "2"} });
return console.log("Item41: 2")
}

//-------
//------- 

   if(document.getElementById('248').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item41': "3"} });
return console.log("Item41: 3")
}

//-------
//------- 

   if(document.getElementById('249').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item41': "4"} });
return console.log("Item41: 4")
}

//-------
//------- 

   if(document.getElementById('250').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item41': "5"} });
return console.log("Item41: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item41@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item42@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item42': function () {




//------- 

   if(document.getElementById('251').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item42': "1"} });
return console.log("Item42: 1")
}

//-------



//------- 

   if(document.getElementById('252').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item42': "2"} });
return console.log("Item42: 2")
}

//-------
//------- 

   if(document.getElementById('253').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item42': "3"} });
return console.log("Item42: 3")
}

//-------
//------- 

   if(document.getElementById('254').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item42': "4"} });
return console.log("Item42: 4")
}

//-------
//------- 

   if(document.getElementById('255').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item42': "5"} });
return console.log("Item42: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item42@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item43@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item43': function () {




//------- 

   if(document.getElementById('256').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item43': "1"} });
return console.log("Item43: 1")
}

//-------



//------- 

   if(document.getElementById('257').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item43': "2"} });
return console.log("Item43: 2")
}

//-------
//------- 

   if(document.getElementById('258').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item43': "3"} });
return console.log("Item43: 3")
}

//-------
//------- 

   if(document.getElementById('259').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item43': "4"} });
return console.log("Item43: 4")
}

//-------
//------- 

   if(document.getElementById('260').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item43': "5"} });
return console.log("Item43: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item43@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item44@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item44': function () {




//------- 

   if(document.getElementById('261').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item44': "1"} });
return console.log("Item44: 1")
}

//-------



//------- 

   if(document.getElementById('262').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item44': "2"} });
return console.log("Item44: 2")
}

//-------
//------- 

   if(document.getElementById('263').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item44': "3"} });
return console.log("Item44: 3")
}

//-------
//------- 

   if(document.getElementById('264').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item44': "4"} });
return console.log("Item44: 4")
}

//-------
//------- 

   if(document.getElementById('265').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item44': "5"} });
return console.log("Item44: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item44@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item45@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item45': function () {




//------- 

   if(document.getElementById('266').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item45': "1"} });
return console.log("Item45: 1")
}

//-------



//------- 

   if(document.getElementById('267').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item45': "2"} });
return console.log("Item45: 2")
}

//-------
//------- 

   if(document.getElementById('268').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item45': "3"} });
return console.log("Item45: 3")
}

//-------
//------- 

   if(document.getElementById('269').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item45': "4"} });
return console.log("Item45: 4")
}

//-------
//------- 

   if(document.getElementById('270').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item45': "5"} });
return console.log("Item45: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item45@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item46@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item46': function () {




//------- 

   if(document.getElementById('271').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item46': "1"} });
return console.log("Item46: 1")
}

//-------



//------- 

   if(document.getElementById('272').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item46': "2"} });
return console.log("Item46: 2")
}

//-------
//------- 

   if(document.getElementById('273').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item46': "3"} });
return console.log("Item46: 3")
}

//-------
//------- 

   if(document.getElementById('274').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item46': "4"} });
return console.log("Item46: 4")
}

//-------
//------- 

   if(document.getElementById('275').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item46': "5"} });
return console.log("Item46: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item46@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item47@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item47': function () {




//------- 

   if(document.getElementById('276').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item47': "1"} });
return console.log("Item47: 1")
}

//-------



//------- 

   if(document.getElementById('277').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item47': "2"} });
return console.log("Item47: 2")
}

//-------
//------- 

   if(document.getElementById('278').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item47': "3"} });
return console.log("Item47: 3")
}

//-------
//------- 

   if(document.getElementById('279').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item47': "4"} });
return console.log("Item47: 4")
}

//-------
//------- 

   if(document.getElementById('280').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item47': "5"} });
return console.log("Item47: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item47@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item48@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item48': function () {




//------- 

   if(document.getElementById('281').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item48': "1"} });
return console.log("Item48: 1")
}

//-------



//------- 

   if(document.getElementById('282').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item48': "2"} });
return console.log("Item48: 2")
}

//-------
//------- 

   if(document.getElementById('283').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item48': "3"} });
return console.log("Item48: 3")
}

//-------
//------- 

   if(document.getElementById('284').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item48': "4"} });
return console.log("Item48: 4")
}

//-------
//------- 

   if(document.getElementById('285').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item48': "5"} });
return console.log("Item48: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item48@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item49@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item49': function () {




//------- 

   if(document.getElementById('286').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item49': "1"} });
return console.log("Item49: 1")
}

//-------



//------- 

   if(document.getElementById('287').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item49': "2"} });
return console.log("Item49: 2")
}

//-------
//------- 

   if(document.getElementById('288').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item49': "3"} });
return console.log("Item49: 3")
}

//-------
//------- 

   if(document.getElementById('289').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item49': "4"} });
return console.log("Item49: 4")
}

//-------
//------- 

   if(document.getElementById('290').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item49': "5"} });
return console.log("Item49: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item49@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item50@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item50': function () {




//------- 

   if(document.getElementById('291').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item50': "1"} });
return console.log("Item50: 1")
}

//-------



//------- 

   if(document.getElementById('292').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item50': "2"} });
return console.log("Item50: 2")
}

//-------
//------- 

   if(document.getElementById('293').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item50': "3"} });
return console.log("Item50: 3")
}

//-------
//------- 

   if(document.getElementById('294').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item50': "4"} });
return console.log("Item50: 4")
}

//-------
//------- 

   if(document.getElementById('295').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item50': "5"} });
return console.log("Item50: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item50@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item51@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item51': function () {




//------- 

   if(document.getElementById('296').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item51': "1"} });
return console.log("Item51: 1")
}

//-------



//------- 

   if(document.getElementById('297').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item51': "2"} });
return console.log("Item51: 2")
}

//-------
//------- 

   if(document.getElementById('298').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item51': "3"} });
return console.log("Item51: 3")
}

//-------
//------- 

   if(document.getElementById('299').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item51': "4"} });
return console.log("Item51: 4")
}

//-------
//------- 

   if(document.getElementById('300').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item51': "5"} });
return console.log("Item51: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item51@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item52@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item52': function () {




//------- 

   if(document.getElementById('301').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item52': "1"} });
return console.log("Item52: 1")
}

//-------



//------- 

   if(document.getElementById('302').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item52': "2"} });
return console.log("Item52: 2")
}

//-------
//------- 

   if(document.getElementById('303').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item52': "3"} });
return console.log("Item52: 3")
}

//-------
//------- 

   if(document.getElementById('304').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item52': "4"} });
return console.log("Item52: 4")
}

//-------
//------- 

   if(document.getElementById('305').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item52': "5"} });
return console.log("Item52: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item52@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item53@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item53': function () {




//------- 

   if(document.getElementById('306').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item53': "1"} });
return console.log("Item53: 1")
}

//-------



//------- 

   if(document.getElementById('307').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item53': "2"} });
return console.log("Item53: 2")
}

//-------
//------- 

   if(document.getElementById('308').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item53': "3"} });
return console.log("Item53: 3")
}

//-------
//------- 

   if(document.getElementById('309').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item53': "4"} });
return console.log("Item53: 4")
}

//-------
//------- 

   if(document.getElementById('310').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item53': "5"} });
return console.log("Item53: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item53@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item54@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item54': function () {




//------- 

   if(document.getElementById('311').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item54': "1"} });
return console.log("Item54: 1")
}

//-------



//------- 

   if(document.getElementById('312').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item54': "2"} });
return console.log("Item54: 2")
}

//-------
//------- 

   if(document.getElementById('313').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item54': "3"} });
return console.log("Item54: 3")
}

//-------
//------- 

   if(document.getElementById('314').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item54': "4"} });
return console.log("Item54: 4")
}

//-------
//------- 

   if(document.getElementById('315').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item54': "5"} });
return console.log("Item54: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item54@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item55@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item55': function () {




//------- 

   if(document.getElementById('316').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item55': "1"} });
return console.log("Item55: 1")
}

//-------



//------- 

   if(document.getElementById('317').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item55': "2"} });
return console.log("Item55: 2")
}

//-------
//------- 

   if(document.getElementById('318').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item55': "3"} });
return console.log("Item55: 3")
}

//-------
//------- 

   if(document.getElementById('319').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item55': "4"} });
return console.log("Item55: 4")
}

//-------
//------- 

   if(document.getElementById('320').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item55': "5"} });
return console.log("Item55: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item55@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item56@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item56': function () {




//------- 

   if(document.getElementById('321').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item56': "1"} });
return console.log("Item56: 1")
}

//-------



//------- 

   if(document.getElementById('322').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item56': "2"} });
return console.log("Item56: 2")
}

//-------
//------- 

   if(document.getElementById('323').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item56': "3"} });
return console.log("Item56: 3")
}

//-------
//------- 

   if(document.getElementById('324').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item56': "4"} });
return console.log("Item56: 4")
}

//-------
//------- 

   if(document.getElementById('325').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item56': "5"} });
return console.log("Item56: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item56@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item57@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item57': function () {




//------- 

   if(document.getElementById('326').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item57': "1"} });
return console.log("Item57: 1")
}

//-------



//------- 

   if(document.getElementById('327').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item57': "2"} });
return console.log("Item57: 2")
}

//-------
//------- 

   if(document.getElementById('328').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item57': "3"} });
return console.log("Item57: 3")
}

//-------
//------- 

   if(document.getElementById('329').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item57': "4"} });
return console.log("Item57: 4")
}

//-------
//------- 

   if(document.getElementById('330').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item57': "5"} });
return console.log("Item57: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item57@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item58@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item58': function () {




//------- 

   if(document.getElementById('331').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item58': "1"} });
return console.log("Item58: 1")
}

//-------



//------- 

   if(document.getElementById('332').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item58': "2"} });
return console.log("Item58: 2")
}

//-------
//------- 

   if(document.getElementById('333').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item58': "3"} });
return console.log("Item58: 3")
}

//-------
//------- 

   if(document.getElementById('334').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item58': "4"} });
return console.log("Item58: 4")
}

//-------
//------- 

   if(document.getElementById('335').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item58': "5"} });
return console.log("Item58: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item58@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item59@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item59': function () {




//------- 

   if(document.getElementById('336').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item59': "1"} });
return console.log("Item59: 1")
}

//-------



//------- 

   if(document.getElementById('337').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item59': "2"} });
return console.log("Item59: 2")
}

//-------
//------- 

   if(document.getElementById('338').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item59': "3"} });
return console.log("Item59: 3")
}

//-------
//------- 

   if(document.getElementById('339').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item59': "4"} });
return console.log("Item59: 4")
}

//-------
//------- 

   if(document.getElementById('340').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item59': "5"} });
return console.log("Item59: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item59@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item60@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item60': function () {




//------- 

   if(document.getElementById('341').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item60': "1"} });
return console.log("Item60: 1")
}

//-------



//------- 

   if(document.getElementById('342').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item60': "2"} });
return console.log("Item60: 2")
}

//-------
//------- 

   if(document.getElementById('343').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item60': "3"} });
return console.log("Item60: 3")
}

//-------
//------- 

   if(document.getElementById('344').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item60': "4"} });
return console.log("Item60: 4")
}

//-------
//------- 

   if(document.getElementById('345').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item60': "5"} });
return console.log("Item60: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item60@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item61@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item61': function () {




//------- 

   if(document.getElementById('346').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item61': "1"} });
return console.log("Item61: 1")
}

//-------



//------- 

   if(document.getElementById('347').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item61': "2"} });
return console.log("Item61: 2")
}

//-------
//------- 

   if(document.getElementById('348').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item61': "3"} });
return console.log("Item61: 3")
}

//-------
//------- 

   if(document.getElementById('349').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item61': "4"} });
return console.log("Item61: 4")
}

//-------
//------- 

   if(document.getElementById('350').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item61': "5"} });
return console.log("Item61: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item61@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item62@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item62': function () {




//------- 

   if(document.getElementById('351').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item62': "1"} });
return console.log("Item62: 1")
}

//-------



//------- 

   if(document.getElementById('352').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item62': "2"} });
return console.log("Item62: 2")
}

//-------
//------- 

   if(document.getElementById('353').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item62': "3"} });
return console.log("Item62: 3")
}

//-------
//------- 

   if(document.getElementById('354').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item62': "4"} });
return console.log("Item62: 4")
}

//-------
//------- 

   if(document.getElementById('355').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item62': "5"} });
return console.log("Item62: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item62@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item63@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item63': function () {




//------- 

   if(document.getElementById('356').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item63': "1"} });
return console.log("Item63: 1")
}

//-------



//------- 

   if(document.getElementById('357').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item63': "2"} });
return console.log("Item63: 2")
}

//-------
//------- 

   if(document.getElementById('358').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item63': "3"} });
return console.log("Item63: 3")
}

//-------
//------- 

   if(document.getElementById('359').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item63': "4"} });
return console.log("Item63: 4")
}

//-------
//------- 

   if(document.getElementById('360').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item63': "5"} });
return console.log("Item63: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item63@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item64@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item64': function () {




//------- 

   if(document.getElementById('361').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item64': "1"} });
return console.log("Item64: 1")
}

//-------



//------- 

   if(document.getElementById('362').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item64': "2"} });
return console.log("Item64: 2")
}

//-------
//------- 

   if(document.getElementById('363').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item64': "3"} });
return console.log("Item64: 3")
}

//-------
//------- 

   if(document.getElementById('364').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item64': "4"} });
return console.log("Item64: 4")
}

//-------
//------- 

   if(document.getElementById('365').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item64': "5"} });
return console.log("Item64: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item64@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item65@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item65': function () {




//------- 

   if(document.getElementById('366').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item65': "1"} });
return console.log("Item65: 1")
}

//-------



//------- 

   if(document.getElementById('367').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item65': "2"} });
return console.log("Item65: 2")
}

//-------
//------- 

   if(document.getElementById('368').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item65': "3"} });
return console.log("Item65: 3")
}

//-------
//------- 

   if(document.getElementById('369').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item65': "4"} });
return console.log("Item65: 4")
}

//-------
//------- 

   if(document.getElementById('370').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item65': "5"} });
return console.log("Item65: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item65@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item66@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item66': function () {




//------- 

   if(document.getElementById('371').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item66': "1"} });
return console.log("Item66: 1")
}

//-------



//------- 

   if(document.getElementById('372').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item66': "2"} });
return console.log("Item66: 2")
}

//-------
//------- 

   if(document.getElementById('373').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item66': "3"} });
return console.log("Item66: 3")
}

//-------
//------- 

   if(document.getElementById('374').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item66': "4"} });
return console.log("Item66: 4")
}

//-------
//------- 

   if(document.getElementById('375').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item66': "5"} });
return console.log("Item66: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item66@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item67@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item67': function () {




//------- 

   if(document.getElementById('376').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item67': "1"} });
return console.log("Item67: 1")
}

//-------



//------- 

   if(document.getElementById('377').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item67': "2"} });
return console.log("Item67: 2")
}

//-------
//------- 

   if(document.getElementById('378').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item67': "3"} });
return console.log("Item67: 3")
}

//-------
//------- 

   if(document.getElementById('379').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item67': "4"} });
return console.log("Item67: 4")
}

//-------
//------- 

   if(document.getElementById('380').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item67': "5"} });
return console.log("Item67: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item67@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item68@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item68': function () {




//------- 

   if(document.getElementById('381').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item68': "1"} });
return console.log("Item68: 1")
}

//-------



//------- 

   if(document.getElementById('382').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item68': "2"} });
return console.log("Item68: 2")
}

//-------
//------- 

   if(document.getElementById('383').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item68': "3"} });
return console.log("Item68: 3")
}

//-------
//------- 

   if(document.getElementById('384').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item68': "4"} });
return console.log("Item68: 4")
}

//-------
//------- 

   if(document.getElementById('385').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item68': "5"} });
return console.log("Item68: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item68@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item69@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item69': function () {




//------- 

   if(document.getElementById('386').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item69': "1"} });
return console.log("Item69: 1")
}

//-------



//------- 

   if(document.getElementById('387').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item69': "2"} });
return console.log("Item69: 2")
}

//-------
//------- 

   if(document.getElementById('388').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item69': "3"} });
return console.log("Item69: 3")
}

//-------
//------- 

   if(document.getElementById('389').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item69': "4"} });
return console.log("Item69: 4")
}

//-------
//------- 

   if(document.getElementById('390').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item69': "5"} });
return console.log("Item69: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item69@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item70@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item70': function () {




//------- 

   if(document.getElementById('391').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item70': "1"} });
return console.log("Item70: 1")
}

//-------



//------- 

   if(document.getElementById('392').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item70': "2"} });
return console.log("Item70: 2")
}

//-------
//------- 

   if(document.getElementById('393').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item70': "3"} });
return console.log("Item70: 3")
}

//-------
//------- 

   if(document.getElementById('394').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item70': "4"} });
return console.log("Item70: 4")
}

//-------
//------- 

   if(document.getElementById('395').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item70': "5"} });
return console.log("Item70: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item70@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item71@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item71': function () {




//------- 

   if(document.getElementById('396').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item71': "1"} });
return console.log("Item71: 1")
}

//-------



//------- 

   if(document.getElementById('397').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item71': "2"} });
return console.log("Item71: 2")
}

//-------
//------- 

   if(document.getElementById('398').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item71': "3"} });
return console.log("Item71: 3")
}

//-------
//------- 

   if(document.getElementById('399').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item71': "4"} });
return console.log("Item71: 4")
}

//-------
//------- 

   if(document.getElementById('400').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item71': "5"} });
return console.log("Item71: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item71@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item72@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item72': function () {




//------- 

   if(document.getElementById('401').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item72': "1"} });
return console.log("Item72: 1")
}

//-------



//------- 

   if(document.getElementById('402').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item72': "2"} });
return console.log("Item72: 2")
}

//-------
//------- 

   if(document.getElementById('403').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item72': "3"} });
return console.log("Item72: 3")
}

//-------
//------- 

   if(document.getElementById('404').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item72': "4"} });
return console.log("Item72: 4")
}

//-------
//------- 

   if(document.getElementById('405').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item72': "5"} });
return console.log("Item72: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item72@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item73@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item73': function () {




//------- 

   if(document.getElementById('406').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item73': "1"} });
return console.log("Item73: 1")
}

//-------



//------- 

   if(document.getElementById('407').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item73': "2"} });
return console.log("Item73: 2")
}

//-------
//------- 

   if(document.getElementById('408').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item73': "3"} });
return console.log("Item73: 3")
}

//-------
//------- 

   if(document.getElementById('409').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item73': "4"} });
return console.log("Item73: 4")
}

//-------
//------- 

   if(document.getElementById('410').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item73': "5"} });
return console.log("Item73: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item73@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item74@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item74': function () {




//------- 

   if(document.getElementById('411').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item74': "1"} });
return console.log("Item74: 1")
}

//-------



//------- 

   if(document.getElementById('412').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item74': "2"} });
return console.log("Item74: 2")
}

//-------
//------- 

   if(document.getElementById('413').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item74': "3"} });
return console.log("Item74: 3")
}

//-------
//------- 

   if(document.getElementById('414').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item74': "4"} });
return console.log("Item74: 4")
}

//-------
//------- 

   if(document.getElementById('415').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item74': "5"} });
return console.log("Item74: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item74@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item75@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item75': function () {




//------- 

   if(document.getElementById('416').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item75': "1"} });
return console.log("Item75: 1")
}

//-------



//------- 

   if(document.getElementById('417').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item75': "2"} });
return console.log("Item75: 2")
}

//-------
//------- 

   if(document.getElementById('418').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item75': "3"} });
return console.log("Item75: 3")
}

//-------
//------- 

   if(document.getElementById('419').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item75': "4"} });
return console.log("Item75: 4")
}

//-------
//------- 

   if(document.getElementById('420').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item75': "5"} });
return console.log("Item75: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item75@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item76@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item76': function () {




//------- 

   if(document.getElementById('421').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item76': "1"} });
return console.log("Item76: 1")
}

//-------



//------- 

   if(document.getElementById('422').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item76': "2"} });
return console.log("Item76: 2")
}

//-------
//------- 

   if(document.getElementById('423').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item76': "3"} });
return console.log("Item76: 3")
}

//-------
//------- 

   if(document.getElementById('424').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item76': "4"} });
return console.log("Item76: 4")
}

//-------
//------- 

   if(document.getElementById('425').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item76': "5"} });
return console.log("Item76: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item76@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item77@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item77': function () {




//------- 

   if(document.getElementById('426').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item77': "1"} });
return console.log("Item77: 1")
}

//-------



//------- 

   if(document.getElementById('427').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item77': "2"} });
return console.log("Item77: 2")
}

//-------
//------- 

   if(document.getElementById('428').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item77': "3"} });
return console.log("Item77: 3")
}

//-------
//------- 

   if(document.getElementById('429').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item77': "4"} });
return console.log("Item77: 4")
}

//-------
//------- 

   if(document.getElementById('430').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item77': "5"} });
return console.log("Item77: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item77@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item78@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item78': function () {




//------- 

   if(document.getElementById('431').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item78': "1"} });
return console.log("Item78: 1")
}

//-------



//------- 

   if(document.getElementById('432').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item78': "2"} });
return console.log("Item78: 2")
}

//-------
//------- 

   if(document.getElementById('433').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item78': "3"} });
return console.log("Item78: 3")
}

//-------
//------- 

   if(document.getElementById('434').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item78': "4"} });
return console.log("Item78: 4")
}

//-------
//------- 

   if(document.getElementById('435').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item78': "5"} });
return console.log("Item78: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item78@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item79@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item79': function () {




//------- 

   if(document.getElementById('436').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item79': "1"} });
return console.log("Item79: 1")
}

//-------



//------- 

   if(document.getElementById('437').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item79': "2"} });
return console.log("Item79: 2")
}

//-------
//------- 

   if(document.getElementById('438').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item79': "3"} });
return console.log("Item79: 3")
}

//-------
//------- 

   if(document.getElementById('439').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item79': "4"} });
return console.log("Item79: 4")
}

//-------
//------- 

   if(document.getElementById('440').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item79': "5"} });
return console.log("Item79: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item79@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item80@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item80': function () {




//------- 

   if(document.getElementById('441').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item80': "1"} });
return console.log("Item80: 1")
}

//-------



//------- 

   if(document.getElementById('442').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item80': "2"} });
return console.log("Item80: 2")
}

//-------
//------- 

   if(document.getElementById('443').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item80': "3"} });
return console.log("Item80: 3")
}

//-------
//------- 

   if(document.getElementById('444').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item80': "4"} });
return console.log("Item80: 4")
}

//-------
//------- 

   if(document.getElementById('445').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item80': "5"} });
return console.log("Item80: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item80@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item81@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item81': function () {




//------- 

   if(document.getElementById('446').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item81': "1"} });
return console.log("Item81: 1")
}

//-------



//------- 

   if(document.getElementById('447').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item81': "2"} });
return console.log("Item81: 2")
}

//-------
//------- 

   if(document.getElementById('448').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item81': "3"} });
return console.log("Item81: 3")
}

//-------
//------- 

   if(document.getElementById('449').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item81': "4"} });
return console.log("Item81: 4")
}

//-------
//------- 

   if(document.getElementById('450').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item81': "5"} });
return console.log("Item81: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item81@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item82@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item82': function () {




//------- 

   if(document.getElementById('451').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item82': "1"} });
return console.log("Item82: 1")
}

//-------



//------- 

   if(document.getElementById('452').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item82': "2"} });
return console.log("Item82: 2")
}

//-------
//------- 

   if(document.getElementById('453').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item82': "3"} });
return console.log("Item82: 3")
}

//-------
//------- 

   if(document.getElementById('454').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item82': "4"} });
return console.log("Item82: 4")
}

//-------
//------- 

   if(document.getElementById('455').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item82': "5"} });
return console.log("Item82: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item82@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item83@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item83': function () {




//------- 

   if(document.getElementById('456').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item83': "1"} });
return console.log("Item83: 1")
}

//-------



//------- 

   if(document.getElementById('457').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item83': "2"} });
return console.log("Item83: 2")
}

//-------
//------- 

   if(document.getElementById('458').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item83': "3"} });
return console.log("Item83: 3")
}

//-------
//------- 

   if(document.getElementById('459').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item83': "4"} });
return console.log("Item83: 4")
}

//-------
//------- 

   if(document.getElementById('460').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item83': "5"} });
return console.log("Item83: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item83@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item84@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item84': function () {




//------- 

   if(document.getElementById('461').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item84': "1"} });
return console.log("Item84: 1")
}

//-------



//------- 

   if(document.getElementById('462').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item84': "2"} });
return console.log("Item84: 2")
}

//-------
//------- 

   if(document.getElementById('463').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item84': "3"} });
return console.log("Item84: 3")
}

//-------
//------- 

   if(document.getElementById('464').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item84': "4"} });
return console.log("Item84: 4")
}

//-------
//------- 

   if(document.getElementById('465').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item84': "5"} });
return console.log("Item84: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item84@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item85@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item85': function () {




//------- 

   if(document.getElementById('466').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item85': "1"} });
return console.log("Item85: 1")
}

//-------



//------- 

   if(document.getElementById('467').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item85': "2"} });
return console.log("Item85: 2")
}

//-------
//------- 

   if(document.getElementById('468').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item85': "3"} });
return console.log("Item85: 3")
}

//-------
//------- 

   if(document.getElementById('469').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item85': "4"} });
return console.log("Item85: 4")
}

//-------
//------- 

   if(document.getElementById('470').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item85': "5"} });
return console.log("Item85: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item85@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item86@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item86': function () {




//------- 

   if(document.getElementById('471').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item86': "1"} });
return console.log("Item86: 1")
}

//-------



//------- 

   if(document.getElementById('472').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item86': "2"} });
return console.log("Item86: 2")
}

//-------
//------- 

   if(document.getElementById('473').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item86': "3"} });
return console.log("Item86: 3")
}

//-------
//------- 

   if(document.getElementById('474').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item86': "4"} });
return console.log("Item86: 4")
}

//-------
//------- 

   if(document.getElementById('475').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item86': "5"} });
return console.log("Item86: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item86@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item87@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
  'click .item87': function () {




//------- 

   if(document.getElementById('476').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item87': "1"} });
return console.log("Item87: 1")
}

//-------



//------- 

   if(document.getElementById('477').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item87': "2"} });
return console.log("Item87: 2")
}

//-------
//------- 

   if(document.getElementById('478').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item87': "3"} });
return console.log("Item87: 3")
}

//-------
//------- 

   if(document.getElementById('479').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item87': "4"} });
return console.log("Item87: 4")
}

//-------
//------- 

   if(document.getElementById('480').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item87': "5"} });
return console.log("Item87: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item87@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item28bis87.events({
		'click #weiter4': function () {
			amplify.store('status', "bigfive");
			Session.set('status', amplify.store('status'));
			scrollTo(0,0);
			return console.log("bigfive")
	},	

});	




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Big-Five+++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Big-Five+++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Big-Five+++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Soziale Erwünschthit++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Soziale Erwünschtheit+++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Soziale Erwünschtheit+++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 



//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item88@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item88bis101.events({
  'click .item88': function () {




//------- 

   if(document.getElementById('481').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item88': "1"} });
return console.log("Item88: 1")
}

//-------



//------- 

   if(document.getElementById('482').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item88': "2"} });
return console.log("Item88: 2")
}

//-------
//------- 

   if(document.getElementById('483').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item88': "3"} });
return console.log("Item88: 3")
}

//-------
//------- 

   if(document.getElementById('484').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item88': "4"} });
return console.log("Item88: 4")
}

//-------













 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item88@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item89@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item88bis101.events({
  'click .item89': function () {




//------- 

   if(document.getElementById('485').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item89': "1"} });
return console.log("Item89: 1")
}

//-------



//------- 

   if(document.getElementById('486').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item89': "2"} });
return console.log("Item89: 2")
}

//-------
//------- 

   if(document.getElementById('487').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item89': "3"} });
return console.log("Item89: 3")
}

//-------
//------- 

   if(document.getElementById('488').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item89': "4"} });
return console.log("Item89: 4")
}

//-------













 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item89@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item90@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item88bis101.events({
  'click .item90': function () {




//------- 

   if(document.getElementById('489').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item90': "1"} });
return console.log("Item90: 1")
}

//-------



//------- 

   if(document.getElementById('490').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item90': "2"} });
return console.log("Item90: 2")
}

//-------
//------- 

   if(document.getElementById('491').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item90': "3"} });
return console.log("Item90: 3")
}

//-------
//------- 

   if(document.getElementById('492').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item90': "4"} });
return console.log("Item90: 4")
}

//-------













 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item90@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item91@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item88bis101.events({
  'click .item91': function () {




//------- 

   if(document.getElementById('493').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item91': "1"} });
return console.log("Item91: 1")
}

//-------



//------- 

   if(document.getElementById('494').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item91': "2"} });
return console.log("Item91: 2")
}

//-------
//------- 

   if(document.getElementById('495').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item91': "3"} });
return console.log("Item91: 3")
}

//-------
//------- 

   if(document.getElementById('496').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item91': "4"} });
return console.log("Item91: 4")
}

//-------













 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item91@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item92@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item88bis101.events({
  'click .item92': function () {




//------- 

   if(document.getElementById('497').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item92': "1"} });
return console.log("Item92: 1")
}

//-------



//------- 

   if(document.getElementById('498').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item92': "2"} });
return console.log("Item92: 2")
}

//-------
//------- 

   if(document.getElementById('499').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item92': "3"} });
return console.log("Item92: 3")
}

//-------
//------- 

   if(document.getElementById('500').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item92': "4"} });
return console.log("Item92: 4")
}

//-------













 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item92@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item93@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item88bis101.events({
  'click .item93': function () {




//------- 

   if(document.getElementById('501').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item93': "1"} });
return console.log("Item93: 1")
}

//-------



//------- 

   if(document.getElementById('502').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item93': "2"} });
return console.log("Item93: 2")
}

//-------
//------- 

   if(document.getElementById('503').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item93': "3"} });
return console.log("Item93: 3")
}

//-------
//------- 

   if(document.getElementById('504').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item93': "4"} });
return console.log("Item93: 4")
}

//-------













 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item93@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item94@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item88bis101.events({
  'click .item94': function () {




//------- 

   if(document.getElementById('505').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item94': "1"} });
return console.log("Item94: 1")
}

//-------



//------- 

   if(document.getElementById('506').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item94': "2"} });
return console.log("Item94: 2")
}

//-------
//------- 

   if(document.getElementById('507').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item94': "3"} });
return console.log("Item94: 3")
}

//-------
//------- 

   if(document.getElementById('508').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item94': "4"} });
return console.log("Item94: 4")
}

//-------













 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item94@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item95@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item88bis101.events({
  'click .item95': function () {




//------- 

   if(document.getElementById('509').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item95': "1"} });
return console.log("Item95: 1")
}

//-------



//------- 

   if(document.getElementById('510').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item95': "2"} });
return console.log("Item95: 2")
}

//-------
//------- 

   if(document.getElementById('511').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item95': "3"} });
return console.log("Item95: 3")
}

//-------
//------- 

   if(document.getElementById('512').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item95': "4"} });
return console.log("Item95: 4")
}

//-------













 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item95@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item96@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item88bis101.events({
  'click .item96': function () {




//------- 

   if(document.getElementById('513').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item96': "1"} });
return console.log("Item96: 1")
}

//-------



//------- 

   if(document.getElementById('514').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item96': "2"} });
return console.log("Item96: 2")
}

//-------
//------- 

   if(document.getElementById('515').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item96': "3"} });
return console.log("Item96: 3")
}

//-------
//------- 

   if(document.getElementById('516').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item96': "4"} });
return console.log("Item96: 4")
}

//-------













 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item96@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item97@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item88bis101.events({
  'click .item97': function () {




//------- 

   if(document.getElementById('517').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item97': "1"} });
return console.log("Item97: 1")
}

//-------



//------- 

   if(document.getElementById('518').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item97': "2"} });
return console.log("Item97: 2")
}

//-------
//------- 

   if(document.getElementById('519').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item97': "3"} });
return console.log("Item97: 3")
}

//-------
//------- 

   if(document.getElementById('520').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item97': "4"} });
return console.log("Item97: 4")
}

//-------













 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item97@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item98@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item88bis101.events({
  'click .item98': function () {




//------- 

   if(document.getElementById('521').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item98': "1"} });
return console.log("Item98: 1")
}

//-------



//------- 

   if(document.getElementById('522').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item98': "2"} });
return console.log("Item98: 2")
}

//-------
//------- 

   if(document.getElementById('523').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item98': "3"} });
return console.log("Item98: 3")
}

//-------
//------- 

   if(document.getElementById('524').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item98': "4"} });
return console.log("Item98: 4")
}

//-------













 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item98@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item99@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item88bis101.events({
  'click .item99': function () {




//------- 

   if(document.getElementById('525').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item99': "1"} });
return console.log("Item99: 1")
}

//-------



//------- 

   if(document.getElementById('526').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item99': "2"} });
return console.log("Item99: 2")
}

//-------
//------- 

   if(document.getElementById('527').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item99': "3"} });
return console.log("Item99: 3")
}

//-------
//------- 

   if(document.getElementById('528').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item99': "4"} });
return console.log("Item99: 4")
}

//-------













 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item99@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item100@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item88bis101.events({
  'click .item100': function () {




//------- 

   if(document.getElementById('529').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item100': "1"} });
return console.log("Item100: 1")
}

//-------



//------- 

   if(document.getElementById('530').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item100': "2"} });
return console.log("Item100: 2")
}

//-------
//------- 

   if(document.getElementById('531').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item100': "3"} });
return console.log("Item100: 3")
}

//-------
//------- 

   if(document.getElementById('532').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item100': "4"} });
return console.log("Item100: 4")
}

//-------













 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item100@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item101@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item88bis101.events({
  'click .item101': function () {




//------- 

   if(document.getElementById('533').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item101': "1"} });
return console.log("Item101: 1")
}

//-------



//------- 

   if(document.getElementById('534').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item101': "2"} });
return console.log("Item101: 2")
}

//-------
//------- 

   if(document.getElementById('535').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item101': "3"} });
return console.log("Item101: 3")
}

//-------
//------- 

   if(document.getElementById('536').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item101': "4"} });
return console.log("Item101: 4")
}

//-------













 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item101@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item88bis101.events({
		'click #weiter5': function () {
			amplify.store('status', "sozerwuenschtheit");
			Session.set('status', amplify.store('status'));
			scrollTo(0,0);
			return console.log("sozerwuenschtheit")
	},	

});	






//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Soziale Erwünschthit++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Soziale Erwünschtheit+++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Soziale Erwünschtheit+++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Vertrauen in Institutionen+++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Vertrauen in Institutionen+++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Vertrauen in Institutionen+++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 








//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item102@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item102bis111.events({
  'click .item102': function () {




//------- 

   if(document.getElementById('537').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item102': "1"} });
return console.log("Item102: 1")
}

//-------



//------- 

   if(document.getElementById('538').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item102': "2"} });
return console.log("Item102: 2")
}

//-------
//------- 

   if(document.getElementById('539').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item102': "3"} });
return console.log("Item102: 3")
}

//-------
//------- 

   if(document.getElementById('540').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item102': "4"} });
return console.log("Item102: 4")
}

//-------
//------- 

   if(document.getElementById('541').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item102': "5"} });
return console.log("Item102: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item102@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item103@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item102bis111.events({
  'click .item103': function () {




//------- 

   if(document.getElementById('542').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item103': "1"} });
return console.log("Item103: 1")
}

//-------



//------- 

   if(document.getElementById('543').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item103': "2"} });
return console.log("Item103: 2")
}

//-------
//------- 

   if(document.getElementById('544').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item103': "3"} });
return console.log("Item103: 3")
}

//-------
//------- 

   if(document.getElementById('545').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item103': "4"} });
return console.log("Item103: 4")
}

//-------
//------- 

   if(document.getElementById('546').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item103': "5"} });
return console.log("Item103: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item103@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item104@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item102bis111.events({
  'click .item104': function () {




//------- 

   if(document.getElementById('547').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item104': "1"} });
return console.log("Item104: 1")
}

//-------



//------- 

   if(document.getElementById('548').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item104': "2"} });
return console.log("Item104: 2")
}

//-------
//------- 

   if(document.getElementById('549').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item104': "3"} });
return console.log("Item104: 3")
}

//-------
//------- 

   if(document.getElementById('550').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item104': "4"} });
return console.log("Item104: 4")
}

//-------
//------- 

   if(document.getElementById('551').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item104': "5"} });
return console.log("Item104: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item104@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item105@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item102bis111.events({
  'click .item105': function () {




//------- 

   if(document.getElementById('552').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item105': "1"} });
return console.log("Item105: 1")
}

//-------



//------- 

   if(document.getElementById('553').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item105': "2"} });
return console.log("Item105: 2")
}

//-------
//------- 

   if(document.getElementById('554').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item105': "3"} });
return console.log("Item105: 3")
}

//-------
//------- 

   if(document.getElementById('555').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item105': "4"} });
return console.log("Item105: 4")
}

//-------
//------- 

   if(document.getElementById('556').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item105': "5"} });
return console.log("Item105: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item105@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item106@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item102bis111.events({
  'click .item106': function () {




//------- 

   if(document.getElementById('557').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item106': "1"} });
return console.log("Item106: 1")
}

//-------



//------- 

   if(document.getElementById('558').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item106': "2"} });
return console.log("Item106: 2")
}

//-------
//------- 

   if(document.getElementById('559').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item106': "3"} });
return console.log("Item106: 3")
}

//-------
//------- 

   if(document.getElementById('560').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item106': "4"} });
return console.log("Item106: 4")
}

//-------
//------- 

   if(document.getElementById('561').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item106': "5"} });
return console.log("Item106: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item106@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item107@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item102bis111.events({
  'click .item107': function () {




//------- 

   if(document.getElementById('562').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item107': "1"} });
return console.log("Item107: 1")
}

//-------



//------- 

   if(document.getElementById('563').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item107': "2"} });
return console.log("Item107: 2")
}

//-------
//------- 

   if(document.getElementById('564').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item107': "3"} });
return console.log("Item107: 3")
}

//-------
//------- 

   if(document.getElementById('565').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item107': "4"} });
return console.log("Item107: 4")
}

//-------
//------- 

   if(document.getElementById('566').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item107': "5"} });
return console.log("Item107: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item107@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item108@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item102bis111.events({
  'click .item108': function () {




//------- 

   if(document.getElementById('567').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item108': "1"} });
return console.log("Item108: 1")
}

//-------



//------- 

   if(document.getElementById('568').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item108': "2"} });
return console.log("Item108: 2")
}

//-------
//------- 

   if(document.getElementById('569').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item108': "3"} });
return console.log("Item108: 3")
}

//-------
//------- 

   if(document.getElementById('570').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item108': "4"} });
return console.log("Item108: 4")
}

//-------
//------- 

   if(document.getElementById('571').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item108': "5"} });
return console.log("Item108: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item108@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item109@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item102bis111.events({
  'click .item109': function () {




//------- 

   if(document.getElementById('572').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item109': "1"} });
return console.log("Item109: 1")
}

//-------



//------- 

   if(document.getElementById('573').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item109': "2"} });
return console.log("Item109: 2")
}

//-------
//------- 

   if(document.getElementById('574').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item109': "3"} });
return console.log("Item109: 3")
}

//-------
//------- 

   if(document.getElementById('575').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item109': "4"} });
return console.log("Item109: 4")
}

//-------
//------- 

   if(document.getElementById('576').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item109': "5"} });
return console.log("Item109: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item109@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item110@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item102bis111.events({
  'click .item110': function () {




//------- 

   if(document.getElementById('577').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item110': "1"} });
return console.log("Item110: 1")
}

//-------



//------- 

   if(document.getElementById('578').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item110': "2"} });
return console.log("Item110: 2")
}

//-------
//------- 

   if(document.getElementById('579').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item110': "3"} });
return console.log("Item110: 3")
}

//-------
//------- 

   if(document.getElementById('580').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item110': "4"} });
return console.log("Item110: 4")
}

//-------
//------- 

   if(document.getElementById('581').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item110': "5"} });
return console.log("Item110: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item110@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item111@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item102bis111.events({
  'click .item111': function () {




//------- 

   if(document.getElementById('582').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item111': "1"} });
return console.log("Item111: 1")
}

//-------



//------- 

   if(document.getElementById('583').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item111': "2"} });
return console.log("Item111: 2")
}

//-------
//------- 

   if(document.getElementById('584').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item111': "3"} });
return console.log("Item111: 3")
}

//-------
//------- 

   if(document.getElementById('585').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item111': "4"} });
return console.log("Item111: 4")
}

//-------
//------- 

   if(document.getElementById('586').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item111': "5"} });
return console.log("Item111: 5")
}

//-------




 }
});


Template.item102bis111.events({
		'click #weiter6': function () {
			amplify.store('status', "verinstitutionen");
			Session.set('status', amplify.store('status'));
			scrollTo(0,0);
			return console.log("verinstitutionen")
	},	

});	





//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item111@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@







//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Vertrauen in Institutionen+++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Vertrauen in Institutionen+++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Vertrauen in Institutionen+++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Vertrauen in Personen++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Vertrauen in Personen++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Vertrauen in Personen++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 








//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item112@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item112bis114.events({
  'click .item112': function () {




//------- 

   if(document.getElementById('587').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item112': "1"} });
return console.log("Item112: 1")
}

//-------



//------- 

   if(document.getElementById('588').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item112': "2"} });
return console.log("Item112: 2")
}

//-------
//------- 

   if(document.getElementById('589').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item112': "3"} });
return console.log("Item112: 3")
}

//-------
//------- 

   if(document.getElementById('590').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item112': "4"} });
return console.log("Item112: 4")
}

//-------
//------- 

   if(document.getElementById('591').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item112': "5"} });
return console.log("Item112: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item112@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item113@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item112bis114.events({
  'click .item113': function () {




//------- 

   if(document.getElementById('592').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item113': "1"} });
return console.log("Item113: 1")
}

//-------



//------- 

   if(document.getElementById('593').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item113': "2"} });
return console.log("Item113: 2")
}

//-------
//------- 

   if(document.getElementById('594').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item113': "3"} });
return console.log("Item113: 3")
}

//-------
//------- 

   if(document.getElementById('595').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item113': "4"} });
return console.log("Item113: 4")
}

//-------
//------- 

   if(document.getElementById('596').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item113': "5"} });
return console.log("Item113: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item113@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item114@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.item112bis114.events({
  'click .item114': function () {




//------- 

   if(document.getElementById('597').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item114': "1"} });
return console.log("Item114: 1")
}

//-------



//------- 

   if(document.getElementById('598').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item114': "2"} });
return console.log("Item114: 2")
}

//-------
//------- 

   if(document.getElementById('599').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item114': "3"} });
return console.log("Item114: 3")
}

//-------
//------- 

   if(document.getElementById('600').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item114': "4"} });
return console.log("Item114: 4")
}

//-------
//------- 

   if(document.getElementById('601').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item114': "5"} });
return console.log("Item114: 5")
}

//-------




 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item114@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

Template.item112bis114.events({
		'click #weiter7': function () {
			amplify.store('status', "verpersonen");
			Session.set('status', amplify.store('status'));
			scrollTo(0,0);
			return console.log("verpersonen")
	},	

});	


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Vertrauen in Personen++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Vertrauen in Personen++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Vertrauen in Personen++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Namensgenerator++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Namensgenerator++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Namensgenerator++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 



Template.item115bis119.events = {
	'click #name1button': function () {
		Session.set("name1", document.getElementById('name1box').value);
		document.getElementById('name1box').disabled = true; 
		document.getElementById('name1button').disabled = true;
		Users.update({user_id: Session.get("user_id")}, {'$set': {'name1': Session.get("name1")} });
	},
	
	
	'click #name2button': function () {
		Session.set("name2", document.getElementById('name2box').value);
		document.getElementById('name2box').disabled = true; 
		document.getElementById('name2button').disabled = true;
		Users.update({user_id: Session.get("user_id")}, {'$set': {'name2': Session.get("name2")} });
	},
	
	'click #name3button': function () {
		Session.set("name3", document.getElementById('name3box').value);
		document.getElementById('name3box').disabled = true; 
		document.getElementById('name3button').disabled = true;
		Users.update({user_id: Session.get("user_id")}, {'$set': {'name3': Session.get("name3")} });
	},


'click button#name4button': function () {
Session.set("name4", document.getElementById('name4box').value);
document.getElementById('name4box').disabled = true; 
document.getElementById('name4button').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'name4': Session.get("name4")} });
},


'click button#name5button': function () {
Session.set("name5", document.getElementById('name5box').value);
document.getElementById('name5box').disabled = true; 
document.getElementById('name5button').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'name5': Session.get("name5")} });
},


'click button#name6button': function () {
Session.set("name6", document.getElementById('name6box').value);
document.getElementById('name6box').disabled = true; 
document.getElementById('name6button').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'name6': Session.get("name6")} });
},
	

	'click button#name7button': function () {
Session.set("name7", document.getElementById('name7box').value);
document.getElementById('name7box').disabled = true; 
document.getElementById('name7button').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'name7': Session.get("name7")} });
},

'click button#name8button': function () {
Session.set("name8", document.getElementById('name8box').value);
document.getElementById('name8box').disabled = true; 
document.getElementById('name8button').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'name8': Session.get("name8")} });
},


'click button#name9button': function () {
Session.set("name9", document.getElementById('name9box').value);
document.getElementById('name9box').disabled = true; 
document.getElementById('name9button').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'name9': Session.get("name9")} });
},


'click button#name10button': function () {
Session.set("name10", document.getElementById('name10box').value);
document.getElementById('name10box').disabled = true; 
document.getElementById('name10button').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'name10': Session.get("name10")} });
},

'click button#name11button': function () {
Session.set("name11", document.getElementById('name11box').value);
document.getElementById('name11box').disabled = true; 
document.getElementById('name11button').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'name11': Session.get("name11")} });
},

'click button#name12button': function () {
Session.set("name12", document.getElementById('name12box').value);
document.getElementById('name12box').disabled = true; 
document.getElementById('name12button').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'name12': Session.get("name12")} });
},

'click button#name13button': function () {
Session.set("name13", document.getElementById('name13box').value);
document.getElementById('name13box').disabled = true; 
document.getElementById('name13button').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'name13': Session.get("name13")} });
},

'click button#name14button': function () {
Session.set("name14", document.getElementById('name14box').value);
document.getElementById('name14box').disabled = true; 
document.getElementById('name14button').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'name14': Session.get("name14")} });
},

'click button#name15button': function () {
Session.set("name15", document.getElementById('name15box').value);
document.getElementById('name15box').disabled = true; 
document.getElementById('name15button').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'name15': Session.get("name15")} });
},

'click button#name16button': function () {
Session.set("name16", document.getElementById('name16box').value);
document.getElementById('name16box').disabled = true; 
document.getElementById('name16button').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'name16': Session.get("name16")} });
},

'click button#name17button': function () {
Session.set("name17", document.getElementById('name17box').value);
document.getElementById('name17box').disabled = true; 
document.getElementById('name17button').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'name17': Session.get("name17")} });
},

'click button#name18button': function () {
Session.set("name18", document.getElementById('name18box').value);
document.getElementById('name18box').disabled = true; 
document.getElementById('name18button').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'name18': Session.get("name18")} });
},

'click button#name19button': function () {
Session.set("name19", document.getElementById('name19box').value);
document.getElementById('name19box').disabled = true; 
document.getElementById('name19button').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'name19': Session.get("name19")} });
},

'click button#name20button': function () {
Session.set("name20", document.getElementById('name20box').value);
document.getElementById('name20box').disabled = true; 
document.getElementById('name20button').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'name20': Session.get("name20")} });
},

'click button#name21button': function () {
Session.set("name21", document.getElementById('name21box').value);
document.getElementById('name21box').disabled = true; 
document.getElementById('name21button').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'name21': Session.get("name21")} });
},

'click button#name22button': function () {
Session.set("name22", document.getElementById('name22box').value);
document.getElementById('name22box').disabled = true; 
document.getElementById('name22button').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'name22': Session.get("name22")} });
},

'click button#name23button': function () {
Session.set("name23", document.getElementById('name23box').value);
document.getElementById('name23box').disabled = true; 
document.getElementById('name23button').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'name23': Session.get("name23")} });
},

'click button#name24button': function () {
Session.set("name24", document.getElementById('name24box').value);
document.getElementById('name24box').disabled = true; 
document.getElementById('name24button').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'name24': Session.get("name24")} });
},

'click button#name25button': function () {
Session.set("name25", document.getElementById('name25box').value);
document.getElementById('name25box').disabled = true; 
document.getElementById('name25button').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'name25': Session.get("name25")} });
},

'click button#name26button': function () {
Session.set("name26", document.getElementById('name26box').value);
document.getElementById('name26box').disabled = true; 
document.getElementById('name26button').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'name26': Session.get("name26")} });
},

'click button#name27button': function () {
Session.set("name27", document.getElementById('name27box').value);
document.getElementById('name27box').disabled = true; 
document.getElementById('name27button').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'name27': Session.get("name27")} });
},

'click button#name28button': function () {
Session.set("name28", document.getElementById('name28box').value);
document.getElementById('name28box').disabled = true; 
document.getElementById('name28button').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'name28': Session.get("name28")} });
},

'click button#name29button': function () {
Session.set("name29", document.getElementById('name29box').value);
document.getElementById('name29box').disabled = true; 
document.getElementById('name29button').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'name29': Session.get("name29")} });
},

'click button#name30button': function () {
Session.set("name30", document.getElementById('name30box').value);
document.getElementById('name30box').disabled = true; 
document.getElementById('name30button').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'name30': Session.get("name30")} });
},
	
	
'click button#weiter8': function () {
amplify.store('status', "generator");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
return console.log("weiter8")
}		
	
	
	
	
};



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Namensgenerator++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Namensgenerator++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Namensgenerator++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 


//+++++++++++++++++++++++++++++++++Instruktion NWK++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Instruktion NWK++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Instruktion NWK++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Instruktion NWK++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  Template.instruktionnwk.events({
		'click #weiter11': function () {
			amplify.store('status', "inwk");
			Session.set('status', amplify.store('status'));
			scrollTo(0,0);
			return console.log("inwk")
	},	

});





//Tabelle----------------------------------------------------------





Template.instruktionnwk.namebox1 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name1;
}



return ausgabe; 

};



Template.instruktionnwk.namebox2 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name2;
}



return ausgabe; 

};



Template.instruktionnwk.namebox3 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name3;
}



return ausgabe; 

};



Template.instruktionnwk.namebox4 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name4;
}



return ausgabe; 

};



Template.instruktionnwk.namebox5 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name5;
}



return ausgabe; 

};



Template.instruktionnwk.namebox6 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name6;
}



return ausgabe; 

};



Template.instruktionnwk.namebox7 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name7;
}



return ausgabe; 

};



Template.instruktionnwk.namebox8 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name8;
}



return ausgabe; 

};



Template.instruktionnwk.namebox9 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name9;
}



return ausgabe; 

};



Template.instruktionnwk.namebox10 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name10;
}



return ausgabe; 

};



Template.instruktionnwk.namebox11 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name11;
}



return ausgabe; 

};



Template.instruktionnwk.namebox12 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name12;
}



return ausgabe; 

};



Template.instruktionnwk.namebox13 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name13;
}



return ausgabe; 

};



Template.instruktionnwk.namebox14 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name14;
}



return ausgabe; 

};



Template.instruktionnwk.namebox15 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name15;
}



return ausgabe; 

};



Template.instruktionnwk.namebox16 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name16;
}



return ausgabe; 

};



Template.instruktionnwk.namebox17 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name17;
}



return ausgabe; 

};



Template.instruktionnwk.namebox18 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name18;
}



return ausgabe; 

};



Template.instruktionnwk.namebox19 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name19;
}



return ausgabe; 

};



Template.instruktionnwk.namebox20 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name20;
}



return ausgabe; 

};



Template.instruktionnwk.namebox21 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name21;
}



return ausgabe; 

};



Template.instruktionnwk.namebox22 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name22;
}



return ausgabe; 

};



Template.instruktionnwk.namebox23 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name23;
}



return ausgabe; 

};



Template.instruktionnwk.namebox24 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name24;
}



return ausgabe; 

};



Template.instruktionnwk.namebox25 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name25;
}



return ausgabe; 

};



Template.instruktionnwk.namebox26 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name26;
}



return ausgabe; 

};



Template.instruktionnwk.namebox27 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name27;
}



return ausgabe; 

};



Template.instruktionnwk.namebox28 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name28;
}



return ausgabe; 

};



Template.instruktionnwk.namebox29 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name29;
}



return ausgabe; 

};



Template.instruktionnwk.namebox30 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name30;
}



return ausgabe; 

};










//Tabelle----------------------------------------------------------






//+++++++++++++++++++++++++++++++++Instruktion NWK++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Instruktion NWK++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Instruktion NWK++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Instruktion NWK++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



//+++++++++++++++++++++++++++++++++Rohe Tabelle+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Rohe Tabelle+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Rohe Tabelle+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Rohe Tabelle+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




Template.rohetabelle.namebox1 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name1;
}



return ausgabe; 

};



Template.rohetabelle.namebox2 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name2;
}



return ausgabe; 

};



Template.rohetabelle.namebox3 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name3;
}



return ausgabe; 

};



Template.rohetabelle.namebox4 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name4;
}



return ausgabe; 

};



Template.rohetabelle.namebox5 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name5;
}



return ausgabe; 

};



Template.rohetabelle.namebox6 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name6;
}



return ausgabe; 

};



Template.rohetabelle.namebox7 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name7;
}



return ausgabe; 

};



Template.rohetabelle.namebox8 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name8;
}



return ausgabe; 

};



Template.rohetabelle.namebox9 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name9;
}



return ausgabe; 

};



Template.rohetabelle.namebox10 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name10;
}



return ausgabe; 

};



Template.rohetabelle.namebox11 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name11;
}



return ausgabe; 

};



Template.rohetabelle.namebox12 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name12;
}



return ausgabe; 

};



Template.rohetabelle.namebox13 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name13;
}



return ausgabe; 

};



Template.rohetabelle.namebox14 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name14;
}



return ausgabe; 

};



Template.rohetabelle.namebox15 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name15;
}



return ausgabe; 

};



Template.rohetabelle.namebox16 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name16;
}



return ausgabe; 

};



Template.rohetabelle.namebox17 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name17;
}



return ausgabe; 

};



Template.rohetabelle.namebox18 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name18;
}



return ausgabe; 

};



Template.rohetabelle.namebox19 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name19;
}



return ausgabe; 

};



Template.rohetabelle.namebox20 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name20;
}



return ausgabe; 

};



Template.rohetabelle.namebox21 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name21;
}



return ausgabe; 

};



Template.rohetabelle.namebox22 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name22;
}



return ausgabe; 

};



Template.rohetabelle.namebox23 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name23;
}



return ausgabe; 

};



Template.rohetabelle.namebox24 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name24;
}



return ausgabe; 

};



Template.rohetabelle.namebox25 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name25;
}



return ausgabe; 

};



Template.rohetabelle.namebox26 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name26;
}



return ausgabe; 

};



Template.rohetabelle.namebox27 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name27;
}



return ausgabe; 

};



Template.rohetabelle.namebox28 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name28;
}



return ausgabe; 

};



Template.rohetabelle.namebox29 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name29;
}



return ausgabe; 

};



Template.rohetabelle.namebox30 = function(){

var eintrag = Users.find({"user_id": Session.get("user_id")}).fetch();

if(eintrag[0] === undefined){
var ausgabe = "-";
}

else {
       var ausgabe = eintrag[0].name30;
}



return ausgabe; 

};



//+++++++++++++++++++++++++++++++++Rohe Tabelle+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Rohe Tabelle+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Rohe Tabelle+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Rohe Tabelle+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Netzwerkkontakte++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Netzwerkkontakte++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Netzwerkkontakte++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt1@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



Template.netzwerkkontakt1.events = {

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@

'click #603': function () {
Session.set("kuerzel1", document.getElementById('602').value);
document.getElementById('602').disabled = true; 
document.getElementById('603').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'kuerzel1': Session.get("kuerzel1")} });
},

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@


//@@@@@@@@@@@Geschlecht@@@@@@@@@


'click .item121': function () {




//------- 

   if(document.getElementById('604').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht1': "1"} });
return console.log("geschlecht1: 1")
}

//-------



//------- 

   if(document.getElementById('605').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht1': "2"} });
return console.log("geschlecht1: 2")
}

//-------


 },


//@@@@@@@@@@@Geschlecht@@@@@@@@@



//@@@@@@@@@@@Alter@@@@@@@@@

'click #607': function () {
Session.set("alter1", document.getElementById('606').value);
document.getElementById('606').disabled = true; 
document.getElementById('607').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'alter1': Session.get("alter1")} });
},


//@@@@@@@@@@@Alter@@@@@@@@@



//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


'click .item123': function () {




//------- 

   if(document.getElementById('608').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung1': "1"} });
return console.log("beziehung1: 1")
}

//-------


//------- 

   if(document.getElementById('609').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung1': "2"} });
return console.log("beziehung1: 2")
}

//-------


//------- 

   if(document.getElementById('610').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung1': "3"} });
return console.log("beziehung1: 3")
}

//-------


//------- 

   if(document.getElementById('611').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung1': "4"} });
return console.log("beziehung1: 4")
}

//-------


//------- 

   if(document.getElementById('612').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung1': "5"} });
return console.log("beziehung1: 5")
}

//-------


//------- 

   if(document.getElementById('613').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung1': "6"} });
return console.log("beziehung1: 6")
}

//-------


//------- 

   if(document.getElementById('614').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung1': "7"} });
return console.log("beziehung1: 7")
}

//-------


//------- 

   if(document.getElementById('615').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung1': "8"} });
return console.log("beziehung1: 8")
}

//-------


//------- 

   if(document.getElementById('616').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung1': "9"} });
return console.log("beziehung1: 9")
}

//-------


//------- 

   if(document.getElementById('617').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung1': "10"} });
return console.log("beziehung1: 10")
}

//-------


//------- 

   if(document.getElementById('618').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung1': "11"} });
return console.log("beziehung1: 11")
}

//-------


//------- 

   if(document.getElementById('619').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung1': "12"} });
return console.log("beziehung1: 12")
}

//-------



 },


//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


//@@@@@@@@@@@Enge@@@@@@@@@
'click .item124': function () {




//------- 

   if(document.getElementById('620').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge1': "1"} });
return console.log("enge1: 1")
}

//-------


//------- 

   if(document.getElementById('621').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge1': "2"} });
return console.log("enge1: 2")
}

//-------


//------- 

   if(document.getElementById('622').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge1': "3"} });
return console.log("enge1: 3")
}

//-------


//------- 

   if(document.getElementById('623').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge1': "4"} });
return console.log("enge1: 4")
}

//-------


//------- 

   if(document.getElementById('624').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge1': "5"} });
return console.log("enge1: 5")
}

//-------






 },

//@@@@@@@@@@@Enge@@@@@@@@@


//@@@@@@@@@@@Beruf@@@@@@@@@

'click #626': function () {
Session.set("beruf1", document.getElementById('625').value);
document.getElementById('625').disabled = true; 
document.getElementById('626').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'beruf1': Session.get("beruf1")} });
},


//@@@@@@@@@@@Beruf@@@@@@@@@




//@@@@@@@@@@@Schule@@@@@@@@@

'click .item126': function () { 


 //------- 

   if(document.getElementById('627').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule1': "1"} });
return console.log("schule1: 1")
}

//-------


 //------- 

   if(document.getElementById('628').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule1': "2"} });
return console.log("schule1: 2")
}

//-------


 //------- 

   if(document.getElementById('629').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule1': "3"} });
return console.log("schule1: 3")
}

//-------


 //------- 

   if(document.getElementById('630').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule1': "4"} });
return console.log("schule1: 4")
}

//-------


 //------- 

   if(document.getElementById('631').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule1': "5"} });
return console.log("schule1: 5")
}

//-------


 //------- 

   if(document.getElementById('632').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule1': "6"} });
return console.log("schule1: 6")
}

//-------


 //------- 

   if(document.getElementById('633').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule1': "7"} });
return console.log("schule1: 7")
}

//-------


 //------- 

   if(document.getElementById('634').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule1': "8"} });
return console.log("schule1: 8")
}

//-------


 //------- 

   if(document.getElementById('635').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule1': "9"} });
return console.log("schule1: 9")
}

//-------


 //------- 

   if(document.getElementById('636').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule1': "10"} });
return console.log("schule1: 10")
}

//-------



 },


//@@@@@@@@@@@Schule@@@@@@@@@


//@@@@@@@@@@@Wie weiter@@@@@@@@@

//weiteren erfassen:
'click #637': function () {
amplify.store('status', "nk1");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
},

//alle erfasst:
'click #638': function () {
amplify.store('status', "fertignk");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
}

//@@@@@@@@@@@Wie weiter@@@@@@@@@








};




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt1@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt2@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



Template.netzwerkkontakt2.events = {

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@

'click #640': function () {
Session.set("kuerzel2", document.getElementById('639').value);
document.getElementById('639').disabled = true; 
document.getElementById('640').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'kuerzel2': Session.get("kuerzel2")} });
},

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@


//@@@@@@@@@@@Geschlecht@@@@@@@@@


'click .item129': function () {




//------- 

   if(document.getElementById('641').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht2': "1"} });
return console.log("geschlecht2: 1")
}

//-------



//------- 

   if(document.getElementById('642').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht2': "2"} });
return console.log("geschlecht2: 2")
}

//-------


 },


//@@@@@@@@@@@Geschlecht@@@@@@@@@



//@@@@@@@@@@@Alter@@@@@@@@@

'click #644': function () {
Session.set("alter2", document.getElementById('643').value);
document.getElementById('643').disabled = true; 
document.getElementById('644').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'alter2': Session.get("alter2")} });
},


//@@@@@@@@@@@Alter@@@@@@@@@



//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


'click .item131': function () {




//------- 

   if(document.getElementById('645').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung2': "1"} });
return console.log("beziehung2: 1")
}

//-------


//------- 

   if(document.getElementById('646').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung2': "2"} });
return console.log("beziehung2: 2")
}

//-------


//------- 

   if(document.getElementById('647').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung2': "3"} });
return console.log("beziehung2: 3")
}

//-------


//------- 

   if(document.getElementById('648').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung2': "4"} });
return console.log("beziehung2: 4")
}

//-------


//------- 

   if(document.getElementById('649').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung2': "5"} });
return console.log("beziehung2: 5")
}

//-------


//------- 

   if(document.getElementById('650').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung2': "6"} });
return console.log("beziehung2: 6")
}

//-------


//------- 

   if(document.getElementById('651').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung2': "7"} });
return console.log("beziehung2: 7")
}

//-------


//------- 

   if(document.getElementById('652').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung2': "8"} });
return console.log("beziehung2: 8")
}

//-------


//------- 

   if(document.getElementById('653').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung2': "9"} });
return console.log("beziehung2: 9")
}

//-------


//------- 

   if(document.getElementById('654').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung2': "10"} });
return console.log("beziehung2: 10")
}

//-------


//------- 

   if(document.getElementById('655').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung2': "11"} });
return console.log("beziehung2: 11")
}

//-------


//------- 

   if(document.getElementById('656').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung2': "12"} });
return console.log("beziehung2: 12")
}

//-------



 },


//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


//@@@@@@@@@@@Enge@@@@@@@@@
'click .item132': function () {




//------- 

   if(document.getElementById('657').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge2': "1"} });
return console.log("enge2: 1")
}

//-------


//------- 

   if(document.getElementById('658').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge2': "2"} });
return console.log("enge2: 2")
}

//-------


//------- 

   if(document.getElementById('659').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge2': "3"} });
return console.log("enge2: 3")
}

//-------


//------- 

   if(document.getElementById('660').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge2': "4"} });
return console.log("enge2: 4")
}

//-------


//------- 

   if(document.getElementById('661').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge2': "5"} });
return console.log("enge2: 5")
}

//-------






 },

//@@@@@@@@@@@Enge@@@@@@@@@


//@@@@@@@@@@@Beruf@@@@@@@@@

'click #663': function () {
Session.set("beruf2", document.getElementById('662').value);
document.getElementById('662').disabled = true; 
document.getElementById('663').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'beruf2': Session.get("beruf2")} });
},


//@@@@@@@@@@@Beruf@@@@@@@@@




//@@@@@@@@@@@Schule@@@@@@@@@

'click .item134': function () { 


 //------- 

   if(document.getElementById('664').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule2': "1"} });
return console.log("schule2: 1")
}

//-------


 //------- 

   if(document.getElementById('665').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule2': "2"} });
return console.log("schule2: 2")
}

//-------


 //------- 

   if(document.getElementById('666').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule2': "3"} });
return console.log("schule2: 3")
}

//-------


 //------- 

   if(document.getElementById('667').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule2': "4"} });
return console.log("schule2: 4")
}

//-------


 //------- 

   if(document.getElementById('668').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule2': "5"} });
return console.log("schule2: 5")
}

//-------


 //------- 

   if(document.getElementById('669').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule2': "6"} });
return console.log("schule2: 6")
}

//-------


 //------- 

   if(document.getElementById('670').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule2': "7"} });
return console.log("schule2: 7")
}

//-------


 //------- 

   if(document.getElementById('671').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule2': "8"} });
return console.log("schule2: 8")
}

//-------


 //------- 

   if(document.getElementById('672').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule2': "9"} });
return console.log("schule2: 9")
}

//-------


 //------- 

   if(document.getElementById('673').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule2': "10"} });
return console.log("schule2: 10")
}

//-------



 },


//@@@@@@@@@@@Schule@@@@@@@@@


//@@@@@@@@@@@Wie weiter@@@@@@@@@

//weiteren erfassen:
'click #674': function () {
amplify.store('status', "nk2");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
},

//alle erfasst:
'click #675': function () {
amplify.store('status', "fertignk");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
}

//@@@@@@@@@@@Wie weiter@@@@@@@@@








};




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt2@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt3@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



Template.netzwerkkontakt3.events = {

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@

'click #677': function () {
Session.set("kuerzel3", document.getElementById('676').value);
document.getElementById('676').disabled = true; 
document.getElementById('677').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'kuerzel3': Session.get("kuerzel3")} });
},

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@


//@@@@@@@@@@@Geschlecht@@@@@@@@@


'click .item137': function () {




//------- 

   if(document.getElementById('678').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht3': "1"} });
return console.log("geschlecht3: 1")
}

//-------



//------- 

   if(document.getElementById('679').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht3': "2"} });
return console.log("geschlecht3: 2")
}

//-------


 },


//@@@@@@@@@@@Geschlecht@@@@@@@@@



//@@@@@@@@@@@Alter@@@@@@@@@

'click #681': function () {
Session.set("alter3", document.getElementById('680').value);
document.getElementById('680').disabled = true; 
document.getElementById('681').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'alter3': Session.get("alter3")} });
},


//@@@@@@@@@@@Alter@@@@@@@@@



//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


'click .item139': function () {




//------- 

   if(document.getElementById('682').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung3': "1"} });
return console.log("beziehung3: 1")
}

//-------


//------- 

   if(document.getElementById('683').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung3': "2"} });
return console.log("beziehung3: 2")
}

//-------


//------- 

   if(document.getElementById('684').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung3': "3"} });
return console.log("beziehung3: 3")
}

//-------


//------- 

   if(document.getElementById('685').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung3': "4"} });
return console.log("beziehung3: 4")
}

//-------


//------- 

   if(document.getElementById('686').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung3': "5"} });
return console.log("beziehung3: 5")
}

//-------


//------- 

   if(document.getElementById('687').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung3': "6"} });
return console.log("beziehung3: 6")
}

//-------


//------- 

   if(document.getElementById('688').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung3': "7"} });
return console.log("beziehung3: 7")
}

//-------


//------- 

   if(document.getElementById('689').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung3': "8"} });
return console.log("beziehung3: 8")
}

//-------


//------- 

   if(document.getElementById('690').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung3': "9"} });
return console.log("beziehung3: 9")
}

//-------


//------- 

   if(document.getElementById('691').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung3': "10"} });
return console.log("beziehung3: 10")
}

//-------


//------- 

   if(document.getElementById('692').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung3': "11"} });
return console.log("beziehung3: 11")
}

//-------


//------- 

   if(document.getElementById('693').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung3': "12"} });
return console.log("beziehung3: 12")
}

//-------



 },


//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


//@@@@@@@@@@@Enge@@@@@@@@@
'click .item140': function () {




//------- 

   if(document.getElementById('694').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge3': "1"} });
return console.log("enge3: 1")
}

//-------


//------- 

   if(document.getElementById('695').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge3': "2"} });
return console.log("enge3: 2")
}

//-------


//------- 

   if(document.getElementById('696').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge3': "3"} });
return console.log("enge3: 3")
}

//-------


//------- 

   if(document.getElementById('697').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge3': "4"} });
return console.log("enge3: 4")
}

//-------


//------- 

   if(document.getElementById('698').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge3': "5"} });
return console.log("enge3: 5")
}

//-------






 },

//@@@@@@@@@@@Enge@@@@@@@@@


//@@@@@@@@@@@Beruf@@@@@@@@@

'click #700': function () {
Session.set("beruf3", document.getElementById('699').value);
document.getElementById('699').disabled = true; 
document.getElementById('700').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'beruf3': Session.get("beruf3")} });
},


//@@@@@@@@@@@Beruf@@@@@@@@@




//@@@@@@@@@@@Schule@@@@@@@@@

'click .item142': function () { 


 //------- 

   if(document.getElementById('701').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule3': "1"} });
return console.log("schule3: 1")
}

//-------


 //------- 

   if(document.getElementById('702').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule3': "2"} });
return console.log("schule3: 2")
}

//-------


 //------- 

   if(document.getElementById('703').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule3': "3"} });
return console.log("schule3: 3")
}

//-------


 //------- 

   if(document.getElementById('704').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule3': "4"} });
return console.log("schule3: 4")
}

//-------


 //------- 

   if(document.getElementById('705').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule3': "5"} });
return console.log("schule3: 5")
}

//-------


 //------- 

   if(document.getElementById('706').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule3': "6"} });
return console.log("schule3: 6")
}

//-------


 //------- 

   if(document.getElementById('707').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule3': "7"} });
return console.log("schule3: 7")
}

//-------


 //------- 

   if(document.getElementById('708').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule3': "8"} });
return console.log("schule3: 8")
}

//-------


 //------- 

   if(document.getElementById('709').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule3': "9"} });
return console.log("schule3: 9")
}

//-------


 //------- 

   if(document.getElementById('710').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule3': "10"} });
return console.log("schule3: 10")
}

//-------



 },


//@@@@@@@@@@@Schule@@@@@@@@@


//@@@@@@@@@@@Wie weiter@@@@@@@@@

//weiteren erfassen:
'click #711': function () {
amplify.store('status', "nk3");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
},

//alle erfasst:
'click #712': function () {
amplify.store('status', "fertignk");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
}

//@@@@@@@@@@@Wie weiter@@@@@@@@@








};




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt3@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt4@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



Template.netzwerkkontakt4.events = {

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@

'click #714': function () {
Session.set("kuerzel4", document.getElementById('713').value);
document.getElementById('713').disabled = true; 
document.getElementById('714').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'kuerzel4': Session.get("kuerzel4")} });
},

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@


//@@@@@@@@@@@Geschlecht@@@@@@@@@


'click .item145': function () {




//------- 

   if(document.getElementById('715').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht4': "1"} });
return console.log("geschlecht4: 1")
}

//-------



//------- 

   if(document.getElementById('716').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht4': "2"} });
return console.log("geschlecht4: 2")
}

//-------


 },


//@@@@@@@@@@@Geschlecht@@@@@@@@@



//@@@@@@@@@@@Alter@@@@@@@@@

'click #718': function () {
Session.set("alter4", document.getElementById('717').value);
document.getElementById('717').disabled = true; 
document.getElementById('718').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'alter4': Session.get("alter4")} });
},


//@@@@@@@@@@@Alter@@@@@@@@@



//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


'click .item147': function () {




//------- 

   if(document.getElementById('719').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung4': "1"} });
return console.log("beziehung4: 1")
}

//-------


//------- 

   if(document.getElementById('720').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung4': "2"} });
return console.log("beziehung4: 2")
}

//-------


//------- 

   if(document.getElementById('721').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung4': "3"} });
return console.log("beziehung4: 3")
}

//-------


//------- 

   if(document.getElementById('722').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung4': "4"} });
return console.log("beziehung4: 4")
}

//-------


//------- 

   if(document.getElementById('723').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung4': "5"} });
return console.log("beziehung4: 5")
}

//-------


//------- 

   if(document.getElementById('724').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung4': "6"} });
return console.log("beziehung4: 6")
}

//-------


//------- 

   if(document.getElementById('725').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung4': "7"} });
return console.log("beziehung4: 7")
}

//-------


//------- 

   if(document.getElementById('726').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung4': "8"} });
return console.log("beziehung4: 8")
}

//-------


//------- 

   if(document.getElementById('727').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung4': "9"} });
return console.log("beziehung4: 9")
}

//-------


//------- 

   if(document.getElementById('728').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung4': "10"} });
return console.log("beziehung4: 10")
}

//-------


//------- 

   if(document.getElementById('729').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung4': "11"} });
return console.log("beziehung4: 11")
}

//-------


//------- 

   if(document.getElementById('730').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung4': "12"} });
return console.log("beziehung4: 12")
}

//-------



 },


//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


//@@@@@@@@@@@Enge@@@@@@@@@
'click .item148': function () {




//------- 

   if(document.getElementById('731').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge4': "1"} });
return console.log("enge4: 1")
}

//-------


//------- 

   if(document.getElementById('732').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge4': "2"} });
return console.log("enge4: 2")
}

//-------


//------- 

   if(document.getElementById('733').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge4': "3"} });
return console.log("enge4: 3")
}

//-------


//------- 

   if(document.getElementById('734').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge4': "4"} });
return console.log("enge4: 4")
}

//-------


//------- 

   if(document.getElementById('735').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge4': "5"} });
return console.log("enge4: 5")
}

//-------






 },

//@@@@@@@@@@@Enge@@@@@@@@@


//@@@@@@@@@@@Beruf@@@@@@@@@

'click #737': function () {
Session.set("beruf4", document.getElementById('736').value);
document.getElementById('736').disabled = true; 
document.getElementById('737').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'beruf4': Session.get("beruf4")} });
},


//@@@@@@@@@@@Beruf@@@@@@@@@




//@@@@@@@@@@@Schule@@@@@@@@@

'click .item150': function () { 


 //------- 

   if(document.getElementById('738').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule4': "1"} });
return console.log("schule4: 1")
}

//-------


 //------- 

   if(document.getElementById('739').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule4': "2"} });
return console.log("schule4: 2")
}

//-------


 //------- 

   if(document.getElementById('740').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule4': "3"} });
return console.log("schule4: 3")
}

//-------


 //------- 

   if(document.getElementById('741').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule4': "4"} });
return console.log("schule4: 4")
}

//-------


 //------- 

   if(document.getElementById('742').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule4': "5"} });
return console.log("schule4: 5")
}

//-------


 //------- 

   if(document.getElementById('743').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule4': "6"} });
return console.log("schule4: 6")
}

//-------


 //------- 

   if(document.getElementById('744').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule4': "7"} });
return console.log("schule4: 7")
}

//-------


 //------- 

   if(document.getElementById('745').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule4': "8"} });
return console.log("schule4: 8")
}

//-------


 //------- 

   if(document.getElementById('746').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule4': "9"} });
return console.log("schule4: 9")
}

//-------


 //------- 

   if(document.getElementById('747').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule4': "10"} });
return console.log("schule4: 10")
}

//-------



 },


//@@@@@@@@@@@Schule@@@@@@@@@


//@@@@@@@@@@@Wie weiter@@@@@@@@@

//weiteren erfassen:
'click #748': function () {
amplify.store('status', "nk4");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
},

//alle erfasst:
'click #749': function () {
amplify.store('status', "fertignk");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
}

//@@@@@@@@@@@Wie weiter@@@@@@@@@








};




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt4@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt5@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



Template.netzwerkkontakt5.events = {

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@

'click #751': function () {
Session.set("kuerzel5", document.getElementById('750').value);
document.getElementById('750').disabled = true; 
document.getElementById('751').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'kuerzel5': Session.get("kuerzel5")} });
},

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@


//@@@@@@@@@@@Geschlecht@@@@@@@@@


'click .item153': function () {




//------- 

   if(document.getElementById('752').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht5': "1"} });
return console.log("geschlecht5: 1")
}

//-------



//------- 

   if(document.getElementById('753').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht5': "2"} });
return console.log("geschlecht5: 2")
}

//-------


 },


//@@@@@@@@@@@Geschlecht@@@@@@@@@



//@@@@@@@@@@@Alter@@@@@@@@@

'click #755': function () {
Session.set("alter5", document.getElementById('754').value);
document.getElementById('754').disabled = true; 
document.getElementById('755').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'alter5': Session.get("alter5")} });
},


//@@@@@@@@@@@Alter@@@@@@@@@



//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


'click .item155': function () {




//------- 

   if(document.getElementById('756').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung5': "1"} });
return console.log("beziehung5: 1")
}

//-------


//------- 

   if(document.getElementById('757').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung5': "2"} });
return console.log("beziehung5: 2")
}

//-------


//------- 

   if(document.getElementById('758').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung5': "3"} });
return console.log("beziehung5: 3")
}

//-------


//------- 

   if(document.getElementById('759').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung5': "4"} });
return console.log("beziehung5: 4")
}

//-------


//------- 

   if(document.getElementById('760').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung5': "5"} });
return console.log("beziehung5: 5")
}

//-------


//------- 

   if(document.getElementById('761').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung5': "6"} });
return console.log("beziehung5: 6")
}

//-------


//------- 

   if(document.getElementById('762').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung5': "7"} });
return console.log("beziehung5: 7")
}

//-------


//------- 

   if(document.getElementById('763').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung5': "8"} });
return console.log("beziehung5: 8")
}

//-------


//------- 

   if(document.getElementById('764').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung5': "9"} });
return console.log("beziehung5: 9")
}

//-------


//------- 

   if(document.getElementById('765').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung5': "10"} });
return console.log("beziehung5: 10")
}

//-------


//------- 

   if(document.getElementById('766').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung5': "11"} });
return console.log("beziehung5: 11")
}

//-------


//------- 

   if(document.getElementById('767').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung5': "12"} });
return console.log("beziehung5: 12")
}

//-------



 },


//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


//@@@@@@@@@@@Enge@@@@@@@@@
'click .item156': function () {




//------- 

   if(document.getElementById('768').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge5': "1"} });
return console.log("enge5: 1")
}

//-------


//------- 

   if(document.getElementById('769').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge5': "2"} });
return console.log("enge5: 2")
}

//-------


//------- 

   if(document.getElementById('770').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge5': "3"} });
return console.log("enge5: 3")
}

//-------


//------- 

   if(document.getElementById('771').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge5': "4"} });
return console.log("enge5: 4")
}

//-------


//------- 

   if(document.getElementById('772').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge5': "5"} });
return console.log("enge5: 5")
}

//-------






 },

//@@@@@@@@@@@Enge@@@@@@@@@


//@@@@@@@@@@@Beruf@@@@@@@@@

'click #774': function () {
Session.set("beruf5", document.getElementById('773').value);
document.getElementById('773').disabled = true; 
document.getElementById('774').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'beruf5': Session.get("beruf5")} });
},


//@@@@@@@@@@@Beruf@@@@@@@@@




//@@@@@@@@@@@Schule@@@@@@@@@

'click .item158': function () { 


 //------- 

   if(document.getElementById('775').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule5': "1"} });
return console.log("schule5: 1")
}

//-------


 //------- 

   if(document.getElementById('776').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule5': "2"} });
return console.log("schule5: 2")
}

//-------


 //------- 

   if(document.getElementById('777').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule5': "3"} });
return console.log("schule5: 3")
}

//-------


 //------- 

   if(document.getElementById('778').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule5': "4"} });
return console.log("schule5: 4")
}

//-------


 //------- 

   if(document.getElementById('779').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule5': "5"} });
return console.log("schule5: 5")
}

//-------


 //------- 

   if(document.getElementById('780').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule5': "6"} });
return console.log("schule5: 6")
}

//-------


 //------- 

   if(document.getElementById('781').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule5': "7"} });
return console.log("schule5: 7")
}

//-------


 //------- 

   if(document.getElementById('782').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule5': "8"} });
return console.log("schule5: 8")
}

//-------


 //------- 

   if(document.getElementById('783').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule5': "9"} });
return console.log("schule5: 9")
}

//-------


 //------- 

   if(document.getElementById('784').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule5': "10"} });
return console.log("schule5: 10")
}

//-------



 },


//@@@@@@@@@@@Schule@@@@@@@@@


//@@@@@@@@@@@Wie weiter@@@@@@@@@

//weiteren erfassen:
'click #785': function () {
amplify.store('status', "nk5");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
},

//alle erfasst:
'click #786': function () {
amplify.store('status', "fertignk");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
}

//@@@@@@@@@@@Wie weiter@@@@@@@@@








};




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt5@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt6@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



Template.netzwerkkontakt6.events = {

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@

'click #788': function () {
Session.set("kuerzel6", document.getElementById('787').value);
document.getElementById('787').disabled = true; 
document.getElementById('788').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'kuerzel6': Session.get("kuerzel6")} });
},

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@


//@@@@@@@@@@@Geschlecht@@@@@@@@@


'click .item161': function () {




//------- 

   if(document.getElementById('789').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht6': "1"} });
return console.log("geschlecht6: 1")
}

//-------



//------- 

   if(document.getElementById('790').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht6': "2"} });
return console.log("geschlecht6: 2")
}

//-------


 },


//@@@@@@@@@@@Geschlecht@@@@@@@@@



//@@@@@@@@@@@Alter@@@@@@@@@

'click #792': function () {
Session.set("alter6", document.getElementById('791').value);
document.getElementById('791').disabled = true; 
document.getElementById('792').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'alter6': Session.get("alter6")} });
},


//@@@@@@@@@@@Alter@@@@@@@@@



//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


'click .item163': function () {




//------- 

   if(document.getElementById('793').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung6': "1"} });
return console.log("beziehung6: 1")
}

//-------


//------- 

   if(document.getElementById('794').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung6': "2"} });
return console.log("beziehung6: 2")
}

//-------


//------- 

   if(document.getElementById('795').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung6': "3"} });
return console.log("beziehung6: 3")
}

//-------


//------- 

   if(document.getElementById('796').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung6': "4"} });
return console.log("beziehung6: 4")
}

//-------


//------- 

   if(document.getElementById('797').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung6': "5"} });
return console.log("beziehung6: 5")
}

//-------


//------- 

   if(document.getElementById('798').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung6': "6"} });
return console.log("beziehung6: 6")
}

//-------


//------- 

   if(document.getElementById('799').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung6': "7"} });
return console.log("beziehung6: 7")
}

//-------


//------- 

   if(document.getElementById('800').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung6': "8"} });
return console.log("beziehung6: 8")
}

//-------


//------- 

   if(document.getElementById('801').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung6': "9"} });
return console.log("beziehung6: 9")
}

//-------


//------- 

   if(document.getElementById('802').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung6': "10"} });
return console.log("beziehung6: 10")
}

//-------


//------- 

   if(document.getElementById('803').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung6': "11"} });
return console.log("beziehung6: 11")
}

//-------


//------- 

   if(document.getElementById('804').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung6': "12"} });
return console.log("beziehung6: 12")
}

//-------



 },


//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


//@@@@@@@@@@@Enge@@@@@@@@@
'click .item164': function () {




//------- 

   if(document.getElementById('805').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge6': "1"} });
return console.log("enge6: 1")
}

//-------


//------- 

   if(document.getElementById('806').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge6': "2"} });
return console.log("enge6: 2")
}

//-------


//------- 

   if(document.getElementById('807').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge6': "3"} });
return console.log("enge6: 3")
}

//-------


//------- 

   if(document.getElementById('808').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge6': "4"} });
return console.log("enge6: 4")
}

//-------


//------- 

   if(document.getElementById('809').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge6': "5"} });
return console.log("enge6: 5")
}

//-------






 },

//@@@@@@@@@@@Enge@@@@@@@@@


//@@@@@@@@@@@Beruf@@@@@@@@@

'click #811': function () {
Session.set("beruf6", document.getElementById('810').value);
document.getElementById('810').disabled = true; 
document.getElementById('811').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'beruf6': Session.get("beruf6")} });
},


//@@@@@@@@@@@Beruf@@@@@@@@@




//@@@@@@@@@@@Schule@@@@@@@@@

'click .item166': function () { 


 //------- 

   if(document.getElementById('812').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule6': "1"} });
return console.log("schule6: 1")
}

//-------


 //------- 

   if(document.getElementById('813').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule6': "2"} });
return console.log("schule6: 2")
}

//-------


 //------- 

   if(document.getElementById('814').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule6': "3"} });
return console.log("schule6: 3")
}

//-------


 //------- 

   if(document.getElementById('815').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule6': "4"} });
return console.log("schule6: 4")
}

//-------


 //------- 

   if(document.getElementById('816').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule6': "5"} });
return console.log("schule6: 5")
}

//-------


 //------- 

   if(document.getElementById('817').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule6': "6"} });
return console.log("schule6: 6")
}

//-------


 //------- 

   if(document.getElementById('818').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule6': "7"} });
return console.log("schule6: 7")
}

//-------


 //------- 

   if(document.getElementById('819').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule6': "8"} });
return console.log("schule6: 8")
}

//-------


 //------- 

   if(document.getElementById('820').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule6': "9"} });
return console.log("schule6: 9")
}

//-------


 //------- 

   if(document.getElementById('821').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule6': "10"} });
return console.log("schule6: 10")
}

//-------



 },


//@@@@@@@@@@@Schule@@@@@@@@@


//@@@@@@@@@@@Wie weiter@@@@@@@@@

//weiteren erfassen:
'click #822': function () {
amplify.store('status', "nk6");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
},

//alle erfasst:
'click #823': function () {
amplify.store('status', "fertignk");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
}

//@@@@@@@@@@@Wie weiter@@@@@@@@@








};




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt6@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt7@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



Template.netzwerkkontakt7.events = {

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@

'click #825': function () {
Session.set("kuerzel7", document.getElementById('824').value);
document.getElementById('824').disabled = true; 
document.getElementById('825').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'kuerzel7': Session.get("kuerzel7")} });
},

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@


//@@@@@@@@@@@Geschlecht@@@@@@@@@


'click .item169': function () {




//------- 

   if(document.getElementById('826').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht7': "1"} });
return console.log("geschlecht7: 1")
}

//-------



//------- 

   if(document.getElementById('827').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht7': "2"} });
return console.log("geschlecht7: 2")
}

//-------


 },


//@@@@@@@@@@@Geschlecht@@@@@@@@@



//@@@@@@@@@@@Alter@@@@@@@@@

'click #829': function () {
Session.set("alter7", document.getElementById('828').value);
document.getElementById('828').disabled = true; 
document.getElementById('829').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'alter7': Session.get("alter7")} });
},


//@@@@@@@@@@@Alter@@@@@@@@@



//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


'click .item171': function () {




//------- 

   if(document.getElementById('830').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung7': "1"} });
return console.log("beziehung7: 1")
}

//-------


//------- 

   if(document.getElementById('831').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung7': "2"} });
return console.log("beziehung7: 2")
}

//-------


//------- 

   if(document.getElementById('832').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung7': "3"} });
return console.log("beziehung7: 3")
}

//-------


//------- 

   if(document.getElementById('833').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung7': "4"} });
return console.log("beziehung7: 4")
}

//-------


//------- 

   if(document.getElementById('834').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung7': "5"} });
return console.log("beziehung7: 5")
}

//-------


//------- 

   if(document.getElementById('835').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung7': "6"} });
return console.log("beziehung7: 6")
}

//-------


//------- 

   if(document.getElementById('836').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung7': "7"} });
return console.log("beziehung7: 7")
}

//-------


//------- 

   if(document.getElementById('837').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung7': "8"} });
return console.log("beziehung7: 8")
}

//-------


//------- 

   if(document.getElementById('838').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung7': "9"} });
return console.log("beziehung7: 9")
}

//-------


//------- 

   if(document.getElementById('839').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung7': "10"} });
return console.log("beziehung7: 10")
}

//-------


//------- 

   if(document.getElementById('840').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung7': "11"} });
return console.log("beziehung7: 11")
}

//-------


//------- 

   if(document.getElementById('841').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung7': "12"} });
return console.log("beziehung7: 12")
}

//-------



 },


//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


//@@@@@@@@@@@Enge@@@@@@@@@
'click .item172': function () {




//------- 

   if(document.getElementById('842').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge7': "1"} });
return console.log("enge7: 1")
}

//-------


//------- 

   if(document.getElementById('843').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge7': "2"} });
return console.log("enge7: 2")
}

//-------


//------- 

   if(document.getElementById('844').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge7': "3"} });
return console.log("enge7: 3")
}

//-------


//------- 

   if(document.getElementById('845').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge7': "4"} });
return console.log("enge7: 4")
}

//-------


//------- 

   if(document.getElementById('846').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge7': "5"} });
return console.log("enge7: 5")
}

//-------






 },

//@@@@@@@@@@@Enge@@@@@@@@@


//@@@@@@@@@@@Beruf@@@@@@@@@

'click #848': function () {
Session.set("beruf7", document.getElementById('847').value);
document.getElementById('847').disabled = true; 
document.getElementById('848').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'beruf7': Session.get("beruf7")} });
},


//@@@@@@@@@@@Beruf@@@@@@@@@




//@@@@@@@@@@@Schule@@@@@@@@@

'click .item174': function () { 


 //------- 

   if(document.getElementById('849').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule7': "1"} });
return console.log("schule7: 1")
}

//-------


 //------- 

   if(document.getElementById('850').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule7': "2"} });
return console.log("schule7: 2")
}

//-------


 //------- 

   if(document.getElementById('851').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule7': "3"} });
return console.log("schule7: 3")
}

//-------


 //------- 

   if(document.getElementById('852').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule7': "4"} });
return console.log("schule7: 4")
}

//-------


 //------- 

   if(document.getElementById('853').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule7': "5"} });
return console.log("schule7: 5")
}

//-------


 //------- 

   if(document.getElementById('854').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule7': "6"} });
return console.log("schule7: 6")
}

//-------


 //------- 

   if(document.getElementById('855').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule7': "7"} });
return console.log("schule7: 7")
}

//-------


 //------- 

   if(document.getElementById('856').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule7': "8"} });
return console.log("schule7: 8")
}

//-------


 //------- 

   if(document.getElementById('857').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule7': "9"} });
return console.log("schule7: 9")
}

//-------


 //------- 

   if(document.getElementById('858').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule7': "10"} });
return console.log("schule7: 10")
}

//-------



 },


//@@@@@@@@@@@Schule@@@@@@@@@


//@@@@@@@@@@@Wie weiter@@@@@@@@@

//weiteren erfassen:
'click #859': function () {
amplify.store('status', "nk7");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
},

//alle erfasst:
'click #860': function () {
amplify.store('status', "fertignk");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
}

//@@@@@@@@@@@Wie weiter@@@@@@@@@








};




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt7@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt8@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



Template.netzwerkkontakt8.events = {

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@

'click #862': function () {
Session.set("kuerzel8", document.getElementById('861').value);
document.getElementById('861').disabled = true; 
document.getElementById('862').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'kuerzel8': Session.get("kuerzel8")} });
},

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@


//@@@@@@@@@@@Geschlecht@@@@@@@@@


'click .item177': function () {




//------- 

   if(document.getElementById('863').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht8': "1"} });
return console.log("geschlecht8: 1")
}

//-------



//------- 

   if(document.getElementById('864').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht8': "2"} });
return console.log("geschlecht8: 2")
}

//-------


 },


//@@@@@@@@@@@Geschlecht@@@@@@@@@



//@@@@@@@@@@@Alter@@@@@@@@@

'click #866': function () {
Session.set("alter8", document.getElementById('865').value);
document.getElementById('865').disabled = true; 
document.getElementById('866').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'alter8': Session.get("alter8")} });
},


//@@@@@@@@@@@Alter@@@@@@@@@



//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


'click .item179': function () {




//------- 

   if(document.getElementById('867').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung8': "1"} });
return console.log("beziehung8: 1")
}

//-------


//------- 

   if(document.getElementById('868').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung8': "2"} });
return console.log("beziehung8: 2")
}

//-------


//------- 

   if(document.getElementById('869').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung8': "3"} });
return console.log("beziehung8: 3")
}

//-------


//------- 

   if(document.getElementById('870').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung8': "4"} });
return console.log("beziehung8: 4")
}

//-------


//------- 

   if(document.getElementById('871').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung8': "5"} });
return console.log("beziehung8: 5")
}

//-------


//------- 

   if(document.getElementById('872').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung8': "6"} });
return console.log("beziehung8: 6")
}

//-------


//------- 

   if(document.getElementById('873').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung8': "7"} });
return console.log("beziehung8: 7")
}

//-------


//------- 

   if(document.getElementById('874').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung8': "8"} });
return console.log("beziehung8: 8")
}

//-------


//------- 

   if(document.getElementById('875').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung8': "9"} });
return console.log("beziehung8: 9")
}

//-------


//------- 

   if(document.getElementById('876').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung8': "10"} });
return console.log("beziehung8: 10")
}

//-------


//------- 

   if(document.getElementById('877').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung8': "11"} });
return console.log("beziehung8: 11")
}

//-------


//------- 

   if(document.getElementById('878').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung8': "12"} });
return console.log("beziehung8: 12")
}

//-------



 },


//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


//@@@@@@@@@@@Enge@@@@@@@@@
'click .item180': function () {




//------- 

   if(document.getElementById('879').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge8': "1"} });
return console.log("enge8: 1")
}

//-------


//------- 

   if(document.getElementById('880').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge8': "2"} });
return console.log("enge8: 2")
}

//-------


//------- 

   if(document.getElementById('881').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge8': "3"} });
return console.log("enge8: 3")
}

//-------


//------- 

   if(document.getElementById('882').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge8': "4"} });
return console.log("enge8: 4")
}

//-------


//------- 

   if(document.getElementById('883').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge8': "5"} });
return console.log("enge8: 5")
}

//-------






 },

//@@@@@@@@@@@Enge@@@@@@@@@


//@@@@@@@@@@@Beruf@@@@@@@@@

'click #885': function () {
Session.set("beruf8", document.getElementById('884').value);
document.getElementById('884').disabled = true; 
document.getElementById('885').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'beruf8': Session.get("beruf8")} });
},


//@@@@@@@@@@@Beruf@@@@@@@@@




//@@@@@@@@@@@Schule@@@@@@@@@

'click .item182': function () { 


 //------- 

   if(document.getElementById('886').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule8': "1"} });
return console.log("schule8: 1")
}

//-------


 //------- 

   if(document.getElementById('887').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule8': "2"} });
return console.log("schule8: 2")
}

//-------


 //------- 

   if(document.getElementById('888').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule8': "3"} });
return console.log("schule8: 3")
}

//-------


 //------- 

   if(document.getElementById('889').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule8': "4"} });
return console.log("schule8: 4")
}

//-------


 //------- 

   if(document.getElementById('890').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule8': "5"} });
return console.log("schule8: 5")
}

//-------


 //------- 

   if(document.getElementById('891').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule8': "6"} });
return console.log("schule8: 6")
}

//-------


 //------- 

   if(document.getElementById('892').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule8': "7"} });
return console.log("schule8: 7")
}

//-------


 //------- 

   if(document.getElementById('893').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule8': "8"} });
return console.log("schule8: 8")
}

//-------


 //------- 

   if(document.getElementById('894').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule8': "9"} });
return console.log("schule8: 9")
}

//-------


 //------- 

   if(document.getElementById('895').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule8': "10"} });
return console.log("schule8: 10")
}

//-------



 },


//@@@@@@@@@@@Schule@@@@@@@@@


//@@@@@@@@@@@Wie weiter@@@@@@@@@

//weiteren erfassen:
'click #896': function () {
amplify.store('status', "nk8");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
},

//alle erfasst:
'click #897': function () {
amplify.store('status', "fertignk");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
}

//@@@@@@@@@@@Wie weiter@@@@@@@@@








};




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt8@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt9@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



Template.netzwerkkontakt9.events = {

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@

'click #899': function () {
Session.set("kuerzel9", document.getElementById('898').value);
document.getElementById('898').disabled = true; 
document.getElementById('899').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'kuerzel9': Session.get("kuerzel9")} });
},

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@


//@@@@@@@@@@@Geschlecht@@@@@@@@@


'click .item185': function () {




//------- 

   if(document.getElementById('900').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht9': "1"} });
return console.log("geschlecht9: 1")
}

//-------



//------- 

   if(document.getElementById('901').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht9': "2"} });
return console.log("geschlecht9: 2")
}

//-------


 },


//@@@@@@@@@@@Geschlecht@@@@@@@@@



//@@@@@@@@@@@Alter@@@@@@@@@

'click #903': function () {
Session.set("alter9", document.getElementById('902').value);
document.getElementById('902').disabled = true; 
document.getElementById('903').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'alter9': Session.get("alter9")} });
},


//@@@@@@@@@@@Alter@@@@@@@@@



//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


'click .item187': function () {




//------- 

   if(document.getElementById('904').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung9': "1"} });
return console.log("beziehung9: 1")
}

//-------


//------- 

   if(document.getElementById('905').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung9': "2"} });
return console.log("beziehung9: 2")
}

//-------


//------- 

   if(document.getElementById('906').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung9': "3"} });
return console.log("beziehung9: 3")
}

//-------


//------- 

   if(document.getElementById('907').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung9': "4"} });
return console.log("beziehung9: 4")
}

//-------


//------- 

   if(document.getElementById('908').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung9': "5"} });
return console.log("beziehung9: 5")
}

//-------


//------- 

   if(document.getElementById('909').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung9': "6"} });
return console.log("beziehung9: 6")
}

//-------


//------- 

   if(document.getElementById('910').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung9': "7"} });
return console.log("beziehung9: 7")
}

//-------


//------- 

   if(document.getElementById('911').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung9': "8"} });
return console.log("beziehung9: 8")
}

//-------


//------- 

   if(document.getElementById('912').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung9': "9"} });
return console.log("beziehung9: 9")
}

//-------


//------- 

   if(document.getElementById('913').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung9': "10"} });
return console.log("beziehung9: 10")
}

//-------


//------- 

   if(document.getElementById('914').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung9': "11"} });
return console.log("beziehung9: 11")
}

//-------


//------- 

   if(document.getElementById('915').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung9': "12"} });
return console.log("beziehung9: 12")
}

//-------



 },


//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


//@@@@@@@@@@@Enge@@@@@@@@@
'click .item188': function () {




//------- 

   if(document.getElementById('916').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge9': "1"} });
return console.log("enge9: 1")
}

//-------


//------- 

   if(document.getElementById('917').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge9': "2"} });
return console.log("enge9: 2")
}

//-------


//------- 

   if(document.getElementById('918').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge9': "3"} });
return console.log("enge9: 3")
}

//-------


//------- 

   if(document.getElementById('919').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge9': "4"} });
return console.log("enge9: 4")
}

//-------


//------- 

   if(document.getElementById('920').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge9': "5"} });
return console.log("enge9: 5")
}

//-------






 },

//@@@@@@@@@@@Enge@@@@@@@@@


//@@@@@@@@@@@Beruf@@@@@@@@@

'click #922': function () {
Session.set("beruf9", document.getElementById('921').value);
document.getElementById('921').disabled = true; 
document.getElementById('922').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'beruf9': Session.get("beruf9")} });
},


//@@@@@@@@@@@Beruf@@@@@@@@@




//@@@@@@@@@@@Schule@@@@@@@@@

'click .item190': function () { 


 //------- 

   if(document.getElementById('923').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule9': "1"} });
return console.log("schule9: 1")
}

//-------


 //------- 

   if(document.getElementById('924').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule9': "2"} });
return console.log("schule9: 2")
}

//-------


 //------- 

   if(document.getElementById('925').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule9': "3"} });
return console.log("schule9: 3")
}

//-------


 //------- 

   if(document.getElementById('926').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule9': "4"} });
return console.log("schule9: 4")
}

//-------


 //------- 

   if(document.getElementById('927').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule9': "5"} });
return console.log("schule9: 5")
}

//-------


 //------- 

   if(document.getElementById('928').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule9': "6"} });
return console.log("schule9: 6")
}

//-------


 //------- 

   if(document.getElementById('929').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule9': "7"} });
return console.log("schule9: 7")
}

//-------


 //------- 

   if(document.getElementById('930').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule9': "8"} });
return console.log("schule9: 8")
}

//-------


 //------- 

   if(document.getElementById('931').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule9': "9"} });
return console.log("schule9: 9")
}

//-------


 //------- 

   if(document.getElementById('932').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule9': "10"} });
return console.log("schule9: 10")
}

//-------



 },


//@@@@@@@@@@@Schule@@@@@@@@@


//@@@@@@@@@@@Wie weiter@@@@@@@@@

//weiteren erfassen:
'click #933': function () {
amplify.store('status', "nk9");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
},

//alle erfasst:
'click #934': function () {
amplify.store('status', "fertignk");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
}

//@@@@@@@@@@@Wie weiter@@@@@@@@@








};




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt9@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt10@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



Template.netzwerkkontakt10.events = {

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@

'click #936': function () {
Session.set("kuerzel10", document.getElementById('935').value);
document.getElementById('935').disabled = true; 
document.getElementById('936').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'kuerzel10': Session.get("kuerzel10")} });
},

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@


//@@@@@@@@@@@Geschlecht@@@@@@@@@


'click .item193': function () {




//------- 

   if(document.getElementById('937').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht10': "1"} });
return console.log("geschlecht10: 1")
}

//-------



//------- 

   if(document.getElementById('938').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht10': "2"} });
return console.log("geschlecht10: 2")
}

//-------


 },


//@@@@@@@@@@@Geschlecht@@@@@@@@@



//@@@@@@@@@@@Alter@@@@@@@@@

'click #940': function () {
Session.set("alter10", document.getElementById('939').value);
document.getElementById('939').disabled = true; 
document.getElementById('940').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'alter10': Session.get("alter10")} });
},


//@@@@@@@@@@@Alter@@@@@@@@@



//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


'click .item195': function () {




//------- 

   if(document.getElementById('941').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung10': "1"} });
return console.log("beziehung10: 1")
}

//-------


//------- 

   if(document.getElementById('942').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung10': "2"} });
return console.log("beziehung10: 2")
}

//-------


//------- 

   if(document.getElementById('943').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung10': "3"} });
return console.log("beziehung10: 3")
}

//-------


//------- 

   if(document.getElementById('944').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung10': "4"} });
return console.log("beziehung10: 4")
}

//-------


//------- 

   if(document.getElementById('945').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung10': "5"} });
return console.log("beziehung10: 5")
}

//-------


//------- 

   if(document.getElementById('946').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung10': "6"} });
return console.log("beziehung10: 6")
}

//-------


//------- 

   if(document.getElementById('947').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung10': "7"} });
return console.log("beziehung10: 7")
}

//-------


//------- 

   if(document.getElementById('948').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung10': "8"} });
return console.log("beziehung10: 8")
}

//-------


//------- 

   if(document.getElementById('949').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung10': "9"} });
return console.log("beziehung10: 9")
}

//-------


//------- 

   if(document.getElementById('950').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung10': "10"} });
return console.log("beziehung10: 10")
}

//-------


//------- 

   if(document.getElementById('951').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung10': "11"} });
return console.log("beziehung10: 11")
}

//-------


//------- 

   if(document.getElementById('952').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung10': "12"} });
return console.log("beziehung10: 12")
}

//-------



 },


//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


//@@@@@@@@@@@Enge@@@@@@@@@
'click .item196': function () {




//------- 

   if(document.getElementById('953').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge10': "1"} });
return console.log("enge10: 1")
}

//-------


//------- 

   if(document.getElementById('954').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge10': "2"} });
return console.log("enge10: 2")
}

//-------


//------- 

   if(document.getElementById('955').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge10': "3"} });
return console.log("enge10: 3")
}

//-------


//------- 

   if(document.getElementById('956').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge10': "4"} });
return console.log("enge10: 4")
}

//-------


//------- 

   if(document.getElementById('957').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge10': "5"} });
return console.log("enge10: 5")
}

//-------






 },

//@@@@@@@@@@@Enge@@@@@@@@@


//@@@@@@@@@@@Beruf@@@@@@@@@

'click #959': function () {
Session.set("beruf10", document.getElementById('958').value);
document.getElementById('958').disabled = true; 
document.getElementById('959').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'beruf10': Session.get("beruf10")} });
},


//@@@@@@@@@@@Beruf@@@@@@@@@




//@@@@@@@@@@@Schule@@@@@@@@@

'click .item198': function () { 


 //------- 

   if(document.getElementById('960').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule10': "1"} });
return console.log("schule10: 1")
}

//-------


 //------- 

   if(document.getElementById('961').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule10': "2"} });
return console.log("schule10: 2")
}

//-------


 //------- 

   if(document.getElementById('962').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule10': "3"} });
return console.log("schule10: 3")
}

//-------


 //------- 

   if(document.getElementById('963').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule10': "4"} });
return console.log("schule10: 4")
}

//-------


 //------- 

   if(document.getElementById('964').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule10': "5"} });
return console.log("schule10: 5")
}

//-------


 //------- 

   if(document.getElementById('965').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule10': "6"} });
return console.log("schule10: 6")
}

//-------


 //------- 

   if(document.getElementById('966').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule10': "7"} });
return console.log("schule10: 7")
}

//-------


 //------- 

   if(document.getElementById('967').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule10': "8"} });
return console.log("schule10: 8")
}

//-------


 //------- 

   if(document.getElementById('968').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule10': "9"} });
return console.log("schule10: 9")
}

//-------


 //------- 

   if(document.getElementById('969').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule10': "10"} });
return console.log("schule10: 10")
}

//-------



 },


//@@@@@@@@@@@Schule@@@@@@@@@


//@@@@@@@@@@@Wie weiter@@@@@@@@@

//weiteren erfassen:
'click #970': function () {
amplify.store('status', "nk10");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
},

//alle erfasst:
'click #971': function () {
amplify.store('status', "fertignk");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
}

//@@@@@@@@@@@Wie weiter@@@@@@@@@








};




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt10@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt11@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



Template.netzwerkkontakt11.events = {

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@

'click #973': function () {
Session.set("kuerzel11", document.getElementById('972').value);
document.getElementById('972').disabled = true; 
document.getElementById('973').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'kuerzel11': Session.get("kuerzel11")} });
},

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@


//@@@@@@@@@@@Geschlecht@@@@@@@@@


'click .item201': function () {




//------- 

   if(document.getElementById('974').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht11': "1"} });
return console.log("geschlecht11: 1")
}

//-------



//------- 

   if(document.getElementById('975').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht11': "2"} });
return console.log("geschlecht11: 2")
}

//-------


 },


//@@@@@@@@@@@Geschlecht@@@@@@@@@



//@@@@@@@@@@@Alter@@@@@@@@@

'click #977': function () {
Session.set("alter11", document.getElementById('976').value);
document.getElementById('976').disabled = true; 
document.getElementById('977').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'alter11': Session.get("alter11")} });
},


//@@@@@@@@@@@Alter@@@@@@@@@



//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


'click .item203': function () {




//------- 

   if(document.getElementById('978').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung11': "1"} });
return console.log("beziehung11: 1")
}

//-------


//------- 

   if(document.getElementById('979').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung11': "2"} });
return console.log("beziehung11: 2")
}

//-------


//------- 

   if(document.getElementById('980').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung11': "3"} });
return console.log("beziehung11: 3")
}

//-------


//------- 

   if(document.getElementById('981').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung11': "4"} });
return console.log("beziehung11: 4")
}

//-------


//------- 

   if(document.getElementById('982').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung11': "5"} });
return console.log("beziehung11: 5")
}

//-------


//------- 

   if(document.getElementById('983').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung11': "6"} });
return console.log("beziehung11: 6")
}

//-------


//------- 

   if(document.getElementById('984').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung11': "7"} });
return console.log("beziehung11: 7")
}

//-------


//------- 

   if(document.getElementById('985').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung11': "8"} });
return console.log("beziehung11: 8")
}

//-------


//------- 

   if(document.getElementById('986').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung11': "9"} });
return console.log("beziehung11: 9")
}

//-------


//------- 

   if(document.getElementById('987').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung11': "10"} });
return console.log("beziehung11: 10")
}

//-------


//------- 

   if(document.getElementById('988').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung11': "11"} });
return console.log("beziehung11: 11")
}

//-------


//------- 

   if(document.getElementById('989').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung11': "12"} });
return console.log("beziehung11: 12")
}

//-------



 },


//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


//@@@@@@@@@@@Enge@@@@@@@@@
'click .item204': function () {




//------- 

   if(document.getElementById('990').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge11': "1"} });
return console.log("enge11: 1")
}

//-------


//------- 

   if(document.getElementById('991').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge11': "2"} });
return console.log("enge11: 2")
}

//-------


//------- 

   if(document.getElementById('992').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge11': "3"} });
return console.log("enge11: 3")
}

//-------


//------- 

   if(document.getElementById('993').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge11': "4"} });
return console.log("enge11: 4")
}

//-------


//------- 

   if(document.getElementById('994').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge11': "5"} });
return console.log("enge11: 5")
}

//-------






 },

//@@@@@@@@@@@Enge@@@@@@@@@


//@@@@@@@@@@@Beruf@@@@@@@@@

'click #996': function () {
Session.set("beruf11", document.getElementById('995').value);
document.getElementById('995').disabled = true; 
document.getElementById('996').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'beruf11': Session.get("beruf11")} });
},


//@@@@@@@@@@@Beruf@@@@@@@@@




//@@@@@@@@@@@Schule@@@@@@@@@

'click .item206': function () { 


 //------- 

   if(document.getElementById('997').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule11': "1"} });
return console.log("schule11: 1")
}

//-------


 //------- 

   if(document.getElementById('998').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule11': "2"} });
return console.log("schule11: 2")
}

//-------


 //------- 

   if(document.getElementById('999').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule11': "3"} });
return console.log("schule11: 3")
}

//-------


 //------- 

   if(document.getElementById('1000').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule11': "4"} });
return console.log("schule11: 4")
}

//-------


 //------- 

   if(document.getElementById('1001').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule11': "5"} });
return console.log("schule11: 5")
}

//-------


 //------- 

   if(document.getElementById('1002').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule11': "6"} });
return console.log("schule11: 6")
}

//-------


 //------- 

   if(document.getElementById('1003').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule11': "7"} });
return console.log("schule11: 7")
}

//-------


 //------- 

   if(document.getElementById('1004').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule11': "8"} });
return console.log("schule11: 8")
}

//-------


 //------- 

   if(document.getElementById('1005').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule11': "9"} });
return console.log("schule11: 9")
}

//-------


 //------- 

   if(document.getElementById('1006').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule11': "10"} });
return console.log("schule11: 10")
}

//-------



 },


//@@@@@@@@@@@Schule@@@@@@@@@


//@@@@@@@@@@@Wie weiter@@@@@@@@@

//weiteren erfassen:
'click #1007': function () {
amplify.store('status', "nk11");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
},

//alle erfasst:
'click #1008': function () {
amplify.store('status', "fertignk");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
}

//@@@@@@@@@@@Wie weiter@@@@@@@@@








};




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt11@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt12@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



Template.netzwerkkontakt12.events = {

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@

'click #1010': function () {
Session.set("kuerzel12", document.getElementById('1009').value);
document.getElementById('1009').disabled = true; 
document.getElementById('1010').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'kuerzel12': Session.get("kuerzel12")} });
},

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@


//@@@@@@@@@@@Geschlecht@@@@@@@@@


'click .item209': function () {




//------- 

   if(document.getElementById('1011').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht12': "1"} });
return console.log("geschlecht12: 1")
}

//-------



//------- 

   if(document.getElementById('1012').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht12': "2"} });
return console.log("geschlecht12: 2")
}

//-------


 },


//@@@@@@@@@@@Geschlecht@@@@@@@@@



//@@@@@@@@@@@Alter@@@@@@@@@

'click #1014': function () {
Session.set("alter12", document.getElementById('1013').value);
document.getElementById('1013').disabled = true; 
document.getElementById('1014').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'alter12': Session.get("alter12")} });
},


//@@@@@@@@@@@Alter@@@@@@@@@



//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


'click .item211': function () {




//------- 

   if(document.getElementById('1015').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung12': "1"} });
return console.log("beziehung12: 1")
}

//-------


//------- 

   if(document.getElementById('1016').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung12': "2"} });
return console.log("beziehung12: 2")
}

//-------


//------- 

   if(document.getElementById('1017').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung12': "3"} });
return console.log("beziehung12: 3")
}

//-------


//------- 

   if(document.getElementById('1018').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung12': "4"} });
return console.log("beziehung12: 4")
}

//-------


//------- 

   if(document.getElementById('1019').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung12': "5"} });
return console.log("beziehung12: 5")
}

//-------


//------- 

   if(document.getElementById('1020').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung12': "6"} });
return console.log("beziehung12: 6")
}

//-------


//------- 

   if(document.getElementById('1021').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung12': "7"} });
return console.log("beziehung12: 7")
}

//-------


//------- 

   if(document.getElementById('1022').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung12': "8"} });
return console.log("beziehung12: 8")
}

//-------


//------- 

   if(document.getElementById('1023').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung12': "9"} });
return console.log("beziehung12: 9")
}

//-------


//------- 

   if(document.getElementById('1024').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung12': "10"} });
return console.log("beziehung12: 10")
}

//-------


//------- 

   if(document.getElementById('1025').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung12': "11"} });
return console.log("beziehung12: 11")
}

//-------


//------- 

   if(document.getElementById('1026').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung12': "12"} });
return console.log("beziehung12: 12")
}

//-------



 },


//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


//@@@@@@@@@@@Enge@@@@@@@@@
'click .item212': function () {




//------- 

   if(document.getElementById('1027').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge12': "1"} });
return console.log("enge12: 1")
}

//-------


//------- 

   if(document.getElementById('1028').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge12': "2"} });
return console.log("enge12: 2")
}

//-------


//------- 

   if(document.getElementById('1029').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge12': "3"} });
return console.log("enge12: 3")
}

//-------


//------- 

   if(document.getElementById('1030').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge12': "4"} });
return console.log("enge12: 4")
}

//-------


//------- 

   if(document.getElementById('1031').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge12': "5"} });
return console.log("enge12: 5")
}

//-------






 },

//@@@@@@@@@@@Enge@@@@@@@@@


//@@@@@@@@@@@Beruf@@@@@@@@@

'click #1033': function () {
Session.set("beruf12", document.getElementById('1032').value);
document.getElementById('1032').disabled = true; 
document.getElementById('1033').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'beruf12': Session.get("beruf12")} });
},


//@@@@@@@@@@@Beruf@@@@@@@@@




//@@@@@@@@@@@Schule@@@@@@@@@

'click .item214': function () { 


 //------- 

   if(document.getElementById('1034').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule12': "1"} });
return console.log("schule12: 1")
}

//-------


 //------- 

   if(document.getElementById('1035').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule12': "2"} });
return console.log("schule12: 2")
}

//-------


 //------- 

   if(document.getElementById('1036').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule12': "3"} });
return console.log("schule12: 3")
}

//-------


 //------- 

   if(document.getElementById('1037').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule12': "4"} });
return console.log("schule12: 4")
}

//-------


 //------- 

   if(document.getElementById('1038').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule12': "5"} });
return console.log("schule12: 5")
}

//-------


 //------- 

   if(document.getElementById('1039').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule12': "6"} });
return console.log("schule12: 6")
}

//-------


 //------- 

   if(document.getElementById('1040').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule12': "7"} });
return console.log("schule12: 7")
}

//-------


 //------- 

   if(document.getElementById('1041').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule12': "8"} });
return console.log("schule12: 8")
}

//-------


 //------- 

   if(document.getElementById('1042').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule12': "9"} });
return console.log("schule12: 9")
}

//-------


 //------- 

   if(document.getElementById('1043').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule12': "10"} });
return console.log("schule12: 10")
}

//-------



 },


//@@@@@@@@@@@Schule@@@@@@@@@


//@@@@@@@@@@@Wie weiter@@@@@@@@@

//weiteren erfassen:
'click #1044': function () {
amplify.store('status', "nk12");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
},

//alle erfasst:
'click #1045': function () {
amplify.store('status', "fertignk");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
}

//@@@@@@@@@@@Wie weiter@@@@@@@@@








};




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt12@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt13@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



Template.netzwerkkontakt13.events = {

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@

'click #1047': function () {
Session.set("kuerzel13", document.getElementById('1046').value);
document.getElementById('1046').disabled = true; 
document.getElementById('1047').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'kuerzel13': Session.get("kuerzel13")} });
},

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@


//@@@@@@@@@@@Geschlecht@@@@@@@@@


'click .item217': function () {




//------- 

   if(document.getElementById('1048').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht13': "1"} });
return console.log("geschlecht13: 1")
}

//-------



//------- 

   if(document.getElementById('1049').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht13': "2"} });
return console.log("geschlecht13: 2")
}

//-------


 },


//@@@@@@@@@@@Geschlecht@@@@@@@@@



//@@@@@@@@@@@Alter@@@@@@@@@

'click #1051': function () {
Session.set("alter13", document.getElementById('1050').value);
document.getElementById('1050').disabled = true; 
document.getElementById('1051').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'alter13': Session.get("alter13")} });
},


//@@@@@@@@@@@Alter@@@@@@@@@



//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


'click .item219': function () {




//------- 

   if(document.getElementById('1052').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung13': "1"} });
return console.log("beziehung13: 1")
}

//-------


//------- 

   if(document.getElementById('1053').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung13': "2"} });
return console.log("beziehung13: 2")
}

//-------


//------- 

   if(document.getElementById('1054').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung13': "3"} });
return console.log("beziehung13: 3")
}

//-------


//------- 

   if(document.getElementById('1055').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung13': "4"} });
return console.log("beziehung13: 4")
}

//-------


//------- 

   if(document.getElementById('1056').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung13': "5"} });
return console.log("beziehung13: 5")
}

//-------


//------- 

   if(document.getElementById('1057').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung13': "6"} });
return console.log("beziehung13: 6")
}

//-------


//------- 

   if(document.getElementById('1058').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung13': "7"} });
return console.log("beziehung13: 7")
}

//-------


//------- 

   if(document.getElementById('1059').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung13': "8"} });
return console.log("beziehung13: 8")
}

//-------


//------- 

   if(document.getElementById('1060').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung13': "9"} });
return console.log("beziehung13: 9")
}

//-------


//------- 

   if(document.getElementById('1061').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung13': "10"} });
return console.log("beziehung13: 10")
}

//-------


//------- 

   if(document.getElementById('1062').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung13': "11"} });
return console.log("beziehung13: 11")
}

//-------


//------- 

   if(document.getElementById('1063').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung13': "12"} });
return console.log("beziehung13: 12")
}

//-------



 },


//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


//@@@@@@@@@@@Enge@@@@@@@@@
'click .item220': function () {




//------- 

   if(document.getElementById('1064').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge13': "1"} });
return console.log("enge13: 1")
}

//-------


//------- 

   if(document.getElementById('1065').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge13': "2"} });
return console.log("enge13: 2")
}

//-------


//------- 

   if(document.getElementById('1066').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge13': "3"} });
return console.log("enge13: 3")
}

//-------


//------- 

   if(document.getElementById('1067').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge13': "4"} });
return console.log("enge13: 4")
}

//-------


//------- 

   if(document.getElementById('1068').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge13': "5"} });
return console.log("enge13: 5")
}

//-------






 },

//@@@@@@@@@@@Enge@@@@@@@@@


//@@@@@@@@@@@Beruf@@@@@@@@@

'click #1070': function () {
Session.set("beruf13", document.getElementById('1069').value);
document.getElementById('1069').disabled = true; 
document.getElementById('1070').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'beruf13': Session.get("beruf13")} });
},


//@@@@@@@@@@@Beruf@@@@@@@@@




//@@@@@@@@@@@Schule@@@@@@@@@

'click .item222': function () { 


 //------- 

   if(document.getElementById('1071').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule13': "1"} });
return console.log("schule13: 1")
}

//-------


 //------- 

   if(document.getElementById('1072').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule13': "2"} });
return console.log("schule13: 2")
}

//-------


 //------- 

   if(document.getElementById('1073').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule13': "3"} });
return console.log("schule13: 3")
}

//-------


 //------- 

   if(document.getElementById('1074').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule13': "4"} });
return console.log("schule13: 4")
}

//-------


 //------- 

   if(document.getElementById('1075').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule13': "5"} });
return console.log("schule13: 5")
}

//-------


 //------- 

   if(document.getElementById('1076').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule13': "6"} });
return console.log("schule13: 6")
}

//-------


 //------- 

   if(document.getElementById('1077').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule13': "7"} });
return console.log("schule13: 7")
}

//-------


 //------- 

   if(document.getElementById('1078').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule13': "8"} });
return console.log("schule13: 8")
}

//-------


 //------- 

   if(document.getElementById('1079').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule13': "9"} });
return console.log("schule13: 9")
}

//-------


 //------- 

   if(document.getElementById('1080').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule13': "10"} });
return console.log("schule13: 10")
}

//-------



 },


//@@@@@@@@@@@Schule@@@@@@@@@


//@@@@@@@@@@@Wie weiter@@@@@@@@@

//weiteren erfassen:
'click #1081': function () {
amplify.store('status', "nk13");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
},

//alle erfasst:
'click #1082': function () {
amplify.store('status', "fertignk");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
}

//@@@@@@@@@@@Wie weiter@@@@@@@@@








};




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt13@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt14@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



Template.netzwerkkontakt14.events = {

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@

'click #1084': function () {
Session.set("kuerzel14", document.getElementById('1083').value);
document.getElementById('1083').disabled = true; 
document.getElementById('1084').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'kuerzel14': Session.get("kuerzel14")} });
},

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@


//@@@@@@@@@@@Geschlecht@@@@@@@@@


'click .item225': function () {




//------- 

   if(document.getElementById('1085').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht14': "1"} });
return console.log("geschlecht14: 1")
}

//-------



//------- 

   if(document.getElementById('1086').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht14': "2"} });
return console.log("geschlecht14: 2")
}

//-------


 },


//@@@@@@@@@@@Geschlecht@@@@@@@@@



//@@@@@@@@@@@Alter@@@@@@@@@

'click #1088': function () {
Session.set("alter14", document.getElementById('1087').value);
document.getElementById('1087').disabled = true; 
document.getElementById('1088').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'alter14': Session.get("alter14")} });
},


//@@@@@@@@@@@Alter@@@@@@@@@



//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


'click .item227': function () {




//------- 

   if(document.getElementById('1089').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung14': "1"} });
return console.log("beziehung14: 1")
}

//-------


//------- 

   if(document.getElementById('1090').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung14': "2"} });
return console.log("beziehung14: 2")
}

//-------


//------- 

   if(document.getElementById('1091').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung14': "3"} });
return console.log("beziehung14: 3")
}

//-------


//------- 

   if(document.getElementById('1092').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung14': "4"} });
return console.log("beziehung14: 4")
}

//-------


//------- 

   if(document.getElementById('1093').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung14': "5"} });
return console.log("beziehung14: 5")
}

//-------


//------- 

   if(document.getElementById('1094').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung14': "6"} });
return console.log("beziehung14: 6")
}

//-------


//------- 

   if(document.getElementById('1095').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung14': "7"} });
return console.log("beziehung14: 7")
}

//-------


//------- 

   if(document.getElementById('1096').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung14': "8"} });
return console.log("beziehung14: 8")
}

//-------


//------- 

   if(document.getElementById('1097').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung14': "9"} });
return console.log("beziehung14: 9")
}

//-------


//------- 

   if(document.getElementById('1098').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung14': "10"} });
return console.log("beziehung14: 10")
}

//-------


//------- 

   if(document.getElementById('1099').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung14': "11"} });
return console.log("beziehung14: 11")
}

//-------


//------- 

   if(document.getElementById('1100').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung14': "12"} });
return console.log("beziehung14: 12")
}

//-------



 },


//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


//@@@@@@@@@@@Enge@@@@@@@@@
'click .item228': function () {




//------- 

   if(document.getElementById('1101').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge14': "1"} });
return console.log("enge14: 1")
}

//-------


//------- 

   if(document.getElementById('1102').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge14': "2"} });
return console.log("enge14: 2")
}

//-------


//------- 

   if(document.getElementById('1103').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge14': "3"} });
return console.log("enge14: 3")
}

//-------


//------- 

   if(document.getElementById('1104').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge14': "4"} });
return console.log("enge14: 4")
}

//-------


//------- 

   if(document.getElementById('1105').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge14': "5"} });
return console.log("enge14: 5")
}

//-------






 },

//@@@@@@@@@@@Enge@@@@@@@@@


//@@@@@@@@@@@Beruf@@@@@@@@@

'click #1107': function () {
Session.set("beruf14", document.getElementById('1106').value);
document.getElementById('1106').disabled = true; 
document.getElementById('1107').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'beruf14': Session.get("beruf14")} });
},


//@@@@@@@@@@@Beruf@@@@@@@@@




//@@@@@@@@@@@Schule@@@@@@@@@

'click .item230': function () { 


 //------- 

   if(document.getElementById('1108').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule14': "1"} });
return console.log("schule14: 1")
}

//-------


 //------- 

   if(document.getElementById('1109').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule14': "2"} });
return console.log("schule14: 2")
}

//-------


 //------- 

   if(document.getElementById('1110').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule14': "3"} });
return console.log("schule14: 3")
}

//-------


 //------- 

   if(document.getElementById('1111').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule14': "4"} });
return console.log("schule14: 4")
}

//-------


 //------- 

   if(document.getElementById('1112').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule14': "5"} });
return console.log("schule14: 5")
}

//-------


 //------- 

   if(document.getElementById('1113').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule14': "6"} });
return console.log("schule14: 6")
}

//-------


 //------- 

   if(document.getElementById('1114').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule14': "7"} });
return console.log("schule14: 7")
}

//-------


 //------- 

   if(document.getElementById('1115').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule14': "8"} });
return console.log("schule14: 8")
}

//-------


 //------- 

   if(document.getElementById('1116').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule14': "9"} });
return console.log("schule14: 9")
}

//-------


 //------- 

   if(document.getElementById('1117').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule14': "10"} });
return console.log("schule14: 10")
}

//-------



 },


//@@@@@@@@@@@Schule@@@@@@@@@


//@@@@@@@@@@@Wie weiter@@@@@@@@@

//weiteren erfassen:
'click #1118': function () {
amplify.store('status', "nk14");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
},

//alle erfasst:
'click #1119': function () {
amplify.store('status', "fertignk");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
}

//@@@@@@@@@@@Wie weiter@@@@@@@@@








};




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt14@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt15@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



Template.netzwerkkontakt15.events = {

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@

'click #1121': function () {
Session.set("kuerzel15", document.getElementById('1120').value);
document.getElementById('1120').disabled = true; 
document.getElementById('1121').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'kuerzel15': Session.get("kuerzel15")} });
},

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@


//@@@@@@@@@@@Geschlecht@@@@@@@@@


'click .item233': function () {




//------- 

   if(document.getElementById('1122').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht15': "1"} });
return console.log("geschlecht15: 1")
}

//-------



//------- 

   if(document.getElementById('1123').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht15': "2"} });
return console.log("geschlecht15: 2")
}

//-------


 },


//@@@@@@@@@@@Geschlecht@@@@@@@@@



//@@@@@@@@@@@Alter@@@@@@@@@

'click #1125': function () {
Session.set("alter15", document.getElementById('1124').value);
document.getElementById('1124').disabled = true; 
document.getElementById('1125').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'alter15': Session.get("alter15")} });
},


//@@@@@@@@@@@Alter@@@@@@@@@



//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


'click .item235': function () {




//------- 

   if(document.getElementById('1126').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung15': "1"} });
return console.log("beziehung15: 1")
}

//-------


//------- 

   if(document.getElementById('1127').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung15': "2"} });
return console.log("beziehung15: 2")
}

//-------


//------- 

   if(document.getElementById('1128').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung15': "3"} });
return console.log("beziehung15: 3")
}

//-------


//------- 

   if(document.getElementById('1129').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung15': "4"} });
return console.log("beziehung15: 4")
}

//-------


//------- 

   if(document.getElementById('1130').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung15': "5"} });
return console.log("beziehung15: 5")
}

//-------


//------- 

   if(document.getElementById('1131').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung15': "6"} });
return console.log("beziehung15: 6")
}

//-------


//------- 

   if(document.getElementById('1132').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung15': "7"} });
return console.log("beziehung15: 7")
}

//-------


//------- 

   if(document.getElementById('1133').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung15': "8"} });
return console.log("beziehung15: 8")
}

//-------


//------- 

   if(document.getElementById('1134').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung15': "9"} });
return console.log("beziehung15: 9")
}

//-------


//------- 

   if(document.getElementById('1135').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung15': "10"} });
return console.log("beziehung15: 10")
}

//-------


//------- 

   if(document.getElementById('1136').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung15': "11"} });
return console.log("beziehung15: 11")
}

//-------


//------- 

   if(document.getElementById('1137').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung15': "12"} });
return console.log("beziehung15: 12")
}

//-------



 },


//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


//@@@@@@@@@@@Enge@@@@@@@@@
'click .item236': function () {




//------- 

   if(document.getElementById('1138').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge15': "1"} });
return console.log("enge15: 1")
}

//-------


//------- 

   if(document.getElementById('1139').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge15': "2"} });
return console.log("enge15: 2")
}

//-------


//------- 

   if(document.getElementById('1140').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge15': "3"} });
return console.log("enge15: 3")
}

//-------


//------- 

   if(document.getElementById('1141').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge15': "4"} });
return console.log("enge15: 4")
}

//-------


//------- 

   if(document.getElementById('1142').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge15': "5"} });
return console.log("enge15: 5")
}

//-------






 },

//@@@@@@@@@@@Enge@@@@@@@@@


//@@@@@@@@@@@Beruf@@@@@@@@@

'click #1144': function () {
Session.set("beruf15", document.getElementById('1143').value);
document.getElementById('1143').disabled = true; 
document.getElementById('1144').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'beruf15': Session.get("beruf15")} });
},


//@@@@@@@@@@@Beruf@@@@@@@@@




//@@@@@@@@@@@Schule@@@@@@@@@

'click .item238': function () { 


 //------- 

   if(document.getElementById('1145').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule15': "1"} });
return console.log("schule15: 1")
}

//-------


 //------- 

   if(document.getElementById('1146').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule15': "2"} });
return console.log("schule15: 2")
}

//-------


 //------- 

   if(document.getElementById('1147').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule15': "3"} });
return console.log("schule15: 3")
}

//-------


 //------- 

   if(document.getElementById('1148').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule15': "4"} });
return console.log("schule15: 4")
}

//-------


 //------- 

   if(document.getElementById('1149').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule15': "5"} });
return console.log("schule15: 5")
}

//-------


 //------- 

   if(document.getElementById('1150').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule15': "6"} });
return console.log("schule15: 6")
}

//-------


 //------- 

   if(document.getElementById('1151').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule15': "7"} });
return console.log("schule15: 7")
}

//-------


 //------- 

   if(document.getElementById('1152').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule15': "8"} });
return console.log("schule15: 8")
}

//-------


 //------- 

   if(document.getElementById('1153').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule15': "9"} });
return console.log("schule15: 9")
}

//-------


 //------- 

   if(document.getElementById('1154').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule15': "10"} });
return console.log("schule15: 10")
}

//-------



 },


//@@@@@@@@@@@Schule@@@@@@@@@


//@@@@@@@@@@@Wie weiter@@@@@@@@@

//weiteren erfassen:
'click #1155': function () {
amplify.store('status', "nk15");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
},

//alle erfasst:
'click #1156': function () {
amplify.store('status', "fertignk");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
}

//@@@@@@@@@@@Wie weiter@@@@@@@@@








};




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt15@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt16@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



Template.netzwerkkontakt16.events = {

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@

'click #1158': function () {
Session.set("kuerzel16", document.getElementById('1157').value);
document.getElementById('1157').disabled = true; 
document.getElementById('1158').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'kuerzel16': Session.get("kuerzel16")} });
},

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@


//@@@@@@@@@@@Geschlecht@@@@@@@@@


'click .item241': function () {




//------- 

   if(document.getElementById('1159').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht16': "1"} });
return console.log("geschlecht16: 1")
}

//-------



//------- 

   if(document.getElementById('1160').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht16': "2"} });
return console.log("geschlecht16: 2")
}

//-------


 },


//@@@@@@@@@@@Geschlecht@@@@@@@@@



//@@@@@@@@@@@Alter@@@@@@@@@

'click #1162': function () {
Session.set("alter16", document.getElementById('1161').value);
document.getElementById('1161').disabled = true; 
document.getElementById('1162').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'alter16': Session.get("alter16")} });
},


//@@@@@@@@@@@Alter@@@@@@@@@



//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


'click .item243': function () {




//------- 

   if(document.getElementById('1163').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung16': "1"} });
return console.log("beziehung16: 1")
}

//-------


//------- 

   if(document.getElementById('1164').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung16': "2"} });
return console.log("beziehung16: 2")
}

//-------


//------- 

   if(document.getElementById('1165').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung16': "3"} });
return console.log("beziehung16: 3")
}

//-------


//------- 

   if(document.getElementById('1166').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung16': "4"} });
return console.log("beziehung16: 4")
}

//-------


//------- 

   if(document.getElementById('1167').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung16': "5"} });
return console.log("beziehung16: 5")
}

//-------


//------- 

   if(document.getElementById('1168').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung16': "6"} });
return console.log("beziehung16: 6")
}

//-------


//------- 

   if(document.getElementById('1169').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung16': "7"} });
return console.log("beziehung16: 7")
}

//-------


//------- 

   if(document.getElementById('1170').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung16': "8"} });
return console.log("beziehung16: 8")
}

//-------


//------- 

   if(document.getElementById('1171').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung16': "9"} });
return console.log("beziehung16: 9")
}

//-------


//------- 

   if(document.getElementById('1172').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung16': "10"} });
return console.log("beziehung16: 10")
}

//-------


//------- 

   if(document.getElementById('1173').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung16': "11"} });
return console.log("beziehung16: 11")
}

//-------


//------- 

   if(document.getElementById('1174').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung16': "12"} });
return console.log("beziehung16: 12")
}

//-------



 },


//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


//@@@@@@@@@@@Enge@@@@@@@@@
'click .item244': function () {




//------- 

   if(document.getElementById('1175').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge16': "1"} });
return console.log("enge16: 1")
}

//-------


//------- 

   if(document.getElementById('1176').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge16': "2"} });
return console.log("enge16: 2")
}

//-------


//------- 

   if(document.getElementById('1177').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge16': "3"} });
return console.log("enge16: 3")
}

//-------


//------- 

   if(document.getElementById('1178').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge16': "4"} });
return console.log("enge16: 4")
}

//-------


//------- 

   if(document.getElementById('1179').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge16': "5"} });
return console.log("enge16: 5")
}

//-------






 },

//@@@@@@@@@@@Enge@@@@@@@@@


//@@@@@@@@@@@Beruf@@@@@@@@@

'click #1181': function () {
Session.set("beruf16", document.getElementById('1180').value);
document.getElementById('1180').disabled = true; 
document.getElementById('1181').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'beruf16': Session.get("beruf16")} });
},


//@@@@@@@@@@@Beruf@@@@@@@@@




//@@@@@@@@@@@Schule@@@@@@@@@

'click .item246': function () { 


 //------- 

   if(document.getElementById('1182').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule16': "1"} });
return console.log("schule16: 1")
}

//-------


 //------- 

   if(document.getElementById('1183').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule16': "2"} });
return console.log("schule16: 2")
}

//-------


 //------- 

   if(document.getElementById('1184').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule16': "3"} });
return console.log("schule16: 3")
}

//-------


 //------- 

   if(document.getElementById('1185').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule16': "4"} });
return console.log("schule16: 4")
}

//-------


 //------- 

   if(document.getElementById('1186').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule16': "5"} });
return console.log("schule16: 5")
}

//-------


 //------- 

   if(document.getElementById('1187').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule16': "6"} });
return console.log("schule16: 6")
}

//-------


 //------- 

   if(document.getElementById('1188').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule16': "7"} });
return console.log("schule16: 7")
}

//-------


 //------- 

   if(document.getElementById('1189').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule16': "8"} });
return console.log("schule16: 8")
}

//-------


 //------- 

   if(document.getElementById('1190').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule16': "9"} });
return console.log("schule16: 9")
}

//-------


 //------- 

   if(document.getElementById('1191').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule16': "10"} });
return console.log("schule16: 10")
}

//-------



 },


//@@@@@@@@@@@Schule@@@@@@@@@


//@@@@@@@@@@@Wie weiter@@@@@@@@@

//weiteren erfassen:
'click #1192': function () {
amplify.store('status', "nk16");
Session.set('status', amplify.store('status'));
scrollTo(0,0)
},

//alle erfasst:
'click #1193': function () {
amplify.store('status', "fertignk");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
}

//@@@@@@@@@@@Wie weiter@@@@@@@@@








};




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt16@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt17@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



Template.netzwerkkontakt17.events = {

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@

'click #1195': function () {
Session.set("kuerzel17", document.getElementById('1194').value);
document.getElementById('1194').disabled = true; 
document.getElementById('1195').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'kuerzel17': Session.get("kuerzel17")} });
},

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@


//@@@@@@@@@@@Geschlecht@@@@@@@@@


'click .item249': function () {




//------- 

   if(document.getElementById('1196').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht17': "1"} });
return console.log("geschlecht17: 1")
}

//-------



//------- 

   if(document.getElementById('1197').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht17': "2"} });
return console.log("geschlecht17: 2")
}

//-------


 },


//@@@@@@@@@@@Geschlecht@@@@@@@@@



//@@@@@@@@@@@Alter@@@@@@@@@

'click #1199': function () {
Session.set("alter17", document.getElementById('1198').value);
document.getElementById('1198').disabled = true; 
document.getElementById('1199').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'alter17': Session.get("alter17")} });
},


//@@@@@@@@@@@Alter@@@@@@@@@



//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


'click .item251': function () {




//------- 

   if(document.getElementById('1200').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung17': "1"} });
return console.log("beziehung17: 1")
}

//-------


//------- 

   if(document.getElementById('1201').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung17': "2"} });
return console.log("beziehung17: 2")
}

//-------


//------- 

   if(document.getElementById('1202').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung17': "3"} });
return console.log("beziehung17: 3")
}

//-------


//------- 

   if(document.getElementById('1203').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung17': "4"} });
return console.log("beziehung17: 4")
}

//-------


//------- 

   if(document.getElementById('1204').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung17': "5"} });
return console.log("beziehung17: 5")
}

//-------


//------- 

   if(document.getElementById('1205').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung17': "6"} });
return console.log("beziehung17: 6")
}

//-------


//------- 

   if(document.getElementById('1206').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung17': "7"} });
return console.log("beziehung17: 7")
}

//-------


//------- 

   if(document.getElementById('1207').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung17': "8"} });
return console.log("beziehung17: 8")
}

//-------


//------- 

   if(document.getElementById('1208').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung17': "9"} });
return console.log("beziehung17: 9")
}

//-------


//------- 

   if(document.getElementById('1209').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung17': "10"} });
return console.log("beziehung17: 10")
}

//-------


//------- 

   if(document.getElementById('1210').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung17': "11"} });
return console.log("beziehung17: 11")
}

//-------


//------- 

   if(document.getElementById('1211').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung17': "12"} });
return console.log("beziehung17: 12")
}

//-------



 },


//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


//@@@@@@@@@@@Enge@@@@@@@@@
'click .item252': function () {




//------- 

   if(document.getElementById('1212').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge17': "1"} });
return console.log("enge17: 1")
}

//-------


//------- 

   if(document.getElementById('1213').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge17': "2"} });
return console.log("enge17: 2")
}

//-------


//------- 

   if(document.getElementById('1214').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge17': "3"} });
return console.log("enge17: 3")
}

//-------


//------- 

   if(document.getElementById('1215').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge17': "4"} });
return console.log("enge17: 4")
}

//-------


//------- 

   if(document.getElementById('1216').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge17': "5"} });
return console.log("enge17: 5")
}

//-------






 },

//@@@@@@@@@@@Enge@@@@@@@@@


//@@@@@@@@@@@Beruf@@@@@@@@@

'click #1218': function () {
Session.set("beruf17", document.getElementById('1217').value);
document.getElementById('1217').disabled = true; 
document.getElementById('1218').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'beruf17': Session.get("beruf17")} });
},


//@@@@@@@@@@@Beruf@@@@@@@@@




//@@@@@@@@@@@Schule@@@@@@@@@

'click .item254': function () { 


 //------- 

   if(document.getElementById('1219').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule17': "1"} });
return console.log("schule17: 1")
}

//-------


 //------- 

   if(document.getElementById('1220').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule17': "2"} });
return console.log("schule17: 2")
}

//-------


 //------- 

   if(document.getElementById('1221').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule17': "3"} });
return console.log("schule17: 3")
}

//-------


 //------- 

   if(document.getElementById('1222').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule17': "4"} });
return console.log("schule17: 4")
}

//-------


 //------- 

   if(document.getElementById('1223').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule17': "5"} });
return console.log("schule17: 5")
}

//-------


 //------- 

   if(document.getElementById('1224').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule17': "6"} });
return console.log("schule17: 6")
}

//-------


 //------- 

   if(document.getElementById('1225').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule17': "7"} });
return console.log("schule17: 7")
}

//-------


 //------- 

   if(document.getElementById('1226').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule17': "8"} });
return console.log("schule17: 8")
}

//-------


 //------- 

   if(document.getElementById('1227').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule17': "9"} });
return console.log("schule17: 9")
}

//-------


 //------- 

   if(document.getElementById('1228').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule17': "10"} });
return console.log("schule17: 10")
}

//-------



 },


//@@@@@@@@@@@Schule@@@@@@@@@


//@@@@@@@@@@@Wie weiter@@@@@@@@@

//weiteren erfassen:
'click #1229': function () {
amplify.store('status', "nk17");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
},

//alle erfasst:
'click #1230': function () {
amplify.store('status', "fertignk");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
}

//@@@@@@@@@@@Wie weiter@@@@@@@@@








};




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt17@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt18@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



Template.netzwerkkontakt18.events = {

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@

'click #1232': function () {
Session.set("kuerzel18", document.getElementById('1231').value);
document.getElementById('1231').disabled = true; 
document.getElementById('1232').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'kuerzel18': Session.get("kuerzel18")} });
},

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@


//@@@@@@@@@@@Geschlecht@@@@@@@@@


'click .item257': function () {




//------- 

   if(document.getElementById('1233').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht18': "1"} });
return console.log("geschlecht18: 1")
}

//-------



//------- 

   if(document.getElementById('1234').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht18': "2"} });
return console.log("geschlecht18: 2")
}

//-------


 },


//@@@@@@@@@@@Geschlecht@@@@@@@@@



//@@@@@@@@@@@Alter@@@@@@@@@

'click #1236': function () {
Session.set("alter18", document.getElementById('1235').value);
document.getElementById('1235').disabled = true; 
document.getElementById('1236').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'alter18': Session.get("alter18")} });
},


//@@@@@@@@@@@Alter@@@@@@@@@



//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


'click .item259': function () {




//------- 

   if(document.getElementById('1237').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung18': "1"} });
return console.log("beziehung18: 1")
}

//-------


//------- 

   if(document.getElementById('1238').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung18': "2"} });
return console.log("beziehung18: 2")
}

//-------


//------- 

   if(document.getElementById('1239').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung18': "3"} });
return console.log("beziehung18: 3")
}

//-------


//------- 

   if(document.getElementById('1240').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung18': "4"} });
return console.log("beziehung18: 4")
}

//-------


//------- 

   if(document.getElementById('1241').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung18': "5"} });
return console.log("beziehung18: 5")
}

//-------


//------- 

   if(document.getElementById('1242').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung18': "6"} });
return console.log("beziehung18: 6")
}

//-------


//------- 

   if(document.getElementById('1243').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung18': "7"} });
return console.log("beziehung18: 7")
}

//-------


//------- 

   if(document.getElementById('1244').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung18': "8"} });
return console.log("beziehung18: 8")
}

//-------


//------- 

   if(document.getElementById('1245').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung18': "9"} });
return console.log("beziehung18: 9")
}

//-------


//------- 

   if(document.getElementById('1246').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung18': "10"} });
return console.log("beziehung18: 10")
}

//-------


//------- 

   if(document.getElementById('1247').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung18': "11"} });
return console.log("beziehung18: 11")
}

//-------


//------- 

   if(document.getElementById('1248').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung18': "12"} });
return console.log("beziehung18: 12")
}

//-------



 },


//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


//@@@@@@@@@@@Enge@@@@@@@@@
'click .item260': function () {




//------- 

   if(document.getElementById('1249').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge18': "1"} });
return console.log("enge18: 1")
}

//-------


//------- 

   if(document.getElementById('1250').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge18': "2"} });
return console.log("enge18: 2")
}

//-------


//------- 

   if(document.getElementById('1251').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge18': "3"} });
return console.log("enge18: 3")
}

//-------


//------- 

   if(document.getElementById('1252').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge18': "4"} });
return console.log("enge18: 4")
}

//-------


//------- 

   if(document.getElementById('1253').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge18': "5"} });
return console.log("enge18: 5")
}

//-------






 },

//@@@@@@@@@@@Enge@@@@@@@@@


//@@@@@@@@@@@Beruf@@@@@@@@@

'click #1255': function () {
Session.set("beruf18", document.getElementById('1254').value);
document.getElementById('1254').disabled = true; 
document.getElementById('1255').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'beruf18': Session.get("beruf18")} });
},


//@@@@@@@@@@@Beruf@@@@@@@@@




//@@@@@@@@@@@Schule@@@@@@@@@

'click .item262': function () { 


 //------- 

   if(document.getElementById('1256').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule18': "1"} });
return console.log("schule18: 1")
}

//-------


 //------- 

   if(document.getElementById('1257').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule18': "2"} });
return console.log("schule18: 2")
}

//-------


 //------- 

   if(document.getElementById('1258').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule18': "3"} });
return console.log("schule18: 3")
}

//-------


 //------- 

   if(document.getElementById('1259').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule18': "4"} });
return console.log("schule18: 4")
}

//-------


 //------- 

   if(document.getElementById('1260').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule18': "5"} });
return console.log("schule18: 5")
}

//-------


 //------- 

   if(document.getElementById('1261').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule18': "6"} });
return console.log("schule18: 6")
}

//-------


 //------- 

   if(document.getElementById('1262').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule18': "7"} });
return console.log("schule18: 7")
}

//-------


 //------- 

   if(document.getElementById('1263').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule18': "8"} });
return console.log("schule18: 8")
}

//-------


 //------- 

   if(document.getElementById('1264').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule18': "9"} });
return console.log("schule18: 9")
}

//-------


 //------- 

   if(document.getElementById('1265').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule18': "10"} });
return console.log("schule18: 10")
}

//-------



 },


//@@@@@@@@@@@Schule@@@@@@@@@


//@@@@@@@@@@@Wie weiter@@@@@@@@@

//weiteren erfassen:
'click #1266': function () {
amplify.store('status', "nk18");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
},

//alle erfasst:
'click #1267': function () {
amplify.store('status', "fertignk");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
}

//@@@@@@@@@@@Wie weiter@@@@@@@@@








};




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt18@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt19@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



Template.netzwerkkontakt19.events = {

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@

'click #1269': function () {
Session.set("kuerzel19", document.getElementById('1268').value);
document.getElementById('1268').disabled = true; 
document.getElementById('1269').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'kuerzel19': Session.get("kuerzel19")} });
},

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@


//@@@@@@@@@@@Geschlecht@@@@@@@@@


'click .item265': function () {




//------- 

   if(document.getElementById('1270').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht19': "1"} });
return console.log("geschlecht19: 1")
}

//-------



//------- 

   if(document.getElementById('1271').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht19': "2"} });
return console.log("geschlecht19: 2")
}

//-------


 },


//@@@@@@@@@@@Geschlecht@@@@@@@@@



//@@@@@@@@@@@Alter@@@@@@@@@

'click #1273': function () {
Session.set("alter19", document.getElementById('1272').value);
document.getElementById('1272').disabled = true; 
document.getElementById('1273').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'alter19': Session.get("alter19")} });
},


//@@@@@@@@@@@Alter@@@@@@@@@



//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


'click .item267': function () {




//------- 

   if(document.getElementById('1274').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung19': "1"} });
return console.log("beziehung19: 1")
}

//-------


//------- 

   if(document.getElementById('1275').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung19': "2"} });
return console.log("beziehung19: 2")
}

//-------


//------- 

   if(document.getElementById('1276').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung19': "3"} });
return console.log("beziehung19: 3")
}

//-------


//------- 

   if(document.getElementById('1277').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung19': "4"} });
return console.log("beziehung19: 4")
}

//-------


//------- 

   if(document.getElementById('1278').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung19': "5"} });
return console.log("beziehung19: 5")
}

//-------


//------- 

   if(document.getElementById('1279').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung19': "6"} });
return console.log("beziehung19: 6")
}

//-------


//------- 

   if(document.getElementById('1280').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung19': "7"} });
return console.log("beziehung19: 7")
}

//-------


//------- 

   if(document.getElementById('1281').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung19': "8"} });
return console.log("beziehung19: 8")
}

//-------


//------- 

   if(document.getElementById('1282').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung19': "9"} });
return console.log("beziehung19: 9")
}

//-------


//------- 

   if(document.getElementById('1283').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung19': "10"} });
return console.log("beziehung19: 10")
}

//-------


//------- 

   if(document.getElementById('1284').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung19': "11"} });
return console.log("beziehung19: 11")
}

//-------


//------- 

   if(document.getElementById('1285').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung19': "12"} });
return console.log("beziehung19: 12")
}

//-------



 },


//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


//@@@@@@@@@@@Enge@@@@@@@@@
'click .item268': function () {




//------- 

   if(document.getElementById('1286').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge19': "1"} });
return console.log("enge19: 1")
}

//-------


//------- 

   if(document.getElementById('1287').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge19': "2"} });
return console.log("enge19: 2")
}

//-------


//------- 

   if(document.getElementById('1288').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge19': "3"} });
return console.log("enge19: 3")
}

//-------


//------- 

   if(document.getElementById('1289').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge19': "4"} });
return console.log("enge19: 4")
}

//-------


//------- 

   if(document.getElementById('1290').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge19': "5"} });
return console.log("enge19: 5")
}

//-------






 },

//@@@@@@@@@@@Enge@@@@@@@@@


//@@@@@@@@@@@Beruf@@@@@@@@@

'click #1292': function () {
Session.set("beruf19", document.getElementById('1291').value);
document.getElementById('1291').disabled = true; 
document.getElementById('1292').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'beruf19': Session.get("beruf19")} });
},


//@@@@@@@@@@@Beruf@@@@@@@@@




//@@@@@@@@@@@Schule@@@@@@@@@

'click .item270': function () { 


 //------- 

   if(document.getElementById('1293').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule19': "1"} });
return console.log("schule19: 1")
}

//-------


 //------- 

   if(document.getElementById('1294').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule19': "2"} });
return console.log("schule19: 2")
}

//-------


 //------- 

   if(document.getElementById('1295').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule19': "3"} });
return console.log("schule19: 3")
}

//-------


 //------- 

   if(document.getElementById('1296').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule19': "4"} });
return console.log("schule19: 4")
}

//-------


 //------- 

   if(document.getElementById('1297').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule19': "5"} });
return console.log("schule19: 5")
}

//-------


 //------- 

   if(document.getElementById('1298').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule19': "6"} });
return console.log("schule19: 6")
}

//-------


 //------- 

   if(document.getElementById('1299').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule19': "7"} });
return console.log("schule19: 7")
}

//-------


 //------- 

   if(document.getElementById('1300').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule19': "8"} });
return console.log("schule19: 8")
}

//-------


 //------- 

   if(document.getElementById('1301').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule19': "9"} });
return console.log("schule19: 9")
}

//-------


 //------- 

   if(document.getElementById('1302').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule19': "10"} });
return console.log("schule19: 10")
}

//-------



 },


//@@@@@@@@@@@Schule@@@@@@@@@


//@@@@@@@@@@@Wie weiter@@@@@@@@@

//weiteren erfassen:
'click #1303': function () {
amplify.store('status', "nk19");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
},

//alle erfasst:
'click #1304': function () {
amplify.store('status', "fertignk");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
}

//@@@@@@@@@@@Wie weiter@@@@@@@@@








};




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt19@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt20@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



Template.netzwerkkontakt20.events = {

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@

'click #1306': function () {
Session.set("kuerzel20", document.getElementById('1305').value);
document.getElementById('1305').disabled = true; 
document.getElementById('1306').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'kuerzel20': Session.get("kuerzel20")} });
},

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@


//@@@@@@@@@@@Geschlecht@@@@@@@@@


'click .item273': function () {




//------- 

   if(document.getElementById('1307').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht20': "1"} });
return console.log("geschlecht20: 1")
}

//-------



//------- 

   if(document.getElementById('1308').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht20': "2"} });
return console.log("geschlecht20: 2")
}

//-------


 },


//@@@@@@@@@@@Geschlecht@@@@@@@@@



//@@@@@@@@@@@Alter@@@@@@@@@

'click #1310': function () {
Session.set("alter20", document.getElementById('1309').value);
document.getElementById('1309').disabled = true; 
document.getElementById('1310').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'alter20': Session.get("alter20")} });
},


//@@@@@@@@@@@Alter@@@@@@@@@



//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


'click .item275': function () {




//------- 

   if(document.getElementById('1311').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung20': "1"} });
return console.log("beziehung20: 1")
}

//-------


//------- 

   if(document.getElementById('1312').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung20': "2"} });
return console.log("beziehung20: 2")
}

//-------


//------- 

   if(document.getElementById('1313').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung20': "3"} });
return console.log("beziehung20: 3")
}

//-------


//------- 

   if(document.getElementById('1314').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung20': "4"} });
return console.log("beziehung20: 4")
}

//-------


//------- 

   if(document.getElementById('1315').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung20': "5"} });
return console.log("beziehung20: 5")
}

//-------


//------- 

   if(document.getElementById('1316').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung20': "6"} });
return console.log("beziehung20: 6")
}

//-------


//------- 

   if(document.getElementById('1317').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung20': "7"} });
return console.log("beziehung20: 7")
}

//-------


//------- 

   if(document.getElementById('1318').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung20': "8"} });
return console.log("beziehung20: 8")
}

//-------


//------- 

   if(document.getElementById('1319').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung20': "9"} });
return console.log("beziehung20: 9")
}

//-------


//------- 

   if(document.getElementById('1320').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung20': "10"} });
return console.log("beziehung20: 10")
}

//-------


//------- 

   if(document.getElementById('1321').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung20': "11"} });
return console.log("beziehung20: 11")
}

//-------


//------- 

   if(document.getElementById('1322').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung20': "12"} });
return console.log("beziehung20: 12")
}

//-------



 },


//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


//@@@@@@@@@@@Enge@@@@@@@@@
'click .item276': function () {




//------- 

   if(document.getElementById('1323').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge20': "1"} });
return console.log("enge20: 1")
}

//-------


//------- 

   if(document.getElementById('1324').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge20': "2"} });
return console.log("enge20: 2")
}

//-------


//------- 

   if(document.getElementById('1325').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge20': "3"} });
return console.log("enge20: 3")
}

//-------


//------- 

   if(document.getElementById('1326').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge20': "4"} });
return console.log("enge20: 4")
}

//-------


//------- 

   if(document.getElementById('1327').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge20': "5"} });
return console.log("enge20: 5")
}

//-------






 },

//@@@@@@@@@@@Enge@@@@@@@@@


//@@@@@@@@@@@Beruf@@@@@@@@@

'click #1329': function () {
Session.set("beruf20", document.getElementById('1328').value);
document.getElementById('1328').disabled = true; 
document.getElementById('1329').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'beruf20': Session.get("beruf20")} });
},


//@@@@@@@@@@@Beruf@@@@@@@@@




//@@@@@@@@@@@Schule@@@@@@@@@

'click .item278': function () { 


 //------- 

   if(document.getElementById('1330').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule20': "1"} });
return console.log("schule20: 1")
}

//-------


 //------- 

   if(document.getElementById('1331').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule20': "2"} });
return console.log("schule20: 2")
}

//-------


 //------- 

   if(document.getElementById('1332').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule20': "3"} });
return console.log("schule20: 3")
}

//-------


 //------- 

   if(document.getElementById('1333').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule20': "4"} });
return console.log("schule20: 4")
}

//-------


 //------- 

   if(document.getElementById('1334').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule20': "5"} });
return console.log("schule20: 5")
}

//-------


 //------- 

   if(document.getElementById('1335').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule20': "6"} });
return console.log("schule20: 6")
}

//-------


 //------- 

   if(document.getElementById('1336').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule20': "7"} });
return console.log("schule20: 7")
}

//-------


 //------- 

   if(document.getElementById('1337').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule20': "8"} });
return console.log("schule20: 8")
}

//-------


 //------- 

   if(document.getElementById('1338').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule20': "9"} });
return console.log("schule20: 9")
}

//-------


 //------- 

   if(document.getElementById('1339').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule20': "10"} });
return console.log("schule20: 10")
}

//-------



 },


//@@@@@@@@@@@Schule@@@@@@@@@


//@@@@@@@@@@@Wie weiter@@@@@@@@@

//weiteren erfassen:
'click #1340': function () {
amplify.store('status', "nk20");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
},

//alle erfasst:
'click #1341': function () {
amplify.store('status', "fertignk");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
}

//@@@@@@@@@@@Wie weiter@@@@@@@@@








};




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt20@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt21@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



Template.netzwerkkontakt21.events = {

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@

'click #1343': function () {
Session.set("kuerzel21", document.getElementById('1342').value);
document.getElementById('1342').disabled = true; 
document.getElementById('1343').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'kuerzel21': Session.get("kuerzel21")} });
},

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@


//@@@@@@@@@@@Geschlecht@@@@@@@@@


'click .item281': function () {




//------- 

   if(document.getElementById('1344').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht21': "1"} });
return console.log("geschlecht21: 1")
}

//-------



//------- 

   if(document.getElementById('1345').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht21': "2"} });
return console.log("geschlecht21: 2")
}

//-------


 },


//@@@@@@@@@@@Geschlecht@@@@@@@@@



//@@@@@@@@@@@Alter@@@@@@@@@

'click #1347': function () {
Session.set("alter21", document.getElementById('1346').value);
document.getElementById('1346').disabled = true; 
document.getElementById('1347').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'alter21': Session.get("alter21")} });
},


//@@@@@@@@@@@Alter@@@@@@@@@



//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


'click .item283': function () {




//------- 

   if(document.getElementById('1348').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung21': "1"} });
return console.log("beziehung21: 1")
}

//-------


//------- 

   if(document.getElementById('1349').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung21': "2"} });
return console.log("beziehung21: 2")
}

//-------


//------- 

   if(document.getElementById('1350').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung21': "3"} });
return console.log("beziehung21: 3")
}

//-------


//------- 

   if(document.getElementById('1351').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung21': "4"} });
return console.log("beziehung21: 4")
}

//-------


//------- 

   if(document.getElementById('1352').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung21': "5"} });
return console.log("beziehung21: 5")
}

//-------


//------- 

   if(document.getElementById('1353').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung21': "6"} });
return console.log("beziehung21: 6")
}

//-------


//------- 

   if(document.getElementById('1354').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung21': "7"} });
return console.log("beziehung21: 7")
}

//-------


//------- 

   if(document.getElementById('1355').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung21': "8"} });
return console.log("beziehung21: 8")
}

//-------


//------- 

   if(document.getElementById('1356').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung21': "9"} });
return console.log("beziehung21: 9")
}

//-------


//------- 

   if(document.getElementById('1357').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung21': "10"} });
return console.log("beziehung21: 10")
}

//-------


//------- 

   if(document.getElementById('1358').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung21': "11"} });
return console.log("beziehung21: 11")
}

//-------


//------- 

   if(document.getElementById('1359').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung21': "12"} });
return console.log("beziehung21: 12")
}

//-------



 },


//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


//@@@@@@@@@@@Enge@@@@@@@@@
'click .item284': function () {




//------- 

   if(document.getElementById('1360').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge21': "1"} });
return console.log("enge21: 1")
}

//-------


//------- 

   if(document.getElementById('1361').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge21': "2"} });
return console.log("enge21: 2")
}

//-------


//------- 

   if(document.getElementById('1362').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge21': "3"} });
return console.log("enge21: 3")
}

//-------


//------- 

   if(document.getElementById('1363').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge21': "4"} });
return console.log("enge21: 4")
}

//-------


//------- 

   if(document.getElementById('1364').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge21': "5"} });
return console.log("enge21: 5")
}

//-------






 },

//@@@@@@@@@@@Enge@@@@@@@@@


//@@@@@@@@@@@Beruf@@@@@@@@@

'click #1366': function () {
Session.set("beruf21", document.getElementById('1365').value);
document.getElementById('1365').disabled = true; 
document.getElementById('1366').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'beruf21': Session.get("beruf21")} });
},


//@@@@@@@@@@@Beruf@@@@@@@@@




//@@@@@@@@@@@Schule@@@@@@@@@

'click .item286': function () { 


 //------- 

   if(document.getElementById('1367').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule21': "1"} });
return console.log("schule21: 1")
}

//-------


 //------- 

   if(document.getElementById('1368').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule21': "2"} });
return console.log("schule21: 2")
}

//-------


 //------- 

   if(document.getElementById('1369').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule21': "3"} });
return console.log("schule21: 3")
}

//-------


 //------- 

   if(document.getElementById('1370').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule21': "4"} });
return console.log("schule21: 4")
}

//-------


 //------- 

   if(document.getElementById('1371').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule21': "5"} });
return console.log("schule21: 5")
}

//-------


 //------- 

   if(document.getElementById('1372').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule21': "6"} });
return console.log("schule21: 6")
}

//-------


 //------- 

   if(document.getElementById('1373').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule21': "7"} });
return console.log("schule21: 7")
}

//-------


 //------- 

   if(document.getElementById('1374').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule21': "8"} });
return console.log("schule21: 8")
}

//-------


 //------- 

   if(document.getElementById('1375').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule21': "9"} });
return console.log("schule21: 9")
}

//-------


 //------- 

   if(document.getElementById('1376').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule21': "10"} });
return console.log("schule21: 10")
}

//-------



 },


//@@@@@@@@@@@Schule@@@@@@@@@


//@@@@@@@@@@@Wie weiter@@@@@@@@@

//weiteren erfassen:
'click #1377': function () {
amplify.store('status', "nk21");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
},

//alle erfasst:
'click #1378': function () {
amplify.store('status', "fertignk");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
}

//@@@@@@@@@@@Wie weiter@@@@@@@@@








};




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt21@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt22@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



Template.netzwerkkontakt22.events = {

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@

'click #1380': function () {
Session.set("kuerzel22", document.getElementById('1379').value);
document.getElementById('1379').disabled = true; 
document.getElementById('1380').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'kuerzel22': Session.get("kuerzel22")} });
},

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@


//@@@@@@@@@@@Geschlecht@@@@@@@@@


'click .item289': function () {




//------- 

   if(document.getElementById('1381').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht22': "1"} });
return console.log("geschlecht22: 1")
}

//-------



//------- 

   if(document.getElementById('1382').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht22': "2"} });
return console.log("geschlecht22: 2")
}

//-------


 },


//@@@@@@@@@@@Geschlecht@@@@@@@@@



//@@@@@@@@@@@Alter@@@@@@@@@

'click #1384': function () {
Session.set("alter22", document.getElementById('1383').value);
document.getElementById('1383').disabled = true; 
document.getElementById('1384').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'alter22': Session.get("alter22")} });
},


//@@@@@@@@@@@Alter@@@@@@@@@



//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


'click .item291': function () {




//------- 

   if(document.getElementById('1385').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung22': "1"} });
return console.log("beziehung22: 1")
}

//-------


//------- 

   if(document.getElementById('1386').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung22': "2"} });
return console.log("beziehung22: 2")
}

//-------


//------- 

   if(document.getElementById('1387').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung22': "3"} });
return console.log("beziehung22: 3")
}

//-------


//------- 

   if(document.getElementById('1388').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung22': "4"} });
return console.log("beziehung22: 4")
}

//-------


//------- 

   if(document.getElementById('1389').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung22': "5"} });
return console.log("beziehung22: 5")
}

//-------


//------- 

   if(document.getElementById('1390').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung22': "6"} });
return console.log("beziehung22: 6")
}

//-------


//------- 

   if(document.getElementById('1391').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung22': "7"} });
return console.log("beziehung22: 7")
}

//-------


//------- 

   if(document.getElementById('1392').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung22': "8"} });
return console.log("beziehung22: 8")
}

//-------


//------- 

   if(document.getElementById('1393').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung22': "9"} });
return console.log("beziehung22: 9")
}

//-------


//------- 

   if(document.getElementById('1394').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung22': "10"} });
return console.log("beziehung22: 10")
}

//-------


//------- 

   if(document.getElementById('1395').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung22': "11"} });
return console.log("beziehung22: 11")
}

//-------


//------- 

   if(document.getElementById('1396').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung22': "12"} });
return console.log("beziehung22: 12")
}

//-------



 },


//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


//@@@@@@@@@@@Enge@@@@@@@@@
'click .item292': function () {




//------- 

   if(document.getElementById('1397').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge22': "1"} });
return console.log("enge22: 1")
}

//-------


//------- 

   if(document.getElementById('1398').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge22': "2"} });
return console.log("enge22: 2")
}

//-------


//------- 

   if(document.getElementById('1399').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge22': "3"} });
return console.log("enge22: 3")
}

//-------


//------- 

   if(document.getElementById('1400').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge22': "4"} });
return console.log("enge22: 4")
}

//-------


//------- 

   if(document.getElementById('1401').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge22': "5"} });
return console.log("enge22: 5")
}

//-------






 },

//@@@@@@@@@@@Enge@@@@@@@@@


//@@@@@@@@@@@Beruf@@@@@@@@@

'click #1403': function () {
Session.set("beruf22", document.getElementById('1402').value);
document.getElementById('1402').disabled = true; 
document.getElementById('1403').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'beruf22': Session.get("beruf22")} });
},


//@@@@@@@@@@@Beruf@@@@@@@@@




//@@@@@@@@@@@Schule@@@@@@@@@

'click .item294': function () { 


 //------- 

   if(document.getElementById('1404').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule22': "1"} });
return console.log("schule22: 1")
}

//-------


 //------- 

   if(document.getElementById('1405').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule22': "2"} });
return console.log("schule22: 2")
}

//-------


 //------- 

   if(document.getElementById('1406').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule22': "3"} });
return console.log("schule22: 3")
}

//-------


 //------- 

   if(document.getElementById('1407').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule22': "4"} });
return console.log("schule22: 4")
}

//-------


 //------- 

   if(document.getElementById('1408').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule22': "5"} });
return console.log("schule22: 5")
}

//-------


 //------- 

   if(document.getElementById('1409').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule22': "6"} });
return console.log("schule22: 6")
}

//-------


 //------- 

   if(document.getElementById('1410').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule22': "7"} });
return console.log("schule22: 7")
}

//-------


 //------- 

   if(document.getElementById('1411').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule22': "8"} });
return console.log("schule22: 8")
}

//-------


 //------- 

   if(document.getElementById('1412').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule22': "9"} });
return console.log("schule22: 9")
}

//-------


 //------- 

   if(document.getElementById('1413').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule22': "10"} });
return console.log("schule22: 10")
}

//-------



 },


//@@@@@@@@@@@Schule@@@@@@@@@


//@@@@@@@@@@@Wie weiter@@@@@@@@@

//weiteren erfassen:
'click #1414': function () {
amplify.store('status', "nk22");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
},

//alle erfasst:
'click #1415': function () {
amplify.store('status', "fertignk");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
}

//@@@@@@@@@@@Wie weiter@@@@@@@@@








};




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt22@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt23@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



Template.netzwerkkontakt23.events = {

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@

'click #1417': function () {
Session.set("kuerzel23", document.getElementById('1416').value);
document.getElementById('1416').disabled = true; 
document.getElementById('1417').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'kuerzel23': Session.get("kuerzel23")} });
},

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@


//@@@@@@@@@@@Geschlecht@@@@@@@@@


'click .item297': function () {




//------- 

   if(document.getElementById('1418').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht23': "1"} });
return console.log("geschlecht23: 1")
}

//-------



//------- 

   if(document.getElementById('1419').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht23': "2"} });
return console.log("geschlecht23: 2")
}

//-------


 },


//@@@@@@@@@@@Geschlecht@@@@@@@@@



//@@@@@@@@@@@Alter@@@@@@@@@

'click #1421': function () {
Session.set("alter23", document.getElementById('1420').value);
document.getElementById('1420').disabled = true; 
document.getElementById('1421').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'alter23': Session.get("alter23")} });
},


//@@@@@@@@@@@Alter@@@@@@@@@



//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


'click .item299': function () {




//------- 

   if(document.getElementById('1422').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung23': "1"} });
return console.log("beziehung23: 1")
}

//-------


//------- 

   if(document.getElementById('1423').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung23': "2"} });
return console.log("beziehung23: 2")
}

//-------


//------- 

   if(document.getElementById('1424').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung23': "3"} });
return console.log("beziehung23: 3")
}

//-------


//------- 

   if(document.getElementById('1425').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung23': "4"} });
return console.log("beziehung23: 4")
}

//-------


//------- 

   if(document.getElementById('1426').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung23': "5"} });
return console.log("beziehung23: 5")
}

//-------


//------- 

   if(document.getElementById('1427').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung23': "6"} });
return console.log("beziehung23: 6")
}

//-------


//------- 

   if(document.getElementById('1428').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung23': "7"} });
return console.log("beziehung23: 7")
}

//-------


//------- 

   if(document.getElementById('1429').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung23': "8"} });
return console.log("beziehung23: 8")
}

//-------


//------- 

   if(document.getElementById('1430').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung23': "9"} });
return console.log("beziehung23: 9")
}

//-------


//------- 

   if(document.getElementById('1431').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung23': "10"} });
return console.log("beziehung23: 10")
}

//-------


//------- 

   if(document.getElementById('1432').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung23': "11"} });
return console.log("beziehung23: 11")
}

//-------


//------- 

   if(document.getElementById('1433').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung23': "12"} });
return console.log("beziehung23: 12")
}

//-------



 },


//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


//@@@@@@@@@@@Enge@@@@@@@@@
'click .item300': function () {




//------- 

   if(document.getElementById('1434').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge23': "1"} });
return console.log("enge23: 1")
}

//-------


//------- 

   if(document.getElementById('1435').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge23': "2"} });
return console.log("enge23: 2")
}

//-------


//------- 

   if(document.getElementById('1436').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge23': "3"} });
return console.log("enge23: 3")
}

//-------


//------- 

   if(document.getElementById('1437').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge23': "4"} });
return console.log("enge23: 4")
}

//-------


//------- 

   if(document.getElementById('1438').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge23': "5"} });
return console.log("enge23: 5")
}

//-------






 },

//@@@@@@@@@@@Enge@@@@@@@@@


//@@@@@@@@@@@Beruf@@@@@@@@@

'click #1440': function () {
Session.set("beruf23", document.getElementById('1439').value);
document.getElementById('1439').disabled = true; 
document.getElementById('1440').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'beruf23': Session.get("beruf23")} });
},


//@@@@@@@@@@@Beruf@@@@@@@@@




//@@@@@@@@@@@Schule@@@@@@@@@

'click .item302': function () { 


 //------- 

   if(document.getElementById('1441').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule23': "1"} });
return console.log("schule23: 1")
}

//-------


 //------- 

   if(document.getElementById('1442').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule23': "2"} });
return console.log("schule23: 2")
}

//-------


 //------- 

   if(document.getElementById('1443').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule23': "3"} });
return console.log("schule23: 3")
}

//-------


 //------- 

   if(document.getElementById('1444').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule23': "4"} });
return console.log("schule23: 4")
}

//-------


 //------- 

   if(document.getElementById('1445').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule23': "5"} });
return console.log("schule23: 5")
}

//-------


 //------- 

   if(document.getElementById('1446').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule23': "6"} });
return console.log("schule23: 6")
}

//-------


 //------- 

   if(document.getElementById('1447').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule23': "7"} });
return console.log("schule23: 7")
}

//-------


 //------- 

   if(document.getElementById('1448').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule23': "8"} });
return console.log("schule23: 8")
}

//-------


 //------- 

   if(document.getElementById('1449').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule23': "9"} });
return console.log("schule23: 9")
}

//-------


 //------- 

   if(document.getElementById('1450').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule23': "10"} });
return console.log("schule23: 10")
}

//-------



 },


//@@@@@@@@@@@Schule@@@@@@@@@


//@@@@@@@@@@@Wie weiter@@@@@@@@@

//weiteren erfassen:
'click #1451': function () {
amplify.store('status', "nk23");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
},

//alle erfasst:
'click #1452': function () {
amplify.store('status', "fertignk");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
}

//@@@@@@@@@@@Wie weiter@@@@@@@@@








};




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt23@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt24@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



Template.netzwerkkontakt24.events = {

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@

'click #1454': function () {
Session.set("kuerzel24", document.getElementById('1453').value);
document.getElementById('1453').disabled = true; 
document.getElementById('1454').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'kuerzel24': Session.get("kuerzel24")} });
},

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@


//@@@@@@@@@@@Geschlecht@@@@@@@@@


'click .item305': function () {




//------- 

   if(document.getElementById('1455').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht24': "1"} });
return console.log("geschlecht24: 1")
}

//-------



//------- 

   if(document.getElementById('1456').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht24': "2"} });
return console.log("geschlecht24: 2")
}

//-------


 },


//@@@@@@@@@@@Geschlecht@@@@@@@@@



//@@@@@@@@@@@Alter@@@@@@@@@

'click #1458': function () {
Session.set("alter24", document.getElementById('1457').value);
document.getElementById('1457').disabled = true; 
document.getElementById('1458').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'alter24': Session.get("alter24")} });
},


//@@@@@@@@@@@Alter@@@@@@@@@



//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


'click .item307': function () {




//------- 

   if(document.getElementById('1459').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung24': "1"} });
return console.log("beziehung24: 1")
}

//-------


//------- 

   if(document.getElementById('1460').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung24': "2"} });
return console.log("beziehung24: 2")
}

//-------


//------- 

   if(document.getElementById('1461').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung24': "3"} });
return console.log("beziehung24: 3")
}

//-------


//------- 

   if(document.getElementById('1462').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung24': "4"} });
return console.log("beziehung24: 4")
}

//-------


//------- 

   if(document.getElementById('1463').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung24': "5"} });
return console.log("beziehung24: 5")
}

//-------


//------- 

   if(document.getElementById('1464').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung24': "6"} });
return console.log("beziehung24: 6")
}

//-------


//------- 

   if(document.getElementById('1465').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung24': "7"} });
return console.log("beziehung24: 7")
}

//-------


//------- 

   if(document.getElementById('1466').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung24': "8"} });
return console.log("beziehung24: 8")
}

//-------


//------- 

   if(document.getElementById('1467').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung24': "9"} });
return console.log("beziehung24: 9")
}

//-------


//------- 

   if(document.getElementById('1468').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung24': "10"} });
return console.log("beziehung24: 10")
}

//-------


//------- 

   if(document.getElementById('1469').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung24': "11"} });
return console.log("beziehung24: 11")
}

//-------


//------- 

   if(document.getElementById('1470').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung24': "12"} });
return console.log("beziehung24: 12")
}

//-------



 },


//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


//@@@@@@@@@@@Enge@@@@@@@@@
'click .item308': function () {




//------- 

   if(document.getElementById('1471').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge24': "1"} });
return console.log("enge24: 1")
}

//-------


//------- 

   if(document.getElementById('1472').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge24': "2"} });
return console.log("enge24: 2")
}

//-------


//------- 

   if(document.getElementById('1473').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge24': "3"} });
return console.log("enge24: 3")
}

//-------


//------- 

   if(document.getElementById('1474').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge24': "4"} });
return console.log("enge24: 4")
}

//-------


//------- 

   if(document.getElementById('1475').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge24': "5"} });
return console.log("enge24: 5")
}

//-------






 },

//@@@@@@@@@@@Enge@@@@@@@@@


//@@@@@@@@@@@Beruf@@@@@@@@@

'click #1477': function () {
Session.set("beruf24", document.getElementById('1476').value);
document.getElementById('1476').disabled = true; 
document.getElementById('1477').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'beruf24': Session.get("beruf24")} });
},


//@@@@@@@@@@@Beruf@@@@@@@@@




//@@@@@@@@@@@Schule@@@@@@@@@

'click .item310': function () { 


 //------- 

   if(document.getElementById('1478').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule24': "1"} });
return console.log("schule24: 1")
}

//-------


 //------- 

   if(document.getElementById('1479').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule24': "2"} });
return console.log("schule24: 2")
}

//-------


 //------- 

   if(document.getElementById('1480').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule24': "3"} });
return console.log("schule24: 3")
}

//-------


 //------- 

   if(document.getElementById('1481').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule24': "4"} });
return console.log("schule24: 4")
}

//-------


 //------- 

   if(document.getElementById('1482').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule24': "5"} });
return console.log("schule24: 5")
}

//-------


 //------- 

   if(document.getElementById('1483').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule24': "6"} });
return console.log("schule24: 6")
}

//-------


 //------- 

   if(document.getElementById('1484').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule24': "7"} });
return console.log("schule24: 7")
}

//-------


 //------- 

   if(document.getElementById('1485').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule24': "8"} });
return console.log("schule24: 8")
}

//-------


 //------- 

   if(document.getElementById('1486').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule24': "9"} });
return console.log("schule24: 9")
}

//-------


 //------- 

   if(document.getElementById('1487').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule24': "10"} });
return console.log("schule24: 10")
}

//-------



 },


//@@@@@@@@@@@Schule@@@@@@@@@


//@@@@@@@@@@@Wie weiter@@@@@@@@@

//weiteren erfassen:
'click #1488': function () {
amplify.store('status', "nk24");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
},

//alle erfasst:
'click #1489': function () {
amplify.store('status', "fertignk");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
}

//@@@@@@@@@@@Wie weiter@@@@@@@@@








};




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt24@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt25@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



Template.netzwerkkontakt25.events = {

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@

'click #1491': function () {
Session.set("kuerzel25", document.getElementById('1490').value);
document.getElementById('1490').disabled = true; 
document.getElementById('1491').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'kuerzel25': Session.get("kuerzel25")} });
},

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@


//@@@@@@@@@@@Geschlecht@@@@@@@@@


'click .item313': function () {




//------- 

   if(document.getElementById('1492').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht25': "1"} });
return console.log("geschlecht25: 1")
}

//-------



//------- 

   if(document.getElementById('1493').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht25': "2"} });
return console.log("geschlecht25: 2")
}

//-------


 },


//@@@@@@@@@@@Geschlecht@@@@@@@@@



//@@@@@@@@@@@Alter@@@@@@@@@

'click #1495': function () {
Session.set("alter25", document.getElementById('1494').value);
document.getElementById('1494').disabled = true; 
document.getElementById('1495').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'alter25': Session.get("alter25")} });
},


//@@@@@@@@@@@Alter@@@@@@@@@



//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


'click .item315': function () {




//------- 

   if(document.getElementById('1496').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung25': "1"} });
return console.log("beziehung25: 1")
}

//-------


//------- 

   if(document.getElementById('1497').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung25': "2"} });
return console.log("beziehung25: 2")
}

//-------


//------- 

   if(document.getElementById('1498').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung25': "3"} });
return console.log("beziehung25: 3")
}

//-------


//------- 

   if(document.getElementById('1499').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung25': "4"} });
return console.log("beziehung25: 4")
}

//-------


//------- 

   if(document.getElementById('1500').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung25': "5"} });
return console.log("beziehung25: 5")
}

//-------


//------- 

   if(document.getElementById('1501').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung25': "6"} });
return console.log("beziehung25: 6")
}

//-------


//------- 

   if(document.getElementById('1502').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung25': "7"} });
return console.log("beziehung25: 7")
}

//-------


//------- 

   if(document.getElementById('1503').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung25': "8"} });
return console.log("beziehung25: 8")
}

//-------


//------- 

   if(document.getElementById('1504').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung25': "9"} });
return console.log("beziehung25: 9")
}

//-------


//------- 

   if(document.getElementById('1505').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung25': "10"} });
return console.log("beziehung25: 10")
}

//-------


//------- 

   if(document.getElementById('1506').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung25': "11"} });
return console.log("beziehung25: 11")
}

//-------


//------- 

   if(document.getElementById('1507').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung25': "12"} });
return console.log("beziehung25: 12")
}

//-------



 },


//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


//@@@@@@@@@@@Enge@@@@@@@@@
'click .item316': function () {




//------- 

   if(document.getElementById('1508').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge25': "1"} });
return console.log("enge25: 1")
}

//-------


//------- 

   if(document.getElementById('1509').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge25': "2"} });
return console.log("enge25: 2")
}

//-------


//------- 

   if(document.getElementById('1510').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge25': "3"} });
return console.log("enge25: 3")
}

//-------


//------- 

   if(document.getElementById('1511').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge25': "4"} });
return console.log("enge25: 4")
}

//-------


//------- 

   if(document.getElementById('1512').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge25': "5"} });
return console.log("enge25: 5")
}

//-------






 },

//@@@@@@@@@@@Enge@@@@@@@@@


//@@@@@@@@@@@Beruf@@@@@@@@@

'click #1514': function () {
Session.set("beruf25", document.getElementById('1513').value);
document.getElementById('1513').disabled = true; 
document.getElementById('1514').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'beruf25': Session.get("beruf25")} });
},


//@@@@@@@@@@@Beruf@@@@@@@@@




//@@@@@@@@@@@Schule@@@@@@@@@

'click .item318': function () { 


 //------- 

   if(document.getElementById('1515').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule25': "1"} });
return console.log("schule25: 1")
}

//-------


 //------- 

   if(document.getElementById('1516').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule25': "2"} });
return console.log("schule25: 2")
}

//-------


 //------- 

   if(document.getElementById('1517').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule25': "3"} });
return console.log("schule25: 3")
}

//-------


 //------- 

   if(document.getElementById('1518').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule25': "4"} });
return console.log("schule25: 4")
}

//-------


 //------- 

   if(document.getElementById('1519').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule25': "5"} });
return console.log("schule25: 5")
}

//-------


 //------- 

   if(document.getElementById('1520').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule25': "6"} });
return console.log("schule25: 6")
}

//-------


 //------- 

   if(document.getElementById('1521').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule25': "7"} });
return console.log("schule25: 7")
}

//-------


 //------- 

   if(document.getElementById('1522').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule25': "8"} });
return console.log("schule25: 8")
}

//-------


 //------- 

   if(document.getElementById('1523').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule25': "9"} });
return console.log("schule25: 9")
}

//-------


 //------- 

   if(document.getElementById('1524').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule25': "10"} });
return console.log("schule25: 10")
}

//-------



 },


//@@@@@@@@@@@Schule@@@@@@@@@


//@@@@@@@@@@@Wie weiter@@@@@@@@@

//weiteren erfassen:
'click #1525': function () {
amplify.store('status', "nk25");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
},

//alle erfasst:
'click #1526': function () {
amplify.store('status', "fertignk");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
}

//@@@@@@@@@@@Wie weiter@@@@@@@@@








};




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt25@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt26@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



Template.netzwerkkontakt26.events = {

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@

'click #1528': function () {
Session.set("kuerzel26", document.getElementById('1527').value);
document.getElementById('1527').disabled = true; 
document.getElementById('1528').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'kuerzel26': Session.get("kuerzel26")} });
},

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@


//@@@@@@@@@@@Geschlecht@@@@@@@@@


'click .item321': function () {




//------- 

   if(document.getElementById('1529').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht26': "1"} });
return console.log("geschlecht26: 1")
}

//-------



//------- 

   if(document.getElementById('1530').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht26': "2"} });
return console.log("geschlecht26: 2")
}

//-------


 },


//@@@@@@@@@@@Geschlecht@@@@@@@@@



//@@@@@@@@@@@Alter@@@@@@@@@

'click #1532': function () {
Session.set("alter26", document.getElementById('1531').value);
document.getElementById('1531').disabled = true; 
document.getElementById('1532').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'alter26': Session.get("alter26")} });
},


//@@@@@@@@@@@Alter@@@@@@@@@



//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


'click .item323': function () {




//------- 

   if(document.getElementById('1533').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung26': "1"} });
return console.log("beziehung26: 1")
}

//-------


//------- 

   if(document.getElementById('1534').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung26': "2"} });
return console.log("beziehung26: 2")
}

//-------


//------- 

   if(document.getElementById('1535').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung26': "3"} });
return console.log("beziehung26: 3")
}

//-------


//------- 

   if(document.getElementById('1536').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung26': "4"} });
return console.log("beziehung26: 4")
}

//-------


//------- 

   if(document.getElementById('1537').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung26': "5"} });
return console.log("beziehung26: 5")
}

//-------


//------- 

   if(document.getElementById('1538').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung26': "6"} });
return console.log("beziehung26: 6")
}

//-------


//------- 

   if(document.getElementById('1539').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung26': "7"} });
return console.log("beziehung26: 7")
}

//-------


//------- 

   if(document.getElementById('1540').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung26': "8"} });
return console.log("beziehung26: 8")
}

//-------


//------- 

   if(document.getElementById('1541').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung26': "9"} });
return console.log("beziehung26: 9")
}

//-------


//------- 

   if(document.getElementById('1542').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung26': "10"} });
return console.log("beziehung26: 10")
}

//-------


//------- 

   if(document.getElementById('1543').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung26': "11"} });
return console.log("beziehung26: 11")
}

//-------


//------- 

   if(document.getElementById('1544').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung26': "12"} });
return console.log("beziehung26: 12")
}

//-------



 },


//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


//@@@@@@@@@@@Enge@@@@@@@@@
'click .item324': function () {




//------- 

   if(document.getElementById('1545').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge26': "1"} });
return console.log("enge26: 1")
}

//-------


//------- 

   if(document.getElementById('1546').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge26': "2"} });
return console.log("enge26: 2")
}

//-------


//------- 

   if(document.getElementById('1547').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge26': "3"} });
return console.log("enge26: 3")
}

//-------


//------- 

   if(document.getElementById('1548').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge26': "4"} });
return console.log("enge26: 4")
}

//-------


//------- 

   if(document.getElementById('1549').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge26': "5"} });
return console.log("enge26: 5")
}

//-------






 },

//@@@@@@@@@@@Enge@@@@@@@@@


//@@@@@@@@@@@Beruf@@@@@@@@@

'click #1551': function () {
Session.set("beruf26", document.getElementById('1550').value);
document.getElementById('1550').disabled = true; 
document.getElementById('1551').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'beruf26': Session.get("beruf26")} });
},


//@@@@@@@@@@@Beruf@@@@@@@@@




//@@@@@@@@@@@Schule@@@@@@@@@

'click .item326': function () { 


 //------- 

   if(document.getElementById('1552').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule26': "1"} });
return console.log("schule26: 1")
}

//-------


 //------- 

   if(document.getElementById('1553').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule26': "2"} });
return console.log("schule26: 2")
}

//-------


 //------- 

   if(document.getElementById('1554').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule26': "3"} });
return console.log("schule26: 3")
}

//-------


 //------- 

   if(document.getElementById('1555').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule26': "4"} });
return console.log("schule26: 4")
}

//-------


 //------- 

   if(document.getElementById('1556').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule26': "5"} });
return console.log("schule26: 5")
}

//-------


 //------- 

   if(document.getElementById('1557').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule26': "6"} });
return console.log("schule26: 6")
}

//-------


 //------- 

   if(document.getElementById('1558').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule26': "7"} });
return console.log("schule26: 7")
}

//-------


 //------- 

   if(document.getElementById('1559').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule26': "8"} });
return console.log("schule26: 8")
}

//-------


 //------- 

   if(document.getElementById('1560').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule26': "9"} });
return console.log("schule26: 9")
}

//-------


 //------- 

   if(document.getElementById('1561').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule26': "10"} });
return console.log("schule26: 10")
}

//-------



 },


//@@@@@@@@@@@Schule@@@@@@@@@


//@@@@@@@@@@@Wie weiter@@@@@@@@@

//weiteren erfassen:
'click #1562': function () {
amplify.store('status', "nk26");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
},

//alle erfasst:
'click #1563': function () {
amplify.store('status', "fertignk");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
}

//@@@@@@@@@@@Wie weiter@@@@@@@@@








};




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt26@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt27@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



Template.netzwerkkontakt27.events = {

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@

'click #1565': function () {
Session.set("kuerzel27", document.getElementById('1564').value);
document.getElementById('1564').disabled = true; 
document.getElementById('1565').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'kuerzel27': Session.get("kuerzel27")} });
},

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@


//@@@@@@@@@@@Geschlecht@@@@@@@@@


'click .item329': function () {




//------- 

   if(document.getElementById('1566').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht27': "1"} });
return console.log("geschlecht27: 1")
}

//-------



//------- 

   if(document.getElementById('1567').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht27': "2"} });
return console.log("geschlecht27: 2")
}

//-------


 },


//@@@@@@@@@@@Geschlecht@@@@@@@@@



//@@@@@@@@@@@Alter@@@@@@@@@

'click #1569': function () {
Session.set("alter27", document.getElementById('1568').value);
document.getElementById('1568').disabled = true; 
document.getElementById('1569').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'alter27': Session.get("alter27")} });
},


//@@@@@@@@@@@Alter@@@@@@@@@



//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


'click .item331': function () {




//------- 

   if(document.getElementById('1570').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung27': "1"} });
return console.log("beziehung27: 1")
}

//-------


//------- 

   if(document.getElementById('1571').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung27': "2"} });
return console.log("beziehung27: 2")
}

//-------


//------- 

   if(document.getElementById('1572').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung27': "3"} });
return console.log("beziehung27: 3")
}

//-------


//------- 

   if(document.getElementById('1573').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung27': "4"} });
return console.log("beziehung27: 4")
}

//-------


//------- 

   if(document.getElementById('1574').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung27': "5"} });
return console.log("beziehung27: 5")
}

//-------


//------- 

   if(document.getElementById('1575').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung27': "6"} });
return console.log("beziehung27: 6")
}

//-------


//------- 

   if(document.getElementById('1576').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung27': "7"} });
return console.log("beziehung27: 7")
}

//-------


//------- 

   if(document.getElementById('1577').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung27': "8"} });
return console.log("beziehung27: 8")
}

//-------


//------- 

   if(document.getElementById('1578').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung27': "9"} });
return console.log("beziehung27: 9")
}

//-------


//------- 

   if(document.getElementById('1579').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung27': "10"} });
return console.log("beziehung27: 10")
}

//-------


//------- 

   if(document.getElementById('1580').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung27': "11"} });
return console.log("beziehung27: 11")
}

//-------


//------- 

   if(document.getElementById('1581').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung27': "12"} });
return console.log("beziehung27: 12")
}

//-------



 },


//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


//@@@@@@@@@@@Enge@@@@@@@@@
'click .item332': function () {




//------- 

   if(document.getElementById('1582').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge27': "1"} });
return console.log("enge27: 1")
}

//-------


//------- 

   if(document.getElementById('1583').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge27': "2"} });
return console.log("enge27: 2")
}

//-------


//------- 

   if(document.getElementById('1584').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge27': "3"} });
return console.log("enge27: 3")
}

//-------


//------- 

   if(document.getElementById('1585').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge27': "4"} });
return console.log("enge27: 4")
}

//-------


//------- 

   if(document.getElementById('1586').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge27': "5"} });
return console.log("enge27: 5")
}

//-------






 },

//@@@@@@@@@@@Enge@@@@@@@@@


//@@@@@@@@@@@Beruf@@@@@@@@@

'click #1588': function () {
Session.set("beruf27", document.getElementById('1587').value);
document.getElementById('1587').disabled = true; 
document.getElementById('1588').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'beruf27': Session.get("beruf27")} });
},


//@@@@@@@@@@@Beruf@@@@@@@@@




//@@@@@@@@@@@Schule@@@@@@@@@

'click .item334': function () { 


 //------- 

   if(document.getElementById('1589').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule27': "1"} });
return console.log("schule27: 1")
}

//-------


 //------- 

   if(document.getElementById('1590').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule27': "2"} });
return console.log("schule27: 2")
}

//-------


 //------- 

   if(document.getElementById('1591').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule27': "3"} });
return console.log("schule27: 3")
}

//-------


 //------- 

   if(document.getElementById('1592').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule27': "4"} });
return console.log("schule27: 4")
}

//-------


 //------- 

   if(document.getElementById('1593').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule27': "5"} });
return console.log("schule27: 5")
}

//-------


 //------- 

   if(document.getElementById('1594').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule27': "6"} });
return console.log("schule27: 6")
}

//-------


 //------- 

   if(document.getElementById('1595').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule27': "7"} });
return console.log("schule27: 7")
}

//-------


 //------- 

   if(document.getElementById('1596').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule27': "8"} });
return console.log("schule27: 8")
}

//-------


 //------- 

   if(document.getElementById('1597').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule27': "9"} });
return console.log("schule27: 9")
}

//-------


 //------- 

   if(document.getElementById('1598').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule27': "10"} });
return console.log("schule27: 10")
}

//-------



 },


//@@@@@@@@@@@Schule@@@@@@@@@


//@@@@@@@@@@@Wie weiter@@@@@@@@@

//weiteren erfassen:
'click #1599': function () {
amplify.store('status', "nk27");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
},

//alle erfasst:
'click #1600': function () {
amplify.store('status', "fertignk");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
}

//@@@@@@@@@@@Wie weiter@@@@@@@@@








};




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt27@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt28@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



Template.netzwerkkontakt28.events = {

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@

'click #1602': function () {
Session.set("kuerzel28", document.getElementById('1601').value);
document.getElementById('1601').disabled = true; 
document.getElementById('1602').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'kuerzel28': Session.get("kuerzel28")} });
},

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@


//@@@@@@@@@@@Geschlecht@@@@@@@@@


'click .item337': function () {




//------- 

   if(document.getElementById('1603').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht28': "1"} });
return console.log("geschlecht28: 1")
}

//-------



//------- 

   if(document.getElementById('1604').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht28': "2"} });
return console.log("geschlecht28: 2")
}

//-------


 },


//@@@@@@@@@@@Geschlecht@@@@@@@@@



//@@@@@@@@@@@Alter@@@@@@@@@

'click #1606': function () {
Session.set("alter28", document.getElementById('1605').value);
document.getElementById('1605').disabled = true; 
document.getElementById('1606').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'alter28': Session.get("alter28")} });
},


//@@@@@@@@@@@Alter@@@@@@@@@



//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


'click .item339': function () {




//------- 

   if(document.getElementById('1607').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung28': "1"} });
return console.log("beziehung28: 1")
}

//-------


//------- 

   if(document.getElementById('1608').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung28': "2"} });
return console.log("beziehung28: 2")
}

//-------


//------- 

   if(document.getElementById('1609').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung28': "3"} });
return console.log("beziehung28: 3")
}

//-------


//------- 

   if(document.getElementById('1610').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung28': "4"} });
return console.log("beziehung28: 4")
}

//-------


//------- 

   if(document.getElementById('1611').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung28': "5"} });
return console.log("beziehung28: 5")
}

//-------


//------- 

   if(document.getElementById('1612').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung28': "6"} });
return console.log("beziehung28: 6")
}

//-------


//------- 

   if(document.getElementById('1613').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung28': "7"} });
return console.log("beziehung28: 7")
}

//-------


//------- 

   if(document.getElementById('1614').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung28': "8"} });
return console.log("beziehung28: 8")
}

//-------


//------- 

   if(document.getElementById('1615').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung28': "9"} });
return console.log("beziehung28: 9")
}

//-------


//------- 

   if(document.getElementById('1616').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung28': "10"} });
return console.log("beziehung28: 10")
}

//-------


//------- 

   if(document.getElementById('1617').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung28': "11"} });
return console.log("beziehung28: 11")
}

//-------


//------- 

   if(document.getElementById('1618').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung28': "12"} });
return console.log("beziehung28: 12")
}

//-------



 },


//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


//@@@@@@@@@@@Enge@@@@@@@@@
'click .item340': function () {




//------- 

   if(document.getElementById('1619').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge28': "1"} });
return console.log("enge28: 1")
}

//-------


//------- 

   if(document.getElementById('1620').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge28': "2"} });
return console.log("enge28: 2")
}

//-------


//------- 

   if(document.getElementById('1621').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge28': "3"} });
return console.log("enge28: 3")
}

//-------


//------- 

   if(document.getElementById('1622').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge28': "4"} });
return console.log("enge28: 4")
}

//-------


//------- 

   if(document.getElementById('1623').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge28': "5"} });
return console.log("enge28: 5")
}

//-------






 },

//@@@@@@@@@@@Enge@@@@@@@@@


//@@@@@@@@@@@Beruf@@@@@@@@@

'click #1625': function () {
Session.set("beruf28", document.getElementById('1624').value);
document.getElementById('1624').disabled = true; 
document.getElementById('1625').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'beruf28': Session.get("beruf28")} });
},


//@@@@@@@@@@@Beruf@@@@@@@@@




//@@@@@@@@@@@Schule@@@@@@@@@

'click .item342': function () { 


 //------- 

   if(document.getElementById('1626').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule28': "1"} });
return console.log("schule28: 1")
}

//-------


 //------- 

   if(document.getElementById('1627').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule28': "2"} });
return console.log("schule28: 2")
}

//-------


 //------- 

   if(document.getElementById('1628').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule28': "3"} });
return console.log("schule28: 3")
}

//-------


 //------- 

   if(document.getElementById('1629').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule28': "4"} });
return console.log("schule28: 4")
}

//-------


 //------- 

   if(document.getElementById('1630').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule28': "5"} });
return console.log("schule28: 5")
}

//-------


 //------- 

   if(document.getElementById('1631').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule28': "6"} });
return console.log("schule28: 6")
}

//-------


 //------- 

   if(document.getElementById('1632').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule28': "7"} });
return console.log("schule28: 7")
}

//-------


 //------- 

   if(document.getElementById('1633').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule28': "8"} });
return console.log("schule28: 8")
}

//-------


 //------- 

   if(document.getElementById('1634').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule28': "9"} });
return console.log("schule28: 9")
}

//-------


 //------- 

   if(document.getElementById('1635').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule28': "10"} });
return console.log("schule28: 10")
}

//-------



 },


//@@@@@@@@@@@Schule@@@@@@@@@


//@@@@@@@@@@@Wie weiter@@@@@@@@@

//weiteren erfassen:
'click #1636': function () {
amplify.store('status', "nk28");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
},

//alle erfasst:
'click #1637': function () {
amplify.store('status', "fertignk");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
}

//@@@@@@@@@@@Wie weiter@@@@@@@@@








};




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt28@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt29@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



Template.netzwerkkontakt29.events = {

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@

'click #1639': function () {
Session.set("kuerzel29", document.getElementById('1638').value);
document.getElementById('1638').disabled = true; 
document.getElementById('1639').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'kuerzel29': Session.get("kuerzel29")} });
},

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@


//@@@@@@@@@@@Geschlecht@@@@@@@@@


'click .item345': function () {




//------- 

   if(document.getElementById('1640').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht29': "1"} });
return console.log("geschlecht29: 1")
}

//-------



//------- 

   if(document.getElementById('1641').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht29': "2"} });
return console.log("geschlecht29: 2")
}

//-------


 },


//@@@@@@@@@@@Geschlecht@@@@@@@@@



//@@@@@@@@@@@Alter@@@@@@@@@

'click #1643': function () {
Session.set("alter29", document.getElementById('1642').value);
document.getElementById('1642').disabled = true; 
document.getElementById('1643').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'alter29': Session.get("alter29")} });
},


//@@@@@@@@@@@Alter@@@@@@@@@



//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


'click .item347': function () {




//------- 

   if(document.getElementById('1644').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung29': "1"} });
return console.log("beziehung29: 1")
}

//-------


//------- 

   if(document.getElementById('1645').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung29': "2"} });
return console.log("beziehung29: 2")
}

//-------


//------- 

   if(document.getElementById('1646').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung29': "3"} });
return console.log("beziehung29: 3")
}

//-------


//------- 

   if(document.getElementById('1647').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung29': "4"} });
return console.log("beziehung29: 4")
}

//-------


//------- 

   if(document.getElementById('1648').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung29': "5"} });
return console.log("beziehung29: 5")
}

//-------


//------- 

   if(document.getElementById('1649').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung29': "6"} });
return console.log("beziehung29: 6")
}

//-------


//------- 

   if(document.getElementById('1650').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung29': "7"} });
return console.log("beziehung29: 7")
}

//-------


//------- 

   if(document.getElementById('1651').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung29': "8"} });
return console.log("beziehung29: 8")
}

//-------


//------- 

   if(document.getElementById('1652').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung29': "9"} });
return console.log("beziehung29: 9")
}

//-------


//------- 

   if(document.getElementById('1653').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung29': "10"} });
return console.log("beziehung29: 10")
}

//-------


//------- 

   if(document.getElementById('1654').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung29': "11"} });
return console.log("beziehung29: 11")
}

//-------


//------- 

   if(document.getElementById('1655').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung29': "12"} });
return console.log("beziehung29: 12")
}

//-------



 },


//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


//@@@@@@@@@@@Enge@@@@@@@@@
'click .item348': function () {




//------- 

   if(document.getElementById('1656').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge29': "1"} });
return console.log("enge29: 1")
}

//-------


//------- 

   if(document.getElementById('1657').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge29': "2"} });
return console.log("enge29: 2")
}

//-------


//------- 

   if(document.getElementById('1658').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge29': "3"} });
return console.log("enge29: 3")
}

//-------


//------- 

   if(document.getElementById('1659').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge29': "4"} });
return console.log("enge29: 4")
}

//-------


//------- 

   if(document.getElementById('1660').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge29': "5"} });
return console.log("enge29: 5")
}

//-------






 },

//@@@@@@@@@@@Enge@@@@@@@@@


//@@@@@@@@@@@Beruf@@@@@@@@@

'click #1662': function () {
Session.set("beruf29", document.getElementById('1661').value);
document.getElementById('1661').disabled = true; 
document.getElementById('1662').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'beruf29': Session.get("beruf29")} });
},


//@@@@@@@@@@@Beruf@@@@@@@@@




//@@@@@@@@@@@Schule@@@@@@@@@

'click .item350': function () { 


 //------- 

   if(document.getElementById('1663').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule29': "1"} });
return console.log("schule29: 1")
}

//-------


 //------- 

   if(document.getElementById('1664').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule29': "2"} });
return console.log("schule29: 2")
}

//-------


 //------- 

   if(document.getElementById('1665').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule29': "3"} });
return console.log("schule29: 3")
}

//-------


 //------- 

   if(document.getElementById('1666').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule29': "4"} });
return console.log("schule29: 4")
}

//-------


 //------- 

   if(document.getElementById('1667').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule29': "5"} });
return console.log("schule29: 5")
}

//-------


 //------- 

   if(document.getElementById('1668').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule29': "6"} });
return console.log("schule29: 6")
}

//-------


 //------- 

   if(document.getElementById('1669').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule29': "7"} });
return console.log("schule29: 7")
}

//-------


 //------- 

   if(document.getElementById('1670').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule29': "8"} });
return console.log("schule29: 8")
}

//-------


 //------- 

   if(document.getElementById('1671').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule29': "9"} });
return console.log("schule29: 9")
}

//-------


 //------- 

   if(document.getElementById('1672').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule29': "10"} });
return console.log("schule29: 10")
}

//-------



 },


//@@@@@@@@@@@Schule@@@@@@@@@


//@@@@@@@@@@@Wie weiter@@@@@@@@@

//weiteren erfassen:
'click #1673': function () {
amplify.store('status', "nk29");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
},

//alle erfasst:
'click #1674': function () {
amplify.store('status', "fertignk");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
}

//@@@@@@@@@@@Wie weiter@@@@@@@@@








};




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt29@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt30@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



Template.netzwerkkontakt30.events = {

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@

'click #1676': function () {
Session.set("kuerzel30", document.getElementById('1675').value);
document.getElementById('1675').disabled = true; 
document.getElementById('1676').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'kuerzel30': Session.get("kuerzel30")} });
},

//@@@@@@@@@@@verwendetes Kürzel@@@@@@@@@


//@@@@@@@@@@@Geschlecht@@@@@@@@@


'click .item353': function () {




//------- 

   if(document.getElementById('1677').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht30': "1"} });
return console.log("geschlecht30: 1")
}

//-------



//------- 

   if(document.getElementById('1678').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht30': "2"} });
return console.log("geschlecht30: 2")
}

//-------


 },


//@@@@@@@@@@@Geschlecht@@@@@@@@@



//@@@@@@@@@@@Alter@@@@@@@@@

'click #1680': function () {
Session.set("alter30", document.getElementById('1679').value);
document.getElementById('1679').disabled = true; 
document.getElementById('1680').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'alter30': Session.get("alter30")} });
},


//@@@@@@@@@@@Alter@@@@@@@@@



//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


'click .item355': function () {




//------- 

   if(document.getElementById('1681').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung30': "1"} });
return console.log("beziehung30: 1")
}

//-------


//------- 

   if(document.getElementById('1682').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung30': "2"} });
return console.log("beziehung30: 2")
}

//-------


//------- 

   if(document.getElementById('1683').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung30': "3"} });
return console.log("beziehung30: 3")
}

//-------


//------- 

   if(document.getElementById('1684').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung30': "4"} });
return console.log("beziehung30: 4")
}

//-------


//------- 

   if(document.getElementById('1685').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung30': "5"} });
return console.log("beziehung30: 5")
}

//-------


//------- 

   if(document.getElementById('1686').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung30': "6"} });
return console.log("beziehung30: 6")
}

//-------


//------- 

   if(document.getElementById('1687').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung30': "7"} });
return console.log("beziehung30: 7")
}

//-------


//------- 

   if(document.getElementById('1688').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung30': "8"} });
return console.log("beziehung30: 8")
}

//-------


//------- 

   if(document.getElementById('1689').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung30': "9"} });
return console.log("beziehung30: 9")
}

//-------


//------- 

   if(document.getElementById('1690').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung30': "10"} });
return console.log("beziehung30: 10")
}

//-------


//------- 

   if(document.getElementById('1691').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung30': "11"} });
return console.log("beziehung30: 11")
}

//-------


//------- 

   if(document.getElementById('1692').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'beziehung30': "12"} });
return console.log("beziehung30: 12")
}

//-------



 },


//@@@@@@@@@@@Welche Beziehung@@@@@@@@@


//@@@@@@@@@@@Enge@@@@@@@@@
'click .item356': function () {




//------- 

   if(document.getElementById('1693').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge30': "1"} });
return console.log("enge30: 1")
}

//-------


//------- 

   if(document.getElementById('1694').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge30': "2"} });
return console.log("enge30: 2")
}

//-------


//------- 

   if(document.getElementById('1695').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge30': "3"} });
return console.log("enge30: 3")
}

//-------


//------- 

   if(document.getElementById('1696').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge30': "4"} });
return console.log("enge30: 4")
}

//-------


//------- 

   if(document.getElementById('1697').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'enge30': "5"} });
return console.log("enge30: 5")
}

//-------






 },

//@@@@@@@@@@@Enge@@@@@@@@@


//@@@@@@@@@@@Beruf@@@@@@@@@

'click #1699': function () {
Session.set("beruf30", document.getElementById('1698').value);
document.getElementById('1698').disabled = true; 
document.getElementById('1699').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'beruf30': Session.get("beruf30")} });
},


//@@@@@@@@@@@Beruf@@@@@@@@@




//@@@@@@@@@@@Schule@@@@@@@@@

'click .item358': function () { 


 //------- 

   if(document.getElementById('1700').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule30': "1"} });
return console.log("schule30: 1")
}

//-------


 //------- 

   if(document.getElementById('1701').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule30': "2"} });
return console.log("schule30: 2")
}

//-------


 //------- 

   if(document.getElementById('1702').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule30': "3"} });
return console.log("schule30: 3")
}

//-------


 //------- 

   if(document.getElementById('1703').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule30': "4"} });
return console.log("schule30: 4")
}

//-------


 //------- 

   if(document.getElementById('1704').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule30': "5"} });
return console.log("schule30: 5")
}

//-------


 //------- 

   if(document.getElementById('1705').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule30': "6"} });
return console.log("schule30: 6")
}

//-------


 //------- 

   if(document.getElementById('1706').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule30': "7"} });
return console.log("schule30: 7")
}

//-------


 //------- 

   if(document.getElementById('1707').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule30': "8"} });
return console.log("schule30: 8")
}

//-------


 //------- 

   if(document.getElementById('1708').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule30': "9"} });
return console.log("schule30: 9")
}

//-------


 //------- 

   if(document.getElementById('1709').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'schule30': "10"} });
return console.log("schule30: 10")
}

//-------



 },


//@@@@@@@@@@@Schule@@@@@@@@@


//@@@@@@@@@@@Wie weiter@@@@@@@@@

//weiteren erfassen:
'click #1710': function () {
amplify.store('status', "fertignk");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
},

//alle erfasst:
'click #1711': function () {
amplify.store('status', "fertignk");
Session.set('status', amplify.store('status'));
scrollTo(0,0);
}

//@@@@@@@@@@@Wie weiter@@@@@@@@@








};




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// netzwerkkontakt30@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@










  
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Netzwerkkontakte++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Netzwerkkontakte++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Netzwerkkontakte++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  




  
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@demographie@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@demographie@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@demographie@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.demographie.events = {
	

	
	
//@@@@@@@@@@@Geschlecht@@@@@@@@@


'click .item360': function () {




//------- 

   if(document.getElementById('1712').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht': "1"} });
return console.log("geschlecht: 1")
}

//-------



//------- 

   if(document.getElementById('1713').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht': "2"} });
return console.log("geschlecht: 2")
}

//-------
	
	
 },	
	
	
//@@@@@@@@@@@Geschlecht@@@@@@@@@	
	

	
//@@@@@@@@@@@Alter@@@@@@@@@	
	
	'click #1715': function () {
		Session.set("jahrgang", document.getElementById('1714').value);
		document.getElementById('1714').disabled = true; 
		document.getElementById('1715').disabled = true;
		Users.update({user_id: Session.get("user_id")}, {'$set': {'jahrgang': Session.get("jahrgang")} });
	},	

	
//@@@@@@@@@@@Alter@@@@@@@@@		

	
	
//@@@@@@@@@@@Studiengang@@@@@@@@@	
	
	'click #1717': function () {
		Session.set("studiengang", document.getElementById('1716').value);
		document.getElementById('1716').disabled = true; 
		document.getElementById('1717').disabled = true;
		Users.update({user_id: Session.get("user_id")}, {'$set': {'studiengang': Session.get("studiengang")} });
	},	

	
//@@@@@@@@@@@Studiengang@@@@@@@@@		



//@@@@@@@@@@@studienstufe@@@@@@@@@


'click .item363': function () {




//------- 

   if(document.getElementById('1718').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'studienstufe': "1"} });
return console.log("studienstufe: 1")
}

//-------



//------- 

   if(document.getElementById('1719').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'studienstufe': "2"} });
return console.log("studienstufe: 2")
}

//-------
	
	
 },	
	
	
//@@@@@@@@@@@studienstufe@@@@@@@@@	



//@@@@@@@@@@@erfahrung@@@@@@@@@


'click .item364': function () {




//------- 

   if(document.getElementById('1720').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'erfahrung': "1"} });
return console.log("erfahrung: 1")
}

//-------



//------- 

   if(document.getElementById('1721').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'erfahrung': "2"} });
return console.log("erfahrung: 2")
}

//-------
	
	
 },	
	
	
//@@@@@@@@@@@erfahrung@@@@@@@@@	
	
	
	
//@@@@@@@@@@@hhgroesse@@@@@@@@@	
	
	'click #1723': function () {
		Session.set("hhgroesse", document.getElementById('1722').value);
		document.getElementById('1722').disabled = true; 
		document.getElementById('1723').disabled = true;
		Users.update({user_id: Session.get("user_id")}, {'$set': {'hhgroesse': Session.get("hhgroesse")} });
	},	

	
//@@@@@@@@@@@hhgroesse@@@@@@@@@		
	
	
	
//@@@@@@@@@@@einkommen@@@@@@@@@	
	
	'click #1725': function () {
		Session.set("einkommen", document.getElementById('1724').value);
		document.getElementById('1724').disabled = true; 
		document.getElementById('1725').disabled = true;
		Users.update({user_id: Session.get("user_id")}, {'$set': {'einkommen': Session.get("einkommen")} });
	},	

	
//@@@@@@@@@@@einkommen@@@@@@@@@	
	
//@@@@@@@@@@@anonymitaet@@@@@@@@@	

 'click .anonymitaet': function () {




//------- 

   if(document.getElementById('0').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'anonymitaet': "0"} });
return console.log("anonymitaet: 0")
}

//-------
 
 
 
 
//------- 

   if(document.getElementById('1').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'anonymitaet': "1"} });
return console.log("anonymitaet: 1")
}

//-------



//------- 

   if(document.getElementById('2').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'anonymitaet': "2"} });
return console.log("anonymitaet: 2")
}

//-------
//------- 

   if(document.getElementById('3').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'anonymitaet': "3"} });
return console.log("anonymitaet: 3")
}

//-------
//------- 

   if(document.getElementById('4').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'anonymitaet': "4"} });
return console.log("anonymitaet: 4")
}

//-------
//------- 

   if(document.getElementById('5').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'anonymitaet': "5"} });
return console.log("anonymitaet: 5")
}

//-------
//------- 

   if(document.getElementById('6').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'anonymitaet': "6"} });
return console.log("anonymitaet: 6")
}

//-------
//------- 

   if(document.getElementById('7').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'anonymitaet': "7"} });
return console.log("anonymitaet: 7")
}

//-------



 },


//@@@@@@@@@@@anonymitaet@@@@@@@@@	
	
	
		'click #weiter9': function () {
			amplify.store('status', "demographie");
			Session.set('status', amplify.store('status'));
			scrollTo(0,0);
			return console.log("demographie")
	},		
	
	
	
	
	
	
	
};


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@demographie@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@demographie@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@demographie@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  
 



 
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@spiel@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@spiel@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@spiel@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   
  
  Template.spiel.events({
		'click #weiter10': function () {
			amplify.store('status', "spiel");
			Session.set('status', amplify.store('status'));
			scrollTo(0,0);
			return console.log("spiel")
	},	

		'click #zufall1': function () {
			Session.set("zufall", "zufall");
			amplify.store("zufall", "zufall");
			document.getElementById('zufall1').disabled = true; 
			return console.log("zf-button")
		},	

		
'click button#selfb': function () {
Session.set("fuersich", document.getElementById('selfa').value);
document.getElementById('selfa').disabled = true; 
document.getElementById('selfb').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'rrtself': Session.get("fuersich")} });
},


'click button#otherb': function () {
Session.set("fueranderen", document.getElementById('othera').value);
document.getElementById('othera').disabled = true; 
document.getElementById('otherb').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'rrtother': Session.get("fueranderen")} });
}	
	
	
	
	
	
});	
 


 
 



  
  Template.spiel.zf = function(){
 
 
	if(		Session.get("zufall") == "zufall" ||
			
			amplify.store("zufall") == "zufall"
				
	)
	
	
				{var textzeigen = "ja"}

	else

				{var textzeigen = "nein"}


	return textzeigen == "ja";

};
 
  
 //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@spiel@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@spiel@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@spiel@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
  

//+++++++++++++++++++++++++++++++++Postgame+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Postgame+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Postgame+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



Template.postgame.events = {

'click button#interesseb': function () {
Session.set("resultate", document.getElementById('interessea').value);
document.getElementById('interessea').disabled = true; 
document.getElementById('interesseb').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'resultate': Session.get("resultate")} });
},

'click button#interessed': function () {
Session.set("experimente", document.getElementById('interessec').value);
document.getElementById('interessec').disabled = true; 
document.getElementById('interessed').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'experimente': Session.get("experimente")} });
}


};


//+++++++++++++++++++++++++++++++++Postgame+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Postgame+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Postgame+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++







  
  
 

//+++++++++++++++++++++++++++++++++Reihenfolge+++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Reihenfolge+++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Reihenfolge+++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Reihenfolge+++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Reihenfolge+++++++++++++++++++++++++++++++++++++++++++++++++++++






Template.pregame.show = function(){
 
 
	if(		Session.get("status") == null &&
			
			amplify.store("status") == null
				
	)
	
	
				{var zeigen1 = "ja"}

	else

				{var zeigen1 = "nein"}


	return zeigen1 == "ja";

};


//Slider++++++++++++++++++++++++++++++++++++++++++++++++++++++++


Template.instruktionslider.show = function(){
 
 
	if(		Session.get("status") == "spiel" ||
			
			amplify.store("status") == "spiel"
				
	)
	
	
				{var zeigen2 = "ja"}

	else

				{var zeigen2 = "nein"}


	return zeigen2 == "ja";

};


Template.item1.show = function(){
 
 
	if(		Session.get("status") == "spiel" ||
			
			amplify.store("status") == "spiel"
				
	)
	
	
				{var zeigen3 = "ja"}

	else

				{var zeigen3 = "nein"}


	return zeigen3 == "ja";

};


Template.item2.show = function(){
 
 
	if(		Session.get("status") == "spiel" ||
			
			amplify.store("status") == "spiel"
				
	)
	
	
				{var zeigen4 = "ja"}

	else

				{var zeigen4 = "nein"}


	return zeigen4 == "ja";

};


Template.item3.show = function(){
 
 
	if(		Session.get("status") == "spiel" ||
			
			amplify.store("status") == "spiel"
				
	)
	
	
				{var zeigen5 = "ja"}

	else

				{var zeigen5 = "nein"}


	return zeigen5 == "ja";

};


Template.item4.show = function(){
 
 
	if(		Session.get("status") == "spiel" ||
			
			amplify.store("status") == "spiel"
				
	)
	
	
				{var zeigen6 = "ja"}

	else

				{var zeigen6 = "nein"}


	return zeigen6 == "ja";

};


Template.item5.show = function(){
 
 
	if(		Session.get("status") == "spiel" ||
			
			amplify.store("status") == "spiel"
				
	)
	
	
				{var zeigen7 = "ja"}

	else

				{var zeigen7 = "nein"}


	return zeigen7 == "ja";

};


Template.item6.show = function(){
 
 
	if(		Session.get("status") == "spiel" ||
			
			amplify.store("status") == "spiel"
				
	)
	
	
				{var zeigen8 = "ja"}

	else

				{var zeigen8 = "nein"}


	return zeigen8 == "ja";

};


//Slider++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



//Schwartz++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.item7bis27.show = function(){
 
 
	if(		Session.get("status") == "sozerwuenschtheit" ||
			
			amplify.store("status") == "sozerwuenschtheit"
				
	)
	
	
				{var zeigen9 = "ja"}

	else

				{var zeigen9 = "nein"}


	return zeigen9 == "ja";

};


//Schwartz++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//Big-Five++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.item28bis87.show = function(){
 
 
	if(		Session.get("status") == "verinstitutionen" ||
			
			amplify.store("status") == "verinstitutionen"
				
	)
	
	
				{var zeigen10 = "ja"}

	else

				{var zeigen10 = "nein"}


	return zeigen10 == "ja";

};


//Big-Five++++++++++++++++++++++++++++++++++++++++++++++++++++++++



//Soziale Erwünschtheit++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.item88bis101.show = function(){
 
 
	if(		Session.get("status") == "verpersonen" ||
			
			amplify.store("status") == "verpersonen"
				
	)
	
	
				{var zeigen11 = "ja"}

	else

				{var zeigen11 = "nein"}


	return zeigen11 == "ja";

};


//Soziale Erwünschtheit++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//Vertrauen in Institutionen++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.item102bis111.show = function(){
 
 
	if(		Session.get("status") == "schwartz" ||
			
			amplify.store("status") == "schwartz"
				
	)
	
	
				{var zeigen12 = "ja"}

	else

				{var zeigen12 = "nein"}


	return zeigen12 == "ja";

};


//Vertrauen in Institutionen++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//Vertrauen in Personen++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.item112bis114.show = function(){
 
 
	if(		Session.get("status") == "slider" ||
			
			amplify.store("status") == "slider"
				
	)
	
	
				{var zeigen13 = "ja"}

	else

				{var zeigen13 = "nein"}


	return zeigen13 == "ja";

};


//Vertrauen in Personen++++++++++++++++++++++++++++++++++++++++++++++++++++++++



//Namengenerator++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.item115bis119.show = function(){
 
 
	if(		Session.get("status") == "bigfive" ||
			
			amplify.store("status") == "bigfive"
				
	)
	
	
				{var zeigen13b = "ja"}

	else

				{var zeigen13b = "nein"}


	return zeigen13b == "ja";

};


//Namengenerator++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//Instruktion NWK++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.instruktionnwk.show = function(){
 
 
	if(		Session.get("status") == "generator" ||
			
			amplify.store("status") == "generator"
				
	)
	
	
				{var zeigen13c = "ja"}

	else

				{var zeigen13c = "nein"}


	return zeigen13c == "ja";

};

//Instruktion NWK++++++++++++++++++++++++++++++++++++++++++++++++++++++++



//Rohe Tabelle++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.rohetabelle.show = function(){
 
 
	if(		Session.get("status") == "inwk" ||
			amplify.store("status") == "inwk" ||
			

Session.get("status") == "nk1" ||

amplify.store("status") == "nk1" ||



Session.get("status") == "nk2" ||

amplify.store("status") == "nk2" ||



Session.get("status") == "nk3" ||

amplify.store("status") == "nk3" ||



Session.get("status") == "nk4" ||

amplify.store("status") == "nk4" ||



Session.get("status") == "nk5" ||

amplify.store("status") == "nk5" ||



Session.get("status") == "nk6" ||

amplify.store("status") == "nk6" ||



Session.get("status") == "nk7" ||

amplify.store("status") == "nk7" ||



Session.get("status") == "nk8" ||

amplify.store("status") == "nk8" ||



Session.get("status") == "nk9" ||

amplify.store("status") == "nk9" ||



Session.get("status") == "nk10" ||

amplify.store("status") == "nk10" ||



Session.get("status") == "nk11" ||

amplify.store("status") == "nk11" ||



Session.get("status") == "nk12" ||

amplify.store("status") == "nk12" ||



Session.get("status") == "nk13" ||

amplify.store("status") == "nk13" ||



Session.get("status") == "nk14" ||

amplify.store("status") == "nk14" ||



Session.get("status") == "nk15" ||

amplify.store("status") == "nk15" ||



Session.get("status") == "nk16" ||

amplify.store("status") == "nk16" ||



Session.get("status") == "nk17" ||

amplify.store("status") == "nk17" ||



Session.get("status") == "nk18" ||

amplify.store("status") == "nk18" ||



Session.get("status") == "nk19" ||

amplify.store("status") == "nk19" ||



Session.get("status") == "nk20" ||

amplify.store("status") == "nk20" ||



Session.get("status") == "nk21" ||

amplify.store("status") == "nk21" ||



Session.get("status") == "nk22" ||

amplify.store("status") == "nk22" ||



Session.get("status") == "nk23" ||

amplify.store("status") == "nk23" ||



Session.get("status") == "nk24" ||

amplify.store("status") == "nk24" ||



Session.get("status") == "nk25" ||

amplify.store("status") == "nk25" ||



Session.get("status") == "nk26" ||

amplify.store("status") == "nk26" ||



Session.get("status") == "nk27" ||

amplify.store("status") == "nk27" ||



Session.get("status") == "nk28" ||

amplify.store("status") == "nk28" ||



Session.get("status") == "nk29" ||

amplify.store("status") == "nk29" 


			
	)
	
	
				{var zeigen14 = "ja"}

	else

				{var zeigen14 = "nein"}


	return zeigen14 == "ja";

};


//Rohe Tabelle++++++++++++++++++++++++++++++++++++++++++++++++++++++++



//Netzwerkkontakte@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//Netzwerkkontakte@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//Netzwerkkontakte@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



//nk1n++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.netzwerkkontakt1.show = function(){
 
 
	if(		Session.get("status") == "inwk" ||
			
			amplify.store("status") == "inwk"
				
	)
	
	
				{var zeigen15 = "ja"}

	else

				{var zeigen15 = "nein"}


	return zeigen15 == "ja";

};


//nk1n++++++++++++++++++++++++++++++++++++++++++++++++++++++++







//nk2n++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.netzwerkkontakt2.show = function(){


if(Session.get("status") == "nk1" ||

amplify.store("status") == "nk1"

)


{var zeigen16 = "ja"}

else

{var zeigen16 = "nein"}


return zeigen16 == "ja";

};


//nk2n++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//nk3n++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.netzwerkkontakt3.show = function(){


if(Session.get("status") == "nk2" ||

amplify.store("status") == "nk2"

)


{var zeigen17 = "ja"}

else

{var zeigen17 = "nein"}


return zeigen17 == "ja";

};


//nk3n++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//nk4n++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.netzwerkkontakt4.show = function(){


if(Session.get("status") == "nk3" ||

amplify.store("status") == "nk3"

)


{var zeigen18 = "ja"}

else

{var zeigen18 = "nein"}


return zeigen18 == "ja";

};


//nk4n++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//nk5n++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.netzwerkkontakt5.show = function(){


if(Session.get("status") == "nk4" ||

amplify.store("status") == "nk4"

)


{var zeigen19 = "ja"}

else

{var zeigen19 = "nein"}


return zeigen19 == "ja";

};


//nk5n++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//nk6n++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.netzwerkkontakt6.show = function(){


if(Session.get("status") == "nk5" ||

amplify.store("status") == "nk5"

)


{var zeigen20 = "ja"}

else

{var zeigen20 = "nein"}


return zeigen20 == "ja";

};


//nk6n++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//nk7n++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.netzwerkkontakt7.show = function(){


if(Session.get("status") == "nk6" ||

amplify.store("status") == "nk6"

)


{var zeigen21 = "ja"}

else

{var zeigen21 = "nein"}


return zeigen21 == "ja";

};


//nk7n++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//nk8n++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.netzwerkkontakt8.show = function(){


if(Session.get("status") == "nk7" ||

amplify.store("status") == "nk7"

)


{var zeigen22 = "ja"}

else

{var zeigen22 = "nein"}


return zeigen22 == "ja";

};


//nk8n++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//nk9n++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.netzwerkkontakt9.show = function(){


if(Session.get("status") == "nk8" ||

amplify.store("status") == "nk8"

)


{var zeigen23 = "ja"}

else

{var zeigen23 = "nein"}


return zeigen23 == "ja";

};


//nk9n++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//nk10n++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.netzwerkkontakt10.show = function(){


if(Session.get("status") == "nk9" ||

amplify.store("status") == "nk9"

)


{var zeigen24 = "ja"}

else

{var zeigen24 = "nein"}


return zeigen24 == "ja";

};


//nk10n++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//nk11n++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.netzwerkkontakt11.show = function(){


if(Session.get("status") == "nk10" ||

amplify.store("status") == "nk10"

)


{var zeigen25 = "ja"}

else

{var zeigen25 = "nein"}


return zeigen25 == "ja";

};


//nk11n++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//nk12n++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.netzwerkkontakt12.show = function(){


if(Session.get("status") == "nk11" ||

amplify.store("status") == "nk11"

)


{var zeigen26 = "ja"}

else

{var zeigen26 = "nein"}


return zeigen26 == "ja";

};


//nk12n++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//nk13n++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.netzwerkkontakt13.show = function(){


if(Session.get("status") == "nk12" ||

amplify.store("status") == "nk12"

)


{var zeigen27 = "ja"}

else

{var zeigen27 = "nein"}


return zeigen27 == "ja";

};


//nk13n++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//nk14n++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.netzwerkkontakt14.show = function(){


if(Session.get("status") == "nk13" ||

amplify.store("status") == "nk13"

)


{var zeigen28 = "ja"}

else

{var zeigen28 = "nein"}


return zeigen28 == "ja";

};


//nk14n++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//nk15n++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.netzwerkkontakt15.show = function(){


if(Session.get("status") == "nk14" ||

amplify.store("status") == "nk14"

)


{var zeigen29 = "ja"}

else

{var zeigen29 = "nein"}


return zeigen29 == "ja";

};


//nk15n++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//nk16n++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.netzwerkkontakt16.show = function(){


if(Session.get("status") == "nk15" ||

amplify.store("status") == "nk15"

)


{var zeigen30 = "ja"}

else

{var zeigen30 = "nein"}


return zeigen30 == "ja";

};


//nk16n++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//nk17n++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.netzwerkkontakt17.show = function(){


if(Session.get("status") == "nk16" ||

amplify.store("status") == "nk16"

)


{var zeigen31 = "ja"}

else

{var zeigen31 = "nein"}


return zeigen31 == "ja";

};


//nk17n++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//nk18n++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.netzwerkkontakt18.show = function(){


if(Session.get("status") == "nk17" ||

amplify.store("status") == "nk17"

)


{var zeigen32 = "ja"}

else

{var zeigen32 = "nein"}


return zeigen32 == "ja";

};


//nk18n++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//nk19n++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.netzwerkkontakt19.show = function(){


if(Session.get("status") == "nk18" ||

amplify.store("status") == "nk18"

)


{var zeigen33 = "ja"}

else

{var zeigen33 = "nein"}


return zeigen33 == "ja";

};


//nk19n++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//nk20n++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.netzwerkkontakt20.show = function(){


if(Session.get("status") == "nk19" ||

amplify.store("status") == "nk19"

)


{var zeigen34 = "ja"}

else

{var zeigen34 = "nein"}


return zeigen34 == "ja";

};


//nk20n++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//nk21n++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.netzwerkkontakt21.show = function(){


if(Session.get("status") == "nk20" ||

amplify.store("status") == "nk20"

)


{var zeigen35 = "ja"}

else

{var zeigen35 = "nein"}


return zeigen35 == "ja";

};


//nk21n++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//nk22n++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.netzwerkkontakt22.show = function(){


if(Session.get("status") == "nk21" ||

amplify.store("status") == "nk21"

)


{var zeigen36 = "ja"}

else

{var zeigen36 = "nein"}


return zeigen36 == "ja";

};


//nk22n++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//nk23n++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.netzwerkkontakt23.show = function(){


if(Session.get("status") == "nk22" ||

amplify.store("status") == "nk22"

)


{var zeigen37 = "ja"}

else

{var zeigen37 = "nein"}


return zeigen37 == "ja";

};


//nk23n++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//nk24n++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.netzwerkkontakt24.show = function(){


if(Session.get("status") == "nk23" ||

amplify.store("status") == "nk23"

)


{var zeigen38 = "ja"}

else

{var zeigen38 = "nein"}


return zeigen38 == "ja";

};


//nk24n++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//nk25n++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.netzwerkkontakt25.show = function(){


if(Session.get("status") == "nk24" ||

amplify.store("status") == "nk24"

)


{var zeigen39 = "ja"}

else

{var zeigen39 = "nein"}


return zeigen39 == "ja";

};


//nk25n++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//nk26n++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.netzwerkkontakt26.show = function(){


if(Session.get("status") == "nk25" ||

amplify.store("status") == "nk25"

)


{var zeigen40 = "ja"}

else

{var zeigen40 = "nein"}


return zeigen40 == "ja";

};


//nk26n++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//nk27n++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.netzwerkkontakt27.show = function(){


if(Session.get("status") == "nk26" ||

amplify.store("status") == "nk26"

)


{var zeigen41 = "ja"}

else

{var zeigen41 = "nein"}


return zeigen41 == "ja";

};


//nk27n++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//nk28n++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.netzwerkkontakt28.show = function(){


if(Session.get("status") == "nk27" ||

amplify.store("status") == "nk27"

)


{var zeigen42 = "ja"}

else

{var zeigen42 = "nein"}


return zeigen42 == "ja";

};


//nk28n++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//nk29n++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.netzwerkkontakt29.show = function(){


if(Session.get("status") == "nk28" ||

amplify.store("status") == "nk28"

)


{var zeigen43 = "ja"}

else

{var zeigen43 = "nein"}


return zeigen43 == "ja";

};


//nk29n++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//nk30n++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Template.netzwerkkontakt30.show = function(){


if(Session.get("status") == "nk29" ||

amplify.store("status") == "nk29"

)


{var zeigen44 = "ja"}

else

{var zeigen44 = "nein"}


return zeigen44 == "ja";

};


//nk30n++++++++++++++++++++++++++++++++++++++++++++++++++++++++




//Netzwerkkontakte@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//Netzwerkkontakte@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//Netzwerkkontakte@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@





Template.demographie.show = function(){
 
 
	if(		Session.get("status") == "fertignk" ||
			
			amplify.store("status") == "fertignk"
				
	)
	
	
				{var zeigen45 = "ja"}

	else

				{var zeigen45 = "nein"}


	return zeigen45 == "ja";

};




Template.spiel.show = function(){
 
 
	if(		Session.get("status") == "pregame" ||
			
			amplify.store("status") == "pregame"
				
	)
	
	
				{var zeigen46 = "ja"}

	else

				{var zeigen46 = "nein"}


	return zeigen46 == "ja";

};



Template.postgame.show = function(){
 
 
	if(		Session.get("status") == "demographie" ||
			
			amplify.store("status") == "demographie"
				
	)
	
	
				{var zeigen47 = "ja"}

	else

				{var zeigen47 = "nein"}


	return zeigen47 == "ja";

};



//+++++++++++++++++++++++++++++++++Reihenfolge+++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Reihenfolge+++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Reihenfolge+++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Reihenfolge+++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Reihenfolge+++++++++++++++++++++++++++++++++++++++++++++++++++++







 
  
  
  
  

  
  
  
  
}










if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
