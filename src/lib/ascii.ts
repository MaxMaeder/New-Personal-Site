import figlet from "figlet";

const getAsciiWord = async (word: string): Promise<string> => {
  // @ts-ignore figlet types incorrect
  return await figlet.text(word, {
    font: "BlurVision ASCII",
  });
};

export const generateAsciiArt = async (sentence: string): Promise<string[]> => {
  const words = sentence.match(/\S+\s*/g) || [];

  return await Promise.all(words.map(async (w) => await getAsciiWord(w)));
};
