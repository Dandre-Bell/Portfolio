import { AboutURL } from "./EndPoints"

export function GetBio(){
    const fetchResult = fetch(AboutURL)
    const response = await fetchResult;
    const textData = await response.text;
    return textData;
}