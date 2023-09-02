/***
 * fetch 封装
 */
const apiRootUrl = "https://news-at.zhihu.com/api/4";

export default function ajax(option) {
  if (typeof option == "string") {
    option = {
      url: option,
    };
  }

  const params = option.params;
  if (params) {
    let paramsArray = [];
    Object.keys(params).forEach((key) =>
      paramsArray.push(key + "=" + params[key])
    );
    if (option.url.search(/\?/) === -1) {
      option.url += "?" + paramsArray.join("&");
    } else {
      option.url += "&" + paramsArray.join("&");
    }
  }

  return fetch(
    apiRootUrl + option.url,
    {
      method: option.method || "GET",
      headers: option.headers || {},
      mode: option.mode || "cors",
      cache: option.cache || "default",
      body: option.data || null,
    }
  )
  .then((res) => res.json())
  .catch(err => console.warn(err));
}
