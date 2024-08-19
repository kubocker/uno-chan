"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unocss_1 = require("unocss");
exports.default = (0, unocss_1.defineConfig)({
    presets: [(0, unocss_1.presetUno)()],
    rules: [
        // 流動的に反復回数と持続時間を指定できるアニメーションルール
        [
            /^animate-(\w+)-(\d+)-(\d+ms)$/,
            ([, anim, count, duration]) => ({
                animation: `${anim} ${duration} ease-in-out ${count}`,
            }),
        ],
    ],
    preflights: [
        {
            getCSS: ({ theme }) => `
        @keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }
        @keyframes fadeOut { 0% { opacity: 1; } 100% { opacity: 0; } }
        @keyframes slideIn { 0% { transform: translateX(-100%); } 100% { transform: translateX(0); } }
        @keyframes slideOut { 0% { transform: translateX(0); } 100% { transform: translateX(100%); } }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-25%); } }
        @keyframes wiggle { 0%, 100% { transform: rotate(-3deg); } 50% { transform: rotate(3deg); } }
        @keyframes shake { 0%, 100% { transform: translateX(0); } 25%, 75% { transform: translateX(-10px); } 50% { transform: translateX(10px); } }
        @keyframes zoomIn { 0% { transform: scale(0); } 100% { transform: scale(1); } }
        @keyframes zoomOut { 0% { transform: scale(1); } 100% { transform: scale(0); } }
        @keyframes rotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes flip { 0% { transform: rotateY(0deg); } 100% { transform: rotateY(180deg); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @keyframes flash { 0%, 100%, 50% { opacity: 1; } 25%, 75% { opacity: 0; } }
        @keyframes rubberBand { 0% { transform: scale(1); } 30% { transform: scale(1.25, 0.75); } 40% { transform: scale(0.75, 1.25); } 50% { transform: scale(1.15, 0.85); } 65% { transform: scale(0.95, 1.05); } 75% { transform: scale(1.05, 0.95); } 100% { transform: scale(1); } }
        @keyframes jello { 0%, 100% { transform: scale(1); } 30% { transform: scale(1.25, 0.75); } 40% { transform: scale(0.75, 1.25); } 50% { transform: scale(1.15, 0.85); } 65% { transform: scale(0.95, 1.05); } 75% { transform: scale(1.05, 0.95); } }
        @keyframes swing { 20% { transform: rotate(15deg); } 40% { transform: rotate(-10deg); } 60% { transform: rotate(5deg); } 80% { transform: rotate(-5deg); } 100% { transform: rotate(0deg); } }
        @keyframes hinge { 0% { transform: rotate(0deg); transform-origin: top left; opacity: 1; } 20%, 60% { transform: rotate(80deg); transform-origin: top left; opacity: 1; } 40%, 80% { transform: rotate(60deg); transform-origin: top left; opacity: 1; } 100% { transform: translateY(700px); opacity: 0; } }
        @keyframes tada { 0%, 100% { transform: scale(1); } 10%, 20% { transform: scale(0.9) rotate(-3deg); } 30%, 50%, 70%, 90% { transform: scale(1.1) rotate(3deg); } 40%, 60%, 80% { transform: scale(1.1) rotate(-3deg); } }
        @keyframes bounceIn { 0%, 100% { opacity: 0; transform: scale(0.3); } 50% { opacity: 1; transform: scale(1); } }
        @keyframes bounceOut { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0; transform: scale(0.3); } }
        @keyframes flipInX { 0% { transform: perspective(400px) rotateX(90deg); opacity: 0; } 100% { transform: perspective(400px) rotateX(0); opacity: 1; } }
        @keyframes flipOutX { 0% { transform: perspective(400px) rotateX(0); opacity: 1; } 100% { transform: perspective(400px) rotateX(90deg); opacity: 0; } }
        @keyframes flipInY { 0% { transform: perspective(400px) rotateY(90deg); opacity: 0; } 100% { transform: perspective(400px) rotateY(0); opacity: 1; } }
        @keyframes flipOutY { 0% { transform: perspective(400px) rotateY(0); opacity: 1; } 100% { transform: perspective(400px) rotateY(90deg); opacity: 0; } }
        @keyframes lightSpeedIn { 0% { transform: translateX(100%) skewX(-30deg); opacity: 0; } 100% { transform: translateX(0) skewX(0deg); opacity: 1; } }
        @keyframes lightSpeedOut { 0% { transform: translateX(0) skewX(0deg); opacity: 1; } 100% { transform: translateX(100%) skewX(-30deg); opacity: 0; } }
        @keyframes rollIn { 0% { opacity: 0; transform: translateX(-100%) rotate(-120deg); } 100% { opacity: 1; transform: translateX(0) rotate(0deg); } }
        @keyframes rollOut { 0% { opacity: 1; transform: translateX(0) rotate(0deg); } 100% { opacity: 0; transform: translateX(100%) rotate(120deg); } }
        @keyframes fadeInDown { 0% { opacity: 0; transform: translateY(-100%); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInUp { 0% { opacity: 0; transform: translateY(100%); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInLeft { 0% { opacity: 0; transform: translateX(-100%); } 100% { opacity: 1; transform: translateX(0); } }
        @keyframes fadeInRight { 0% { opacity: 0; transform: translateX(100%); } 100% { opacity: 1; transform: translateX(0); } }
        @keyframes fadeOutDown { 0% { opacity: 1; transform: translateY(0); } 100% { opacity: 0; transform: translateY(100%); } }
        @keyframes fadeOutUp { 0% { opacity: 1; transform: translateY(0); } 100% { opacity: 0; transform: translateY(-100%); } }
        @keyframes fadeOutLeft { 0% { opacity: 1; transform: translateX(0); } 100% { opacity: 0; transform: translateX(-100%); } }
        @keyframes fadeOutRight { 0% { opacity: 1; transform: translateX(0); } 100% { opacity: 0; transform: translateX(100%); } }
        @keyframes bounceInDown { 0%, 100% { opacity: 0; transform: translateY(-100%); } 50% { opacity: 1; transform: translateY(0); } }
        @keyframes bounceInUp { 0%, 100% { opacity: 0; transform: translateY(100%); } 50% { opacity: 1; transform: translateY(0); } }
        @keyframes bounceInLeft { 0%, 100% { opacity: 0; transform: translateX(-100%); } 50% { opacity: 1; transform: translateX(0); } }
        @keyframes bounceInRight { 0%, 100% { opacity: 0; transform: translateX(100%); } 50% { opacity: 1; transform: translateX(0); } }
        @keyframes bounceOutDown { 0%, 100% { opacity: 1; transform: translateY(0); } 50% { opacity: 0; transform: translateY(100%); } }
        @keyframes bounceOutUp { 0%, 100% { opacity: 1; transform: translateY(0); } 50% { opacity: 0; transform: translateY(-100%); } }
        @keyframes bounceOutLeft { 0%, 100% { opacity: 1; transform: translateX(0); } 50% { opacity: 0; transform: translateX(-100%); } }
        @keyframes bounceOutRight { 0%, 100% { opacity: 1; transform: translateX(0); } 50% { opacity: 0; transform: translateX(100%); } }
        @keyframes zoomInDown { 0% { opacity: 0; transform: scale(0.1) translateY(-100%); } 100% { opacity: 1; transform: scale(1) translateY(0); } }
        @keyframes zoomInUp { 0% { opacity: 0; transform: scale(0.1) translateY(100%); } 100% { opacity: 1; transform: scale(1) translateY(0); } }
        @keyframes zoomInLeft { 0% { opacity: 0; transform: scale(0.1) translateX(-100%); } 100% { opacity: 1; transform: scale(1) translateX(0); } }
        @keyframes zoomInRight { 0% { opacity: 0; transform: scale(0.1) translateX(100%); } 100% { opacity: 1; transform: scale(1) translateX(0); } }
        @keyframes zoomOutDown { 0% { opacity: 1; transform: scale(1) translateY(0); } 100% { opacity: 0; transform: scale(0.1) translateY(100%); } }
        @keyframes zoomOutUp { 0% { opacity: 1; transform: scale(1) translateY(0); } 100% { opacity: 0; transform: scale(0.1) translateY(-100%); } }
        @keyframes zoomOutLeft { 0% { opacity: 1; transform: scale(1) translateX(0); } 100% { opacity: 0; transform: scale(0.1) translateX(-100%); } }
        @keyframes zoomOutRight { 0% { opacity: 1; transform: scale(1) translateX(0); } 100% { opacity: 0; transform: scale(0.1) translateX(100%); } }
      `,
        },
    ],
});
