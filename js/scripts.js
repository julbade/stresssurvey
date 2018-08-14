$(document).ready(function(){
  $("form#stress_survey").submit(function(event){
    event.preventDefault();

    $("#work-responses").show();
    $("input:checkbox[name=work-stress]:checked").each(function(){
      var workStress = $(this).val();
      $('#work-responses').append(workStress + "<br>");
    });
    $("#health-responses").show();
    $("input:checkbox[name=health-stress]:checked").each(function(){
      var healthStress = $(this).val();
      $('#health-responses').append(healthStress + "<br>");
    });
    $("#coping-method").show();
    $("input:checkbox[name=coping-method]:checked").each(function(){
        var copingMethod = $(this).val();
        $('#coping-method').append(copingMethod + "<br>");
    });

    $("#stress_survey").hide();

  });
});
