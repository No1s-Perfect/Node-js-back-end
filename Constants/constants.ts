import { MongoClientOptions } from "mongodb";
export const MONGO_URL: string =
  "mongodb+srv://root:root@cluster0.q1yh2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
export const MONGO_OBJ = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as MongoClientOptions;
interface hasHref {
  has: boolean;
  href?: string;
}
export interface PropsData {
  title: string;
  src: string;
  text: string;
  alt: string;
  paredifa: boolean;
  href: hasHref;
  _id:string
}

export interface about {
  name: string;
  u: string;
  degree: string;
  city: string;
  parla: string;
}