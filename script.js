// Question:no:01:
var studentName =[];
// Question:no:02:
var studentName = new Array();
// Question:no:03:
var fruitsName = ['Apple','Mango','Banana','Orange','Coconut'];
// Question;no:04;
var numberarr = ['1','2','3','4','5'];
// Question:no:05:
var booleanarr = ['true','false','true','false'];
// Question:no:06:
var mixedarr = ['Apple','2','true','null',['1','2','3']];
// Question:no:07:
var qualificatioonarr = [ 'SSC', 'HSC', 'BCS','BS', 'BCOM', 'MS', 'M. Phil', 'PhD'];
document.write(qualificatioonarr);
// Question:no:08:
var studentNames = ["Michael", "John", "Tony"];
 var studentScores = [320, 230, 480]; 
 const totalMarks = 500;
 studentNames.forEach((name, index) => {
     var score = studentScores[index];
     var percentage = (score / totalMarks) * 100;
    
    document.write(`Score of ${name} is ${score}. Percentage: ${percentage.toFixed(2)}% <br>`);
 });
//  Question:no:09:
var colorNames = ['red','blue','green','white','yellow'];
document.write(colorNames);