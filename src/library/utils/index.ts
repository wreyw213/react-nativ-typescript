import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * 
 * @param {*} func 
 * @param {*} delay 
 * @returns 
 * @example const handleButtonClick = runOnce(() => {
  console.log("This function will run only once in 500 milliseconds");
}, 3000);
 */
export function runOnce(func: any, delay: number) {
  let timer: any = null;
  return function (...args: any) {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
      }, delay);
      return func(...args);
    }
  };
}

export async function getDataFromAsyncStorage<T>(
  key: string,
  defaultValue: any = {},
): Promise<T> {
  const data = await AsyncStorage.getItem(key);
  return data ? JSON.parse(data) : defaultValue;
}

export async function saveDataToAsyncStorage(
  key: string,
  data: any,
): Promise<void> {
  await AsyncStorage.setItem(key, JSON.stringify(data));
}

export async function removeDataFromAsyncStorage(key: string) {
  await AsyncStorage.removeItem(key);
}

export async function clearDataFromAsync() {
  await AsyncStorage.clear();
}



export const wait = (time = 500) => new Promise(resolve => setTimeout(() => resolve(true), time));

const ranges = [
  '\ud83c[\udf00-\udfff]', // U+1F300 to U+1F3FF
  '\ud83d[\udc00-\ude4f]', // U+1F400 to U+1F64F
  '\ud83d[\ude80-\udeff]', // U+1F680 to U+1F6FF
  ' ', // Also allow spaces
].join('|');

const removeEmoji = (str: string) => str.replace(new RegExp(ranges, 'g'), '');

export const isOnlyEmojis = (str: string) => !removeEmoji(str).length && str.length < 5;

