export const personal = {
  name: "Ratan Sai Mandela",
  title: "Data Engineer & AI Builder",
  tagline: "Turning raw data into reliable, intelligent systems",
  bio: "AWS-Certified Data Engineer with 2+ years of experience designing high-performance ETL pipelines and scalable analytics platforms. Specialized in real-time streaming, cloud-native architectures, and AI-powered data systems across AWS, GCP, Databricks, and Snowflake.",
  email: "mandelaratansai1@mail.com",
  linkedin: "https://www.linkedin.com/in/ratan-sai-mandela-72045a217",
  github: "https://github.com/Ratan39",
  location: "St. Louis, MO",
  status: "Open to work",
  statusDetail: "Actively seeking roles in AI, Data Engineering & Data Analytics",
  stats: [
    { value: "2+", label: "Years experience" },
    { value: "8", label: "Projects shipped" },
    { value: "2", label: "AWS certifications" },
    { value: "50M+", label: "Records processed" },
  ],
};

export const skills = {
  de: ["Apache Spark", "Kafka", "Airflow", "dbt", "AWS Glue", "Step Functions", "Dataproc", "Delta Lake"],
  ai: ["Python", "LangChain", "RAG", "XGBoost", "NLP", "MedGemma", "RLHF", "Streamlit"],
  cloud: ["AWS", "GCP", "Databricks", "Snowflake", "BigQuery", "Redshift", "S3", "Lambda"],
  viz: ["Tableau", "Power BI", "QuickSight", "Plotly", "Altair"],
};

