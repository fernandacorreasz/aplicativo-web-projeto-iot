import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-info-dash',
  templateUrl: './info-dash.component.html',
  styleUrls: ['./info-dash.component.css']
})
export class InfoDashComponent implements OnInit {
  @ViewChild('pieChartCanvas', { static: true }) pieChartCanvas!: ElementRef;
  @ViewChild('barChartCanvas', { static: true }) barChartCanvas!: ElementRef;
  @ViewChild('monthlyDevicesChartCanvas', { static: true }) monthlyDevicesChartCanvas!: ElementRef;

  ngOnInit(): void {
    this.drawPieChart();
    this.drawBarChart();
    this.drawMonthlyDevicesChart();
  }

  drawPieChart() {
    const canvas: HTMLCanvasElement = this.pieChartCanvas.nativeElement;
    const context: CanvasRenderingContext2D = canvas.getContext('2d')!;

    const categories = ['vazia', 'cheia', 'media'];
    const data = [40, 30, 50];
    const colors = ['#7126E3', '#FF04E6', '#9F0000'];
    const total = data.reduce((acc, value) => acc + value, 0);
    let startAngle = 0;

    for (let i = 0; i < data.length; i++) {
      const sliceAngle = (2 * Math.PI * data[i]) / total;
      context.fillStyle = colors[i];
      context.beginPath();
      context.moveTo(canvas.width / 2, canvas.height / 2);
      context.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2, startAngle, startAngle + sliceAngle);
      context.closePath();
      context.fill();
      const midAngle = startAngle + sliceAngle / 2;
      const textX = canvas.width / 2 + (canvas.height / 2) * 0.7 * Math.cos(midAngle);
      const textY = canvas.height / 2 + (canvas.height / 2) * 0.7 * Math.sin(midAngle);
      context.fillStyle = '#fff';
      context.font = '12px Arial';
      context.textAlign = 'center';
      context.fillText(`${data[i]}%`, textX, textY);

      startAngle += sliceAngle;
    }
  }

  drawBarChart() {
    const canvas: HTMLCanvasElement = this.barChartCanvas.nativeElement;
    const context: CanvasRenderingContext2D = canvas.getContext('2d')!;

    const months =  ['2017', '2018', '2019', '2020', '2021', '2022', '2023'];
    const devicesRegistered = [50, 60, 70, 80, 90, 100, 110];
    const barWidth = 40;
    const barSpacing = 10;

    const canvasHeight = Math.max(...devicesRegistered) + 70;
    const canvasWidth = (barWidth + barSpacing) * months.length;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    for (let i = 0; i < months.length; i++) {
      const barHeight = (devicesRegistered[i] / Math.max(...devicesRegistered)) * (canvasHeight - 20);
      const x = (barWidth + barSpacing) * i;
      const y = canvasHeight - barHeight;

      context.fillStyle = '#56d8f5';
      context.fillRect(x, y, barWidth, barHeight);

      context.fillStyle = '#000';
      context.font = '12px Arial';
      context.textAlign = 'center';
      context.fillText(`${devicesRegistered[i]}`, x + barWidth / 2, y - 5);

      context.fillStyle = '#fff';
      context.font = '10px Arial';
      context.textAlign = 'center';
      context.fillText(months[i], x + barWidth / 2, canvasHeight - 5);
    }
  }

  drawMonthlyDevicesChart() {
    const canvas: HTMLCanvasElement = this.monthlyDevicesChartCanvas.nativeElement;
    const context: CanvasRenderingContext2D = canvas.getContext('2d')!;

    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago'];
    const devicesRegistered = [10, 20, 20, 40, 30, 40, 50, 70];

    const barWidth = 40;
    const barSpacing = 10;

    const canvasHeight = Math.max(...devicesRegistered) + 70;
    const canvasWidth = (barWidth + barSpacing) * months.length;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    for (let i = 0; i < months.length; i++) {
      const barHeight = (devicesRegistered[i] / Math.max(...devicesRegistered)) * (canvasHeight - 20);
      const x = (barWidth + barSpacing) * i;
      const y = canvasHeight - barHeight;

      context.fillStyle = '#ff6384';
      context.fillRect(x, y, barWidth, barHeight);

      context.fillStyle = '#000';
      context.font = '12px Arial';
      context.textAlign = 'center';
      context.fillText(`${devicesRegistered[i]}`, x + barWidth / 2, y - 5);

      context.fillStyle = '#fff';
      context.font = '10px Arial';
      context.textAlign = 'center';
      context.fillText(months[i], x + barWidth / 2, canvasHeight - 5);
    }
  }



}
