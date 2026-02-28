// Loader functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create loader HTML
    createLoader();
    
    // Initialize particles
    initParticles();
    
    // Hide loader after animation completes
    setTimeout(function() {
        hideLoader();
    }, 2500); // 2.5 seconds animation
});

function createLoader() {
    const loaderHTML = `
        <div class="loader-overlay" id="page-loader">
            <canvas id="particle-canvas"></canvas>
            <div class="loader-logo">ZOO<span>RLD</span></div>
            <div class="loader-spinner"></div>
            <div class="loader-text">Loading...</div>
            <div class="loader-progress">
                <div class="loader-progress-bar"></div>
            </div>
        </div>
    `;
    
    // Insert loader at the beginning of body
    document.body.insertAdjacentHTML('afterbegin', loaderHTML);
}

function hideLoader() {
    const loader = document.getElementById('page-loader');
    if (loader) {
        loader.classList.add('hidden');
        setTimeout(function() {
            loader.remove();
        }, 500);
    }
}

// Particle Animation
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Particle class
    class Particle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = (Math.random() - 0.5) * 2;
            this.speedY = (Math.random() - 0.5) * 2;
            this.color = this.getRandomColor();
            this.opacity = Math.random() * 0.5 + 0.3;
        }
        
        getRandomColor() {
            const colors = [
                '46, 204, 113',  // Green
                '26, 188, 156',  // Teal
                '39, 174, 96',   // Dark Green
                '241, 196, 15',  // Yellow
                '22, 160, 133'   // Green Sea
            ];
            return colors[Math.floor(Math.random() * colors.length)];
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Bounce off edges
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            
            // Wrap around
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
            ctx.fill();
            
            // Draw glow
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.color}, ${this.opacity * 0.3})`;
            ctx.fill();
        }
        
        connect(otherParticle) {
            const dx = this.x - otherParticle.x;
            const dy = this.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 120) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(46, 204, 113, ${0.15 * (1 - distance / 120)})`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.stroke();
            }
        }
    }
    
    // Create particles
    const particles = [];
    const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            
            // Connect particles
            for (let j = i + 1; j < particles.length; j++) {
                particles[i].connect(particles[j]);
            }
        }
        
        // Draw floating shapes
        drawFloatingShapes();
        
        requestAnimationFrame(animate);
    }
    
    // Floating shapes background
    let shapeCount = 0;
    const maxShapes = 5;
    const shapes = [];
    
    function drawFloatingShapes() {
        if (shapeCount < maxShapes && Math.random() < 0.02) {
            shapes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 80 + 20,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.1 + 0.05,
                sides: Math.floor(Math.random() * 4) + 3
            });
            shapeCount++;
        }
        
        for (let i = shapes.length - 1; i >= 0; i--) {
            const shape = shapes[i];
            shape.x += shape.speedX;
            shape.y += shape.speedY;
            
            if (shape.x < -100 || shape.x > canvas.width + 100 || 
                shape.y < -100 || shape.y > canvas.height + 100) {
                shapes.splice(i, 1);
                shapeCount--;
                continue;
            }
            
            ctx.beginPath();
            for (let j = 0; j < shape.sides; j++) {
                const angle = (j / shape.sides) * Math.PI * 2;
                const x = shape.x + Math.cos(angle) * shape.size;
                const y = shape.y + Math.sin(angle) * shape.size;
                if (j === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.strokeStyle = `rgba(46, 204, 113, ${shape.opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
        }
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    // Start animation
    animate();
}
