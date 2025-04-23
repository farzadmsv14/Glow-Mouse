import { Component, HostListener, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  ngOnInit() {
    const glowCursor = document.getElementById('glowCursor');
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    });

    function animate() {
      if (glowCursor) {
        glowCursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
      requestAnimationFrame(animate);
    }

    animate();
  }
}
