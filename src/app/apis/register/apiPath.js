/**
 * Created by chenshiying on 17/9/28.
 */
import {topicServer} from '../utils/apiServer';
import apiRelativePath from './apiRelativePath';

const apiPath = {
    addUser: topicServer + apiRelativePath.addUser,
};

export default apiPath;
