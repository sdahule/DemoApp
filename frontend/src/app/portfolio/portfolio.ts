import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  portfolioData = {
    name: 'Swapnil Dahule',
    title: 'Assistant Vice President / Lead Full-Stack Engineer / AI Evangelist',
    location: 'Pune, MH',
    phone: '+91-7276449998',
    email: 'sdahule92@gmail.com',
    linkedin: 'linkedin.com/in/sdahule',
    summary: 'Software Engineer with 10+ years of experience designing, architecting, and delivering secure, scalable enterprise applications in the financial domain. Proven ability to lead full-stack and backend teams through all phases of the SDLC, integrating security into every stage. Adept at vulnerability remediation, performance optimization, and technical strategy to deliver compliant, high-quality software solutions that meet SLAs and business goals. Accelerating AI Adoption into development workflow to increase overall productivity.',
    skills: [
      {
        category: 'Programming & Frameworks',
        items: ['Java', 'Spring Boot', 'Spring Security', 'Spring Cloud', 'Spring Data JDBC', 'Spring MVC', 'API Gateway', 'REST APIs', 'Angular', 'Microservices', 'JUnit', 'JWT']
      },
      {
        category: 'Cloud & Containerization',
        items: ['Kubernetes', 'OpenShift', 'Helm', 'Docker', 'Hybrid Cloud Deployment', 'AWS']
      },
      {
        category: 'Database & Storage',
        items: ['Oracle', 'SQL', 'Stored Procedures', 'MongoDB', 'NoSQL']
      },
      {
        category: 'Security & Compliance',
        items: ['Secure Coding', 'Vulnerability Remediation', 'Static & Dynamic Scans', 'Checkmarx', 'SonarQube']
      },
      {
        category: 'DevOps & CI/CD',
        items: ['Maven', 'Gradle', 'Git', 'Jenkins', 'AppDynamics', 'Tekton', 'Harness']
      },
      {
        category: 'Architecture & Design',
        items: ['Solution Architecture', 'SDLC Governance', 'API Design (OpenAPI/Swagger)', 'System Design', 'Technical Documentation']
      },
      {
        category: 'Testing & Quality Assurance',
        items: ['Unit Testing', 'Integration Testing', 'Performance Testing', 'Code Coverage Analysis']
      },
      {
        category: 'Integration & Messaging',
        items: ['Tibco BusinessWorks', 'Kafka', 'EMS/JMS']
      },
      {
        category: 'AI & Productivity Tools',
        items: ['GitHub Copilot', 'ChatGPT', 'AI-driven Testing & Automation', 'Claude', 'Devin AI', 'Gemini Pro']
      },
      {
        category: 'Project & Process Excellence',
        items: ['Agile/Scrum', 'Incident Management', 'Root Cause Analysis', 'Continuous Improvement', 'Mentoring', 'Stakeholder Collaboration']
      }
    ],
    experience: [
      {
        company: 'Citigroup',
        role: 'Officer → Senior Officer → Assistant Vice President',
        duration: 'Aug 2019 – Present',
        progression: 'Promoted through multiple leadership roles from Officer to Assistant Vice President for consistent excellence in software delivery, architecture, and engineering leadership.',
        achievements: [
          'Architected and led end-to-end development of enterprise-grade platforms, reducing production issue turnaround time by 90% and improving operational resilience.',
          'Developed and maintained secure, high-quality Java code, implementing secure coding practices and vulnerability remediation in compliance with audit and regulatory standards.',
          'Collaborated with AppSec teams to identify and remediate vulnerabilities identified through static and dynamic scans, Checkmarx, and SonarQube, ensuring secure SDLC integration.',
          'Leveraged GitHub Copilot to accelerate development and improve CVM remediation workflows.',
          'Conducted architecture, design, and code reviews across SDLC phases, ensuring adherence to Industry-standard quality assurance and compliance processes.',
          'Performed code coverage and quality analysis using SonarQube and JUnit, improving maintainability and performance.',
          'Mentored and coached engineers in secure development, coding best practices, and architectural principles.',
          'Optimized SQL queries and stored procedures, For Database maintenance automation.',
          'Designed UI from scratch using Angular framework and microfrontend architecture for enterprise applications.',
          'Led production of incident management, performing root cause analysis, and implementing preventive measures to avoid recurrence.',
          'Co-architected and migrated the CitiConnect-Swift application to a hybrid cloud environment using Kubernetes, enhancing scalability and performance.',
          'Developed testing and validation frameworks for integration and performance testing, improving defect detection efficiency.',
          'Ensured compliance with India Data Localization and other regulatory standards by collaborating with audit and security teams.',
          'Established coding best practices and enforced code review and coverage metrics using SonarQube.',
          'Enhanced application security by fixing vulnerabilities identified in ethical hacking assessments and penetration testing.',
          'Implemented Tibco integration solutions for high-value payment processing via the SWIFT network.',
          'Automated database maintenance and archival, improving efficiency and reducing manual intervention.',
          'Contributed to migration of legacy payment systems to microservice architecture, enhancing scalability and reliability.'
        ]
      },
      {
        company: 'Birlasoft Technologies',
        role: 'Senior Software Engineer',
        duration: 'Apr 2018 – Aug 2019',
        achievements: [
          'Designed and developed KRENG, a generic ERP data migration tool with modular plug-in capability.',
          'Built front-end components using Angular integrated with Spring Boot backends.',
          'Developed a scheduler framework automating SFTP transfers, script execution, and Oracle Cloud data extraction.',
          'Partnered with architects to evaluate and enhance software performance.'
        ]
      },
      {
        company: 'Newgen Software',
        role: 'Senior Software Engineer',
        duration: 'Aug 2017 – Mar 2018',
        achievements: [
          'Developed Java components for Newgen’s core products OmniFlow and OmniDocs.',
          'Conducted code reviews, estimations, and performance testing, ensuring adherence to software standards.',
          'Supported team collaboration and agile delivery to meet client deadlines.'
        ]
      },
      {
        company: 'DXC Technology (formerly Hewlett Packard)',
        role: 'Software Developer',
        duration: 'Jan 2015 – Jul 2017',
        achievements: [
          'Contributed to enterprise web development projects under Agile/Scrum methodology.',
          'Implemented service layer logic and integrated REST APIs using Java and Spring.',
          'Supported defect analysis, testing, and deployment to ensure timely and quality delivery.'
        ]
      }
    ],
    education: {
      degree: 'B.Tech in Computer Science and Engineering',
      university: 'Maharashtra Institute of Technology, Pune',
      duration: 'Aug 2010 – Jul 2014'
    },
    leadership: [
      'Defined and enforced SDLC documentation templates, QA/QC standards, and compliance checklists for project teams.',
      'Partnered with project managers to define technical scope, estimates, and delivery plans.',
      'Drove technology roadmaps and led brown-bag sessions on secure coding, vulnerability remediation, and architectural best practices.'
    ]
  };
}
