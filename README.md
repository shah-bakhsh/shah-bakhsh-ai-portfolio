# Shah Bakhsh | AI Engineer & Agentic AI Developer

<p align="center">
  <strong>Building intelligent systems that turn complex workflows into meaningful outcomes.</strong>
  <br />
  Agentic AI · LLM Applications · RAG · Applied Machine Learning · Low-Resource NLP
</p>

<p align="center">
  <a href="https://shah-bakhsh.github.io/shah-bakhsh-ai-portfolio/">Live Portfolio</a>
  ·
  <a href="https://www.linkedin.com/in/shah-bakhsh/">LinkedIn</a>
  ·
  <a href="https://github.com/shah-bakhsh">GitHub</a>
  ·
  <a href="https://huggingface.co/shah-bakhsh">Hugging Face</a>
</p>

---

## Overview

This repository contains the source code for my personal portfolio website. It presents my work across AI engineering, agentic systems, large language models, retrieval-augmented generation, and language technology.

The portfolio is designed as a focused, editorial-style digital profile with a dark visual system, warm gold accents, responsive layouts, and lightweight interactions.

**Portfolio:** [shah-bakhsh.github.io/shah-bakhsh-ai-portfolio](https://shah-bakhsh.github.io/shah-bakhsh-ai-portfolio/)

## What you'll find

- **About:** My engineering approach and areas of interest.
- **Expertise:** Agentic AI, LLMs and RAG, applied machine learning, and software engineering.
- **Selected work:** Projects spanning AI products, language technology, and decision-support concepts.
- **Research:** A focus on practical AI research and technology for underserved languages.
- **Contact:** Links to connect and explore my work.

## Featured projects

| Project | Focus | Description |
| --- | --- | --- |
| **SHAH.OS** | AI engineering portfolio system | An interactive space for projects, research, capabilities, and experiments. |
| **BalPOS & BalBERT** | Low-resource NLP | Balochi language modeling, tokenization, and part-of-speech tagging research. |
| **BalOCR** | OCR and computer vision | An initiative for printed Balochi Arabic-script text and dataset-driven model development. |
| **PathPilot AI** | AI product | Career guidance and skills-navigation concept powered by AI. |
| **CrisisPilot AI** | Decision support | An AI-assisted concept for turning early-warning signals into structured insights and response workflows. |

Project status and implementation details may evolve as development continues.

## Technology

The portfolio itself uses:

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts
- GitHub Actions
- GitHub Pages

My broader engineering toolkit includes Python, PyTorch, TensorFlow, scikit-learn, Hugging Face Transformers, LangGraph, CrewAI, AutoGen, FastAPI, SQL, Docker, and AWS.

## Repository structure

```text
.
├── .github/
│   └── workflows/
│       └── pages.yml     # GitHub Pages deployment workflow
├── index.html            # Portfolio content and page structure
├── theme.css             # Layout, responsive styling, and visual system
├── main.js               # Navigation and interface interactions
├── favicon.svg           # Browser tab icon
├── robots.txt            # Search engine crawling guidance
└── README.md
```

## Run locally

No build step or package installation is required.

1. Clone the repository:

   ```bash
   git clone https://github.com/shah-bakhsh/shah-bakhsh-ai-portfolio.git
   cd shah-bakhsh-ai-portfolio
   ```

2. Open `index.html` in your browser.

   For a local development server, you can use Python:

   ```bash
   python -m http.server 8000
   ```

3. Visit [http://localhost:8000](http://localhost:8000).

## Deployment with GitHub Pages

This repository includes a GitHub Actions workflow at `.github/workflows/pages.yml`. It publishes the static site whenever changes are pushed to the `main` branch.

To configure deployment:

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Open the **Actions** tab and check the **Deploy portfolio to GitHub Pages** workflow.
4. Once deployment succeeds, the site is available at:

   **https://shah-bakhsh.github.io/shah-bakhsh-ai-portfolio/**

The workflow uses the official GitHub Pages actions to configure Pages, upload the site artifact, and deploy it.

> **Visibility note:** A GitHub Pages website is publicly accessible when published. Keeping the source repository private while publishing a public site depends on your GitHub plan. On plans that do not support Pages from private repositories, the source repository must be made public or the account plan upgraded.

## Customization

- Update page copy and project details in `index.html`.
- Adjust colors, typography, spacing, and responsive behavior in `theme.css`.
- Modify navigation and interface interactions in `main.js`.
- Keep asset paths relative (for example, `./theme.css`) so the site works from the GitHub Pages project subpath.

## Connect

- **LinkedIn:** [linkedin.com/in/shah-bakhsh](https://www.linkedin.com/in/shah-bakhsh/)
- **GitHub:** [github.com/shah-bakhsh](https://github.com/shah-bakhsh)
- **Hugging Face:** [huggingface.co/shah-bakhsh](https://huggingface.co/shah-bakhsh)
- **Portfolio:** [shah-bakhsh.github.io/shah-bakhsh-ai-portfolio](https://shah-bakhsh.github.io/shah-bakhsh-ai-portfolio/)

---

<p align="center">
  <sub>Designed and built by Shah Bakhsh · AI Engineering with purpose.</sub>
</p>
