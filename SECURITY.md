# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in Lucyn, please report it privately.

**Do not** open a public GitHub issue for security vulnerabilities.

Open a private security advisory via the GitHub Security tab on this repository.

We will respond within 48 hours and aim to patch critical vulnerabilities within 7 days.

## Scope

- Authentication bypass (Clerk integration)
- SQL injection / Prisma query injection
- API route authorization failures (missing `orgId` scoping)
- Discord bot DM spoofing or privacy leaks
- Webhook signature bypass (GitHub HMAC validation)
- Cross-tenant data access

## Out of scope

- Denial of service attacks
- Social engineering
- Issues in third-party dependencies (report upstream)

## Privacy

Lucyn handles developer activity data. Any vulnerability that could expose individual developer data to unauthorized parties is treated as critical.
