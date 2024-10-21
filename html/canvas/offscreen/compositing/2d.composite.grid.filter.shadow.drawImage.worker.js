// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.composite.grid.filter.shadow.drawImage
// Description:
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  ctx.filter = 'drop-shadow(5px -5px 0px rgb(255, 154, 0))'
  ctx.shadowOffsetX = 20;
  ctx.shadowOffsetY = 20;
  ctx.shadowColor = 'rgb(154, 0, 154)';

  ctx.globalCompositeOperation = 'source-over'

  const img_canvas = new OffscreenCanvas(80, 60);
  const img_ctx = img_canvas.getContext('2d');
  img_ctx.fillStyle = 'rgb(52, 255, 52)';
  img_ctx.fillRect(0, 0, 80, 60);
  ctx.drawImage(img_canvas, 5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  ctx.filter = 'drop-shadow(5px -5px 0px rgb(255, 154, 0))'
  ctx.shadowOffsetX = 20;
  ctx.shadowOffsetY = 20;
  ctx.shadowColor = 'rgb(154, 0, 154)';

  ctx.globalCompositeOperation = 'source-in'

  const img_canvas = new OffscreenCanvas(80, 60);
  const img_ctx = img_canvas.getContext('2d');
  img_ctx.fillStyle = 'rgb(52, 255, 52)';
  img_ctx.fillRect(0, 0, 80, 60);
  ctx.drawImage(img_canvas, 5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  ctx.filter = 'drop-shadow(5px -5px 0px rgb(255, 154, 0))'
  ctx.shadowOffsetX = 20;
  ctx.shadowOffsetY = 20;
  ctx.shadowColor = 'rgb(154, 0, 154)';

  ctx.globalCompositeOperation = 'source-out'

  const img_canvas = new OffscreenCanvas(80, 60);
  const img_ctx = img_canvas.getContext('2d');
  img_ctx.fillStyle = 'rgb(52, 255, 52)';
  img_ctx.fillRect(0, 0, 80, 60);
  ctx.drawImage(img_canvas, 5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  ctx.filter = 'drop-shadow(5px -5px 0px rgb(255, 154, 0))'
  ctx.shadowOffsetX = 20;
  ctx.shadowOffsetY = 20;
  ctx.shadowColor = 'rgb(154, 0, 154)';

  ctx.globalCompositeOperation = 'source-atop'

  const img_canvas = new OffscreenCanvas(80, 60);
  const img_ctx = img_canvas.getContext('2d');
  img_ctx.fillStyle = 'rgb(52, 255, 52)';
  img_ctx.fillRect(0, 0, 80, 60);
  ctx.drawImage(img_canvas, 5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  ctx.filter = 'drop-shadow(5px -5px 0px rgb(255, 154, 0))'
  ctx.shadowOffsetX = 20;
  ctx.shadowOffsetY = 20;
  ctx.shadowColor = 'rgb(154, 0, 154)';

  ctx.globalCompositeOperation = 'destination-over'

  const img_canvas = new OffscreenCanvas(80, 60);
  const img_ctx = img_canvas.getContext('2d');
  img_ctx.fillStyle = 'rgb(52, 255, 52)';
  img_ctx.fillRect(0, 0, 80, 60);
  ctx.drawImage(img_canvas, 5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  ctx.filter = 'drop-shadow(5px -5px 0px rgb(255, 154, 0))'
  ctx.shadowOffsetX = 20;
  ctx.shadowOffsetY = 20;
  ctx.shadowColor = 'rgb(154, 0, 154)';

  ctx.globalCompositeOperation = 'destination-in'

  const img_canvas = new OffscreenCanvas(80, 60);
  const img_ctx = img_canvas.getContext('2d');
  img_ctx.fillStyle = 'rgb(52, 255, 52)';
  img_ctx.fillRect(0, 0, 80, 60);
  ctx.drawImage(img_canvas, 5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  ctx.filter = 'drop-shadow(5px -5px 0px rgb(255, 154, 0))'
  ctx.shadowOffsetX = 20;
  ctx.shadowOffsetY = 20;
  ctx.shadowColor = 'rgb(154, 0, 154)';

  ctx.globalCompositeOperation = 'destination-out'

  const img_canvas = new OffscreenCanvas(80, 60);
  const img_ctx = img_canvas.getContext('2d');
  img_ctx.fillStyle = 'rgb(52, 255, 52)';
  img_ctx.fillRect(0, 0, 80, 60);
  ctx.drawImage(img_canvas, 5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  ctx.filter = 'drop-shadow(5px -5px 0px rgb(255, 154, 0))'
  ctx.shadowOffsetX = 20;
  ctx.shadowOffsetY = 20;
  ctx.shadowColor = 'rgb(154, 0, 154)';

  ctx.globalCompositeOperation = 'destination-atop'

  const img_canvas = new OffscreenCanvas(80, 60);
  const img_ctx = img_canvas.getContext('2d');
  img_ctx.fillStyle = 'rgb(52, 255, 52)';
  img_ctx.fillRect(0, 0, 80, 60);
  ctx.drawImage(img_canvas, 5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  ctx.filter = 'drop-shadow(5px -5px 0px rgb(255, 154, 0))'
  ctx.shadowOffsetX = 20;
  ctx.shadowOffsetY = 20;
  ctx.shadowColor = 'rgb(154, 0, 154)';

  ctx.globalCompositeOperation = 'lighter'

  const img_canvas = new OffscreenCanvas(80, 60);
  const img_ctx = img_canvas.getContext('2d');
  img_ctx.fillStyle = 'rgb(52, 255, 52)';
  img_ctx.fillRect(0, 0, 80, 60);
  ctx.drawImage(img_canvas, 5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  ctx.filter = 'drop-shadow(5px -5px 0px rgb(255, 154, 0))'
  ctx.shadowOffsetX = 20;
  ctx.shadowOffsetY = 20;
  ctx.shadowColor = 'rgb(154, 0, 154)';

  ctx.globalCompositeOperation = 'copy'

  const img_canvas = new OffscreenCanvas(80, 60);
  const img_ctx = img_canvas.getContext('2d');
  img_ctx.fillStyle = 'rgb(52, 255, 52)';
  img_ctx.fillRect(0, 0, 80, 60);
  ctx.drawImage(img_canvas, 5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  ctx.filter = 'drop-shadow(5px -5px 0px rgb(255, 154, 0))'
  ctx.shadowOffsetX = 20;
  ctx.shadowOffsetY = 20;
  ctx.shadowColor = 'rgb(154, 0, 154)';

  ctx.globalCompositeOperation = 'xor'

  const img_canvas = new OffscreenCanvas(80, 60);
  const img_ctx = img_canvas.getContext('2d');
  img_ctx.fillStyle = 'rgb(52, 255, 52)';
  img_ctx.fillRect(0, 0, 80, 60);
  ctx.drawImage(img_canvas, 5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  ctx.filter = 'drop-shadow(5px -5px 0px rgb(255, 154, 0))'
  ctx.shadowOffsetX = 20;
  ctx.shadowOffsetY = 20;
  ctx.shadowColor = 'rgb(154, 0, 154)';

  ctx.globalCompositeOperation = 'multiply'

  const img_canvas = new OffscreenCanvas(80, 60);
  const img_ctx = img_canvas.getContext('2d');
  img_ctx.fillStyle = 'rgb(52, 255, 52)';
  img_ctx.fillRect(0, 0, 80, 60);
  ctx.drawImage(img_canvas, 5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  ctx.filter = 'drop-shadow(5px -5px 0px rgb(255, 154, 0))'
  ctx.shadowOffsetX = 20;
  ctx.shadowOffsetY = 20;
  ctx.shadowColor = 'rgb(154, 0, 154)';

  ctx.globalCompositeOperation = 'screen'

  const img_canvas = new OffscreenCanvas(80, 60);
  const img_ctx = img_canvas.getContext('2d');
  img_ctx.fillStyle = 'rgb(52, 255, 52)';
  img_ctx.fillRect(0, 0, 80, 60);
  ctx.drawImage(img_canvas, 5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  ctx.filter = 'drop-shadow(5px -5px 0px rgb(255, 154, 0))'
  ctx.shadowOffsetX = 20;
  ctx.shadowOffsetY = 20;
  ctx.shadowColor = 'rgb(154, 0, 154)';

  ctx.globalCompositeOperation = 'overlay'

  const img_canvas = new OffscreenCanvas(80, 60);
  const img_ctx = img_canvas.getContext('2d');
  img_ctx.fillStyle = 'rgb(52, 255, 52)';
  img_ctx.fillRect(0, 0, 80, 60);
  ctx.drawImage(img_canvas, 5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  ctx.filter = 'drop-shadow(5px -5px 0px rgb(255, 154, 0))'
  ctx.shadowOffsetX = 20;
  ctx.shadowOffsetY = 20;
  ctx.shadowColor = 'rgb(154, 0, 154)';

  ctx.globalCompositeOperation = 'darken'

  const img_canvas = new OffscreenCanvas(80, 60);
  const img_ctx = img_canvas.getContext('2d');
  img_ctx.fillStyle = 'rgb(52, 255, 52)';
  img_ctx.fillRect(0, 0, 80, 60);
  ctx.drawImage(img_canvas, 5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  ctx.filter = 'drop-shadow(5px -5px 0px rgb(255, 154, 0))'
  ctx.shadowOffsetX = 20;
  ctx.shadowOffsetY = 20;
  ctx.shadowColor = 'rgb(154, 0, 154)';

  ctx.globalCompositeOperation = 'lighten'

  const img_canvas = new OffscreenCanvas(80, 60);
  const img_ctx = img_canvas.getContext('2d');
  img_ctx.fillStyle = 'rgb(52, 255, 52)';
  img_ctx.fillRect(0, 0, 80, 60);
  ctx.drawImage(img_canvas, 5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  ctx.filter = 'drop-shadow(5px -5px 0px rgb(255, 154, 0))'
  ctx.shadowOffsetX = 20;
  ctx.shadowOffsetY = 20;
  ctx.shadowColor = 'rgb(154, 0, 154)';

  ctx.globalCompositeOperation = 'color-dodge'

  const img_canvas = new OffscreenCanvas(80, 60);
  const img_ctx = img_canvas.getContext('2d');
  img_ctx.fillStyle = 'rgb(52, 255, 52)';
  img_ctx.fillRect(0, 0, 80, 60);
  ctx.drawImage(img_canvas, 5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  ctx.filter = 'drop-shadow(5px -5px 0px rgb(255, 154, 0))'
  ctx.shadowOffsetX = 20;
  ctx.shadowOffsetY = 20;
  ctx.shadowColor = 'rgb(154, 0, 154)';

  ctx.globalCompositeOperation = 'color-burn'

  const img_canvas = new OffscreenCanvas(80, 60);
  const img_ctx = img_canvas.getContext('2d');
  img_ctx.fillStyle = 'rgb(52, 255, 52)';
  img_ctx.fillRect(0, 0, 80, 60);
  ctx.drawImage(img_canvas, 5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  ctx.filter = 'drop-shadow(5px -5px 0px rgb(255, 154, 0))'
  ctx.shadowOffsetX = 20;
  ctx.shadowOffsetY = 20;
  ctx.shadowColor = 'rgb(154, 0, 154)';

  ctx.globalCompositeOperation = 'hard-light'

  const img_canvas = new OffscreenCanvas(80, 60);
  const img_ctx = img_canvas.getContext('2d');
  img_ctx.fillStyle = 'rgb(52, 255, 52)';
  img_ctx.fillRect(0, 0, 80, 60);
  ctx.drawImage(img_canvas, 5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  ctx.filter = 'drop-shadow(5px -5px 0px rgb(255, 154, 0))'
  ctx.shadowOffsetX = 20;
  ctx.shadowOffsetY = 20;
  ctx.shadowColor = 'rgb(154, 0, 154)';

  ctx.globalCompositeOperation = 'soft-light'

  const img_canvas = new OffscreenCanvas(80, 60);
  const img_ctx = img_canvas.getContext('2d');
  img_ctx.fillStyle = 'rgb(52, 255, 52)';
  img_ctx.fillRect(0, 0, 80, 60);
  ctx.drawImage(img_canvas, 5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  ctx.filter = 'drop-shadow(5px -5px 0px rgb(255, 154, 0))'
  ctx.shadowOffsetX = 20;
  ctx.shadowOffsetY = 20;
  ctx.shadowColor = 'rgb(154, 0, 154)';

  ctx.globalCompositeOperation = 'difference'

  const img_canvas = new OffscreenCanvas(80, 60);
  const img_ctx = img_canvas.getContext('2d');
  img_ctx.fillStyle = 'rgb(52, 255, 52)';
  img_ctx.fillRect(0, 0, 80, 60);
  ctx.drawImage(img_canvas, 5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  ctx.filter = 'drop-shadow(5px -5px 0px rgb(255, 154, 0))'
  ctx.shadowOffsetX = 20;
  ctx.shadowOffsetY = 20;
  ctx.shadowColor = 'rgb(154, 0, 154)';

  ctx.globalCompositeOperation = 'exclusion'

  const img_canvas = new OffscreenCanvas(80, 60);
  const img_ctx = img_canvas.getContext('2d');
  img_ctx.fillStyle = 'rgb(52, 255, 52)';
  img_ctx.fillRect(0, 0, 80, 60);
  ctx.drawImage(img_canvas, 5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  ctx.filter = 'drop-shadow(5px -5px 0px rgb(255, 154, 0))'
  ctx.shadowOffsetX = 20;
  ctx.shadowOffsetY = 20;
  ctx.shadowColor = 'rgb(154, 0, 154)';

  ctx.globalCompositeOperation = 'hue'

  const img_canvas = new OffscreenCanvas(80, 60);
  const img_ctx = img_canvas.getContext('2d');
  img_ctx.fillStyle = 'rgb(52, 255, 52)';
  img_ctx.fillRect(0, 0, 80, 60);
  ctx.drawImage(img_canvas, 5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  ctx.filter = 'drop-shadow(5px -5px 0px rgb(255, 154, 0))'
  ctx.shadowOffsetX = 20;
  ctx.shadowOffsetY = 20;
  ctx.shadowColor = 'rgb(154, 0, 154)';

  ctx.globalCompositeOperation = 'saturation'

  const img_canvas = new OffscreenCanvas(80, 60);
  const img_ctx = img_canvas.getContext('2d');
  img_ctx.fillStyle = 'rgb(52, 255, 52)';
  img_ctx.fillRect(0, 0, 80, 60);
  ctx.drawImage(img_canvas, 5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  ctx.filter = 'drop-shadow(5px -5px 0px rgb(255, 154, 0))'
  ctx.shadowOffsetX = 20;
  ctx.shadowOffsetY = 20;
  ctx.shadowColor = 'rgb(154, 0, 154)';

  ctx.globalCompositeOperation = 'color'

  const img_canvas = new OffscreenCanvas(80, 60);
  const img_ctx = img_canvas.getContext('2d');
  img_ctx.fillStyle = 'rgb(52, 255, 52)';
  img_ctx.fillRect(0, 0, 80, 60);
  ctx.drawImage(img_canvas, 5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  ctx.filter = 'drop-shadow(5px -5px 0px rgb(255, 154, 0))'
  ctx.shadowOffsetX = 20;
  ctx.shadowOffsetY = 20;
  ctx.shadowColor = 'rgb(154, 0, 154)';

  ctx.globalCompositeOperation = 'luminosity'

  const img_canvas = new OffscreenCanvas(80, 60);
  const img_ctx = img_canvas.getContext('2d');
  img_ctx.fillStyle = 'rgb(52, 255, 52)';
  img_ctx.fillRect(0, 0, 80, 60);
  ctx.drawImage(img_canvas, 5, 5, 50, 30);
}, "");

done();