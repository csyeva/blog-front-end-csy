/**
 * Created by chenshiying on 17/9/28.
 */
import {topicServer} from '../utils/apiServer';
import apiRelativePath from './apiRelativePath';

const apiPath = {
    findForPageByTopic: topicServer + apiRelativePath.findForPageByTopic
};

export default apiPath;
