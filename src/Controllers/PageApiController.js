import { AboutURL, ProjectsURL} from "./EndPoints"

export async function GetBio(){
    // get response promise and once promise is fulfilled extract text data
    const fetchResult = fetch(AboutURL);
    const response = await fetchResult;
    const textData = await response.text();
    return textData;
}

export async function GetProjects(){
    // get response promise and once promise is fulfilled extract JSON object
    const fetchResult = fetch(ProjectsURL);
    const response = await fetchResult;
    const JSONObject = await response.json();
    // deserialize object and return list
    return JSONObject
}