import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  const statusCode = err.status || 500;
  const errorResponse = {
    message: err.message || 'Something went wrong',
    details: err.details || null,
  };
  res.status(statusCode).json(errorResponse);
};

export default errorHandler;
