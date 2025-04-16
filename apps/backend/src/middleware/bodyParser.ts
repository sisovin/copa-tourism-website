import bodyParser from 'body-parser';
import { Request, Response, NextFunction } from 'express';

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

export { jsonParser, urlencodedParser };
