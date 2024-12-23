/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
  let str2 = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i - 1] === " " || str[i] === str[0]) {
      str2 += str[i].toUpperCase();
    } else str2 += str[i];
  }
  console.log(str2);

  return str2;
}
capitalizeWords("hello world from javascript");
