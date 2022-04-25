var hashtag = "";
var lines = 5;

for(j=0; j<=lines; j++){
  for(i=1; i<=j+1; i++){
  document.write("#");
  };
  document.write("<br/>")
};
for(j=0; j<=lines; j++){
  for(i=1; i<=lines-j-1; i++){
  document.write("#");
  };
  document.write("<br/>")
}
