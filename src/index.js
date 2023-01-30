function times(n, fn, ...args) {
    const stack = [];
    for (let i = 0; i < n; i++) {
        stack.push(fn(...args));
    }
    return stack;
}

function generateStar(maxSize = 2.25, minSize = 0.25, maxVelocity = 0.2, width = window.innerWidth, height = window.innerHeight) {
    return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * maxSize + minSize,
        velocity: Math.random() * maxVelocity,
        opacity: 1,
    };
}

/**
 * Generate an array of stars
 * @param count - Number of stars to generate
 * @param maxSize - Maximum size of the stars
 * @param minSize - Minimum size of the stars
 * @param maxVelocity - Maximum velocity of the stars
 * @returns {*[]}
 */
export function generateStars(
    count,
    maxSize = 2.25,
    minSize = 0.25,
    maxVelocity = 0.2
) {
    return times(count, generateStar, maxSize, minSize, maxVelocity);
}

/**
 * Attach the starflies effect on the page
 * @param stars - Array of stars to render, a sensible defaults has been set. But you can use the helper function `generateStars` to generate your own stars. Example: [...generateStars(70)]
 * @param background - Background color of the sky, defaults to #1b1f33
 * @constructor
 */
export function starflies(
    stars = [
        ...generateStars(70),
        ...generateStars(100, 2, 0.1, 0.1),
        ...generateStars(400, 1, 0.1, 0.05),
    ],
    background = "#1b1f33"
) {
    const canvas = document.createElement("canvas");
    canvas.setAttribute("id", "starflies-canvas");
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "-1";
    canvas.style.pointerEvents = "none";
    canvas.style.width = "100%";
    canvas.style.height = "100%";

    document.body.appendChild(canvas);

    let width = window.innerWidth;
    let height = window.innerHeight;

    function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    window.addEventListener("resize", resizeCanvas, false);
    window.addEventListener("orientationchange", resizeCanvas, false);
    resizeCanvas();


    const ctx = canvas.getContext("2d");

    function update(n) {
        for (const star of stars) {
            star.x += star.velocity;
            star.y += star.velocity;
            star.opacity = Math.sin(n / 100 / star.size / 3) + 1;
            if (star.x > width + 100 && star.y > height + 100) {
                star.x = Math.random() * (-width / 2);
                star.y = Math.random() * (-height / 2);
            }
        }
    }

    function render(n) {
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, width, height);
        for (const star of stars) {
            ctx.fillStyle = `rgba(255,255,255,${star.opacity * 0.75})`;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2, false);
            ctx.closePath();
            ctx.fill();
        }
        update(n);
        requestAnimationFrame(render);
    }

    render();
}
