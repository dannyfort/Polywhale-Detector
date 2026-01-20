# Polywhale Detector - Deployment Guide

## Overview

This guide covers deploying Polywhale Detector to production environments.

## Pre-Deployment Checklist

- [ ] All tests passing: `npm test`
- [ ] Linting passes: `npm run lint`
- [ ] Environment variables configured
- [ ] Database migrations completed
- [ ] API keys validated
- [ ] Documentation updated

## Environment Setup

### Production Environment Variables

```bash
# Polymarket API
NEXT_PUBLIC_POLYMARKET_API_URL=https://clob.polymarket.com

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_production_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_production_service_role_key

# Acontext
ACONTEXT_API_KEY=your_production_acontext_key
NEXT_PUBLIC_ACONTEXT_ENABLED=true

# LLM Providers
OPENAI_API_KEY=your_production_openai_key
ANTHROPIC_API_KEY=your_production_anthropic_key

# Web Search
BRAVE_SEARCH_API_KEY=your_production_brave_key

# Application
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest option for Next.js applications.

#### Steps:

1. **Connect Repository**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Select `Polywhale-Detector`

2. **Configure Environment**
   - Add all environment variables from `.env.local`
   - Set `NODE_ENV=production`

3. **Deploy**
   - Vercel automatically builds and deploys on push to main
   - Monitor deployment at https://vercel.com/dashboard

4. **Custom Domain**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Configure DNS records

#### Benefits:
- Automatic deployments on git push
- Built-in CI/CD
- Edge functions support
- Automatic HTTPS
- Easy rollbacks

### Option 2: Docker

For self-hosted or cloud deployments.

#### Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Build application
COPY . .
RUN npm run build

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "start"]
```

#### Build and Run

```bash
# Build image
docker build -t polywhale-detector:latest .

# Run container
docker run -p 3000:3000 \
  -e NODE_ENV=production \
  -e NEXT_PUBLIC_POLYMARKET_API_URL=https://clob.polymarket.com \
  -e NEXT_PUBLIC_SUPABASE_URL=your_url \
  -e NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key \
  polywhale-detector:latest
```

#### Docker Compose

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      NODE_ENV: production
      NEXT_PUBLIC_POLYMARKET_API_URL: https://clob.polymarket.com
      NEXT_PUBLIC_SUPABASE_URL: ${SUPABASE_URL}
      NEXT_PUBLIC_SUPABASE_ANON_KEY: ${SUPABASE_ANON_KEY}
      SUPABASE_SERVICE_ROLE_KEY: ${SUPABASE_SERVICE_ROLE_KEY}
      ACONTEXT_API_KEY: ${ACONTEXT_API_KEY}
      OPENAI_API_KEY: ${OPENAI_API_KEY}
      BRAVE_SEARCH_API_KEY: ${BRAVE_SEARCH_API_KEY}
    restart: unless-stopped
```

### Option 3: AWS

For enterprise deployments.

#### Using AWS Amplify

1. Connect GitHub repository
2. Configure build settings
3. Set environment variables
4. Deploy

#### Using ECS + Fargate

1. Create ECR repository
2. Push Docker image
3. Create ECS task definition
4. Create ECS service
5. Configure load balancer

### Option 4: Google Cloud Run

For serverless deployment.

```bash
# Build and push image
gcloud builds submit --tag gcr.io/PROJECT_ID/polywhale-detector

# Deploy to Cloud Run
gcloud run deploy polywhale-detector \
  --image gcr.io/PROJECT_ID/polywhale-detector \
  --platform managed \
  --region us-central1 \
  --set-env-vars NODE_ENV=production,NEXT_PUBLIC_POLYMARKET_API_URL=https://clob.polymarket.com
```

## Database Setup

### Supabase Migration

1. Create Supabase project
2. Run migrations:

```bash
npm run db:migrate
```

3. Verify tables created:
   - trades
   - whales
   - patterns
   - analyses
   - trade_outcomes

### Backup Strategy

- Enable automated backups in Supabase
- Backup frequency: Daily
- Retention: 30 days
- Test restore procedures monthly

## Monitoring & Logging

### Application Monitoring

- Use Vercel Analytics for performance
- Monitor API response times
- Track error rates
- Monitor database queries

### Logging

```javascript
// Use structured logging
console.log(JSON.stringify({
  timestamp: new Date().toISOString(),
  level: 'info',
  message: 'Whale detected',
  data: { whaleId, amount }
}));
```

### Error Tracking

- Set up Sentry for error tracking
- Configure alerts for critical errors
- Monitor error trends

## Performance Optimization

### Build Optimization

```bash
# Analyze bundle size
npm run build -- --analyze

# Optimize images
npm install next-image-optimization
```

### Caching Strategy

- Cache API responses (Redis)
- Cache static assets (CDN)
- Cache database queries (1-5 minutes)

### Database Optimization

- Add indexes on frequently queried columns
- Optimize queries with EXPLAIN ANALYZE
- Monitor slow queries

## Security

### SSL/TLS

- Enable HTTPS (automatic with Vercel)
- Use strong cipher suites
- Enable HSTS headers

### API Security

- Rate limiting: 100 requests/minute per IP
- Input validation on all endpoints
- CORS configuration
- API key rotation

### Secrets Management

- Never commit secrets
- Use environment variables
- Rotate API keys regularly
- Use secret management service (AWS Secrets Manager, etc.)

## Scaling

### Horizontal Scaling

- Use load balancer
- Deploy multiple instances
- Use auto-scaling groups

### Vertical Scaling

- Increase instance size
- Upgrade database tier
- Increase memory/CPU

### Database Scaling

- Read replicas for read-heavy workloads
- Connection pooling
- Query optimization

## Rollback Procedure

### Vercel Rollback

1. Go to Deployments
2. Select previous deployment
3. Click "Promote to Production"

### Docker Rollback

```bash
# Tag previous image
docker tag polywhale-detector:v1.0.0 polywhale-detector:latest

# Restart container
docker-compose restart
```

## Maintenance

### Regular Tasks

- Monitor logs daily
- Review error reports
- Update dependencies monthly
- Security patches immediately
- Database maintenance weekly

### Update Procedure

1. Test updates in staging
2. Create backup
3. Deploy to production
4. Monitor for errors
5. Rollback if needed

## Disaster Recovery

### Backup Strategy

- Daily automated backups
- Weekly manual backups
- Test restore procedures
- Document recovery steps

### Recovery Procedure

1. Restore database from backup
2. Verify data integrity
3. Restart application
4. Monitor for issues

## Support & Troubleshooting

### Common Issues

**Application won't start**
- Check environment variables
- Review logs
- Verify database connection

**High memory usage**
- Check for memory leaks
- Optimize queries
- Increase instance size

**Slow API responses**
- Check database performance
- Review slow query logs
- Add caching

### Getting Help

- Check logs: `npm run logs`
- Review error tracking (Sentry)
- Check status page
- Contact support

## Deployment Checklist

- [ ] Environment variables configured
- [ ] Database migrations completed
- [ ] SSL/TLS enabled
- [ ] Monitoring configured
- [ ] Backups enabled
- [ ] Error tracking enabled
- [ ] Rate limiting configured
- [ ] API keys rotated
- [ ] Documentation updated
- [ ] Team notified

## Post-Deployment

1. Verify all endpoints working
2. Check monitoring dashboards
3. Review error logs
4. Monitor performance metrics
5. Notify team of deployment

---

**Last Updated**: January 19, 2026
**Version**: 1.0.0
