var stressLevel = 0;

$(document).ready(function(){
  $("form#stress_survey").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=work-stress]:checked").each(function(){
      stressLevel++;
    });

    $("input:checkbox[name=health-stress]:checked").each(function(){
      stressLevel++;
    });

    $("input:checkbox[name=coping-method]:checked").each(function(){
      stressLevel--;
    });

    if (stressLevel === 0) {
      alert("You are not stressed");
    } else if (stressLevel > 0 && stressLevel <= 5 ) {
      alert("You're not that stressed, quit bitching");
    } else if (stressLevel > 5 && stressLevel <= 9) {
      alert("You're kinda stressed. Keep doing those coping methods");
    }


  });
});
