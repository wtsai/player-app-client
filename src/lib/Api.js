import config from '../ignore/config';

class Api {
  getDynamicChannels(skip, total) {
    return fetch(config.api.higgstv.channels+`/${skip}/${total}`).then(
      res => res.json()
    );
  }

  getDynamicVideo(id) {
    return fetch(config.api.higgstv.channel+`/${id}`).then(
      res => res.json()
    );
  }

  getEC2Channels(skip, total) {
    return fetch(config.api.ec2.channels+`/${skip}/${total}`).then(
      res => res.json()
    );
  }

  getEC2Video(id) {
    return fetch(config.api.ec2.channel+`/${id}`).then(
      res => res.json()
    );
  }

  getLocalChannels(skip, total) {
    return fetch(config.api.local.channels+`/${skip}/${total}`).then(
      res => res.json()
    );
  }

  getLocalVideo(id) {
    return fetch(config.api.local.channel+`/${id}`).then(
      res => res.json()
    );
  }
}

export default Api;
