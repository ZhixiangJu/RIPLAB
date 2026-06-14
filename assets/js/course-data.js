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
      "no": 6,
      "id": "lecture-06",
      "title": "Hardware Introduction and RIP Modeling",
      "focus": "Rotary inverted pendulum hardware, sensing, actuation, state variables, nonlinear dynamics, linearization, and STM32 setup.",
      "topics": [
        "From CartPole to real rotary inverted pendulum hardware",
        "STM32F446RE, TB6612FNG, potentiometer, encoder, and DC motor",
        "Encoder pulse counting and potentiometer angle conversion",
        "Lagrange modeling, linearization, and PWM-input state-space model"
      ],
      "lab": "Board setup, firmware upload, serial monitor test, and hardware debugging checklist.",
      "pdf": "downloads/slides/Lecture06_Hardware_Introduction_and_RIP_Modeling.pdf",
      "tex": "downloads/sources/Lecture06_Hardware_Introduction_and_RIP_Modeling_source.tex"
    },
    {
      "no": 7,
      "id": "lecture-07",
      "title": "Hardware Assembly, Sensor Test, and Bellman-to-Control Bridge",
      "focus": "Physical wiring, power safety, sensor logging, motor test, and the conceptual path from Bellman optimality to HJB, LQR, MPC, and RL.",
      "topics": [
        "PC--STM32--TB6612--motor--sensor wiring",
        "DC power jack pins and TA power-on check",
        "Sensor calibration and Python serial logging",
        "Bellman principle, HJB equation, LQR, MPC, and Q-functions"
      ],
      "lab": "Run sensor logger and motor test packages; collect calibrated angle data.",
      "pdf": "downloads/slides/Lecture07_Hardware_Assembly_Sensor_Test_and_Bellman_to_Control_Bridge.pdf",
      "tex": "downloads/sources/Lecture07_Hardware_Assembly_Sensor_Test_and_Bellman_to_Control_Bridge_source.tex"
    },
    {
      "no": 8,
      "id": "lecture-08",
      "title": "LQR and MPC Control Practice",
      "focus": "Sampled-data model, velocity estimation, low-pass filtering, discrete LQR design, and constrained MPC implementation on STM32.",
      "topics": [
        "Zero-order-hold discretization",
        "Angular velocity estimation and low-pass filtering",
        "Discrete Riccati equation and LQR gain computation",
        "MPC prediction model, quadratic cost, input constraint, and projected-gradient solver"
      ],
      "lab": "Run LQR and MPC experiments, collect logs, and compare time responses.",
      "pdf": "downloads/slides/Lecture08_LQR_and_MPC_Control_Practice.pdf",
      "tex": "downloads/sources/Lecture08_LQR_and_MPC_Control_Practice_source.tex"
    },
    {
      "no": 9,
      "id": "lecture-09",
      "title": "Observer Design for LQR and MPC",
      "focus": "State estimation for the RIP using Luenberger and Kalman observers, with observer-based LQR/MPC hardware experiments.",
      "topics": [
        "Measured outputs and observer states",
        "Luenberger observer poles and error dynamics",
        "Steady-state Kalman observer and noise tuning",
        "LQR/MPC observer experiment strategy"
      ],
      "lab": "Compare direct angle-difference velocities with observer-estimated states.",
      "pdf": "downloads/slides/Lecture09_Observer_Design_for_LQR_and_MPC.pdf",
      "tex": "downloads/sources/Lecture09_Observer_Design_for_LQR_and_MPC_source.tex"
    },
    {
      "no": 10,
      "id": "lecture-10",
      "title": "Reinforcement Learning for RIP Simulation",
      "focus": "DQN, PPO, and TD3 for rotary inverted pendulum simulation training using a Gymnasium-style environment.",
      "topics": [
        "DQN: Q-network, replay buffer, target network, and epsilon-greedy exploration",
        "PPO and TD3 overview",
        "RIP simulation environment interface and important parameters",
        "Training scripts, hyperparameters, evaluation, and result files"
      ],
      "lab": "Train and evaluate RL policies; tune DQN/PPO/TD3 hyperparameters.",
      "pdf": "downloads/slides/Lecture10_Reinforcement_Learning_for_RIP_Simulation.pdf",
      "tex": "downloads/sources/Lecture10_Reinforcement_Learning_for_RIP_Simulation_source.tex"
    },
    {
      "no": 11,
      "id": "lecture-11",
      "title": "Sim-to-Real Deployment of RL Controllers",
      "focus": "Export trained policies, embed model headers into firmware, deploy DQN/PPO/TD3 policies to hardware, and compare simulation with physical data.",
      "topics": [
        "Sim-to-real deployment pipeline",
        "Potentiometer zero calibration and model-header placement",
        "PC deployment logger and hardware start modes",
        "DQN/PPO/TD3 deployment checks and mismatch diagnosis"
      ],
      "lab": "Deploy trained policies and record quantitative sim-to-real comparison metrics.",
      "pdf": "downloads/slides/Lecture11_Sim_to_Real_Deployment_of_RL_Controllers.pdf",
      "tex": "downloads/sources/Lecture11_Sim_to_Real_Deployment_of_RL_Controllers_source.tex"
    },
    {
      "no": 12,
      "id": "lecture-12",
      "title": "Hybrid Control, Residual Adaptation, and Final Demonstration",
      "focus": "Hybrid control schemes such as DQN+MPC and DQN+PPO, switching logic, residual model correction, and final live demonstration.",
      "topics": [
        "Hybrid control architecture and anti-chattering logic",
        "DQN+MPC and DQN+PPO switching schemes",
        "Residual network for one-step model correction",
        "Required experiments, report structure, and final demo scoring"
      ],
      "lab": "Final demonstration and comparison of pure and hybrid controllers.",
      "pdf": "downloads/slides/Lecture12_Hybrid_Control_Residual_Adaptation_and_Final_Demonstration.pdf",
      "tex": "downloads/sources/Lecture12_Hybrid_Control_Residual_Adaptation_and_Final_Demonstration_source.tex"
    }
  ],
  "codePackages": [
    {
      "file": "downloads/code/Lecture07_Sensor_and_Motor_Test_Code.zip",
      "title": "Sensor Logger and Motor Test Code",
      "classNo": 7,
      "description": "Arduino firmware and Python logging scripts for potentiometer/encoder tests and TB6612 motor checks.",
      "tags": [
        "STM32",
        "Python",
        "Sensor logging",
        "Motor test"
      ],
      "size": 11815
    },
    {
      "file": "downloads/code/Lecture08_LQR_and_MPC_Code.zip",
      "title": "LQR and MPC Hardware Experiment Code",
      "classNo": 8,
      "description": "Gain computation, STM32 firmware, and PC scripts for LQR and MPC experiments on the rotary inverted pendulum.",
      "tags": [
        "LQR",
        "MPC",
        "STM32",
        "Python"
      ],
      "size": 12898
    },
    {
      "file": "downloads/code/Lecture09_Observer_Based_Control_Code.zip",
      "title": "Observer-Based LQR/MPC Code",
      "classNo": 9,
      "description": "Luenberger and Kalman observer design scripts plus observer-based LQR/MPC STM32 firmware and logging scripts.",
      "tags": [
        "Observer",
        "Kalman",
        "Luenberger",
        "LQR",
        "MPC"
      ],
      "size": 28034
    },
    {
      "file": "downloads/code/Lecture10_RL_Training_Code.zip",
      "title": "RIP Reinforcement Learning Training Code",
      "classNo": 10,
      "description": "Custom RIP environment and training/export scripts for DQN, PPO, and TD3. External libraries should be installed separately.",
      "tags": [
        "DQN",
        "PPO",
        "TD3",
        "Gymnasium",
        "Simulation"
      ],
      "size": 65109
    },
    {
      "file": "downloads/code/Lecture11_RL_Deployment_Code.zip",
      "title": "RL Sim-to-Real Deployment Code",
      "classNo": 11,
      "description": "Deployment firmware and PC logger scripts for DQN, PPO, and TD3 policies on the physical rotary inverted pendulum.",
      "tags": [
        "Deployment",
        "DQN",
        "PPO",
        "TD3",
        "STM32"
      ],
      "size": 30890
    },
    {
      "file": "downloads/code/All_Course_Specific_Materials_Compact.zip",
      "title": "All Course-Specific Materials Compact Package",
      "classNo": "6-12",
      "description": "Compiled slides, source TeX files, images, and course-specific code packages, excluding large vendored third-party libraries.",
      "tags": [
        "All materials",
        "Compact"
      ],
      "size": 15519495
    }
  ],
  "tasks": [
    {
      "classNo": 7,
      "title": "Sensor and Motor Test Log",
      "deliverable": "A short lab note with calibration constants, 10-second sensor logs, motor-test observations, and safety-check notes.",
      "emphasis": "Correct wiring, stable serial logging, and meaningful raw-to-angle conversion."
    },
    {
      "classNo": 8,
      "title": "LQR/MPC Experiment Comparison",
      "deliverable": "A report comparing LQR and MPC time-domain responses, input saturation behavior, and tuning choices.",
      "emphasis": "Quantitative plots, Q/R choices, MPC constraints, and discussion of hardware behavior."
    },
    {
      "classNo": 9,
      "title": "Observer-Based Control Study",
      "deliverable": "A comparison of angle-difference velocities, Luenberger estimates, and Kalman estimates inside LQR/MPC control loops.",
      "emphasis": "Observer tuning, noise sensitivity, transient response, and stability observations."
    },
    {
      "classNo": 10,
      "title": "RL Training Study",
      "deliverable": "Training curves, evaluation plots, and a short discussion of DQN/PPO/TD3 hyperparameter effects in simulation.",
      "emphasis": "Reward design, exploration, convergence, and reproducibility."
    },
    {
      "classNo": 11,
      "title": "Sim-to-Real Deployment Analysis",
      "deliverable": "Hardware deployment logs and a simulation-to-hardware comparison for at least one trained RL policy.",
      "emphasis": "Calibration, mismatch diagnosis, quantitative metrics, and safety constraints."
    },
    {
      "classNo": 12,
      "title": "Hybrid Control Final Demonstration",
      "deliverable": "Final demo result, hybrid switching analysis, and comparison against pure model-driven or pure RL controllers.",
      "emphasis": "Switching logic, residual correction, robustness, and live-demo performance."
    }
  ]
};
