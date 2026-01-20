# Contributing to Polywhale Detector

Thank you for your interest in contributing to Polywhale Detector! This document provides guidelines and instructions for contributing.

## Code of Conduct

Be respectful, inclusive, and professional in all interactions.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/Polywhale-Detector.git`
3. Create a feature branch: `git checkout -b feature/your-feature-name`
4. Install dependencies: `npm install`
5. Start development: `npm run dev`

## Development Workflow

### Before You Start

1. Check existing issues and pull requests
2. Create an issue for your feature or bug fix
3. Discuss your approach in the issue

### Making Changes

1. Follow the existing code style
2. Write clear, descriptive commit messages
3. Add tests for new functionality
4. Update documentation as needed

### Code Style

- Use TypeScript for type safety
- Follow ESLint configuration
- Use Tailwind CSS v4 for styling
- Keep components small and focused
- Use props-based components (no direct data imports)

### Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run linting
npm run lint
```

### Commit Messages

Use clear, descriptive commit messages:

```
feat: Add whale detection for large trades
fix: Correct pattern matching algorithm
docs: Update API documentation
test: Add tests for detection engine
```

## Pull Request Process

1. Update documentation if needed
2. Add tests for new features
3. Ensure all tests pass: `npm test`
4. Ensure linting passes: `npm run lint`
5. Create a descriptive pull request
6. Link related issues
7. Wait for review and feedback

## Project Structure

- `product/` - Design OS specifications (read-only during implementation)
- `app/` - Next.js application
  - `api/` - API routes
  - `components/` - React components
  - `hooks/` - Custom hooks
- `lib/` - Business logic
- `public/` - Static assets

## Development Sections

### 1. Core Detection Engine
- Location: `app/api/detect`, `lib/whale-detector.js`
- Spec: `product/sections/core-detection/spec.md`
- Types: `product/sections/core-detection/types.ts`

### 2. Pattern Analysis
- Location: `app/api/patterns`, `lib/pattern-analyzer.js`
- Spec: `product/sections/pattern-analysis/spec.md`
- Types: `product/sections/pattern-analysis/types.ts`

### 3. AI Analysis & Recommendations
- Location: `app/api/analyze`, `lib/llm-agent.js`
- Spec: `product/sections/ai-analysis/spec.md`
- Types: `product/sections/ai-analysis/types.ts`

### 4. User Dashboard
- Location: `app/components/Dashboard`, `app/page.js`
- Spec: `product/sections/dashboard/spec.md`
- Types: `product/sections/dashboard/types.ts`

## API Development

When adding new API endpoints:

1. Create route in `app/api/[endpoint]/route.js`
2. Follow REST conventions
3. Include error handling
4. Add request/response validation
5. Document in `API.md`
6. Add tests

Example:

```javascript
// app/api/detect/route.js
export async function POST(request) {
  try {
    const data = await request.json();
    // Validate data
    // Process request
    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
```

## Component Development

When creating React components:

1. Use TypeScript
2. Accept data via props
3. Use Tailwind CSS v4
4. Support light/dark mode
5. Be mobile responsive
6. Add JSDoc comments

Example:

```typescript
interface WhaleCardProps {
  whale: Whale;
  onSelect?: (id: string) => void;
}

export function WhaleCard({ whale, onSelect }: WhaleCardProps) {
  return (
    <div className="p-4 border border-stone-200 dark:border-stone-800 rounded">
      <h3 className="font-semibold text-stone-900 dark:text-stone-100">
        {whale.name}
      </h3>
      <p className="text-sm text-stone-600 dark:text-stone-400">
        Volume: ${whale.totalVolume.toLocaleString()}
      </p>
    </div>
  );
}
```

## Documentation

When adding features:

1. Update relevant spec files
2. Update API.md for new endpoints
3. Update README.md if needed
4. Add code comments for complex logic
5. Update GETTING_STARTED.md if setup changes

## Integration Guidelines

### Polymarket API
- Use official CLOB API
- Handle rate limiting
- Cache responses when appropriate
- Document API calls

### Acontext Integration
- Use provided client library
- Store all analyses automatically
- Record trade outcomes
- Search patterns before analyzing

### LLM Integration
- Support multiple providers (OpenAI, Anthropic)
- Handle API errors gracefully
- Cache responses when possible
- Monitor token usage

### Web Search
- Use Brave Search API
- Limit results to relevant sources
- Cache search results
- Handle API failures

## Performance Considerations

- Keep API responses under 1 second
- Optimize database queries
- Use caching strategically
- Monitor bundle size
- Profile regularly

## Security

- Never commit secrets or API keys
- Use environment variables
- Validate all inputs
- Sanitize outputs
- Follow OWASP guidelines

## Reporting Issues

When reporting bugs:

1. Use clear, descriptive titles
2. Include steps to reproduce
3. Provide expected vs actual behavior
4. Include environment details
5. Add screenshots if relevant

## Feature Requests

When requesting features:

1. Describe the use case
2. Explain the benefit
3. Provide examples
4. Consider implementation complexity

## Questions?

- Check existing documentation
- Review similar implementations
- Ask in issues or discussions
- Contact maintainers

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Polywhale Detector!
