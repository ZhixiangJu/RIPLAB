window.COURSE_DATA = {
  "course": {
    "title": "AI-Enabled Control Engineering",
    "program": "GLOBEX Summer Program",
    "institution": "College of Engineering, Peking University",
    "instructor": "Xun Huang",
    "teachingAssistants": [
      "Zhixiang Ju",
      "Haozhe Wang"
    ],
    "theme": "From model-based optimal control to reinforcement learning on a physical rotary inverted pendulum.",
    "hardware": [
      "Rotary inverted pendulum",
      "STM32F446RE",
      "TB6612FNG motor driver",
      "Potentiometer",
      "Incremental encoder",
      "DC motor"
    ],
    "algorithms": [
      "System modeling",
      "LQR",
      "MPC",
      "Luenberger observer",
      "Kalman observer",
      "DQN",
      "PPO",
      "TD3",
      "Hybrid control",
      "Residual adaptation"
    ]
  },
  "lectures": [
    {
      "no": 1,
      "title": "Course Overview and Control Fundamentals",
      "focus": "Course organization, control engineering background, feedback concepts, and the role of AI-enabled control.",
      "topics": [
        "Motivation for control engineering and AI-enabled control",
        "Open-loop and closed-loop systems",
        "Basic feedback concepts and performance requirements",
        "Overview of the course project and rotary inverted pendulum platform"
      ],
      "lab": "Understand the course workflow, software tools, and final project expectations.",
      "id": "lecture-01",
      "pdf": "downloads/slides/Lecture01_Course_Overview_and_Control_Fundamentals.pdf"
    },
    {
      "no": 2,
      "title": "Linear Dynamical Systems and Transfer Functions",
      "focus": "Linear system modeling, differential equations, transfer functions, and time-domain responses.",
      "topics": [
        "Linear time-invariant system models",
        "Transfer functions and block diagrams",
        "Step response, impulse response, poles, and zeros",
        "Basic simulation and response interpretation"
      ],
      "lab": "Build simple transfer-function simulations and interpret system responses.",
      "id": "lecture-02",
      "pdf": "downloads/slides/Lecture02_Linear_Dynamical_Systems_and_Transfer_Functions.pdf"
    },
    {
      "no": 3,
      "title": "Closed-Loop Stability and Root Locus",
      "focus": "Closed-loop feedback, stability criteria, root-locus intuition, and controller tuning.",
      "topics": [
        "Closed-loop characteristic equations",
        "Stability and pole locations",
        "Root-locus interpretation",
        "Controller gain effects on transient behavior"
      ],
      "lab": "Analyze closed-loop stability and tune simple feedback controllers.",
      "id": "lecture-03",
      "pdf": "downloads/slides/Lecture03_Closed_Loop_Stability_and_Root_Locus.pdf"
    },
    {
      "no": 4,
      "title": "Frequency Response, State Space, and RL Introduction",
      "focus": "Frequency-domain analysis, state-space models, and the conceptual introduction to reinforcement learning.",
      "topics": [
        "Frequency response and Bode-plot interpretation",
        "State variables and state-space representation",
        "From classical control to state feedback",
        "Basic reinforcement learning concepts"
      ],
      "lab": "Connect transfer-function and state-space viewpoints through examples.",
      "id": "lecture-04",
      "pdf": "downloads/slides/Lecture04_Frequency_Response_State_Space_and_RL_Introduction.pdf"
    },
    {
      "no": 5,
      "title": "CartPole Reinforcement Learning and DQN Practice",
      "focus": "CartPole as a benchmark system, reinforcement learning workflow, and DQN implementation practice.",
      "topics": [
        "CartPole dynamics and observation/action spaces",
        "Markov decision process formulation",
        "Deep Q-Network algorithm",
        "Training curves, reward design, and evaluation"
      ],
      "lab": "Run DQN training and evaluate a CartPole control policy.",
      "id": "lecture-05",
      "pdf": "downloads/slides/Lecture05_CartPole_RL_and_DQN_Practice.pdf"
    },
    {
      "no": 6,
      "title": "Drone Hardware and Control",
      "focus": "Drone hardware architecture, onboard sensing, actuation, flight-control loops, and the relationship between embedded control and autonomous aerial systems.",
      "topics": [
        "Drone platform structure, propulsion, ESCs, battery, and flight controller",
        "IMU, attitude estimation, and sensor feedback for flight stabilization",
        "Cascaded control loops for attitude, angular rate, altitude, and position",
        "Safety checks, calibration, and experimental workflow for drone control"
      ],
      "lab": "Identify the drone hardware modules, understand the signal flow from sensors to control outputs, and analyze the basic flight-control architecture.",
      "id": "lecture-06"
    },
    {
      "no": 7,
      "title": "RIP Hardware Introduction and Dynamic Analysis",
      "focus": "Rotary inverted pendulum hardware, sensing and actuation modules, state variables, nonlinear dynamics, and linearized modeling for controller design.",
      "topics": [
        "RIP mechanical structure, rotary arm, pendulum link, DC motor, and driver",
        "Potentiometer and encoder signals for angle measurement",
        "State definition and nonlinear dynamic analysis",
        "Linearization around the upright equilibrium and state-space model preparation"
      ],
      "lab": "Inspect the RIP hardware platform, identify sensor and actuator connections, derive the main state variables, and connect the physical system to its dynamic model.",
      "id": "lecture-07",
      "pdf": "downloads/slides/Lecture07_RIP_Modeling_Hardware_and_STM32_Setup.pdf"
    },
    {
      "no": 8,
      "title": "Hardware Assembly, Sensor Test, and Bellman Bridge",
      "focus": "Wiring, sensor testing, motor testing, and the conceptual bridge from Bellman optimality to control algorithms.",
      "topics": [
        "PC--STM32--TB6612--motor--sensor wiring",
        "Potentiometer and encoder signal tests",
        "Motor driver and PWM command test",
        "Bellman principle, HJB, LQR, MPC, and RL connections"
      ],
      "lab": "Run sensor and motor tests and collect calibrated experimental data.",
      "id": "lecture-08",
      "pdf": "downloads/slides/Lecture08_Hardware_Assembly_Sensor_Test_and_Bellman_Bridge.pdf"
    },
    {
      "no": 9,
      "title": "Optimal Control Experiments on RIP",
      "focus": "LQR and MPC controller design, implementation, and comparison on the rotary inverted pendulum.",
      "topics": [
        "State feedback and LQR design",
        "MPC prediction model and constraints",
        "Velocity estimation and filtering",
        "Hardware experiment logging and comparison"
      ],
      "lab": "Run LQR and MPC experiments and compare time-domain responses.",
      "id": "lecture-09",
      "pdf": "downloads/slides/Lecture09_Optimal_Control_Experiments_on_RIP.pdf"
    },
    {
      "no": 10,
      "title": "State Observers for RIP Control",
      "focus": "Observer design for estimating unmeasured states and improving RIP control performance.",
      "topics": [
        "Measured and estimated states",
        "Luenberger observer",
        "Kalman observer",
        "Observer-based LQR and MPC experiments"
      ],
      "lab": "Compare direct numerical derivatives with observer-estimated states.",
      "id": "lecture-10",
      "pdf": "downloads/slides/Lecture10_State_Observers_for_RIP_Control.pdf"
    },
    {
      "no": 11,
      "title": "DQN, PPO, and TD3 RIP Simulation Training",
      "focus": "Reinforcement learning algorithms and simulation training for the rotary inverted pendulum.",
      "topics": [
        "DQN, PPO, and TD3 algorithm overview",
        "Custom RIP simulation environment",
        "Training scripts and hyperparameters",
        "Policy evaluation and result visualization"
      ],
      "lab": "Train and evaluate RL policies in simulation.",
      "id": "lecture-11",
      "pdf": "downloads/slides/Lecture11_DQN_PPO_TD3_RIP_Simulation_Training.pdf"
    },
    {
      "no": 12,
      "title": "RL Sim-to-Real Deployment",
      "focus": "Deploying trained reinforcement learning policies from simulation to the physical RIP platform.",
      "topics": [
        "Policy export and embedded deployment",
        "STM32 firmware integration",
        "Hardware safety checks",
        "Simulation-to-hardware mismatch diagnosis"
      ],
      "lab": "Deploy trained policies and record sim-to-real experimental data.",
      "id": "lecture-12",
      "pdf": "downloads/slides/Lecture12_RL_Sim_to_Real_Deployment.pdf"
    },
    {
      "no": 13,
      "title": "Hybrid Control, Sim-to-Real Improvement, and Final Demo",
      "focus": "Hybrid model-based and learning-based control, residual correction, robustness improvement, and final demonstration.",
      "topics": [
        "Hybrid control architecture",
        "Model-based controller and RL policy comparison",
        "Residual correction and robustness improvement",
        "Final demonstration and report expectations"
      ],
      "lab": "Complete the final demonstration and compare control strategies.",
      "id": "lecture-13",
      "pdf": "downloads/slides/Lecture13_Hybrid_Control_Sim_to_Real_Improvement_and_Final_Demo.pdf"
    },
    {
      "no": 14,
      "title": "Reserved Session",
      "focus": "This session is reserved for later release.",
      "topics": [
        "Additional experiment or project discussion",
        "To be announced"
      ],
      "lab": "Reserved for later release.",
      "id": "lecture-14"
    },
    {
      "no": 15,
      "title": "Reserved Session",
      "focus": "This session is reserved for later release.",
      "topics": [
        "Final extension or presentation session",
        "To be announced"
      ],
      "lab": "Reserved for later release.",
      "id": "lecture-15"
    }
  ],
  "codePackages": [
    {
      "classNo": 5,
      "title": "CartPole DQN Practice Code",
      "description": "Python code for CartPole reinforcement learning practice using DQN.",
      "tags": [
        "CartPole",
        "DQN",
        "Python",
        "RL"
      ],
      "file": "downloads/code/Lecture05_CartPole_DQN_Practice_Code.zip",
      "size": 3672
    },
    {
      "classNo": 8,
      "title": "Sensor and Motor Test Code",
      "description": "STM32 firmware and Python logging scripts for potentiometer, encoder, and motor driver tests.",
      "tags": [
        "STM32",
        "Sensors",
        "Motor test",
        "Python"
      ],
      "file": "downloads/code/Lecture08_Sensor_and_Motor_Test_Code.zip",
      "size": 11815
    },
    {
      "classNo": 9,
      "title": "LQR and MPC Control Code",
      "description": "Controller design scripts, embedded firmware, and logging tools for LQR and MPC experiments.",
      "tags": [
        "LQR",
        "MPC",
        "STM32",
        "Python"
      ],
      "file": "downloads/code/Lecture09_LQR_and_MPC_Control_Code.zip",
      "size": 12898
    },
    {
      "classNo": 10,
      "title": "Observer-Based Control Code",
      "description": "Luenberger and Kalman observer scripts plus observer-based control experiment code.",
      "tags": [
        "Observer",
        "Kalman",
        "Luenberger",
        "Control"
      ],
      "file": "downloads/code/Lecture10_Observer_Based_Control_Code.zip",
      "size": 28066
    },
    {
      "classNo": 11,
      "title": "RL Simulation Training Code",
      "description": "Simulation environments, training scripts, and evaluation tools for DQN, PPO, and TD3.",
      "tags": [
        "DQN",
        "PPO",
        "TD3",
        "Simulation"
      ],
      "file": "downloads/code/Lecture11_RL_Simulation_Training_Code.zip",
      "size": 64727
    },
    {
      "classNo": 12,
      "title": "RL Sim-to-Real Deployment Code",
      "description": "Deployment firmware and PC-side logging tools for transferring RL policies to the physical RIP platform.",
      "tags": [
        "Deployment",
        "STM32",
        "RL",
        "Sim-to-real"
      ],
      "file": "downloads/code/Lecture12_RL_Sim_to_Real_Deployment_Code.zip",
      "size": 30890
    },
    {
      "classNo": "Optional",
      "title": "ROS2 RIP Workspace",
      "description": "Source workspace for the optional ROS2-based rotary inverted pendulum platform, including interfaces, serial bridge, manager, visualizer, and launch package.",
      "file": "downloads/code/rip_ros2_ws_source.zip",
      "size": 303528,
      "tags": [
        "ROS2",
        "RIP",
        "Serial bridge",
        "Visualizer"
      ]
    }
  ],
  "tasks": [
    {
      "classNo": 5,
      "title": "CartPole DQN Practice",
      "deliverable": "Training log and evaluation plot.",
      "emphasis": "Reward design, convergence behavior, and reproducibility."
    },
    {
      "classNo": 6,
      "title": "Drone Hardware and Control Lab",
      "deliverable": "A short hardware-control worksheet describing the drone modules, sensing signals, actuation path, and basic control-loop hierarchy.",
      "emphasis": "Hardware architecture, IMU feedback, flight-control loops, calibration, and experimental safety."
    },
    {
      "classNo": 7,
      "title": "RIP Hardware and Dynamic Analysis Lab",
      "deliverable": "A hardware inspection record and a concise dynamic-analysis note including state variables, sensor mappings, and the linearized model structure.",
      "emphasis": "RIP hardware modules, angle sensing, actuation, nonlinear dynamics, and linearization for control design."
    },
    {
      "classNo": 8,
      "title": "Sensor and Motor Test",
      "deliverable": "Calibration constants, sensor logs, and motor-test observations.",
      "emphasis": "Correct wiring, stable serial communication, and safe power-on procedure."
    },
    {
      "classNo": 9,
      "title": "LQR/MPC Experiment Comparison",
      "deliverable": "Time-response plots and a short comparison report.",
      "emphasis": "Controller tuning, constraints, PWM saturation, and hardware behavior."
    },
    {
      "classNo": 10,
      "title": "Observer-Based Control Study",
      "deliverable": "Comparison of raw derivative estimates and observer-estimated states.",
      "emphasis": "Noise sensitivity, observer tuning, and closed-loop response."
    },
    {
      "classNo": 11,
      "title": "RL Simulation Training",
      "deliverable": "Training curves and evaluation results for at least one RL algorithm.",
      "emphasis": "Hyperparameters, reward shaping, and policy evaluation."
    },
    {
      "classNo": 12,
      "title": "RL Sim-to-Real Deployment",
      "deliverable": "Hardware deployment logs and sim-to-real comparison.",
      "emphasis": "Calibration, mismatch diagnosis, and safety constraints."
    },
    {
      "classNo": 13,
      "title": "Final Hybrid Control Demonstration",
      "deliverable": "Final demo result and comparison of control strategies.",
      "emphasis": "Robustness, switching logic, and quantitative performance."
    }
  ]
};
