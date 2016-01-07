function (margin){
 
  var classSize = { min: 3, max: 8 };
			 
  var studentQtyArray= [2,3,4,5,6,7,8];
  var studentQtyArrayLength = studentQtyArray.length;
  //var priceList = price.calculate();
  //var resultArray = studentQtyCalc();
   

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
          for(i = price.startingvalue; i <= price.max; i += price.valueincrement)student.push(i);
          return student;
        },

         unitaryClass: function unitaryClassFn(){
          var counter = 0;
          var student = price.calculate.monthlypaymentstudent; //is an array [200,220,240]
          var aula = price.calculate.monthlypaymentclass;//an empty array, to be filled by this funtion
          var lengthStudent = price.calculate.monthlypaymentstudent.length; //length of the array
          //var lengthClass = price.calculate.monthlypaymentclass.length;
          var result = 0;
    
          while(counter < lengthStudent){
            console.log("before:"+ counter)
            for(i = classSize.min; i <= classSize.max; i++){
              result = i * student[counter]
              aula.push(result);  
            }
            counter++;
            console.log("after" + counter);
            return aula;
          }
        }
    }
  }

console.log(price.calculate.unitaryStudent());
      ,  //comma of object syntax    
    
      //new item in object calculate
     function analysis(monthly, classsize, classqty){
       sales = {
         grosssales : monthlyAmount * classsize * classqty,
         netsales : grosssales - expense.teacher,
         } //closes aggregate.sales
 	 }//closes function price.calculate.aggregate()
    }//closes calculate.function() (the removal of which is being considered)
  }//closes price.calculate
}//closes object price
                       
var expense = {
  teacher : 680,
               };
                       
}   
/* I want to determine the 
	
 
}

