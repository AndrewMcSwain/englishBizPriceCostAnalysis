function (margin){
 //global variables
  var classSize = { min: 3, max: 8 };
  var expense = {teacher : 680};
  var studentQtyArray= [2,3,4,5,6,7,8];
  var studentQtyArrayLength = studentQtyArray.length; 
  var price = {
    startingvalue: 200,
    array: [],
    valueincrement: 20, 
    max: 500,
    calculate: {
        monthlypaymentstudent : [],// (200, 220, 240, 260...)
        monthlypaymentclass : [],

        unitaryStudent: function unitaryStudentFn(){
          var student = price.calculate.monthlypaymentstudent;
          for(i = price.startingvalue; i <= price.max; i += price.valueincrement) student.push(i);
          return student;
        },

         unitaryClass: function unitaryClassFn(){
          var counter = 0;
          var student = price.calculate.monthlypaymentstudent; //is an array [200,220,240]
          var classArray = price.calculate.monthlypaymentclass;//an empty array, to be filled by this funtion
          var possiblePricesArray = price.calculate.monthlypaymentstudent.length; //length of the array
          //var lengthClass = price.calculate.monthlypaymentclass.length;
          var result = 0;
    
          while(counter < possiblePricesArray){
            for(i = classSize.min; i <= classSize.max; i++){
	       var secondCounter = 0;
               result = i * student[counter];
               classArray[counter][secondCounter].push(result);  
	             secondCounter++;
            }
            counter++;
          }
          return classArray;
        },  
     //new item in object calculate
     analysis: function (monthly, classsize, classqty){
       sales = {
         grosssales : monthlyAmount * classsize * classqty,
         netsales : grosssales - expense.teacher,
         } //price.calculate.analysis.sales
 	 }//price.calculate.analysis()
    } 
  }    
        

  }//price.calculate
}   
	



//non-functioning modules 

/*
	//prompt
	function(){prompt("what is your monthly price increment?", "ex: 10");}
	
	var promptFn= function(prop, varib){  
		 var propString = prop.toString();
		 var varbString = varb.toString();
		 var newName = propString + varbString;  
		 var promptReturn = 
			 if (varb != undefined){
			 	prompt("What is the " + varib + " of " + prop + "?"); //how to set the variable name to the string value stored in var newName?
			 }
		 else{ prompt("What is the " + prop + "?");}
		 ;
	return promptReturn;
	}	
*/
 
