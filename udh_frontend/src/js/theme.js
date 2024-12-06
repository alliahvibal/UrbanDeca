import Pikaday from 'pikaday';
import 'pikaday/css/pikaday.css';

document.querySelectorAll(".datepicker").forEach(function (field) {
  var picker = new Pikaday({
    field: field,
  });
});
