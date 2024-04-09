import * as xlsx from 'xlsx';
import { FilePath, Item, Language } from './types';
import * as fs from 'fs';



const translateFile = async (filePath: FilePath, language: Language) => {
  const workBook = xlsx.readFile(filePath);
  const sheet = workBook.SheetNames[0];
  const data = xlsx.utils.sheet_to_json<Item>(workBook.Sheets[sheet], {header: ['key', ...AVAILABLE_LANGUAGE]}); 
  data.splice(0,1);
  const keys = data.map(item => item.key.trim());
  if(language === 'all') {
    AVAILABLE_LANGUAGE.forEach(async lang => {
      const translatedData = data.map(item => item[lang as keyof Item]);
      const translated_file: { [key: string]: string } = {};
      keys.forEach((key, index) => {
        translated_file[key] = translatedData[index];
      })
      const jsonString = JSON.stringify(translated_file, null, 2);
      try {
        await fs.promises.mkdir('./tranlated_files', { recursive: true });
      } catch (err) {
        fs.writeFile(`./tranlated_files/${lang}.json`, jsonString, (err => {
          if (err) {
            console.error('Error writing JSON file:', err);
          } else {
            console.log('JSON file written successfully!');
          }
          })
        );
      }
      fs.writeFile(`./tranlated_files/${lang}.json`, jsonString, (err => {
        if (err) {
          console.error('Error writing JSON file:', err);
        } else {
          console.log('JSON file written successfully!');
        }
        })
      );    
    })
  } else {
    const coutry = data.map(item => item[language]);
    const translated_file: { [key: string]: string }  = {};
    keys.forEach((key, index) => {
      translated_file[key] = coutry[index];
    });  
    const jsonString = JSON.stringify(translated_file, null, 2);
    fs.writeFile(`./tranlated_files/${language}.json`, jsonString, (err => {
      if (err) {
        console.error('Error writing JSON file:', err);
      } else {
        console.log('JSON file written successfully!');
      }
      })
    );
  }
  
}


//choose which file must be translate and the translation language 
//available languages: 'en', 'de', 'es', 'fr', 'it'
//language = 'all' will create a file for each available language
//To run open terminal and write 'ts-node app.ts'
const BE = 'file_path';
const FE = 'file_path';
const AVAILABLE_LANGUAGE = ['en', 'de', 'es', 'fr', 'it'];
translateFile(FE, 'all');
