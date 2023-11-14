//Всплывающее окно:
$(function(){
   $('.popu').hide();
});

$(function(){
   $( ".x" ).on( "click", function() {
      $('.popu').hide();
   });
});

$(function(){
   $('.hed').on("click", function(){
    $('.popu').show();
   });
});

//Всплывающее окно:
$(function(){
   $('.popumail').hide();
});

$(function(){
   $( ".xx" ).on( "click", function() {
      $('.popumail').hide();
   });
});

$(function(){
   $('#bt1').on("click", function(){
      $('.popumail').show();});
   });

$(function(){
   $('#bt2').on("click", function(){
      var user_phone = $("#user_phone").val();
      var file = $("#file")[0].files[0];
      if (!user_phone || !file) {
         console.log("Введены не все данные");
         return;
      }
      else {$('.popumail').show();}
   });
});

// Отправка одного поля:
$(function() {
   $('.formm').submit(function(e) {
     e.preventDefault(); // Предотвращение отправки формы по умолчанию
     $.ajax({
       type: 'POST',
       url: 'PHPMailer/mail_1.php', // Ваш PHP-скрипт для отправки письма
       data: $(this).serialize(),
      //  success: function(response) {
      //    // Обработка успешной отправки
      //    alert('Письмо успешно отправлено!');
      //  },
      //  error: function(error) {
      //    // Обработка ошибки отправки
      //    alert('Ошибка при отправке письма: ' + error.responseText);
      //  }
     });
   });
 });

//Отправка поля + файлы:
 $(function() {
   $('.form').submit(function(e) {
      e.preventDefault(); // Предотвращение отправки формы по умолчанию
      var user_phone = $("#user_phone").val();
      var file = $("#file")[0].files[0];
      // Проверка наличия введенного email и выбранного файла
      if (!user_phone || !file) {
         alert("Введите телефон и выберите файл");
         return;
      }
      // Создаем объект FormData и добавляем в него текст и файл
      var formData = new FormData();
      formData.append("user_phone", user_phone);
      formData.append("file", file);
     $.ajax({
         type: 'POST',
         url: 'PHPMailer/mail.php', // Ваш PHP-скрипт для отправки письма
         data: formData,
         processData: false, // Не обрабатывать данные
         contentType: false, // Не устанавливать тип контента
         success: function(response) {
            // Обработка успешного ответа от сервера
            console.log("Данные успешно отправлены");
            console.log(response);
        },
        error: function() {
            // Обработка ошибки
            console.error("Произошла ошибка при отправке данных");
        }
     });
   });
 });