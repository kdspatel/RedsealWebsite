# Unverified account cleanup

- New unverified accounts receive an `unverifiedDeleteAt` deadline exactly 24 hours after signup.
- MongoDB uses a TTL index to remove those records automatically. TTL deletion normally occurs shortly after the deadline, based on MongoDB's background TTL monitor.
- Server startup backfills the deadline for older unverified records using `createdAt + 24 hours` and immediately removes any that are already expired.
- The hourly application cleanup remains as a fallback.
- Resending verification does not extend the original 24-hour signup deadline.
- Successful verification clears `verificationToken`, `verificationTokenExpires`, and `unverifiedDeleteAt`.
- Existing verified-only login and protected-content rules remain unchanged.
