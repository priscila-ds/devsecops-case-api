# DevSecOps Case API

A secure API demonstrating DevSecOps best practices including security scanning, monitoring, and CI/CD integration.

## Features

- Express.js REST API
- Security hardening with Helmet.js
- Rate limiting
- OpenTelemetry observability
- Automated security scanning (ZAP, Trivy)
- GitHub Actions CI/CD pipeline
- Docker containerization

## Prerequisites

- Node.js 18+
- Docker & Docker Compose
- Git

## Installation

```bash
npm install
```

## Running Locally

```bash
npm start
```

Or with hot-reload:

```bash
npm run dev
```

## Running with Docker

```bash
docker-compose up
```

## Testing

Run all tests:
```bash
npm test
```

Run unit tests only:
```bash
npm run test:unit
```

Run integration tests only:
```bash
npm run test:integration
```

## Security Scanning

Run OWASP ZAP:
```bash
npm run security:zap
```

Run Trivy:
```bash
npm run security:trivy
```

Audit dependencies:
```bash
npm run security:audit
```

## Monitoring

- **Prometheus**: http://localhost:9090
- **Grafana**: http://localhost:3001 (admin/admin)
- **Jaeger**: http://localhost:16686

## CI/CD

The GitHub Actions workflow (`.github/workflows/devsecops.yml`) automatically:
- Runs tests on every push
- Performs security scanning
- Builds Docker images
- Deploys on main branch

## Project Structure

```
devsecops-case-api/
├── src/
│   ├── app.js              # Main application entry
│   ├── routes/             # API routes
│   ├── controllers/        # Business logic
│   ├── services/           # External services
│   └── middlewares/        # Custom middleware
├── tests/
│   ├── unit/               # Unit tests
│   └── integration/        # Integration tests
├── security/
│   ├── zap/                # ZAP reports
│   └── trivy/              # Trivy reports
├── monitoring/
│   ├── otel.js             # OpenTelemetry config
│   └── grafana/            # Grafana dashboards
├── .github/
│   └── workflows/
│       └── devsecops.yml   # CI/CD pipeline
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

## License

ISC
