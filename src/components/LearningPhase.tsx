import { useLayoutEffect, useRef, useState } from 'react'
import { useInView, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const phases = [
  { number: '01', title: 'Basic Line Detection', icon: '🔍', color: 'green-500' },
  { number: '02', title: 'PID Control', icon: '⚙️', color: 'blue-500' },
  { number: '03', title: 'Obstacle Avoidance', icon: '🚧', color: 'purple-500' },
  { number: '04', title: 'Speed Optimization', icon: '⚡️', color: 'yellow-500' },
  { number: '05', title: 'Sensor Fusion', icon: '🔗', color: 'teal-500' },
  { number: '06', title: 'Advanced Pathfinding', icon: '🧭', color: 'pink-500' },
];

const phaseColors: Record<string, string> = {
  "green-500": "#22c55e",
  "blue-500": "#3b82f6",
  "purple-500": "#a78bfa",
  "yellow-500": "#eab308",
  "teal-500": "#14b8a6",
  "pink-500": "#ec4899",
};

function LearningPhase() {
  // Ƨ-curve path (reverse S, left to right)
  const sCurve = "M-70,0 C0,500 250,160 400,50 S600,440 980,360";
  const curveBox = { width: 900, height: 400 }; // SVG reference size

  const pathRef = useRef<SVGPathElement>(null);
  const [points, setPoints] = useState<{ x: number; y: number; angle: number }[]>([]);

  useLayoutEffect(() => {
    if (!pathRef.current) return;
    const pathEl = pathRef.current;
    const total = pathEl.getTotalLength();
    const margin = total * 0.04;
    const segment = (total - 2 * margin) / (phases.length - 1);
    const positions = phases.map((_, idx) => {
      const l = margin + segment * idx;
      const pt = pathEl.getPointAtLength(l);
      let t = 0.01;
      const prev = pathEl.getPointAtLength(Math.max(0, l - t * total));
      const next = pathEl.getPointAtLength(Math.min(total, l + t * total));
      const dx = next.x - prev.x;
      const dy = next.y - prev.y;
      const angle = Math.atan2(dy, dx) * 180 / Math.PI;
      return { x: pt.x, y: pt.y, angle };
    });
    setPoints(positions);
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  const calcResponsivePos = (
    pt: { x: number; y: number },
    containerW: number,
    containerH: number
  ) => {
    return {
      x: (pt.x / curveBox.width) * containerW,
      y: (pt.y / curveBox.height) * containerH,
    };
  };

  return (
    <section className="pt-10 pb-24 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-white mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Learning Phases
          </span>
        </h2>
        <p className="text-gray-400 mb-12">
          Progress through our structured phases, each building upon the previous one.
        </p>
        <div
          ref={containerRef}
          className="hidden md:block relative w-full max-w-5xl h-[55vw] min-h-[330px] max-h-[400px] mx-auto"
          style={{ aspectRatio: "900/400" }}
        >
          {/* SVG Path stays 100% of container size for responsiveness */}
          <motion.svg
            viewBox="0 0 900 400"
            className="w-full h-full absolute left-0 top-0"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          >
            <motion.path
              ref={pathRef}
              d={sCurve}
              fill="none"
              stroke="#4F46E5"
              strokeWidth={7}
              strokeLinecap="round"
            />
            {/* Dots and labels at phase points */}
            {points.map((pt, idx) => (
              <g key={idx}>
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={14}
                  fill="#fff"
                  stroke="#6366f1"
                  strokeWidth={4}
                  opacity={0.7}
                />
                <text
                  x={pt.x + 22}
                  y={pt.y + 6}
                  fontSize={18}
                  fill="#c7d2fe"
                  style={{ pointerEvents: "none", userSelect: "none" }}
                >
                  {`Phase ${phases[idx].number}`}
                </text>
              </g>
            ))}
          </motion.svg>
          {/* Cards: Responsive absolute placement + rotation + anim-on-scroll */}
          {points.map((pt, idx) => {
            const containerEl = containerRef.current;
            let cx = 0, cy = 0, angle = pt.angle;
            if (containerEl) {
              const { width, height } = containerEl.getBoundingClientRect();
              const res = calcResponsivePos(pt, width, height);
              cx = res.x;
              cy = res.y;
            } else {
              cx = pt.x;
              cy = pt.y;
            }
            return (
              <motion.div
                key={idx}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{
                  delay: 0.2 + idx * 0.18,
                  type: "spring",
                  stiffness: 340,
                  damping: 20,
                }}
                className="absolute w-48 z-10"
                style={{
                  left: cx - 96,
                  top: cy - 72,
                  transform: `rotate(${angle}deg)`,
                }}
              >
                <div
                  tabIndex={0}
                  className="bg-gray-900 border border-gray-700 rounded-xl p-4 shadow-2xl z-30 cursor-pointer transition-transform hover:scale-105 focus:scale-110 duration-200 group"
                >
                  <div className="flex items-center mb-2">
                    <div
                      style={{
                        backgroundColor: phaseColors[phases[idx].color],
                        color: "#fff",
                      }}
                      className="flex items-center justify-center w-10 h-10 rounded-full text-xl mr-3"
                    >
                      {phases[idx].icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">
                        Phase {phases[idx].number}
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {phases[idx].title}
                      </h3>
                    </div>
                  </div>
                  <Link
                    to={`/phases/phase-${idx + 1}`}
                    style={{
                      background: phaseColors[phases[idx].color],
                    }}
                    className="inline-flex items-center px-3 py-2 text-white rounded-md text-sm font-medium hover:scale-105 transition-transform duration-200"
                  >
                    Start
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

         {/* ── Mobile: simple vertical stack ───────────────────────────── */}
        <div className="block md:hidden space-y-6">
          {phases.map((phase, idx) => (
            <div
              key={idx}
              className="bg-gray-900 border border-gray-700 rounded-xl p-4 shadow-2xl cursor-pointer group hover:scale-105 focus:scale-110 transition-transform duration-200"
            >
              <div className="flex items-center mb-2">
                <div
                  style={{
                    backgroundColor: phaseColors[phase.color],
                    color: "#fff",
                  }}
                  className="flex items-center justify-center w-10 h-10 rounded-full text-xl mr-3"
                >
                  {phase.icon}
                </div>
                <div>
                  <div className="text-sm text-gray-400">
                    Phase {phase.number}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {phase.title}
                  </h3>
                </div>
              </div>
              
              <Link
                to={`/phases/phase-${idx + 1}`}
                style={{ background: phaseColors[phase.color] }}
                className="inline-flex items-center px-3 py-2 text-white rounded-md text-sm font-medium"
              >
                Start <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LearningPhase;