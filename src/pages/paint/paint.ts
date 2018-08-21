import { Component, ViewChild } from '@angular/core';
import { NavController, Content, Platform, normalizeURL } from 'ionic-angular';
import { File } from '@ionic-native/file';
// import { Storage } from '@ionic/storage'; 
// import { IonicStorageModule } from '@ionic/storage';

// const STORAGE_KEY = 'IMAGE_LIST';

@Component({
  selector: 'page-paint',
  templateUrl: 'paint.html'
})
export class PaintPage {
  selectedColor = 'red';
  colorList = [
    'green',
    'red',
    'blue',
    'pink',
    'orange',
    'yellow',
    'grey',
    'black',
    'lime'
  ];
  
  @ViewChild('imagesCanvas') canvas: any;
  canvasElement: any;
  saveX: number;
  saveY: number;
  storedImages = [];
  @ViewChild(Content) content: Content;
  @ViewChild('fixedContainer') fixedContainer: any ;
  
  constructor(public navCtrl: NavController, private plt: Platform, private file: File) { 

  }
  ionViewDidLoad() {
    this.canvasElement = this.canvas.nativeElement;
    this.canvasElement.width = this.plt.width() + '';
    this.canvasElement.height = 300;
  }
  
  startDraw(ev){
    var canvasPosition = this.canvasElement.getBoundingClientRect();
    this.saveX = ev.touches[0].pageX - canvasPosition.x;
    this.saveY = ev.touches[0].pageY - canvasPosition.y;
  }
  moved(ev){
    var canvasPosition = this.canvasElement.getBoundingClientRect();
    let currentX = ev.touches[0].pageX - canvasPosition.x;
    let currentY = ev.touches[0].pageY - canvasPosition.y;

    let ctx = this.canvasElement.getContext('2d');

    ctx.lineJoin = 'round';
    ctx.strokeStyle = this.selectedColor;
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(this.saveX, this.saveY);
    ctx.lineTo(currentX, currentY);
    ctx.closePath();
    ctx.stroke();
    this.saveX = currentX;
    this.saveY = currentY;
  }
  slctedColor(color) {
    this.selectedColor = color;
  }
  
  saveImage(){
    alert('save image');
    var dataUrl = this.canvasElement.toDataURL();
    console.log(dataUrl);

    let ctx = this.canvasElement.getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    this.getImage(name);

  }
  getImage(imageName){
    let path = this.file.dataDirectory + imageName;
    path = normalizeURL(path);
    return path;
  }

  b64toBlob(){

  }
  
}
