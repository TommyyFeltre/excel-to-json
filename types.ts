import { PathLike } from "fs"; 

export type Item = {
  key: string;
  en: string;
  de: string;
  es: string;
  fr: string;
  it: string;
}

export type FilePath = 'file_path' | PathLike; 
export type Language = 'it'| 'en' | 'de' | 'fr' | 'es' | 'all';
