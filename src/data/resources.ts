import { Resource } from '../types';

export const resources: Resource[] = [
  {
    id: 'arduino-line-following',
    title: 'Arduino Line Following Robot Tutorial',
    description: 'Comprehensive tutorial covering the basics of building a line following robot with Arduino.',
    url: 'https://github.com/arduino/line-following-robot',
    type: 'github',
    tags: ['arduino', 'tutorial', 'beginner', 'line-following'],
  },
  {
    id: 'pid-control-explained',
    title: 'PID Control Explained',
    description: 'Detailed explanation of PID control theory and implementation for robotics applications.',
    url: 'https://www.youtube.com/watch?v=4Y7zG48uHRo',
    type: 'youtube',
    tags: ['pid', 'control-theory', 'robotics'],
  },
  {
    id: 'sensor-calibration',
    title: 'IR Sensor Calibration Guide',
    description: 'Step-by-step guide for calibrating IR sensors for optimal line detection performance.',
    url: 'https://robotics.stackexchange.com/questions/1234/ir-sensor-calibration',
    type: 'article',
    tags: ['sensors', 'calibration', 'ir-sensors'],
  },
  {
    id: 'motor-control-library',
    title: 'Advanced Motor Control Library',
    description: 'Open-source library for precise motor control with encoder feedback and PID tuning.',
    url: 'https://github.com/robotics/motor-control-lib',
    type: 'github',
    tags: ['motors', 'library', 'control', 'encoders'],
  },
  {
    id: 'robotics-fundamentals',
    title: 'Robotics Fundamentals Course',
    description: 'Complete course covering robotics basics, sensors, actuators, and control systems.',
    url: 'https://docs.robotics.com/fundamentals',
    type: 'documentation',
    tags: ['course', 'fundamentals', 'learning'],
  },
  {
    id: 'obstacle-avoidance-algorithms',
    title: 'Obstacle Avoidance Algorithms',
    description: 'Collection of algorithms and techniques for robot obstacle avoidance and path planning.',
    url: 'https://www.youtube.com/watch?v=obstacle-avoidance',
    type: 'youtube',
    tags: ['algorithms', 'obstacle-avoidance', 'path-planning'],
  }
];