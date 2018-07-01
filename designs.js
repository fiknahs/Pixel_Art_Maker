$(function() {
    var grid = $("#pixelCanvas");
    var currentColor = "#000";
  
    $("#sizePicker").submit(function(e) {
      e.preventDefault();
      makeGrid();
    });
  
    $("#colorPicker").change(function() {
      currentColor = $(this).val();
    });
  
    grid.on("mousemove", "td", function(e) {
      if (e.buttons == 1) {
        $(this).css("background-color", currentColor);
      }
    });
  
    grid.on("click", "td", function(e) {
      $(this).css("background-color", currentColor);
    });

    function makeGrid() {
      var h = $("#inputHeight").val();
      var w = $("#inputWidth").val();
      grid.empty();
      for (x = 0; x <= h - 1; x++) {
        grid.append("<tr>");
        for (y = 0; y <= w - 1; y++) {
          $("tr:eq(" + x + ")").append("<td></td>");
        }
        grid.append("</tr>");
      }
    }
  });
  