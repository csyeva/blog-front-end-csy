/**
 * Created by chenshiying on 17/9/28.
 */
import * as request from '../utils/request';
import apiPath from './apiPath';

const findForPageByTopic = (data) => request.post(apiPath.findForPageByTopic, data);

export {findForPageByTopic};



