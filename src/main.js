import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
    $('#nameinput').click(function() {
     
      let name = $('#name').val();
  
      $.ajax({
        url: `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&user_key=${process.env.API_KEY}`,
        type: 'GET',
        data: {
          format: 'json'
        },
        success: function (response) {
          
          $(".result").empty();
            if(response.meta.count > 0){
            for (var i = 0; i < response.data.length; i++){
           $( ".result" ).append( $( "<h1 class='practice'></h1>" ) );
           $("h1").last().text(`New doctor ${i+1}`);
           $( ".result" ).append( $( "<div class='name'></div>" ) );
           $( ".result" ).append( $( "<div class='lastname'></div>" ) );
           $('.name').last().text(`the name is ${response.data[i].profile.first_name}`);
           $('.lastname').last().text(`the lastname is ${response.data[i].profile.last_name}`);
           for(var j = 0; j < response.data[i].practices.length; j++){
            $( ".result" ).append( $( "<h5 class='practice'></h5>" ) );
            $("h5").last().text(`practice ${j}`);
            $( ".result" ).append( $( "<div class='clients'></div>" ) );
            $('.clients').last().text(`the name is ${response.data[i].practices[j].accepts_new_patients}`);
            $( ".result" ).append( $( "<div class='address'></div>" ) );
            $( ".result" ).append( $( "<div class='website'></div>" ) );
            $('.clients').last().text(`the website is ${response.data[i].practices[j].website}`);
            $('.address').last().text(`the address is ${response.data[i].practices[j].visit_address.street} ${response.data[0].practices[0].visit_address.city} ${response.data[0].practices[0].visit_address.zip}`);
            for (var t = 0; t <response.data[0].practices[0].phones.length; t++ ){
              $( ".result" ).append( $( "<div class='phone'></div>" ) );
              $('.phone').last().text(`the phone number is ${response.data[i].practices[j].phones[t].number}`);
            }
          }
        }
      } else{
        $(".result").empty();
        $( ".result" ).append( $( "<h1 class='practice'></h1>" ) );
        $("h1").last().text(`no doctors available`);
      }

        },
        error: function(xhr) {
          console.log(xhr.responseText);
          $('.errors').text(`ajax issue`);

        }
      });
    });
    $('#probleminput').click(function() {
     
      let problem = $('#problem').val();
  
      $.ajax({
        url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${problem}&user_key=${process.env.API_KEY}`,
        type: 'GET',
        data: {
          format: 'json'
        },
        success: function (response) {
         
          $(".result").empty();
          if(response.meta.count > 0){
            for (var i = 0; i < response.data.length; i++){
           $( ".result" ).append( $( "<h1 class='practice'></h1>" ) );
           $("h1").last().text(`New doctor ${i+1}`);
           $( ".result" ).append( $( "<div class='name'></div>" ) );
           $( ".result" ).append( $( "<div class='lastname'></div>" ) );
           $('.name').last().text(`the name is ${response.data[i].profile.first_name}`);
           $('.lastname').last().text(`the lastname is ${response.data[i].profile.last_name}`);
           for(var j = 0; j < response.data[i].practices.length; j++){
            $( ".result" ).append( $( "<h5 class='practice'></h5>" ) );
            $("h5").last().text(`practice ${j}`);
            $( ".result" ).append( $( "<div class='clients'></div>" ) );
            $('.clients').last().text(`the name is ${response.data[i].practices[j].accepts_new_patients}`);
            $( ".result" ).append( $( "<div class='address'></div>" ) );
            $('.address').last().text(`the address is ${response.data[i].practices[j].visit_address.street} ${response.data[0].practices[0].visit_address.city} ${response.data[0].practices[0].visit_address.zip}`);
            $( ".result" ).append( $( "<div class='website'></div>" ) );
            $('.clients').last().text(`the website is ${response.data[i].practices[j].website}`);
            for (var t = 0; t <response.data[0].practices[0].phones.length; t++ ){
              $( ".result" ).append( $( "<div class='phone'></div>" ) );
              $('.phone').last().text(`the phone number is ${response.data[i].practices[j].phones[t].number}`);
            }
          }
        }
      }else{
        $(".result").empty();
        $( ".result" ).append( $( "<h1 class='practice'></h1>" ) );
        $("h1").last().text(`no doctors available`);
      }
        },
        error: function(xhr) {
          console.log(xhr.responseText);
          $('.errors').text(`ajax issue`);

        }
      });
    });
  });
