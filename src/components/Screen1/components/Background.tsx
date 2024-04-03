import React, { useRef, useEffect, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  image: HTMLImageElement;
}

const AnimatedLogoBackground: React.FC<{ width: number; height: number }> = ({ width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles: Particle[] = [];
    const updateParticles = () => {
    particles.forEach(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      if (particle.x < 0 || particle.x > width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > height) particle.vy *= -1;
    });
  };

  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(particle => {
      ctx.drawImage(particle.image, particle.x, particle.y, particle.size, particle.size);
    });
  };

  const animate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (ctx) {
      updateParticles();
      drawParticles(ctx);
    }
    requestAnimationFrame(animate);
  };

  const handleMouseMove = useCallback((event: MouseEvent) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      particles.forEach(particle => {
        const dx = particle.x - mouseX;
        const dy = particle.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 50) {
          particle.vx = dx / distance * 0.5; 
          particle.vy = dy / distance * 0.5; 
        }
      });
    }
  }, []);

  useEffect(() => {
    const image = new Image();
    image.src = '/pogartaLogoSquare.png'; 
    image.onload = () => {
      for (let i = 0; i < 1000; i++) { 
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: 10, 
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          image: image,
        });
      }
      animate();
    };

    const canvas = canvasRef.current;
    canvas?.addEventListener('mousemove', handleMouseMove);

    return () => {
      canvas?.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove, width, height]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default AnimatedLogoBackground;
