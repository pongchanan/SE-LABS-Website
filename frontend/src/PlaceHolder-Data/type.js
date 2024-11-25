//get >> user/news/thumbnail?amount=3&laboratory-id=123&research-id=123
const loadMoreNews = [
  {
    News: {
      NID,
      title,
      body,
    },
    Laboratory: {
      LID,
      title,
    },
  },
  {
    News: {
      NID,
      title,
      body,
    },
    Research: {
      RID,
      title,
    },
  },
  {
    News: {
      NID,
      title,
      body,
    },
  },
];

//get >> user/news/info?news-id=123
const generalNewsInfo = {
  News: {
    NID,
    title,
    body,
    date,
  },
};
const labNewsInfo = {
  News: {
    NID,
    title,
    body,
    date,
  },
  Laboratory: {
    LID,
    title,
  },
};
const researchNewsInfo = {
  News: {
    NID,
    title,
    body,
    date,
  },
  "Research:": {
    RID,
    title,
  },
};

//get >> user/news/related-news?news-id=123
const generalRelatedNews = [
  {
    News: {
      NID,
      title,
      body,
      date,
    },
  },
  {
    News: {
      NID,
      title,
      body,
      date,
    },
  },
];
const labRelatedNews = [
  {
    News: {
      NID,
      title,
      body,
      date,
    },
    Laboratory: {
      LID,
      title,
    },
  },
];
const researchRelatedNews = [
  {
    News: {
      NID,
      title,
      body,
    },
    Laboratory: {
      LID,
      title,
    },
    Research: {
      RID,
      title,
    },
  },
];

//get >> user/news/image?news-id=123
const newsImg = {
  image: {
    NID,
    image,
  },
};
