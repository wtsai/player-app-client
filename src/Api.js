import config from './ignore/config';

class Api {
  getChannel() {
    return fetch(config.api.channel).then(
      res => res.json()
    );
  }

  getChannelByLimit(skipNum, imitNum) {
    return fetch(config.api.channel+`/${skipNum}/${imitNum}`).then(
      res => res.json()
    );
  }

  getVideo(id) {
    return fetch(config.api.video+`/${id}`).then(
      res => res.json()
    );
  }
}

export default Api;
