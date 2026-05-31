import { useEffect, useRef, useState } from "react";

const projects = [
    {
    slug: "alignops",
    title: "AlignOps",
    subtitle: "Distributed AI Infrastructure for Alignment, Multimodal AI & GPU Optimization",
    desc: "A distributed AI infrastructure framework for reinforcement learning alignment, multimodal foundation models, diffusion serving, and hyperscale GPU orchestration.",
    detail:
      "AlignOps operationalizes PPO, DPO, GRPO, distributed training, asynchronous multimodal inference, and hardware-aware optimization across heterogeneous GPU clusters.",
    included: [
      "Post-training alignment orchestration using PPO, DPO, and GRPO",
      "Fault-tolerant distributed training with FSDP, tensor parallelism, pipeline parallelism, and context parallelism",
      "Asynchronous multimodal and diffusion serving with adaptive batching",
      "GPU orchestration, memory placement, checkpoint recovery, and infrastructure cost intelligence",
      "Hardware evaluation framework for GPUs and emerging accelerators"
    ],
    impact: [
      "38% improvement in GPU utilization",
      "44% reduction in distributed training instability",
      "3.7x acceleration in multimodal inference throughput",
      "31% reduction in operational infrastructure costs"
    ],
    tags: ["Distributed AI", "RLHF", "PPO/DPO/GRPO", "GPU Optimization", "Multimodal AI", "MLOps"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    githubLink: "https://github.com/debosmita-29/casestudy-projects",
    paperLink: "/papers/AlignOps_IEEE.pdf"
  },
  {
    slug: "medagent-lakeops",
    title: "MedAgent LakeOps",
    subtitle: "Agentic MLOps for Clinical Data Lakes & Healthcare Intelligence",
    desc: "An agentic MLOps framework that orchestrates EHR, radiology, laboratory, operational, and wearable healthcare data into a governed clinical lakehouse.",
    detail:
      "MedAgent LakeOps combines autonomous healthcare agents, semantic interoperability, clinical lakehouse architecture, observability intelligence, and governance-aware MLOps for healthcare AI readiness.",
    included: [
      "Autonomous agents for clinical ingestion, metadata enrichment, semantic normalization, observability, and orchestration",
      "FHIR, DICOM, HL7, and OMOP-inspired interoperability workflows",
      "Clinical lakehouse zones for raw data, standardized healthcare data, feature engineering, model readiness, and governance audits",
      "Agentic MLOps pipeline for training, deployment, monitoring, drift detection, and autonomous remediation",
      "Patient intelligence flow connecting clinical systems, lakehouse pipelines, ML inference, and physician dashboards"
    ],
    impact: [
      "43% reduction in clinical data processing latency",
      "37% improvement in radiology metadata retrieval efficiency",
      "52% reduction in manual operational intervention",
      "4.3x acceleration in healthcare AI model deployment readiness"
    ],
    tags: ["Healthcare AI", "Agentic MLOps", "Clinical Lakehouse", "FHIR", "DICOM", "LangGraph"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
    githubLink: "https://github.com/debosmita-29/casestudy-projects",
    paperLink: "/papers/MedAgent-LakeOps-Agentic-MLOps-for-Clinical-Data.pdf"
  },
  {
    slug: "cogniintel",
    title: "CogniIntel",
    subtitle: "Enterprise RAG + Multi-Agent Knowledge System",
    desc: "Autonomous enterprise knowledge extraction using multi-agent RAG systems.",
    detail: "CogniIntel is a multi-agent RAG system designed to unify fragmented enterprise knowledge.",
    included: [
      "Document ingestion over policy and support datasets",
      "TF-IDF retrieval baseline",
      "Agent planner, retriever, critic, and answer composer",
      "Evaluation harness for grounded answers"
    ],
    impact: [
      "Faster knowledge lookup",
      "Reduced manual document triage",
      "Better traceability from answer to source"
    ],
    tags: ["RAG", "FAISS-like retrieval", "Agent orchestration"],
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80",
    githubLink: "https://github.com/debosmita-29/casestudy-projects/tree/main/casestudy-projects/debosmita-ai-portfolio-turborepo-startup-saas/apps/cogniintel"
  },
  {
    slug: "quantumroute-ai",
    title: "QuantumRoute AI",
    subtitle: "Optimization Engine for Complex Scheduling",
    desc: "Quantum-inspired optimization for enterprise scheduling and resource allocation.",
    detail: "QuantumRoute AI solves combinatorial scheduling problems using quantum-inspired search.",
    included: [
      "Resource, task, and constraint dataset",
      "Simulated annealing optimizer",
      "Constraint-aware scoring engine",
      "Allocation report generator"
    ],
    impact: [
      "Better allocation visibility",
      "Faster planning cycles",
      "Scenario-based scheduling decisions"
    ],
    tags: ["Optimization", "Scheduling", "Heuristics"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1600&q=80",
    githubLink: "https://github.com/debosmita-29/casestudy-projects/tree/main/casestudy-projects/debosmita-ai-portfolio-turborepo-startup-saas/apps/quantumroute-ai"
  },
  {
    slug: "agentops-sentinel",
    title: "AgentOps Sentinel",
    subtitle: "Observability for Agentic AI Systems",
    desc: "Observability platform for monitoring multi-agent AI systems in production.",
    detail: "AgentOps Sentinel provides observability for agentic AI systems.",
    included: [
      "Agent telemetry parser",
      "Hallucination and tool failure risk scoring",
      "Token efficiency analytics",
      "Executive summary report"
    ],
    impact: [
      "Improved AI reliability visibility",
      "Faster debugging of agent failures",
      "Better governance for production agents"
    ],
    tags: ["Observability", "Risk scoring", "Telemetry"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    githubLink: "https://github.com/debosmita-29/casestudy-projects/tree/main/casestudy-projects/debosmita-ai-portfolio-turborepo-startup-saas/apps/agentops-sentinel"
  },
  {
    slug: "insightforge",
    title: "InsightForge",
    subtitle: "Autonomous BI + NL-to-SQL Analytics",
    desc: "Autonomous BI system converting natural language into SQL and insights.",
    detail: "InsightForge is an autonomous analytics engine.",
    included: [
      "SQLite analytics layer over sample sales data",
      "NL-to-SQL pattern engine",
      "Insight summarizer",
      "KPI report output"
    ],
    impact: [
      "Faster access to business insights",
      "Reduced dashboard dependency",
      "Natural language analytics workflow"
    ],
    tags: ["Analytics", "SQL", "BI automation"],
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=80",
    githubLink: "https://github.com/debosmita-29/casestudy-projects/tree/main/casestudy-projects/debosmita-ai-portfolio-turborepo-startup-saas/apps/insightforge"
  },
  {
    slug: "neurorecruit",
    title: "NeuroRecruit",
    subtitle: "AI Talent Intelligence + Skill Matching",
    desc: "AI-powered talent intelligence and job-candidate matching engine.",
    detail: "NeuroRecruit matches candidates to roles using skill graph embeddings.",
    included: [
      "Candidate and job datasets",
      "Skill normalization",
      "Cosine similarity ranking",
      "Explainable match reasons"
    ],
    impact: [
      "Improved role-to-skill matching",
      "More explainable recruiting decisions",
      "Reduced manual screening effort"
    ],
    tags: ["Embeddings", "Skill graph", "Ranking"],
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80",
    githubLink: "https://github.com/debosmita-29/casestudy-projects/tree/main/casestudy-projects/debosmita-ai-portfolio-turborepo-startup-saas/apps/neurorecruit"
  }
];

const pages = {
  home: "Home",
  about: "About",
  projects: "Projects",
  learning: "Learning",
  aiLab: "AI Lab",
  writing: "Writing",
  speaking: "Speaking",
  resources: "Resources"
};

const microsoftAiForBeginnersCurriculum = [
  {
    slug: "setup",
    title: "Course Setup",
    summary: "Prepare the development environment and understand how to run notebooks and labs.",
    sourcePath: "lessons/0-course-setup",
    children: [
      {
        number: "00",
        title: "Course Setup",
        focus: "Development environment, local setup, and notebook workflow.",
        lesson: "lessons/0-course-setup/setup.md",
        notebook: "lessons/0-course-setup/how-to-run.md"
      }
    ]
  },
  {
    slug: "intro",
    title: "Introduction to AI",
    summary: "Start with AI history, core terminology, and the evolution from symbolic AI to modern systems.",
    sourcePath: "lessons/1-Intro",
    children: [
      {
        number: "01",
        title: "Introduction and History of AI",
        focus: "AI milestones, major approaches, and why modern AI systems matter.",
        lesson: "lessons/1-Intro/README.md",
        assignment: "lessons/1-Intro/assignment.md"
      }
    ]
  },
  {
    slug: "symbolic",
    title: "Symbolic AI",
    summary: "Learn knowledge representation, expert systems, ontologies, and concept graphs.",
    sourcePath: "lessons/2-Symbolic",
    children: [
      {
        number: "02",
        title: "Knowledge Representation and Expert Systems",
        focus: "Rules, ontologies, semantic knowledge, and concept graphs.",
        lesson: "lessons/2-Symbolic/README.md",
        notebooks: [
          "lessons/2-Symbolic/Animals.ipynb",
          "lessons/2-Symbolic/FamilyOntology.ipynb",
          "lessons/2-Symbolic/MSConceptGraph.ipynb"
        ],
        assignment: "lessons/2-Symbolic/assignment.md"
      }
    ]
  },
  {
    slug: "neural-networks",
    title: "Introduction to Neural Networks",
    summary: "Move from perceptrons to multi-layer neural networks and deep learning frameworks.",
    sourcePath: "lessons/3-NeuralNetworks",
    children: [
      {
        number: "03",
        title: "Perceptron",
        focus: "The simplest neural unit and the intuition behind trainable decision boundaries.",
        lesson: "lessons/3-NeuralNetworks/03-Perceptron/README.md",
        notebook: "lessons/3-NeuralNetworks/03-Perceptron/Perceptron.ipynb",
        lab: "lessons/3-NeuralNetworks/03-Perceptron/lab/README.md"
      },
      {
        number: "04",
        title: "Multi-Layered Perceptron and Creating Your Own Framework",
        focus: "Backpropagation concepts and how deep learning frameworks are assembled.",
        lesson: "lessons/3-NeuralNetworks/04-OwnFramework/README.md",
        notebook: "lessons/3-NeuralNetworks/04-OwnFramework/OwnFramework.ipynb",
        lab: "lessons/3-NeuralNetworks/04-OwnFramework/lab/README.md"
      },
      {
        number: "05",
        title: "Intro to Frameworks and Overfitting",
        focus: "PyTorch, Keras, TensorFlow, training loops, and overfitting control.",
        lesson: "lessons/3-NeuralNetworks/05-Frameworks/README.md",
        notebooks: [
          "lessons/3-NeuralNetworks/05-Frameworks/IntroPyTorch.ipynb",
          "lessons/3-NeuralNetworks/05-Frameworks/IntroKeras.ipynb",
          "lessons/3-NeuralNetworks/05-Frameworks/IntroKerasTF.ipynb"
        ],
        lab: "lessons/3-NeuralNetworks/05-Frameworks/lab/README.md"
      }
    ]
  },
  {
    slug: "computer-vision",
    title: "Computer Vision",
    summary: "Explore image processing, CNNs, transfer learning, autoencoders, GANs, detection, and segmentation.",
    sourcePath: "lessons/4-ComputerVision",
    children: [
      {
        number: "06",
        title: "Intro to Computer Vision and OpenCV",
        focus: "Classic image processing and computer vision foundations.",
        lesson: "lessons/4-ComputerVision/06-IntroCV/README.md",
        notebook: "lessons/4-ComputerVision/06-IntroCV/OpenCV.ipynb",
        lab: "lessons/4-ComputerVision/06-IntroCV/lab/README.md"
      },
      {
        number: "07",
        title: "Convolutional Neural Networks",
        focus: "CNN layers, image classification, and common CNN architectures.",
        lesson: "lessons/4-ComputerVision/07-ConvNets/README.md",
        notebooks: [
          "lessons/4-ComputerVision/07-ConvNets/ConvNetsPyTorch.ipynb",
          "lessons/4-ComputerVision/07-ConvNets/ConvNetsTF.ipynb"
        ],
        lab: "lessons/4-ComputerVision/07-ConvNets/lab/README.md"
      },
      {
        number: "08",
        title: "Pre-trained Networks and Transfer Learning",
        focus: "Reuse existing models, improve training, and adapt networks to new datasets.",
        lesson: "lessons/4-ComputerVision/08-TransferLearning/README.md",
        notebooks: [
          "lessons/4-ComputerVision/08-TransferLearning/TransferLearningPyTorch.ipynb",
          "lessons/4-ComputerVision/08-TransferLearning/TransferLearningTF.ipynb"
        ],
        lab: "lessons/4-ComputerVision/08-TransferLearning/lab/README.md"
      },
      {
        number: "09",
        title: "Autoencoders and VAEs",
        focus: "Representation learning, compression, denoising, and generative latent spaces.",
        lesson: "lessons/4-ComputerVision/09-Autoencoders/README.md",
        notebooks: [
          "lessons/4-ComputerVision/09-Autoencoders/AutoEncodersPyTorch.ipynb",
          "lessons/4-ComputerVision/09-Autoencoders/AutoencodersTF.ipynb"
        ]
      },
      {
        number: "10",
        title: "GANs and Artistic Style Transfer",
        focus: "Generative adversarial networks and neural style transfer workflows.",
        lesson: "lessons/4-ComputerVision/10-GANs/README.md",
        notebooks: [
          "lessons/4-ComputerVision/10-GANs/GANPyTorch.ipynb",
          "lessons/4-ComputerVision/10-GANs/GANTF.ipynb",
          "lessons/4-ComputerVision/10-GANs/StyleTransfer.ipynb"
        ]
      },
      {
        number: "11",
        title: "Object Detection",
        focus: "Detect and localize objects in images.",
        lesson: "lessons/4-ComputerVision/11-ObjectDetection/README.md",
        notebook: "lessons/4-ComputerVision/11-ObjectDetection/ObjectDetection.ipynb",
        lab: "lessons/4-ComputerVision/11-ObjectDetection/lab/README.md"
      },
      {
        number: "12",
        title: "Semantic Segmentation and U-Net",
        focus: "Pixel-level classification, segmentation masks, and U-Net style models.",
        lesson: "lessons/4-ComputerVision/12-Segmentation/README.md",
        notebooks: [
          "lessons/4-ComputerVision/12-Segmentation/SemanticSegmentationPytorch.ipynb",
          "lessons/4-ComputerVision/12-Segmentation/SemanticSegmentationTF.ipynb"
        ],
        lab: "lessons/4-ComputerVision/12-Segmentation/lab/README.md"
      }
    ]
  },
  {
    slug: "nlp",
    title: "Natural Language Processing",
    summary: "Work through text representation, embeddings, language modeling, RNNs, transformers, NER, and LLMs.",
    sourcePath: "lessons/5-NLP",
    children: [
      {
        number: "13",
        title: "Text Representation: BoW and TF-IDF",
        focus: "Represent text numerically with classic NLP approaches.",
        lesson: "lessons/5-NLP/13-TextRep/README.md",
        notebooks: [
          "lessons/5-NLP/13-TextRep/TextRepresentationPyTorch.ipynb",
          "lessons/5-NLP/13-TextRep/TextRepresentationTF.ipynb"
        ],
        assignment: "lessons/5-NLP/13-TextRep/assignment.md"
      },
      {
        number: "14",
        title: "Semantic Word Embeddings: Word2Vec and GloVe",
        focus: "Dense word vectors and semantic similarity.",
        lesson: "lessons/5-NLP/14-Embeddings/README.md",
        notebooks: [
          "lessons/5-NLP/14-Embeddings/EmbeddingsPyTorch.ipynb",
          "lessons/5-NLP/14-Embeddings/EmbeddingsTF.ipynb"
        ],
        assignment: "lessons/5-NLP/14-Embeddings/assignment.md"
      },
      {
        number: "15",
        title: "Language Modeling and Training Embeddings",
        focus: "Train language models and custom embeddings.",
        lesson: "lessons/5-NLP/15-LanguageModeling/README.md",
        notebooks: [
          "lessons/5-NLP/15-LanguageModeling/CBoW-PyTorch.ipynb",
          "lessons/5-NLP/15-LanguageModeling/CBoW-TF.ipynb"
        ],
        lab: "lessons/5-NLP/15-LanguageModeling/lab/README.md"
      },
      {
        number: "16",
        title: "Recurrent Neural Networks",
        focus: "Sequence modeling with recurrent architectures.",
        lesson: "lessons/5-NLP/16-RNN/README.md",
        notebooks: [
          "lessons/5-NLP/16-RNN/RNNPyTorch.ipynb",
          "lessons/5-NLP/16-RNN/RNNTF.ipynb"
        ],
        assignment: "lessons/5-NLP/16-RNN/assignment.md"
      },
      {
        number: "17",
        title: "Generative Recurrent Networks",
        focus: "Generate text and sequences with recurrent models.",
        lesson: "lessons/5-NLP/17-GenerativeNetworks/README.md",
        notebooks: [
          "lessons/5-NLP/17-GenerativeNetworks/GenerativePyTorch.ipynb",
          "lessons/5-NLP/17-GenerativeNetworks/GenerativeTF.ipynb"
        ],
        lab: "lessons/5-NLP/17-GenerativeNetworks/lab/README.md"
      },
      {
        number: "18",
        title: "Transformers and BERT",
        focus: "Attention, transformer architecture, and BERT-style models.",
        lesson: "lessons/5-NLP/18-Transformers/README.md",
        notebooks: [
          "lessons/5-NLP/18-Transformers/TransformersPyTorch.ipynb",
          "lessons/5-NLP/18-Transformers/TransformersTF.ipynb"
        ],
        assignment: "lessons/5-NLP/18-Transformers/assignment.md"
      },
      {
        number: "19",
        title: "Named Entity Recognition",
        focus: "Extract entities and structured meaning from text.",
        lesson: "lessons/5-NLP/19-NER/README.md",
        notebook: "lessons/5-NLP/19-NER/NER-TF.ipynb",
        lab: "lessons/5-NLP/19-NER/lab/README.md"
      },
      {
        number: "20",
        title: "Large Language Models, Prompt Programming, and Few-Shot Tasks",
        focus: "Prompting, generative LLM behavior, and few-shot learning.",
        lesson: "lessons/5-NLP/20-LangModels/README.md",
        notebook: "lessons/5-NLP/20-LangModels/GPT-PyTorch.ipynb"
      }
    ]
  },
  {
    slug: "other-ai",
    title: "Other AI Techniques",
    summary: "Round out the curriculum with genetic algorithms, reinforcement learning, and multi-agent systems.",
    sourcePath: "lessons/6-Other",
    children: [
      {
        number: "21",
        title: "Genetic Algorithms",
        focus: "Search and optimization inspired by evolution.",
        lesson: "lessons/6-Other/21-GeneticAlgorithms/README.md",
        notebooks: [
          "lessons/6-Other/21-GeneticAlgorithms/Genetic.ipynb",
          "lessons/6-Other/21-GeneticAlgorithms/Diophantine.ipynb"
        ]
      },
      {
        number: "22",
        title: "Deep Reinforcement Learning",
        focus: "Agents, reward signals, policies, and RL training loops.",
        lesson: "lessons/6-Other/22-DeepRL/README.md",
        notebooks: [
          "lessons/6-Other/22-DeepRL/CartPole-RL-PyTorch.ipynb",
          "lessons/6-Other/22-DeepRL/CartPole-RL-TF.ipynb"
        ],
        lab: "lessons/6-Other/22-DeepRL/lab/README.md"
      },
      {
        number: "23",
        title: "Multi-Agent Systems",
        focus: "Agent coordination, interaction, and distributed intelligence.",
        lesson: "lessons/6-Other/23-MultiagentSystems/README.md",
        assignment: "lessons/6-Other/23-MultiagentSystems/assignment.md"
      }
    ]
  },
  {
    slug: "ethics",
    title: "Responsible AI",
    summary: "Add safety, accountability, governance, and ethical decision-making to the learning path.",
    sourcePath: "lessons/7-Ethics",
    children: [
      {
        number: "24",
        title: "AI Ethics and Responsible AI",
        focus: "Responsible AI principles and business-facing governance.",
        lesson: "lessons/7-Ethics/README.md",
        microsoftLearn: "https://docs.microsoft.com/learn/paths/responsible-ai-business-principles/?WT.mc_id=academic-77998-cacaste"
      }
    ]
  },
  {
    slug: "extras",
    title: "Extras and Sketchnotes",
    summary: "Explore multimodal AI and visual sketchnotes that make the curriculum easier to review.",
    sourcePath: "lessons/X-Extras",
    children: [
      {
        number: "25",
        title: "Multi-Modal Networks, CLIP, and VQGAN",
        focus: "Connect images and language with multimodal representation learning.",
        lesson: "lessons/X-Extras/X1-MultiModal/README.md",
        notebook: "lessons/X-Extras/X1-MultiModal/Clip.ipynb"
      },
      {
        number: "SK",
        title: "AI Curriculum Sketchnotes",
        focus: "Visual summaries for reviewing core AI ideas.",
        lesson: "lessons/sketchnotes/README.md"
      }
    ]
  }
];

const microsoftAiBaseUrl = "https://github.com/microsoft/AI-For-Beginners/blob/main/";
const microsoftAiTreeUrl = "https://github.com/microsoft/AI-For-Beginners/tree/main/";

const newsletterContent = [
  {
    slug: "azure-foundry-foundation-model-operating-layer",
    title: "Azure AI Foundry Is Becoming the Operating Layer for Foundation Model Systems",
    subtitle:
      "Why the next frontier is not just choosing a model, but operating a governed, observable, multi-model AI system.",
    date: "May 31, 2026",
    readTime: "7 min read",
    category: "Azure AI Foundry",
    featured: true,
    excerpt:
      "Azure AI Foundry is moving from model catalog to model operating layer: agents, evaluations, prompt optimization, guardrails, local AI, and physical AI are becoming one production system.",
    content: `
      <p>For a long time, the foundation model conversation sounded like a leaderboard.</p>

      <p>Which model is smartest? Which benchmark moved? Which context window is larger? Which model writes better code?</p>

      <p>Those questions still matter.</p>

      <p>But this week, the more interesting question is different:</p>

      <blockquote>What happens when the platform around the model becomes more important than the model alone?</blockquote>

      <p>That is why I am watching Azure AI Foundry closely.</p>

      <p>Microsoft is positioning Foundry less like a simple place to pick models, and more like an operating layer for enterprise AI systems: models, agents, tools, tracing, evaluation, governance, security, and deployment surfaces coming together inside one managed environment.</p>

      <h2>The Shift: From Model Catalog to Model Operating Layer</h2>

      <p>The old mental model was simple:</p>

      <ul>
        <li>Choose a foundation model.</li>
        <li>Call the API.</li>
        <li>Wrap it in an app.</li>
        <li>Hope the behavior is reliable enough.</li>
      </ul>

      <p>That is no longer enough for real enterprise AI.</p>

      <p>Enterprise teams need to answer harder questions:</p>

      <ul>
        <li>Which model should handle this task?</li>
        <li>How do we evaluate outputs before production?</li>
        <li>How do we trace agent behavior?</li>
        <li>How do we keep workflows on task?</li>
        <li>How do we optimize prompts based on evidence instead of vibes?</li>
        <li>How do we run intelligence across cloud, edge, regulated, and physical environments?</li>
      </ul>

      <p>This is where Foundry becomes interesting.</p>

      <p>Microsoft describes Foundry as a unified platform for enterprise AI operations, model builders, and application development, bringing agents, models, tools, tracing, monitoring, evaluations, role-based access control, networking, and policies into one management model.</p>

      <h2>Why This Is Emerging Now</h2>

      <p>Foundation models are becoming abundant. Foundry gives developers access to a broad model ecosystem that includes Microsoft, OpenAI, Anthropic, Mistral, xAI, Meta, DeepSeek, Hugging Face, and others.</p>

      <p>That abundance creates a new problem.</p>

      <p>The challenge is no longer only access.</p>

      <p>The challenge is orchestration.</p>

      <p>In production systems, one model may not be enough. A low-latency model may handle routing or extraction. A stronger reasoning model may handle planning. A small model may run locally. A vision-language model may interpret images. A guardrail layer may inspect the response. An evaluation system may score behavior after the fact.</p>

      <p>The architecture starts to look less like a chatbot and more like an AI control plane.</p>

      <h2>The New Technical Pattern: Evaluate, Optimize, Govern</h2>

      <p>The most important Foundry trend is not only model variety. It is the tooling around model behavior.</p>

      <p>Recent Foundry documentation highlights additions such as Prompt Optimizer, task-adherence guardrails, and LangChain/LangGraph integration. That matters because the next wave of AI systems will need evidence-driven iteration.</p>

      <p>Instead of asking, “Does this prompt feel better?” teams can start asking:</p>

      <ul>
        <li>Did the agent stay on task?</li>
        <li>Did the prompt improvement increase evaluation scores?</li>
        <li>Which step failed in the trace?</li>
        <li>Which model was overkill for this task?</li>
        <li>Which workflow needs human review?</li>
      </ul>

      <p>That is a major step toward AI engineering as a disciplined software practice.</p>

      <h2>The Unique Angle: Physical AI and Local AI</h2>

      <p>The most unusual part of the Foundry story is how it is extending beyond cloud apps.</p>

      <p>Microsoft and NVIDIA are connecting Foundry with accelerated infrastructure, agent services, observability, NVIDIA Nemotron models, Omniverse, and physical AI workflows. The goal is not just to generate text, but to connect AI to real operational environments: factories, energy systems, robotics workflows, digital twins, inspections, and regulated infrastructure.</p>

      <p>This is where the phrase “foundation model” starts to stretch.</p>

      <p>A foundation model is no longer just a model behind a chat window.</p>

      <p>It becomes part of a larger system that can observe, reason, simulate, act, and operate under governance.</p>

      <h2>What Builders Should Learn From This</h2>

      <p>If you are learning AI right now, do not stop at model prompting.</p>

      <p>Learn the operating system around the model:</p>

      <ul>
        <li>model selection</li>
        <li>prompt evaluation</li>
        <li>RAG grounding</li>
        <li>agent tracing</li>
        <li>workflow guardrails</li>
        <li>model cost and latency tradeoffs</li>
        <li>human-in-the-loop review</li>
        <li>deployment and monitoring</li>
      </ul>

      <p>That is where AI careers are going.</p>

      <p>The people who win in this next phase will not only know how to call a model. They will know how to design, operate, evaluate, and govern systems of models.</p>

      <h2>My Take</h2>

      <p>Azure AI Foundry is becoming a signal of a larger industry shift.</p>

      <p>The future of enterprise AI will not be one foundation model sitting behind one interface.</p>

      <p>It will be a governed model ecosystem: many foundation models, many agent workflows, many deployment surfaces, and one operational layer that helps teams understand what the system is doing.</p>

      <p>That is the emerging technology to watch.</p>

      <p>Not just foundation models.</p>

      <p>Foundation model operations.</p>

      <h2>Builder Exercise</h2>

      <p>This week, pick one AI use case and design it as a Foundry-style system.</p>

      <ul>
        <li>Which model handles reasoning?</li>
        <li>Which model handles low-cost extraction?</li>
        <li>What should be retrieved before generation?</li>
        <li>Which guardrails are needed?</li>
        <li>What should be traced?</li>
        <li>What metric decides whether the system is production-ready?</li>
      </ul>

      <p>If you can answer those questions, you are no longer just prompting AI.</p>

      <p>You are designing an AI system.</p>

      <h2>Sources I Used</h2>

      <ul>
        <li><a href="https://learn.microsoft.com/en-ca/azure/foundry/what-is-foundry?view=foundry" target="_blank" rel="noreferrer">Microsoft Learn: What is Microsoft Foundry?</a></li>
        <li><a href="https://blogs.microsoft.com/blog/2026/03/16/microsoft-at-nvidia-gtc-new-solutions-for-microsoft-foundry-azure-ai-infrastructure-and-physical-ai/" target="_blank" rel="noreferrer">Microsoft Official Blog: Microsoft Foundry, Azure AI infrastructure, and Physical AI</a></li>
        <li><a href="https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/whats-new-in-foundry-labs---april-2026/4509714" target="_blank" rel="noreferrer">Microsoft Tech Community: What's new in Foundry Labs - April 2026</a></li>
      </ul>

      <p><strong>— Debosmita Roy</strong><br />AI Systems Architect | Azure AI Foundry | Foundation Model Operations</p>
    `
  },
  {
    slug: "nemoclaw-future-agentic-ai",
    title: "What NemoClaw Teaches Us About the Future of Agentic AI",
    subtitle:
      "Why the next generation of AI systems will be operational, adaptive, and environment-aware.",
    date: "May 10, 2026",
    readTime: "6 min read",
    category: "Agentic AI",
    featured: false,
    excerpt:
      "Why operational intelligence, observability, and orchestration will define the next generation of enterprise AI systems.",
    content: `
      <p>Most AI systems today are still fundamentally reactive.</p>

      <p>They answer questions. Generate text. Summarize documents. Produce outputs when prompted.</p>

      <p>But the next generation of AI systems will not simply respond.</p>

      <p>They will observe, reason, adapt, recover, and continuously operate inside dynamic environments.</p>

      <p>That shift changes everything.</p>

      <p>NemoClaw is my teaching framework for understanding what this new generation of AI systems may look like.</p>

      <p>Not as another chatbot. Not as another prompt wrapper. But as a resilient operational intelligence architecture.</p>

      <h2>The Misconception Around Intelligent Systems</h2>

      <p>The biggest misconception in AI today is that better prompts alone create intelligent systems.</p>

      <p>They do not.</p>

      <p>Production-grade AI systems require memory, orchestration, telemetry, evaluation, feedback loops, and environmental awareness.</p>

      <p>Without those capabilities, most AI agents remain fragile demos.</p>

      <p>This is why many enterprise AI initiatives fail after initial excitement.</p>

      <p>The problem is rarely model intelligence alone.</p>

      <p>The real challenge is operational intelligence.</p>

      <h2>Why Modern AI Agents Break</h2>

      <p>Modern AI agents break because they lose context, fail silently, hallucinate tool outputs, and cannot recover from unexpected workflow states.</p>

      <p>Many systems today still operate like isolated reasoning engines disconnected from the environments they are supposed to support.</p>

      <p>NemoClaw represents a different philosophy.</p>

      <p>An environment-aware agent should understand signals beyond the immediate prompt.</p>

      <ul>
        <li>system state</li>
        <li>workflow history</li>
        <li>operational telemetry</li>
        <li>user intent persistence</li>
        <li>feedback loops</li>
        <li>tool reliability</li>
        <li>failure patterns</li>
        <li>governance boundaries</li>
      </ul>

      <p>This is where the future of agentic AI begins.</p>

      <h2>The Rise of Orchestrated Intelligence</h2>

      <p>The next evolution of AI systems will involve orchestration layers capable of coordinating specialized agents together.</p>

      <p>One agent may retrieve knowledge. Another may validate evidence. Another may score risk. Another may monitor observability signals. Another may summarize actions for human review.</p>

      <p>The intelligence emerges not from a single model, but from coordinated operational behavior.</p>

      <p>This is extremely important for enterprise systems.</p>

      <p>Enterprises do not simply need AI that sounds intelligent.</p>

      <p>They need AI systems that are:</p>

      <ul>
        <li>observable</li>
        <li>traceable</li>
        <li>governable</li>
        <li>resilient</li>
        <li>measurable</li>
        <li>explainable</li>
        <li>recoverable</li>
      </ul>

      <h2>Why Observability Becomes Foundational</h2>

      <p>Without these properties, AI cannot safely scale inside operational ecosystems.</p>

      <p>This is why observability becomes one of the most important foundations of modern agentic systems.</p>

      <p>In traditional software systems, observability helps engineers understand failures, latency, bottlenecks, and system health.</p>

      <p>In AI systems, observability must evolve further.</p>

      <p>We need visibility into:</p>

      <ul>
        <li>hallucination patterns</li>
        <li>retrieval quality</li>
        <li>reasoning traces</li>
        <li>tool-call reliability</li>
        <li>agent coordination behavior</li>
        <li>prompt drift</li>
        <li>memory corruption</li>
        <li>context fragmentation</li>
      </ul>

      <p>The future AI stack will increasingly resemble distributed systems engineering.</p>

      <h2>Feedback-Native Intelligence</h2>

      <p>NemoClaw also introduces the idea of feedback-native intelligence.</p>

      <p>A modern AI system should not operate as a one-time reasoning engine.</p>

      <p>It should continuously learn from outcomes.</p>

      <ul>
        <li>Did the workflow succeed?</li>
        <li>Did the user correct the response?</li>
        <li>Did the retrieval contain contradictions?</li>
        <li>Did a downstream system fail?</li>
        <li>Did the orchestration layer recover correctly?</li>
      </ul>

      <p>These signals matter enormously.</p>

      <p>Over time, feedback-aware systems become operationally smarter.</p>

      <h2>The Role of Memory</h2>

      <p>Another major shift will involve memory.</p>

      <p>Most AI systems today still operate with extremely limited continuity.</p>

      <p>But future systems will increasingly use memory graphs, persistent context layers, and long-term interaction histories.</p>

      <p>This changes how agents reason.</p>

      <p>Instead of isolated responses, they begin operating with accumulated situational awareness.</p>

      <p>This creates opportunities for:</p>

      <ul>
        <li>adaptive workflows</li>
        <li>personalized orchestration</li>
        <li>autonomous recovery</li>
        <li>proactive recommendations</li>
        <li>operational prediction</li>
      </ul>

      <h2>The Bigger Shift</h2>

      <p>This is where AI starts moving from conversational systems toward operational systems.</p>

      <p>And that transition is the most important shift happening in AI engineering right now.</p>

      <p>The future of AI will not belong to systems that simply generate answers.</p>

      <p>It will belong to systems that can observe, adapt, recover, coordinate, and continuously operate under real-world constraints.</p>

      <p>That is the direction NemoClaw is designed to explore.</p>
    `
  },
  {
    slug: "future-of-ai-is-systems",
    title: "The Future of AI Is Not Models. It Is Systems.",
    subtitle:
      "Why the next competitive advantage in AI will come from architecture, orchestration, and intelligent systems.",
    date: "May 16, 2026",
    readTime: "8 min read",
    category: "Agentic AI",
    featured: true,
    excerpt:
      "The future of AI will not be defined by models alone. It will be defined by intelligent systems, orchestration, memory, reasoning, and autonomous execution.",
    content: `
      <p>For the last few years, the AI industry has been obsessed with one question:</p>

      <blockquote>“Which model is the smartest?”</blockquote>

      <p>GPT-4. Claude. Gemini. Open-source models. Benchmarks. Leaderboards.</p>

      <p>But something much bigger is quietly happening underneath all of this.</p>

      <p>The future of AI will not be defined by models alone.</p>

      <p>It will be defined by systems.</p>

      <p>And the companies that understand this early will build the next generation of enterprise intelligence.</p>

      <h2>Models Are Becoming Commoditized</h2>

      <p>This is the uncomfortable truth many organizations are starting to realize.</p>

      <p>A model alone is no longer the competitive advantage.</p>

      <p>Because eventually:</p>

      <ul>
        <li>everyone gets access to powerful LLMs</li>
        <li>everyone can call APIs</li>
        <li>everyone can generate text, code, or summaries</li>
        <li>everyone can build a chatbot</li>
      </ul>

      <p>The differentiator is shifting elsewhere.</p>

      <p>Not toward:</p>

      <blockquote>“Who has the best model?”</blockquote>

      <p>But toward:</p>

      <blockquote>“Who built the best AI operating system around the model?”</blockquote>

      <p>That means:</p>

      <ul>
        <li>orchestration</li>
        <li>memory</li>
        <li>retrieval</li>
        <li>evaluation</li>
        <li>observability</li>
        <li>reasoning loops</li>
        <li>tool ecosystems</li>
        <li>governance</li>
        <li>feedback systems</li>
        <li>autonomous execution</li>
      </ul>

      <p>The intelligence is moving into the architecture itself.</p>

      <h2>The Real AI Stack Is Much Bigger Than Prompting</h2>

      <p>Most people still think AI engineering is primarily:</p>

      <ul>
        <li>prompt engineering</li>
        <li>model selection</li>
        <li>fine-tuning</li>
      </ul>

      <p>But production AI systems are fundamentally distributed systems problems.</p>

      <p>Because real enterprise AI must solve:</p>

      <ul>
        <li>context management</li>
        <li>latency</li>
        <li>reliability</li>
        <li>hallucination reduction</li>
        <li>authorization</li>
        <li>traceability</li>
        <li>human approval workflows</li>
        <li>state management</li>
        <li>failure recovery</li>
        <li>system observability</li>
      </ul>

      <p>This is why many “AI demos” never become real products.</p>

      <blockquote>The model works. The system does not.</blockquote>

      <h2>We Are Entering the Era of Compound AI Systems</h2>

      <p>The most important shift happening right now is the movement from:</p>

      <blockquote>single-model interactions</blockquote>

      <p>to</p>

      <blockquote>compound AI systems</blockquote>

      <p>Where multiple components work together dynamically.</p>

      <p>For example:</p>

      <ul>
        <li>planners</li>
        <li>retrievers</li>
        <li>evaluators</li>
        <li>tool executors</li>
        <li>memory systems</li>
        <li>workflow engines</li>
        <li>specialized agents</li>
        <li>observability layers</li>
      </ul>

      <p>all collaborating together.</p>

      <p>This is where AI starts behaving less like a chatbot and more like an operating system.</p>

      <h2>Why Autonomous Agents Matter</h2>

      <p>Autonomous agents are not simply “LLMs with tools.”</p>

      <p>They are systems capable of:</p>

      <ul>
        <li>reasoning over goals</li>
        <li>planning execution</li>
        <li>interacting with environments</li>
        <li>observing outcomes</li>
        <li>adapting behavior</li>
        <li>retrying failures</li>
        <li>coordinating workflows</li>
      </ul>

      <p>This changes AI from passive intelligence to operational intelligence.</p>

      <p>And operational intelligence is where enterprise transformation truly begins.</p>

      <h2>The Most Underrated Skill in AI Engineering</h2>

      <p>The highest leverage skill in AI right now is not prompt engineering.</p>

      <p>It is systems thinking.</p>

      <p>The engineers who will shape the future are the ones who understand how to combine:</p>

      <ul>
        <li>distributed systems</li>
        <li>data infrastructure</li>
        <li>orchestration</li>
        <li>retrieval</li>
        <li>memory architectures</li>
        <li>agent workflows</li>
        <li>evaluation pipelines</li>
        <li>observability</li>
        <li>human feedback loops</li>
      </ul>

      <p>into cohesive AI platforms.</p>

      <h2>The Companies That Win Will Build AI Infrastructure, Not AI Features</h2>

      <p>Most organizations are still building isolated AI features:</p>

      <ul>
        <li>chatbots</li>
        <li>copilots</li>
        <li>assistants</li>
        <li>summarizers</li>
      </ul>

      <p>But the companies that dominate the next decade will build reusable AI infrastructure.</p>

      <p>Internal platforms that provide:</p>

      <ul>
        <li>shared memory systems</li>
        <li>reusable retrieval pipelines</li>
        <li>orchestration frameworks</li>
        <li>agent governance</li>
        <li>evaluation tooling</li>
        <li>observability dashboards</li>
        <li>model routing</li>
        <li>enterprise grounding</li>
        <li>security boundaries</li>
      </ul>

      <blockquote>AI platforms, not AI experiments.</blockquote>

      <h2>The Bigger Shift Nobody Is Talking About</h2>

      <p>We are moving from:</p>

      <blockquote>software that waits for instructions</blockquote>

      <p>to</p>

      <blockquote>systems that pursue outcomes</blockquote>

      <p>That is a profound architectural change.</p>

      <p>And it will redefine engineering, operations, enterprise workflows, product design, and decision-making itself.</p>

      <p>The next generation of AI systems will not just assist humans.</p>

      <p>They will collaborate with humans. Reason with humans. Operate alongside humans.</p>

      <p>The future of AI is not one model.</p>

      <p>It is intelligent systems working together.</p>

      <p>That is where the real revolution begins.</p>

      <p><strong>— Debosmita Roy</strong><br />AI Systems Architect | Agentic AI | Enterprise Intelligence</p>
    `
  }
];

export default function App() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProjectSlug, setActiveProjectSlug] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const pushRoute = (hash, state = {}) => {
    const nextHash = hash.startsWith("#") ? hash : `#${hash}`;
    if (window.location.hash !== nextHash) {
      window.history.pushState(state, "", nextHash);
    }
  };

  const openCaseStudy = (slug) => {
    setActiveProjectSlug(slug);
    setSelectedArticle(null);
    setPage("caseStudy");
    setMenuOpen(false);
    pushRoute(`#project-${slug}`, { page: "caseStudy", slug });
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
  };

  const openArticle = (article) => {
    setSelectedArticle(article);
    setActiveProjectSlug(null);
    setPage("article");
    setMenuOpen(false);

    pushRoute(`#writing-${article.slug}`, { page: "article", slug: article.slug });

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

//   const openArticle = (article) => {
//   if (!article) return;

//   setSelectedArticle(article);
//   setPage("article");
//   setMenuOpen(false);

//   window.history.replaceState(
//     { page: "article", slug: article.slug },
//     "",
//     `#writing-${article.slug}`
//   );

//   setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
// };

//   const openArticle = (article) => {
//   setSelectedArticle(article);
//   setPage("article");
//   setMenuOpen(false);

//   window.history.replaceState(
//     { page: "article", slug: article.slug },
//     "",
//     `#writing-${article.slug}`
//   );

//   setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
// };

  useEffect(() => {
    const openFromHash = () => {
      const hash = window.location.hash || "#home";

      if (hash.startsWith("#project-")) {
        const slug = hash.replace("#project-", "");
        const matchedProject = projects.find((project) => project.slug === slug);

        if (matchedProject) {
          setActiveProjectSlug(matchedProject.slug);
          setSelectedArticle(null);
          setMenuOpen(false);
          setPage("caseStudy");
          setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
        }

        return;
      }

      if (hash.startsWith("#writing-")) {
        const slug = hash.replace("#writing-", "");
        const matchedArticle = newsletterContent.find(
          (article) => article.slug === slug
        );

        if (matchedArticle) {
          setSelectedArticle(matchedArticle);
          setActiveProjectSlug(null);
          setMenuOpen(false);
          setPage("article");
          setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
        }

        return;
      }

      const nextPage = hash.replace("#", "");
      if (nextPage === "home" || Object.prototype.hasOwnProperty.call(pages, nextPage) || nextPage === "contact" || nextPage === "privacy" || nextPage === "terms") {
        setSelectedArticle(null);
        setActiveProjectSlug(null);
        setMenuOpen(false);
        setPage(nextPage);
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
        return;
      }

      setSelectedArticle(null);
      setActiveProjectSlug(null);
      setMenuOpen(false);
      setPage("home");
    };
    // const openFromHash = () => {
    //   const hash = window.location.hash.replace("#project-", "");
    //   const matchedProject = projects.find((project) => project.slug === hash);
    //   if (matchedProject) {
    //     setActiveProjectSlug(matchedProject.slug);
    //     setPage("caseStudy");
    //     setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
    //   }
    // };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    window.addEventListener("popstate", openFromHash);
    return () => {
      window.removeEventListener("hashchange", openFromHash);
      window.removeEventListener("popstate", openFromHash);
    };
  }, []);

  const goToPage = (nextPage) => {
    setActiveProjectSlug(null);
    setSelectedArticle(null);

    pushRoute(`#${nextPage}`, { page: nextPage });
    setPage(nextPage);
    setMenuOpen(false);
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
  };

  const openFreeGift = () => {
    setActiveProjectSlug(null);
    setSelectedArticle(null);

    pushRoute("#learning", { page: "learning", section: "free-masterclass" });
    setPage("learning");
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById("free-masterclass")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 80);
  };

  // const goToPage = (nextPage) => {
  //   setActiveProjectSlug(null);
  //   if (window.location.hash) {
  //     window.history.replaceState(null, "", window.location.pathname);
  //   }
  //   setPage(nextPage);
  //   setMenuOpen(false);
  //   setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
  // };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#caa177]/30 selection:text-white">
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
      )}

      <aside className={`fixed left-0 top-0 z-[70] flex h-full w-80 max-w-[86vw] flex-col border-r border-zinc-800 bg-zinc-950 p-7 shadow-2xl transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Portfolio Menu</p>
            <h2 className="mt-2 text-2xl font-bold">Debosmita Roy</h2>
          </div>
          <button onClick={() => setMenuOpen(false)} className="text-3xl leading-none text-zinc-400 transition hover:text-white" aria-label="Close menu">
            ×
          </button>
        </div>

        <nav className="mt-8 flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto pr-1">
          {Object.entries(pages).map(([key, label]) => (
            <button key={key} onClick={() => goToPage(key)} className={`rounded-2xl border px-5 py-4 text-left transition ${page === key ? "border-white bg-white text-black" : "border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-600 hover:text-white"}`}>
              {label}
            </button>
          ))}
        </nav>

        <div className="mt-6 rounded-3xl border border-zinc-800 bg-zinc-900 p-5">
          <p className="text-sm leading-6 text-zinc-400">AI Engineer by heart. Builder of systems that think, learn, and scale.</p>
        </div>
      </aside>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/90 backdrop-blur-xl">
        <div className="border-b border-[#caa177]/20 bg-gradient-to-r from-[#caa177] via-[#ddb892] to-cyan-200 px-4 py-2 text-black">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <div className="flex flex-col items-center gap-2 text-sm font-semibold sm:flex-row">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white shadow-lg shadow-black/20" aria-hidden="true">
                <GiftIcon />
              </span>
              <span>
                <strong>Free Gift</strong>
                <span className="mx-2 text-black/50">-</span>
                Design Your AI Career with GenAI Masterclass ($199 Value)
              </span>
            </div>

            <button
              type="button"
              onClick={openFreeGift}
              className="rounded-full bg-black px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:scale-[1.02] hover:bg-zinc-900"
            >
              Get early access
            </button>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-4">
            <button onClick={() => setMenuOpen(true)} className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-[#caa177]/50 bg-transparent transition hover:bg-[#caa177]/10" aria-label="Open menu">
              <span className="h-0.5 w-5 rounded-full bg-[#caa177]" />
              <span className="h-0.5 w-5 rounded-full bg-[#caa177]" />
              <span className="h-0.5 w-5 rounded-full bg-[#caa177]" />
            </button>
            <a href="https://www.debosmita.ai" onClick={(event) => { event.preventDefault(); goToPage("home"); }} className="whitespace-nowrap text-left text-sm font-light uppercase tracking-[0.22em] text-zinc-100 transition hover:text-[#caa177] sm:text-base md:text-xl lg:text-2xl">
              Debosmita Roy
            </a>
          </div>

          <nav className="hidden items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-300 lg:flex">
            {Object.entries(pages).map(([key, label]) => (
              <button key={key} onClick={() => goToPage(key)} className={`rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-xl transition-all duration-300 hover:border-[#caa177]/40 hover:bg-[#caa177]/10 hover:text-[#caa177] ${page === key ? "border-[#caa177]/40 bg-[#caa177]/10 text-[#caa177]" : "text-zinc-300"}`}>
                {label}
              </button>
            ))}
            <button onClick={() => goToPage("contact")} className="rounded-full border border-[#caa177]/50 bg-[#caa177]/10 px-4 py-1.5 text-[#caa177] backdrop-blur-xl transition-all duration-300 hover:bg-[#caa177] hover:text-black">
              Let’s Talk
            </button>
          </nav>
        </div>
      </header>

      {page === "home" && <HomePage goToPage={goToPage} />}
      {page === "about" && <AboutPage />}
      {page === "projects" && <ProjectsPage openCaseStudy={openCaseStudy} />}
      {page === "learning" && <LearningPage goToPage={goToPage} />}
      {page === "aiLab" && <AIBuilderLabPage goToPage={goToPage} />}
      {page === "caseStudy" && (
        <CaseStudyPage
          project={projects.find((project) => project.slug === activeProjectSlug) || projects[0]}
          goToPage={goToPage}
        />
      )}
      {page === "writing" && <WritingPage openArticle={openArticle} />}
      {page === "speaking" && <SpeakingPage />}
      {page === "resources" && <ResourcesPage />}
      {page === "contact" && <ContactPage />}
      {page === "privacy" && <PrivacyPolicyPage />}
      {page === "terms" && <TermsPage />}
      {page === "home" && <NewsletterSection />}
      {page === "home" && <SpotifyPlaylistSection />}
      {page === "article" && (
        <ArticlePage
          article={selectedArticle}
          goToPage={goToPage}
        />
      )}
      <Footer goToPage={goToPage} />
      <FloatingVedaChat />
    </div>
  );
}

function GiftIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M13.5 4.5h-2.19A2.3 2.3 0 0 0 12 3.1a2.04 2.04 0 0 0-2.1-2.1c-.56.01-1.04.23-1.43.65A4.2 4.2 0 0 0 8 2.52a4.2 4.2 0 0 0-.47-.87A1.95 1.95 0 0 0 6.1 1a2.04 2.04 0 0 0-2.1 2.1c.01.55.24 1.02.69 1.4H2.5A1 1 0 0 0 1.5 5.5v2A1 1 0 0 0 2.5 8.5v4a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM9.31 2.28c.16-.18.36-.28.63-.28.6 0 1.07.47 1.06 1.07-.01.26-.11.46-.28.62-.59.53-1.58.71-2.19.78.08-.66.28-1.62.78-2.19ZM5.31 2.3C5.5 2.11 5.76 2 6.07 2c.26 0 .47.1.62.28.53.59.71 1.57.78 2.18-.61-.06-1.59-.25-2.18-.77A.82.82 0 0 1 5 3.06c0-.29.11-.55.31-.76ZM2.5 5.5h5v2h-5v-2Zm1 3h4v4h-4v-4Zm9 4h-4v-4h4v4Zm1-5h-5v-2h5v2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChatOrbitIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5.25 9.75C5.25 6.85 8.27 4.5 12 4.5s6.75 2.35 6.75 5.25S15.73 15 12 15c-.61 0-1.2-.06-1.75-.18L6.5 17.25l.73-3.17a5.2 5.2 0 0 1-1.98-4.33Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.25 9.75h.01M12 9.75h.01M14.75 9.75h.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M3.75 12.25a8.2 8.2 0 0 0 8.5 7.5M20.25 12.25a8.2 8.2 0 0 1-8.5 7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.65" />
    </svg>
  );
}

