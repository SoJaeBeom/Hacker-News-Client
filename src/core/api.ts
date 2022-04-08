import { NewsDetail, NewsFeed } from '../types';

export class Api {
  ajax: XMLHttpRequest;
  url: string;

  constructor(url: string) {
    this.ajax = new XMLHttpRequest();
    this.url = url;
  }

  async request<AjaxResponse>(): Promise<AjaxResponse> {
    const response = await fetch(this.url);
    return await response.json() as AjaxResponse;
  }
}

export class NewsFeedApi extends Api {
  async getData(): Promise<NewsFeed[]> {
    return await this.request<NewsFeed[]>();
  }
}

export class NewsDetailApi extends Api {
  async getData(): Promise<NewsDetail> {
    return await this.request<NewsDetail>();
  }
}