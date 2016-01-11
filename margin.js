var classSize = { min: 3, max: 8 };
var expense = {teacher : 680};
var studentQtyArray= [2,3,4,5,6,7,8];
var studentQtyArrayLength = studentQtyArray.length; 
var price = new Object();  
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
        var classArray = [];//an empty array, to be filled by this funtion
        var possiblePricesArray = price.calculate.monthlypaymentstudent.length; //length of the array
        //var lengthClass = price.calculate.monthlypaymentclass.length;
        var result = 0;

        while(counter < possiblePricesArray){ 
         classArray[counter] = [];
         for(i = classSize.min; i <= classSize.max; i++){
             result = i * student[counter];
             classArray[counter].push(result);  
          }
          counter++;
        }
        return classArray;
       }
    }
 }
console.log(price.calculate.unitaryStudent());
console.log(price.calculate.unitaryClass());
