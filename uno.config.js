"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unocss_1 = require("unocss");
exports.default = (0, unocss_1.defineConfig)({
    presets: [(0, unocss_1.presetUno)()],
    theme: {
        extend: {
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeOut: {
                    '0%': { opacity: '1' },
                    '100%': { opacity: '0' },
                },
                slideIn: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                slideOut: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(100%)' },
                },
                bounce: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-25%)' },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                shake: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '25%, 75%': { transform: 'translateX(-10px)' },
                    '50%': { transform: 'translateX(10px)' },
                },
                zoomIn: {
                    '0%': { transform: 'scale(0)' },
                    '100%': { transform: 'scale(1)' },
                },
                zoomOut: {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(0)' },
                },
                rotate: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                spin: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                flip: {
                    '0%': { transform: 'rotateY(0deg)' },
                    '100%': { transform: 'rotateY(180deg)' },
                },
                pulse: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.05)' },
                },
                flash: {
                    '0%, 100%, 50%': { opacity: '1' },
                    '25%, 75%': { opacity: '0' },
                },
                rubberBand: {
                    '0%': { transform: 'scale(1)' },
                    '30%': { transform: 'scale(1.25, 0.75)' },
                    '40%': { transform: 'scale(0.75, 1.25)' },
                    '50%': { transform: 'scale(1.15, 0.85)' },
                    '65%': { transform: 'scale(0.95, 1.05)' },
                    '75%': { transform: 'scale(1.05, 0.95)' },
                    '100%': { transform: 'scale(1)' },
                },
                jello: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '30%': { transform: 'scale(1.25, 0.75)' },
                    '40%': { transform: 'scale(0.75, 1.25)' },
                    '50%': { transform: 'scale(1.15, 0.85)' },
                    '65%': { transform: 'scale(0.95, 1.05)' },
                    '75%': { transform: 'scale(1.05, 0.95)' },
                },
                swing: {
                    '20%': { transform: 'rotate(15deg)' },
                    '40%': { transform: 'rotate(-10deg)' },
                    '60%': { transform: 'rotate(5deg)' },
                    '80%': { transform: 'rotate(-5deg)' },
                    '100%': { transform: 'rotate(0deg)' },
                },
                hinge: {
                    '0%': { transform: 'rotate(0deg)', transformOrigin: 'top left', opacity: '1' },
                    '20%, 60%': { transform: 'rotate(80deg)', transformOrigin: 'top left', opacity: '1' },
                    '40%, 80%': { transform: 'rotate(60deg)', transformOrigin: 'top left', opacity: '1' },
                    '100%': { transform: 'translateY(700px)', opacity: '0' },
                },
                tada: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '10%, 20%': { transform: 'scale(0.9) rotate(-3deg)' },
                    '30%, 50%, 70%, 90%': { transform: 'scale(1.1) rotate(3deg)' },
                    '40%, 60%, 80%': { transform: 'scale(1.1) rotate(-3deg)' },
                },
                // 他のアニメーションも同様に追加します
            },
            animation: {
                fadeIn: 'fadeIn 1s ease-in-out',
                fadeOut: 'fadeOut 1s ease-in-out',
                slideIn: 'slideIn 0.5s ease-in-out',
                slideOut: 'slideOut 0.5s ease-in-out',
                bounce: 'bounce 1s infinite',
                wiggle: 'wiggle 1s ease-in-out',
                shake: 'shake 0.5s ease-in-out',
                zoomIn: 'zoomIn 0.5s ease-in-out',
                zoomOut: 'zoomOut 0.5s ease-in-out',
                rotate: 'rotate 2s linear infinite',
                spin: 'spin 1s linear infinite',
                flip: 'flip 0.6s ease-in-out',
                pulse: 'pulse 1s ease-in-out infinite',
                flash: 'flash 1s ease-in-out infinite',
                rubberBand: 'rubberBand 1s ease-in-out',
                jello: 'jello 1s ease-in-out',
                swing: 'swing 1s ease-in-out',
                hinge: 'hinge 2s ease-in-out',
                tada: 'tada 1s ease-in-out',
                // 他のアニメーションも同様に追加します
            },
        },
    },
});
