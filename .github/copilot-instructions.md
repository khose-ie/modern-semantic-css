---
name: 'Common Github Copilot Instructions'
description: 'General instructions for Github Copilot across all file types.'
applyTo: '**'
---

# Common

- Always use English in the code comments and documentation, even if the user is using a different language in the chat. This ensures that the code is universally understandable and maintainable by developers worldwide.

## Commit Message Convention

- When asked to generate a commit message, always produce the message in English regardless of the conversation language.
- Provide a concise title (<=50 characters) and an optional body that explains the change. Ask clarifying questions only if essential details are missing.
- The title of the commit message should start with an uppercase letter and end with a period (a complete sentence).

## Info for this repository

- This is the duplication of the Semantic UI repository, a popular framework for building responsive and themable user interfaces. But it is old and stopped development, so this fork aims to maintain and update the framework to keep it usable and relevant for modern web development.
- Semantic UI used some old technologies like less, jQuery, gulp and other older technologies for styling and interactivity. This fork aims to replace them by scss, without JavaScript, and modern build tools to improve performance, maintainability, and developer experience, and add the dark mode.
- Toolkit use vite, npm.

## Principles

- Follow modern web development practices and standards.
- Prioritize performance, maintainability, and developer experience.
- Ensure compatibility with modern browsers and devices.
- Maintain the theming and responsiveness capabilities of the original Semantic UI framework.
- Embrace progressive enhancement, ensuring that the core functionality works for all users, while advanced features are available for modern browsers.
- Encourage code readability and consistency, following established coding standards and best practices.
