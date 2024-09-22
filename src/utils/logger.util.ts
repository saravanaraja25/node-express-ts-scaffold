import winston from 'winston';

const transports = [];
if (process.env.NODE_ENV !== 'production') {
  transports.push(new winston.transports.Console());
} else {
  transports.push(new winston.transports.File({ filename: 'combined.log' }));
}

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
  defaultMeta: { service: 'bizx-billing-service' },
  transports,
});

export default logger;
