interface AlternativeSlugs {
  en: string;
  es?: string;
  ja?: string;
  fr?: string;
  it?: string;
  [key: string]: string | undefined; 
}

interface Links {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3?: string;
}

interface User {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name?: string;
}

interface Tag {
  title: string;
}

interface TopicSubmissions {
  [key: string]: object;
}

export interface Result {
  id: string;
  slug: string;
  alternative_slugs: AlternativeSlugs;
  created_at: string;
  updated_at: string;
  promoted_at: string | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string | null;
  alt_description: string;
  breadcrumbs: string[];
  urls: Urls;
  links: Links;
  likes: number;
  liked_by_user: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  current_user_collections: any[];
  sponsorship: null;
  topic_submissions: TopicSubmissions;
  asset_type: string;
  user: User;
  tags: Tag[];
}

export interface ApiResponse {
  total: number;
  total_pages: number;
  results: Result[];
}