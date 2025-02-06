import React, { useEffect, useRef } from "react";

class Particle {
  constructor(canvas, mousePos, sizeFactor, blurIntensity) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.mousePos = mousePos;
    this.sizeFactor = sizeFactor;
    this.blurIntensity = blurIntensity;
    this.reset(true);
    this.twinkle = Math.random() * 0.5 + 0.5;
  }

  reset(initial = false) {
    this.x = initial ? Math.random() * this.canvas.width : -50;
    this.y = initial ? Math.random() * this.canvas.height : Math.random() * this.canvas.height;
    this.velocity = {
      x: (Math.random() - 0.5) * 0.2,
      y: (Math.random() - 0.5) * 0.2,
    };
    this.radius = (Math.pow(Math.random(), 2) * 1.2 + 0.3) * this.sizeFactor;
    this.baseRadius = this.radius;
    this.proximity = 100;
    this.trail = [];
    this.trailLength = 5;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = `rgba(74, 222, 128, ${this.twinkle * 0.8})`;
    this.ctx.shadowColor = "rgba(74, 222, 128, 0.2)";
    this.ctx.shadowBlur = this.blurIntensity;
    this.ctx.fill();
  }

  update() {
    this.twinkle = Math.abs(Math.sin(Date.now() * 0.002)) * 0.5 + 0.5;
    const dx = this.mousePos.x - this.x;
    const dy = this.mousePos.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < this.proximity) {
      const angle = Math.atan2(dy, dx);
      const force = (this.proximity - distance) / this.proximity;
      this.velocity.x += Math.cos(angle) * force * 0.02;
      this.velocity.y += Math.sin(angle) * force * 0.02;
      this.radius = this.baseRadius + 0.5 * force;
    } else {
      this.radius = Math.max(this.baseRadius * 0.3, this.radius * 0.97);
    }

    this.x += this.velocity.x;
    this.y += this.velocity.y;

    if (this.x < -50 || this.x > this.canvas.width + 50) this.velocity.x *= -0.5;
    if (this.y < -50 || this.y > this.canvas.height + 50) this.velocity.y *= -0.5;

    this.draw();
  }
}

const DarkParticles = ({
  particleCount = 250,
  particleSize = 1,
  blurIntensity = 10,
  glowSize = 150,
}) => {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: -999, y: -999 });
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    particles.current = Array.from({ length: particleCount }, () => new Particle(canvas, mousePos.current, particleSize, blurIntensity));

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId;
    const animate = () => {
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw glowing blur effect following the mouse
      const gradient = ctx.createRadialGradient(
        mousePos.current.x,
        mousePos.current.y,
        0,
        mousePos.current.x,
        mousePos.current.y,
        glowSize
      );
      gradient.addColorStop(0, "rgba(74, 222, 128, 0.3)");
      gradient.addColorStop(1, "rgba(74, 222, 128, 0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(mousePos.current.x, mousePos.current.y, glowSize, 0, Math.PI * 2);
      ctx.fill();
      
      particles.current.forEach((particle) => particle.update());

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleCount, particleSize, blurIntensity, glowSize]);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />;
};

export default DarkParticles;
