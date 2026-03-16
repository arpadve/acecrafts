export interface Image {
  source: string;
  isPortrait: boolean;
}

export type Thumbnail = {
  imageSource: string;
  imageId: string;
  isPortrait: boolean;
};
export type ImageAlbum = {
  thumbnail: Image;
  images: Image[];
};
export type ImageAlbumCollection = {
  title: string;
  albums: ImageAlbum[];
};
