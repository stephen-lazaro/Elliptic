//the page has only one svg element so select it
var svg = d3.select("svg");
 
 //here we create the x axis. this involves appending a line tag and then assigning it the right coordinates
var axisx = svg.append("line")
.attr({
  x1 : 0,
  y1 : 450, //this has to be generalized to scale with the size of svg display
  x2 : 600,
  y2 : 450,
  stroke : 'grey'
}
     );
 
 //here we do the same, but for the y axis
var axisy = svg.append("line")
.attr({
  x1 : 75, //this similarly has to be generalized to scale with the size of svg display
  y1 : 0,
  x2 : 75,
  y2 : 600,
  stroke : 'grey'
}
      );
 
 //this is some example data for a curve, in the future we'll just have a request that passes a similar array of points
var data = [
  [0,0,1],
  [0,5,1],
  [1,1,1],
  [1,4,1],
  [4,3,1],
  [4,2,1],
  [0,0,0]
  ];
 
 //here what i do is enter groups for the data
var group = svg.selectAll("g")
.data(data)
.enter()
.append('g');
 
 //we transform the groups in accordance with the actual value of the points
group.attr('transform' , function(d, i) {
  var x = 75*d[0] + 75; //this needs generalizing to scale with the size of svg display
  var y = 75*d[1] + 75; //same here obviously
  var z = d[2];
  if (z === 0){
      return 'translate('+[75,265]+')'; //here as well. All these hard coded constants are kinda garbage.
  }
  else {
    return 'translate('+[x,y]+')';
  }
}
            );
 
 //we append some circles, set them up. We make the fill depend on whether the point is at infinity or not i.e. if z==0
var circles = group.append("circle")
   .attr({
     cx : 0,
     cy : 0,
     r : 5,
     fill : function(d) {
       if (d[2]===0) {
         return 'black'
       }
       else {
         return 'coral'
       }
     },
     stroke : 'black',
     'stroke-width' : 1
   }
         )
 
 //This is the data for the labels. I am as yet undecided on how to implement it
var label_data = ['0', '1', '2', '3', '4']
