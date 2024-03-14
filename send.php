<html>

<head>
  <title>Форма заявки с сайта</title>
</head>

<body>
  <?php
  //проверяем, существуют ли переменные в массиве POST
  if (!isset($_POST['question']) and !isset($_POST['contact']) and !isset($_POST['username']) and !isset($_POST['social'])) {
  ?> <form action="send.php" method="post">
      <input type="text" name="question" placeholder="Вопрос" required>
      <input type="text" name="contact" placeholder="Телефон или почта" required>
      <input type="text" name="username" placeholder="Имя пользователя" required>
      <input type="text" name="social" placeholder="Соц.сеть или мессенджер">
      <input type="submit" value="Отправить">
    </form> <?php
          } else {
            //показываем форму
            $question = $_POST['question'];
            $contact = $_POST['contact'];
            $username = $_POST['username'];
            $social = $_POST['social'];
            $question = htmlspecialchars($question);
            $contact = htmlspecialchars($contact);
            $username = htmlspecialchars($username);
            $social = htmlspecialchars($social);
            $question = urldecode($question);
            $contact = urldecode($contact);
            $username = urldecode($username);
            $social = urldecode($social);
            $question = trim($question);
            $contact = trim($contact);
            $username = trim($username);
            $social = trim($social);
            if (mail("@", "Заявка с сайта", "Вопрос: " . $question . ". Контакт: " . $contact . ". Имя: " . $username . ". Соц.сеть или мессенджер: " . $social)) {
              echo "Сообщение успешно отправлено на почту ";
            } else {
              echo "При отправке сообщения возникли ошибки";
            }
          }
            ?>
</body>

</html>