function FloatingVedaChat() {
  const starterPrompts = [
    "What should I learn first for RAG?",
    "Suggest a portfolio project",
    "Explain Azure AI Foundry",
    "Which AI career path fits me?",
    "Give me a 7-day AI learning plan",
    "What should I build this week?",
    "How do I earn a RAG badge?",
    "Explain agentic AI simply",
    "Summarize Debosmita's projects",
    "Turn this into a LinkedIn post",
    "What newsletter should I read first?",
    "Which tools should I learn for GenAI?"
  ];

  const siteKnowledge = [
    ...projects.map((project) => ({
      title: project.title,
      type: "Project",
      keywords: [project.title, project.subtitle, project.desc, project.detail, ...(project.tags || [])].join(" "),
      summary: `${project.title}: ${project.subtitle}. ${project.desc} Key areas: ${(project.tags || []).join(", ")}.`
    })),
    ...newsletterContent.map((article) => ({
      title: article.title,
      type: "Newsletter",
      keywords: [article.title, article.subtitle, article.category, article.excerpt, article.content].join(" "),
      summary: `${article.title}: ${article.excerpt}`
    })),
    ...microsoftAiForBeginnersCurriculum.map((module) => ({
      title: module.title,
      type: "Learning Module",
      keywords: [module.title, module.summary, module.sourcePath, ...module.children.flatMap((child) => [child.title, child.focus, child.lesson, child.notebook, child.lab, child.assignment].filter(Boolean))].join(" "),
      summary: `${module.title}: ${module.summary}`
    })),
    {
      title: "AI Builder Lab",
      type: "Learning Portal",
      keywords: "AI Lab streaks weekly challenge RAG career quiz portfolio project generator newsletter companion flashcards badges LinkedIn learner wall toolkit directory",
      summary: "The AI Builder Lab includes streaks, weekly challenges, career path guidance, project ideas, newsletter exercises, flashcards, badges, LinkedIn sharing, and a toolkit directory."
    },
    {
      title: "Career Tracks",
      type: "Learning Portal",
      keywords: "GenAI Builder Data Scientist AI Product Engineer Cloud AI Architect Agentic AI Engineer career track quiz",
      summary: "Career tracks include GenAI Builder, Data Scientist, AI Product Engineer, Cloud AI Architect, and Agentic AI Engineer."
    }
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      role: "assistant",
      text:
        "Hi, I'm Veda. Your AI guide to agentic AI, software engineering, research and career growth at Debosmita.ai."
    }
  ]);

  const scoreKnowledge = (question) => {
    const terms = question
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, " ")
      .split(/\s+/)
      .filter((term) => term.length > 2);

    return siteKnowledge
      .map((item) => {
        const searchable = `${item.title} ${item.type} ${item.keywords}`.toLowerCase();
        const score = terms.reduce((total, term) => total + (searchable.includes(term) ? 1 : 0), 0);
        return { ...item, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  };

  const getAssistantReply = (question) => {
    const normalizedQuestion = question.toLowerCase();
    const matches = scoreKnowledge(question);

    if (normalizedQuestion.includes("career") || normalizedQuestion.includes("track") || normalizedQuestion.includes("job")) {
      return "For career direction, start with the AI Career Path Quiz. The strongest tracks on this site are GenAI Builder, Data Scientist, AI Product Engineer, Cloud AI Architect, and Agentic AI Engineer. If you want hands-on momentum, choose GenAI Builder first, then build a tiny RAG assistant.";
    }

    if (normalizedQuestion.includes("rag") || normalizedQuestion.includes("retrieval") || normalizedQuestion.includes("vector")) {
      return "For RAG, use this path: learn embeddings, create a small document set, retrieve relevant chunks, generate grounded answers, then evaluate whether each answer cites the right context. The AI Lab weekly challenge is a good first build: a tiny RAG assistant in 30 minutes.";
    }

    if (normalizedQuestion.includes("agent") || normalizedQuestion.includes("agentic")) {
      return "Agentic AI means building systems that can plan, use tools, observe results, retry when something fails, and ask for human approval when needed. A strong starter project is a research agent with three tools: search, source summarization, and answer critique.";
    }

    if (normalizedQuestion.includes("azure") || normalizedQuestion.includes("foundry") || normalizedQuestion.includes("foundation model")) {
      return "Debosmita's latest newsletter frames Azure AI Foundry as an operating layer for foundation model systems: model selection, agents, evaluations, prompt optimization, guardrails, tracing, governance, and deployment working together instead of one isolated model call.";
    }

    if (normalizedQuestion.includes("project") || normalizedQuestion.includes("portfolio") || normalizedQuestion.includes("build")) {
      return "A strong portfolio project from this site is a RAG Research Agent: retrieve sources, draft an answer, check grounding, log failures, and ask for human approval. For beginners, start with a Personal AI Study Coach that recommends one lesson, one flashcard, and one practice task each day.";
    }

    if (normalizedQuestion.includes("7-day") || normalizedQuestion.includes("learning plan") || normalizedQuestion.includes("learn this week")) {
      return "Here is a 7-day AI plan: Day 1 learn embeddings, Day 2 learn RAG, Day 3 build a tiny retrieval demo, Day 4 study agents, Day 5 read the Azure AI Foundry newsletter, Day 6 create a project README, Day 7 share your progress on LinkedIn with one lesson learned and one screenshot.";
    }

    if (normalizedQuestion.includes("badge") || normalizedQuestion.includes("linkedin") || normalizedQuestion.includes("share")) {
      return "To earn and share a learning badge, complete one focused action: read a micro-lesson, answer a quiz, run a notebook, or finish a weekly challenge. Then share it on LinkedIn with this format: what I learned, what I built, what confused me, and what I will try next.";
    }

    if (normalizedQuestion.includes("newsletter") || normalizedQuestion.includes("read first")) {
      return "Start with Debosmita's Azure AI Foundry newsletter. It explains why modern AI builders need to understand the operating layer around foundation models: model routing, evaluations, prompt optimization, guardrails, traces, governance, and deployment.";
    }

    if (normalizedQuestion.includes("tool") || normalizedQuestion.includes("genai")) {
      return "For GenAI, learn these tools in order: prompt testing, embeddings, vector databases, RAG evaluation, Azure AI Foundry, agent frameworks, tracing, and MLOps monitoring. The goal is not just calling a model, but operating a reliable AI system.";
    }

    if (matches.length > 0) {
      return `I found this from Debosmita's website data:\n\n${matches.map((match) => `${match.type}: ${match.summary}`).join("\n\n")}\n\nYou can ask me to turn any of these into a learning path, project plan, or LinkedIn build-in-public post.`;
    }

    return "I can answer from Debosmita's website content: AI projects, newsletters, learning modules, AI Lab features, RAG, agents, Azure AI Foundry, career tracks, and portfolio ideas. Try asking: \"What should I build this week?\"";
  };

  const askAssistant = (question) => {
    const trimmedQuestion = question.trim();

    if (!trimmedQuestion) {
      return;
    }

    setChatMessages((messages) => [
      ...messages,
      { role: "user", text: trimmedQuestion },
      { role: "assistant", text: getAssistantReply(trimmedQuestion) }
    ]);
    setChatInput("");
    setIsOpen(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    askAssistant(chatInput);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[90] flex max-w-[calc(100vw-2rem)] flex-col items-end gap-3 sm:bottom-5 sm:right-5">
      {isOpen && (
        <section className="flex h-[min(34rem,calc(100vh-7rem))] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-[1.5rem] border border-cyan-300/30 bg-zinc-950 shadow-2xl shadow-cyan-500/20">
          <div className="flex shrink-0 items-center justify-between gap-3 border-b border-zinc-800 bg-[#070b12] px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-cyan-300 text-black">
                <ChatOrbitIcon />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-black text-white">Veda</p>
                <p className="text-xs text-cyan-200">Website knowledge agent</p>
              </div>
            </div>
            <button type="button" onClick={() => setIsOpen(false)} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-700 text-lg leading-none text-zinc-300 transition hover:border-white hover:text-white" aria-label="Minimize Veda">
              ×
            </button>
          </div>

          <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-4 py-4">
            {chatMessages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[88%] whitespace-pre-line break-words rounded-2xl px-4 py-3 text-sm leading-6 ${
                  message.role === "user"
                    ? "ml-auto bg-cyan-300 text-black"
                    : "mr-auto border border-zinc-800 bg-black/60 text-zinc-300"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="shrink-0 border-t border-zinc-800 px-4 py-4">
            <div className="mb-3 flex max-h-24 flex-wrap gap-2 overflow-y-auto pr-1">
              {starterPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => askAssistant(prompt)}
                  className="rounded-full border border-zinc-700 px-3 py-2 text-left text-xs font-semibold leading-4 text-zinc-300 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(event) => setChatInput(event.target.value)}
                placeholder="Ask Veda..."
                aria-label="Ask Veda"
                className="min-w-0 flex-1 rounded-2xl border border-zinc-700 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-300"
              />
              <button type="submit" className="shrink-0 rounded-2xl bg-[#caa177] px-4 py-3 text-sm font-black text-black transition hover:scale-[1.02]">
                Send
              </button>
            </form>
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="group flex items-center gap-3 rounded-full border border-cyan-300/50 bg-cyan-300 px-4 py-3 font-black text-black shadow-2xl shadow-cyan-500/30 transition hover:scale-[1.03] hover:bg-cyan-200"
        aria-label="Open Veda chatbot"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-cyan-200">
          <ChatOrbitIcon />
        </span>
        <span className="hidden pr-1 text-sm uppercase tracking-[0.14em] sm:inline">Ask Veda</span>
      </button>
    </div>
  );
}

function CinematicVedaRobot({ stages, signalCards }) {
  const pathwayLabels = [
    ["Resources for Beginners", stages[0]?.title || "Beginner"],
    ["Intermediates", stages[1]?.title || "Builder"],
    ["Advanced", stages[stages.length - 1]?.title || "Advanced"]
  ];

  return (
    <div className="relative min-h-[30rem] overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-black/50 p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_20%_70%,rgba(202,161,119,0.13),transparent_28%)]" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 520 520" role="img" aria-label="Animated Veda robot presenting beginner, intermediate, and advanced learning paths">
        <defs>
          <filter id="vedaGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="vedaCyan" x1="0" x2="1">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="100%" stopColor="#caa177" />
          </linearGradient>
        </defs>

        <g opacity="0.55">
          {[90, 150, 220, 305, 385, 445].map((x, index) => (
            <g key={x}>
              <circle cx={x} cy={index % 2 === 0 ? 90 : 128} r="4" fill="#67e8f9" filter="url(#vedaGlow)">
                <animate attributeName="opacity" values="0.25;1;0.25" dur={`${2.2 + index * 0.18}s`} repeatCount="indefinite" />
              </circle>
              <line x1={x} y1={index % 2 === 0 ? 90 : 128} x2={260} y2={250} stroke="#67e8f9" strokeWidth="1" strokeDasharray="5 8">
                <animate attributeName="stroke-dashoffset" values="40;0" dur="2.8s" repeatCount="indefinite" />
              </line>
            </g>
          ))}
        </g>

        <g filter="url(#vedaGlow)">
          <line x1="260" y1="250" x2="82" y2="170" stroke="url(#vedaCyan)" strokeWidth="8" strokeLinecap="round" strokeDasharray="180" strokeDashoffset="180">
            <animate attributeName="stroke-dashoffset" values="180;0;0;180" dur="5.8s" repeatCount="indefinite" />
          </line>
          <line x1="260" y1="250" x2="74" y2="310" stroke="url(#vedaCyan)" strokeWidth="8" strokeLinecap="round" strokeDasharray="190" strokeDashoffset="190">
            <animate attributeName="stroke-dashoffset" values="190;190;0;0;190" dur="6.2s" repeatCount="indefinite" />
          </line>
          <line x1="260" y1="250" x2="438" y2="238" stroke="url(#vedaCyan)" strokeWidth="8" strokeLinecap="round" strokeDasharray="180" strokeDashoffset="180">
            <animate attributeName="stroke-dashoffset" values="180;120;0;0;180" dur="6.6s" repeatCount="indefinite" />
          </line>
        </g>

        <g>
          <animateTransform attributeName="transform" type="translate" values="0 -8;0 8;0 -8" dur="4.5s" repeatCount="indefinite" />
          <ellipse cx="260" cy="362" rx="78" ry="18" fill="#67e8f9" opacity="0.12">
            <animate attributeName="rx" values="60;88;60" dur="4.5s" repeatCount="indefinite" />
          </ellipse>
          <rect x="204" y="208" width="112" height="118" rx="34" fill="#071116" stroke="#67e8f9" strokeWidth="3" />
          <rect x="218" y="160" width="84" height="70" rx="26" fill="#0b1220" stroke="#caa177" strokeWidth="3" />
          <circle cx="242" cy="194" r="7" fill="#67e8f9">
            <animate attributeName="r" values="5;8;5" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="278" cy="194" r="7" fill="#67e8f9">
            <animate attributeName="r" values="8;5;8" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <path d="M236 214 Q260 226 284 214" stroke="#caa177" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M230 250h60M230 275h60M242 300h36" stroke="#67e8f9" strokeWidth="3" strokeLinecap="round" opacity="0.7">
            <animate attributeName="opacity" values="0.35;1;0.35" dur="2s" repeatCount="indefinite" />
          </path>
          <line x1="260" y1="160" x2="260" y2="134" stroke="#67e8f9" strokeWidth="4" strokeLinecap="round" />
          <circle cx="260" cy="128" r="8" fill="#caa177">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
          </circle>
        </g>

        {[
          [74, 170, "#67e8f9"],
          [66, 310, "#caa177"],
          [446, 238, "#67e8f9"]
        ].map(([cx, cy, fill], index) => (
          <g key={`${cx}-${cy}`} filter="url(#vedaGlow)">
            <circle cx={cx} cy={cy} r="18" fill={fill} opacity="0.92">
              <animate attributeName="r" values="14;20;14" dur={`${2 + index * 0.35}s`} repeatCount="indefinite" />
            </circle>
            <circle cx={cx} cy={cy} r="32" fill="none" stroke={fill} strokeWidth="1.5" opacity="0.55">
              <animate attributeName="r" values="22;38;22" dur={`${2.4 + index * 0.3}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </svg>

      <div className="relative grid min-h-[28rem] grid-rows-[1fr_auto]">
        <div className="grid grid-cols-2 gap-3 text-xs font-black uppercase tracking-[0.14em] text-white">
          <div className="self-start rounded-2xl border border-cyan-300/30 bg-black/70 p-4 shadow-xl shadow-cyan-500/10">
            <p className="text-cyan-200">{pathwayLabels[0][0]}</p>
            <p className="mt-2 text-zinc-300">{pathwayLabels[0][1]}</p>
          </div>
          <div className="self-start justify-self-end rounded-2xl border border-cyan-300/30 bg-black/70 p-4 text-right shadow-xl shadow-cyan-500/10">
            <p className="text-cyan-200">{pathwayLabels[2][0]}</p>
            <p className="mt-2 text-zinc-300">{pathwayLabels[2][1]}</p>
          </div>
          <div className="col-span-2 mt-24 max-w-[15rem] rounded-2xl border border-[#caa177]/40 bg-black/70 p-4 shadow-xl shadow-[#caa177]/10">
            <p className="text-[#caa177]">{pathwayLabels[1][0]}</p>
            <p className="mt-2 text-zinc-300">{pathwayLabels[1][1]}</p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {signalCards.map((card) => (
            <article key={card.title} className="rounded-2xl border border-zinc-800 bg-zinc-950/85 p-4 backdrop-blur">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-cyan-200">{card.label}</p>
              <h3 className="mt-2 text-sm font-bold text-white">{card.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function ImmersiveVedaBackdrop({ label }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_6%,rgba(34,211,238,0.18),transparent_26%),radial-gradient(circle_at_18%_34%,rgba(202,161,119,0.12),transparent_28%),linear-gradient(180deg,rgba(8,47,73,0.2),rgba(0,0,0,0)_34%)]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(103,232,249,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(103,232,249,0.45)_1px,transparent_1px)] [background-size:64px_64px] [transform:perspective(900px)_rotateX(64deg)_translateY(-18rem)_scale(1.35)]" />
      <div className="absolute left-1/2 top-24 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full border border-cyan-300/10 shadow-[0_0_120px_rgba(34,211,238,0.12)]" />
      <div className="absolute right-[-8rem] top-32 hidden h-[44rem] w-[32rem] opacity-80 lg:block">
        <svg className="h-full w-full" viewBox="0 0 420 580" fill="none" role="img" aria-label={`Veda immersive robot presenter for ${label}`}>
          <defs>
            <filter id="immersiveVedaGlow">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="immersiveVedaMetal" x1="0" x2="1">
              <stop offset="0%" stopColor="#e5faff" stopOpacity="0.9" />
              <stop offset="55%" stopColor="#67e8f9" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#caa177" stopOpacity="0.65" />
            </linearGradient>
          </defs>

          <g opacity="0.5">
            {[72, 124, 180, 248, 310, 360].map((y, index) => (
              <g key={y}>
                <circle cx={index % 2 ? 96 : 54} cy={y} r="4" fill="#67e8f9" filter="url(#immersiveVedaGlow)">
                  <animate attributeName="opacity" values="0.15;0.95;0.15" dur={`${2.2 + index * 0.25}s`} repeatCount="indefinite" />
                </circle>
                <line x1={index % 2 ? 96 : 54} y1={y} x2="232" y2="252" stroke="#67e8f9" strokeWidth="1.5" strokeDasharray="7 12">
                  <animate attributeName="stroke-dashoffset" values="60;0" dur="3s" repeatCount="indefinite" />
                </line>
              </g>
            ))}
          </g>

          <g filter="url(#immersiveVedaGlow)" opacity="0.92">
            <line x1="222" y1="276" x2="42" y2="172" stroke="#67e8f9" strokeWidth="10" strokeLinecap="round" strokeDasharray="220">
              <animate attributeName="stroke-dashoffset" values="220;0;0;220" dur="7s" repeatCount="indefinite" />
            </line>
            <line x1="222" y1="280" x2="38" y2="328" stroke="#caa177" strokeWidth="10" strokeLinecap="round" strokeDasharray="220">
              <animate attributeName="stroke-dashoffset" values="220;220;0;0;220" dur="7.4s" repeatCount="indefinite" />
            </line>
            <line x1="228" y1="280" x2="360" y2="236" stroke="#67e8f9" strokeWidth="10" strokeLinecap="round" strokeDasharray="180">
              <animate attributeName="stroke-dashoffset" values="180;90;0;0;180" dur="7.8s" repeatCount="indefinite" />
            </line>
          </g>

          <g>
            <animateTransform attributeName="transform" type="translate" values="0 -10;0 12;0 -10" dur="5.2s" repeatCount="indefinite" />
            <ellipse cx="224" cy="462" rx="92" ry="20" fill="#67e8f9" opacity="0.14">
              <animate attributeName="rx" values="74;106;74" dur="5.2s" repeatCount="indefinite" />
            </ellipse>
            <path d="M154 274c0-46 31-78 72-78s72 32 72 78v74c0 46-31 78-72 78s-72-32-72-78v-74Z" fill="url(#immersiveVedaMetal)" opacity="0.72" stroke="#67e8f9" strokeWidth="3" />
            <rect x="168" y="132" width="116" height="90" rx="34" fill="#071116" opacity="0.92" stroke="#e5faff" strokeWidth="3" />
            <circle cx="202" cy="172" r="9" fill="#67e8f9">
              <animate attributeName="r" values="7;11;7" dur="1.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="250" cy="172" r="9" fill="#67e8f9">
              <animate attributeName="r" values="11;7;11" dur="1.8s" repeatCount="indefinite" />
            </circle>
            <path d="M198 196 Q226 210 254 196" stroke="#caa177" strokeWidth="5" strokeLinecap="round" />
            <line x1="226" y1="132" x2="226" y2="96" stroke="#67e8f9" strokeWidth="5" strokeLinecap="round" />
            <circle cx="226" cy="88" r="10" fill="#caa177">
              <animate attributeName="opacity" values="0.35;1;0.35" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <path d="M186 306h80M188 334h76M202 364h48" stroke="#071116" strokeWidth="6" strokeLinecap="round" opacity="0.75" />
          </g>

          {[
            [42, 172, "BEGINNER"],
            [38, 328, "INTERMEDIATE"],
            [360, 236, "ADVANCED"]
          ].map(([cx, cy, text], index) => (
            <g key={text} filter="url(#immersiveVedaGlow)">
              <circle cx={cx} cy={cy} r="20" fill={index === 1 ? "#caa177" : "#67e8f9"} opacity="0.9">
                <animate attributeName="r" values="16;24;16" dur={`${2.2 + index * 0.25}s`} repeatCount="indefinite" />
              </circle>
              <text x={cx} y={cy + 46} textAnchor="middle" fill="#e5faff" fontSize="12" fontWeight="800" letterSpacing="2">{text}</text>
            </g>
          ))}
        </svg>
      </div>

      <div className="absolute left-6 top-[18rem] hidden w-52 rotate-[-5deg] rounded-2xl border border-cyan-300/20 bg-black/30 p-4 shadow-2xl shadow-cyan-500/10 backdrop-blur md:block">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">Veda Scan</p>
        <p className="mt-2 text-sm leading-6 text-zinc-300">Beginner, intermediate, and advanced signals are active across this page.</p>
      </div>
      <div className="absolute bottom-32 right-12 hidden w-60 rotate-[4deg] rounded-2xl border border-[#caa177]/25 bg-black/30 p-4 shadow-2xl shadow-[#caa177]/10 backdrop-blur xl:block">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#caa177]">Neural Presentation</p>
        <p className="mt-2 text-sm leading-6 text-zinc-300">Curriculum, guides, labs, and project tracks are projected into a cinematic learning layer.</p>
      </div>
    </div>
  );
}

function VedaNeuralGuide({ eyebrow, title, intro, theme, modeLabel, stages, signalCards, featureRoutes }) {
  const [introOpen, setIntroOpen] = useState(true);
  const [tourOpen, setTourOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const currentStage = stages[activeStep];
  const routeOptions =
    featureRoutes ||
    stages.slice(0, 3).map((stage, index) => ({
      label: index === 0 ? "Beginner" : index === 1 ? "Intermediate" : "Advanced",
      title: stage.title,
      desc: stage.desc,
      targetId: ""
    }));

  const openTour = () => {
    setIntroOpen(false);
    setActiveStep(0);
    setTourOpen(true);
  };

  const closeTour = () => {
    setTourOpen(false);
    setActiveStep(0);
  };

  const navigateToFeature = (route) => {
    setIntroOpen(false);
    setTourOpen(false);

    if (!route.targetId) {
      return;
    }

    setTimeout(() => {
      document.getElementById(route.targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 120);
  };

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-cyan-300/30 bg-[#050b12] p-6 shadow-2xl shadow-cyan-500/10 md:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.22),transparent_32%),radial-gradient(circle_at_85%_10%,rgba(202,161,119,0.18),transparent_30%),linear-gradient(135deg,rgba(8,47,73,0.5),rgba(0,0,0,0.92))]" />
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

      <div className="relative grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">{eyebrow}</p>
          <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-white md:text-6xl">{title}</h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-zinc-300">{intro}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={openTour}
              className="rounded-2xl bg-cyan-300 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:scale-[1.02] hover:bg-cyan-200"
            >
              Start Veda Guided Tour
            </button>
            <span className="inline-flex items-center rounded-2xl border border-[#caa177]/40 px-5 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#caa177]">
              {modeLabel}
            </span>
          </div>
        </div>

        <CinematicVedaRobot stages={stages} signalCards={signalCards} />
      </div>

      <div className="relative mt-8 grid gap-4 md:grid-cols-3">
        {signalCards.map((card) => (
          <article key={card.title} className="rounded-2xl border border-zinc-800 bg-black/40 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">{card.label}</p>
            <h3 className="mt-3 text-xl font-bold text-white">{card.title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">{card.desc}</p>
          </article>
        ))}
      </div>

      {introOpen && (
        <div className="fixed inset-0 z-[96] flex items-center justify-center overflow-y-auto bg-black/85 px-4 py-8 backdrop-blur-md">
          <div className="relative w-full max-w-6xl overflow-hidden rounded-[2rem] border border-cyan-300/40 bg-[#050b12] shadow-2xl shadow-cyan-500/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_24%,rgba(34,211,238,0.22),transparent_32%),radial-gradient(circle_at_20%_74%,rgba(202,161,119,0.16),transparent_28%),linear-gradient(135deg,rgba(8,47,73,0.72),rgba(0,0,0,0.95))]" />
            <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(103,232,249,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(103,232,249,0.55)_1px,transparent_1px)] [background-size:54px_54px] [transform:perspective(900px)_rotateX(58deg)_translateY(-12rem)_scale(1.25)]" />

            <div className="relative grid gap-6 p-5 md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <div className="inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
                  Veda Live Guide
                </div>
                <h3 className="mt-5 font-serif text-4xl font-light leading-tight text-white md:text-6xl">
                  Hi, I'm Veda.
                </h3>
                <p className="mt-5 text-lg leading-8 text-zinc-300">
                  Your AI guide to agentic AI, software engineering, research and career growth at Debosmita.ai. I can help you choose the right starting point and open the matching learning zone.
                </p>

                <div className="mt-8 grid gap-3 [perspective:1200px]">
                  {routeOptions.map((route, index) => (
                    <button
                      key={route.title}
                      type="button"
                      onClick={() => navigateToFeature(route)}
                      className="group rounded-2xl border border-cyan-300/25 bg-black/55 p-4 text-left shadow-xl shadow-cyan-950/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/70 hover:bg-cyan-300/10 hover:[transform:translateZ(22px)]"
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-300 text-sm font-black text-black">
                          0{index + 1}
                        </span>
                        <span>
                          <span className="block text-xs font-black uppercase tracking-[0.22em] text-[#caa177]">{route.label}</span>
                          <span className="mt-1 block text-xl font-bold text-white">{route.title}</span>
                          <span className="mt-2 block text-sm leading-6 text-zinc-400">{route.desc}</span>
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={openTour}
                    className="rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-black transition hover:scale-[1.02] hover:bg-cyan-200"
                  >
                    Start Guided Tour
                  </button>
                  <button
                    type="button"
                    onClick={() => setIntroOpen(false)}
                    className="rounded-2xl border border-zinc-700 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-zinc-300 transition hover:border-white hover:text-white"
                  >
                    Explore Myself
                  </button>
                </div>
              </div>

              <div className="relative">
                <CinematicVedaRobot stages={stages} signalCards={signalCards} />
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIntroOpen(false)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-black/60 text-xl text-zinc-300 transition hover:border-white hover:text-white"
              aria-label="Close Veda introduction"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {tourOpen && (
        <div className="fixed inset-0 z-[95] flex items-center justify-center bg-black/80 px-4 backdrop-blur-md">
          <div className="w-full max-w-2xl overflow-hidden rounded-[2rem] border border-cyan-300/40 bg-zinc-950 shadow-2xl shadow-cyan-500/20">
            <div className="flex items-center justify-between border-b border-zinc-800 bg-[#070b12] px-6 py-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-200">Veda Guided Journey</p>
                <h3 className="mt-2 text-2xl font-light text-white">{theme}</h3>
              </div>
              <button type="button" onClick={closeTour} className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-xl text-zinc-300 transition hover:border-white hover:text-white" aria-label="Close Veda guided tour">
                ×
              </button>
            </div>

            <div className="p-6">
              <div className="mb-5 grid gap-4 rounded-[1.5rem] border border-cyan-300/20 bg-black/40 p-4 md:grid-cols-[9rem_1fr] md:items-center">
                <div className="relative mx-auto h-28 w-28">
                  <div className="absolute inset-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 shadow-[0_0_45px_rgba(34,211,238,0.24)]" />
                  <div className="absolute left-1/2 top-5 h-12 w-16 -translate-x-1/2 rounded-2xl border border-[#caa177]/50 bg-zinc-950" />
                  <div className="absolute left-[2.15rem] top-10 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                  <div className="absolute right-[2.15rem] top-10 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                  <div className="absolute left-1/2 top-[4.6rem] h-10 w-14 -translate-x-1/2 rounded-2xl border border-cyan-300/50 bg-[#071116]" />
                  <div className="absolute left-1 top-16 h-1 w-11 origin-right -rotate-12 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.7)]" />
                  <div className="absolute right-1 top-16 h-1 w-11 origin-left rotate-12 rounded-full bg-[#caa177] shadow-[0_0_16px_rgba(202,161,119,0.7)]" />
                </div>
                <p className="leading-7 text-zinc-300">
                  Veda is presenting the page like a learning scene: one signal for beginners, one for intermediate builders, and one for advanced AI systems.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-zinc-800 bg-black/50 p-6">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#caa177]">
                  Step {activeStep + 1} of {stages.length}
                </p>
                <h4 className="mt-4 text-3xl font-light text-white">{currentStage.title}</h4>
                <p className="mt-4 leading-8 text-zinc-300">{currentStage.desc}</p>
              </div>

              <div className="mt-5 flex gap-2">
                {stages.map((stage, index) => (
                  <button
                    key={stage.title}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    className={`h-2 flex-1 rounded-full transition ${activeStep === index ? "bg-cyan-300" : "bg-zinc-800"}`}
                    aria-label={`Open guided tour step ${index + 1}`}
                  />
                ))}
              </div>

              <div className="mt-6 flex flex-wrap justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setActiveStep((step) => Math.max(step - 1, 0))}
                  className="rounded-2xl border border-zinc-700 px-5 py-3 font-semibold text-zinc-300 transition hover:border-white hover:text-white"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (activeStep === stages.length - 1) {
                      closeTour();
                      return;
                    }
                    setActiveStep((step) => step + 1);
                  }}
                  className="rounded-2xl bg-cyan-300 px-6 py-3 font-black text-black transition hover:scale-[1.02] hover:bg-cyan-200"
                >
                  {activeStep === stages.length - 1 ? "Finish Tour" : "Next Signal"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function HomePage({ goToPage }) {
  const calendlyLink = "https://calendly.com/debosmitaroy-ai/30min?month=2026-06";

  return (
    <main>
      <section className="relative mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl gap-12 overflow-hidden px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="absolute left-1/2 top-20 h-96 w-96 rounded-full bg-[#caa177]/10 blur-3xl" />

        <div className="relative z-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#caa177]">AI Architect & Engineering Leader</p>
          <h1 className="mt-8 max-w-3xl font-serif text-5xl font-light leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
            Building Intelligent Systems that Scale
          </h1>

          <div className="mt-8 flex items-center gap-3">
            <div className="h-px w-16 bg-[#caa177]" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#caa177]" />
          </div>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-300">
            I architect and build AI & ML powered platforms and multi-agent systems that solve real-world problems and drive measurable impact.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button onClick={() => goToPage("projects")} className="rounded-2xl bg-[#caa177] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:scale-[1.02] hover:bg-[#d8b58d]">
              View My Work →
            </button>

            <button onClick={() => goToPage("contact")} className="rounded-2xl border border-zinc-600 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:border-[#caa177] hover:text-[#caa177]">
              Let’s Connect →
            </button>

            <a
              href={calendlyLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-[#caa177]/60 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#caa177] transition hover:bg-[#caa177] hover:text-black"
            >
              Book a Call →
            </a>

            <button
              type="button"
              onClick={() => goToPage("learning")}
              className="rounded-2xl border border-zinc-600 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:border-[#caa177] hover:text-[#caa177]"
            >
              Learn AI →
            </button>
          </div>

          <div className="mt-14 flex items-center gap-4 text-zinc-500">
            <div className="h-px w-16 bg-zinc-700" />
            <span className="text-xs uppercase tracking-[0.35em]">Scroll</span>
            <div className="animate-bounce text-lg text-[#caa177]">↓</div>
          </div>
        </div>

        <div className="relative z-10 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-900 via-[#111111] to-black shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(202,161,119,0.24),transparent_42%)]" />
            <img
              src="/assets/debosmita-hero.png"
              alt="Debosmita Roy"
              className="relative z-10 h-[620px] w-full object-cover object-[center_top] scale-[1.02]"
            />
          </div>
        </div>
      </section>
      <CalloutGrid goToPage={goToPage} />
    </main>
  );
}

function CalloutGrid({ goToPage }) {
  const callouts = [
    {
      title: "I work in AI engineering",
      body: "I build intelligent systems across GenAI, Agentic AI, RAG, orchestration, observability & enterprise automation.",
      action: "Read my story",
      page: "about"
    },
    {
      title: "I write and teach AI thinking",
      body: "I share practical notes on agentic systems, engineering leadership, AI architecture & production readiness.",
      action: "Read writing",
      page: "writing"
    },
    {
      title: "Invite me to speak or collaborate",
      body: "Let’s discuss AI strategy, enterprise RAG, agentic platforms or intelligent automation transformation.",
      action: "Contact me",
      page: "contact"
    }
  ];

  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-24 md:grid-cols-2">
      {callouts.map((item) => (
        <div key={item.title} className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8 transition hover:-translate-y-1 hover:border-zinc-600">
          <h2 className="text-3xl font-bold">{item.title}</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-400">{item.body}</p>
          <button onClick={() => goToPage(item.page)} className="mt-7 rounded-2xl bg-white px-5 py-3 font-semibold text-black">
            {item.action} →
          </button>
        </div>
      ))}
    </section>
  );
}

function AboutPage() {
  return (
    <PageShell eyebrow="About" title="AI Engineer by heart. Architect by discipline. Builder by choice.">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900 p-8">
          <h2 className="text-3xl font-bold">My brief story</h2>
          <p className="mt-5 leading-8 text-zinc-300">
            I started with strong foundations in software engineering, testing, automation, telecommunications, and enterprise platforms. Over time, I evolved into building Agentic AI systems, RAG-backed enterprise intelligence, orchestration pipelines & AI-native SaaS platforms.
          </p>
          <p className="mt-5 leading-8 text-zinc-300">
            My north star is simple: build AI systems that are not only impressive demos but useful, reliable, observable & ready for real business outcomes.
          </p>
        </div>
        <div className="rounded-[2rem] border border-zinc-800 bg-black p-8">
          <h2 className="text-3xl font-bold">What I’m known for</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Agentic AI strategy",
              "Enterprise RAG design",
              "Multi-agent orchestration",
              "AI-powered SDLC automation",
              "Observability-driven intelligence",
              "Production-grade SaaS thinking"
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 text-zinc-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}

function ProjectsPage({ openCaseStudy }) {
  return (
    <PageShell eyebrow="Projects" title="AI product case studies built as a production-inspired portfolio.">
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8 transition hover:-translate-y-1 hover:border-zinc-600"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">{project.subtitle}</p>
            <h2 className="mt-4 text-3xl font-bold">{project.title}</h2>
            <p className="mt-5 leading-8 text-zinc-400">{project.desc}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => openCaseStudy(project.slug)}
                className="inline-flex rounded-2xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-[1.02]"
              >
                Open Case Study →
              </button>

              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-2xl border border-zinc-700 px-5 py-3 font-semibold text-white transition hover:border-zinc-500 hover:bg-zinc-900"
                >
                  GitHub →
                </a>
              )}

              {project.paperLink && (
                <a
                  href={project.paperLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-2xl border border-[#caa177]/60 px-5 py-3 font-semibold text-[#caa177] transition hover:bg-[#caa177] hover:text-black"
                >
                  IEEE Paper →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}

function LearningPage({ goToPage }) {
  const calendlyLink = "https://calendly.com/debosmitaroy-ai/30min?month=2026-06";
  const [selectedMicrosoftModuleSlug, setSelectedMicrosoftModuleSlug] = useState(
    microsoftAiForBeginnersCurriculum[0].slug
  );
  const selectedMicrosoftModule =
    microsoftAiForBeginnersCurriculum.find((module) => module.slug === selectedMicrosoftModuleSlug) ||
    microsoftAiForBeginnersCurriculum[0];

  const tracks = [
    {
      title: "AI Foundations",
      level: "Beginner",
      desc: "Learn how modern AI systems work before jumping into tools.",
      topics: ["LLMs", "Prompting", "Embeddings", "RAG", "AI evaluation"]
    },
    {
      title: "Data Science Foundations",
      level: "Beginner",
      desc: "Build the analytical base needed for practical AI and ML work.",
      topics: ["Python", "SQL", "Statistics", "EDA", "Dashboards"]
    },
    {
      title: "Machine Learning",
      level: "Intermediate",
      desc: "Train, validate, explain, and deploy models with real workflows.",
      topics: ["Feature engineering", "Model training", "Validation", "Metrics", "Deployment"]
    },
    {
      title: "Chatbots & RAG Apps",
      level: "Project Track",
      desc: "Build useful AI assistants over documents, websites, and business data.",
      topics: ["Vector search", "Chunking", "Retrieval", "Grounding", "Chat UI"]
    },
    {
      title: "Agentic AI Engineering",
      level: "Advanced",
      desc: "Design agents that use tools, memory, planning, and multi-step workflows.",
      topics: ["Tool use", "Memory", "Planning", "LangGraph", "Agent observability"]
    },
    {
      title: "Production AI Systems",
      level: "Professional",
      desc: "Move from notebooks to production-scale AI products and platforms.",
      topics: ["APIs", "MLOps", "Monitoring", "Cost controls", "Security"]
    }
  ];

  const growth = [
    "Free introductory courses to build trust and word-of-mouth",
    "Project showcase where learners publish what they build",
    "Weekly live sessions, AMAs, and AI build-alongs",
    "Free cheat sheets, tutorials, guides, and newsletters",
    "University, bootcamp, and corporate L&D partnerships",
    "Certificates, skill badges, LinkedIn sharing, and learner outcome stories"
  ];

  const monetization = [
    {
      title: "Subscriptions",
      desc: "Free fundamentals, then paid advanced content, mentorship, certificates, and hands-on labs."
    },
    {
      title: "One-Time Courses",
      desc: "Sell individual courses, learning paths, and bootcamp-style project bundles."
    },
    {
      title: "B2B / Enterprise",
      desc: "Offer company-wide licenses, team dashboards, and custom AI training programs."
    },
    {
      title: "Credentials",
      desc: "Verified certificates, proctored assessments, badges, and portfolio reviews."
    },
    {
      title: "Marketplace",
      desc: "Allow external instructors to publish specialized courses with revenue sharing."
    },
    {
      title: "Sponsorships",
      desc: "Partner with AI tooling, cloud, and MLOps companies for sponsored learning paths."
    }
  ];

  const labs = [
    "Build a chatbot over your own documents",
    "Create a RAG pipeline with embeddings and vector search",
    "Design an AI agent that uses tools and memory",
    "Deploy a FastAPI AI backend",
    "Evaluate hallucination, latency, cost, and answer quality",
    "Create a capstone project for LinkedIn and GitHub"
  ];

  const vedaStages = [
    {
      title: "Beginner AI Explorer",
      desc: "Veda starts with AI basics, Python, prompts, data literacy, and the mental models learners need before touching advanced tools."
    },
    {
      title: "GenAI Builder",
      desc: "The path moves into notebooks, embeddings, RAG, chatbot design, prompt evaluation, and small products learners can explain on GitHub."
    },
    {
      title: "RAG Engineer",
      desc: "Learners practice retrieval quality, grounding, citations, vector databases, and answer evaluation over real documents."
    },
    {
      title: "Agentic AI Engineer",
      desc: "Advanced builders learn tool use, memory, planning, orchestration, observability, retries, and human approval workflows."
    },
    {
      title: "Cloud AI Architect",
      desc: "The final stage connects Azure AI Foundry, MLOps, governance, monitoring, cost controls, and production-ready AI systems."
    }
  ];

  const vedaSignals = [
    {
      label: "Neural Path 01",
      title: "Foundations",
      desc: "AI basics, Python, ML concepts, data thinking, prompts, and responsible AI."
    },
    {
      label: "Neural Path 02",
      title: "Builder Mode",
      desc: "Notebooks, labs, project templates, RAG prototypes, and portfolio deliverables."
    },
    {
      label: "Neural Path 03",
      title: "Advanced Systems",
      desc: "Agents, Azure AI Foundry, evaluation, MLOps, observability, and deployment readiness."
    }
  ];

  return (
    <PageShell
      eyebrow="Learning Platform"
      title="Learn AI, ML, data science, and agentic systems by building real projects."
      immersive
    >
      <VedaNeuralGuide
        eyebrow="Veda Neural Academy"
        title="Enter the AI learning universe."
        theme="Learn in the Neural Academy"
        modeLabel="Learn → Practice → Build"
        intro="Welcome to the Neural Academy. Veda helps learners move from AI foundations to real-world GenAI systems, one guided learning path at a time."
        stages={vedaStages}
        signalCards={vedaSignals}
        featureRoutes={[
          {
            label: "Resources for Beginners",
            title: "Debosmita AI-For-Beginners",
            desc: "Start with lessons, notebooks, labs, and capstone work designed for first-time AI builders.",
            targetId: "debosmita-ai-curriculum"
          },
          {
            label: "Intermediates",
            title: "Learning Tracks",
            desc: "Move into data science, machine learning, chatbots, RAG apps, and project-based learning.",
            targetId: "learning-tracks"
          },
          {
            label: "Advanced",
            title: "Hands-On Practice Lab",
            desc: "Build agents, RAG pipelines, production-style AI demos, and portfolio-ready capstones.",
            targetId: "hands-on-practice-lab"
          }
        ]}
      />

      <section className="mt-12 rounded-[2rem] border border-[#caa177]/30 bg-[#caa177]/10 p-8">
        <p className="max-w-4xl text-lg leading-8 text-zinc-300">
          This learning platform is designed for budding AI professionals, data science learners,
          fresh graduates, and motivated high school students who want to move from fundamentals
          to hands-on AI product building.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={calendlyLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-[#caa177] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:scale-[1.02] hover:bg-[#d8b58d]"
          >
            Book a Learning Call →
          </a>

          <button
            type="button"
            onClick={() => goToPage("resources")}
            className="rounded-2xl border border-zinc-600 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:border-[#caa177] hover:text-[#caa177]"
          >
            Explore Resources →
          </button>
        </div>
      </section>

      <section id="free-masterclass" className="mt-12 scroll-mt-36 overflow-hidden rounded-[2rem] border border-cyan-300/30 bg-[#070b12] p-8 shadow-2xl shadow-cyan-500/10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-300 text-black">
                <GiftIcon />
              </span>
              Free Gift
            </div>

            <h2 className="mt-6 font-serif text-4xl font-light leading-tight text-white md:text-5xl">
              Design Your AI Career with GenAI Masterclass
            </h2>

            <p className="mt-5 text-lg font-semibold text-[#caa177]">
              $199 Value • Early Access
            </p>

            <p className="mt-5 leading-8 text-zinc-300">
              A practical starter session for learners and professionals who want to use AI with clarity: choose the right learning path, build portfolio-ready projects, and turn GenAI, RAG, agents, cloud, and data science into career momentum.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={calendlyLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-cyan-300 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:scale-[1.02] hover:bg-cyan-200"
              >
                Get early access →
              </a>

              <button
                type="button"
                onClick={() => goToPage("resources")}
                className="rounded-2xl border border-zinc-600 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:border-cyan-300 hover:text-cyan-200"
              >
                View free resources →
              </button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Map your GenAI, data science, and cloud learning path",
              "Identify portfolio projects employers can understand",
              "Learn how RAG and agentic systems fit real products",
              "Build a weekly execution plan for model training and full-stack AI apps"
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-zinc-800 bg-black/40 p-5 text-zinc-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="debosmita-ai-curriculum" className="mt-12 scroll-mt-36 overflow-hidden rounded-[2rem] border border-cyan-300/30 bg-gradient-to-br from-[#071116] via-black to-zinc-950 p-6 shadow-2xl shadow-cyan-500/10 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Debosmita AI-For-Beginners</p>
            <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-white md:text-5xl">
              My original beginner AI curriculum with lessons, notebooks, labs, and capstone work.
            </h2>
            <p className="mt-5 max-w-4xl leading-8 text-zinc-300">
              A practical learning path for students, career switchers, and builders who want to learn AI by doing: read the lesson, run the notebook, complete the lab, then turn the work into a portfolio artifact.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://github.com/debosmita-29/AI-For-Beginners"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-cyan-300 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:scale-[1.02] hover:bg-cyan-200"
              >
                Open curriculum →
              </a>

              <a
                href="https://github.com/debosmita-29/AI-For-Beginners/tree/main/notebooks"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-cyan-300/50 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-cyan-200 transition hover:bg-cyan-300 hover:text-black"
              >
                View notebooks →
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "7 modules",
                desc: "Setup, AI foundations, Python data, ML, neural networks, GenAI/RAG, and responsible AI."
              },
              {
                title: "7 notebooks",
                desc: "Runnable starter notebooks with beginner-safe examples and no required API keys."
              },
              {
                title: "Hands-on labs",
                desc: "Each lesson includes a lab prompt, deliverable, and practical reflection task."
              },
              {
                title: "Portfolio capstone",
                desc: "Learners finish with a responsible AI project plan they can publish and explain."
              }
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-zinc-800 bg-black/50 p-5">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            ["Lessons", "https://github.com/debosmita-29/AI-For-Beginners/tree/main/lessons"],
            ["Labs", "https://github.com/debosmita-29/AI-For-Beginners/tree/main/labs"],
            ["Resources", "https://github.com/debosmita-29/AI-For-Beginners/tree/main/resources"],
            ["Project Template", "https://github.com/debosmita-29/AI-For-Beginners/blob/main/resources/project-template.md"]
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5 text-center font-semibold text-zinc-300 transition hover:-translate-y-1 hover:border-cyan-300 hover:text-cyan-200"
            >
              {label} →
            </a>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-[2rem] border border-zinc-800 bg-zinc-950 p-6 md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#caa177]">Microsoft AI For Beginners Map</p>
            <h2 className="mt-4 font-serif text-4xl font-light text-white md:text-5xl">A full beginner AI curriculum inside this learning portal.</h2>
            <p className="mt-5 max-w-4xl leading-8 text-zinc-400">
              This section mirrors the public Microsoft AI For Beginners curriculum structure: setup, core lesson pages, child lessons, notebooks, labs, assignments, responsible AI, multimodal extras, and sketchnote review material. Lesson content opens from the official Microsoft GitHub source.
            </p>
          </div>

          <a
            href="https://microsoft.github.io/AI-For-Beginners/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-[#caa177]/50 px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.18em] text-[#caa177] transition hover:bg-[#caa177] hover:text-black"
          >
            Open original curriculum →
          </a>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {[
            "12-week curriculum",
            "24 core lessons",
            "PyTorch, TensorFlow, and Keras notebooks",
            "Labs, assignments, responsible AI, and extras"
          ].map((feature) => (
            <div key={feature} className="rounded-2xl border border-zinc-800 bg-black/40 p-4 text-sm font-semibold text-zinc-300">
              {feature}
            </div>
          ))}
        </div>

        <div className="mt-8 flex gap-3 overflow-x-auto pb-2">
          {microsoftAiForBeginnersCurriculum.map((module) => (
            <button
              key={module.slug}
              type="button"
              onClick={() => setSelectedMicrosoftModuleSlug(module.slug)}
              className={`min-w-[190px] rounded-2xl border p-4 text-left transition ${
                selectedMicrosoftModuleSlug === module.slug
                  ? "border-[#caa177] bg-[#caa177]/10 text-white"
                  : "border-zinc-800 bg-black/30 text-zinc-400 hover:border-zinc-600 hover:text-white"
              }`}
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#caa177]">
                {module.children.length} {module.children.length === 1 ? "page" : "pages"}
              </p>
              <p className="mt-2 font-semibold">{module.title}</p>
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-[2rem] border border-zinc-800 bg-black/40 p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-3xl font-light text-white">{selectedMicrosoftModule.title}</h3>
              <p className="mt-3 max-w-3xl leading-7 text-zinc-400">{selectedMicrosoftModule.summary}</p>
            </div>

            <a
              href={`${microsoftAiTreeUrl}${selectedMicrosoftModule.sourcePath}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-zinc-700 px-5 py-3 text-center text-sm font-semibold text-zinc-300 transition hover:border-[#caa177] hover:text-[#caa177]"
            >
              Module source →
            </a>
          </div>

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            {selectedMicrosoftModule.children.map((lesson) => {
              const resources = [
                lesson.lesson && { label: "Lesson", path: lesson.lesson },
                lesson.notebook && { label: "Notebook", path: lesson.notebook },
                ...(lesson.notebooks || []).map((path, index) => ({ label: `Notebook ${index + 1}`, path })),
                lesson.lab && { label: "Lab", path: lesson.lab },
                lesson.assignment && { label: "Assignment", path: lesson.assignment },
                lesson.microsoftLearn && { label: "Microsoft Learn", href: lesson.microsoftLearn }
              ].filter(Boolean);

              return (
                <article key={`${lesson.number}-${lesson.title}`} className="rounded-[1.5rem] border border-zinc-800 bg-zinc-950 p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#caa177] text-sm font-black text-black">
                      {lesson.number}
                    </span>
                    <div>
                      <h4 className="text-xl font-bold text-white">{lesson.title}</h4>
                      <p className="mt-3 leading-7 text-zinc-400">{lesson.focus}</p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {resources.map((resource) => {
                      const href =
                        resource.href ||
                        `${resource.path.endsWith(".md") || resource.path.endsWith(".ipynb") ? microsoftAiBaseUrl : microsoftAiTreeUrl}${resource.path}`;

                      return (
                        <a
                          key={`${lesson.number}-${resource.label}-${href}`}
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-zinc-700 px-3 py-1.5 text-xs font-semibold text-zinc-300 transition hover:border-[#caa177] hover:text-[#caa177]"
                        >
                          {resource.label}
                        </a>
                      );
                    })}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="learning-tracks" className="mt-12 scroll-mt-36">
        <h2 className="font-serif text-4xl font-light text-white md:text-5xl">Learning Tracks</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track) => (
            <article key={track.title} className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-7 transition hover:-translate-y-1 hover:border-[#caa177]/60">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#caa177]">{track.level}</p>
              <h3 className="mt-4 text-2xl font-bold text-white">{track.title}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{track.desc}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {track.topics.map((topic) => (
                  <span key={topic} className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                    {topic}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="hands-on-practice-lab" className="mt-12 grid scroll-mt-36 gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#caa177]">Hands-On Practice Lab</p>
          <h2 className="mt-4 font-serif text-4xl font-light text-white">Build while you learn.</h2>
          <p className="mt-5 leading-8 text-zinc-400">
            Learners should not only watch tutorials. They should build chatbots, agents,
            RAG apps, pipelines, dashboards, and production-style AI demos with guided labs.
          </p>

          <div className="mt-7 grid gap-3">
            {labs.map((lab) => (
              <div key={lab} className="rounded-2xl border border-zinc-800 bg-black/40 px-5 py-4 text-zinc-300">
                {lab}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#caa177]">What I Provide</p>

          <div className="mt-6 space-y-5 text-zinc-300">
            <p>Guided tutorials, white papers, quizzes, exercises, notebooks, and project templates.</p>
            <p>Beginner-friendly explainers for AI, ML, data science, LLMs, agents, and MLOps.</p>
            <p>Capstone projects learners can publish on GitHub and showcase on LinkedIn.</p>
            <p>A backend-protected LLM sandbox with rate limits, auth, logging, and budget controls.</p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-4xl font-light text-white md:text-5xl">Join a Learning Community Built for Real AI Careers</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {growth.map((item) => (
            <div key={item} className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 text-zinc-300">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-4xl font-light text-white md:text-5xl">Programs for Every Stage</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {monetization.map((model) => (
            <article key={model.title} className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-7">
              <h3 className="text-2xl font-bold text-white">{model.title}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{model.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-[2rem] border border-[#caa177]/40 bg-black p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#caa177]">Begin Your AI Journey</p>
        <h2 className="mt-4 font-serif text-4xl font-light text-white">Start Building in Your First Week.</h2>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 p-5">
            <p className="text-3xl font-bold text-[#caa177]">01</p>
            <p className="mt-3 text-zinc-300">Publish free AI fundamentals and chatbot starter content.</p>
          </div>
          <div className="rounded-2xl border border-zinc-800 p-5">
            <p className="text-3xl font-bold text-[#caa177]">02</p>
            <p className="mt-3 text-zinc-300">Offer paid mentorship calls, cohort sessions, and project reviews.</p>
          </div>
          <div className="rounded-2xl border border-zinc-800 p-5">
            <p className="text-3xl font-bold text-[#caa177]">03</p>
            <p className="mt-3 text-zinc-300">Add certificates, learner showcases, and corporate training packages.</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

// function LearningPage({ goToPage }) {
//   const tracks = [
//     {
//       title: "AI Foundations",
//       items: ["How LLMs work", "Prompting", "Embeddings", "RAG", "Evaluation"]
//     },
//     {
//       title: "Data Science Foundations",
//       items: ["Python", "SQL", "Statistics", "EDA", "Dashboards"]
//     },
//     {
//       title: "Machine Learning",
//       items: ["Supervised ML", "Feature engineering", "Model training", "Validation", "Deployment"]
//     },
//     {
//       title: "Agentic AI Engineering",
//       items: ["Tool use", "Memory", "Planning", "Multi-agent workflows", "Observability"]
//     },
//     {
//       title: "Production AI Projects",
//       items: ["Chatbots", "RAG apps", "AI agents", "MLOps pipelines", "LLM-powered products"]
//     },
//     {
//       title: "Research & White Papers",
//       items: ["Guides", "Architecture notes", "Case studies", "Quizzes", "Hands-on labs"]
//     }
//   ];

//   return (
//     <PageShell eyebrow="Learning Platform" title="Learn AI, ML, data science, and agentic systems by building real projects.">
//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {tracks.map((track) => (
//           <article key={track.title} className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-7">
//             <h2 className="text-2xl font-bold text-white">{track.title}</h2>
//             <ul className="mt-5 space-y-3 text-zinc-400">
//               {track.items.map((item) => (
//                 <li key={item}>• {item}</li>
//               ))}
//             </ul>
//           </article>
//         ))}
//       </div>

//       <div className="mt-10 rounded-[2rem] border border-[#caa177]/40 bg-[#caa177]/10 p-8">
//         <h2 className="text-3xl font-bold text-white">Hands-on Practice Lab</h2>
//         <p className="mt-4 leading-8 text-zinc-300">
//           Students will learn by building chatbots, RAG systems, agents, data pipelines, dashboards, and production-style AI apps with guided exercises, quizzes, templates, and project reviews.
//         </p>

//         <div className="mt-7 flex flex-wrap gap-3">
//           <a
//             href="https://calendly.com/debosmitaroy-ai/30min?month=2026-06"
//             target="_blank"
//             rel="noreferrer"
//             className="rounded-2xl bg-[#caa177] px-6 py-3 font-semibold text-black transition hover:bg-[#d8b58d]"
//           >
//             Book a Learning Call →
//           </a>

//           <button
//             type="button"
//             onClick={() => goToPage("resources")}
//             className="rounded-2xl border border-zinc-700 px-6 py-3 font-semibold text-white transition hover:border-[#caa177] hover:text-[#caa177]"
//           >
//             Explore Resources →
//           </button>
//         </div>
//       </div>
//     </PageShell>
//   );
// }

// function ProjectsPage({ openCaseStudy }) {
//   return (
//     <PageShell eyebrow="Projects" title="AI product case studies built as a production-inspired portfolio.">
//       <div className="grid gap-8 md:grid-cols-2">
//         {projects.map((project) => (
//           <article key={project.title} className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8 transition hover:-translate-y-1 hover:border-zinc-600">
//             <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">{project.subtitle}</p>
//             <h2 className="mt-4 text-3xl font-bold">{project.title}</h2>
//             <p className="mt-5 leading-8 text-zinc-400">{project.desc}</p>

//             <div className="mt-6 flex flex-wrap gap-2">
//               {project.tags.map((tag) => (
//                 <span key={tag} className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             <div className="mt-7 flex flex-wrap gap-3">
//               <button type="button" onClick={() => openCaseStudy(project.slug)} className="inline-flex rounded-2xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-[1.02]">
//                 Open Case Study →
//               </button>
//               <a href={project.githubLink} target="_blank" rel="noreferrer" className="inline-flex rounded-2xl border border-zinc-700 px-5 py-3 font-semibold text-white transition hover:border-zinc-500 hover:bg-zinc-900">
//                 GitHub →
//               </a>
//             </div>
//           </article>
//         ))}
//       </div>
//     </PageShell>
//   );
// }

function CaseStudyPage({ project, goToPage }) {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <button onClick={() => goToPage("projects")} className="mb-10 rounded-full border border-zinc-700 px-5 py-3 text-zinc-300 transition hover:border-zinc-500 hover:text-white">
        ← Back to Projects
      </button>

      <h1 className="text-5xl font-bold text-white">{project.title}</h1>

      <img src={project.image} alt={project.title} className="mt-10 h-auto w-full rounded-[2rem] border border-zinc-800 object-cover" />

      <div className="mt-10 space-y-8 text-zinc-300">
        <p className="text-xl leading-9 text-zinc-200">{project.detail}</p>

        <div>
          <h2 className="text-2xl font-semibold text-white">Research Brief</h2>
          <p className="mt-4 leading-8 text-zinc-400">
            {project.desc} This case study explores how modern AI architectures can improve enterprise workflows, automation, observability, and intelligent decision-making at scale.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white">Implementation included</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-400">
            {project.included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white">Impact Simulation</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-400">
            {project.impact.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}

function ArticlePage({ article, goToPage }) {
  if (!article) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-20">
        <button
          onClick={() => goToPage("writing")}
          className="mb-10 rounded-full border border-zinc-700 px-5 py-3 text-zinc-300 transition hover:border-zinc-500 hover:text-white"
        >
          ← Back to Writing
        </button>

        <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8">
          <h1 className="text-3xl font-semibold text-white">
            Article not found
          </h1>
          <p className="mt-4 text-zinc-400">
            Please go back to the Writing page and select an article again.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <button
        onClick={() => goToPage("writing")}
        className="mb-10 rounded-full border border-zinc-700 px-5 py-3 text-zinc-300 transition hover:border-zinc-500 hover:text-white"
      >
        ← Back to Writing
      </button>

      <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8 md:p-14">
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#caa177]">
          <span>{article.category || "Newsletter"}</span>
          <span>•</span>
          <span>{article.readTime}</span>
          {article.date && (
            <>
              <span>•</span>
              <span>{article.date}</span>
            </>
          )}
        </div>

        <h1 className="mt-6 text-4xl font-light leading-tight text-white md:text-6xl">
          {article.title}
        </h1>

        {article.subtitle && (
          <p className="mt-6 text-xl leading-9 text-zinc-300">
            {article.subtitle}
          </p>
        )}

        <article
          className="newsletter-article mt-12"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </main>
  );
}

// function ArticlePage({ article, goToPage }) {
//   if (!article) return null;

//   return (
//     <main className="mx-auto max-w-4xl px-6 py-20">
//       <button
//         onClick={() => goToPage("writing")}
//         className="mb-10 rounded-full border border-zinc-700 px-5 py-3 text-zinc-300 transition hover:border-zinc-500 hover:text-white"
//       >
//         ← Back to Writing
//       </button>

//       <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8 md:p-14">
//         <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#caa177]">
//           <span>Newsletter</span>
//           <span>•</span>
//           <span>{article.readTime}</span>
//         </div>

//         <h1 className="mt-6 text-4xl font-light leading-tight text-white md:text-6xl">
//           {article.title}
//         </h1>

//         <p className="mt-6 text-xl leading-9 text-zinc-300">
//           {article.subtitle}
//         </p>

//         <div className="newsletter-article mt-12">
//              dangerouslySetInnerHTML={{ __html: article.content }}
//         </div>
//       </div>
//     </main>
//   );
// }

// function WritingPage() {
//   const [selectedPost, setSelectedPost] = useState(null);

//   if (selectedPost) {
//     return (
//       <PageShell eyebrow="Newsletter" title={selectedPost.title}>
//         <button
//           onClick={() => setSelectedPost(null)}
//           className="mb-8 rounded-full border border-zinc-700 px-5 py-3 text-zinc-300 transition hover:border-zinc-500 hover:text-white"
//         >
//           ← Back to Writing
//         </button>

//         <div className="mb-8 text-sm uppercase tracking-[0.2em] text-[#caa177]">
//           {selectedPost.category} • {selectedPost.date} • {selectedPost.readTime}
//         </div>

//         {selectedPost.subtitle && (
//           <p className="mb-10 max-w-3xl text-xl leading-8 text-zinc-300">
//             {selectedPost.subtitle}
//           </p>
//         )}

//         <article
//           className="newsletter-article"
//           dangerouslySetInnerHTML={{ __html: selectedPost.content }}
//         />
//       </PageShell>
//     );
//   }

//   return (
//     <PageShell eyebrow="Writing" title="Ideas on AI, Systems & Engineering">
//       <div className="grid gap-6 md:grid-cols-2">
//         {newsletterContent.map((post) => (
//           <article
//             key={post.slug}
//             className={`newsletter-card ${
//               post.featured ? "md:col-span-2 border-[#caa177]/60" : ""
//             }`}
//           >
//             <div className="mb-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#caa177]">
//               <span>{post.category}</span>
//               <span>•</span>
//               <span>{post.readTime}</span>
//               <span>•</span>
//               <span>{post.date}</span>
//             </div>

//             <h2 className="text-2xl font-semibold text-white">{post.title}</h2>

//             {post.subtitle && (
//               <p className="mt-3 text-zinc-400">{post.subtitle}</p>
//             )}

//             <p className="mt-4 text-zinc-500">{post.excerpt}</p>

//             <button
//               onClick={() => setSelectedPost(post)}
//               className="mt-6 rounded-2xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-[1.02]"
//             >
//               Read Newsletter →
//             </button>
//           </article>
//         ))}
//       </div>
//     </PageShell>
//   );
// }

function NewsletterFeature() {
  return (
    <section className="mt-16 overflow-hidden rounded-[32px] border border-[#caa177]/30 bg-gradient-to-br from-[#151515] via-[#101010] to-black">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="p-8 md:p-12">
          <div className="inline-flex items-center rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-cyan-200">
            Newsletter • Issue 001
          </div>

          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
            What NemoClaw Teaches Us About the Future of Agentic AI
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Most AI systems today are still reactive.
            They answer questions, summarize content, or generate outputs on demand.
            But the next generation of AI systems will do much more:
            they will observe environments, reason continuously,
            coordinate actions, recover from failures,
            and evolve through feedback loops.
          </p>

          <p className="mt-5 max-w-3xl leading-8 text-zinc-400">
            NemoClaw is my teaching framework for explaining how
            resilient, operational, environment-aware agentic systems
            are beginning to emerge across engineering platforms,
            developer tooling, observability systems,
            and enterprise AI infrastructure.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Adaptive orchestration",
              "Environment-aware agents",
              "AI observability",
              "Feedback-driven workflows",
              "Long-term memory systems",
              "Human-in-the-loop governance",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-zinc-300 backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-[#caa177] px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-[#ddb892]">
              Read Full Newsletter
            </button>

            <button className="rounded-2xl border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:border-cyan-300 hover:text-cyan-200">
              Subscribe
            </button>
          </div>
        </div>

        <div className="relative hidden overflow-hidden border-l border-white/5 lg:block">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(202,161,119,0.18),transparent_55%)]" />

          <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#caa177]/10 blur-3xl" />

          <div className="relative flex h-full flex-col justify-between p-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                Teaching Focus
              </p>

              <div className="mt-8 space-y-5">
                {[
                  "Why current AI agents fail in production",
                  "The evolution from reactive AI to operational AI",
                  "Memory graphs & orchestration layers",
                  "Observability-driven AI systems",
                  "Enterprise readiness for autonomous workflows",
                ].map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-white/10 bg-black/30 p-5"
                  >
                    <p className="text-sm leading-7 text-zinc-300">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-3xl border border-cyan-300/20 bg-cyan-300/5 p-6">
              <p className="text-sm leading-7 text-zinc-300">
                “The future of AI will not belong to systems
                that simply generate answers.
                It will belong to systems that can observe,
                adapt, recover, coordinate, and operate
                continuously under real-world constraints.”
              </p>

              <div className="mt-5 text-xs uppercase tracking-[0.22em] text-cyan-200">
                — Debosmita Roy
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WritingPage({ openArticle }) {
  const posts = [
    ...newsletterContent.map((newsletter, index) => ({
      title: newsletter.title,
      slug: newsletter.slug,
      type: index === 0 ? "First Newsletter" : "Featured Newsletter",
      readTime: newsletter.readTime,
      body:
        newsletter.excerpt ||
        newsletter.subtitle ||
        "A practical essay on AI architecture, agentic systems, enterprise intelligence, and production-ready AI.",
      tags: [
        newsletter.category || "Agentic AI",
        "AI Architecture",
        "Enterprise AI",
      ],
      featured: newsletter.featured || index === 0,
      article: newsletter,
    })),
    {
      title: "Why Most Agentic AI Systems Fail in Production",
      type: "Architecture Note",
      readTime: "5 min read",
      body:
        "A practical breakdown of context fragmentation, brittle tool-calling, missing observability, weak evaluation loops, and governance gaps.",
      tags: ["Production AI", "Reliability", "Agents"],
    },
    {
      title: "Enterprise RAG Needs Observability, Not Just Retrieval",
      type: "Technical Essay",
      readTime: "4 min read",
      body:
        "How retrieval quality, answer grounding, telemetry, source traceability, and evaluation should work together in enterprise AI systems.",
      tags: ["RAG", "Observability", "LLMOps"],
    },
    {
      title: "From Test Automation to Autonomous Engineering Intelligence",
      type: "Builder Journal",
      readTime: "5 min read",
      body:
        "How modern QA, SDLC automation, build intelligence, and agentic workflows can evolve into AI-native engineering platforms.",
      tags: ["SDLC AI", "Build Agents", "Automation"],
    },
  ];

  return (
    <PageShell
      eyebrow="Writing"
      title="AI Notes, Architecture Thinking & Builder Essays"
    >
      <p className="mb-10 max-w-3xl text-zinc-400">
        I write to teach how AI systems are designed, evaluated, observed, and
        productized. My focus is practical: how to move from interesting demos
        to reliable, explainable, production-ready AI systems.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <button
            key={post.slug || post.title}
            type="button"
            onClick={() => {
              if (post.article) {
                openArticle(post.article);
              }
            }}
            className={`group rounded-3xl border p-7 text-left transition duration-300 hover:-translate-y-1 hover:border-[#caa177]/60 ${
              post.featured
                ? "border-[#caa177]/50 bg-[#caa177]/10 md:col-span-2"
                : "border-zinc-800 bg-zinc-950/80"
            }`}
          >
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#caa177]">
              <span>{post.type}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <h2 className="text-2xl font-semibold text-white transition group-hover:text-[#e2c19f]">
              {post.title}
            </h2>

            <p className="mt-4 leading-7 text-zinc-400">{post.body}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {post.article && (
              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[#caa177] transition group-hover:translate-x-1">
                Read Full Article
                <span>→</span>
              </div>
            )}
          </button>
        ))}
      </div>

      <section className="mt-12 rounded-3xl border border-cyan-300/20 bg-cyan-300/5 p-8">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
          Newsletter Series
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white">
          Agentic AI, RAG, Observability & Enterprise Intelligence
        </h2>
        <p className="mt-5 text-zinc-300">
          This writing series explores how AI systems evolve from reactive demos
          into operational platforms that can observe signals, reason over
          context, use tools, adapt to feedback, and recover when workflows fail.
        </p>
        <p className="mt-4 text-zinc-400">
          I will continue sharing practical architecture notes on adaptive
          orchestration, memory graphs, RAG, AI observability,
          human-in-the-loop governance, and production readiness for multi-agent
          systems.
        </p>
      </section>
    </PageShell>
  );
}

// function WritingPage({ openArticle }) {
//   <NewsletterFeature />
//   const posts = [
//   {
//     title: newsletterContent.title,
//     slug: newsletterContent.slug,
//     type: "Featured Newsletter",
//     readTime: "6 min read",
//     body:
//       "A teaching-first introduction to environment-aware agents, adaptive orchestration, memory, feedback loops, and why the future of AI is operational — not just conversational.",
//     tags: ["NemoClaw", "Agentic AI", "AI Architecture"],
//     featured: true,
//   },
//     {
//       title: "Why Most Agentic AI Systems Fail in Production",
//       type: "Architecture Note",
//       readTime: "5 min read",
//       body:
//         "A practical breakdown of context fragmentation, brittle tool-calling, missing observability, weak evaluation loops, and governance gaps.",
//       tags: ["Production AI", "Reliability", "Agents"],
//     },
//     {
//       title: "Enterprise RAG Needs Observability, Not Just Retrieval",
//       type: "Technical Essay",
//       readTime: "4 min read",
//       body:
//         "How retrieval quality, answer grounding, telemetry, source traceability, and evaluation should work together in enterprise AI systems.",
//       tags: ["RAG", "Observability", "LLMOps"],
//     },
//     {
//       title: "From Test Automation to Autonomous Engineering Intelligence",
//       type: "Builder Journal",
//       readTime: "5 min read",
//       body:
//         "How modern QA, SDLC automation, build intelligence, and agentic workflows can evolve into AI-native engineering platforms.",
//       tags: ["SDLC AI", "Build Agents", "Automation"],
//     },
//   ];

//   return (
//     <PageShell eyebrow="Writing" title="AI Notes, Architecture Thinking & Builder Essays">
//       <p className="mb-10 max-w-3xl text-zinc-400">
//         I write to teach how AI systems are designed, evaluated, observed, and productized.
//         My focus is practical: how to move from interesting demos to reliable, explainable,
//         production-ready AI systems.
//       </p>

//       <div className="grid gap-6 md:grid-cols-2">
//         {posts.map((post) => (
//           // <article
//           //   key={post.title}
//           //   className={`rounded-3xl border p-7 transition hover:-translate-y-1 hover:border-[#caa177]/60 ${
//           //     post.featured
//           //       ? "border-[#caa177]/50 bg-[#caa177]/10 md:col-span-2"
//           //       : "border-zinc-800 bg-zinc-950/80"
//           //   }`}
//           // >
//           //   <div className="mb-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#caa177]">
//           //     <span>{post.type}</span>
//           //     <span>•</span>
//           //     <span>{post.readTime}</span>
//           //   </div>

//           //   <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
//           //   <p className="mt-4 text-zinc-400">{post.body}</p>

//           //   <div className="mt-6 flex flex-wrap gap-2">
//           //     {post.tags.map((tag) => (
//           //       <span
//           //         key={tag}
//           //         className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
//           //       >
//           //         {tag}
//           //       </span>
//           //     ))}
//           //   </div>
//           // </article>
//           <button
//             key={post.title}
//             type="button"
//             onClick={() => {
//               if (post.slug) {
//                 openArticle({
//                   ...newsletterContent,
//                 });
//               }
//             }}
//             className={`group rounded-3xl border p-7 text-left transition duration-300 hover:-translate-y-1 hover:border-[#caa177]/60 ${
//               post.featured
//                 ? "border-[#caa177]/50 bg-[#caa177]/10 md:col-span-2"
//                 : "border-zinc-800 bg-zinc-950/80"
//             }`}
//           >
//             <div className="mb-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#caa177]">
//               <span>{post.type}</span>
//               <span>•</span>
//               <span>{post.readTime}</span>
//             </div>

//             <h2 className="text-2xl font-semibold text-white transition group-hover:text-[#e2c19f]">
//               {post.title}
//             </h2>

//             <p className="mt-4 leading-7 text-zinc-400">
//               {post.body}
//             </p>

//             <div className="mt-6 flex flex-wrap gap-2">
//               {post.tags.map((tag) => (
//                 <span
//                   key={tag}
//                   className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             {post.slug && (
//               <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[#caa177] transition group-hover:translate-x-1">
//                 Read Full Article
//                 <span>→</span>
//               </div>
//             )}
//           </button>
//         ))}
//       </div>

//       <section className="mt-12 rounded-3xl border border-cyan-300/20 bg-cyan-300/5 p-8">
//         <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
//           First Newsletter
//         </p>
//         <h2 className="mt-3 text-3xl font-semibold text-white">
//           What NemoClaw Teaches Us About the Future of Agentic AI
//         </h2>
//         <p className="mt-5 text-zinc-300">
//           NemoClaw is my teaching lens for explaining the next generation of agentic
//           systems: AI that can observe signals, reason over context, use tools,
//           adapt to feedback, and recover when workflows fail.
//         </p>
//         <p className="mt-4 text-zinc-400">
//           Most AI products today are still reactive. They answer, summarize, or
//           autocomplete. The next wave will be operational: agents that understand
//           systems, coordinate actions, monitor their own outcomes, and stay aligned
//           with human intent.
//         </p>
//         <p className="mt-4 text-zinc-400">
//           Through NemoClaw, I will teach concepts like adaptive orchestration,
//           memory graphs, feedback loops, AI observability, human-in-the-loop
//           governance, and production readiness for multi-agent systems.
//         </p>
//       </section>
//     </PageShell>
//   );
// }

function SpeakingPage() {
  const topics = [
    {
      title: "Agentic AI in Enterprise Engineering",
      desc:
        "How AI agents can support build intelligence, test generation, release confidence, and operational decision-making.",
    },
    {
      title: "AI-Native Developer Platforms",
      desc:
        "How engineering teams can evolve from automation scripts to intelligent platforms that reason, recommend, and act.",
    },
    {
      title: "RAG, Governance & Production Readiness",
      desc:
        "How to design trustworthy RAG systems with source grounding, evaluation, observability, and responsible AI controls.",
    },
    {
      title: "Observability-Driven AI Systems",
      desc:
        "Why agent telemetry, tool-call traces, feedback loops, and failure classification are essential for production AI.",
    },
  ];

  return (
    <PageShell eyebrow="Speaking" title="Talks, Workshops & AI Leadership Sessions">
      <p className="mb-10 max-w-3xl text-zinc-400">
        I speak about AI through the lens of engineering execution: how to design,
        adopt, govern, and scale AI systems inside real organizations.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {topics.map((topic) => (
          <div
            key={topic.title}
            className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-7 transition hover:-translate-y-1 hover:border-[#caa177]/50"
          >
            <h2 className="text-2xl font-semibold text-white">{topic.title}</h2>
            <p className="mt-4 text-zinc-400">{topic.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-[#caa177]/30 bg-[#caa177]/10 p-8">
        <h2 className="text-2xl font-semibold text-white">
          Available Speaking Formats
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {["Executive Briefings", "Engineering Workshops", "AI Town Halls"].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-black/30 p-5 text-zinc-300">
              {item}
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

function AIBuilderLabPage({ goToPage }) {
  const careerTracks = {
    builder: {
      title: "GenAI Builder",
      desc: "Build chatbots, copilots, RAG assistants, and workflow tools.",
      next: "Start with the AI-For-Beginners curriculum, then build a tiny document assistant."
    },
    data: {
      title: "Data Scientist",
      desc: "Analyze data, train models, evaluate outputs, and explain business impact.",
      next: "Start with Python, data cleaning, machine learning metrics, and portfolio notebooks."
    },
    product: {
      title: "AI Product Engineer",
      desc: "Turn AI ideas into usable products with UI, APIs, evaluations, and feedback loops.",
      next: "Build a full-stack AI feature with logging, user feedback, and clear success metrics."
    },
    cloud: {
      title: "Cloud AI Architect",
      desc: "Design secure, scalable AI systems across cloud models, data, monitoring, and governance.",
      next: "Map a Foundry-style architecture with model routing, RAG, guardrails, and observability."
    },
    agent: {
      title: "Agentic AI Engineer",
      desc: "Design agents that use tools, memory, planning, retries, and human approval.",
      next: "Build a research agent with three tools and a failure recovery plan."
    }
  };

  const projectIdeas = {
    beginner: {
      career: "GenAI Builder",
      idea: "Personal AI Study Coach",
      stack: "React, prompts, static lesson data",
      build: "A simple assistant that recommends one lesson, one flashcard, and one practice task each day."
    },
    intermediate: {
      career: "Data Scientist",
      idea: "AI Data Quality Checker",
      stack: "Python, pandas, charts, LLM explanations",
      build: "Upload a CSV, find missing values and outliers, then generate a stakeholder-friendly report."
    },
    advanced: {
      career: "Agentic AI Engineer",
      idea: "RAG Research Agent",
      stack: "Vector search, LangGraph-style workflow, evaluation rubric",
      build: "An agent that retrieves sources, drafts an answer, checks grounding, and asks for human approval."
    }
  };

  const flashcards = [
    ["Embeddings", "Numeric representations that let systems compare semantic similarity."],
    ["RAG", "Retrieval augmented generation: retrieve context before generating an answer."],
    ["Fine-tuning", "Training a model further on specific examples to adapt behavior."],
    ["AI Agent", "A system that can reason over goals, use tools, and take multi-step actions."],
    ["Vector DB", "A database optimized for storing and searching embeddings."],
    ["Evaluation", "A repeatable way to measure whether an AI system is useful, safe, and grounded."]
  ];

  const toolkit = [
    ["GenAI", "OpenAI, Azure AI Foundry, Claude, Gemini, prompt testing"],
    ["Agents", "LangGraph, CrewAI, tool calling, planning, traces"],
    ["Vector Databases", "FAISS, Chroma, Pinecone, Weaviate, pgvector"],
    ["Azure AI", "Azure AI Foundry, model catalog, evaluations, prompt optimization"],
    ["MLOps", "MLflow, model cards, monitoring, drift checks"],
    ["Notebooks", "Jupyter, Colab, Kaggle, VS Code notebooks"]
  ];

  const vedaStages = [
    {
      title: "AI Energy",
      desc: "Veda turns daily streaks into AI Energy: read one concept, answer one quiz, or run one notebook cell to keep momentum alive."
    },
    {
      title: "Mission of the Week",
      desc: "Each weekly challenge becomes a focused build mission, such as creating a tiny RAG assistant and sharing proof of work."
    },
    {
      title: "Build Engine",
      desc: "The portfolio generator recommends projects by level, stack, and career goal so learners always know what to build next."
    },
    {
      title: "Skill Cores",
      desc: "Badges become Skill Cores that learners can share on LinkedIn to show progress in RAG, prompting, model training, and Azure AI."
    },
    {
      title: "Builder Signal",
      desc: "Learners publish progress, join the leaderboard, submit projects, and turn private study into visible career momentum."
    }
  ];

  const vedaSignals = [
    {
      label: "Command Deck",
      title: "AI Energy",
      desc: "Daily streaks become a visible power meter for learning consistency."
    },
    {
      label: "Mission Bay",
      title: "Build Engine",
      desc: "Weekly challenges and project prompts turn ideas into portfolio artifacts."
    },
    {
      label: "Signal Wall",
      title: "Skill Cores",
      desc: "Badges, leaderboards, and build-in-public prompts make progress shareable."
    }
  ];

  const [selectedTrack, setSelectedTrack] = useState("builder");
  const [selectedLevel, setSelectedLevel] = useState("beginner");
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [completedToday, setCompletedToday] = useState({
    microLesson: false,
    quiz: false,
    notebook: false
  });
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      role: "assistant",
      text:
        "Hi, I'm Veda. Your AI guide to agentic AI, software engineering, research and career growth at Debosmita.ai."
    }
  ]);

  const streakCount = Object.values(completedToday).filter(Boolean).length;
  const activeTrack = careerTracks[selectedTrack];
  const activeProject = projectIdeas[selectedLevel];
  const activeFlashcard = flashcards[flashcardIndex];

  const assistantAnswers = [
    {
      triggers: ["rag", "retrieval", "vector", "embedding", "assistant"],
      text:
        "For RAG, start with three pieces: a small document set, embeddings or keyword retrieval, and an evaluation checklist. Your fastest path here is the Weekly AI Challenge: build a tiny RAG assistant in 30 minutes, then earn the RAG Beginner badge."
    },
    {
      triggers: ["career", "path", "quiz", "role", "track", "job"],
      text:
        `A good starting track is ${activeTrack.title}. ${activeTrack.desc} Next step: ${activeTrack.next} You can switch tracks in the AI Career Path Quiz and compare GenAI Builder, Data Scientist, AI Product Engineer, Cloud AI Architect, and Agentic AI Engineer.`
    },
    {
      triggers: ["project", "portfolio", "github", "build", "idea"],
      text:
        `Try the ${activeProject.idea}. It is a ${activeProject.career} portfolio project using ${activeProject.stack}. Build goal: ${activeProject.build}`
    },
    {
      triggers: ["newsletter", "article", "writing", "companion", "foundry", "azure"],
      text:
        "Use the Newsletter Companion loop: read the weekly issue, answer one quiz question, post one discussion prompt, then build a small artifact. For Azure AI Foundry, a strong exercise is sketching model routing, evaluation, guardrails, and observability as one operating layer."
    },
    {
      triggers: ["agent", "agentic", "tools", "memory", "planning"],
      text:
        "For agentic AI, think in loops: goal, plan, tool use, observation, critique, retry, and human approval. A beginner project is a research agent with three tools, a trace log, and a failure recovery plan."
    },
    {
      triggers: ["badge", "linkedin", "share", "streak", "leaderboard"],
      text:
        "The growth loop is simple: complete a micro-lesson, quiz, or notebook practice, earn a badge, then share it on LinkedIn. The strongest public post format is: what I learned, what I built, what failed, and what I will improve next."
    },
    {
      triggers: ["tool", "toolkit", "directory", "mlops", "notebook", "cloud"],
      text:
        "Use the AI Toolkit Directory by category. For GenAI, start with prompt testing and Azure AI Foundry. For RAG, add vector databases. For MLOps, add model cards, evaluation, monitoring, and drift checks."
    },
    {
      triggers: ["7-day", "learning plan", "learn this week", "study plan"],
      text:
        "Here is a 7-day AI plan: Day 1 embeddings, Day 2 RAG, Day 3 tiny retrieval demo, Day 4 agents and tool use, Day 5 Azure AI Foundry newsletter, Day 6 portfolio README, Day 7 LinkedIn build-in-public reflection."
    },
    {
      triggers: ["linkedin", "build-in-public", "public post", "post"],
      text:
        "Try this LinkedIn prompt: Today I learned one AI concept, built one tiny artifact, and found one gap in my understanding. The concept was __, the artifact was __, and next I will improve __."
    },
    {
      triggers: ["notebook", "lab", "beginner lab", "practice"],
      text:
        "A good beginner notebook lab is an embeddings similarity notebook: write five short text snippets, compare their meaning, retrieve the closest snippet for a question, then explain why the result was or was not useful."
    },
    {
      triggers: ["flashcard", "term", "concept", "learn", "beginner"],
      text:
        `Today's flashcard is ${activeFlashcard[0]}: ${activeFlashcard[1]} A useful habit is to explain the term in one sentence, then build one tiny example using it.`
    }
  ];

  const starterPrompts = [
    "What should I learn first for RAG?",
    "Suggest a portfolio project for me",
    "Which AI career path fits me?",
    "How do I share a badge on LinkedIn?",
    "Give me a 7-day AI learning plan",
    "What should I build this week?",
    "Explain agentic AI simply",
    "What tools should I learn for GenAI?",
    "How do I use the newsletter companion?",
    "Give me a LinkedIn build-in-public prompt",
    "What is a good beginner notebook lab?",
    "How do I prepare for Cloud AI Architect?"
  ];

  const getAssistantReply = (question) => {
    const normalizedQuestion = question.toLowerCase();
    const scoredAnswers = assistantAnswers
      .map((answer) => ({
        ...answer,
        score: answer.triggers.filter((trigger) => normalizedQuestion.includes(trigger)).length
      }))
      .sort((a, b) => b.score - a.score);

    if (scoredAnswers[0]?.score > 0) {
      return scoredAnswers[0].text;
    }

    return "I can help with AI learning paths, RAG, agents, Azure AI Foundry, project ideas, badges, newsletters, and build-in-public prompts. Try asking: \"What should I build this week?\" or \"Which AI career path fits me?\"";
  };

  const askAssistant = (question) => {
    const trimmedQuestion = question.trim();

    if (!trimmedQuestion) {
      return;
    }

    const reply = getAssistantReply(trimmedQuestion);
    setChatMessages((messages) => [
      ...messages,
      { role: "user", text: trimmedQuestion },
      { role: "assistant", text: reply }
    ]);
    setChatInput("");
  };

  const handleAssistantSubmit = (event) => {
    event.preventDefault();
    askAssistant(chatInput);
  };

  const shareBadge = (badge) => {
    const text = encodeURIComponent(`I earned the ${badge} learning badge in Debosmita AI Lab. Building in public as I learn AI, RAG, GenAI, and agentic systems.`);
    const url = encodeURIComponent("https://www.debosmita.ai/#aiLab");
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&summary=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <PageShell eyebrow="AI Builder Lab" title="Daily AI practice, challenges, badges, project ideas, and community growth loops." immersive>
      <VedaNeuralGuide
        eyebrow="Agentic Command Center"
        title="Train like an AI builder."
        theme="Practice in the Agentic Command Center"
        modeLabel="Energy → Mission → Signal"
        intro="Welcome to the Agentic Command Center. Here Veda helps you practice daily, earn Skill Cores, build projects, and turn learning into public proof."
        stages={vedaStages}
        signalCards={vedaSignals}
        featureRoutes={[
          {
            label: "Resources for Beginners",
            title: "AI Energy",
            desc: "Begin with daily micro-actions: read one concept, answer one quiz, or run one notebook cell.",
            targetId: "ai-energy"
          },
          {
            label: "Intermediates",
            title: "Build Engine",
            desc: "Generate project ideas by level and turn practice into portfolio artifacts.",
            targetId: "build-engine"
          },
          {
            label: "Advanced",
            title: "Skill Cores",
            desc: "Earn badges, share progress on LinkedIn, and build visible career signal.",
            targetId: "skill-cores"
          }
        ]}
      />

      <section id="ai-energy" className="mt-12 scroll-mt-36 rounded-[2rem] border border-cyan-300/30 bg-[#070b12] p-8 shadow-2xl shadow-cyan-500/10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Engagement Hub</p>
            <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-white md:text-5xl">
              A playful learning layer for turning visitors into repeat AI builders.
            </h2>
            <p className="mt-5 max-w-4xl leading-8 text-zinc-300">
              This page packages streaks, challenges, quizzes, flashcards, badges, templates, and build-in-public prompts into one growth engine for the learning portal.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button type="button" onClick={() => goToPage("learning")} className="rounded-2xl bg-cyan-300 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:scale-[1.02] hover:bg-cyan-200">
                Start learning →
              </button>
              <button type="button" onClick={() => goToPage("writing")} className="rounded-2xl border border-cyan-300/50 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-cyan-200 transition hover:bg-cyan-300 hover:text-black">
                Use newsletter companion →
              </button>
            </div>
          </div>
          <div className="rounded-[2rem] border border-zinc-800 bg-black/50 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#caa177]">AI Energy</p>
            <p className="mt-4 text-5xl font-black text-white">{streakCount}/3</p>
            <div className="mt-6 grid gap-3">
              {[
                ["microLesson", "Read 1 AI concept in 3 minutes"],
                ["quiz", "Answer one quiz question"],
                ["notebook", "Run or review one notebook cell"]
              ].map(([key, label]) => (
                <label key={key} className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-950 p-4 text-left text-zinc-300">
                  <input
                    type="checkbox"
                    checked={completedToday[key]}
                    onChange={() => setCompletedToday((current) => ({ ...current, [key]: !current[key] }))}
                    className="h-5 w-5 accent-cyan-300"
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-7">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#caa177]">Mission of the Week</p>
          <h2 className="mt-4 text-3xl font-light text-white">Build a tiny RAG assistant in 30 minutes.</h2>
          <p className="mt-4 leading-7 text-zinc-400">
            Use five short documents, write three questions, retrieve the best context, and explain whether each answer is grounded.
          </p>
          <div className="mt-6 rounded-2xl border border-zinc-800 bg-black/40 p-5 text-zinc-300">
            Submit a GitHub link, screenshot, or LinkedIn post. Public submissions can appear on the Learner Wall.
          </div>
        </div>

        <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-7">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#caa177]">Newsletter Companion</p>
          <h2 className="mt-4 text-3xl font-light text-white">Quiz, discuss, then build the idea.</h2>
          <div className="mt-6 grid gap-3 text-zinc-300">
            <div className="rounded-2xl border border-zinc-800 bg-black/40 p-4">Quiz: What makes Azure AI Foundry an operating layer?</div>
            <div className="rounded-2xl border border-zinc-800 bg-black/40 p-4">Discussion: Where should humans stay in the loop?</div>
            <div className="rounded-2xl border border-zinc-800 bg-black/40 p-4">Build: Sketch a model routing + evaluation flow.</div>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-7">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#caa177]">AI Career Path Quiz</p>
          <h2 className="mt-4 text-3xl font-light text-white">Find your builder track.</h2>
          <div className="mt-6 grid gap-3">
            {Object.entries(careerTracks).map(([key, track]) => (
              <button
                key={key}
                type="button"
                onClick={() => setSelectedTrack(key)}
                className={`rounded-2xl border p-4 text-left transition ${selectedTrack === key ? "border-cyan-300 bg-cyan-300/10 text-white" : "border-zinc-800 bg-black/40 text-zinc-400 hover:border-zinc-600 hover:text-white"}`}
              >
                {track.title}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/5 p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">Recommended Track</p>
          <h3 className="mt-4 text-4xl font-light text-white">{activeTrack.title}</h3>
          <p className="mt-4 leading-8 text-zinc-300">{activeTrack.desc}</p>
          <p className="mt-5 rounded-2xl border border-cyan-300/20 bg-black/40 p-5 leading-7 text-cyan-100">{activeTrack.next}</p>
        </div>
      </section>

      <section id="build-engine" className="mt-12 grid scroll-mt-36 gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-7">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#caa177]">Build Engine</p>
          <h2 className="mt-4 text-3xl font-light text-white">Generate a project idea by level.</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {Object.keys(projectIdeas).map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => setSelectedLevel(level)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold capitalize transition ${selectedLevel === level ? "border-[#caa177] bg-[#caa177] text-black" : "border-zinc-700 text-zinc-300 hover:border-[#caa177] hover:text-[#caa177]"}`}
              >
                {level}
              </button>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-zinc-800 bg-black/40 p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-[#caa177]">{activeProject.career}</p>
            <h3 className="mt-3 text-2xl font-bold text-white">{activeProject.idea}</h3>
            <p className="mt-3 text-zinc-400">{activeProject.build}</p>
            <p className="mt-4 text-sm font-semibold text-cyan-200">Stack: {activeProject.stack}</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-7">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#caa177]">Memory Chip</p>
          <h2 className="mt-4 text-3xl font-light text-white">{activeFlashcard[0]}</h2>
          <p className="mt-5 min-h-24 rounded-2xl border border-zinc-800 bg-black/40 p-5 text-lg leading-8 text-zinc-300">
            {activeFlashcard[1]}
          </p>
          <button
            type="button"
            onClick={() => setFlashcardIndex((index) => (index + 1) % flashcards.length)}
            className="mt-6 rounded-2xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-[1.02]"
          >
            Next card →
          </button>
        </div>
      </section>

      <section id="skill-cores" className="mt-12 scroll-mt-36">
        <h2 className="font-serif text-4xl font-light text-white md:text-5xl">Skill Cores, sharing, and growth loops</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {["RAG Beginner", "Prompt Engineer", "Model Training Starter", "Azure AI Explorer"].map((badge) => (
            <article key={badge} className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-6">
              <p className="text-3xl">◆</p>
              <h3 className="mt-4 text-xl font-bold text-white">{badge}</h3>
              <button type="button" onClick={() => shareBadge(badge)} className="mt-6 rounded-2xl border border-[#caa177]/50 px-4 py-2 text-sm font-semibold text-[#caa177] transition hover:bg-[#caa177] hover:text-black">
                Share on LinkedIn →
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-3">
        <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-7">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#caa177]">Referral Link</p>
          <h3 className="mt-4 text-2xl font-bold text-white">Invite 3 friends.</h3>
          <p className="mt-4 leading-7 text-zinc-400">Unlock the advanced project guide when referral tracking is connected.</p>
          <p className="mt-5 rounded-2xl border border-zinc-800 bg-black/40 p-4 text-sm text-cyan-200">https://www.debosmita.ai/#aiLab?ref=builder</p>
        </div>
        <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-7">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#caa177]">Builder Signal</p>
          <div className="mt-5 space-y-3 text-zinc-300">
            {["1. RAG Sprint", "2. Notebook Runner", "3. Build-in-Public"].map((item) => (
              <div key={item} className="rounded-2xl border border-zinc-800 bg-black/40 p-4">{item}</div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-7">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#caa177]">Free Templates</p>
          <h3 className="mt-4 text-2xl font-bold text-white">Downloadable lead magnets.</h3>
          <p className="mt-4 leading-7 text-zinc-400">Project README, RAG evaluation sheet, AI career roadmap, and prompt library gated by email signup.</p>
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-7">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#caa177]">AI Toolkit Directory</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {toolkit.map(([category, tools]) => (
              <div key={category} className="rounded-2xl border border-zinc-800 bg-black/40 p-5">
                <h3 className="font-bold text-white">{category}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{tools}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-7">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#caa177]">Veda</p>
          <h2 className="mt-4 text-3xl font-light text-white">Chat with the AI learning guide.</h2>
          <p className="mt-5 leading-8 text-zinc-400">
            Ask about AI career paths, RAG projects, Azure AI Foundry, badges, newsletters, flashcards, and what to build next.
          </p>

          <div className="mt-6 rounded-[1.5rem] border border-zinc-800 bg-black/40 p-4">
            <div className="flex max-h-80 flex-col gap-3 overflow-y-auto pr-1">
              {chatMessages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.role === "user"
                      ? "ml-8 bg-cyan-300 text-black"
                      : "mr-8 border border-zinc-800 bg-zinc-950 text-zinc-300"
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {starterPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => askAssistant(prompt)}
                  className="rounded-full border border-zinc-700 px-3 py-2 text-xs font-semibold text-zinc-300 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <form onSubmit={handleAssistantSubmit} className="mt-4 flex gap-3">
              <input
                type="text"
                value={chatInput}
                onChange={(event) => setChatInput(event.target.value)}
                placeholder="Ask Veda about RAG, agents, projects..."
                aria-label="Ask Veda"
                className="min-w-0 flex-1 rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-300"
              />
              <button type="submit" className="rounded-2xl bg-[#caa177] px-5 py-3 text-sm font-bold text-black transition hover:scale-[1.02]">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-[2rem] border border-[#caa177]/40 bg-[#caa177]/10 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#caa177]">Public Learner Wall</p>
        <h2 className="mt-4 font-serif text-4xl font-light text-white md:text-5xl">Showcase learners who build in public.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {["Completed a tiny RAG assistant", "Published an AI flashcard thread", "Shared a capstone project"].map((item) => (
            <div key={item} className="rounded-2xl border border-zinc-800 bg-black/40 p-5 text-zinc-300">{item}</div>
          ))}
        </div>
        <p className="mt-6 leading-7 text-zinc-300">
          Build-in-public prompt: “Today I learned one AI concept, built one small artifact, and documented one lesson. Here is what changed in my thinking...”
        </p>
      </section>
    </PageShell>
  );
}

// function ResourcesPage() {
//   return (
//     <PageShell eyebrow="Resources" title="AI systems, portfolio assets, and learning resources.">
//       <div className="grid gap-6 md:grid-cols-2">
//         {["GitHub AI SaaS Monorepo", "Agentic AI Portfolio", "RAG Architecture Notes", "AI Observability Checklist"].map((item) => (
//           <div key={item} className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7">
//             <h2 className="text-2xl font-bold">{item}</h2>
//             <p className="mt-3 leading-7 text-zinc-400">A resource designed to make AI architecture, implementation, and communication easier to understand.</p>
//           </div>
//         ))}
//       </div>
//     </PageShell>
//   );
// }

function ResourcesPage() {
  const currentResources = [
    {
      title: "Agentic AI Production Readiness Checklist",
      desc: "A practical checklist for evaluating orchestration, tools, memory, guardrails, telemetry, and failure recovery.",
    },
    {
      title: "RAG Architecture Blueprint",
      desc: "A reference guide for ingestion, chunking, embeddings, retrieval, reranking, grounding, and evaluation.",
    },
    {
      title: "AI Build Agent Design Notes",
      desc: "A systems-thinking guide for designing build agents that analyze pipelines, failures, code quality, and release risks.",
    },
    {
      title: "Executive AI Adoption Scorecard",
      desc: "A leadership-friendly framework to assess business value, risk, maturity, governance, and adoption readiness.",
    },
  ];
    
  const freeResources = [
  {
    title: "AI Fundamentals Starter Pack",
    desc: "A complete beginner path for understanding what AI is, how modern AI systems work, and how to think like an AI builder.",
    tag: "Free",
    level: "Beginner",
    duration: "2-3 weeks",
    learn: [
      "What AI, ML, deep learning, GenAI, and LLMs mean",
      "How prompts, tokens, context windows, and embeddings work",
      "The difference between chatbots, copilots, agents, and workflows",
      "How AI products are designed around users, data, and feedback",
      "Basic AI safety, hallucination, bias, and evaluation concepts"
    ],
    build: [
      "Personal AI study assistant",
      "Prompt library for daily productivity",
      "Simple AI-powered FAQ assistant"
    ],
    practice: [
      "Explain AI to a high school student in 200 words",
      "Compare a chatbot, RAG app, and AI agent",
      "Write 10 prompts for research, coding, and learning"
    ],
    outcome: "You will understand the AI landscape clearly and know what kind of AI projects you want to build first."
  },
  {
    title: "AI for Data Scientists",
    desc: "A practical path for data scientists who want to move beyond notebooks and build LLM-powered analytics, RAG, agents, and explainable AI workflows.",
    tag: "Free",
    level: "Intermediate",
    duration: "8-12 weeks",
    learn: [
        "How LLMs actually work: tokens, transformers, instruction tuning, context windows, and evaluation",
        "How to build RAG systems with embeddings, retrieval, vector databases, and grounded responses",
        "How to combine classical data science workflows with LLM-powered explanations",
        "How to design agents for research, EDA, data quality, and business reporting",
        "How to turn data science projects into portfolio-ready AI applications"
    ],
    build: [
        "RAG app over company docs, internal wikis, Confluence pages, or PDF libraries",
        "Automated EDA agent that summarizes CSVs, creates charts, and flags anomalies",
        "Customer churn predictor with plain-English LLM explanations for each prediction",
        "Multi-agent research assistant with search, summarization, fact-checking, and formatting agents",
        "AI-powered data quality checker for missing values, outliers, schema mismatches, and natural-language issue reports"
    ],
    practice: [
        "Complete the free LLM course and summarize how LLMs generate answers",
        "Build a document chatbot using embeddings and retrieval",
        "Train a churn model and generate stakeholder-friendly explanations for predictions",
        "Design a LangGraph or CrewAI workflow with at least three specialized agents",
        "Run a data quality audit on a messy dataset and produce an executive-readable report"
    ],
    outcome: "You will be able to show employers that you can combine data science, LLMs, RAG, agents, and business communication into real AI-powered analytics products.",
    links: [
        {
        label: "LLM Course",
        type: "Free GitHub Course",
        url: "https://github.com/mlabonne/llm-course"
        },
        {
        label: "LangChain: Chat with Your Data",
        type: "Free Course",
        url: "https://www.deeplearning.ai/short-courses/langchain-chat-with-your-data/"
        },
        {
        label: "Building Applications with Vector Databases",
        type: "Free Tutorial",
        url: "https://www.deeplearning.ai/short-courses/building-applications-vector-databases/"
        },
        {
        label: "Automated EDA Agent Tutorial",
        type: "YouTube",
        url: "https://www.youtube.com/watch?v=C75TROiiEa0"
        },
        {
        label: "Intro to Machine Learning",
        type: "Free Kaggle Course",
        url: "https://www.kaggle.com/learn/intro-to-machine-learning"
        },
        {
        label: "AI Agents in LangGraph",
        type: "Free Course",
        url: "https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/"
        },
        {
        label: "AI Data Quality Checker Tutorial",
        type: "YouTube",
        url: "https://www.youtube.com/watch?v=CnAgB3A5OlU"
        }
    ]
  },
  {
    title: "Python for AI Builders",
    desc: "A hands-on Python track focused on the skills needed for AI, ML, data science, APIs, automation, and project building.",
    tag: "Free",
    level: "Beginner",
    duration: "4-6 weeks",
    learn: [
      "Variables, functions, loops, lists, dictionaries, and classes",
      "Reading and writing files, JSON, CSV, and API responses",
      "Using notebooks, virtual environments, packages, and project folders",
      "Working with pandas, NumPy, requests, and basic plotting",
      "Debugging errors and writing clean reusable code"
    ],
    build: [
      "CSV data cleaner",
      "AI prompt automation script",
      "API-powered research assistant",
      "Mini data dashboard"
    ],
    practice: [
      "Clean a messy CSV and summarize it",
      "Call an API and save results to a file",
      "Write a reusable function for text preprocessing",
      "Create a command-line tool that answers user questions"
    ],
    outcome: "You will be able to write Python scripts and notebooks for real AI and data workflows."
  },
  {
    title: "Data Science Foundations",
    desc: "A practical data science path covering data cleaning, exploration, statistics, visualization, SQL, and insight generation.",
    tag: "Free",
    level: "Beginner to Intermediate",
    duration: "6-8 weeks",
    learn: [
      "Data types, missing values, outliers, joins, grouping, and aggregation",
      "Exploratory data analysis using pandas and visualization libraries",
      "Core statistics: mean, median, variance, correlation, distributions, sampling",
      "SQL basics: SELECT, WHERE, GROUP BY, JOIN, CTEs, and window functions",
      "How to turn analysis into clear business recommendations"
    ],
    build: [
      "Sales performance dashboard",
      "Customer churn exploration notebook",
      "Student performance analysis",
      "SQL analytics report"
    ],
    practice: [
      "Find top 5 drivers of revenue in a dataset",
      "Clean a dataset with missing values and duplicates",
      "Write SQL queries for customer segmentation",
      "Create charts that explain a business trend"
    ],
    outcome: "You will be able to analyze real datasets and communicate insights like a data analyst."
  },
  {
    title: "Machine Learning Roadmap",
    desc: "A structured ML path from first model to model evaluation, feature engineering, deployment thinking, and responsible model use.",
    tag: "Free",
    level: "Intermediate",
    duration: "8-10 weeks",
    learn: [
      "Supervised vs unsupervised learning",
      "Regression, classification, clustering, and recommendation basics",
      "Train/test split, cross-validation, leakage, overfitting, and underfitting",
      "Metrics: accuracy, precision, recall, F1, ROC-AUC, RMSE, MAE",
      "Feature engineering, model interpretation, and deployment readiness"
    ],
    build: [
      "House price prediction model",
      "Customer churn classifier",
      "Resume-job match scorer",
      "Recommendation system prototype"
    ],
    practice: [
      "Train three models and compare metrics",
      "Explain false positives and false negatives for a classifier",
      "Create a feature importance report",
      "Write a model card for an ML project"
    ],
    outcome: "You will know how to train, evaluate, explain, and package ML models for portfolio projects."
  },
  {
    title: "Prompt Engineering Guide",
    desc: "A practical guide to designing prompts that produce reliable outputs for learning, research, coding, analysis, and product workflows.",
    tag: "Free",
    level: "Beginner to Intermediate",
    duration: "2-4 weeks",
    learn: [
      "Prompt roles, constraints, examples, context, and output formats",
      "Zero-shot, few-shot, chain-of-thought-style decomposition, and critique prompts",
      "How to ask models for structured JSON, tables, summaries, and code",
      "Prompt patterns for research, debugging, writing, tutoring, and analysis",
      "How to evaluate, iterate, and version prompts"
    ],
    build: [
      "Prompt library for students",
      "AI writing assistant",
      "Code review prompt pack",
      "Research summarization workflow"
    ],
    practice: [
      "Rewrite a weak prompt into a strong prompt",
      "Generate a rubric and grade an answer",
      "Ask for JSON output and validate it",
      "Create prompts for five different professions"
    ],
    outcome: "You will be able to use AI tools more effectively and design reusable prompts for real workflows."
  },
  {
    title: "RAG Beginner Guide",
    desc: "A zero-to-one path for building retrieval-augmented generation systems over PDFs, websites, notes, policies, and enterprise documents.",
    tag: "Free",
    level: "Intermediate",
    duration: "6-8 weeks",
    learn: [
      "Why RAG is used and how it reduces hallucination",
      "Document loading, chunking, metadata, embeddings, and vector search",
      "Similarity search, reranking, grounding, citations, and source traceability",
      "Vector databases such as FAISS, Chroma, Pinecone, Weaviate, and pgvector",
      "RAG evaluation: retrieval quality, answer faithfulness, latency, and cost"
    ],
    build: [
      "PDF question-answering assistant",
      "Personal knowledge base chatbot",
      "Company policy assistant",
      "Research paper summarizer"
    ],
    practice: [
      "Chunk a PDF into meaningful sections",
      "Compare retrieval results for different chunk sizes",
      "Add citations to generated answers",
      "Create a test set for evaluating RAG answers"
    ],
    outcome: "You will be able to build your first grounded AI app over documents and explain how it works."
  },
  {
    title: "Agentic AI Glossary",
    desc: "A concept map for understanding agents, tools, memory, planning, orchestration, retries, observability, and production constraints.",
    tag: "Free",
    level: "Intermediate to Advanced",
    duration: "4-6 weeks",
    learn: [
      "What makes an AI agent different from a chatbot",
      "Tools, function calling, planning, memory, state, and task decomposition",
      "Single-agent vs multi-agent workflows",
      "Human-in-the-loop approvals, guardrails, and recovery patterns",
      "Observability for agents: traces, tool failures, latency, cost, and quality"
    ],
    build: [
      "Research agent",
      "Calendar planning agent",
      "Data analysis agent",
      "Multi-step workflow assistant"
    ],
    practice: [
      "Design an agent with three tools",
      "Create a failure recovery plan for bad tool output",
      "Map the state transitions of an agent workflow",
      "Define observability metrics for an agent"
    ],
    outcome: "You will understand how to design AI agents that can reason, use tools, and complete multi-step tasks."
  },
  {
    title: "AI Career Starter Kit",
    desc: "A practical career kit for turning learning into portfolio projects, GitHub proof, LinkedIn visibility, interview stories, and job readiness.",
    tag: "Free",
    level: "All Levels",
    duration: "2-4 weeks",
    learn: [
      "How to choose AI projects that match your career goals",
      "How to write strong README files and project case studies",
      "How to explain AI projects in interviews",
      "How to position yourself on LinkedIn and GitHub",
      "How to build a 90-day AI learning and portfolio plan"
    ],
    build: [
      "AI portfolio website",
      "GitHub project case study",
      "LinkedIn learning series",
      "Resume bullet bank for AI projects"
    ],
    practice: [
      "Write a project README with problem, approach, stack, and impact",
      "Record a 2-minute project explanation",
      "Create 10 LinkedIn post ideas from your learning journey",
      "Prepare STAR stories for AI project interviews"
    ],
    outcome: "You will have a clear learning plan and a portfolio strategy that shows real proof of skill."
  }
];

  const externalResources = [
    {
      title: "Google Machine Learning Crash Course",
      desc: "A free beginner-friendly ML course from Google.",
      link: "https://developers.google.com/machine-learning/crash-course",
    },
    {
      title: "Kaggle Learn",
      desc: "Short practical courses for Python, pandas, ML, SQL, and data visualization.",
      link: "https://www.kaggle.com/learn",
    },
    {
      title: "Hugging Face Learn",
      desc: "Free lessons on transformers, NLP, diffusion models, agents, and open-source AI tooling.",
      link: "https://huggingface.co/learn",
    },
    {
      title: "fast.ai",
      desc: "Practical deep learning courses focused on building real models.",
      link: "https://www.fast.ai/",
    },
    {
      title: "OpenAI Cookbook",
      desc: "Examples and implementation patterns for building AI applications.",
      link: "https://cookbook.openai.com/",
    },
    {
      title: "Made With ML",
      desc: "Practical MLOps and ML engineering lessons for production systems.",
      link: "https://madewithml.com/",
    },
  ];

  const comingSoon = [
    {
      title: "Build Your First AI Chatbot",
      desc: "A step-by-step tutorial for building a chatbot UI, prompt flow, backend API, and response handling.",
    },
    {
      title: "Build a RAG App Over PDFs",
      desc: "Upload documents, chunk content, create embeddings, retrieve context, and generate grounded answers.",
    },
    {
      title: "Build Your First AI Agent",
      desc: "Learn tool calling, planning, memory, retries, and human-in-the-loop review.",
    },
    {
      title: "LLM Evaluation Workbook",
      desc: "Hands-on exercises for testing hallucination, answer quality, latency, cost, and retrieval accuracy.",
    },
    {
      title: "AI Portfolio Project Templates",
      desc: "Ready-to-customize project structures for GitHub, resumes, LinkedIn, and interviews.",
    },
    {
      title: "White Papers & Architecture Notes",
      desc: "Deep dives on RAG, agentic AI, observability, MLOps, multimodal AI, and production readiness.",
    },
  ];

  const paidProjects = [
    {
      title: "Production Chatbot Bootcamp",
      desc: "Build a full-stack chatbot with React, FastAPI, authentication, prompt routing, and deployment.",
      price: "Paid Project",
    },
    {
      title: "RAG System for Enterprise Documents",
      desc: "Create a document intelligence app with ingestion, embeddings, vector search, citations, and evaluation.",
      price: "Paid Project",
    },
    {
      title: "Agentic AI Workflow Builder",
      desc: "Build a tool-using agent with memory, planning, observability, and approval workflows.",
      price: "Paid Project",
    },
    {
      title: "AI Data Science Capstone",
      desc: "Analyze a real dataset, train ML models, build dashboards, and present business insights.",
      price: "Paid Project",
    },
    {
      title: "MLOps Deployment Lab",
      desc: "Package, deploy, monitor, and evaluate an ML or LLM application with production-style practices.",
      price: "Paid Project",
    },
    {
      title: "Build Your Own Mini LLM App",
      desc: "Learn tokenization concepts, model usage patterns, fine-tuning basics, and LLM app architecture.",
      price: "Paid Project",
    },
  ];

  const vedaStages = [
    {
      title: "Toolkits",
      desc: "Veda opens the vault by grouping practical AI resources into toolkits for GenAI, RAG, agents, MLOps, data science, and cloud AI."
    },
    {
      title: "Launch Kits",
      desc: "Templates become launch kits: README structures, project plans, portfolio prompts, evaluation sheets, and career roadmaps."
    },
    {
      title: "Field Manuals",
      desc: "Guides and tutorials become field manuals that explain how to build, evaluate, deploy, and communicate AI systems."
    },
    {
      title: "System Scans",
      desc: "Checklists become system scans for production readiness, observability, governance, cost, reliability, and human review."
    },
    {
      title: "Advanced Labs",
      desc: "Paid and guided project tracks become advanced labs for learners who want mentorship, review, and portfolio-ready outcomes."
    }
  ];

  const vedaSignals = [
    {
      label: "Vault Layer 01",
      title: "Toolkits",
      desc: "Curated learning resources for AI fundamentals, RAG, agents, data science, and GenAI."
    },
    {
      label: "Vault Layer 02",
      title: "Launch Kits",
      desc: "Templates and project structures that help learners publish stronger work."
    },
    {
      label: "Vault Layer 03",
      title: "Advanced Labs",
      desc: "Guided project paths for production chatbots, RAG systems, agents, and MLOps."
    }
  ];

  return (
    <PageShell eyebrow="Resources" title="Free AI, ML, data science, and agentic systems resources for builders." immersive>
      <VedaNeuralGuide
        eyebrow="Intelligence Vault"
        title="Open the vault of AI tools and templates."
        theme="Build with the Intelligence Vault"
        modeLabel="Toolkits → Launch Kits → Labs"
        intro="Welcome to the Intelligence Vault. Veda helps you find the right tools, templates, guides, checklists, and project labs for your next AI build."
        stages={vedaStages}
        signalCards={vedaSignals}
        featureRoutes={[
          {
            label: "Resources for Beginners",
            title: "Toolkits",
            desc: "Start with curated learning resources for AI fundamentals, RAG, agents, data science, and GenAI.",
            targetId: "resource-toolkits"
          },
          {
            label: "Intermediates",
            title: "Launch Kits",
            desc: "Explore tutorials, templates, and project structures that help learners publish stronger work.",
            targetId: "resource-launch-kits"
          },
          {
            label: "Advanced",
            title: "Advanced Labs",
            desc: "Jump into guided project paths for production chatbots, RAG systems, agents, and MLOps.",
            targetId: "resource-advanced-labs"
          }
        ]}
      />

      <section className="mt-12">
        <h2 className="font-serif text-4xl font-light text-white md:text-5xl">System Scans</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {currentResources.map((resource) => (
            <article key={resource.title} className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#caa177]">System Scan</p>
              <h3 className="mt-4 text-2xl font-bold text-white">{resource.title}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{resource.desc}</p>
              <p className="mt-6 font-semibold text-[#caa177]">Coming Soon →</p>
            </article>
          ))}
        </div>
      </section>

    <section id="resource-toolkits" className="mt-12 scroll-mt-36">
      <h2 className="font-serif text-4xl font-light text-white md:text-5xl">Toolkits</h2>
      <p className="mt-4 max-w-3xl leading-8 text-zinc-400">
        A zero-to-hero roadmap for learners who want to build strong AI, ML, data science, chatbot, RAG, and agentic AI foundations over the next few months.
      </p>
    
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {freeResources.map((resource) => {
          const primaryLink = resource.links?.[0]?.url;
    
          return (
            <article
              key={resource.title}
              onClick={() => {
                if (primaryLink) {
                  window.open(primaryLink, "_blank", "noopener,noreferrer");
                }
              }}
              role={primaryLink ? "link" : "article"}
              tabIndex={primaryLink ? 0 : undefined}
              onKeyDown={(event) => {
                if (primaryLink && (event.key === "Enter" || event.key === " ")) {
                  event.preventDefault();
                  window.open(primaryLink, "_blank", "noopener,noreferrer");
                }
              }}
              className={`rounded-[2rem] border border-zinc-800 bg-zinc-950 p-7 transition ${
                primaryLink
                  ? "cursor-pointer hover:-translate-y-1 hover:border-[#caa177]/60"
                  : "hover:border-zinc-700"
              }`}
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-[#caa177]/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#caa177]">
                  {resource.tag}
                </span>
                <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                  {resource.level}
                </span>
                <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                  {resource.duration}
                </span>
              </div>
    
              <h3 className="mt-5 text-2xl font-bold text-white">{resource.title}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{resource.desc}</p>
    
              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-white">What you’ll learn</h4>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-400">
                    {resource.learn.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
    
                <div>
                  <h4 className="font-semibold text-white">What you’ll build</h4>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-400">
                    {resource.build.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
    
              <div className="mt-6 rounded-2xl border border-zinc-800 bg-black/40 p-5">
                <h4 className="font-semibold text-white">Practice exercises</h4>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-400">
                  {resource.practice.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
    
              {resource.links && (
                <div
                  className="mt-6 rounded-2xl border border-zinc-800 bg-black/40 p-5"
                  onClick={(event) => event.stopPropagation()}
                >
                  <h4 className="font-semibold text-white">Free tutorials and references</h4>
                  <div className="mt-4 grid gap-3">
                    {resource.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 transition hover:border-[#caa177]/60 hover:bg-[#caa177]/10"
                      >
                        <p className="text-sm font-semibold text-white">{link.label}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#caa177]">{link.type}</p>
                      </a>
                    ))}
                  </div>
                </div>
              )}
    
              <p className="mt-5 rounded-2xl border border-[#caa177]/30 bg-[#caa177]/10 p-4 text-sm leading-6 text-[#d8b58d]">
                Outcome: {resource.outcome}
              </p>
    
              <p className="mt-5 font-semibold text-[#caa177]">
                {primaryLink ? "Open Free Resource →" : "Coming Soon →"}
              </p>
            </article>
          );
        })}
      </div>
    </section>

      {/* <section className="mt-12">
        <h2 className="font-serif text-4xl font-light text-white md:text-5xl">Free Learning Library</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {freeResources.map((resource) => (
            <article key={resource.title} className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-6 transition hover:-translate-y-1 hover:border-[#caa177]/60">
              <span className="rounded-full border border-[#caa177]/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#caa177]">
                {resource.tag}
              </span>
              <h3 className="mt-5 text-xl font-bold text-white">{resource.title}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{resource.desc}</p>
            </article>
          ))}
        </div>
      </section> */}

      <section id="resource-launch-kits" className="mt-12 scroll-mt-36">
        <h2 className="font-serif text-4xl font-light text-white md:text-5xl">Field Manuals</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {externalResources.map((resource) => (
            <a
              key={resource.title}
              href={resource.link}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-[#caa177]/60 hover:bg-[#caa177]/10"
            >
              <h3 className="text-xl font-bold text-white">{resource.title}</h3>
              <p className="mt-3 leading-7 text-zinc-400">{resource.desc}</p>
              <p className="mt-4 font-semibold text-[#caa177]">Open Resource →</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-4xl font-light text-white md:text-5xl">Launch Kits Coming Soon</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {comingSoon.map((resource) => (
            <article key={resource.title} className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">Launch Kit</p>
              <h3 className="mt-4 text-2xl font-bold text-white">{resource.title}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{resource.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="resource-advanced-labs" className="mt-12 scroll-mt-36 rounded-[2rem] border border-[#caa177]/40 bg-[#caa177]/10 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#caa177]">Advanced Labs</p>
        <h2 className="mt-4 font-serif text-4xl font-light text-white md:text-5xl">Build real-world AI projects with guidance.</h2>
        <p className="mt-5 max-w-4xl leading-8 text-zinc-300">
          These paid project tracks are for learners who want structured mentorship, project reviews, templates, code walkthroughs, and portfolio-ready deliverables.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paidProjects.map((project) => (
            <article key={project.title} className="rounded-[2rem] border border-zinc-800 bg-black/50 p-7">
              <span className="rounded-full bg-[#caa177] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-black">
                {project.price}
              </span>
              <h3 className="mt-5 text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{project.desc}</p>
              <p className="mt-6 font-semibold text-[#caa177]">Enrollment Opening Soon →</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function ContactPage() {
  return (
    <PageShell eyebrow="Contact" title="Let’s connect and build intelligent systems that matter.">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8">
          <h2 className="text-3xl font-light">Reach out</h2>
          <p className="mt-5 leading-8 text-zinc-400">
            I’m open to meaningful conversations around Agentic AI, RAG-backed enterprise intelligence, AI-native SaaS products, intelligent automation, and engineering leadership.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-4 rounded-[2rem] border border-zinc-800 bg-black p-8">
          <a href="mailto:debosmitaroy.ai@gmail.com" className="rounded-2xl bg-white px-6 py-4 text-center font-semibold text-black">
            Email: debosmitaroy.ai@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/debosmita-roy-b0964921/" target="_blank" rel="noreferrer" className="rounded-2xl border border-zinc-700 px-6 py-4 text-center font-semibold text-white hover:bg-zinc-900">
            LinkedIn: Debosmita Roy
          </a>
        </div>
      </div>
    </PageShell>
  );
}

function PageShell({ eyebrow, title, children, immersive = false }) {
  if (immersive) {
    return (
      <main id={`${eyebrow.toLowerCase()}-section`} className="relative overflow-hidden bg-[#03070d] px-6 py-24">
        <ImmersiveVedaBackdrop label={eyebrow} />
        <div className="relative z-10 mx-auto max-w-7xl [perspective:1400px]">
          <div className="rounded-[2rem] border border-cyan-300/20 bg-black/25 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur-sm md:p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">{eyebrow}</p>
            <h1 className="mt-6 max-w-5xl font-serif text-4xl font-light leading-tight md:text-6xl">{title}</h1>
          </div>
          <div className="mt-12 [transform-style:preserve-3d] [&_article]:shadow-2xl [&_article]:shadow-cyan-950/20 [&_article]:transition-transform [&_article]:duration-300 [&_article:hover]:-translate-y-1 [&_article:hover]:[transform:translateZ(18px)] [&_section]:relative [&_section]:z-10">
            {children}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main id={`${eyebrow.toLowerCase()}-section`} className="mx-auto max-w-7xl px-6 py-24">
      <p className="text-sm uppercase tracking-[0.35em] text-[#caa177]">{eyebrow}</p>
      <h1 className="mt-6 max-w-5xl font-serif text-4xl font-light leading-tight md:text-6xl">{title}</h1>
      <div className="mt-12">{children}</div>
    </main>
  );
}

function NewsletterSection() {
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [subscribeMessage, setSubscribeMessage] = useState("");

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();

    const email = subscriberEmail.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscribeMessage("Please enter a valid email address.");
      return;
    }

    const subject = encodeURIComponent("Subscribe me to Debosmita's Newsletter");
    const body = encodeURIComponent(
      `Hi Debosmita,\n\nPlease add me to Debosmita's Newsletter.\n\nSubscriber email: ${email}\n\nThank you.`
    );

    setSubscribeMessage("Opening your email app to confirm the subscription request.");
    window.location.href = `mailto:debosmitaroy.ai@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-4">
      <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-[#070b12] px-6 py-16 text-center shadow-2xl md:px-12">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

        <div className="relative mx-auto flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-cyan-300/30 bg-gradient-to-br from-cyan-400/20 via-zinc-900 to-fuchsia-500/20 text-xl font-black text-white shadow-lg shadow-cyan-500/10">
          DR
        </div>

        <p className="relative mt-6 text-xs uppercase tracking-[0.35em] text-cyan-300/80">AI Notes • Systems Thinking • Career Growth</p>

        <h2 className="relative mt-4 text-2xl font-black md:text-4xl">Debosmita's Newsletter</h2>

        <p className="relative mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-300">I help you level up in AI, data science, agentic systems, and modern technology.</p>

        <p className="relative mt-2 text-xs font-semibold text-zinc-400">By Debosmita Roy</p>

        <form onSubmit={handleNewsletterSubmit} className="relative mx-auto mt-8 flex max-w-xl flex-col gap-3 rounded-2xl border border-cyan-300/30 bg-black/50 p-2 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl sm:flex-row">
          <input
            type="email"
            value={subscriberEmail}
            onChange={(event) => {
              setSubscriberEmail(event.target.value);
              setSubscribeMessage("");
            }}
            placeholder="Type your email..."
            className="min-h-14 flex-1 rounded-xl border border-zinc-800 bg-zinc-950/80 px-5 text-base text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/20"
            aria-label="Email address"
            required
          />
          <button type="submit" className="min-h-14 rounded-xl bg-gradient-to-r from-cyan-300 to-fuchsia-400 px-7 text-base font-bold text-black transition hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20">
            Subscribe
          </button>
        </form>

        {subscribeMessage && (
          <p className="relative mx-auto mt-4 max-w-xl text-sm font-semibold text-cyan-200" role="status">
            {subscribeMessage}
          </p>
        )}

        <p className="relative mx-auto mt-7 max-w-2xl text-sm leading-6 text-zinc-500">
          By subscribing, you agree to receive occasional AI insights, engineering notes, and future updates from Debosmita Roy. Your email app will open so you can confirm the request.
        </p>
      </div>
    </section>
  );
}

function SpotifyPlaylistSection() {
  const favoriteTracks = [
    {
      title: "Neural Dreams",
      artist: "Future Frequencies",
      mood: "Ambient AI",
      notes: [329.63, 392, 440, 523.25, 440, 392, 349.23, 392]
    },
    {
      title: "Cosmic Debugging",
      artist: "Quantum Sessions",
      mood: "Experimental focus",
      notes: [246.94, 311.13, 369.99, 493.88, 369.99, 311.13, 277.18, 311.13]
    }
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const audioContextRef = useRef(null);
  const masterGainRef = useRef(null);
  const intervalRef = useRef(null);
  const progressTimerRef = useRef(null);
  const activeTrackRef = useRef(0);

  const activeTrack = favoriteTracks[activeTrackIndex];

  const stopAudioNodes = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (progressTimerRef.current) {
      clearInterval(progressTimerRef.current);
      progressTimerRef.current = null;
    }
    if (masterGainRef.current && audioContextRef.current) {
      masterGainRef.current.gain.setTargetAtTime(0, audioContextRef.current.currentTime, 0.04);
    }
  };

  const playTone = (frequency, startTime, duration, volume = 0.08) => {
    const context = audioContextRef.current;
    const master = masterGainRef.current;
    if (!context || !master) return;

    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, startTime);
    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(volume, startTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

    oscillator.connect(gain);
    gain.connect(master);
    oscillator.start(startTime);
    oscillator.stop(startTime + duration + 0.02);
  };

  const scheduleLoop = () => {
    const context = audioContextRef.current;
    if (!context) return;

    const now = context.currentTime;
    const currentTrack = favoriteTracks[activeTrackRef.current];

    currentTrack.notes.forEach((note, index) => {
      playTone(note, now + index * 0.32, 0.22, 0.055);
      if (index % 2 === 0) {
        playTone(note / 2, now + index * 0.32, 0.18, 0.035);
      }
    });
  };

  const startPlaylist = async () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext();
      masterGainRef.current = audioContextRef.current.createGain();
      masterGainRef.current.gain.value = 0.18;
      masterGainRef.current.connect(audioContextRef.current.destination);
    }

    if (audioContextRef.current.state === "suspended") {
      await audioContextRef.current.resume();
    }

    if (masterGainRef.current) {
      masterGainRef.current.gain.setTargetAtTime(0.18, audioContextRef.current.currentTime, 0.04);
    }

    setIsPlaying(true);
    setProgress((value) => (value === 0 ? 8 : value));
    scheduleLoop();
    intervalRef.current = setInterval(scheduleLoop, 2600);
    progressTimerRef.current = setInterval(() => {
      setProgress((value) => (value >= 100 ? 8 : value + 2));
    }, 700);
  };

  const pausePlaylist = () => {
    stopAudioNodes();
    setIsPlaying(false);
  };

  const stopPlaylist = () => {
    stopAudioNodes();
    setIsPlaying(false);
    setProgress(0);
  };

  const togglePlay = () => {
    if (isPlaying) {
      pausePlaylist();
    } else {
      startPlaylist();
    }
  };

  const selectTrack = (index) => {
    const wasPlaying = isPlaying;
    stopAudioNodes();
    activeTrackRef.current = index;
    setActiveTrackIndex(index);
    setProgress(0);
    setIsPlaying(false);

    if (wasPlaying) {
      setTimeout(() => {
        startPlaylist();
      }, 80);
    }
  };

  const nextTrack = () => {
    const nextIndex = (activeTrackIndex + 1) % favoriteTracks.length;
    selectTrack(nextIndex);
  };

  const previousTrack = () => {
    const previousIndex =
      activeTrackIndex === 0 ? favoriteTracks.length - 1 : activeTrackIndex - 1;
    selectTrack(previousIndex);
  };

  useEffect(() => {
    activeTrackRef.current = activeTrackIndex;
  }, [activeTrackIndex]);

  useEffect(() => {
    return () => {
      stopAudioNodes();
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return (
    <section className="border-y border-zinc-800 bg-zinc-900/60 px-6 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-lg font-bold uppercase tracking-[0.22em] text-zinc-200 md:text-xl">
              SOUNDTRACKS FOR BUILDING THE FUTURE
            </h2>
            <p className="mt-3 text-sm text-zinc-400">
              Hype-up mix for deep work, coding, architecture & launch energy.
            </p>
          </div>
          <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-green-300">
            Favorites
          </span>
        </div>
        <div className="mt-7 h-px w-full bg-zinc-600" />

        <div className="mt-5 rounded-[1.6rem] border border-zinc-800 bg-[#121212] p-3 shadow-2xl md:p-3.5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="grid h-11 w-11 grid-cols-2 overflow-hidden rounded-md bg-zinc-800">
                <div className="bg-cyan-500/70" />
                <div className="bg-fuchsia-500/70" />
                <div className="bg-orange-500/70" />
                <div className="bg-violet-500/70" />
              </div>

              <div className="text-left">
                <p className="text-xs font-semibold text-white">
                  {activeTrack.title} · {activeTrack.artist}
                </p>
                <p className="mt-0.5 text-[11px] text-zinc-400">
                  {activeTrack.mood} · AI Focus Mix · Future Soundscapes
                </p>
                <span className="mt-1 inline-flex rounded-md bg-zinc-800 px-1.5 py-0.5 text-[9px] font-semibold text-zinc-300">
                  Original browser audio preview
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 text-zinc-300">
              <button
                type="button"
                onClick={previousTrack}
                className="rounded-full border border-zinc-700 p-1.5 text-[10px] transition hover:border-white hover:text-white"
                aria-label="Previous track"
              >
                ◀◀
              </button>

              <button
                type="button"
                onClick={togglePlay}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-black text-black transition hover:scale-105"
                aria-label={isPlaying ? "Pause playlist" : "Play playlist"}
              >
                {isPlaying ? "Ⅱ" : "▶"}
              </button>

              <button
                type="button"
                onClick={stopPlaylist}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 text-xs transition hover:border-white hover:text-white"
                aria-label="Stop playlist"
              >
                ■
              </button>

              <button
                type="button"
                onClick={nextTrack}
                className="rounded-full border border-zinc-700 p-1.5 text-[10px] transition hover:border-white hover:text-white"
                aria-label="Next track"
              >
                ▶▶
              </button>
            </div>
          </div>

          <div className="mt-4">
            <div className="h-1.5 overflow-hidden rounded-full bg-zinc-800">
              <div
                className={`h-full rounded-full bg-gradient-to-r from-green-300 via-cyan-300 to-fuchsia-400 ${
                  isPlaying ? "animate-pulse" : ""
                }`}
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-2 flex items-center justify-between text-[10px] text-zinc-500">
              <span>{isPlaying ? `Playing ${activeTrack.title}` : progress === 0 ? "Stopped" : "Paused"}</span>
              <span>Play / Pause / Stop enabled</span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {favoriteTracks.map((track, index) => (
              <button
                key={track.title}
                type="button"
                onClick={() => selectTrack(index)}
                className={`rounded-xl border p-2 text-left transition ${
                  activeTrackIndex === index
                    ? "border-green-300 bg-green-300/10 text-white"
                    : "border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-zinc-600 hover:text-white"
                }`}
              >
                <p className="text-[11px] font-semibold">{track.title}</p>
                <p className="mt-0.5 text-[9px] opacity-70">{track.mood}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V23h-4V8Zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-7.9c0-1.88-.03-4.3-2.62-4.3-2.63 0-3.03 2.05-3.03 4.17V23h-4V8Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.55 3.6 12 3.6 12 3.6s-7.55 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.85.5 9.4.5 9.4.5s7.55 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.9 12l-6.3 3.6Z" />
    </svg>
  );
}

function PrivacyPolicyPage() {
  return (
    <PageShell eyebrow="Privacy" title="Privacy policy for visitors, collaborators, and subscribers.">
      <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8 text-zinc-300">
        <h2 className="text-2xl font-light text-white">Information collection</h2>
        <p className="mt-4 leading-8 text-zinc-400">
          This website may collect basic contact information voluntarily submitted through newsletter subscriptions and contact forms.
        </p>
      </div>
    </PageShell>
  );
}

function TermsPage() {
  return (
    <PageShell eyebrow="Terms" title="Terms and conditions for using this portfolio website.">
      <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8 text-zinc-300">
        <h2 className="text-2xl font-light text-white">Website usage</h2>
        <p className="mt-4 leading-8 text-zinc-400">
          The content on this website is intended for informational and portfolio purposes only.
        </p>
      </div>
    </PageShell>
  );
}

function Footer({ goToPage }) {
  return (
    <footer className="border-t border-zinc-800 px-6 py-14 text-center text-sm text-zinc-500">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-6">
        <div className="flex items-center justify-center gap-5 text-zinc-400">
          <a href="https://www.instagram.com/milenial_mamma?igsh=OGlxYmltbndvNTdh&utm_source=qr" target="_blank" rel="noreferrer" className="rounded-full border border-zinc-800 p-3 transition hover:border-white hover:text-white" aria-label="Instagram">
            <InstagramIcon />
          </a>

          <a href="https://www.linkedin.com/in/debosmita-roy-b0964921/" target="_blank" rel="noreferrer" className="rounded-full border border-zinc-800 p-3 transition hover:border-white hover:text-white" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>

          <a href="https://www.youtube.com/channel/UCzlOtV6gKYvkkKR_8P7s-YA" target="_blank" rel="noreferrer" className="rounded-full border border-zinc-800 p-3 transition hover:border-white hover:text-white" aria-label="YouTube">
            <YouTubeIcon />
          </a>
        </div>

        <p className="italic text-zinc-500">Copyright © 2026 Debosmita Roy</p>

        <div className="flex flex-wrap items-center justify-center gap-6 text-zinc-500">
          <button type="button" onClick={() => goToPage("privacy")} className="transition hover:text-white">
            Privacy Policy
          </button>

          <button type="button" onClick={() => goToPage("terms")} className="transition hover:text-white">
            Terms and Conditions
          </button>
        </div>
      </div>
    </footer>
  );
}
