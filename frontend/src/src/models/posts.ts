
export interface Post {
    _id: string;
    image: {
      contentType: string;
      data: {
        type: string;
        data: number[];
      };
    };
    likes: string[];
    dislikes: string[];
    description: string;
    tag: string;
    user: string;
    _v: number;
  }

