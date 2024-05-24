type NewsType = {
  hits: HitType[];
};
type HitType = {
  document: ResultDocumentType;
};
type ResultDocumentType = {
  author: string;
  description: string;
  domain: string;
  id: string;
  image?: {
    imageUrl: string[];
    url: string;
  };
  keyword: string;
  logo: string;
  thumbnail: string;
  title: string;
};

type VideosType = {
  videoId: string;
  channel: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnail: string;
  viewCount: string;
  duration: string;
  youtubeLink: string;
};
