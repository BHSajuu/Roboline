import { Phase } from '../types';

export const phases: Phase[] = [
  {
    id: 'phase-1',
    title: 'Basic Line Detection',
    summary: 'Implementing fundamental line detection using IR sensors and basic control algorithms.',
    problem: 'The robot needs to detect and follow a black line on a white surface. This requires understanding sensor readings and translating them into movement commands.',
    approach: 'We used an array of IR sensors to detect the line position and implemented a simple proportional control system to adjust motor speeds based on sensor readings.',
    hardware: ['Arduino Uno', 'IR Sensors (5x)', 'DC Motors', 'Motor Driver L298N', 'Chassis', 'Wheels'],
    software: ['Arduino IDE', 'Basic C++ programming'],
    codeSnippets: [
      {
        id: 'sensor-reading',
        title: 'Sensor Reading Function',
        language: 'cpp',
        code: `int readSensors() {
  int sensorValues[5];
  int position = 0;
  int sum = 0;
  int weightedSum = 0;
  
  for (int i = 0; i < 5; i++) {
    sensorValues[i] = analogRead(sensorPins[i]);
    if (sensorValues[i] > threshold) {
      weightedSum += i * 1000;
      sum++;
    }
  }
  
  if (sum > 0) {
    position = weightedSum / sum;
  }
  
  return position - 2000; // Center at 0
}`,
        description: 'Reads sensor values and calculates line position'
      },
      {
        id: 'motor-control',
        title: 'Motor Control Function',
        language: 'cpp',
        code: `void controlMotors(int error) {
  int correction = Kp * error;
  
  int leftSpeed = baseSpeed + correction;
  int rightSpeed = baseSpeed - correction;
  
  // Constrain speeds
  leftSpeed = constrain(leftSpeed, 0, 255);
  rightSpeed = constrain(rightSpeed, 0, 255);
  
  analogWrite(leftMotorPin, leftSpeed);
  analogWrite(rightMotorPin, rightSpeed);
}`,
        description: 'Controls motor speeds based on line position error'
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg',
      'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg'
    ],
    tags: ['sensors', 'basic-control', 'arduino', 'motors'],
    nextPhase: 'phase-2',
    createdAt: '2024-01-15'
  },
  {
    id: 'phase-2',
    title: 'PID Control Implementation',
    summary: 'Upgrading to PID control for smoother and more accurate line following performance.',
    problem: 'The basic proportional control from Phase 1 caused oscillations and overshooting. The robot needed smoother, more stable line following.',
    approach: 'Implemented a full PID (Proportional-Integral-Derivative) controller to minimize steady-state error and reduce oscillations while maintaining quick response.',
    hardware: ['Arduino Uno', 'IR Sensors (5x)', 'DC Motors', 'Motor Driver L298N', 'Encoder wheels'],
    software: ['Arduino IDE', 'PID Library', 'Serial Monitor for tuning'],
    codeSnippets: [
      {
        id: 'pid-controller',
        title: 'PID Controller Implementation',
        language: 'cpp',
        code: `class PIDController {
private:
  float kp, ki, kd;
  float previousError;
  float integral;
  
public:
  PIDController(float p, float i, float d) : kp(p), ki(i), kd(d) {
    previousError = 0;
    integral = 0;
  }
  
  float calculate(float error, float deltaTime) {
    integral += error * deltaTime;
    float derivative = (error - previousError) / deltaTime;
    
    float output = kp * error + ki * integral + kd * derivative;
    
    previousError = error;
    return output;
  }
};`,
        description: 'PID controller class for smooth line following'
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg',
      'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg'
    ],
    tags: ['pid-control', 'advanced-control', 'smooth-movement', 'tuning'],
    nextPhase: 'phase-3',
    createdAt: '2024-01-22'
  },
  {
    id: 'phase-3',
    title: 'Obstacle Detection & Avoidance',
    summary: 'Adding ultrasonic sensors and implementing obstacle avoidance while maintaining line following.',
    problem: 'The robot needs to detect obstacles in its path and navigate around them while returning to the line.',
    approach: 'Integrated ultrasonic sensors for distance measurement and developed a state machine to switch between line following and obstacle avoidance modes.',
    hardware: ['Arduino Uno', 'IR Sensors (5x)', 'Ultrasonic Sensor HC-SR04', 'Servo Motor', 'DC Motors', 'Motor Driver'],
    software: ['Arduino IDE', 'NewPing Library', 'State Machine Implementation'],
    codeSnippets: [
      {
        id: 'obstacle-detection',
        title: 'Obstacle Detection',
        language: 'cpp',
        code: `bool detectObstacle() {
  long duration, distance;
  
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  duration = pulseIn(echoPin, HIGH);
  distance = (duration * 0.034) / 2;
  
  return distance < obstacleThreshold;
}`,
        description: 'Detects obstacles using ultrasonic sensor'
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg'
    ],
    tags: ['obstacle-avoidance', 'ultrasonic', 'state-machine', 'navigation'],
    createdAt: '2024-01-29'
  }
];