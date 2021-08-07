export class User {
    id: number;
    name: string;
    
  }

  export class UserPost{
      userId: number;
      id: number;
      title: string;
      body: string;
      commentData: any;
  }

  export class PostComment{
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }