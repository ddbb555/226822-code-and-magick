'use strict';
window.renderStatistics = function (ctx, names, times) {

  
  var histoHeight = 150; // Высота гистрограммы
  var columnWidth = 40; // Ширина колонки
  var columnIndent = 90; // Отступ между колонок
  var histoX = 140; // Х гистрограммы
  var maxColumnHeight = Math.max.apply(null, times);
  var step = histoHeight / maxColumnHeight;



  var FILL_OF_SHADOW = 'rgba(0, 0, 0, 0.7)';
  var FILL_OF_WINDOW = 'rgba(256, 256, 256, 1.0)';
  var FONT_COLOR = '#000';
  var FONT_SIZE = '16px PT Mono';
  var COLOR_RED = 'rgba(255, 0, 0, 1)';
  var COLOR_RANDOM_BLUE = ['rgba(0,0,', ((Math.random() * 5) * 50).toFixed(0), ',1)'].join('');



  

  ctx.fillStyle = FILL_OF_SHADOW;
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = FILL_OF_WINDOW;
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = FONT_COLOR;
  ctx.font = FONT_SIZE;
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i];
    var columnHeight = step * time;

    if (name === 'Вы') {
      ctx.fillStyle = COLOR_RED;
    } else {
      ctx.fillStyle = COLOR_RANDOM_BLUE;
    }

    ctx.fillRect(histoX + columnIndent * i, 100 + histoHeight - columnHeight, columnWidth, columnHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(name, histoX + columnIndent * i, 100 + histoHeight + 20);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(time / 10), histoX + columnIndent * i, 90 + histoHeight - columnHeight);
  }
};