#include "ODTDocument.h"

ODTDocument::ODTDocument(std::string s, std::string c, std::string m, std::string i){
    styles = s;
    content = c;
    meta_data = m;
    images = i;
}

std::string ODTDocument::display(){
    return std::string("Styles: ") + styles + std::string("\nContent: ") + content + std::string("\nMetadata: ") + meta_data + std::string("\nImages: ") + images;
}