export const projects = [
  {
    id: "rcm",
    title: "Full Revenue Cycle Management",
    category: "AI",
    platform: null,
    tag: "AI",
    tagColor: "blue",
    context: "Research · Saint Louis University",
    oneLiner: "Automated clinical-to-code mapping achieving 88% F1-score using NLP + RAG + RLHF",
    description:
      "Engineered an automated clinical-to-code mapping engine extracting ICD-10 and CPT codes from unstructured clinical notes. Implemented RAG with ChromaDB, fine-tuned MedGemma on healthcare datasets, and applied RLHF with professional medical coder feedback.",
    impact: "88% F1-score on Synthea datasets",
    stack: ["MedGemma", "RAG", "ChromaDB", "RLHF", "NLP", "Streamlit", "Python"],
    github: "https://github.com/Ratan39/Full-Revenue-Management-Cycle-",
    live: null,
    featured: true,
  },
  {
    id: "edupath",
    title: "EduPath AI",
    category: "AI",
    platform: null,
    tag: "AI",
    tagColor: "blue",
    context: "Agentic Course Recommendation Platform",
    oneLiner: "Agentic LLM platform using Qwen-7B + RAG to predict academic program interest",
    description:
      "Developed an agentic analytical platform utilizing Qwen-7B LLM and RAG orchestration to simulate graduate student personas and predict academic program interest. Multi-tiered Streamlit visualization suite converting NLP rationales into actionable marketing insights.",
    impact: "100% environment reproducibility via Docker Dev Containers",
    stack: ["Qwen-7B", "RAG", "LangChain", "Streamlit", "Docker", "Pandas", "Plotly"],
    github: "https://github.com/Ratan39/Digital_twin_using_Qwen_model",
    live: null,
    featured: true,
  },
  {
    id: "lab-ml",
    title: "Lab Abnormalities as Predictors for Chronic Diseases",
    category: "ML",
    platform: "AWS",
    tag: "ML",
    tagColor: "green",
    context: "Healthcare · AWS SageMaker",
    oneLiner: "End-to-end predictive platform on AWS diagnosing chronic disease risk from FHIR lab data",
    description:
      "Scalable predictive healthcare platform on AWS orchestrating FHIR data ingestion via Glue and PySpark. Used PCA for dimensionality reduction, K-Means for patient clustering, and XGBoost classification deployed via SageMaker for automated chronic disease risk assessments.",
    impact: "Live Streamlit app — deployed to production",
    stack: ["AWS SageMaker", "PySpark", "XGBoost", "K-Means", "PCA", "Glue", "Streamlit"],
    github: "https://github.com/Ratan39/Lab_Abnormalities_as_predictors_for_chronic_diseases",
    live: "https://lababnormalitiesaspredictorsforchronicdiseases-hy5wt3w2smugaww.streamlit.app",
    featured: true,
  },
  {
    id: "kafka-mongodb",
    title: "Kafka → MongoDB Spark Streaming",
    category: "DE",
    platform: "GCP",
    tag: "Data Engineering",
    tagColor: "teal",
    context: "GCP · Real-time Streaming",
    oneLiner: "Stateful real-time pipeline joining order & payment streams using PySpark on GCP",
    description:
      "Stateful real-time data pipeline using PySpark Structured Streaming and Confluent Kafka to synchronize asynchronous order and payment event streams. Implemented arbitrary stateful processing with applyInPandasWithState for complex event correlation and late-arriving data.",
    impact: "GCS-based checkpointing for full system resilience",
    stack: ["PySpark", "Confluent Kafka", "MongoDB Atlas", "GCP", "GCS", "Python"],
    github: "https://github.com/Ratan39/Kafka_to_MongoDB_Spark_streaming_GCP",
    live: null,
    featured: true,
  },
  {
    id: "gcp-cicd",
    title: "GCP CI/CD Airline Pipeline",
    category: "DE",
    platform: "GCP",
    tag: "Data Engineering",
    tagColor: "teal",
    context: "GCP · Serverless + DevOps",
    oneLiner: "Serverless GCP pipeline with GitHub Actions CI/CD automating Airflow & PySpark deployments",
    description:
      "Designed a serverless GCP pipeline with GitHub Actions CI/CD to automate Airflow and PySpark deployments across dev and prod environments. Engineered event-driven orchestration using Cloud Composer and GCS Sensors, delivering a structured BigQuery warehouse.",
    impact: "Eliminated idle compute costs via automated variable injection",
    stack: ["Cloud Composer", "Dataproc Serverless", "BigQuery", "GCS", "GitHub Actions", "PySpark"],
    github: "https://github.com/Ratan39/GCP-CI-CD-Airlines",
    live: null,
    featured: false,
  },
  {
    id: "databricks",
    title: "Databricks Incremental Data Pipeline",
    category: "DE",
    platform: "Databricks",
    tag: "Data Engineering",
    tagColor: "teal",
    context: "Databricks · Delta Lake",
    oneLiner: "Idempotent CDC pipeline on Databricks using Delta Lake MERGE with automated file archiving",
    description:
      "Scalable ETL pipeline using PySpark and Delta Lake to ingest high-volume order data. Implemented a sophisticated Upsert (MERGE) strategy for CDC based on tracking identifiers, and an automated file-management system using dbutils to archive processed source data.",
    impact: "100% data accuracy with full ACID compliance",
    stack: ["Databricks", "PySpark", "Delta Lake", "dbutils", "Unity Catalog", "Python"],
    github: "https://github.com/Ratan39/databricks_event_driven_pipeline",
    live: null,
    featured: false,
  },
  {
    id: "dbt-ecommerce",
    title: "Automated E-commerce dbt Pipeline",
    category: "DE",
    platform: "Snowflake",
    tag: "Data Engineering",
    tagColor: "teal",
    context: "Snowflake · dbt · ELT",
    oneLiner: "Multi-layer ELT pipeline transforming raw retail data into a star schema with 100% reporting accuracy",
    description:
      "Designed a multi-layer ELT pipeline in Snowflake using dbt to transform raw retail data into a high-performance star schema. Developed modular staging views and fact tables for order-level revenue analysis with 8+ automated generic and singular tests.",
    impact: "100% reporting accuracy via dbt source freshness monitoring",
    stack: ["Snowflake", "dbt", "SQL", "Star Schema", "Data Testing"],
    github: "https://github.com/Ratan39/dbt_ecommerce",
    live: null,
    featured: false,
  },
  {
    id: "dbt-airflow",
    title: "dbt + Airflow + Snowflake Finance Pipeline",
    category: "DE",
    platform: "Snowflake",
    tag: "Data Engineering",
    tagColor: "teal",
    context: "Snowflake · Airflow · Cosmos",
    oneLiner: "Production-grade pipeline orchestrating dbt models via Airflow Cosmos with dynamic DAG generation",
    description:
      "Scalable data transformation pipeline orchestrating dbt models through Apache Airflow using the Cosmos library. Engineered a dynamic DAG generation system that translates modular dbt models into executable Airflow tasks, reducing manual intervention significantly.",
    impact: "Significantly reduced manual intervention in analytics delivery",
    stack: ["Apache Airflow", "dbt", "Snowflake", "Cosmos", "Astro CLI", "Docker", "Python"],
    github: "https://github.com/Ratan39/dbt-snowflake-airflow",
    live: null,
    featured: false,
  },
];

export const visualizations = {
  tableau: [
    {
      title: "London Bus Safety 2015–2018",
      description: "Data visualization of London bus accident incidents across 4 years, analyzing safety trends by route, borough and incident type.",
      embedUrl: "https://public.tableau.com/views/DataVisualizationforlondonaccidents/Dashboard1",
      publicUrl: "https://public.tableau.com/app/profile/ratan.sai.mandela/viz/DataVisualizationforlondonaccidents/Dashboard1",
    },
    {
      title: "2018–19 Arsenal Player Stats",
      description: "Comprehensive performance dashboard for Arsenal FC's 2018–19 season, covering goals, assists, minutes played and match ratings per player.",
      embedUrl: "https://public.tableau.com/views/2018-19Arsenalplayerstats/Dashboard1",
      publicUrl: "https://public.tableau.com/app/profile/ratan.sai.mandela/viz/2018-19Arsenalplayerstats/Dashboard1",
    },
  ],
  powerbi: [
    {
      title: "Supermarket Sales Analysis",
      description: "Multi-chart sales dashboard analyzing product line performance, gender split, city distribution and payment methods across 3 Mexican cities.",
      image: "/images/powerbi/sales.png",
      tools: ["Power BI", "DAX", "Data Modeling"],
    },
    {
      title: "Data Roles Salary Dashboard",
      description: "Comparative salary analysis for Data Engineers vs Data Scientists (2020–2024), segmented by company size, employment type, experience and work model.",
      image: "/images/powerbi/salaries.png",
      tools: ["Power BI", "DAX", "HR Analytics"],
    },
    {
      title: "Chocolate Sales Revenue",
      description: "Global chocolate sales revenue tracker across 6 countries with 177K boxes shipped, featuring country-level breakdown and per-product distribution analysis.",
      image: "/images/powerbi/chocolate.png",
      tools: ["Power BI", "DAX", "Sales Analytics"],
    },
  ],
};

