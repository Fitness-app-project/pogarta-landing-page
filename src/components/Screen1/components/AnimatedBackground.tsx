import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current as unknown as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    const particles: {
        update(): unknown; draw: () => void; 
}[] = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      x: number;
        y: number;
        size: number;
        weight: number;
      constructor(x: number, y: number, size: number, weight: number) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.weight = weight;
      }

    draw() {
        if (ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = '#D9B55E';
            ctx.fill();
        }
    }

    update() {
        this.size -= 0.05;
        if (this.size < 0) {
          this.x = (Math.random() * canvas.width) * 1.3;
          this.y = -2;
          this.size = Math.random() * 3 + 2;
          this.weight = Math.random() * 2 - 0.5;
        }
        this.y += this.weight;
        this.weight += 0.2;
      
        if (this.y > canvas.height - this.size) {
          this.weight *= -0.2;
        }
      }
    }

    for (let i = 0; i < 100; i++) {
      particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 5 + 2, Math.random() * 2 - 0.5));
    }

    function animateParticles() {
        if (ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            if (i === particles.length - 1) {
                requestAnimationFrame(animateParticles);
            }
        }
    }

    let animationFrameId: number;

    animateParticles();

    return () => {
        cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute w-full h-full" />;
};

export default AnimatedBackground;