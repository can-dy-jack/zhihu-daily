/**
 * api 接口函数封装
 */
import ajax from "./ajax";

export function getLatestNews() {
    return ajax('/news/latest');
}

export function getPostInfo(id) {
    return ajax({
        url: `/news/${id}`,
        method: 'get'
    })
}
