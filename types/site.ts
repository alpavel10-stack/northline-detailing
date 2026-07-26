export type ImageAsset = {
  src: string;
  alt: string;
  position?: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  image: ImageAsset;
};

export type Project = {
  model: string;
  task: string;
  work: string[];
  duration: string;
  result: string;
  image: ImageAsset;
  comparison?: {
    before: string;
    after: string;
  };
};

export type Review = {
  name: string;
  car: string;
  text: string;
};

export type ProofItem = {
  label: string;
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};