export const certifications = {
  industry: [
    {
      name: "AWS Certified Data Engineer – Associate",
      issuer: "Amazon Web Services",
      level: "Associate",
      issued: "April 9, 2026",
      expires: "April 9, 2029",
      credentialId: "114327bf1e3544ac94eac9519182157b",
      verifyUrl: "https://aws.amazon.com/verification",
      color: "amber",
      icon: "AWS",
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      level: "Foundational",
      issued: "2024",
      expires: null,
      credentialId: null,
      verifyUrl: "https://aws.amazon.com/verification",
      color: "amber",
      icon: "AWS",
    },
  ],
  courses: [
    {
      category: "AI & Machine Learning",
      items: [
        { name: "Large Language Models (LLMs) Concepts", platform: "DataCamp", completed: "Sep 2025", verifyUrl: "https://datacamp.com" },
        { name: "Supervised Learning with scikit-learn", platform: "DataCamp", completed: "Nov 2025", verifyUrl: "https://datacamp.com" },
      ],
    },
    {
      category: "Data Engineering",
      items: [
        { name: "Data Analysis Using PySpark", platform: "Coursera", completed: "Apr 2023", verifyUrl: "https://coursera.org/verify/EUCEKNMH82ZT" },
      ],
    },
    {
      category: "Visualization",
      items: [
        { name: "Creating Dashboards and Storytelling with Tableau", platform: "Coursera · UC Davis", completed: "Jul 2023", verifyUrl: "https://coursera.org/verify/D9KFA5XSC7G3" },
      ],
    },
    {
      category: "Business & Strategy",
      items: [
        { name: "Digital Marketing Specialization (7 courses)", platform: "Coursera · University of Illinois", completed: "Dec 2020", verifyUrl: "https://coursera.org/verify/specialization/D9DK0HXP203N" },
      ],
    },
  ],
};

export const experience = [
  {
    company: "Saint Louis University",
    role: "Research Assistant",
    period: "August 2025 – Present",
    location: "St. Louis, MO",
    type: "Research",
    bullets: [
      "Engineered automated clinical-to-code mapping engine extracting ICD-10 and CPT codes from unstructured clinical notes using NLP, achieving 88% F1-score against labeled Synthea datasets.",
      "Optimized code prediction accuracy by implementing a RAG framework with ChromaDB, providing high-fidelity clinical context to the LLM during inference.",
      "Fine-tuned MedGemma on domain-specific healthcare datasets to enhance understanding of complex medical terminology and ICD-10 structures.",
      "Implemented RLHF to iteratively refine model performance by training on corrections from professional medical coders.",
      "Visualized RCM Performance KPIs using Streamlit to provide actionable insights to end users.",
    ],
    stack: ["Python", "NLP", "RAG", "ChromaDB", "MedGemma", "RLHF", "Streamlit"],
  },
  {
    company: "Teach For India",
    role: "Data Engineer",
    period: "April 2021 – August 2023",
    location: "Hyderabad, India",
    type: "Full-time",
    bullets: [
      "Built an ETL pipeline using AWS Glue to ingest Salesforce Campaign and Fundraiser data, implementing custom Python logic for OAuth-based authentication and incremental data synchronization.",
      "Orchestrated multi-step data workflows via AWS Step Functions, AWS Glue, Redshift COPY operations, and automated retry logic, reducing pipeline failures by 40% and ensuring fundraiser data was always reporting-ready.",
      "Implemented GitHub Actions CI/CD pipeline for Glue scripts with automated unit tests, reducing deployment errors and enabling safe, repeatable releases without manual intervention.",
      "Delivered clean, timely Campaign data to leadership dashboards, directly supporting donor outreach strategies that contributed to a 15% improvement in donor retention and ₹50L in incremental annual donations, outcomes made possible by previously unavailable data visibility.",
    ],
    stack: ["Step Functions", "Redshift", "Glue", "Lambda", "S3", "GitHub Actions", "QuickSight"],
  },
];

export const education = {
  degree: "Master of Science in Computer Science",
  school: "Saint Louis University",
  location: "St. Louis, MO",
  period: "January 2024 – December 2025",
};
