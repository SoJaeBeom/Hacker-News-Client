import { NewsDetail, NewsFeed } from '../types';

export class Api {
  ajax: XMLHttpRequest;
  url: string;

  constructor(url: string) {
    this.ajax = new XMLHttpRequest();
    this.url = url;
  }

  getRequest<AjaxResponse>(cb: (data: AjaxResponse) => void): void {
    fetch(this.url)
      .then(response => response.json())
      .then(cb)
      .catch(() => {
        console.error('데이터를 불러오지 못했습니다.');
      })
  }
}

export class NewsFeedApi extends Api {
  getData(cb: (data: NewsFeed[]) => void): void {
    return this.getRequest<NewsFeed[]>(cb);
  }
}

export class NewsDetailApi extends Api {
  getData(cb: (data: NewsDetail) => void): void {
    return this.getRequest<NewsDetail>(cb);
  }
}