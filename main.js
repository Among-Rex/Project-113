function preload() {
}

function setup() {
    canvas = createCanvas(640,480);
    
    canvas.position(387,400);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);
    let a = color(20, 50, 100);
    fill(a);
    noStroke();
    rect(540, 0, 100, 100, 20);

    let b = color(20, 50, 100);
    fill(b);
    noStroke();
    rect(0, 0, 100, 100, 20);

    let c = color(20, 50, 100);
    fill(c);
    noStroke();
    rect(0, 380, 100, 100, 20);

    let d = color(20, 50, 100);
    fill(d);
    noStroke();
    rect(540, 380, 100, 100, 20);

    let e = color(255, 255, 0);
    fill(e);
    noStroke();
    rect(100, 20, 440, 55);

    let f = color(255, 255, 0);
    fill(f);
    noStroke();
    rect(100, 400, 440, 55);

    let g = color(255, 255, 0);
    fill(g);
    noStroke();
    rect(25, 100, 50, 280);

    let h = color(255, 255, 0);
    fill(h);
    noStroke();
    rect(565, 100, 50, 280);
    
}

function takeSnapshot() {
    save('Taken_Image.png');
}