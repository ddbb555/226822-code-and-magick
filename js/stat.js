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

  var shadowRect = { top: 110, bottom: 20, left: 420, right: 270 };
  var windowRect = { top: 100, bottom: 10, left: 420, right: 270 };
  var windowStrokeRect = { top: 100, bottom: 10, left: 420, right: 270 };
  var youWonText = { text: 'Ура вы победили!', x: 120, y: 40 };
  var resultText = { text: 'Список результатов:', x: 120, y: 60 };

  
  ctx.fillStyle = FILL_OF_SHADOW;
  ctx.fillRect(shadowRect.top, shadowRect.bottom, shadowRect.left, shadowRect.right);
  ctx.fillStyle = FILL_OF_WINDOW;
  ctx.strokeRect(windowStrokeRect.top, windowStrokeRect.bottom, windowStrokeRect.left, windowStrokeRect.right);
  ctx.fillRect(windowRect.top, windowRect.bottom, windowRect.left, windowRect.right);
  ctx.fillStyle = FONT_COLOR;
  ctx.font = FONT_SIZE;
  ctx.fillText(youWonText.text, youWonText.x, youWonText.y);
  ctx.fillText(resultText.text, resultText.x, resultText.y);

  function getRandomBlueColor() {
   return ['rgba(0,0,', ((Math.random() * 5) * 50).toFixed(0), ',1)'].join('');
   }

  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i];
    var columnHeight = step * time;

    if (name === 'Вы') {
      ctx.fillStyle = COLOR_RED;
    } else {
      ctx.fillStyle = getRandomBlueColor();
    }

    ctx.fillRect(histoX + columnIndent * i, 100 + histoHeight - columnHeight, columnWidth, columnHeight);
    ctx.fillStyle = FONT_COLOR;
    ctx.fillText(name, histoX + columnIndent * i, 100 + histoHeight + 20);
    ctx.fillStyle = FONT_COLOR;
    ctx.fillText(Math.floor(time / 10), histoX + columnIndent * i, 90 + histoHeight - columnHeight);
  }
};