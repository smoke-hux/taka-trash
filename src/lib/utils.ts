import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {// cn is funtion class name
    return twMerge(clsx(inputs))// clsx is going to handle the conditional logic for us
    // tailwind is going to merge the classes for us
    

}
